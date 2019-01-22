---
permalink: using-firewalld-on-centos-7
audit_date:
title: Using Firewalld on CentOS 7
created_date: '2019-01-22'
created_by: Rackspace Community
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

iptables has been removed from CentOS 7 and Firewalld is the replacing firewall. I have found the syntax is more user friendly in terms of phrases used. This post will show you how to ensure its running, started on boot, and how to create persistent and flexible rules 
** NOTE ** 
Fedora also uses Firewalld, so all commands will work in Fedora image Rackspace provides.

### Basic Concepts in Firewalld

Firewalld uses something called 'zones' to manage groups of rules. Zones are attached to network interfaces and dictate the traffic that is allow, or denied based on that network. This might be uesful to have a very strict firewall on your public interface, but a more relaxed for your Cloud Network interface. It is useful to be familiar with the general idea behind each of the pre-defined zones for firewalld. In order from least trusted to most trusted, the pre-defined zones within firewalld are:
* drop: The lowest level of trust. All incoming connections are dropped without reply and only outgoing connections are possible.
* block: Similar to the above, but instead of simply dropping connections, incoming requests are rejected with an icmp-host-prohibited or icmp6-adm-prohibited message.
* public: Represents public, untrusted networks. You don't trust other computers but may allow selected incoming connections on a case-by-case basis.
* external: External networks in the event that you are using the firewall as your gateway. It is configured for NAT masquerading so that your internal network remains private but reachable.
* internal: The other side of the external zone, used for the internal portion of a gateway. The computers are fairly trustworthy and some additional services are available.
* dmz: Used for computers located in a DMZ (isolated computers that will not have access to the rest of your network). Only certain incoming connections are allowed.
* work: Used for work machines. Trust most of the computers in the network. A few more services might be allowed.
* home: A home environment. It generally implies that you trust most of the other computers and that a few more services will be accepted. trusted: Trust all of the machines in the network. The most open of the available options and should be used sparingly. To use the firewall, we can create rules and alter the properties of our zones and then assign our network interfaces to whichever zones are most appropriate.
Starting the Firewall and enabling on boot

This should be default behaviour, but here are the commands. If the firewalld is already running and enabled, this won't effect that.
$ sudo systemctl enable firewalld
$ sudo systemctl start firewalld
and you can easily check if the firewall is running, by using the '--state' aurgument.
$ sudo firewall-cmd --state
Finding out about your zones

We can see which zone is currently selected as the default by typing:
$ sudo firewall-cmd --get-default-zone
We can see what network interfaces are assinged to what zones, with the below command. The default is, all interfaces to the public zone
$ sudo firewall-cmd --get-active-zones
We can find what rules are associated with the public zone by running the below command.
$ sudo firewall-cmd --list-all --zone=public
public (default, active)

interfaces: eth0 eth1

sources:

services: dhcpv6-client http https ssh

ports: 1025/tcp

masquerade: no

forward-ports:

icmp-blocks:

rich rules:
From this outout, we can see that this zone is the default, and has eth0 and eth1 interfaces. We can also see that DHCP, SSH, HTTP, and HTTPS are allowed, and specifically, TCP port 1025.
To get a list of the available zones, run the below command.
$ sudo firewall-cmd --get-zones

### Setting up your zones

We can move interfaces between zones during our session by using the '--change-interface=' aurgument, along with the '--zone' aurgument and define which zone to move the interface too. If the firewall is completely restarted, the interface will revert to the default zone.
$ sudo firewall-cmd --zone=internal --change-interface=eth1
To define a permanent zone for the interface, open up the interface configurations file and add the below line.
...
ONBOOT=yes
ZOME=internal
Save and close the file, then restart the networking, and firewall for this to effect.
$ sudo systemctl restart network
$ sudo systemctl restart firewalld

### Setting up the rules

Firewalld comes with a series of services predefined, this allows you to simply add the service, rather than the port number and protocol type, for example, we allow 'http' rather than 'tcp port 80'
We can get a list of these services using the below command.
$ sudo firewall-cmd --get-services
and the allow that service with the below command.
$ sudo firewall-cmd --add-service=http
This will take immediate effect, but will not survive reboots, for this you need to add the --permanent argument. Run both of them so its takes immediate effect, AND survices reboots
$ sudo firewall-cmd --add-service=http
firewall-cmd --permanent --add-service=http
You can get more details, by navigating to '/usr/lib/firewalld/services/' and reading the files, and we can even add our own services - more on that below. The same applies in regards to the '--permanent' argument
$ sudo firewall-cmd --add-port=5222/tcp
firewall-cmd --permanent --add-port=5222/tcp

### Setting up the rich rules

Rich Rules are how to define conditionals within firewalld, the most common use, will be allow access from a particular IP, or IP Range. The commands below are allow access to TCP port 80 from any IP on the 192.168.0.0 network.
$ sudo firewall-cmd --add-rich-rule 'rule family="ipv4" source address="192.168.0.0/24" service name="http" accept' 
$ sudo firewall-cmd --add-rich-rule 'rule family="ipv4" source address="192.168.0.0/24" service name="http" accept' --permanent
The FedoraProject has great examples on Rich Rules, you can find that here

### Defining a Service

You can create your own service to refer to when creating rules, by place a file in '/usr/lib/firewalld/services/'. The easiest method, is to copy and existing one, and change the details to what you want.
$ sudo cp /usr/lib/firewalld/services/http.xml /usr/lib/firewalld/services/myservice.xml
$ sudo vim /usr/lib/firewalld/services/myserver.xml
The file should look the example below
<!--?xml version="1.0" encoding="utf-8"?-->
<service> 
  <short>My Custom Service</short> 
  <description>A small description of this. This allow port 1134 on TCP for my application.</description> 
  <port protocol="tcp" port="1134"></port> 
</service>
And to apply this, your use the name of the file, minus the extention (.xml)
$ sudo firewall-cmd --add-service=myservice
$ sudo firewall-cmd --permanent --add-service=myservice

### Conclusion

Hopefully, you should have a good understand of firewalld after reading this post, and should feel conformatable administrating firewalld on a day to day basic.
