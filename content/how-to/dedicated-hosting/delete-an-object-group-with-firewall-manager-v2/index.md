---
permalink: delete-an-object-group-with-firewall-manager-v2
audit_date: '2018-07-11'
title: Delete an object-group with Firewall Manager v2
type: article
created_date: '2018-07-10'
created_by: Trevor Becker
last_modified_date: '2021-07-07'
last_modified_by: Cat Lookabaugh
product: Dedicated Hosting
product_url: dedicated-hosting
---

Firewall Manager v2 is a MyRackspace Portal tool. This article describes how to
delete object-groups, an easy-to-use feature that groups and sorts similar items,
such as IP addresses, ports, or protocols.

To learn more about the tool, see [Firewall Manager v2](/support/how-to/firewall-manager-v2).

### Why should I use an object-group?

Object-groups improve the organization and readability of a firewall running
configuration. A running configuration that is easy to read and modify reduces
the chances for misconfiguration and increases your ability to troubleshoot
issues quickly.

Firewall Manager v2 refers to object-groups as *IP groups*. You can view, create,
modify, and delete any object-group on your firewall. For more information, see
the following articles:

- [View an object-group](/support/how-to/view-an-object-group-with-firewall-manager-v2)
- [Add an object-group](/support/how-to/create-an-object-group-with-firewall-manager-v2)
- [Modify an object-group](/support/how-to/modify-an-object-group-with-firewall-manager-v2)

### Delete an object-group

1. Log in to the [MyRackspace Portal](https://login.rackspace.com/) by using your
   username and password.

2. In the top navigation bar, click **Select a Product > Rackspace Dedicated**.

3. Select **Network** > **Firewall Manager v2**.

4. In the navigation pane on the left side of the panel, click the firewall for
   which you want to see object-groups.

5. Under **Rules** in the navigation pane, click **IP Groups**.

    {{<image src="ip-groups.png" alt="" title="">}}

6. Scroll through or search the object-group list and click the object-group that
   you want to delete.

7. Click **Delete Group** to make a request to remove the object-group.

8. Enter any additional information in the text box and click **Submit Ticket**.

    {{<image src="delete-object-group.png" alt="" title="">}}

The ticket generates requesting manual removal of the object-group and deletion
of any configuration items that reference the group, such as access lists, VPN
encryption domains, or even other object-groups. The ticket automatically
forwards to the appropriate Rackspace Network Security team, and a team member
performs quality checks and contacts you if anything appears to be incorrect.
