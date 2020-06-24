---
permalink: hostname-change-on-centos-6/
audit_date:
title: 'Change Hostname on Centos 6'
type: article
created_date: '2020-06-24'
created_by: Jose Quezada
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# Change Hostname on Centos 6

This guide is intended to provide guidance to update/change the server´s hostname.

Verify the current hostname:

	# hostname

Changing the hostname:
	
	# vi /etc/sysconfig/network

Find the line that contains the variable "HOSTNAME" and replace its value:
	
	HOSTNAME="server_name.domain.com"

Verify the current domain name:
	
	# dnsdomainname

Change domain name:
	
	# vi /etc/hosts

Add or modify the line with the host ip address, if you dont know it esecute the command "ip address".
After knowing the server ip address change the domain name for a FQDN
	
Example:
> 10.0.2.15 	server_name.domain.com server_name

After doing this changes you have to restart the network service:

	# service network restart
or

	# /etc/init.d/network restart

Now you can comprobe the changes executing the commands:

    # hostname
    
    # dnsdomainname
