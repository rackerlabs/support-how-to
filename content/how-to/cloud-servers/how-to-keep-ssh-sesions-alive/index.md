---
permalink: how-to-keep-ssh-sesions-alive/
audit_date: '2021-06-14'
title: 'How to keep SSH sessions alive'
type: article
created_date: '2021-04-20'
created_by: Ray Hernandez
last_modified_date: '2021-06-14'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to change the amount of time SSH sessions are
alive.

**Note**: You need 'root` access to complete the following steps.

### For system-wide

The Host value, which you can name anything you want, is simply a label for the other
settings. To enable the keep-alive system-wide, edit the file **/etc/ssh/ssh_config**:

>Host examplehost
    Hostname examplehost.com
    ServerAliveInterval 180
    ServerAliveCountMax 2
>

### For client-side

To make your OpenSSH server keep all connections alive with clients, add the
following to **/etc/ssh/sshd_config**:

>ClientAliveInterval 300
>ClientAliveCountMax 2

**Important**: These settings make the SSH client or server send a null
packet to the other side every 300 seconds (five minutes) and give up if it
doesn't receive any response after two tries. At that point, the system
likely discarded the connection anyway.

### ServerAliveCountMax parameter

This parameter sets the number of server alive messages, which the system might
send even if SSH1 receives no messages from the server. If the number of server
alive messages exceeds the threshold value, SSH disconnects from the server,
terminating the session.

### ServerAliveInterval parameter

This parameter sets a timeout interval in seconds. If the process receives no data
from the server after this limit, SSH1 sends a message through the encrypted channel
to request a response from the server. The default, `0`, indicates that the system
doesn't send these messages to the server, and `300` shows that you set the BatchMode
option. This option applies to protocol version 2 only. ProtocolKeepAlives and
SetupTimeOut are Debian-specific compatibility aliases for this option.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).
