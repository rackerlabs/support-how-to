---
permalink: allow-or-block-specific-ip-addresses-from-accessing-your-cloud-sites-website/
node_id: 4153
title: Allow or block specific IP addresses from accessing your Cloud Sites website
type: article
created_date: '2014-07-22'
created_by: Rackspace Support
last_modified_date: '2015-10-28'
last_modified_by: Kyle Laffoon
product: Cloud Sites
product_url: cloud-sites
---

Cloud Sites uses Apache 2.4 for its PHP environment. This simplifies the method of blocking or allowing access by IP address compared to previous releases.

### To block all visitors except a specific IP address, with an optional message when blocked

    Require ip <ip address>
    ErrorDocument 403 "Some message you want to show blocked users"

Example:

    Require ip 50.157.7.24
    Require ip 125.13.4.112
    ErrorDocument 403 "This site can only be accessed within the network" 

This would allow access to the site only for IP addresses 50.157.7.24 and 125.13.4.112, blocking access from any other IP.

### To block only specific IP addresses but allow other traffic through

    <RequireAll>
        Require all granted
        Require not ip <ip address>
    </RequireAll>

Example:

    <RequireAll>
        Require all granted
        Require not ip 46.148.22.18
        Require not ip 83.222.214.165
    </RequireAll>

This would allow access to the site for all trafic except IP address 46.148.22.18 and 83.222.214.165.

Further reading can be read on the Apache website here:
https://httpd.apache.org/docs/2.4/howto/access.html.

### The following information is outdated and for archival purposes only

The below example is formatted for Apache 2.2. The current Apache 2.4 version running in Cloud Sites uses the preceding allow/deny methods.

Because of the unique hosting environment of Cloud Sites, a slight
addition to the code used for the **Allow/Deny** feature is required.

In Cloud Sites, the requesting IP address coming into a server is the IP
address of our load balancing server instead of the visitor's IP
address. This means that limiting access by IP address through the
**.htaccess** file becomes problematic. To solve this problem, we
provide an environment variable called **X-Cluster-Client-Ip** that
includes the visitor's IP address.

In the **.htaccess** file that contains your rules, insert the following
code.

### Allow only a certain IP addresses

    Require all denied
    allow from env=allowclient
    SetEnvIf X-Cluster-Client-Ip 000.000.000.000 allowclient


### Allow only a certain IP address when your site is using SSL

    Require all denied
    allow from env=allowclient
    SetEnvIf X-FORWARDED-FOR ^000.000.000.000$ allowclient

You can also use the environmental variable **HTTP:X-Forwarded-For **for
the **Allow Only **feature via SSL.

### Allow only a certain IP address with **HTTP:X-Forwarded-For**

    RewriteEngine On
    RewriteCond %{HTTP:X-Forwarded-For} 000\.000\.000\.000
    RewriteRule .* - [F]

Replace **000.000.000.000** with your IP address, which allows only your
IP address to access your site. You can then develop your site without
restrictions. **You can repeat line 1 to allow multiple IP addresses.**

### Deny one or more IP addresses

    Require all granted
    Deny from env=DenyAccess
    SetEnvIf X-Cluster-Client-Ip "^000\.000\.000\.000" DenyAccess

### Deny one or more IP addresses when your site is using SSL

    Require all granted
    Deny from env=DenyAccess
    SetEnvIf X-FORWARDED-FOR "^000\.000\.000\.000" DenyAccess

Replace **000\\.000\\.000\\.000** with the IP address that you want to
deny. This denies the IP address or addresses access to your site. **You
can repeat line 1 to deny multiple IP addresses.**

**Important:** Implementing this code might prevent images from loading
on your website. To address this issue, you can add the following code
do your **.htaccess** file:

    <FilesMatch "\.(gif|jpe?p|png)$">
    Require all denied
    allow from env=allowclient
    </FilesMatch>
