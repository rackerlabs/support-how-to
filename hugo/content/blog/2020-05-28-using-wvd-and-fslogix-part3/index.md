---
layout: post
title: "Using Windows Virtual Desktop and FSLogix to accelerate working from home: Part 3"
date: 2020-05-28
comments: true
author: RAX Productivity Team
published: true
authorIsRacker: true
bio: "Rackspace's Microsoft® Productivity Solutions team provides best practice
solutions and expertise for complex problems spanning the Microsoft Windows
ecosystem to include Identity, Remote Work, Productivity and Collaboration. Our
team of Microsoft®-certified experts with over 20+ years of experience helps
customers choose, deploy and manage the best option to meet their unique business
needs."
categories:
    - General
metaTitle: "Using Windows Virtual Desktop and FSLogix to accelerate working from home: Part 3"
metaDescription: "The events unfolding in 2020 accelerated the adoption of remote work in ways no
one could have predicted. Consider WVD."
ogTitle: "Using Windows Virtual Desktop and FSLogix to accelerate working from home: Part 3"
ogDescription: "The events unfolding in 2020 accelerated the adoption of remote work in ways no
one could have predicted. Consider WVD."
---

This is part three of a three-part blog series on the ways Windows® Virtual Desktop
(WVD)  solves for work anywhere scenarios and provides some important
considerations for deploying the new service.

<!--more-->

This series of WVD posts includes:

