---
permalink: troubleshoot-windows-server-networking-issues/
audit_date: '2021-05-12'
title: 'Troubleshoot Windows Server networking issues'
type: article
created_date: '2021-03-17'
created_by: Annie Ponce
last_modified_date: '2021-05-12'
last_modified_by: Rose Morales
product: Cloud servers
product_url: cloud-servers
---

Troubleshooting refers to the process of identifying problems and is more
effective than trying processes at random until you find a solution.
Troubleshooting a network enables you to target individual network components,
testing each for functions, and encourages you to document your process.

### Identify the problem

- **Gather information**: Using the network troubleshooting resources at your
   disposal, determine the current state of the network.

- **Recreate the problem**: If necessary, perform the actions on other test
   hardware or software. This helps you determine the source of your
   problem.

- **Question users (if any)**: Identify if other colleagues have the same issue.

- **Identify the symptoms**: Is it a complete loss of network connection? Is your
   network slow? Is this a network-wide issue or are you the only one
   experiencing this issue?

### Login issues

If you are experiencing issues with logging into your device, make sure to
identify hardware or network issues. After you identify these, double-check
that you are using the right username and password combination to log in.

### Find your public and local IP addresses

Use the following steps to find your IP addresses:

1. Open Windows&reg; PowerShell&reg;.

2. Enter the following command:

       (Invoke-WebRequest ifconfig.me/ip).Content

3. To find your local IP address, open the command prompt and enter the following
   `ipconfig` command:

       C:\Users\XX>ipconfig

            Windows IP Configuration

            Ethernet Adapter Local Area Connection:

            Connection-specific DNS Suffix  . :
            IPv4 Address. . . . . . . . . . . : 10.202.0.54
            Subnet Mask . . . . . . . . . . . : 255.255.255.255
            Default Gateway . . . . . . . . . :

      **Note**: `ipconfig` enables you to get the IP address information of a Windows computer.

### Command-line tools to troubleshoot your network

Remember that any of these troubleshooting methods can fail if your network
infrastructure does not respond. By using these commands, you can
gather information and identify your computer's symptoms. You can use the commands
`ping` or `tracert` with both websites and IP addresses.

* `ping`: Used to troubleshoot connectivity, reachability, and name resolution.

      ping 123.123.123.123

* `tracert`: Identifies the route a packet takes between your computer and the
  destination computer specified in the command.

      tracert www.rackspace.com

* `ipconfig /all `: Is the Internet Protocol Configuration and provides you
  with all the IP information for all the Windows network adapters.

* `netstat`: Generates displays that show network status and protocol statistics.
