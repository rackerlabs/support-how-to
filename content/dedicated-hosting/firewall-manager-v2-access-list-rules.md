---
permalink: firewall-manager-v2-access-list-rules/
audit_date:
title: Firewall Manager v2 - Access-list rules
type: product
created_date: '2017-03-24'
created_by: Trevor Becker
last_modified_date: '2017-03-24'
last_modified_by: Trevor Becker
product: Dedicated Hosting
product_url: dedicated-hosting
---

Firewall Manager v2 is a new tool within the MyRackspace portal. This article describes the Access Control List (ACL) rule feature within this tool. 

To learn more about the tool, see [Firewall Manager v2](https://support.rackspace.com/how-to/firewall-manager-v2).

### Firewall Manager v2 access-list theory and best practices

**Warning:** Using this feature in Firewall Manager v2 requires prerequisite knowledge. To learn more about the prerequisite knowledge on access-list theory and best practices, see the [Firewall Manager v2 - Theory and Best Practices](https://support.rackspace.com/how-to/firewall-manager-v2-access-list-theory-and-best-practices) article.

### Location of access-list rules

1. Access Firewall Manager v2 by following the steps in the [Firewall Manager v2](https://support.rackspace.com/how-to/firewall-manager-v2) article.

2. In the navigation pane on the left side of the panel, click the firewall for which you want to see the access-lists rules.

3. Click **Rules**

  **Example 1.1:** Example location of the access-list rules in Firewall Manager v2
  <!-- Image "FWCPv2 Article 6 Image Rules" --->

### Rackspace internal lines

In order for Rackspace to manage and monitor your environment properly, we need to have some configurations in place on your Cisco firewall. These configurations contain senstive Rackspace internal data and they have been redacted from your view in the Firewall Manager v2. This Rackspace line needs to remain at the top of your access-list to prevent issues. The Firewall Manager v2 will not allow you to place custom rules above the highest redacted line.

**Example 1.2:** An example of what the redacted line looks like.
<!-- Image "FWCPv2 Article 6 Redacted Line" --->

### Access-list rules features

The Firewall Manager v2 rules has an export function. To use this feature, click on the **Export to .csv** button. You can download the .csv or open it directly from the next screen prompt.

The Rules tab also has a search bar which modifies your display based on the values you enter, such as a IP address or protocol.

### Adding an access-list rule

1. Access Firewall Manager v2 by following the steps in the [Firewall Manager v2](https://support.rackspace.com/how-to/firewall-manager-v2) article.

2. In the navigation pane on the left side of the panel, click the firewall for which you want to see access-list rules.

    **Note:** When you first login to the Firewall Manager v2, the default screen is the All Rules tab.
    
3. Navigate to the **All Rules** tab.

4. Click the **Add Rule** button

5. Fill out the **Add Rule** screen options

   **Section 1:** Details 
  
       - **Rule List** - Select the correct access-list name you wish to add an access control entry to.
  
       - **Name** - This is a required field. This name is stored in the Firewall Manager v2 only and is used for your documentation and auditing purposes.
  
       - **Rule Type** - Define either the action of permit or deny
  
   **Section 2:** Traffic coming from...
  
       - **A single IP** - Enter a host IP address or search for a device number.
  
       - **A CIDR IP** - Define a subnet range.
  
       - **A group of IPs** - (Recommended option) - Select and existing object-group. If you need to create a new object-group first, see: [Firewall Manager v2 - Object-groups](https://support.rackspace.com/how-to/firewall-manager-v2-object-groups).
  
       - **Any IP** - This option defines the source as any. Before using the any value, please refer the Best practices section in the [Firewall Manager v2 - Theory and Best Practices](https://support.rackspace.com/how-to/firewall-manager-v2-access-list-theory-and-best-practices) article. 
  
   **Section 3:** Traffic going to...
  
       - The same four options exist from section 2 above.
  
   **Section 4:** Using Protocol...
  
       - **Protocol** - Select either TCP, UDP, or IP. (IP is the entire IP suite, which includes all TCP and UDP ports plus many more. Use caution when specifying this protocol.
  
       - ** test
  
   
