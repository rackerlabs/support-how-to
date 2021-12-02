---
permalink: setup-name-based-virtual-host-in-apache
title: Setup a Name-Based Virtual Host in Apache
type: article
created_by: Rocio Rodriguez
created_date: '2021-12-02'
last_modified_date: '2021-12-02'
last_modified_by: Miguel Salgado
audit_date: '2021-12-02'
product: Cloud Servers
product_url: cloud-servers
---

With name-based virtual hosts you can host multiple websites on the same IP / server. Each website will require an unique hostname.

**Note**: This article assumes that you have installed Apache on your server.

### Prerequisites
   - An Apache web server.
   - Access to a Linux privileged user such as root.
   - Access to the DNS records of a domain or subdomain.

### Procedure
1. Login into your server via SSH and switch to root user.
    ```sh
    $ su
    or
    $ sudo -i
    ```
2. Go to your Apache site configuration.
    ```sh
    #RHEL and CentOS based distributions:
    # cd /etc/httpd/conf/httpd.conf

    #Ubuntu and Debian based distributions:
    # cd /etc/apache2/sites-available
    ```
3. Open the configuration file where your site is located.

    **Note**: This and the following steps may change depending on your configuration. We will assume that you are using the default one.
    ```sh
    # nano 000-default.conf
    ```
    or
    ```sh
    # vim 000-default.conf
    ```
4. Add or edit (if they already exist) the following directives to your desire virtual host.

    **Note**: You can add as many virtual hosts as you want. However, each one should have a unique server name.
    **If you are using SSL**: You should also add these directives to the SSL virtual host, port 443.

    ```apache
    <VirtualHost *:80>
        # Here goes the hostname yu want to connect with:
        ServerName www.example.com 
        # You might want to add an alias (optional):
        ServerAlias example.com 
        # This is the location of your website files:
        DocumentRoot "/www/domain"
    </VirtualHost>
    ```
5. Save and close your file.
    **Using Nano:**
    To save:
    <kbd>Ctrl</kbd> + <kbd>O</kbd>
    <kbd>Enter</kbd>
    To exit:
    <kbd>Ctrl</kbd> + <kbd>X</kbd>
    
    **Using Vim:**
    <kbd>Esc</kbd>
    `:wq`
    <kbd>Enter</kbd>

6. Restart Apache
    **Note**: This step can change depending on your OS.
    ```sh
    #RHEL and CentOS based distributions:
    # systemctl restart httpd
    
    #Ubuntu and Debian based distributions:
    # systemctl restart apache2
    ```

7. Add an A record on your selected hostname that points to the IP of your server.

### Related articles
- [Manage DNS records in the MyRackspace Portal (Dedicated Customers)](https://docs.rackspace.com/support/how-to/manage-dns-records-in-the-myrackspace-portal/)
- [Create DNS records with Cloud DNS (Cloud Customers)](https://docs.rackspace.com/support/how-to/creating-dns-records-with-cloud-dns)
