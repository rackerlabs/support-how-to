---
node_id: 3429
title: Managing the Windows Server 2012 Firewall
type: article
created_date: '2013-04-23'
created_by: Evan Nabors
last_modified_date: '2013-04-30'
last_modified_by: Evan Nabors
product: Cloud Servers
product_url: cloud-servers
---

 <span style="font-size: 1.385em; line-height: 1.538em; font-weight: bold;">Description</span>
----------------------------------------------------------------------------------------------

This article will detail how to perform the most common tasks with the
windows firewall on Windows Server 2012. This includes managing the
firewall settings and creating custom inbound and outbound firewall
rules.

Contents
--------

-   [<span style="font-size: 1.385em; line-height: 1.538em;">Managing
    Firewall Settings</span>](#manage)
-   <span style="font-size: 1.385em; line-height: 1.538em;">[Applying
    Custom Rules](#custom)</span>

<span style="font-size: 1.385em; line-height: 1.538em;">Managing Firewall Settings</span>
-------------------------------------------------------------------------------------------------

<span style="font-size: 1.385em; line-height: 1.538em;">The Windows
Firewall with Advanced Security is a host-based firewall that runs on
Windows Server 2012 and is turned on by default. Firewall settings
within Windows Server 2012 are managed from within the Windows Firewall
MMC (Microsoft Management Console). To review and set Firewall settings
perform the following:</span>

<span
style="color: #333333; font-family: arial; line-height: 18.19444465637207px;">1.
Open the **Server Manager** from the task bar.</span>

<span
style="color: #333333; font-family: arial; line-height: 18.19444465637207px;">2.
Click the **Tools menu** and select **Windows Firewall with Advanced
Security**.</span>

<span
style="color: #333333; font-family: arial; line-height: 18.19444465637207px;"><img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/firewall.png" width="747" height="531" /></span>

3\. First review the current configuration settings by selecting
**Windows Firewall Properties** from the MMC landing page. This **allows
access to modify the settings** for each of the three firewall profiles,
**Domain, Private, and Public** as well as IPSec settings.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/firewall_properties.png" width="664" height="471" />

<span style="font-size: 1.385em; line-height: 1.538em;">Applying Custom Rules</span>
--------------------------------------------------------------------------------------------

Custom Rules allow the finest level of control over inbound and outbound
traffic to your Windows Server 2012.

1\. If you have not done so already load the Windows Firewall MMC by
opening<span
style="color: #333333; font-family: arial; line-height: 18.19444465637207px;"> the
**Server Manager** from the task bar, clicking</span><span
style="color: #333333; font-family: arial; line-height: 18.19444465637207px;"> the
**Tools menu**, and selecting **Windows Firewall with Advanced
Security**.</span>

2\. Select either <span style="line-height: 1.538em;">**Inbound
Rules** or **Outbound Rules** under **Windows Firewall with Advanced
Security** on the left side of the management console. </span>

*<span style="line-height: 1.538em;">Note: This will provide a listing
on each of the currently configured firewall rules. Rules that are
currently enabled are denoted by green checkbox icon, while disabled
rules display a grey checkbox icon. Rightclicking a rule will allow you
toggle enable/disable.

</span>*

*<span
style="line-height: 1.538em;"><img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/enable_disable.png" width="732" height="520" /></span>*

3\. From the right side of either the<span
style="line-height: 1.538em;"> </span><span
style="line-height: 1.538em;">**Inbound Rules** or **Outbound
Rules **tab click **New Rule**.</span>

<span
style="line-height: 1.538em;"><img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/new_rule.png" width="734" height="522" /></span>

4\. Select **Custom** from the Rule Type radial button and click
**Next**.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/rule_type.png" width="732" height="591" />

5\. **Select the Program association** for the Custom Firewall Rule
either All programs or the path to a program and click **Next**.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/rule_program.png" width="733" height="591" />

6\. From the Protocol type field **select the protocol type** and click
**Next**.

*<span style="line-height: 1.538em;">Note: This walkthrough uses TCP on
port 80 (HTTP) for example purposes.</span>*

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/rule_protocol.png" width="733" height="590" />

7\. **Select an IP address association** for both local and remote
addresses and click **Next**.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/rule_scope.png" width="852" height="687" />

8\. Select an action to take on matching traffic and click **Next**.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/rule_action.png" width="852" height="687" />

9\. Select the profiles associated with the custom rule and click
**Next**.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/rule_profile.png" width="852" height="688" />

10\. Provide a name for your Firewall rule and an optional description
and click **Finish**.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/rule_name.png" width="851" height="688" />

11. <span style="line-height: 1.538em;">Once created the rule will be
enabled. </span><span style="line-height: 1.538em;">The firewall rule
can be found on the corresponding Rule tab, either inbound or outbound
depending on the type created. To disable or delete the rule find the
rule in the MMC, right-click it, and select either Disable Rule or
Delete.</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/custom_disable.png" width="851" height="603" />
-----------------------------------------------------------------------------------------------------------

