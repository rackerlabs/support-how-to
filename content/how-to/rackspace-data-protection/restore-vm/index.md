---
permalink: "restore-vm"
audit_date: '2022-10-31'
type: article
title: "Restoring a VM"
created_date: '2022-10-31'
created_by: Asmita Nakwa
last_modified_date: '2022-11-01'
last_modified_by: Asmita Nakwa
product: Rackspace Data Protection
product_url: rackspace-data-protection
---

# Restoring a VM

1. Log in to [Access Rackspace Data Protection](support/how-to/access-data-protection).

2. On the left side of the screen, click **Data Protection** dropdown and then select **Recoveries** from the navigation menu.

   <img width="156" alt="Select option Recoveries from Data Protection drop down" src="/support/how-to/restore-vm/restore_vm1.png">

3. Select **Virtual Machines** >> **VMs** by clicking the blue **Recover** icon in the top right corner of the screen.

   <img width="523" alt="Click recover button to select VMs from drop down menu of Virtual Machines" src="/support/how-to/restore-vm/restore_vm2.png">

4. The new **Recovery** screen displays.

5. In the search bar, type the name of the VM or VMs that need to be recovered. This search field accepts wildcards and partial names.

   <img width="485" alt="Enter name of the VM to be recovered" src="/support/how-to/restore-vm/restore_vm3.png">

6. The recovery point can be modified by clicking the edit pencil after the VM(s) have been chosen for restoration.

   <img width="487" alt="Choose VM for restoration" src="/support/how-to/restore-vm/restore_vm4.png">

7. The protection group specific recovery points that are available will be displayed. Click the **Select Recovery Point** button after selecting your recovery point.

   <img width="335" alt="Display list of specific recovery points" src="/support/how-to/restore-vm/restore_vm5.png">

8. Click the **Next: Recover Options** button at the bottom left of the screen.

   <img width="469" alt="Select Next: Recover Options" src="/support/how-to/restore-vm/restore_vm6.png">
   
9. Configuring restore parameters is possible from the following screen.

   <img width="358" alt="Configure restore parameters" src="/support/how-to/restore-vm/restore_vm7.png">

   - By selecting the edit pencil next to Virtual Machines, you can go back to the previous screen and change your selection of the VM(s) and recovery point.

   <img width="355" alt="You can change your selection by using edit option" src="/support/how-to/restore-vm/restore_vm8.png">

   - Existing VM Handling: 

     None – Cohesity will make no changes to the original VM(s). This is the default behavior and the most common option. You can use the **Rename** option under Recovery options to ensure there are no name conflicts. VM recovery will fail if there is an existing VM with the same name. 

     Overwrite Existing VM – Choose this option only if the original VMs should be overwritten. Exercise care choosing this option, as the original VM will be deleted. 

     Keep Existing VM – This option will power down and rename the original VM. This allows the recovered VM to be powered on right away and use the original VM name without creating a conflict.     
   
   <img width="525" alt="Handling of existing VMs" src="/support/how-to/restore-vm/restore_vm9.png">

   - Recovery Options:

     - Network – Determines if the NIC will be attached to the recovered VM. 

     - Rename – Add a prefix or suffix to the recovered VM(s) name(s). 

     - Power State – Determines if the recovered VM(s) should be automatically powered on. 

     - Continue on Error – Decides if the job will attempt to continue if errors are encountered. 

     - Cluster Interface – This should remain on Auto Select 

     - Task Name – This is the name of the recovery task.

   <img width="524" alt="Details of Recovery Options" src="/support/how-to/restore-vm/restore_vm10.png">

10. Click the **Recovery** button to initiate the recovery.

11. Progress is monitored from **Recovery Screen**.