- [Part one](https://developer.rackspace.com/blog/using-wvd-and-fslogix-part1/) to see what WVD is and what it solves for.
- [Part two](https://developer.rackspace.com/blog/using-wvd-and-fslogix-part2/) for more of the story and how FSLogix makes WVD easier.
- [Part three](https://developer.rackspace.com/blog/using-wvd-and-fslogix-part3/) for the gotchas and good to knows.

### Common misconceptions, potential pitfalls, and good things to know

Now that you have a good idea of the user experience that you can provide users
with WVD, let’s talk about some of the finer details of a WVD implementation that
can drive up complexity and cost of ownership over time.

#### Backups and disaster recovery

Every organization has different compliance, high availability, and disaster
recovery requirements. It isn't a question of whether you should back up your
VDI solution, but which components require backing up.

- Depending on your implementation of FSLogix and other advanced features, you
  can eliminate the need to back up the session hosts, and they can be treated
  as disposable.

- Consider backing up Personal Desktop session hosts. One solution available in Azure is to configure backups for the VMs and configure cross-region copies for redundancy.

- Depending on your FSLogix Profile Container storage solution, you can back up the SMB share content and VHDs to a different location.

#### No autoscaling by default

One of WVD's appeals is the ability to quickly scale your virtual machines in
the cloud when the need arises, but this isn't a feature that is automatically
enabled or configured with Microsoft's tools. The Spring Update doesn't address
this. To solve this gap, Microsoft does offer a scaling tool as a low-cost
automation option for customers to optimize their utilization and costs.

As mentioned in the Microsoft documentation, you can use the scaling tool to:

- Schedule VMs to start and stop based on peak and off-peak business hours.

- Scale out VMs based on the number of sessions per CPU core.

- Scale in VMs during off-peak hours, leaving the minimum number of session host VMs running.

The scaling tool uses a combination of Azure Automation PowerShell&reg; runbooks,
webhooks, and Azure Logic Apps to function. When the tool runs, Azure Logic Apps
calls a webhook to start the Azure Automation runbook. The runbook then creates
a job. For more details, check out the
[Scale session hosts using Azure Automation](https://docs.microsoft.com/en-us/azure/virtual-desktop/virtual-desktop-fall-2019/set-up-scaling-script)
Microsoft article.

#### Implementing both Remote Desktop and app virtualization

As mentioned in the app virtualization section, by default, a user is assigned
to the default Desktop Application group. One obscure limitation is that users
can only have one app group assigned per host pool. For example, if the user is
assigned the Desktop Application group in host pool A, that same user cannot be
assigned a remote app group in host pool A. You need to remove the Desktop
Application group and then assign the remote app group.

However, if the user needs to have both the Desktop Application group and a
remote app group assigned, you need to create another host pool B and assign the
remote app group to the user, so the user has the Desktop Application group
assigned in host pool A and the remote app group assigned in host pool B.

#### Anti-virus and malware

Some anti-virus and malware can cause issues with images and VMs. We have seen
issues where including the AV agent into the image causes problems with launching
the image post-sysprep. We recommend checking with your vendor for instructions
to install their agent on the WVD image before Sysprep runs. One other option
is deploying the agent with a script or management tool post bootup of each WVD
instance to avoid issues with imaging.

Microsoft has recently released a preview version of Microsoft Defender for
Windows 10 Enterprise multi-session. More details can be found at
[Microsoft Defender ATP now in preview on Windows 10 Enterprise multi-session](https://techcommunity.microsoft.com/t5/windows-virtual-desktop/microsoft-defender-atp-now-in-preview-on-windows-10-enterprise/m-p/1372007).

#### Networking

We suggest placing a domain controller in the same virtual network (VNET) or
resource group as the WVD deployment to facilitate faster and more responsive
logon times. This is especially important for the Azure NetApp files that use a
delegated subnet and need a domain controller with which to authenticate.

#### Image management

Most organizations already have a patch-management solution, and you may be wondering why you need to make modifications to your image and relaunch the host pool when you could use existing tools. Outside of Windows patches, you need to make sure that the FSLogix agent and the RDS agent and bootloader are kept up-to-date. We recommend updating your image once per month after patches are released by Microsoft in order to provide the best and most secure WVD experience. If you can address these items using existing tools, then you might avoid the need for re-deploying your host pool regularly.

For each image revision, we recommend that you create a snapshot of the disk
(essentially a backup) before running sysprep, because the imaging process renders
the VM unusable. You can take a snapshot of a disk by locating the disk for the
VM and clicking on snapshot. The snapshot is required in addition to an image
because too many sysprep operations (three) on the same image can cause Windows
to no longer activate through the out-of-box experience and you have to reset
the count and rearm the image.

After taking the snapshot, you start the imaging VM and run the **sysprep.exe**
command to generalize and shut down the VM. Creating an image of the VM in Azure
makes the instance unusable, and the VM is deleted after you complete this operation.

#### Exclusion tags during image creation

Rackspace customers that have Aviator monitoring agent extensions can run into
issues during image creation. Use exclusion tags below when creating your imaging
host to avoid this issue.

**Name**: RaxAutomation|Exclude
**Value**: Monitoring,Passport,Antimalware

![]({% asset_path 2020-05-28-using-wvd-and-fslogix-part1-and-2/Picture5.png %})

#### Exchange attribute synchronization considerations

If you are looking to implement WVD but don't have an AD synchronized using
ADConnect, you want to ensure you have an Exchange management server set up as
well. ADConnect becomes the source of authority for managing your users. This
includes the attributes associated with it after ADConnect is configured. An
Exchange management server is needed to extend the schema and allow these Exchange
attributes to be managed.

### Azure Active Directory

Currently WVD requires an on-premises AD installation with AAD Connect to manage
your user’s identities. WVD session hosts must be joined a traditional AD domain
in which the user objects exist.

Microsoft has stated they plan to have an AAD (cloud only) option available. They
hope to have it available by the end of 2020.

### Conclusion

WVD, built on industry leading cloud technologies and powered by Azure
infrastructure, provides rapid deployment, low upfront costs, and a scalable
solution that can expand to meet sudden demand. WVD isn't just a one-size-fits-all
solution and offers options, such as multi-session desktop, personal desktop,
and app virtualization, to meet your user's needs. WVD provides secure
authentications with AAD and can take advantage of a rich set of security
features such as multi-factor authentication and conditional access policies.
To get the best users experience, WVD utilizes FSLogix to provide customizable
options for giving your users a secure and familiar Windows 10 desktop experience
with "like-local" performance. This product is a game changer.

Rackspace’s Professional Services team works with your organization to assess,
design, transform, manage, and optimize, leveraging cloud architecture best
practices, to help you get the most out of your Work Anywhere Solution. Rackspace
identifies areas of opportunity and makes recommendations for the best path to
help you get your remote workforce up and running quickly. Certified Azure
architects design, build, and deploy your Azure cloud infrastructure to meet
your specific requirements for governance, operational processes, and security.
Microsoft Certified engineers build and deploy the WVD solution and guide you
through piloting and adopting these new technologies.

Microsoft is continuously working to improve this product and Rackspace will
continue sharing tips and tricks on how to effectively use Windows Virtual
Desktop in your organization.

Use the Feedback tab to make any comments or ask questions. You can also
[chat now](https://www.rackspace.com/#chat) to start the conversation.

<a class="cta blue" id="cta" href="https://www.rackspace.com/lp/work-anywhere-solution-microsoft-offer">Learn more about the Microsoft Work Anywhere solution.</a>
