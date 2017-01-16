---
permalink: net-device-reboot-button-faq/
audit_date:
title: Net Device Reboot Button FAQ
type: product
created_date: '2017-01-16'
created_by: Trevor Becker
last_modified_date: '2017-01-16'
last_modified_by: Trevor Becker
product: Dedicated Hosting
product_url: dedicated-hosting
---

The MyRackspace Portal now has a new "Reboot Appliance" option for Net Devices. This reboot button gives you the control and flexibility to reboot your network appliance during a maintenance window that best fits your business needs. It can also be used in the event of security vulnerabilities of your Net Device(s). In this event,  Rackspace will pre-stage patched versions of software code so that you can reboot and upgrade the code version of your Net Device at will.

### General

#### What does the reboot process do?

This warm-boot process reboots your network appliance which resets all memory utilization. The device loads the pre-configured operating system from primary storage and reloads the device’s saved configuration.


#### Why would I want to reboot my network appliance?

In most cases, the only time a network appliance needs to be rebooted is when a new version of the operating system needs to be loaded or there is a bug in the operating system that has caused processes on the device to operate improperly. Rackspace pre-stages the new operating system or the operating system updates on the network appliance. Upon the next reboot, the operating system updates to the staged code. Rackspace will notify you if there has been new code staged on your device so that you are aware of any pending updates.
 
 
#### When should I reboot my network appliances?

You can reboot your network appliances whenever you like. Rackspace highly recommends that except in the case of emergency, you should always reboot your network appliances in a maintenance window when you expect the least impact to your production or business.


#### Can I schedule the reboot?

You cannot schedule a reboot at this time. However, we are working with our teams to roll out this functionality in the future.


#### I was notified that my network appliance is vulnerable to a bug or a security related exploit. How do I proceed?

If you were notified by Rackspace that your network appliance is vulnerable to a bug or a security related exploit, you should have been notified that the code has been staged on your network appliance. Upon the next reboot, you will be running updated code that remediates the issue.


#### How long does a network appliance take to reboot?

A network appliance reboot takes approximately 4-5 minutes. This is slightly variable based on the platform and the size of the device configuration.


#### What will be “down” while my network appliance reboots?

Every device located behind the network appliance will be unavailable while the device reboots, unless you have a high availability (HA) solution.


#### Will there be any “device down” alerts generated while my network appliances reboot?

There should no alerts generated. During this process, alert suppression is put in place for any devices behind the network appliance. This alert suppression is removed once the reboot process has completed.

 
#### Who can reboot my network appliance?

Any contact on your account that has administrative or edit permissions on the network appliance has the ability to start the reboot process in the MyRack portal.

 
#### Can I get more details on what occurs as part of the reboot process?

The following events occur during this process:

- A ticket is created to track the reboot process and actions
- Boot code version is checked
- A Backup of the configuration is performed
- The current running configuration is saved to non-volatile memory
- Device alert generation is suppressed
- The device is reloaded
- Alert suppression is lifted
- The ticket is updated with the relevant details of the reboot, including the code version running at the time of process completion

 
#### What are the risks associated with a reboot event?

The biggest risk in a network appliance reboot is hardware failure. This risk can be lessened by employing a high availability (HA) solution.


#### What if something goes wrong (like a hardware failure)?

The process monitors the reboot actions. If the appliance does not recover in the expected amount of time, an emergency ticket is sent to the Rackspace Netsec ticket queue with an emergency priority. The ticket will be picked up immediately, ahead of all others, and the situation will be treated as a “network down emergency”. In the event of an HA solution, if the standby device fails the reboot process, the process will be halted and the primary device will continue to pass traffic and the failed device will be handled as stated previously.


### High-avaliabilty network appliance pair 
 
#### I have an HA network appliance pair. How does this process work?

Either device may own the primary device role at any time. The process will determine which unit is currently the active device and which unit currently owns the standby role. The standby unit will be rebooted first. Once the standby unit has been rebooted and is in a healthy status, the active device will be rebooted and the network traffic will be failed-over to the standby unit. Once the formerly-active unit has rebooted, the process is complete. Note that there is no need to fail back over to the former-primary device, as when it recovers, it will now assume the standby role.

 
#### On my HA pair, which network appliance should I reboot?

You may select either of the HA network appliances for reboot. The process will determine which device owns the standby role and which device owns the primary role.

 
####  On my HA pair, do I need to reboot both network appliances?

No, you only need to click the reboot button for one network device in your HA pair. Once the process kicks off, both units will eventually be rebooted as part of this process.

