---
permalink: disable-a-vhost-in-the-ubuntu-operating-system-and-centos-for-apache-and-nginx
audit_date: '2020-05-11'
title: 'Disable a virtual host in the Ubuntu operating system and CentOS for Apache and Nginx'
type: article
created_date: '2020-05-06'
created_by: John Abercrombie
last_modified_date: '2020-05-11'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

What if you need to disable a website, but you’re not sure how? It is easier than you might think.
Before you get started, keep the following in mind while reading this article:

- Your virtual host (vhost) server block might have a title other than **domain.com.conf**. For example,
you might use **httpd.conf** or **ssl.conf**. In that case, replace **domain.com.conf** with your
configuration file name.

- This article uses vhosts or server blocks in some of the examples that use port 80 and are not
Secure Sockets Layer (SSL). Note that these steps do not differ if your vhost or server block is
an SSL-enabled vhost or server block that uses port 443. The steps are the same.

### Ubuntu operating system and Apache

Let’s start with the easiest. Ubuntu&reg; comes with two commands specifically for managing vhosts in Apache&reg;.
To enable a vhost, use the following command:

    sudo a2ensite /etc/apache2/sites-available/domain.com.conf

When you understand what that collection of letters and a number mean in `a2ensite`, then it's easier to
remember how to enable or disable an Apache vhost in Ubuntu.

Here's the breakdown of the command:

- **a2**: apache2 (what Ubuntu calls Apache)
- **en**: enable
- **site**: website virtual host

To disable your website, use the `a2dissite` command, as shown in the following example:

    sudo a2dissite /etc/apache2/sites-enabled/domain.com.conf

This command has the following components:

- **a2**: apache2 (what Ubuntu calls Apache)
- **dis**: disable
- **site**: website virtual host

Also, take note of the difference in directory paths between `a2ensite` and `a2dissite`. When you want
to enable a virtual host for Apache in Ubuntu, you do so from the **sites-available** directory. When you
want to disable a virtual host in Ubuntu, you do so from the **sites-enabled** directory.

After you disable the virtual host, use the following command to verify the syntax of your Apache configuration:

    apache2ctl -t

Expected response:

    Syntax OK

To restart or reload Apache, run one of the following commands:

    service apache2 restart

or

    service apache2 reload

`restart` brings Apache down completely, and `reload` seamlessly starts a new Apache service before
stopping the original service. Typically, you want to reload rather than restart when you have the option.

### Ubuntu operating system and Nginx

Disabling an Nginx&reg; server block (what Nginx calls vhosts) is a little different. Nginx uses symlinks to
enable or disable server blocks. Apache vhosts can use symlinks, too, but `a2ensite` and `a2dissite`
don’t work for Nginx.

To disable a server block in Nginx in Ubuntu, you need to remove the symlink between **sites-enabled**
and **sites-available**, as shown in the following example:

    sudo rm /etc/nginx/sites-enabled/domain.com.conf

The command removes the symlink for your website, **domain.com**. Use the following command to verify the
Nginx syntax:

    nginx -t

Expected response:

    nginx: the configuration file <file-path> syntax is ok
    nginx: configuration file <file-path> test is successful

Your file pathway displays in the <path-path> place holder. After you receive a positive
response, you need to reload or restart Nginx bu using one of the following commands:

    service nginx reload

or

    service nginx restart

As before, whenever you have the option to do so, use `reload` rather than `restart` so that you don't
disrupt any other websites you have.

**Note**: If you run `php-fpm`, you need to restart that service as well, by using the following command:

    service php-fpm restart

### CentOS and Apache

Disabling a virtual host in Apache in CentOS&reg; is more complicated because CentOS doesn’t have an easy command
to use. In CentOS, you manually need to comment out the vhost you want to disable.

Here is an example of a **domain.com** vhost for Apache in CentOS:

    <VirtualHost *:80>
	ServerName domain.com
	ServerAlias www.domain.com
	DocumentRoot /var/www/vhosts/domain.com/public
    </VirtualHost>

Find this virtual host by using the following command:

    httpd -S | grep domain.com

The output shows the location of the virtual host, which is similar to the following output:

    /etc/httpd/vhost.d/domain.com.conf

Depending on your particular setup, the preceding output might look different. However, the pathway
you are looking for should end similarly to **domain.com.conf**.

