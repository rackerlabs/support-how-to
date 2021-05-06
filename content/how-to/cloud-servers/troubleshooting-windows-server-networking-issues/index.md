---
permalink: troubleshooting-windows-server-networking-issues/
audit_date:
title: 'Troubleshooting Windows Server Networking Issues'
type: article
created_date: '2021-03-17'
created_by: Annie Ponce
last_modified_date: '2021-04-15'
last_modified_by: Annie Ponce
product: Cloud servers
product_url: cloud-servers
---

# **Troubleshooting Windows Server Networking Issues**

Troubleshooting refers to the process of identifying problems; it is more effective than trying processes at random until there is a solution. Troubleshooting a network allows you to target individual network components, testing each for functions, and encourages you to document your process.

## **Identify the problem**

First, it's important to identify the problem within your network. As part of this step, you should do the following:

**1. Gather information:** Using the network troubleshooting resources at your disposal, determine the current state of the network.

**2. Duplicate the problem:** If necessary, perform on another piece of test hardware or software. This will assist you in determining the source of your problem.

**3. Question Users (if any):** Identify whether this is happening to a colleague

**4. Identify the symptoms:** Is it a complete loss of network connection? Is your network slow? Is this a network-wide issue or are you the only one experiencing this issue?

## **Login Issues**

If in case you are experience issues with logging into your device, make sure to identify that there are no hardware or network issues. Once this has been cleared, double-check that you are using the right username and password combination to login.

## **How to find your Public and Local IP Address**

To find your public IP, you can open your Windows Powershell and enter the following command:

      (Invoke-WebRequest ifconfig.me/ip).Content

To find your Local IP Address, you can open your Command Prompt and enter the following command:

C:\Users\XX>ipconfig

      Windows IP Configuration

      Ethernet Adapter Local Area Connection:

      Connection-specific DNS Suffix  . :
      IPv4 Address. . . . . . . . . . . : 10.202.0.54
      Subnet Mask . . . . . . . . . . . : 255.255.255.255
      Default Gateway . . . . . . . . . :

Keep in mind `ipconfig` allows you to get the IP address information of a Windows computer.

## **Command-line Tools to troubleshoot your Network**

Keep in mind that any of these troubleshooting methods can fail if your network infrastructure is not responding. Using these commands can assist you with gathering information and identifying the symptoms your computer is experiencing. You are able to use the command `ping` and `tracert` with both websites and IPs.

The following commands can be entered into the command prompt:

* Ping: used to troubleshoot connectivity, reachability, and name resolution 

      ping 123.123.123.123

* tracert: identifies the route a packet takes between your computer and the destination computer specified in the command.

      tracert www.rackspace.com

* ipconfig/all (Internet Protocol Configuration): provides you with all the IP information for all network adapters in use by Windows.

* netstat: generates displays that show network status and protocol statistics
