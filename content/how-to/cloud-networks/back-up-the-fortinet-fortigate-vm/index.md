---
permalink: back-up-the-fortinet-fortigate-vm
audit_date: '2019-03-11'
title: Back up the Fortinet Fortigate VM
type: article
created_date: '2019-3-11'
created_by: Dylan Habedank
last_modified_date: '2019-3-11'
last_modified_by: Cat Lookabaugh
product: Cloud Networks
product_url: cloud-networks
---

This article describes the standard methods of backing your full or virtual domain
(VDOM) configuration based on the
[Fortinet documentation](https://help.fortinet.com/fos50hlp/54/Content/FortiOS/fortigate-best-practices-54/Firmware/Performing_Config_Backup.htm).
Back up the Fortigate&reg; Virtual Machine (VM) by using one of the following methods:

- Web-based manager
- The Fortigate command line interface (CLI)
- Secure copy protocol (SCP)

### Web-based manager

Use the following steps to back up the Fortigate VM:

1. Navigate to the public Internet protocol (IP) address of your Fortigate VM and log in to your device.

2. In the top right of the navigation bar in the Fortigate manager, click your username.

3. Select **Configuration > Backup**.

4. Select **Local PC** and click **OK**.


**Note:** If you want to encrypt your configuration, toggle the encryption bar.
Make sure to remember your password, in case you want to restore this configuration later.


### Secure Copy Protocol

Retrieve the backups from a remote server by using SCP. The following example uses a cloud server
in the same region to back up the Fortigate VM configuration:

1. Log in to the firewall and enable SCP:

       config system global
	    set admin-scp enable 
       end

2. Allow Secure Shell (SSH) access to the port of choice. The following example uses the ServiceNet port:

       config system interface
          edit port1
            set allowaccess ssh
       end

3. Log in to a backup server and copy the backup by using SCP:

       # scp admin@10.x.x.x:sys_config fortigate_backup

**Note:** These steps assume that you have the administrator password to the Fortigate VM. Enter
this password at the prompt. Replace 10.x.x.x with the IP address of your Fortigate VM.
