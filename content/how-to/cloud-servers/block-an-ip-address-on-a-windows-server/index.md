---
permalink: block-an-ip-address-on-a-windows-server/
audit_date:
title: 'Block an IP address on a Windows Server'
type: article
created_date: '2020-06-08'
created_by: Travis Gentry
last_modified_date: '2020-06-21'
last_modified_by: Travis Gentry
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to block an IP address on a Windows Server by using the Windows Firewall.

### Limitations

To perform this task, you need to run Windows Firewall on the server that has the IP address you want to block.

To ensure the Windows Firewall is running, perform the following steps:

1. To open the **Control Panel**, click **Start**, type '*control panel*', and press **Enter**. 
2. Click **Windows Defender Firewall** -> **Turn Windows Defender Firewall on or off**.

**Note:** You must have administrative privileges for the server to modify the Windows Firewall.

### Create a Windows Firewall Rule to Block the IP

1. Log into the server on which you need to block the IP address.

2. Press the **Start** button, type **Windows Firewall with advanced security**, and press **Enter**.

3. In the left-hand pane, click on **Inbound Rules** to show the currently configured rules in the middle pane.

4. In the right-hand **Actions** pane, click **New Rule...** to open the **New Inbound Rule Wizard**.

5. For **Rule Type**, select **Custom** and click **Next**.

6. For **Program**, select **All programs** and click **Next**.

7. For **Protocol and Ports**, select **Any** from the dropdown for *Protocol type* and click **Next**.

8. For **Scope**, under **Which remote IP addresses does this rule apply to?**, select the radial option: **These IP addresses:**.

9. Still on the **Scope** page, click **Add...**.

10. Enter the IP address that you want to block from the server and click **OK**.
    You can also choose to block a range of IP addresses by selecting the **This IP address range:** radial option.

11. After you finish adding the IP addresses, click **Next**.

12. For **Action**, select **Block the connection** and click **Next**.

13. For **Profile**, leave all options checked and click **Next**.

14. For **Name**, give the rule a descriptive name, such as **Blacklisted IPs**.
    You can also enter an optional description of the rule.

15. Click **Finish**.

The newly created rule with the given name now displays in the middle **Inbound Rules** pane. To order the rules alphabetically by name, you can click on the '*Name*' column header. 

If you need to disable the rule, right-click on the rule in the list and click **Disable Rule**.

If you need to modify the scope of IP addresses for the rule, right-click the rule in the list and click **Properties**. Then click the **Scope** tab, make necessary changes, and click **Apply**.

### Related articles

- [Manage the Windows Server 2012 Firewall](/support/how-to/managing-the-windows-server-2012-firewall/)

- [Windows Server Security Best Practices](/support/how-to/windows-server-security-best-practices/)

- [Best Practices for Firewall Rules Configuration](/support/how-to/best-practices-for-firewall-rules-configuration/)

- [Using Security Groups](/support/how-to/using-security-groups/)
