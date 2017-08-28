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

8. To configure, use the command: _vim /etc/apt/apt.conf.d/50unattended-upgrades_ and then scroll down to the portion that has a line of `//Unattended-Upgrade::Mail "root";` and then click the "i" key on your keyboard and entering the **del** twice to remove the // at the beginning of the line.  Note that the color of the line changes.  Now, move to the right and click the "del" button to delete root from in between the quotes.   Enter the desired email between those same quotes.

9. Click the **esc** key, and then enter the keys `:wq` to save the configuration.  If successful, a message stating that the file was properly written appears.

10. Next, use the command: _vim /etc/apticron/apticron.conf_ and scroll to the portion that begins with "EMAIL".  Click the "i" key on your keyboard, then move to the right and delete the root located in between quotes by clicking the "del" on your keyboard.  Enter the email address between the same quotes that you wish for the notifications to be sent:

11. Click the **esc** key, and then enter the keys `:wq` to save the configuration.  If successful, a message stating that the file was properly written appears.


#### Red Hat Enterprise Linux (RHEL 6) & CentOS 6

1. After connecting to your CentOS 6 server, run the command: _yum –y install yum-cron_:

2. Use the command: _vi /etc/sysconfig/yum-cron_ to view the configuration for yum-cron.  By default, the configuration should be set to download and install the updates:

3. (Optional) Set up notifications for automatic package updates (time of installation, packages installed, errors during installation). Press the "i" key on your keyboard to enter "INSERT" mode unless still in it from earlier steps).  Utilize the arrow keys on the keyboard to move down to the section with a "MAILTO=" field:

4. Enter the desired email after "MAILTO=":

5. Click the "esc" key on your keyboard.  This will remove you from "INSERT" mode.  Press the keys _:wq_ to save the configuration.  When successful, a message stating that the file was properly written:

6. To start the yum-cron service, run the command: _/etc/inid.d/yum-cron start_:

7. Just starting the service will help right away, but it is not configured to start the service on server reboot.  Because of this, run the command: _chkconfig yum-cron on_


#### Red Hat Enterprise Linux 7 (RHEL 7) & CentOS 7

1. After connecting to your CentOS 6 server, run the command: _yum –y install yum-cron_:

2. Use the command: _vi /etc/sysconfig/yum-cron_ to view the configuration for yum-cron:

3. For automatic updates to be downloaded and installed, assure that "download\_updates" and "apply\_updates" are set to "yes":

4. Notifications can be set up from within the configuration so that the output of the yum updates is emailed to inform the user what was completed, and what failed if there are issues.  \*\*\*please note this step can be skipped if you do not want the notification to be emailed to you\*\*\*).  Utilize the arrow keys on the keyboard to move down to the section titled [emitters].  The "emit\_via" should equal "stdio."  If this needs to be updated, use the same method as the previous step to update:

5. Continue to parse down the page with the down arrow until you reach the [email] section:

6. Update the configuration to change the "email\_to" field to where you want the output to be sent:

7. Click the "esc" key on your keyboard.  This will remove you from "INSERT" mode.  Press the keys _:wq_ to save the configuration.  When successful, a message stating that the file was properly written:

8. The yum-cron service should be started already, but to check run the command: _systemctl status yum-cron_:

9. If it is not running (inactive), it can be started by running the command: systemctl start yum-cron:

10. Now that the service is running, it is important to assure that the process will start after a reboot.  Check if the yum-cron service is "enabled" by running the command: _systemctl list-unit-files –type=service_ and finding the yum-cron.service process.  If it is "enabled" then you are good to go:

11. If the process shows to be "disabled," run the command: _systemctl enable yum-cron_:

12. Run the command: _systemctl list-unit-files –type=service_ and find the yum-cron service again.  It should now show "enabled" and you are all set:

