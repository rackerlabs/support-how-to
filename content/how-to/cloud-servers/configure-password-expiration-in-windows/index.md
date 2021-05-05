---
permalink: configure-password-expiration-in-windows
audit_date: '2020-03-31'
title: 'Configure password expiration in Windows'
type: article
created_date: '2020-03-19'
created_by: Benji Ivey
last_modified_date: '2020-03-31'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article shows you how to configure password expiration in Microsoft&reg; Windows&reg;.  Keep the following details in mind:

- If your password is configured to expire, which is the default setting, the password expires 42 days after you set the password. Notifications of the pending password expiration begin five days before it is scheduled to expire.
- In Windows 10, 8, and 8.1, the **Local Users and Groups** is available only in the Professional and Enterprise editions.
- In Windows 7, the **Local Users and Groups** setting is available in only the Professional, Ultimate, and Enterprise editions.

### Methods

**Warning**: While setting your password to never expire is much simpler to deal with than resetting your password, remember that this introduces a significant security risk. You should always cycle your passwords to minimize the chance of a hacking attempt.

Use one of the following methods to configure the password settings.

#### Option 1: Local Users and Groups

1. Click **Start** and then click **Run**. You can also hit the Windows Key + R to bring up the `run` command.
2. Type `lusrmgr.msc` and press enter to bring up the **Local User Manager**.
3. Click on the **Users** folder to display the list of users. Locate the user you want to edit.
4. Right-click the user and select **Properties**.
5. In the **General** tab, check the box that states **Password never expires** to have the password never expire for that user. Leave the box unchecked to retain the default expiration setting of 42 days.

#### Option 2: Command prompt

**Note**: All editions of Windows 7 and 8 have this method available.

1. Click **Start** and then click **run**. You can also use Windows Key + R to bring up the `run` command.
2. Type `cmd` in the run box and press **Enter** to bring up the command prompt. You can also click **Start** and type in `cmd`. When you see the command prompt program on the left-hand side of the screen, you can launch the program as an Administrator, if you want to.
3. To turn on password expiration on Windows 7, 8, or 8.1, type the following command and press **Enter**: 

        wmic path Win32_UserAccount where Name='username' set PasswordExpires=true
        
4. To turn off password expiration on Windows 7, 8, or 8.1, type the following command and press **Enter**: 

        wmic path Win32_UserAccount where Name='username' set PasswordExpires=false

For this method, make sure to replace the `username` in the command with the actual user account name.
