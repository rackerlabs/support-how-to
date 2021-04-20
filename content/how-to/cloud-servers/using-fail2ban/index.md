---
permalink: /using-fail2ban/
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

# Using Fail2ban

What is Fail2ban?

Fail2ban is a service that seeks to alleviate the issue of brute-force break-in attempts on a server. It does so by scanning the login logs. When it sees a pattern of failed logins, it bans the IP address of the offending source. The default setting is typically five failed logins, and the default ban time is 10 minutes.

### How to Install Fail2ban?

#### CentOS&reg; / RHEL&reg;

```sh
yum install fail2ban
```

#### Debian&reg; / Ubuntu&reg;

```sh
apt-get install fail2ban
```

Fail2ban protects your server through the use of jails. Jails are configuration files wherein you determine which criteria are required for an IP address to be banned from accessing your server(s).


#### Jails

The central file of fail2ban is jail.conf, which is what contains the configuration settings for your jail. These are the settings that determine whether or not an IP address is banned from logging into your server. 


#### How to Configure Fail2ban

1. Log into your server over SSH with either the root user or a sudo user.
2. Copy the `jail.conf` file to create a jail.local file since you typically do not want to edit the central configuration file (jail.conf).

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

3. Open the `jail.local` file with your preferred command-line text editor.
4. Locate the [DEFAULT] section to find the following global options:

> ignoreip: This option allows you to whitelist an IP from Fail2ban, preventing it from being banned, by telling Fail2ban to ignore that IP address.
> bantime: This option sets the seconds how long an IP address is banned for. The default is 600 seconds (10 minutes).
> maxretry: This setting defines the number of login failures permitted before the offending IP address is banned.
> findtime: This setting defines the alotment of time permitted for the maxretry entries to occur. If an IP exceeds the maxretry alottment within this set time period, it is banned for the amount of time determined by the bantime setting.

5. Save and close the file. 
6. With Fail2ban's settings set, you are now able to enable and/or disable jails for the specific protocols and services you want to protect. Typically, this is SSH login attempts.
7. Restart the fail2ban service for changes to take effect.

```sh
service fail2ban restart
```

Fail2ban will now monitor attempts to log into your server, based on the parameters you set in your jail.local file, and it will ban IP addresses that violate those conditions.

If you would like to look up more in-depth information on Fail2ban, please visit the following:
http://www.fail2ban.org/wiki/index.php/Main_Page
http://www.fail2ban.org/wiki/index.php/Manual
https://www.fail2ban.org/wiki/index.php/HOWTOs

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
