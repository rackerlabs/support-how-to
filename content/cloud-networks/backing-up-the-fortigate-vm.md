---
permalink: backing-up-the-fortinet-fortigate-vm/
audit_date:
title: Backing up the Fortinet Fortigate VM
type: article
created_date: '2019-3-01'
created_by: Dylan Habedank
last_modified_date: '2019-01-19'
last_modified_by: Dylan Habedank
product: Cloud Networks
product_url: cloud-networks
---

The Fortigate VM can be backed up in a few different methods: web-based manager, 
Fortigate CLI, and SCP. This article describes the standard methods of 
backing your full or VDOM configuration based on the [Fortinet documentation](https://help.fortinet.com/fos50hlp/54/Content/FortiOS/fortigate-best-practices-54/Firmware/Performing_Config_Backup.htm). 

### Web-based Manager

Use the following steps to backup the Fortigate VM:

1. Navigate to the public IP address of your Fortigate VM and log in to your device.

2. In the top right of the navigation bar in the Fortigate manager, click your username.

3. Select ***Configuration > Backup***

4. Select ***Local PC*** and then click OK.


**Note:** The encryption bar can be toggled if you would like to encrypt 
your configuration. You will need to remember the password later for when 
you wish to restore this configuration.


### Secure Copy Protocol

Backups can be retreived from a remote server via the secure copy protocol. In this example we will be using a cloud server in the same region to backup the Fortigate VM configuration:

Log in to the firewall and enable scp:

    config system global
	    set admin-scp enable 
	end

Allow ssh access to the port of choice. In this example, the servicenet port will be used:

    config system interface
       edit port1
           set allowaccess ssh
    end

Log in to a backup server and copy the backup:

    # scp admin@10.x.x.x:sys_config fortigate_backup

**Note:** This assumes that you have the admin password to the Fortigate VM. You will be prompted to enter this password. Replace 10.x.x.x with the IP address of your Fortigate VM
