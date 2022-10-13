---
permalink: add-new-vpn-user-myrackspace-portal
audit_date: '2019-10-22'
title: Add a new VPN user in the MyRackspace Portal
type: article
created_date: '2016-11-10'
created_by: Trevor Becker
last_modified_date: '2022-10-13'
last_modified_by: Asmita Nakwa
product: Dedicated Hosting
product_url: dedicated-hosting
---

Adding new client VPN users is now an automated task within the MyRackspace
Portal. This article describes how to add a new VPN user by using a Support Center.

### Create a ticket in the MyRackspace Portal

**Step 1.** Log in to the [MyRackspace Portal](https://login.rackspace.com) by using your
   username and password.

   <img width="409" alt="logincredentials" src="/support/how-to/add-new-vpn-user-myrackspace-portal/newvpn1.png">

**Step 2.** In the top navigation bar, click **Support > Support Center**.

   <img width="941" alt="selectsupport" src="/support/how-to/add-new-vpn-user-myrackspace-portal/newvpn2.png">

**Step 3.** Under **Common Request**, click **See All Templates**. The See All Templates displays list of all templates.

   <img width="958" alt="listoftemplates" src="/support/how-to/add-new-vpn-user-myrackspace-portal/newvpn3.png">

**Step 4.** From the **Common Request** menu, select **VPN User Management - add, reset, delete VPN user(s) on firewall(s)**.

   <img width="830" alt="selectrequiredtemplate" src="/support/how-to/add-new-vpn-user-myrackspace-portal/newvpn4.png">

**Step 5.** In **Issue Details** sections you can select one, multiple or all of the following VPN user management options as shown in following image.

   <img width="633" alt="selectanyormultipleusermanagement" src="/support/how-to/add-new-vpn-user-myrackspace-portal/newvpn5.png">

**Step 6.** Check the box next to **Create new VPN user on firewall**.

   <img width="408" alt="checkboxcreatenewVPN" src="/support/how-to/add-new-vpn-user-myrackspace-portal/newvpn6.png">

**Step 7.** In the **Firewall** drop-down field, select the appropriate firewall(s).

   <img width="370" alt="selectfirewall" src="/support/how-to/add-new-vpn-user-myrackspace-portal/newvpn7.png">

   a. If you need to add the VPN user to all firewalls on the account, ensure
      you select all firewalls in this field.

**Step 8.** Enter your desired VPN username in the **VPN Username** field.

   <img width="374" alt="enterVPNusername" src="/support/how-to/add-new-vpn-user-myrackspace-portal/newvpn8.png">

   a. The VPN username is case-sensitive and requires at least three characters.

   b. Do not include a question mark (?) or space ( ) within the VPN username field.

**Step 9.** The **Generate Random Password** box shows as checked by default. If you want
   to add a custom password, uncheck this box.

   After you uncheck the box, the custom password field displays.

   This password must have at least eight characters with uppercase, lowercase,
   numbers, and special characters.

   <img width="346" alt="generatepassword" src="/support/how-to/add-new-vpn-user-myrackspace-portal/newvpn9.png">   

**Step 10.** Click **Submit** at the bottom of the page.

   After the ticket generates, you see your ticket list in
   the MyRackspace Portal. Automation runs in the background while the ticket
   generates, which typically takes less than a minute to complete. After you
   refresh your browser, the ticket, *Create New VPN User on Firewall Request (from template)*,
   is in **Confirm Solved** status.

**Step 11.** Retrieve the password for your new VPN user by opening the ticket. The
    password is in the most recent comment.

   {{<image src="image002.jpeg" alt="" title="">}}

### Limitations

VPN user automation currently does not allow for the following modifications:

- VPN-filters
- Group-lock
- Framed IP addresses

If you need changes included in the list of limitations, open a ticket so that
Rackspace Support can process your request manually.
