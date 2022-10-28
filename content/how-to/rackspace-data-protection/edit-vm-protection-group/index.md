---
permalink: "edit-vm-protection-group"
audit_date: '2022-10-28'
type: article
title: "Editing a VM Protection Group"
created_date: '2022-10-21'
created_by: Asmita Nakwa
last_modified_date: '2022-10-28'
last_modified_by: 
product: Rackspace Data Protection
product_url: edit-vm-protection-group
---

# Editing a VM Protection Group

1. Log in to [Access Rackspace Data Protection](support/how-to/access-data-protection).

2. On the left side of the screen, click **Data Protection** dropdown and then select **Protection** from the navigation menu.

   <img width="138" alt="Select Data Protection" src="/support/how-to/edit-vm-protection-group/edit_vm_protection1.png">

3. The Protection screen will display your organization's Protection groups.

   <img width="952" alt="Displays the lists of protection groups" src="/support/how-to/edit-vm-protection-group/edit_vm_protection2.png">

4. Click the three vertical (call out 1) dots next to the desired protection group to bring up the menu, then select Edit (call out 2).

   <img width="565" alt="Display the menu of protection group" src="/support/how-to/edit-vm-protection-group/edit_vm_protection3.png">

5. The **Edit Protection** window will be displayed.

   <img width="329" alt="When you click edit icon, edit protection screen displays" src="/support/how-to/edit-vm-protection-group/edit_vm_protection4.png">

6. Click the edit pencil in the **Objects** section to edit the servers that this group has protected.

   <img width="329" alt="Click edit to edit the servers" src="/support/how-to/edit-vm-protection-group/edit_vm_protection5.png">

7. In the **Objects** selection screen, you can define what objects are included in this protection group and how they are selected.

   - Objects can be manually defined by checking the individual boxes to the left of each object. 

   - Automatic protection can be added at various levels in the VMware hierarchy, indicated by the blue shield to the right of objects. If auto protection is defined, all objects at that level and below in the hierarchy will be automatically protected. This includes any objects created at those protected levels in the future. Individual objects can be excluded from Auto Protect to refine selection granularity.

      - To enable auto protect, click the auto protect shield to the right of your VMware source (top level is used in the example, but auto protect can be defined at lower levels in the hierarchy if desired).  

   <img width="450" alt="edit_vm_protection6" src="/support/how-to/edit-vm-protection-group/edit_vm_protection6.png">

      - All objects will now be shown as auto protected. To save changes to the selected objects, click the blue **Save Selection** button.

   <img width="452" alt="All objects listed are auto protected" src="/support/how-to/edit-vm-protection-group/edit_vm_protection7.png">

   - To exclude a server from an auto protect group. 

     - Check the name(s) of the VMs you want to disable. Click the blue auto protect shield to the left of those objects once those VMs have been identified. The shield will change to red to show that the object is no longer covered by automatic protection. To save changes to the selected objects, click the blue **Save Selection** button.

   <img width="445" alt="Exclude server from auto protect group" src="/support/how-to/edit-vm-protection-group/edit_vm_protection8.png">

   - To add or remove servers to a job that manually defines objects.

     - Sort by VM listing or search for the VM name(s) that you wish to protect or exclude. Click the checkbox next to VMs to add or remove them from being protected as part of this group.

   <img width="454" alt="Add or remove servers that manually that defines the object" src="/support/how-to/edit-vm-protection-group/edit_vm_protection9.png">

8. The additional fields can be updated as needed.

   - Protection Group Name
     You can change the name of the protection group as shown in following image.

   <img width="328" alt="Change name of the protection group" src="/support/how-to/edit-vm-protection-group/edit_vm_protection10.png">

   - Policy
     A backup policy can be changed by selecting a new policy from the dropdown menu. Note that changing a policy will only affect job runs from the time of the change forward. Retention will be unchanged for backups that ran prior to the policy change.

     Backup policies define backup retention as well as the frequency. If your protection group needs to use a backup policy that does not appear in your policy list, then contact support, and ask for a new custom policy to be created for your organization.

   <img width="328" alt="Change of policy backup" src="/support/how-to/edit-vm-protection-group/edit_vm_protection11.png">

   - Start Time
     Backup start time can be defined for protection groups set to run daily jobs as shown in following image.

   <img width="328" alt="Setting of start time for protection groups" src="/support/how-to/edit-vm-protection-group/edit_vm_protection12.png">
     













      


