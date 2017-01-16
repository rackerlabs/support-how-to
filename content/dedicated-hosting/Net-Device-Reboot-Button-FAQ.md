---
permalink: Net-Device-Reboot-Button-FAQ/
audit_date:
title: Net Device Reboot Button FAQ
type: product
created_date: '2017-01-15'
created_by: Trevor Becker
last_modified_date: '2017-01-15'
last_modified_by: Trevor Becker
product: Dedicated Hosting
product_url: dedicated-hosting
---

# Net Device Reboot Button FAQ
The MyRackspace Portal now has a new Reboot Appliance option for Net Devices. This reboot button gives you the control and flexibility to reboot your network appliance during a maintenance window that best fits your business needs. This Reboot Appliance option will also be used in the event of security vulnerabilities of your Net Device(s). In this event,  Rackspace will prestage patched versions of software code so that you can reboot and upgrade the code version of your Net Device at will.



### **Q: What does the reboot process do?**
A: This warm-boot process reboots your network appliance. This resets all memory utilization and the device will load the pre-configured operating system from primary storage and reloads the device’s saved configuration.

 
 
### **Q: Why would I want to reboot my network appliance?**
A: In most cases, the only time a network appliance needs to be rebooted is when a new version of the operating system needs to be loaded or there is a bug in the operating system that has caused processes on the device to operate improperly. Rackspace will pre-stage the new operating system or operating system updates on the network appliance and upon the next reboot, the operating system will be updated to the staged code. Rackspace will notify you if there has been new code staged on your device so that you are aware of any pending updates.
 
 
 
### **Q: When should I reboot my network appliances?**
A: The flexibility of the “reboot button” solution is that you may execute this reboot at your discretion. Rackspace highly recommends that except in the case of emergency, you should always reboot your network appliances in a maintenance window when you expect the least impact to your production or business.



### **Q: Can I schedule the reboot?**
A: At this time, we do not have a mechanism to schedule the reboot. However, we are working with our teams to roll out this functionality in the future.



### **Q: I was notified that my network appliance is vulnerable to a bug or a security related exploit. How do I proceed?**
A: If you were notified by Rackspace that your network appliance is vulnerable to a bug or a security related exploit, you should also have been notified that the code has been staged on your network appliance and that upon the next reboot, you will be running updated code that remediates the issue.


 
### **Q: How long does a network appliance take to reboot?**
A: A network appliance reboot takes approximately 4-5 minutes. This is slightly variable based on the platform and the size of the device configuration.


 
### **Q: What will be “down” while my network appliance reboots?**
A: Every device that is located behind the network appliance will be unavailable while the device reboots, unless you have a high availability (HA) solution.

 
 
### **Q: I have an HA network appliance pair. How does this process work?**
A: Either device may own the primary device role at any time. The process will determine which unit is currently the active device and which unit currently owns the standby role. The standby unit will be rebooted first. Once the standby unit has been rebooted and is in a healthy status, the active device will be rebooted and the network traffic will be failed-over to the standby unit. Once the formerly-active unit has rebooted, the process is complete. Note that there is no need to fail back over to the former-primary device, as when it recovers, it will now assume the standby role.


 
### **Q: On my HA pair, which network appliance should I reboot?**
A: You may select EITHER of the HA network appliances for reboot. The process will determine which device owns the standby role and which device owns the primary role.


 
### **Q: On my HA pair, do I need to reboot both network appliances?**
A: No, you only need to click the reboot button for one network device in your HA pair. Once the process kicks off, both units will eventually be rebooted as part of this process.



### **Q: Will there be any “device down” alerts generated while my network appliances reboot?**
A: There should not be any alerts generated. During this process, alert suppression is put in place for any devices behind the network appliance. This alert suppression is removed once the reboot process has completed.


 
### **Q: Who can reboot my network appliance?**
A: Any contact on your account that has administrative or edit permissions on the network appliance has the ability to kick off the reboot process in the MyRack portal.

 
 
### **Q: Can I get more details on what occurs as part of the reboot process?**
A: Here is a high level list of what happens during this process:
+ A ticket is created to track the reboot process and actions
+ Boot code version is checked
+ A Backup of the configuration is performed
+ The current running configuration is saved to non-volatile memory
+ Device alert generation is suppressed
+ The device is reloaded
+ Alert suppression is lifted
+ The ticket is updated with the relevant details of the reboot, including the code version running at the time of process completion


 
### **Q: What are the risks associated with a reboot event?**
A: The biggest risk in a network appliance reboot is hardware failure. This risk can be lessened by employing a high availability (HA) solution.


 
### **Q: What if something goes wrong (like a hardware failure)?**
A: The process monitors the reboot actions. If the appliance does not recover in the expected amount of time, an emergency ticket is sent to the Rackspace Netsec ticket queue with an emergency priority. The ticket will be picked up immediately, ahead of all others, and the situation will be treated as a “network down emergency”. In the event of an HA solution, if the standby device fails the reboot process, the process will be halted and the primary device will continue to pass traffic and the failed device will be handled as stated previously.

