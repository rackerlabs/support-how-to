---
permalink: disabling-a-vhost-in-ubuntu-and-centos-for-apache-and-nginx/
audit_date:
title: 'How to Disable a Virtual Host in Ubuntu & CentOS for Apache & Nginx'
type: article
created_date: '2020-05-06'
created_by: John Abercrombie
last_modified_date: 
last_modified_by: 
product:
product_url:
---

# How to Disable a Virtual Host in Ubuntu & CentOS for Apache & Nginx

You need to disable a website, but you’re not sure how. It is easier than you might think. Before we begin, there are two things to keep in mind while reading the following guide:

>1. Your virtual host / server block may be titled differently than ‘domain.com.conf.’ You may use httpd.conf or ssl.conf, for example. In the places where you see ‘domain.com.conf,’ please input your particular configuration file name.

>2. This guide is going to use non-SSL virtual hosts / server blocks (80) in some of the examples. Please note that these steps do not differ if your virtual host / server block is an SSL-enabled virtual host / server block (443). The steps will be the same.

#Ubuntu (Apache)

Let’s start with the easiest. Ubuntu comes with two commands specifically for managing virtual hosts in Apache. In order to enable a virtual host, this command was used:

```sh
sudo a2ensite /etc/apache2/sites-available/domain.com.conf
```

If you understand what that collection of letters and a number mean, then you’ll find it easier to remember how to enable and/or disable an Apache virtual host in Ubuntu.

```sh
a2ensite
```

Here is the command broken down into parts as well as what those parts stand for:

> a2 = apache2 (what Ubuntu calls Apache)
> en = enable
> site = website virtual host

That command probably makes a lot more sense now. Well, making a website is great, but you need to disable one. The command you are looking for is:

```sh
a2dissite
```

This command is used like this:

```sh
sudo a2dissite /etc/apache2/sites-enabled/domain.com.conf
```

Like the enable command previously, this command can also be broken down into components to better understand (and remember) the command. It is broken down like so:

> a2 = apache2 (what Ubuntu calls Apache)
> dis = disable
> site = website virtual host

Also take note of the difference in directory paths between a2ensite and a2dissite. When you want to enable a virtual host in Apache in Ubuntu, you do so from the sites-available directory. When you want to disable a virtual host in Ubuntu, you do so from the sites-enabled directory.

After you disable the virtual host, you’ll want to verify the syntax of your Apache configuration with the following command:

```sh
apache2ctl -t
```

You want the following response:

```sh
Syntax OK
```

Now, you run the command to restart or reload Apache.

```sh
service apache2 restart
OR
service apache2 reload
```

The difference between restart and reload is restart will bring Apache down completely whereas reload will seamlessly start a new Apache service before stopping the original service. Typically, you will want to reload rather than restart when you have the option.

#Ubuntu (Nginx)

Disabling an Nginx server block (what nginx calls virtual hosts) is a little different. Nginx server blocks are enabled or disabled through the use of symlinks. Apache’s virtual hosts are too, but a2ensite and a2dissite don’t work for Nginx.

In order to disable a server block in Nginx in Ubuntu, you will want to remove the symlink between sites-enabled and sites-available. The command looks like this:

```sh
sudo rm /etc/nginx/sites-enabled/domain.com.conf
```

The symlink for your website, domain.com, is now removed. We now need to verify the Nginx syntax:

```sh
nginx -t
```

You want the following response:

```sh
nginx: the configuration file ... syntax is ok
nginx: configuration file ... test is successful
```

You will see a pathway where the ‘...’ are above. This is normal. Once you’ve received a positive response, you’ll need to reload or restart Nginx.

```sh
service nginx reload
OR
service nginx restart
```

As before, whenever you have the option to do so, you want to reload rather than restart so any other websites you have are not disrupted.

Side-note: if you are running php-fpm as well, you’ll need to restart service as well.

```sh
service php-fpm restart
```

# CentOS (Apache)

Disabling a virtual host in Apache in CentOS is a little more involved. CentOS doesn’t have an easy command to use. In CentOS, you will need to manually comment out the virtual host you want to disable.

Here is an example of a domain.com virtual host in Apache in CentOS:

