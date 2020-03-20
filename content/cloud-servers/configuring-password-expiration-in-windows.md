---
permalink: configuring-password-expiration-in-windows/
title: 'Configuring Password Expiration in Windows'
type: article
created_date: '2020-03-19'
created_by: Benji Ivey
last_modified_date:
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

## Information to know beforehand

* Users that are set to have their password expire (the default setting) will find that their password will expire 42 days after the password is set. You will begin recieving notifications of the expiration of the password 5 days before it is scheduled to expire.
* In Windows 7, the Local Users and Groups will only be available in the Professional, Ultimate, and Enterprise editions.
* In Windows 10, 8, and 8.1, the Local Users and Groups will only be available in the Pro and Enterprise editions.

## Methods

**Option 1: Local Users and Groups**

1. Click Start, and then click "run". You can also hit the Windows Key + R to bring up the run command.
2. Type "lusrmgr.msc" and press enter. This will bring up the Local User Manager.
3. Click on the Users folder to be brought to the list of users. Locate the user you wish to edit.
4. Right click the User, and select Properties.
5. In the General Tab, you will find a box that states "Password never expires". Check this box to have your User never have their password expire. Leave unchecked to leave on the default setting(see notes above).

**Option 2: Command Prompt**

Note: Any edition of Windows 7 and 8 can use this method.

1. Click Start, and then click "run". As above you can also use Windows Key + R to bring up the run command.
2. Type "cmd" in the run box and press enter, this will bring up the command prompt. You can also click Start and type in "cmd". You will see the command prompt program on the left hand side, where you can then launch as an Administrator should you choose to do so.
3. To turn on password expiration on windows 8.1/8/7, type the following command and press enter: wmic path Win32_UserAccount where Name='username' set PasswordExpires=false
4. To turn off password expiration on windows 8.1/8/7, type the following command and press enter: wmic path Win32_UserAccount where Name='username' set PasswordExpires=true

For this method please make sure to replace the username in the command with the actual user account name.

## Precautions

While setting your password to never expire is much simpler to deal with than resetting user passwords, you must always remember that this can bring a security risk to you. Never resetting your password is an immense security risk, as you should always cycle your passwords to minimize the chance of a hacking attempt.
