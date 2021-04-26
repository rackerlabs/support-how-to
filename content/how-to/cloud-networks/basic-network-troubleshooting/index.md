---
permalink: basic-network-troubleshooting/
audit_date: '2021-04-28'
title: Basic Network Troubleshooting
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2021-04-28'
last_modified_by: Ana Corpus
product: Cloud Networks
product_url: cloud-networks
---

This article provides Linux&reg; commands for basic Cloud Server network troubleshooting. Access your
server in the Rackspace Cloud Control Panel and use the web console to run the commands.

### `ip addr show` command

The `ip addr show` command shows the Cloud Server's IP address configuration. In the following example,
the **eth0** and **eth1** interfaces are configured and running:

    # ip addr show
    eth0      Link encap:Ethernet  HWaddr 40:40:d9:xx:xx:xx
              inet addr:67.23.13.xx  Bcast:67.23.13.255  Mask:255.255.255.0
              inet6 addr: fe80::4240:d9ff:fe05:xxxx/64 Scope:Link
              UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
              RX packets:36564 errors:0 dropped:0 overruns:0 frame:0
              TX packets:11490 errors:0 dropped:0 overruns:0 carrier:0
              collisions:0 txqueuelen:1000
              RX bytes:48350683 (46.1 MiB)  TX bytes:1456436 (1.3 MiB)

    eth1      Link encap:Ethernet  HWaddr 40:40:a5:xx:xx:xx
              inet addr:10.176.44.xx  Bcast:10.176.63.255  Mask:255.255.224.0
              inet6 addr: fe80::4240:a5ff:fe5f:xxxx/64 Scope:Link
              UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
              RX packets:3 errors:0 dropped:0 overruns:0 frame:0
              TX packets:53 errors:0 dropped:0 overruns:0 carrier:0
              collisions:0 txqueuelen:1000
              RX bytes:230 (230.0 B)  TX bytes:7764 (7.5 KiB)

    lo        Link encap:Local Loopback
              inet addr:127.0.0.1  Mask:255.0.0.0
              inet6 addr: ::1/128 Scope:Host
              UP LOOPBACK RUNNING  MTU:16436  Metric:1
              RX packets:0 errors:0 dropped:0 overruns:0 frame:0
              TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
              collisions:0 txqueuelen:0
              RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

#### Common resolutions

Follow these steps to fix common problems on the interfaces:

1. Enter the following command:

       ifconfig

2. If **eth0** does not show an IP address, use the following command:

       ip addr show eth0 10.10.10.4 netmask 255.255.255.0 up

   In this case, **10.10.10.4** is the Cloud Server's initial configuration IP address for **eth0**.

3. If **eth0** is not present, run the following command to set the interface and to the default configuration:

       ifup eth0

Perform the same steps for **eth1** if needed.

### iptables command

`iptables` is an administration tool for configuring a firewall in Linux. 
By default, Cloud Servers have `iptables` installed but not configured. 

Enter the following command to list the firewall rules:

    iptables -L

A server with its default configuration shows the following output:

    # iptables -L
    Chain INPUT (policy ACCEPT)
    target     prot opt source               destination

    Chain FORWARD (policy ACCEPT)
    target     prot opt source               destination

    Chain OUTPUT (policy ACCEPT)
    target     prot opt source               destination

Different output might indicate a problem with the firewall.

### `route` command

Use the `route` command to view and edit the routing table. The output for `route` varies
among Linux distributions. The following output is from a Debian&reg; distribution:


    # route
    Kernel IP routing table
    Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
    67.23.13.0      *               255.255.255.0   U     0      0        0 eth0
    10.176.32.0     *               255.255.224.0   U     0      0        0 eth1
    10.191.192.0    10.176.32.1     255.255.192.0   UG    0      0        0 eth1
    10.176.0.0      10.176.32.1     255.248.0.0     UG    0      0        0 eth1
    default         67.23.13.1      0.0.0.0         UG    0      0        0 eth0

In this example:

* The first line is the **67.23.13.0** network.
* The next three lines correspond to the internal network.
* The last line is the default gateway **67.23.13.1** of the **67.23.13.0** network.

#### Common resolutions

Enter the following command to change the default gateway where **xx.xx.xx.1** is the default gateway:

    route add default gw xx.xx.xx.1

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).
