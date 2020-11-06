---
permalink: introduction-to-iptables/
audit_date: '2020-10-06'
title: Introduction to iptables
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2020-10-06'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to use IP tables for a simple firewall, and
describes the process to open up holes in your firewall to necessary
ports. An IP table is a firewall and networking tool available to
all Linux distros and operates by analyzing packets at the kernel level
as they are received.

For a comprehensive list of IP tables commands, parameters, and other
options, see the [MAN page](https://linux.die.net/man/8/iptables) and the
[IP tables how-to](https://help.ubuntu.com/community/IptablesHowTo/).

### Base ruleset

The command to list current rules is:

      sudo iptables --list

Default output is:

    Chain INPUT (policy ACCEPT)
    target     prot opt source               destination

    Chain FORWARD (policy ACCEPT)
    target     prot opt source               destination

    Chain OUTPUT (policy ACCEPT)
    target     prot opt source               destination

### Reading the ruleset

In a default install you will see three predefined *Chains*, list of rules, that
will take care of the three major activities: incoming traffic (INPUT),
forwarded traffic (FORWARD) and outgoing traffic (OUTPUT). The most important
thing to take away from the table above is that the default ruleset for that all
policies is set to **ACCEPT**.

### Policies

Available policies and other options are extensive, if you would like to know
more about them check out the [manpage](https://linux.die.net/man/8/iptables)
for IPtables. This article will only cover the most common policies:

- **Accept** is used to explicitly pass through as long as no other target rules
    apply.

- **Reject** is used to send back an error packet in response to the matched
    packet: otherwise it is equivalent to **DROP** so it is a terminating
    **TARGET**, ending rule traversal.

- **Drop** will halt a connection to a host without any communication unless
    there is a target rule that applies.

### Available options

IPtables MAN page: <https://linux.die.net/man/8/iptables>

The options recognized by iptables can be divided into several different groups:

- **Commands** specify an action to perform.
- **Parameters** set rule specifications for the commands used.
- **Other Options** can be specified, as necessary, for commands used.

### Simple firewall commands

Allow connections that are already connected to your server.

    sudo iptables -A INPUT -i eth0 -m state --state ESTABLISHED,RELATED -j ACCEPT

Allow connections on ServiceNet. Required by other Rackspace Cloud products such as Cloud Backup and Cloud Monitoring.

    sudo iptables -A INPUT -i eth1 -m state --state ESTABLISHED,RELATED -j ACCEPT

Allow connections to SSH. This command can also be used to make customizations.
The following allows all tcp connections attempts to the SSH port `22`.

      sudo iptables -I INPUT 1 -p tcp  --dport 22 -j ACCEPT

Allow connections only coming from a certain IP subnet using
[CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) (Classless
Inter Domain Routing) notation. In this example we are going to lockdown to any IP address
lying in the range of 192.168.1.0 - 192.168.1.255.

    sudo iptables -I INPUT 1 -p tcp --dport 22 -s 192.168.1.0/24 -j ACCEPT

Allow connections to HTTP `80` or HTTPS `443` from any connection.

    sudo iptables -I INPUT 1 -p tcp --dport 80 -j ACCEPT
    sudo iptables -I INPUT 1 -p tcp --dport 443 -j ACCEPT

Allow connections for FTP servers on port `21`.

    sudo iptables -I INPUT 1 -p tcp --dport 21 -j ACCEPT

Changing default policy to deny all connections, only allowed connections would
be accepted.

    sudo iptables -P INPUT DROP

  **IMPORTANT**: Run this rule after you have setup your access rules to
    allow incoming SSH connections.

### List of common ports

Using the commands above mix and match from the following list of
[common ports](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well_known_ports:_1_-_1023)
to create rules for any running server you have.

### Save your ruleset

If the server reboots for any reason or you restart IPTables, changes will be
lost since modifications are stored in volatile memory. The following commands
create a plain text file **/etc/sysconfig/iptables** with human readable syntax
and all edits to this file will be live whenever iptables restart.

- For CentOS and Fedora

      /etc/init.d/iptables save

- For the Ubuntu operating system

      iptables-save > /etc/iptables.rules

- For all other distributions

      iptables-save > /etc/sysconfig/iptables

### Summary

Hopefully from this article you can create a simple firewall to protect your
server from basic attacks. Keep in mind that IPTables is a powerful tool
that would take a book to fully go through all of its capabilities. If you need help creating more rules, see [Easy Firewall Generator for IPTables](https://easyfwgen.morizot.net/gen/).

### References and useful links

- [Ubuntu IPtables Howto](https://help.ubuntu.com/community/IptablesHowTo/)
- [Man IPtables](https://linux.die.net/man/8/iptables)
