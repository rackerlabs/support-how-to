---
permalink: reset-your-cisco-asa-vpn-user-password-by-using-the-rackspace-portal
audit_date: '2020-06-24'
title: 'Reset your Cisco ASA VPN user password by using the Rackspace Portal'
type: article
created_date: '2020-06-24'
created_by: Derek Pranger
last_modified_date: '2022-07-07'
last_modified_by: Cat Lookabaugh
product: Cloud Networks
product_url: cloud-networks
---

This article demonstrates how to reset a Cisco&reg; Adaptive Security Appliance
(ASA) VPN user password in the MyRackspace portal.

### Prerequisites

- Cisco ASA Firewall

### Limitations

- These instructions apply to only Cisco ASA firewalls. Other networking devices
  with VPN users cannot use automation to reset a user password.

- VPN user automation currently does not allow the following modifications:

    - VPN-filters
    - Group-lock
    - Framed IP addresses

If you need any changes included in the list of limitations, open a ticket so that Rackspace Support can process your
request manually.

### Reset the password

1. Log in to the MyRackspace portal.

2. In the top navigation bar, click **Select a Product > Rackspace Dedicated**.

3. Select **Tickets > Create New Ticket**.

4. On the **Create New Ticket** page, click the **Subject** field, and in the
   drop-down menu, select **VPN User Management - add, reset, delete VPN user(s) on firewall(s)**.

5. Select the **Reset VPN user on firewall** checkbox.

6. In the **Firewall** drop-down field, select the appropriate firewalls.

    - If you have high availability (HA) firewalls, you can select only one of
      the two HA firewalls in the drop-down menu. Automation adds the user to
      both HA firewalls.

    - If you need to reset the VPN user for all firewalls on the account, ensure
      that you select all the firewalls in this field.

7. Enter the VPN username in the **VPN Username** field.

    - The VPN username is case-sensitive and requires at least three characters.

    - Do not include a question mark (?) or space ( ) in the VPN username field.

8. To create a custom password, clear the **Generate Random Password** checkbox.

9. In the **Password** field, enter a custom password.

    - The password must have at least eight characters and include uppercase,
      lowercase, numbers, and special characters.

10. Click **Create Ticket** at the bottom of the page.

    After you create the ticket, the MyRackspace Portal redirects you to your
    list of tickets. Automation runs in the background during the ticket creation,
    typically taking less than a minute to complete. After you refresh your browser,
    the ticket, *Reset VPN User Password on Firewall Request (from template)*,
    status changes to **Confirm Solved**.

11. To confirm that the password is reset, open the ticket. The password appears
    in the most recent comment.
