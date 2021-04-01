---
permalink: /install-apache-on-debian-10/
audit_date:
title: 'Install Apache on Debian 10'
type: article
created_date: '2021-03-11'
created_by: David Fonseca
last_modified_date:
last_modified_by:
product:
product_url: 
---

# Install Apache on Debian 10
In this article, we will explain how to install the Apache server on Debian 10.

## What is Apache?
Apache is an open-source, cross-platform web server and it is actively maintained by the Apache Software Foundation.

## Prerequisites
- User with sudo privileges
- Server running Debian 10
- ufw firewall

## Step 1
We need to open the terminal and update the repository:
    `# sudo apt update`
Then, install the apache package:
    `# sudo apt install apache2`

## Step 2
After the installation Apache must be running on our server, to verify it, run the following command:
    `# sudo systemctl status apache2`
We can see _active (running)_.
```
    ● apache2.service - The Apache HTTP Server
       Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)
       Active: active (running) since Thu 2021-03-11 09:56:58 CST; 1 weeks 0 days ago
         Docs: https://httpd.apache.org/docs/2.4/
      Process: 2141 ExecReload=/usr/sbin/apachectl graceful (code=exited, status=0/SUCCESS)
     Main PID: 6087 (apache2)
        Tasks: 55 (limit: 1158)
       Memory: 10.4M
       CGroup: /system.slice/apache2.service
               ├─2147 /usr/sbin/apache2 -k start
               ├─2148 /usr/sbin/apache2 -k start
               └─6087 /usr/sbin/apache2 -k start

    Warning: Journal has been rotated since unit was started. Log output is incomplete or unavailable.
```

### Accessing to the Apache server
Right now, we need to access the server via web browser, for this, you must know your IP address. If you do not know, type the following command to see your IP address:
    `# hostname -I`
You need to type the IP address on your browser, you will get an error loading the page. This error occurs because we did not add the HTTP rule to the Firewall.

## Step 3
We need to add the rule WWW to the Firewall to permit the inbound and outbound traffic. Run the following commands:
    `sudo ufw allow 'WWW'`
    `sudo ufw status  | grep 80/tcp`
As we can see, the HTTP port was added to the rules for our firewall on the server.
```
    80/tcp                     ALLOW       Anywhere\n
    80/tcp (v6)                ALLOW       Anywhere (v6)
```


## Step 4
We access again to the IP obtained from step 2, now, we are able to see the page of apache.

## Extra step
The following commands could help you managing the apache server:
    - Stop: `sudo systemctl stop apache2`
    - Start: `sudo systemctl start apache2`
    - Restart: `sudo systemctl restart apache2`
    - Start Apache automatically when the server boots. `sudo systemctl enable apache2`
    - Deactivate the automatically start: `sudo systemctl disable apache2` 

## Conclusion
Now, we have the Apache server running in our server and ready to deploy an application.
