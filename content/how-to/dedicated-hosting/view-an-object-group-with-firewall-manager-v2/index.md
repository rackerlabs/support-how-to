---
permalink: view-an-object-group-with-firewall-manager-v2
audit_date: '2018-07-12'
title: View an object-group with Firewall Manager v2
type: article
created_date: '2018-07-10'
created_by: Trevor Becker
last_modified_date: '2019-05-08'
last_modified_by: Stephanie Fillmon
product: Dedicated Hosting
product_url: dedicated-hosting
---

Firewall Manager v2 is a tool within the MyRackspace Portal. This article describes how to view object-groups, an easy to use feature that groups and sorts like items such as Internet protocol (IP) addresses, ports, or protocols.

To learn more about the tool, see [Firewall Manager v2](/support/how-to/firewall-manager-v2).

### Why should I use an object-group?

Object-groups improve the organization and readability of a firewall's running configuration. A running configuration that is easy to read and modify reduces the chances for a misconfiguration and increases the ability to troubleshoot issues quickly.

In Firewall Manager v2, object-groups are referred to as *IP groups*. You can view, create, modify, and delete any object-group on your firewall. For more information, see the following articles:

- [Add an object-group](/support/how-to/create-an-object-group-with-firewall-manager-v2)
- [Modify an object-group](/support/how-to/modify-an-object-group-with-firewall-manager-v2)
- [Delete an object-group](/support/how-to/delete-an-object-group-with-firewall-manager-v2)

### View object-groups

1. Log in to the [MyRackspace Portal](https://login.rackspace.com/) by using your username and password.

2. In the top navigation bar, click **Select a Product > Dedicated Hosting**.

3. Select **Network** > **Firewall Manager v2**.

4. In the navigation pane on the left side of the panel, click the firewall for which you want to see object-groups.

5. Under **Rules** in the navigation pane, click **IP Groups**.

    {{<image src="ip-groups.png" alt="" title="">}}

6. Scroll through or search the object-group list and click the appropriate object-group. The contents of the object-group are automatically displayed.

Firewall Manager v2 organizes the object-groups in case-sensitive alphabetical order. Therefore, object-group names with uppercase letters are displayed before those with lowercase letters. If you can’t locate an object-group, search for the object-group by using your browser’s search function.

You can also search the contents of an object-group. This feature enables you to quickly determine whether an IP address or subnet exists within the specified group. To use this feature, type an IP address or subnet IP in the search bar that is automatically displayed when you click the group.

### Related articles

- [Firewall Manager v2 access-list theory and best practices](/support/how-to/firewall-manager-v2-access-list-theory-and-best-practices)
- [Firewall Manager v2 access-list rules](/support/how-to/firewall-manager-v2-access-list-rules)
- [Firewall Manager v2 port-objects](/support/how-to/firewall-manager-v2-port-groups)
- [Firewall Manager v2 change log](/support/how-to/firewall-manager-v2-change-log)
