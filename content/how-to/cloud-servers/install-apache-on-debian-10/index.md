---
permalink: install-apache-on-debian-10/
audit_date: '2021-04-07'
title: 'Install Apache on Debian 10'
type: article
created_date: '2021-03-11'
created_by: David Fonseca
last_modified_date: '2021-04-07'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

In this article explains how to install Apache on a Debian 10 server.

## What is Apache?

Apache is an open-source, cross-platform web server and it is actively
maintained by the Apache Software Foundation.

## Prerequisites

- User with sudo privileges
- Server running Debian 10
- ufw firewall

## Step 1. Update and install apache

We need to open the terminal and update the repository:

    `# sudo apt update`

Then, install the apache package:

    `# sudo apt install apache2`

## Step 2 Verify installation

Run the following command:

    `# sudo systemctl status apache2`

We can see **active (running)**.

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

### Step 3. Accessing Apache

To access the server you must know the IP address. To find the IP address type the following command:

    `# hostname -I`

Type the IP address on your browser and an error loading the page appears. This error occurs because we did not add the HTTP rule to the Firewall.

## Step 4. Firewall rules

To add the rule WWW to the Firewall to permit the inbound and outbound traffic. Run the following commands:

    `sudo ufw allow 'WWW'`
    `sudo ufw status  | grep 80/tcp`

Example of firewall rules on the server.

```
    80/tcp                     ALLOW       Anywhere\n
    80/tcp (v6)                ALLOW       Anywhere (v6)
```

## Step 4

Type the IP address on your browser obtained on step 3 and the landing page of apache will appear.

## Additional actions

The following commands may help you manage apache:

| Command                          | Action                             |
|----------------------------------|------------------------------------|
| `sudo systemctl stop apache2`    | Stop                               |
| `sudo systemctl start apache2`   | Start                              |
| `sudo systemctl restart apache2` | Restart                            |
| `sudo systemctl enable apache2`  | Start automatically on server boot |
| `sudo systemctl disable apache2` | Deactivate the automatically start |

## Conclusion

Apache is running in our server and ready to deploy an application.
