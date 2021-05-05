---
permalink: using-fail2ban
audit_date: '2021-04-20'
title: 'Using Fail2ban'
type: article
created_date: '2021-03-17'
created_by: John Abercrombie
last_modified_date: '2021-04-20'
last_modified_by: Carlos Arriaga
product:
product_url:
---

### What is Fail2ban?

Fail2ban is a service that alleviates the issue of brute-force break-in attempts on a server
by scanning the login logs. When it sees a pattern of failed logins, it bans the IP address
of the offending source. The default setting is typically five failed logins, and the default
ban time is 10 minutes.

Fail2ban protects your server through the use of *jails*. Jails are configuration files
in which you set the criteria for when the system should ban an IP address
from accessing your server.

The central file of fail2ban is **jail.conf**, which contains the configuration settings
for your jail. These settings determine whether or not to ban the IP address from
logging into your server.

### Install Fail2ban

Use the following command to install on CentOS&reg; or RHEL&reg;:

```sh
yum install fail2ban
```

Use the following command to install on  Debian&reg; or the Ubuntu&reg; operating system:

```sh
apt-get install fail2ban
```

### Configure Fail2ban

1. Log in to your server over SecureShell (SSH) with either the root user or a sudo user.
2. Copy the **jail.conf** file to create a **jail.local** file because you typically do
   not want to edit the central configuration file, **jail.conf**.

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

3. Open the **jail.local** file with your preferred command-line text editor.
4. Locate the [DEFAULT] section to find the following global options:

- **ignoreip**: Allows you to whitelist an IP from Fail2ban, preventing it from being banned,
  by telling Fail2ban to ignore that IP address.
- **bantime**: Sets how long an IP address is banned in seconds. The default is 600 seconds (10 minutes).
- **maxretry**: Defines the number of login failures permitted before banning the offending IP address.
- **findtime**: Defines the time span in which the **maxretry** entries occur. IP addresses that exceeds the
  **maxretry** value within this set time period are banned for the amount of time determined by the
  **bantime** setting.

5. Save and close the file.
6. After you configure Fail2ban, you can enable or disable jails for the specific protocols and services
   you want to protect, such as SSH login attempts.
8. Restart the `fail2ban` service for changes to take effect.

```sh
service fail2ban restart
```

Fail2ban now monitors attempts to log into your server, based on the parameters you set in your **jail.local**
file, and it bans IP addresses that violate those conditions.

For more in-depth information on Fail2ban, see the following Fail2ban resources:

- [Fail2ban Main page](http://www.fail2ban.org/wiki/index.php/Main_Page)
- [Fail2ban Manual](http://www.fail2ban.org/wiki/index.php/Manual)
- [Fail2ban How-tos](https://www.fail2ban.org/wiki/index.php/HOWTOs)

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
