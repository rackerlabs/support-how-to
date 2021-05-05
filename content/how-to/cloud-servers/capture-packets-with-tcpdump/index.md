---
permalink: capture-packets-with-tcpdump
audit_date: '2020-10-12'
title: Capture packets with tcpdump
type: article
created_date: '2013-04-25'
created_by: Rose Contreras
last_modified_date: '2020-10-12'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

`tcpdump` is a powerful network debugging tool that you can use to intercept
and display packets on a network interface. An important feature of `tcpdump`
is the filter that enables you to display only the packets you want to see.

### Install tcpdump

This example uses Ubuntu&reg; 18.04, but the installation steps are
similar for other Linux&reg; distributions. Use the following command to install
`tcpdump` on a server running the Ubuntu operating system:

    sudo apt-get install tcpdump

### Use tcpdump

    sudo tcpdump [options] [filter expression]

By default, `tcpdump` captures packets on `eth0`. To specify a different interface,
use the `-i` command line flag. The following command captures all packets on the `eth1`
interface:

    sudo tcpdump -i eth1

Use the following command to listen to all UDP connections:

    sudo tcpdump udp

Use the following command to capture packets for a specific port:

    sudo tcpdump port 80

The preceding command returns all packets that have port `80` as their destination or
source port.  

Suppose you want be more specific and capture only packets with destination port 80. If
you have a web server on your cloud, you can use the folloiwng command to see
incoming packets.

    sudo tcpdump dst port 80

You can also capture packets for a specific host. The following command catches packets
coming only from IP address `1.2.3.4`:

    sudo tcpdump src host 1.2.3.4

`tcpdump` can take logical arguments such as `and` or `or`. You can use
logical statements in a `tcpdump` command. For example, the following command catches all
the Secure Shell (SSH) packets going from an SSH server to a client with IP address `1.2.3.4`:

    sudo  tcpdump "src port 22" and "dst host 1.2.3.4"

You can conveniently save raw packets to a file by using the `-w` option:

    tcpdump host 1.2.3.4 -w /home/users/demo/demo.dump

To read the saved file, use the following command:

    tcpdump -r /home/users/demo/demo.dump

### Summary

System administrators commonly use `tcpdump`, a powerful packet sniffer tool,
to solve network problems and investigate traffic. You can use
with Boolean expressions to capture the packets that you want to examine.
