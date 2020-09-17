---
permalink: limit-ssh-access-by-ip-address/
audit_date:
title: Limit SSH access by IP address
type: article
created_date: '2020-09-17'
created_by: Jose Quezada
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

## Limit SSH access by IP address

This article has been created to provide guidance for securing the SSH access to your server, in this ocassion we are preventing login attempts for specific IP addresses in the permissive configuration, or allowing access for specific IP addresses in the restrictive configuration.

### Permissive Configuration:

This configuration is called permissive because it allows access to everyone but denied IP address. There are two principal ways of denying access to specific IP addresses:

TCP Wrappers:

This configuration has to be made in the file /etc/hosts.deny adding the follwing rule:

	# vi /etc/host.deny

Three principal ways to set a denying rule:

	sshd: Bad_IP_address
	sshd: 192.168.0.8

	sshd: Bad_Segment/CIDR
	sshd: 192.168.0.0/24

	sshd: Bad_IP_address, Bad_IP_address
	sshd: 192.168.0.3, 192.168.0.4

IP Tables:

This configuring resides in the OS firewall rules configuration.

	# iptables -A INPUT -s "BAD_IP" -p tcp --dport SSH_Port -j DROP

Blocking an IP address:

	# iptables -A INPUT -s 192.168.0.3 -p tcp --dport 22 -j DROP

Blocking a Segment:

	# iptables -A INPUT -s 192.168.0.0/24 -p tcp --dport 22 -j DROP

### Restrictive Configuration:

This configuration is called restrictive because it only allows access to specific IP addresses and otherwise drops the incoming traffic.

#### TCP Wrappers:

First of all, we deny all traffic incoming to SSH in the /etc/hosts.deny file:

	# vi /etc/hosts.deny
	sshd: ALL

Then, we allow access for our trusted IP addresses:

	# vi /etc/hosts.allow
	sshd: Trusted_IP_address
	sshd: 192.168.0.8

	sshd: Trusted_Segment/CIDR
	sshd: 192.168.0.0/24

	sshd: Trusted_IP_address, Trusted_IP_address
	sshd: 192.168.0.3, 192.168.0.4

#### IP Tables:

For IP Tables is important the order in which you place the rules, that's why you have to configure first the allowing rule(s) after that you configure the denying rule.

	# iptables -A INPUT --source Trusted_IP -p tcp --dport SSH_PORT  -j ACCEPT
	
Accepting traffic from an IP:

	# iptables -A INPUT --source 192.168.0.8 -p tcp --dport 22 -j ACCEPT
	
Accepting traffic from a segment:

	# iptables -A INPUT --source 192.168.0.0/24 -p tcp --dport 22 -j ACCEPT
	
Setting the blocking rule:

	iptables -A INPUT -p tcp --dport 22 -j DROP

#### How to comprove the changes

You can review your changes esecuting the following commands depending on the restrictive or permissive configuration.

	# cat /etc/hosts.deny
	# cat /etc/hosts.allow
	# iptables -L

##### There are also firewall software installed by default on some distributions, UFW for Debian, Ubuntu and derivated, Firewalld for RHEL7 and derivated:

#### Configuring ufw to deny specific IP, port number, and protocol:

For blocking an ip address to tcp port 22:
	# ufw deny proto tcp from 192.168.0.8 to any port 22

For blocking a subnet:
	# ufw deny proto tcp from 192.168.0.0/24 to any port 22

And, for listing the rules configured:
	# ufw status numbered


#### Configuring firewalld to deny specific IP, port number, and protocol:

On firewalld you can bann an IP address or a segment, but it won't allow any kind of connection:

Blocking an IP address:

	# firewall-cmd --permanent --add-rich-rule="rule family='ipv4' source address='192.168.0.8' reject"

Blocking a segment:

	# firewall-cmd --permanent --add-rich-rule="rule family='ipv4' source address='192.168.0.0/24' reject"

That's why you rather whitelisting trusted IP addresses to connect to SSH port:

	# firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="192.168.0.20" port protocol="tcp" port="22" accept'

You have to reload the firewalld configuration:
	
	# firewall-cmd --reload

Also, if you want to list the rules configured on the firewall:
	
	# firewall-cmd --list-all
