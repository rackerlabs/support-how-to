---
permalink: block-an-ip-address-on-a-windows-server/
audit_date: '2021-03-31'
title: 'Block an IP address on a Windows Server'
type: article
created_date: '2020-06-08'
created_by: Travis Gentry
last_modified_date: '2021-03-31'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to block an IP address on a Windows Server by using
the Windows Firewall.

### Limitations

Windows Firewall needs to be running on the server. To ensure the Windows
Firewall is running, perform the following steps:

1. Click **Start**, type `control panel`, and click **Enter**.
2. Click **Windows Defender Firewall** > **Turn Windows Defender Firewall on or off**.

**Note:** You must have administrative privileges for the server to modify the
Windows Firewall.

### Create a Windows Firewall Rule to Block the IP

1. Log in to the server on which you need to block the IP address.
2. Click **Start**, type `Windows Firewall with advanced security`,
   and press **Enter**.
3. In the left-hand pane, click **Inbound Rules** to show the currently
   configured rules in the middle pane.

4. In the right-hand pane, click **Actions** >**New Rule...**.

    - For **Rule Type**, select **Custom** and click **Next**.
    - For **Program**, select **All programs** and click **Next**.
    - For **Protocol and Ports**, select **Any** from the **Protocol Type** dropdown
      and click **Next**.
    - For **Scope**:
       - under **Which remote IP addresses does this rule apply to?**,
         select the radial option: **These IP addresses:**.
       - Click **Add...**.
       - Enter the IP address that you want to block from the server and click
          **OK**. You can also choose to block a range of IP addresses by
          selecting the **This IP address range:** radial option.

5. After you finish adding the IP addresses, click **Next**.
6. For **Action**, select **Block the connection** and click **Next**.
7. For **Profile**, leave all options checked and click **Next**.
8. For **Name**, give the rule a descriptive name, such as **Blacklisted IPs**.
    You can also enter an optional description of the rule.
9. Click **Finish**.

The newly created rule with the given name now displays in the middle **Inbound
Rules** pane. To order the rules alphabetically by name, you can click on the
**Name** column header.

If you need to disable the rule, right-click on the rule in the list and click
**Disable Rule**.

If you need to modify the scope of IP addresses for the rule, right-click the
rule in the list and click **Properties**. Then click the **Scope** tab, make
necessary changes, and click **Apply**.

### Related articles

- [Manage the Windows Server 2012 Firewall](/support/how-to/managing-the-windows-server-2012-firewall/)

- [Windows Server Security Best Practices](/support/how-to/windows-server-security-best-practices/)

- [Best Practices for Firewall Rules Configuration](/support/how-to/best-practices-for-firewall-rules-configuration/)

- [Using Security Groups](/support/how-to/using-security-groups/)
