---
permalink: delete-vpn-user-myrackspace-portal
audit_date: '2019-10-22'
title: Delete a VPN user in the MyRackspace Portal
type: article
created_date: '2017-10-16'
created_by: Trevor Becker
last_modified_date: '2023-01-31'
last_modified_by: Asmita Nakwa
product: Dedicated Hosting
product_url: dedicated-hosting
---

The MyRackspace Portal now offers an automated task to delete a client VPN user.
This article describes how to delete a VPN user by using a ticket template.

### Create a ticket in the MyRackspace Portal

**Step 1.** Log in to the [MyRackspace Portal](https://login.rackspace.com) by using your
   username and password.

   <img width="409" alt="Enter Login credential for Username and Password" src="/support/how-to/delete-vpn-user-myrackspace-portal/deletevpn1.png">

**Step 2.** In the top navigation bar, click **Support > Support Center**.

   <img width="941" alt="Select Support Center from top navigation bar" src="/support/how-to/delete-vpn-user-myrackspace-portal/deletevpn2.png"> 

**Step 3.** Select **VPN - add, reset, delete VPN user(s) on firewalls** from the **Common Request** menu.

   <img width="830" alt="Select the required template from the common request menu" src="/support/how-to/delete-vpn-user-myrackspace-portal/deletevpn3.png">

   - If you select **VPN - add, reset, delete VPN user(s) on firewalls**, the **Issue Details** section will appear.

   <img width="508" alt="Issue details section is viewed by selecting the template" src="/support/how-to/delete-vpn-user-myrackspace-portal/deletevpn4.png">

**Step 4.** Click the box next to **Delete VPN user on firewall** as shown in following image.

   <img width="388" alt="Checkbox the option Delete VPN user on firewall" src="/support/how-to/delete-vpn-user-myrackspace-portal/deletevpn5.png">

In the **Firewall** drop-down field, select the appropriate firewalls.

   <img width="440" alt="Select the required firewall which needs to tbe deleted" src="/support/how-to/delete-vpn-user-myrackspace-portal/deletevpn6.png">

   - If you have HA firewalls, you may select only one firewall in the drop-down menu, but the user is automatically deleted from both firewalls.

   - If you need to delete the VPN user from all firewalls on the account, ensure that you select all firewalls in this field.

**Step 5.** Enter your desired VPN username in the **VPN Username** field.

   <img width="423" alt="Enter the username credentials" src="/support/how-to/delete-vpn-user-myrackspace-portal/deletevpn7.png">

   - The VPN username is case-sensitive and requires at least three characters.

   - Do not include a question mark (?) or space ( ) within the VPN username field.

**Step 6.** Click **Submit** at the bottom of the page.

   After the ticket generates, you see your ticket list in the MyRackspace Portal. Automation runs in the background while the process creates the ticket, which typically takes less than a minute to complete.
   After you refresh your browser, the ticket *Delete VPN User on Firewall Request (from template*
   is in **Solved** status.

**Step 7.** Confirm the details about the deletion of the VPN user by opening the ticket. The details are in the most recent comment.


If you need any assistance outside of this article, open a ticket and Rackspace Support can process your request.
