---
permalink: simple-load-balancing-with-apache
audit_date: '2021-05-06'
title: Simple load balancing with Apache
type: article
created_date: '2011-03-09'
created_by: Rackspace Support
last_modified_date: '2021-05-06'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

**Note:** This article dates from before the introduction of [Cloud
Load Balancers](/support/how-to/cloud-load-balancers),
which we recommend for load balancing. Because you might still want
to try this procedure, we haven't retired this article.

This article describes how to create a simple software [load
balancer](https://www.rackspace.com/cloud/load-balancing/) by using a
[cloud server](https://www.rackspace.com/cloud/servers/).

This article uses Apache&reg; as the load balancer in conjunction with the
Apache modules `mod_proxy` and `mod_proxy_balancer`. Both are available
through CentOS&reg;, and this article uses that operating system as the
base installation.

As this article demonstrates, you can use Cloud Servers to scale horizontally
by adding servers behind a smart host, with each server sharing the load
as webservers.

### Prerequisites

You need to have the following hardware and software in place before you
begin.

#### Hardware

This demonstration uses three servers, but you can use
this as a model to scale horizontally.

- One cloud server that serves as the load balancer
- Two other cloud servers acting as web server drones

#### Software

The software and packages for all three servers are the same. To add the
software, perform the following steps.

1. Update your system:

        # yum update

2. Install Apache by using the CentOS `groupinstall` command:

        # yum groupinstall "Web Server"

3. Optionally, install a text-based web browser to check that a
   particular server behind the load balancer displays the page it should:

        # yum groupinstall "Text-based Internet"

### Server configuration

Configure the servers as two web servers and one load balancer.

#### Web servers

Because the web servers are drones, they don't need any special
configuration. Create a file called **index.html** in
**/var/www/html/index.html**. In this file, you can put any
distinguishing characteristics you want. For example, you could put
"It works. This is Web Server \#" where \# is the numerical identifier of
that particular server.

#### Load balancer

The following sections walk you through each step and the summary shows the
full configuration. Add your defined configurations at the end of the
**/etc/httpd/conf/httpd.conf** file in a standard virtual host.

##### Unwanted requests

Turn off `ProxyRequests` to avoid any unwanted traffic:

    ProxyRequests off

##### Balance web servers

In this part of the virtual host, name the web servers and declare your
balancing method. Use the `BalanceMember` directive to declare the
web servers. You can add the number you want by using these as templates. The
`ProxySet` directive declares how you want to balance. This example uses
a *byrequest* balancing algorithm, which is the same as a *round robin*.
For each new request, you get a new web server in sequential order.
(Although better and smarter algorithms exist, this one is easy to
configure, and you don't need to know networking theory.)
The `<Proxy>` tags tell Apache to send it to
`mod_proxy`. The `balancer://mycluster` identifier is an
identifier. You can call it what you want as long as you use the
`balancer://` prefix.

**Note:** You want to contact your web servers from the load balancer
by using their private IP addresses. Doing so minimizes your bandwidth
charges by keeping all communication between servers on the ServiceNet
network, where bandwidth is free.

    <Proxy balancer://mycluster>
        # WebHead1
        BalancerMember https://10.x.x.x:80

        # WebHead2
        BalancerMember https://10.x.x.x:80

        ProxySet lbmethod=byrequests

    </Proxy>

##### Balance-manager (optional)

The `balance-manager` is a tool packaged with the `mod_proxy_balancer`
tool that enables you to make configurations from a GUI tool through
the web browser. You can view it at
<https://domain.com/balancer-manager>. 

**Note**: Any changes made by this tool end after you restart Apache.

    <Location /balancer-manager>

       SetHandler balancer-manager
    </Location>


##### ProxyPass

This final part of the configuration adds the situations that
are proxied. You don't want to proxy the `balancer-manager`,
but you do want to proxy everything else.

       ProxyPass /balancer-manager !
       ProxyPass / balancer://mycluster/

### Test the configuration

After you configure the **httpd.conf** file on your load
balancer cloud server and start Apache, you can view your domain
name and verify that it properly points to your load balancer. When
you refresh, it should hop between your two web servers, saying "It works.
This is Web Server 1" or "It works. This is Web Server 2". You
are now balancing.

### Summary

The following code combines all you've learned into a
helpful packaged VirtualHost. Substitute all the necessary values
specific to your configuration, such as the domain name and the we server
IP addresses. The comments explain some security additions and describe
each section clearly.

**Note:** The preceding example is formatted for Apache 2.4. If you are
using 2.2, replace `Require all granted` with
`Order Deny,Allow | Deny from none | Allow from all`, and then replace
`Require host example.org` with
`Order deny,allow | Deny from all | Allow from example.org`.

    <VirtualHost *:80>
            ProxyRequests off

            ServerName domain.com

            <Proxy balancer://mycluster>
                    # WebHead1
                    BalancerMember https://10.176.42.144:80
                    # WebHead2
                    BalancerMember https://10.176.42.148:80

                    # Security: technically, we aren't blocking
                    # anyone but this is the place to make those changes.
                    Require all granted
                    # This example allows all requests.

                    # Load Balancer Settings
                    # This is a simple round-robin load balancer, so
                    # all web servers have an equal share of
                    # of the load.
                    ProxySet lbmethod=byrequests

            </Proxy>

            # balancer-manager
            # This tool is built into the mod_proxy_balancer
            # module and allows you to do some simple
            # modifications to the balanced group through a GUI
            # web interface.
            <Location /balancer-manager>
                    SetHandler balancer-manager

                    # I recommend locking this one down to your
                    # your office
                    Require host example.org

            </Location>

            # Point of Balance
            # This setting allows you to explicitly name the
            # the location in the site that you want to be
            # balanced. This example balances "/", which means
            # everything in the site.
            ProxyPass /balancer-manager !
            ProxyPass / balancer://mycluster/

    </VirtualHost>

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact). 
