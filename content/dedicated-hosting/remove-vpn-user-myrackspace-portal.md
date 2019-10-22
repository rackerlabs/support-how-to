---
permalink: delete-vpn-user-myrackspace-portal/
audit_date: '2019-10-22'
title: Delete a VPN user in the MyRackspace Portal
type: article
created_date: '2017-10-16'
created_by: Trevor Becker
last_modified_date: '2019-10-22'
last_modified_by: Trevor Becker
product: Dedicated Hosting
product_url: dedicated-hosting
---

Deleting a client VPN users is now an automated task within the MyRackspace Portal. This article describes how to delete a  VPN user using a ticket template.

### Create a ticket in the MyRackspace Portal

1. Log in to the [MyRackspace Portal](https://login.rackspace.com) by using your username and password.

2. In the top navigation bar, click **Select a Product > Dedicated Hosting**.

3. Select **Tickets** > **Create New Ticket**.

4. On the **Create New Ticket** page, click the **Subject** text field, and in the drop down menu, select **VPN User Management - add, reset, delete VPN user(s) on firewall(s)**.

   <IMAGE #1 SENT IN EMAIL TO CAT LOOKABAUGH ON 10-22-2019>

5. Check the box next to **Delete VPN user on firewall**.

6. In the **Firewall** dropdown field, select the appropriate firewall(s).

   a. If you have HA firewalls, you may select only one firewall in the dropdown. Automation will delete the user to both firewalls. 
   
   b. If you need to delete the VPN user to all firewalls on the account, ensure you select all firewalls in this field.

7. Enter your desired VPN username in the **VPN Username** field.

   a. The VPN username is case-sensitive and require at least 3 characters.
   
   b. Do not include the question mark (?) or a space ( ) within the VPN username field.

8. Click the **Create Ticket** button at the bottom of the page.   
   
   After the ticket is created, you are redirected back to your ticket list in the MyRackspace Portal. Automation runs in the background while the ticket is created, which typically takes less than a minute to complete. After you refresh your browser, the ticket *Delete VPN User on Firewall Request (from template)* is in **Confirm Solved** status.

9. Confirm the details about the deletion of the VPN user by opening the ticket. The details are in the most recent comment.

   <IMAGE #2 SENT IN EMAIL TO CAT LOOKABAUGH ON 10-22-2019>

If you need any assistance outside of this article, open a ticket so that Rackspace Support can process your request manually.
