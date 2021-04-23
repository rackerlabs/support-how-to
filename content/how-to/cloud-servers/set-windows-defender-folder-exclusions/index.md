---
permalink: set-windows-defender-folder-exclusions/
audit_date: '2021-04-22'
title: 'Set Windows Defender folder exclusions'
type: article
created_date: '2021-04-06'
created_by: David Fonseca
last_modified_date: '2021-04-14'
last_modified_by: Karoline Mills
product: Cloud servers
product_url: cloud server
---

This article explains how to exclude files and folders from a Windows Defender
Antivirus&reg; scan. Adding these exclusions can help to speed up the scanning
process.

### Step 1: Set the exclusion through Windows Security

1. In your Windows environment, go to **Start > Settings > Update & Security >
   Windows Security > Virus & threat protection**.

2. On the left-hand side, select **Manage settings > Exclusion > Add or remove exclusions**.

3. Select **Add an exclusion** and choose between the options: **File, Folder,
   file types, and process**.

### Step 2: Resolve intermittent removal of the folder exclusion

1. Open the **Group Policy Management Console**, right-click the **Group Policy
   Object** you want to configure and click **Edit**.

2. Go to **Computer Configuration > Administrative templates**.

3. Now, navigate to the following section: **Windows components > Microsoft
   Defender Antivirus > Exclusions**.

4. Double-click **Path Exclusions** and add the exclusions you want:
    - Set the option to **Enabled**.
    - In the **Options** section, click **Show**.
    - Specify each folder on its own line in the **Value name** column. If you are
      specifying a file, ensure you enter a fully qualified path to the file,
      including the drive letter, folder path, filename, and extension.

5. Enter `0` in the **Value** column.

6. Click **OK**

7. Double-click **Extension Exclusions**, and add the desired exclusions:
    - Set the option to **Enabled**.
    - In the **Options** section, click **Show**.
    - Enter each extension you want to exclude in the **Value name** column.
    - In the **Value** column, enter `0` to exclude the extension.

8. Click on **OK**.

**Note**: After you set the folder exclusion in the Windows Defender console and Local
GPO, nothing overwrites the settings.
