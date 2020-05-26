---
permalink: reset-fortigate-vm-password/
audit_date:
title: Reset the Fortigate VM Admin Password
type: article
created_date: '2019-3-01'
created_by: Dylan Habedank
last_modified_date: '2019-01-19'
last_modified_by: Dylan Habedank
product: Cloud Networks
product_url: cloud-networks
---

If you have forgotten the admin password to your Fortigate VM, you can reset it through the emergency console. This article walks through resetting the admin password based on the [Fortinet documentation](https://cookbook.fortinet.com/resetting-a-lost-admin-password/). 

### Reset Password

**Note:** If you already have the Fortigate VM serial number skip the steps 1,2, and 3

1. Navigate to the [Emergency Console](https://support.rackspace.com/how-to/start-a-console-session/)

2. Look for the serial number displayed in the console. You will see something similar to "Serial number is FGTRAXXXXXXXXXXX"

3. If you do not see the serial in the console then you will need to reboot the Fortigate VM from the [Cloud Control Panel](https://login.rackspace.com). Once the server comes up from the rebootyou should see the serial number displayed in the console.

4. The last step is is to hard reboot the server so that you can login with the **maintainer** user and password. The password is bcpb + the serial number of the firewall (letters of the serial number are in UPPERCASE format)
Example: bcpbFGTRAXXXXXXXXXXX

**Note:** You have only 14 seconds or less to type in the username and password. It might, therefore, be necessary 
to have the credentials ready in a text editor, and then copy and paste them 
into the login screen. Typical pasting does not work with the html5 console so if you want to be quick you will some third party 
application or script that can type input rather than paste. Something like [AutoHotKey](https://www.autohotkey.com/) for windows, 
[AutoKey](https://github.com/autokey/autokey) for linux, or [Alfred](https://www.alfredapp.com/) on 
MacOS (with the [Packal](https://www.packal.org/workflow/type-clipboard) workflow). There is no indicator of when your time runs out so 
it is possible that it might take more than one attempt to succeed.

Now that you are in to the Fortigate firewall you can reset the admin password with the following command

       config system admin
          edit admin
            set password <password>
       end
