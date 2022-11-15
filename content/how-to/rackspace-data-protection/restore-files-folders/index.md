---
permalink: "restore-files-folders"
audit_date: '2022-10-28'
type: article
title: "Restoring Files/Folders"
created_date: '2022-10-21'
created_by: Asmita Nakwa
last_modified_date: '2022-11-02'
last_modified_by: Asmita Nakwa
product: Rackspace Data Protection
product_url: rackspace-data-protection
---

1. Log in to [Access Rackspace Data Protection](support/how-to/access-data-protection).

2. On the left side of the screen, click **Data Protection** dropdown and then select **Recoveries** from the navigation menu.

   <img width="156" alt="Select option Recoveries from Data Protection drop down" src="/support/how-to/restore-files-folders/restore_files_folders1.png">

3. Select **Virtual Machines** >> **Files or Folders** by clicking the blue **Recover** icon in the top right corner of the screen.

   <img width="522" alt="Click Recover button to select Files or Folder from drop down menu of Virtual Machines" src="/support/how-to/restore-files-folders/restore_files_folders2.png">

4. The screen for **New Recovery** will appear. Two radio buttons offer several search choices. Making use of the dropdown options, you can further filter the results.

    - Searching for a filename or path across all backups is possible by choosing the Files and Folders radio button. Wildcards can be used. 

    - You can browse the server file system by using the radio button for Browse. Wildcards can be used. Type the server’s name, then press Browse to browse the file system.

    <img width="524" alt="Browse the server file by using radio button" src="/support/how-to/restore-files-folders/restore_files_folders3.png">

       - The recovery point can be adjusted in the dropdown menu at the top right of the screen.

    <img width="523" alt="Adjust recovery point" src="/support/how-to/restore-files-folders/restore_files_folders4.png">

       - File selection works like a shopping cart. If files are part of the same protection group and recovery point, they can be added to a single recovery job. Select the files that need to be recovered, then press **Save**.

    <img width="486" alt="Select the files that needs to be recovered" src="/support/how-to/restore-files-folders/restore_files_folders5.png">

5. Files are recovered by restoring them back to a server, or by creating a download link on the Cohesity portal.

   **A-** To restore files back to a server, press **Next: Recover Options**.

   <img width="562" alt="Click Next: Recover Options to restore files back to a server" src="/support/how-to/restore-files-folders/restore_files_folders6.png">

      - Restore parameters can be set as shown in following image.

   <img width="336" alt="Select any of the radio button to set the restore parameters" src="/support/how-to/restore-files-folders/restore_files_folders7.png">

       - To return to the previous screen and edit selections, press the edit pencil icon at the top right of the screen.

   <img width="373" alt="To edit the parameters click on edit icon" src="/support/how-to/restore-files-folders/restore_files_folders8.png">

      - Recover To:

         - Using the radio buttons, determine if the recovery target for this restore should be the original server, or a different server.

      - Restore Method: 

        - Auto Deploy Cohesity Agent – Cohesity will leverage VMware tools to install the Cohesity agent. This requires credentials for guest OS authentication. 

        - Use Existing Cohesity Agent – If the Cohesity agent is already installed on a server, this option will use the existing agent to perform the restore. 

        - Use VMware Tools – This option will attempt an agentless restore leveraging VMware tools. This is not recommended for large file restores due to performance limitations of VMware tools. This option also requires credentials for guest OS authentication. 

        - Recover to Original Path – Toggle this option off if you would like to specify a new location for the restored file(s).

      - Recovery Options:

        - Overwrite Existing File/Folder – This option is off by default and will prevent files from being overwritten if they already exist in the target location. 

        - Preserve File/Folder Attributes – This option is on by default and will preserve the existing file attributes from recovered files (such as hidden or read-only). 

        - Continue on Error - Continue recovery even if one of the objects encounters an error. 

        - Cluster Interface – Leave this on the default Auto Select. 

        - Task Name - This is the name of the recovery task.

      - Press the **Recover** button to initiate the recovery. Progress can be monitored from the recovery screen.

   **B-** Click the **Download Files** button to create a downloaded task..

      <img width="486" alt="Click Download Files to download the task" src="/support/how-to/restore-files-folders/restore_files_folders9.png">

     - You will be returned to the Recoveries screen. Click the corresponding recovery task.

   <img width="486" alt="Select required recovery task" src="/support/how-to/restore-files-folders/restore_files_folders10.png">        

     - Click the **Download Files** button to download the files to your local machine.

   <img width="487" alt="Download files to your local machines" src="/support/how-to/restore-files-folders/restore_files_folders11.png">

     - Progress can be monitored via local browser.


 