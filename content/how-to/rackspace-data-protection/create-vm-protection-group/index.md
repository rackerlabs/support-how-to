---
permalink: "create-vm-protection-group"
audit_date: '2022-10-26'
type: article
title: "Creating a VM Protection Group"
created_date: '2022-10-21'
created_by: Asmita Nakwa
last_modified_date: '2022-10-26'
last_modified_by: Asmita Nakwa
product: Rackspace Data Protection
product_url: rackspace-data-protection
---

# Create a VM Protection Group

1. Log in to [Access Rackspace Data Protection](support/how-to/access-data-protection).

2. On the left side of the screen, click **Data Protection** dropdown and then select **Protection** from the navigation menu.

   <img width="159" alt="From top navigation select data protection, then select protection from drop down menu" src="/support/how-to/create-vm-protection-group/create_vm_protection1.png">

3. The Protection screen will display Protection groups for your organization.

   <img width="952" alt="Displays the lists of protection groups" src="/support/how-to/create-vm-protection-group/create_vm_protection4.png">

4. Navigate to the upper right corner, click **Protect** in the blue, then choose **Virtual Machines** to create a new protection group.

   <img width="135" alt="Select Protect then select Virtual Machines" src="/support/how-to/create-vm-protection-group/create_vm_protection2.png">

5. In **New Protection** window, click **Add Objects**.

   <img width="371" alt="Select option Add Objects" src="/support/how-to/create-vm-protection-group/create_vm_protection3.png">

6. From the **Registered Source** dropdown menu, select your **VMware Environment**. 

   <img width="372" alt="Click dropdown arrow to select Registered Source" src="/support/how-to/create-vm-protection-group/create_vm_protection5.png">

7. In the Objects selection screen, you can define what objects are included in this protection group and how they are selected.

   - Objects can be manually defined by checking the individual boxes to the left of each object.

   - Automatic protection can be added at various levels in the VMware hierarchy, indicated by the blue shield to the right of objects. If auto protect is defined, all objects at that level and below in the hierarchy will be automatically protected. This includes any objects created at those protected levels in the future. Individual objects can be excluded from Auto Protect to refine selection granularity. 

   <img width="372" alt="Displays the manual selection and automatic protection" src="/support/how-to/create-vm-protection-group/create_vm_protection6.png">
   
   **Example 1:** Everything in our VMware environment should be automatically protected by this protection group, but we want to exclude the server named win-test from this protection group. We would like servers created in the future to be automatically protected by this group without the need for manual intervention.

      - In the right of your VMware source (top level), Click Auto Protect shield.
        
        <img width="372" alt="Select autoprotect shield" src="/support/how-to/create-vm-protection-group/create_vm_protection7.png">

      - You will see all objects as auto protected.

      <img width="298" alt="Display all objects are auto protected" src="/support/how-to/create-vm-protection-group/create_vm_protection8.png">

      - You can then sort by VM listing or search for the VM name(s) that you wish to exclude. Once those VMs have been located, click the blue Auto Protect shield to the left of those object(s). The shield will turn red indicating the object is excluded from Auto Protection.

      <img width="307" alt="Display list of VM" src="/support/how-to/create-vm-protection-group/create_vm_protection9.png">

   **Example 2:** If you would like to back up only the win-test server as part of this protection group. Newly created servers should not be included without being manually added to the job.

      - Sort by VM listing or search for the VM name(s) that you wish to protect. Click the checkbox next to the VMs that you wish to protect as part of this group.

      <img width="302" alt="Select VM which need to be protected" src="/support/how-to/create-vm-protection-group/create_vm_protection10.png">

8. Once the desired servers have been selected, click the **Continue** button at the bottom right of the **Add Objects** window.

9. Enter name of the protection group.

   <img width="301" alt="Enter name of the protection group" src="/support/how-to/create-vm-protection-group/create_vm_protection11.png">

10. Select a backup policy by clicking **Policy** and selecting the appropriate option from the dropdown menu.   

   <img width="409" alt="Select required policy from the dropdown menu" src="/support/how-to/create-vm-protection-group/create_vm_protection12.png">

   - Backup policies define the retention as well as the frequency. If your protection group needs to use a backup policy that does not appear in your policy list, please contact support, and ask for a new custom policy to be created for your organization.

11. Click the **More Options** option, then enter the appropriate job start time in the settings, if you want to set a start time for that job rather than taking an instant backup.     

   <img width="340" alt="Set start time for backup" src="/support/how-to/create-vm-protection-group/create_vm_protection13.png">

12. Once changes have been finalized, click the **Protect** button to save the new protection group.

    <img width="338" alt="Click the protect button" src="/support/how-to/create-vm-protection-group/create_vm_protection14.png">    
