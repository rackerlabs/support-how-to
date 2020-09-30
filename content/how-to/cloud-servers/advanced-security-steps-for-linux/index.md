---
permalink: advanced-security-steps-for-linux
audit_date: '2020-03-26'
title: Advanced security steps for Linux
type: article
created_date: '2019-01-25'
created_by: Rackspace Community
last_modified_date: '2020-03-26'
last_modified_by: Chris Silva
product: Cloud Servers
product_url: cloud-servers
---

This article discusses advanced security settings for a Linux&reg; server. The steps in this article describe how to modify the `GRUB` or `GRUB2` bootloader to apply password protection to your emergency console. 

**Important**: Use the steps in this article only if you have reason to believe a bad actor has gained access to your Rackspace Portal. You can use these steps as basic server security. However, these steps mainly focus on protecting your server in the case of an account-level compromise. For more information regarding basic Linux server security, refer to [Linux server security best practices](/support/how-to/linux-server-security-best-practices/).

### Emergency console security

This section describes measures to mitigate the damage if your MyCloud account is compromised. Your primary goal is to ensure that bad actors cannot use your emergency console to restart in single-user mode.

These instructions vary based on whether your distribution uses legacy `GRUB` or `GRUB2` bootloader.

#### Instructions for Red Hat Enterprise Linux 7.2 and higher distributions

Use the steps below for distributions that use Red Hat® Enterprise Linux® 7.2 and higher:

1. Run the following command:

    grub2-setpassword

2. Enter the password when prompted.

**Note:** When entering single-user mode, the username is `root`, and the password is whatever you entered when prompted.

Manual changes to the **/boot/grub2/grub.cfg** file persist when new kernel versions are installed but are lost when you regenerate **grub.cfg** by using the `grub2-mkconfig` command. Therefore, use the preceding procedure after every use of `grub2-mkconfig` to retain password protection.

#### Instructions for distributions that use GRUB2

Use the steps below for distributions that use `GRUB2`:

1. Run the following command:

       grub2-mkpasswd-pbkdf2

2. When prompted to set the password:

   a. Enter the new password.

   b. Enter the new password again.

   c. Copy the resulting encrypted password, starting at `grub.pbkdf2`.

3. Run the following command:

       vim /etc/grub.d/40_custom

4. Enter the following lines in this file:

   **Warning:** Do not modify any existing lines in the file.

       set superusers="root" password_pbkdf2 john (paste copied password here)

5. Save, exit, and then restart the system to test.

You should be able to start the system without any issue or human intervention, but
it should prompt you for a password before allowing you to edit any existing entry.

#### Instructions for distributions that use legacy GRUB

Use the steps below for distributions that use legacy `GRUB`:

1. Run the following command:

       grub-md5-crypt
       
2. When prompted to set the password:     

   a. Enter the new password.

   b. Enter the new password again.

   c. Copy the resulting encrypted password.

3. Run the following command:

       vim /boot/grub/menu.lst

4. Locate the line that begins with `timeout=`.

5. Create a new line after that line that sets `password --md5 _(paste copied password here)_`.
