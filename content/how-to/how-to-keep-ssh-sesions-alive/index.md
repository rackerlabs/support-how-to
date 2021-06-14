---
permalink: how-to-keep-ssh-sesions-alive/
audit_date:
title: 'How to Keep SSH sessions alive'
type: article
created_date: '2021-04-20'
created_by: Ray Hernandez
last_modified_date: '2021-04-20'
last_modified_by: Ray Hernandez
product: Cloud Servers
product_url: cloud-servers
---

This article Describes the process of changing the amount of time you can have your ssh sessions. Make sure you have root access to complete the following steps

### For system-wide
The Host value can be any name you want; it is simply a label for the other settings. To enable the keep alive system-wide (root access required), edit /etc/ssh/ssh_config

>Host examplehost
    Hostname examplehost.com
    ServerAliveInterval 180
    ServerAliveCountMax 2
>

### For Client-side

To make your OpenSSH server keep all connections alive with clients add the following to /etc/ssh/sshd_config

>ClientAliveInterval 300
>ClientAliveCountMax 2


### Note:
These settings will make the SSH client or server send a null packet to the other side every 300 seconds (5 minutes), and give up if it doesn't receive any response after 2 tries, at which point the connection is likely to have been discarded anyway.

###ServerAliveCountMax

Sets the number of server alive messages, which may be sent without ssh(1) receiving any messages back from the server. If this threshold is reached while server alive messages are being sent, ssh will disconnect from the server, terminating the session.

### ServerAliveInterval

Sets a timeout interval in seconds after which if no data has been received from the server, ssh(1) will send a message through the encrypted channel to request a response from the server. The default is 0, indicating that these messages will not be sent to the server, or 300 if the BatchMode option is set. This option applies to protocol version 2 only. ProtocolKeepAlives and SetupTimeOut are Debian-specific compatibility aliases for this option.