After you have the location of the virtual host, open the vhost configuration file with your favorite
text editor. Here are two examples using `vim` and `nano`:

    sudo vim /etc/httpd/vhost.d/domain.com.conf

or

    sudo nano /etc/httpd/vhost.d/domain.com.conf

Edit the configuration file and add a pound sign (#) in front of each line for the vhost entry. If you
are using `vim`, enter **Insert** mode first. Your vhost configuration should now look like this:

    #<VirtualHost *:80>
    #   ServerName domain.com
    #   ServerAlias www.domain.com
    #   DocumentRoot /var/www/vhosts/domain.com/public
    #</VirtualHost>

Save the file and exit the text editor.

Now, you need to check the Apache syntax with the following command:

    httpd -t

Expected response:

    Syntax OK

Finally, either reload or restart Apache. If you are using CentOS 7 or later, you can use `systemctl`
for this command. Otherwise, use `service`. The following examples show both commands:

Using `service`:

    sudo service httpd reload

or

    sudo service httpd restart

Using `systemctl`:

    sudo systemctl reload httpd

or

    sudo systemctl restart httpd

**Note**: While `systemctl` only works in CentOS 7 or later, those versions also support `service`,
if that is easier. The system links to `systemctl` automatically.

This same process works for SSL, port 443, vhosts, as well.

As before, if you have the option, use `reload` rather than `restart`.

### CentOS and Nginx

Nginx refers to vhosts as server blocks. Use the same process for commenting out server blocks for Nginx 
in CentOS that you used for Apache.

First, however, we need to find the server block that we want to disable. You do so with the following command:

    nginx -T | grep domain.com

Again, look for a pathway ending in **.conf** for your domain. It looks similar to the following example:

    /etc/nginx/conf.d/domain.com.conf

Now, open that file with your favorite text editor by using one of the following commands:

    sudo vim /etc/nginx/conf.d/domain.com.conf

or

    sudo nano /etc/nginx/conf.d/domain.com.conf

The file looks similar to the following example:

    server {
	listen 80;
	server_name domain.com www.domain.com;
	access_log /var/log/nginx/domain.com.access.log;
	error_log /var/log/nginx/domain.com.error.log;
	root /var/www/domain.com/httpdocs;
    location / {
	index index.html index.htm index.php;
	try_files $uri =404;
	}
    location ~ \.php$ {
        include /etc/nginx/fastcgi_params;
        fastcgi_pass  127.0.0.1:9000; #this means php-fpm will run on a port
        # fastcgi_pass unix:/run/php-fpm/domain.com.sock; or you could have php-fpm running on a socket
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME /var/www/html/domain.com$fastcgi_script_name;
        }
    }

You should comment out this entire server block. If you are using `vim`, make sure you are in **Insert**
mode first. Your server block should look like this:


    #server {
    #   listen 80;
    #   server_name domain.com www.domain.com;
    #   access_log /var/log/nginx/domain.com.access.log;
    #   error_log /var/log/nginx/domain.com.error.log;
    #   root /var/www/domain.com/httpdocs;
    #location / {
    #   index index.html index.htm index.php;
    #   try_files $uri =404;
    #   }
    #location ~ \.php$ {
    #   include /etc/nginx/fastcgi_params;
    #    fastcgi_pass  127.0.0.1:9000; #this means php-fpm will run on a port
    #    # fastcgi_pass unix:/run/php-fpm/domain.com.sock; or you could have php-fpm running on a socket
    #   fastcgi_index index.php;
    #    fastcgi_param SCRIPT_FILENAME /var/www/html/domain.com$fastcgi_script_name;
    #    }
    #}

Save the file and quit the text editor.

Now, check the Nginx syntax with the following command:

    nginx -t

Expected response:

    nginx: the configuration file <file-path> syntax is ok
    nginx: configuration file <file-path> test is successful

Your file pathway displays in the <path-path> place holder. After you receive a positive
response, you need to reload or restart Nginx by using one of the following commands:

    sudo service nginx reload

or

    sudo service nginx restart

If you run `php-fpm`, restart that service by using the following command:

    sudo service php-fpm restart

You can also restart or reload Nginx by using `systemctl` instead of `service`, as shown in the
following examples:

    sudo systemctl reload nginx

or

    sudo systemctl restart nginx

Restart `php-fpm` with `systemctl`:

    sudo systemctl restart php-fpm

Now you know how to disable vhosts or server blocks in both CentOS and the Ubuntu operating system
for Apache and Nginx.