```sh
<VirtualHost *:80>
	ServerName domain.com
	ServerAlias www.domain.com
	DocumentRoot /var/www/vhosts/domain.com/public
</VirtualHost>
```
We can find this virtual host by using the following command:

```sh
httpd -S | grep domain.com
```

The location of the virtual host will be listed in the output. It will look similar to this:

```sh
/etc/httpd/vhost.d/domain.com.conf
```
Depending on your particular setup, the above output may look different. However, the pathway you are looking for will end in your domain.com.conf.

Once you have the location of the virtual host, you’ll want to open the virtual host configuration file with your favorite text editor. Here are two examples using vim and nano:

```sh
sudo vim /etc/httpd/vhost.d/domain.com.conf
OR
sudo nano /etc/httpd/vhost.d/domain.com.conf
```

Once you have the virtual host configuration file open, you will place a # in front of each line. If you are using vim, you’ll want to enter Insert mode first. Your virtual host configuration should now look like this:

```sh
#<VirtualHost *:80>
#	ServerName domain.com
#	ServerAlias www.domain.com
#	DocumentRoot /var/www/vhosts/domain.com/public
#</VirtualHost>
```

Save, and exit the text editor.

Now, you need to check the Apache syntax:

```sh
httpd -t
```

The answer you want is:

```sh
Syntax OK
```

Once you receive that response, you will either reload or restart Apache. If you are using CentOS 7 or newer, you can use systemctl for this command. Otherwise, use service. Both will be shown below:

```sh
sudo service httpd reload
OR
sudo service httpd restart
```

Using systemctl:

```sh
sudo systemctl reload httpd
OR
sudo systemctl restart httpd
```

Side-note: While systemctl will only work in CentOS 7 or newer, you can use service instead if that is easier. The system will link to systemctl automatically.

This same process is used for SSL 443 virtual hosts as well.

As before, if you have the option to reload, reload rather than restart.

# CentOS (Nginx)

Nginx “virtual hosts” are called server blocks. You will use the same process of commenting out server blocks for nginx as well in CentOS.

First, however, we’ll need to find our server block that we want to disable. You do so with the following command:

```sh
nginx -T | grep domain.com
```

Again, you are looking for a pathway ending in .conf for your domain. It will resemble something like this:

```sh
/etc/nginx/conf.d/domain.com.conf
```

Now, we want to open that file with our favorite text editor:

```sh
sudo vim /etc/nginx/conf.d/domain.com.conf
OR
sudo nano /etc/nginx/conf.d/domain.com.conf
```

We will see a server block that resembles this:

```sh
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
```

We are going to comment out this entire server block. If you are using vim, make sure you are in Insert mode first. Your server block should look like this:

```sh
#server {
#	listen 80;
#	server_name domain.com www.domain.com;
#	access_log /var/log/nginx/domain.com.access.log;
#	error_log /var/log/nginx/domain.com.error.log;
#	root /var/www/domain.com/httpdocs;
#location / {
#	index index.html index.htm index.php;
#	try_files $uri =404;
#	}
#location ~ \.php$ {
#   include /etc/nginx/fastcgi_params;
#    fastcgi_pass  127.0.0.1:9000; #this means php-fpm will run on a port
#    # fastcgi_pass unix:/run/php-fpm/domain.com.sock; or you could have php-fpm running on a socket
#   fastcgi_index index.php;
#    fastcgi_param SCRIPT_FILENAME /var/www/html/domain.com$fastcgi_script_name;
#    }
#}
```
Save, and quit the text editor.
Now, we are going to check the nginx syntax:
```sh
nginx -t
```
You want to see the following response:
```sh
nginx: the configuration file … syntax is ok
nginx: configuration file … test is successful
```
You will see a pathway where the above ‘...’ are. This is normal. Once you have a positive result, you will want to reload or restart Nginx as well as restart php-fpm.

```sh
sudo service nginx reload
OR
sudo service nginx restart
```
And php-fpm:

```sh
sudo service php-fpm restart
```
This can also be accomplished using systemctl instead of service. The systemctl commands will look like this:

```sh
sudo systemctl reload nginx
OR
sudo systemctl restart nginx
```
```sh
sudo systemctl restart php-fpm
```
Now you know how to disable virtual hosts (or server blocks) in both CentOS and Ubuntu for Apache and Nginx.
