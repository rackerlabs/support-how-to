---
permalink: install-nginx-on-centos-6
audit_date: '2020-06-30'
title: Install Nginx on CentOS 6
type: article
created_date: '2020-06-25'
created_by: John Garcia
last_modified_date: '2020-06-30'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to install Nginx&reg; on CentOS&reg; 6 by using `yum`.

1. Use the following **wget** command to install the Nginx repository by pulling it from the listed address:

       [root@server-01 ~]# wget https://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm

2. Use the following command to install the RPM package **nginx-release-centos-6-0.el6.ngx.noarch.rpm**:

       [root@server-01 ~]# rpm -ivh nginx-release-centos-6-0.el6.ngx.noarch.rpm

   **Note:** The following list describes the options used in this command:

    - `-i`: Installs Package
    - `-v`: Verbose Mode (Nicer Displaying)
    - `-h`: Include Hashmarks to note progress during unpacking

3. Use the following command to install Nginx using by `yum`:

       [root@server-01 ~]# yum install nginx

4. Use the following commands to set the Nginx service to start automatically after reboot and turn on the Nginx service:

       [root@server-01 ~]# chkconfig nginx on
       [root@server-01 ~]# service nginx start

5. Use the following command to verify that the Nginx service is on:

       [root@server-01 ~]# service nginx status
       nginx (pid  3020) is running...

6. Use the following commands to make and save changes to the firewall:

        [root@server-01 ~]# iptables -I INPUT -p tcp --dport 80 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
        [root@server-01 ~]# service iptables save
        iptables: Saving firewall rules to /etc/sysconfig/iptables:[  OK  ]

    **Note:** Failure to make changes to firewall might result in a "No Route to Host" message when you attempt the final step.

7. Navigate to your server's IP address in your web browser. You should see the following message to confirm that Nginx is installed and running correctly:
   
       Welcome to nginx!
       If you see this page, the nginx web server is successfully installed and working. Further configuration is required.

       For online documentation and support please refer to nginx.org.
       Commercial support is available at nginx.com.

       Thank you for using nginx.
