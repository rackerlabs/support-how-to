---
permalink: base-service-commands-in-Centos-7/
audit_date:
title: 'Base service commands'
type: article
created_date: '2020-05-26'
created_by: Matthew Brown
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

In this article, we will explain how to manage services using systemd.


## What is systemd?

Systemd is is a system manager that has been adopted by many modern Linux operating systems. Many of the newer Linux operating systems that you will find with Rackspace (Centos 7 and above, Ubuntu 16.04 and above) use systemd so it will be beneficial to know the ins and outs of how to use them to manage your applications.

## Using systemctl

When using systemd to manage applications, you will use the command `systemctl`. This command has many functions which we will discus in detail.

### Starting and stopping services

Using the command `systemctl start application.service` will start the application and the command `systemctl stop application.service` will stop the application. If you are un aware whether or not a service is running, you can use the command `systemctl status application.service` to check the status:

```
[root@localhost ~]# systemctl status httpd.service
● httpd.service - The Apache HTTP Server
   Loaded: loaded (/usr/lib/systemd/system/httpd.service; disabled; vendor preset: disabled)
   Active: inactive (dead)
     Docs: man:httpd(8)
           man:apachectl(8)
[root@localhost ~]# systemctl start httpd.service
[root@localhost ~]# systemctl status httpd.service
● httpd.service - The Apache HTTP Server
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
May 24 01:30:02 localhost.localdomain httpd[16117]: AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using localhost.localdomain. Set the 'ServerName' directive globally to suppress this message
May 24 01:30:02 localhost.localdomain systemd[1]: Started The Apache HTTP Server.
[root@localhost ~]#
```

### Restarting vs reloading services

It is worth noting that restarting and reloading a service are two separte things in terms of systemd. When you run the command `systemctl restar application.service` it will restart the specified service and if the service is in a stopped state, it will be started. If you were to run the commands `systemctl reload application.service` it will reload the configuration of the specified service. For example, if you made any changes to an Apache vhost or other configuration and you want those changes to go live without stopping Apache, you would reload the service and the new configurations would take place while the service is still live

### Enabling and disabling services

If there is a specific service that you would like to have started when the server is booted up, you will run the command `systemctl enable application.service`. If there is a service that you do not want started when the server boots up, you will run the command `systemctl disable application.service`.
