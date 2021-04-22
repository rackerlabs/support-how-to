---
permalink: /windows-defender-folder-exclusion/
audit_date:
title: 'Windows Defender Folder Exclusion'
type: article
created_date: '2021-04-06'
created_by: David Fonseca
last_modified_date: '2021-04-14'
last_modified_by: Karoline Mills
product:
product_url: 
---

This article explains how to exclude files and folders from Windows Defender Antivirus scan. Adding these exclusions can help to speed up the scanning process.


## Step 1: Set the exclusion through Windows Security

1. In your Windows environment, go to _Start  > Settings  > Update & Security  > Windows Security > Virus & threat protection_

2. On the left-hand side, select _Manage settings > Exclusion > Add or remove exclusions_

3. Select _Add an exclusion_ and choose between the options _File, Folder, file types, and process._


## Step 2: Resolving the issue of intermittent removal of the folder exclusion

1. Open the _Group Policy Management Console_, right-click the _Group Policy Object_ you want to configure, and click Edit

2. Go to _Computer Configuration > Administrative templates_

3. Now, navigate to the following section: _Windows components > Microsoft Defender Antivirus > Exclusions_

4. Double-click _Path Exclusions_, and add the desired exclusions
    - Set the option to _Enabled_
    - In the  _Options_ section, click on _Show_
    - Specify each folder on its own line in the Value name column
If you are specifying a file, ensure you enter a fully qualified path to the file, including the drive letter, folder path, filename, and extension. 

4. Enter _0_ in the Value column.

5. Click _OK_

6. Double-click _Extension Exclusions_, and add the desired exclusions
    - Set the option to _Enabled_
    - In the _Options_ section, click on _Show_
    - Put in each extension you want to exclude in the Value name column
    - In the Value column, enter _0_ to exclude the extension
7. Click on _OK_

NOTE: Once the folder exclusion is set in the Windows defender console and Local GPO, the settings will not be overwritten.
