---
permalink: install-apache-on-debian-10
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

This article explains how to install Apache&reg; on a Debian&reg; 10 server.

### What is Apache?

Apache is an open-source, cross-platform web server that the Apache Software
Foundation actively maintains.

### Prerequisites

- User with `sudo` privileges
- Server running Debian 10
- Uncomplicated Firewall (UFW) firewall

### Step 1: Update and install Apache

Run the following command to open the terminal and update the repository:

    `# sudo apt update`

Then, install the apache package:

    `# sudo apt install apache2`

### Step 2: Verify the installation

Run the following command:

    `# sudo systemctl status apache2`

Notice the **active (running)** message in the following response:

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

### Step 3: Access Apache

To access the server, you must know the IP address, so run the following command to find the IP address:

    `# hostname -I`

If you type the IP address in your browser, an error loading the page appears. This error occurs because
you have not yet added the HTTP rule to the firewall.

### Step 4. Add firewall rules

Run the following commands to add the rule **WWW** to the firewall and permit the inbound and outbound traffic:

    `sudo ufw allow 'WWW'`
    `sudo ufw status  | grep 80/tcp`

The following example shows firewall rules on the server:

```
    80/tcp                     ALLOW       Anywhere\n
    80/tcp (v6)                ALLOW       Anywhere (v6)
```

### Step 5: Verification

Type the IP address from Step 3 in your browser, and the Apache landing page appears.

### Additional actions

The following commands can help you manage Apache:

| Command                          | Action                             |
|----------------------------------|------------------------------------|
| `sudo systemctl stop apache2`    | Stop                               |
| `sudo systemctl start apache2`   | Start                              |
| `sudo systemctl restart apache2` | Restart                            |
| `sudo systemctl enable apache2`  | Start automatically on server boot |
| `sudo systemctl disable apache2` | Deactivate the automatically start |

### Conclusion

After you complete these steps, Apache is running on your server and is ready to deploy an application.
