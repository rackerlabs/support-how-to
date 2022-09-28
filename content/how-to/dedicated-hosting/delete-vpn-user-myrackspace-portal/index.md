---
permalink: delete-vpn-user-myrackspace-portal
audit_date: '2019-10-22'
title: Delete a VPN user in the MyRackspace Portal
type: article
created_date: '2017-10-16'
created_by: Trevor Becker
last_modified_date: '2022-09-28'
last_modified_by: Asmita Nakwa
product: Dedicated Hosting
product_url: dedicated-hosting
---

The MyRackspace Portal now offers an automated task to delete a client VPN user.
This article describes how to delete a VPN user by using a ticket template.

### Create a ticket in the MyRackspace Portal

1. Log in to the [MyRackspace Portal](https://login.rackspace.com) by using your
   username and password.

   <img width="409" alt="logincredentials" src="/support/how-to/delete-vpn-user-myrackspace-portal/deletevpn1.png">

2. In the top navigation bar, click **Support > Support Center**.

   <img width="941" alt="selectsupport" src="/support/how-to/delete-vpn-user-myrackspace-portal/deletevpn2.png"> 

3. Select **Tickets** > **Create New Ticket**.

4. On the **Create New Ticket** page, click the **Subject** text field, and in
   the drop-down menu, select **VPN User Management - add, reset, delete VPN user(s) on firewall(s)**.

   {{<image src="image003.jpeg" alt="" title="">}}

5. Check the box next to **Delete VPN user on firewall**.

6. In the **Firewall** drop-down field, select the appropriate firewalls.

   a. If you have HA firewalls, you may select only one firewall in the drop-down
   menu, but the user is automatically deleted from both firewalls.

   b. If you need to delete the VPN user from all firewalls on the account,
   ensure that you select all firewalls in this field.

7. Enter your desired VPN username in the **VPN Username** field.

   a. The VPN username is case-sensitive and requires at least three characters.

   b. Do not include a question mark (?) or space ( ) within the VPN username field.

8. Click **Create Ticket** at the bottom of the page.

   After the ticket generates, you see your ticket list in
   the MyRackspace Portal. Automation runs in the background while the process
   creates the ticket, which typically takes less than a minute to complete.
   After you refresh your browser, the ticket *Delete VPN User on Firewall Request (from template)*
   is in **Confirm Solved** status.

9. Confirm the details about the deletion of the VPN user by opening the ticket.
   The details are in the most recent comment.

   {{<image src="image004.jpeg" alt="" title="">}}

If you need any assistance outside of this article, open a ticket so that
Rackspace Support can process your request.
