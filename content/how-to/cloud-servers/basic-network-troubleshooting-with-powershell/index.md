---
permalink: basic-network-troubleshooting-with-powershell/
audit_date: '2021-05-16'
title: 'Basic network troubleshooting with PowerShell'
type: article
created_date: '2021-05-05'
created_by: Dave Myers
last_modified_date: '2021-05-16'
last_modified_by: Carlos Arriaga
product: Cloud Networks
product_url: cloud-networks
---

This article help you check basic network connectivity issues by using
PowerShell cmdlets. It provides some network troubleshooting tools for
checking network connectivity and configuration.

### Prerequisites

Install Windows&reg; PowerShell&reg;.

### PowerShell syntax

Review the following guidance on PowerShell cmdlets syntax to understand
user expectations for cmdlets:

- PowerShell is not case sensitive.
- Cmdlets always use a verb-noun structure. This helps you understand the
  function of a given command.
- You can modify cmdlet output with parameters.
- Parameter names always start with a dash like **-name**, **-object**, or
  **-list**.
- The followimg comand return usage help: `Get-Help <command name> -Full`.

### PowerShell networking cmdlets functions and techniques

Use the following cmdlets to troubleshoot network issues:

#### Get-NetAdapter

This cmdlet lists all network adapters.  For example: `Get-NetAdapter  -Name "Ethernet"`.

The `-Name` argument filters for a specific network adapter in the output.
In this case, the cmdlet searches for an Ethernet adapter. You can add wildcards
to the beginning and end of argument criteria to further specify your search.

#### Test-NetConnection for a computer**

This cmdlet tests network connectivity to another computer.  For example:
`Test-NetConnection -ComputerName "Hostname or IP address"`.

You should use the hostname when testing network connectivity. If you get a
*Host not Found* error, try the command again using the IP address of the
destination. If it returns successfully, there might be an issue with DNS resolution.

#### Test-NetConnection for a port

This cmdlet tests network connectivity to a specific port on a computer.
For example: `Test-NetConnection -ComputerName "Hostname or IP address" -Port #`.

#### Get-NetAdapter or Get-DnsClientServerAddress

This cmdlet gets a DNS server address. For example:
`Get-NetAdapter -Name "Local Area Connection"`.

#### Resolve-DnsName

This cmdlet gets the DNS Server for a remote host or IP address. For example:
`Resolve-DnsName "Hostname or IP"`.

#### Get-NetRoute

This cmdlet returns the route table for all interfaces.

#### Disable-NetAdapter and Enable-NetAdapter

These cmdlets enable or diable a network interface. For example:
`Disable-NetAdapter -Name "Adapter Name"` and `Enable-NetAdapter -Name "Adapter Name"`.

#### Get-NetIPConfiguration

This cmdlet returns IP address configuration details.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
