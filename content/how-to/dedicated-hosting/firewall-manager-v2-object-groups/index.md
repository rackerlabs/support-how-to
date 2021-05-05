---
permalink: firewall-manager-v2-object-groups
audit_date: '2018-07-12'
title: Firewall Manager v2 object-groups
type: article
created_date: '2017-03-23'
created_by: Trevor Becker
last_modified_date: '2018-07-11'
last_modified_by: Nate Archer
product: Dedicated Hosting
product_url: dedicated-hosting
---

Firewall Manager v2 is a tool within the MyRackspace Portal. This article describes a feature within this tool - the object-group, an easy to use feature that groups and sorts like items such as Internet protocol (IP) addresses, ports, or protocols.

To learn more about the tool, see [Firewall Manager v2](/support/how-to/firewall-manager-v2).

### Why should I use an object-group?

Object-groups improve the organization and readability of a firewall's running configuration. A running configuration that is easy to read and modify reduces the chances for a misconfiguration and increases the ability to troubleshoot issues quickly.

In Firewall Manager v2, object-groups are referred to as *IP groups*. You can view, modify, add, and delete any object-group on your firewall. For more information, see the following articles:

- [View an object-group](/support/how-to/view-an-object-group-with-firewall-manager-v2)
- [Create an object-group](/support/how-to/create-an-object-group-with-firewall-manager-v2)
- [Modify an object-group](/support/how-to/modify-an-object-group-with-firewall-manager-v2)
- [Delete an object-group](/support/how-to/delete-an-object-group-with-firewall-manager-v2)

### Object-groups and access-lists rules

Object-groups are commonly used to make the configuration of a firewall's access list more easily readable and controlled, which assists in support and troubleshooting. Instead of creating individual access-list rules for each component of an object-group, you can reference an object-group in an access-list rule. For example, if an object-group contains 100 IP hosts, you can create one access-list rule that performs a required action on all the hosts in the object-group, rather than creating 100 access-list rule in the running configuration that individually specifies each host.

### Related articles

- [Firewall Manager v2 access-list theory and best practices](/support/how-to/firewall-manager-v2-access-list-theory-and-best-practices)
- [Firewall Manager v2 access-list rules](/support/how-to/firewall-manager-v2-access-list-rules)
- [Firewall Manager v2 port-objects](/support/how-to/firewall-manager-v2-port-groups)
- [Firewall Manager v2 change log](/support/how-to/firewall-manager-v2-change-log)
