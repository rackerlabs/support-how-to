---
permalink: /nginx-whitelisting-certain-ips
title: "Nginx Whitelist certain IP's"
type: article
created_by: Rocio Rodriguez
created_date: '2021-08-21'
last_modified_date: '2021-09-25'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

Note: This article assumes that you have installed Nginx on your server.

### Prerequisites
   - An Nginx server.
   - Access to a Linux privileged user such as root.

### Procedure
1. Login into your server via SSH and switch to root user.
    ```sh
    su
    ```
2. Go to your Nginx site configuration.
    ```sh
    cd /etc/nginx/sites-available
    ```
3. Open the configuration file where your site is located.

    **Note**: This and the following steps may change depending on your configuration. We will assume that you are using the default one.
    ```sh
    nano default
    ```
    or

    ```sh
    vim default
    ```
4. Add the following directives with your desire IP inside the server section.
    ```nginx
    server {
        allow 192.168.0.0; # here goes the IP you want to allow
        deny all;
        # ...
    }
    ```
    You can also write the directives inside the http section to apply it to multiple virtual hosts.
    ```nginx
    http {
        allow 192.168.0.0; # here goes the IP you want to allow
        deny all;
        
        server {
            server_name page1.rackspace.com;
            # ...
        }
        
        server {
            server_name page2.rackspace.com;
            # ...
        }
    }
    ```
    
5. Save and close your file.
    To save:
    <kbd>Ctrl</kbd> + <kbd>O</kbd>
    <kbd>Enter</kbd>

    To exit:
    <kbd>Ctrl</kbd> + <kbd>X</kbd>

6. Restart Nginx

    **Note**: This step can change depending on your OS.
    ```sh
    systemctl restart nginx
    ```
