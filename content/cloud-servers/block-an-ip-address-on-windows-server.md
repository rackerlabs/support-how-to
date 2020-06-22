---
permalink: block-an-ip-address-on-windows-server/
audit_date:
title: 'Block an IP Address on Windows Server'
type: article
created_date: '2020-06-08'
created_by: Travis Gentry
last_modified_date: '2020-06-21'
last_modified_by: Travis Gentry
product: Cloud Servers
product_url: cloud-servers
---


### Block an IP Address on Windows Server

This article describes the process of blocking an IP address on Windows Server by using the Windows Firewall.

### Limitations

This task requires that the Windows Firewall be running on the server on which the IP address should be blocked. 

To ensure the Windows Firewall is running, open the **Control Panel** by clicking start, type '*control panel*' and press enter. Click on **Windows Defender Firewall** -> **Turn Windows Defender Firewall on or off**.

> **Note:** You will need to be a user with administrative privileges for the server in order to make modifications to the Windows Firewall.



### Create a Windows Firewall Rule to Block the IP

1. Log in to the server on which the IP should be blocked.

2. Press the **start** button, type '*Windows Firewall with advanced security*' and press **enter**.

3. In the left-hand pane, click on **Inbound Rules** to show the currently configured rules in the middle pane.

4. In the right-hand pane (labeled *Actions*) click **New Rule...**.

5. The *New Inbound Rule Wizard* will appear.

6. For *Rule Type*, select **Custom** and click **Next**.

7. For *Program*, select **All programs** and click **Next**.

8. For *Protocol and Ports*, select **Any** from the dropdown for *Protocol type* and click **Next**.

9. For *Scope*, under '*Which remote IP addresses does this rule apply to?*', select the radial option of **These IP addresses:**.

10. Still on the *Scope* page of the Wizard, click **Add...**.

11. Enter the IP address that you wish to block from the server here, and click **OK**.
    You can also choose to block a range of IP addresses by selecting the '*This IP address range:*' radial option.

12. Once the desired IP(s) to block are all added to the *Scope* page of the Wizard, click **Next**.

13. For *Action*, select **Block the connection** and click **Next**.

14. For *Profile*, leave all options checked and click **Next**.

15. For *Name*, give the rule a descriptive name, such as '*Blacklisted IPs*'.
    You may also enter an optional description of the rule here.

16. Click **Finish** to complete the creation of the rule.

You will now see the newly created rule with the given name in the middle *Inbound Rules* pane. You can click on the '*Name*' column header to order the rules alphabetically by name if you are having trouble locating the new rule.

If you need to disable the rule, right-click on the rule in the list and click **Disable Rule**.

If you need to modify the scope of IP addresses for the rule, right-click on the rule in the list and click **Properties**. Then click on the '*scope*' tab, make necessary changes, and click **Apply**.

### Related articles

- [Manage the Windows Server 2012 Firewall](https://support.rackspace.com/how-to/managing-the-windows-server-2012-firewall/)

- [Windows Server Security Best Practices](https://support.rackspace.com/how-to/windows-server-security-best-practices/)

- [Best Practices for Firewall Rules Configuration](https://support.rackspace.com/how-to/best-practices-for-firewall-rules-configuration/)

- [Using Security Groups](https://support.rackspace.com/how-to/using-security-groups/)
