---
permalink: reset-the-fortigate-vm-administrator-password
audit_date: '2020-05-26'
title: Reset the Fortigate VM administrator password
type: article
created_date: '2020-05-25'
created_by: Dylan Habedank
last_modified_date: '2020-05-26'
last_modified_by: Cat Lookabaugh
product: Cloud Networks
product_url: cloud-networks
---

If you have forgotten the administrator password to your Fortigate&reg; virtual machine (VM), you can reset it by using the emergency console. This article shows you how to reset the administrator password based on the [Fortinet&reg; documentation](https://cookbook.fortinet.com/resetting-a-lost-admin-password/). 

### Reset password

**Note:** If you already have the Fortigate VM serial number, skip to step 4.

1. Navigate to the [emergency console](/support/how-to/start-a-console-session/).

2. Look for the serial number displayed in the console. It looks similar to "Serial number is FGTRAXXXXXXXXXXX."

3. If you do not see the serial in the console, you need to reboot the Fortigate VM from the [Cloud Control Panel](https://login.rackspace.com). After the reboot, you should see the serial number displayed in the console.

4. Perform a hard reboot on the server and log in with the **maintainer** user and password. The password is bcpb with the serial number of the firewall with the letters of the serial number in uppercase. For example: **bcpbFGTRAXXXXXXXXXXX**.


**Note:** You have only 14 seconds to type in the username and password. There is no indicator of when your time runs out, so it might take more than one attempt to succeed.

Have the credentials ready in a text editor so that you can copy them, but typical pasting does not work with the HTML5 console. If you want to be quick, use a third-party application or script that can type input rather than paste the credentials, such as the following applications:

- [AutoHotKey](https://www.autohotkey.com/) for Windows&reg;
- [AutoKey](https://github.com/autokey/autokey) for Linux&reg;
- [Alfred](https://www.alfredapp.com/) on MacOS&reg; (with the [Packal](https://www.packal.org/workflow/type-clipboard) workflow)

Now that you are logged into the Fortigate firewall, run the following command to reset the administrator password:

       config system admin
          edit admin
            set password <password>
       end
