---
permalink: keep-a-server-up-to-date/
audit_date: 
title: Keep a cloud server up to date
type: article
created_date: '2017-07-31'
created_by: Shaun Crumpler
last_modified_date: '2017-08-26'
last_modified_by: Nate Archer
product: Cloud Servers
product_url: cloud-servers
---

While package updates can not completely prevent cyber attacks, compromised servers can be avoided if the servers are kept up to date with the proper security fixes. While package updates can not completely prevent cyber attacks, keeping your servers up to date should be a key component of your security posture.

This article describes how to update packages on your Rackspace public cloud server and how to keep them updated.

### Migrate away from End-of-Life (EOL) Operating Systems**

After an operating system has reached end-of-life (EOL), it is no longer supported by the OS provider, nor does it receive security updates. For example, CentOS 5, Debian 6 (Squeeze) and Ubuntu 12 LTS have reached their EOL date. Check your operating system's home page to see end-of-life dates, and make plans to migrate to newer operating systems before the end-of-life date.

### Build a new server with automatic updates enabled

If you're building a new Rackspace public cloud server, it's easy to enable automatic updates:

1. In the Rackspace Cloud control panel, click **Servers** > **Create Server**. 

3. Click **Create Server**.

4. Chose the customization options for your server such as the Server Name, Region, Image Type, Operating System, Version, and Flavor.

5. Go to the Recommended Installs section.  Check the **Operating system security patched applied on selected images** option. 

   **Note:** This option is not avaliable on some types of Cloud Servers.


### Enable automatic ppdates on existing cloud servers

If your existing Rackspace public cloud servers don't have automatic updates enabled, you can enable them manually based on your OS using the following:

#### Windows 2008

1. Connect to the Windows Server and then click on the **Start** in the lower left corner.

2. Select **Control Panel** > **System and Security**.

4. In the "Windows Update" section, click **Turn automatic updating on or off**.

5. In the drop down menu, select **Install updates automatically (recommended)**.

6. Check the box under **Recommended Updates** so that the recommended updates are automatic.  You can also check the box under "Who can install updates" to allow all users the option to install updates on the server.


#### Windows 2012

1. Connect to the Windows server and theclick on the Windows icon in the lower left corner.

2. Select **Control Panel** > **System and Security**.

3. In the "Windows Update" section, click **Turn automatic updating on or off**.

4. In the drop down menu, select **Install updates automatically (recommended)**.

5. Check the box under **Recommended Updates** so that the recommended updates are automatic.  You can also check the box under "Microsoft Update" to enable updates for other Microsoft products to be done at the same time that Windows updates are completed.


#### Debian/Ubuntu 14.04 & 16.04

1. Connect to your Debian/Ubuntu server and run `sudo apt install unattended-upgrades`.

2. Use `vim /etc/apt/apt.conf.d/50unattended-upgrades` to open the configuration file.

3. Any line beginning with "//" will be ignored when the command is run. To delete the "//" before the updates line, enter **i** and then press the down arrow to move the cursor to the // to the left of the `${distro\_id}:${distro\_codename}-update;` line.  Press the **del** key twice to delete the line.

4. Click the **esc** key, and then enter the keys `:wq` to save the configuration.  If successful, a message stating that the file was properly written appears.

5. Use `vim /etc/apt/apt.conf.d/10periodic` to set the desired recurrence time for each of the updates.  As in the previous step, click the "i" key on your keyboard to once again enter "Insert" mode.  Use the keys on the your keyboard to navigate to the number between quotes that you wish to change.  Press the **del** key twice to remove the number. Update and then enter the number of times you want the server to update each day.  

    The following example shows that three of the updates will be done each day, and the `AutocleanInterval` to clean the local download archive will be cleaned every fourteen days:

6. Click the **esc** key, and then enter the keys `:wq` to save the configuration.  If successful, a message stating that the file was properly written appears.

7. (Optional) Set up notifications for automatic package updates (time of installation, packages installed, errors during installation) by entering `sudo apt-get install apticron`

8. Enter _vim /etc/apt/apt.conf.d/50unattended-upgrades_ to configure unattended upgrades. Scroll down to the portion that has the line `//Unattended-Upgrade::Mail "root";` and then enter the **i** key. Enter the **del** key twice to remove the // at the beginning of the line.  Note that the color of the line changes. Move the cursor to the right and enter **del** key to delete `root` from in between the quotes. Enter the email you want to use in between the quotes.

9. Click the **esc** key, and then enter the keys `:wq` to save the configuration.  If successful, a message stating that the file was properly written appears.

10. Enter  _vim /etc/apticron/apticron.conf_ and scroll to the portion that begins with "EMAIL".  Click the "i" key on your keyboard, then the cursor to the right and delete the `root` located in between quotes by.  Enter the email address between the same quotes that you want notifications to be sent.

11. Click the **esc** key, and then enter the keys `:wq` to save the configuration.  If successful, a message stating that the file was properly written appears.


#### Red Hat Enterprise Linux (RHEL 6) & CentOS 6

1. Connect to your CentOS 6 or RHEL 6 server, and then run _yum –y install yum-cron_.

2. To view the yum-cron configuration, run _vi /etc/sysconfig/yum-cron_ .  By default, the configuration should be set to download and install the updates.

3. (Optional) Set up notifications for automatic package updates (time of installation, packages installed, errors during installation). Press the "i" key on your keyboard to enter "INSERT" mode unless still in it from earlier steps).  Use the arrow keys on your keyboard to move down to the section with a "MAILTO=" field. Enter the desired email after "MAILTO=".

4. Click the **esc** key, and then enter the keys `:wq` to save the configuration.  If successful, a message stating that the file was properly written appears.

6. Start the yum-cron service, run _/etc/inid.d/yum-cron start_.

7. To configure the server to start the yum-cron service during a reboot, run _chkconfig yum-cron on_


#### Red Hat Enterprise Linux 7 (RHEL 7) & CentOS 7

1. Connect to your CentOS 7 or RHEL 7 server, and then run _yum –y install yum-cron_.

2. Run _vi /etc/sysconfig/yum-cron_ to view the configuration for yum-cron.

3. Check that `download\_updates` and `apply\_updates` are set to "yes" so that automatic updates are enabled.

4. (Optional) Notifications can be set up so that the output of the yum updates is emailed to inform the user what updates completed and what updates failed. Use the arrow keys on the keyboard to move down to the section titled "emitters".  The `emit\_via` value should should be set to `stdio`. 

5. Move your cursor to the the "email" section.

6. Update the configuration to change the `email\_to` field to the email you want the output you to be sent.

7. Click the **esc** key, and then enter the keys `:wq` to save the configuration.  If successful, a message stating that the file was properly written appears.

8. Run _systemctl status yum-cron_ to check that the yum-cron service is already active. If the service is inactive, run `systemctl start yum-cron`.

9. Make sure that the yum-cron service is set to start during a reboot _systemctl list-unit-files –type=service_ Find the `yum-cron.service` process in the file and make sure it is set to `enabled`. If the process is `disabled` run _systemctl enable yum-cron_.

10. Run  _systemctl list-unit-files –type=service_ to find the yum-cron service again.  The service should not be set to `enabled`.
