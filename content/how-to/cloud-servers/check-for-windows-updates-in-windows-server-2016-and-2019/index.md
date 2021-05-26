---
permalink: check-for-windows-updates-in-windows-server-2016-and-2019
audit_date: '2021-05-24'
title: 'Check for Windows Updates in Windows Server 2016 and 2019'
type: article
created_date: '2021-03-05'
created_by: Karoline Mills
last_modified_date: '2021-05-24'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to check for new Windows&reg; updates without installing
them. This guide applies to Windows Server 2016 and 2019.

### Check, download, and install new Windows updates

1. Navigate to **Settings** > **Update & Security** > **Windows Updates**.
2. Click **Check for Updates**. Windows downloads and installs all
   available updates.
3. The update statuses are **Downloading**, **Pending Install**, and **Pending
   Restart**.
4. The server reboots outside of the active hours, 8:00 AM to 5:00 PM, unless
   otherwise specified. You also have the option to schedule the reboot.

### Check for new Windows updates *without* downloading

You can check for Windows updates without downloading or installing them by
using one of the following methods:

#### SCONFIG

1. Open PowerShell&reg; and type **sconfig**.
2. Type **6** to open the **Windows Updates** menu.
3. Type **a** to look for all available updates or **r** to search for only
   recommended updates.
4. All available updates now display in the list.
5. Type **n** to close the menu without installing any updates.

#### PowerShell cmdlet: PSWindowsUpdate

1. Open PowerShell and use the following command, which requires Administrator permissions:

    ```sh
    Install-Module -Name PSWindowsUpdate -RequiredVersion 2.1.1.2`
    ```

2. Confirm that you want to install the cmdlet by typing **Y**.
3. After the installation finishes, type `get-windowsupdate` to see a list of
   all available updates.
