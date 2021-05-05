---
permalink: base-service-commands-in-Centos-7
audit_date: '2020-05-28'
title: 'Base service commands'
type: article
created_date: '2020-05-26'
created_by: Matthew Brown
last_modified_date: '2020-05-28'
last_modified_by: 'Cat Lookabaugh'
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to manage services by using **systemd**.

### Introduction

Many modern Linux&reg; operating systems available at Rackspace, such as Centos&reg; 7 and later and Ubuntu&reg; 16.04,
adopted **systemd** as a system manager. So you might want to know the ins and outs of how to use it
to manage your applications.

### Use `systemctl`

When you use **systemd** to manage applications, you use the command `systemctl`. The following sections
describe several of this command's functions.

#### Start and stop services

Use the command `systemctl start application.service` to start the application and the command `systemctl stop application.service` to stop the application. If you don't know if a service is running, you can use the
command `systemctl status application.service` to check the status, as shown in the following example:

    [root@localhost ~]# systemctl status httpd.service
       httpd.service - The Apache HTTP Server
       Loaded: loaded (/usr/lib/systemd/system/httpd.service; disabled; vendor preset: disabled)
       Active: inactive (dead)
         Docs: man:httpd(8)
           man:apachectl(8)
    [root@localhost ~]# systemctl start httpd.service
    [root@localhost ~]# systemctl status httpd.service
      httpd.service - The Apache HTTP Server
      Loaded: loaded (/usr/lib/systemd/system/httpd.service; disabled; vendor preset: disabled)
      Active: active (running) since Sun 2020-05-24 01:30:02 UTC; 1s ago
        Docs: man:httpd(8)
           man:apachectl(8)
     Main PID: 16117 (httpd)
     Status: "Processing requests..."
     CGroup: /system.slice/httpd.service
           ├─16117 /usr/sbin/httpd -DFOREGROUND
           ├─16118 /usr/sbin/httpd -DFOREGROUND
           ├─16119 /usr/sbin/httpd -DFOREGROUND
           ├─16120 /usr/sbin/httpd -DFOREGROUND
           ├─16121 /usr/sbin/httpd -DFOREGROUND
           └─16122 /usr/sbin/httpd -DFOREGROUND

    May 24 01:30:02 localhost.localdomain systemd[1]: Starting The Apache HTTP Server...
    May 24 01:30:02 localhost.localdomain httpd[16117]: AH00558: httpd: Could not reliably determine
    the server's fully qualified domain name, using localhost.localdomain. Set the 'ServerName' 
    directive globally to suppress this message
    May 24 01:30:02 localhost.localdomain systemd[1]: Started The Apache HTTP Server.
    [root@localhost ~]#

#### Restart or reload services

Restarting and reloading a service are two separate things with **systemd**. 

When you run the command `systemctl restart application.service`, the specified service restarts. If the
service is in a stopped state, it starts. 

When you run the command `systemctl reload application.service`, the configuration of the specified service
reloads. For example, if you make any changes to an Apache&reg; virtual host (vhost) and you want those
changes to go live without stopping Apache, you reload the service. The new configurations take place without
interrupting the service.

#### Enable and disable services

If you want a specific service to start when the server is booted up, run the command
`systemctl enable application.service`. If you want to make sure a service does not start when the server
boots up, run the command `systemctl disable application.service`.
