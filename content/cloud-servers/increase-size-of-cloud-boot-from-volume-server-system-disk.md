---
permalink: increase-size-of-cloud-boot-from-volume-server-system-disk
audit_date:
title: Increase Size of Cloud Boot-from-Volume Server System Disk
created_date: '2019-01-23'
created_by: Rackspace Community
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
--- 

At some point in time, you may run into an issue in which the Boot Volume for a Cloud Boot from Volume Server is reaching it's capacity limit, and you're wanting to increase the size of the volume without having to build a new VM or add additional disks which are just giving you alternate storage points, as opposed to adding to your existing limit. Increasing the size of additional storage disks is fairly easy, you just unmount them from the VM, then detach from the control panel, and then clone them and attach the newer size. When it comes to the Boot Volume though, you're not given the option to detach the volume from the control panel even. This article will go over how you can get the volume detached, cloned to a larger size, and then swap the volumes out and get the VM booted.

Step 1) Shut the VM off. There's no way to get around needing to shut the VM off, afterall you will be detaching the volume that contains the operating system. There's no Shutoff option in the control panel, so for this you'll have to SSH/RDP into your server and it shut it down with it's respective shutdown method. Once it's shutoff, you'll notice after a few minutes that the status in the mycloud.rackspace.com panel switches to 'Shutoff'.

Step 2) Detach the volume from the VM while it's powered off. You'll notice that even when Shutoff the 'Detach Volume' option you'd normally use is greyed out. So, to detach the System Disk Volume you'll have to use the API call to detach it. The easiest way is to use the tool we have for our API called 'Pitchfork', which you can find here: https://pitchfork.rax.io

Within Pitchfork, login on the top right with your mycloud.rackspace.com username and API Key. If you are unsure how to get your API Key, check this page here: https://support.rackspace.com/how-to/view-and-reset-your-api-key/

Once logged into Pitchfork, click Cloud Servers from the list, and scroll down to the section titled Volumes. Within volumes, click 'GET' next to List Volumes. Then paste the UUID of your VM and hit 'Send API Call'. You'll get a Response Body that should look something like this:

* 
{
    "volumeAttachments": [
        {
            "device": "/dev/xvda", 
            "serverId": "0123abcd-1988-4eva-bad2-dabone987", 
            "id": "e5c9b775-13fe-4a1c-8f25-a2af8a99a381", 
            "volumeId": "e5c9b775-13fe-4a1c-8f25-a2af8a99a381"
        }
    ]
}

* 

In this case, we're interested in the "id", which is the same as "volumeId" but it's generally a good idea to check first with this call.

Now, you'll need to detach the volume with the Pitchfork API call called 'Unattach Volume From Server', so hit 'DELETE' and then enter your servers UUID and the "id" you got from the previous API call. Now hit 'Send API Call' this will detach the volume. You'll notice it disappear from 'Volumes' in the Cloud Server Details page for your VM.

Step 3) Now you need to size the volume up by cloning a larger version. Go back to the mycloud.rackspace.com page and into Storage > Block Storage Volumes and find the volume that was your server's System Disk. It may have a name such as 'System disk for 0123abcd-1988-4eva-bad2-dabone987' or it may be something unique. Once you've found the volume, click the actions button which looks like a gear, and click Clone Volume. This will bring up a dialogue that lets you choose the size, type, name, etc of the new cloned volume. The cost will be displayed as well so you know what you'll be paying. Once you've got what you want, click 'Clone Volume'. The box will disappear and then you can wait on the page for the notification that it's ready, or watch it clone in the list of Storage Volumes.

Step 4) Attaching the new volume back onto the VM. You'll have to use Pitchfork for this because the VM will still be in a Shutoff state and the control panel won't allow you to choose it as an attachment point. The API call in Pitchfork we want to use is 'Attach Volume To Server' so click 'POST' and then in the fields provided place the server UUID, the new volumes UUID, and then for the 'dev_assignment' you want to specify /dev/xvda. Hit 'Send API Call' when you've got those entered and now back in the mycloud.rackspace.com panel you should see that the volume is attached to your Shutoff server. 

Step 5) Reboot the VM. Starting the VM up is as simple as issuing the 'Reboot' command from in the mycloud.rackspace.com. Once it's switched to 'Active' status, you should be able to enter the VM again via SSH/RDP, or Emergency Console. 
