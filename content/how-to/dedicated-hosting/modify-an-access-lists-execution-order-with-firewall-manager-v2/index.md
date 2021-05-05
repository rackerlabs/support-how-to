---
permalink: modify-an-access-lists-execution-order-with-firewall-manager-v2
audit_date: '2018-07-18'
title: Modify an access-list's execution order with Firewall Manager v2
type: article
created_date: '2017-03-24'
created_by: Nate Archer
last_modified_date: '2018-07-18'
last_modified_by: Nate Archer
product: Dedicated Hosting
product_url: dedicated-hosting
---

Cisco firewalls execute access-list rules in order from first to last. If a customer request matches a rule, Cisco firewalls stop processing the request and perform the action.

Firewall Manager v2 always adds new access-list rules to the end of the access-list, so sometimes you need to change the execution order of the rules. This article provides more details about the execution of an access-list's rule order and how to modify that order.

### Why use access-lists?

Access control lists (ACLs), or *access-lists*, enable Cisco firewalls to filter traffic. The security of your Rackspace environment begins at your Cisco firewall. Misconfigurations in network access policies on your firewall can lead to unwanted network exposure and potential compromise.

The access-lists control the traffic that attempts to enter the internal networks from an external, unsecured network. If access-lists are not used, the Cisco firewall's default security policy of _security-levels_ is active, which does not provide the highest level of network security.

An access control entry (ACE) is an individual entry in an ACL. ACEs are referred to as _rules_ in Firewall Manager v2. The Cisco firewall allows you to configure only one access-list per interface per direction. This access-list can contain as many ACEs, or rules, as necessary.

For more information about how to view, add, and delete access-lists, see the following articles:

- [View an access-list rule](/support/how-to/view-an-access-list-rules-with-firewall-manager-v2)
- [Add an access-list rule](/support/how-to/add-an-access-list-rule-with-firewall-manager-v2)
- [Delete an access-list rule](/support/how-to/delete-an-access-list-rule-with-firewall-manager-v2)

### Rule order and execution

Cisco firewalls use line numbers added to ACEs to identify the execution order of the access-list. When you create a new access-list rule in Firewall Manager v2, the rule is added to the end of the access-list by default. Depending on the content of the access-list, this default action might or might not be what you intend to configure. For example, if an encompassing deny rule is above a newly created rule, that deny rule prevents the new rule from triggering.

Therefore, you often need to place an access-list rule in a customized location within the access-list.

Cisco firewalls also use a fail-close approach that means that there is an implicit deny all rule at the end of each access-list. If traffic is not explicitly permitted, then it is implicitly denied.

### Modify access-list rule order

**Warning:** Because of a Cisco limitation, when you change the execution order of a rule, the rule is temporarily removed and then re-added. Do not change the execution order of a rule unless a momentary change in access for that rule is acceptable.

1. Access Firewall Manager v2 by following the steps in the [Firewall Manager v2](/support/how-to/firewall-manager-v2) article.

2. In the navigation pane on the left side of the panel, click the firewall for which you want to see access-list rules.

3. Under **Rules**, click **All Rules**.

    {{<image src="image-rules.png" alt="" title="">}}

4. In the navigation pane on the left side of the panel, click the firewall for which you want to modify the execution order of the access-list's rules.

5. Click the gear icon next to the line number of the rule that you want to move, and select **Change Order**.

6. Select the **Change order** option.

    {{<image src="image-line-number.png" alt="" title="">}}

7. Specify the line number to which to move this entry to.

   **Note:** Firewall Manager v2 does not allow you to place rules above the highest hidden Rackspace internal line.

### Related articles

- [Firewall Manager v2 object-groups](/support/how-to/firewall-manager-v2-object-groups)

   - [View an object-group](/support/how-to/view-an-object-group-with-firewall-manager-v2)
   - [Create an object-group](/support/how-to/create-an-object-group-with-firewall-manager-v2)
   - [Modify an object-group](/support/how-to/modify-an-object-group-with-firewall-manager-v2)
   - [Delete an object-group](/support/how-to/delete-an-object-group-with-firewall-manager-v2)

- [Firewall Manager v2 port-objects](/support/how-to/firewall-manager-v2-port-groups)
- [Firewall Manager v2 change log](/support/how-to/firewall-manager-v2-change-log)
- [Firewall Manager v2 access-list theory and best practices](/support/how-to/firewall-manager-v2-access-list-theory-and-best-practices)
