---
permalink: limit-ssh-access-by-ip-address
audit_date: '2020-09-21'
title: Limit SSH access by IP address
type: article
created_date: '2020-09-17'
created_by: Jose Quezada
last_modified_date: '2020-09-21'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to secure the SSH access to your server by performing the following actions:

- Prevent login attempts for specific IP addresses in the permissive configuration
- Allow access for specific IP addresses in the restrictive configuration

### Permissive configuration

The permissive configuration allows access to everyone except the denied IP address. You can deny access to specific
to IP addresses in the following ways:

#### TCP wrappers

Make this configuration in the file **/etc/hosts.deny** by adding the follwing rule:

	# vi /etc/host.deny

Set a denying rule in one of the following ways:

	sshd: Bad_IP_address
	sshd: 192.168.0.8

	sshd: Bad_Segment/CIDR
	sshd: 192.168.0.0/24

	sshd: Bad_IP_address, Bad_IP_address
	sshd: 192.168.0.3, 192.168.0.4

#### iptables

This configuration resides in the OS firewall rules configuration.

	# iptables -A INPUT -s "BAD_IP" -p tcp --dport SSH_Port -j DROP

**Block an IP address**:

	# iptables -A INPUT -s 192.168.0.3 -p tcp --dport 22 -j DROP

**Block a segment**:

	# iptables -A INPUT -s 192.168.0.0/24 -p tcp --dport 22 -j DROP

### Restrictive Configuration

This configuration allows access to only specific IP addresses and drops other incoming traffic.

#### TCP wrappers

First, deny all traffic incoming to SSH in the **/etc/hosts.deny** file:

	# vi /etc/hosts.deny
	sshd: ALL

Then, allow access for trusted IP addresses:

	# vi /etc/hosts.allow
	sshd: Trusted_IP_address
	sshd: 192.168.0.8

	sshd: Trusted_Segment/CIDR
	sshd: 192.168.0.0/24

	sshd: Trusted_IP_address, Trusted_IP_address
	sshd: 192.168.0.3, 192.168.0.4

#### iptables

For IP Tables, the order in which you place the rules is very important. That's why you must configure first the
allowing rules and then the denying rule. 

	# iptables -A INPUT --source Trusted_IP -p tcp --dport SSH_PORT  -j ACCEPT
	
Accepting traffic from an IP:

	# iptables -A INPUT --source 192.168.0.8 -p tcp --dport 22 -j ACCEPT
	
Accepting traffic from a segment:

	# iptables -A INPUT --source 192.168.0.0/24 -p tcp --dport 22 -j ACCEPT
	
Setting the blocking rule:

	iptables -A INPUT -p tcp --dport 22 -j DROP

#### How to improve the changes

You can review your changes by executing the following commands depending on the restrictive or permissive configuration:

	# cat /etc/hosts.deny
	# cat /etc/hosts.allow
	# iptables -L

**Note:** Some distributions include default firewall software, such as UFW for Debian&reg; and the Ubuntu&reg; operating system and derivated, Firewalld for Red Hat&reg; Enterprise Linux&reg; 7 and derivated.

#### Configure ufw to deny specific IP, port number, and protocol

For blocking an IP address to TCP port 22:

	# ufw deny proto tcp from 192.168.0.8 to any port 22

For blocking a subnet:

	# ufw deny proto tcp from 192.168.0.0/24 to any port 22

For listing the configured rules:

	# ufw status numbered


#### Configure firewalld to deny a specific IP address, port number, and protocol

On firewalld, you can ban an IP address or a segment, but it won't allow any kind of connection:

Block an IP address:

	# firewall-cmd --permanent --add-rich-rule="rule family='ipv4' source address='192.168.0.8' reject"

Block a segment:

	# firewall-cmd --permanent --add-rich-rule="rule family='ipv4' source address='192.168.0.0/24' reject"

That's why you might choose to whitelist trusted IP addresses to connect to SSH port:

	# firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="192.168.0.20" port protocol="tcp" port="22" accept'

You have to reload the firewalld configuration:
	
	# firewall-cmd --reload

List the rules configured on the firewall:
	
	# firewall-cmd --list-all
