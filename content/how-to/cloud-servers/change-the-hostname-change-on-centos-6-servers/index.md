---
permalink: change-the-hostname-change-on-centos-6-servers
audit_date: '2020-06-26'
title: 'Change the hostname on CentOS 6 servers'
type: article
created_date: '2020-06-24'
created_by: Jose Quezada
last_modified_date: '2020-06-26'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article demonstrates how to change a CentOS&reg; 6 server hostname.

To change the hostname, perform the following steps:

1. To verify the current hostname, run the following command:

       # hostname

2. To change the hostname in the **network** file, run the following command:
	
       # vi /etc/sysconfig/network

3. Find the line that contains the variable "HOSTNAME", replace its value, and save the file:
	
       HOSTNAME="server_name.domain.com"

4. To verify the current domain name, run the following command:
	
       # dnsdomainname

5. To find your host IP address, run the following command:

       # ip addr show
       
6. To change the domain name in the **hosts** file, run the following command:
	
       # vi /etc/hosts
       
7. Add or modify the line with your host IP address, changing the domain name. Be sure to use
   a fully qualified doman name (FQDN), such as the following example:

       10.0.2.15 	server_name.domain.com server_name

8. Save your change and close the file.

9. After you change the domain name, you have to restart the network service. Use one of the
   following commands:

       # service network restart
        
       or

       # /etc/init.d/network restart

10. To verify the changes, execute the following commands:

        # hostname
    
        # dnsdomainname
