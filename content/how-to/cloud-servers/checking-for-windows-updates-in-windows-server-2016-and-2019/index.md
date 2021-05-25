---
permalink: checking-for-windows-updates-in-windows-server-2016-and-2019
audit_date: '2021-05-24'
title: 'Checking for Windows Updates in Windows Server 2016 and 2019'
type: article
created_date: '2021-03-05'
created_by: Karoline Mills
last_modified_date: '2021-05-24'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to check for new Windows Updates without installing
them. This guide applies to Windows Server 2016 and 2019.

### Checking, downloading and installing new Windows Updates

1. Navigate to: **Settings** > **Update & Security** > **Windows Updates**.
2. Click the **Check for Updates** button. Windows will download and install all
   available updates.
3. The update statuses are **Downloading**, **Pending Install** and **Pending
   Restart**.
4. The server will reboot outside of the active hours, which are 8:00am –
   5:00pm, unless otherwise specified. You also have the option to schedule the
   reboot.

### Checking for new Windows Updates *without* downloading

You can check for Windows Updates without downloading or installing them by
using one of the following methods:

#### SCONFIG

1. Open Powershell, and type **sconfig**.
2. Type **6** to open the Windows Updates menu.
3. Type **a** to look for all available updates, or **r** to only search for
   recommended updates.
4. All available updates will now be listed.
5. Type **n** to close the menu without installing any updates.

#### Powershell cmdlet PSWindowsUpdate

1. Open Powershell, and use the command, this requires Administrator permissions:

    ```sh
    Install-Module -Name PSWindowsUpdate -RequiredVersion 2.1.1.2`
    ```

2. Confirm that you want to install the cmdlet by typing **Y**.
3. Once installed, type `get-windowsupdate` to see a list of all available updates.
