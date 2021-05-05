---
permalink: install-nginx-on-ubuntu
audit_date: '2020-07-23'
title: Install Nginx on Ubuntu
type: article
created_date: '2020-07-17'
created_by: John Garcia
last_modified_date: '2020-07-23'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

Nginx&reg; is a web-server service, which has gained almost as much market share as Apache&reg; in recent years
due to its excellent performance and flexible feature set.  This guide describes how to install Nginx and discusses
the next steps to set up Nginx to serve your site or application.

### Prerequisites:

You need a Linux&reg; server running the Ubuntu&reg; operating system.

### Install Nginx on Ubuntu

The default repositories for most popular Linux distributions, including Ubuntu, make Nginx available. Running an update
before installing new packages allows the installer to select the most up-to-date version of the package available on the
repository for installation. To install Nginx, perform the following steps:

1. Run the following apt package-manager commands:

       sudo apt update
       sudo apt install nginx

2. To enable and start the service and add it to the startup, run the following commands:

       sudo systemctl enable nginx
       sudo systemctl start nginx

### Enable firewall access for Nginx

By default, Nginx sends traffic on the default ports for HTTP (`80`) and HTTPS (443). However, you need to
enable these ports to receive traffic. Nginx makes this easy because it registers itself as a service
within Uncomplicated Firewall, UFW. To enable firewall access, perform the following steps:

1. Run the following command to view available services on UFW:

       sudo ufw app list

2. Run the following command to configure the appropriate setting for your site. Replace **<selection>** with your choice:

       sudo ufw allow 'Nginx <selection>'
    
    **Note**  If you want to redirect HTTP traffic to HTTPS, select the `Full` option.

    | Full | HTTP and HTTPS |
    | HTTP | HTTP only      |
    | HTTPS | HTTPS only    |

    **Note:**  We recommend opening only the port or ports needed by your application. Minimizing the number of
    available ports is a security best practice.

### Test Nginx

Type the website IP address in the web browser. You should see a splash page with the Nginx logo and a
"Welcome to Nginx" message.  If you do not see this, check following items:

- Verify the IP address.

- Check whether Nginx is running by using the following command:

      sudo service status nginx
    
- Verify the firewall access for Nginx.  

### Next steps

Now that you installed Nginx, it is ready to start serving your application or website.  You can use the default
configuration to serve a site by placing its content at **/var/www/html** in your filesystem. However, if you want
to serve more than one site, we recommend that you set up Nginx server blocks to accommodate this need.
