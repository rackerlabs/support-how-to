---
permalink: /create-redirects-in-nginx/
audit_date:
title: 'How to Create Redirects in Nginx'
type: article
created_date: '2021-03-04'
created_by: John Abercrombie
last_modified_date: '2021-03-04'
last_modified_by: John Abercrombie
product: 
product_url: 
---

# Why Use a Redirect?

A redirect is used whenever a website owner wants one address to reroute to another address. This is typically used in two cases: redirecting HTTP to HTTPS, or redirecting one domain to another domain.

```sh
HTTP to HTTPS Example:

You want your customers to reach your secure (SSL) site even if they type in http://yourwebsite.com or yourwebsite.com into their browser. This type of redirect will accomplish just that. Even if your customer types in http://yourwebsite.com, the redirect in Nginx will redirect the request to https://yourwebsite.com.

One Domain to Another Example:

You own yourwebsite.com, yourwebsite.org, and yourwebsite.net, but you want your customers to be directed to yourwebsite.com regardless of which version they type into their browser when visiting your site.
```

# How to Redirect in Nginx?

HTTP to HTTPS

Whenever an SSL certificate is installed on your server, you will have two server blocks for your website: one for http, and one for https. The problem is you need a way to force traffic to your SSL-secured site (the https version). You can accomplish this by adding a redirect to the Nginx server block for your website.

Open the configuration file your domain. This is usually located a directory such as /etc/nginx/vhost.d/yourwebsite.com.conf. The .conf is the indicator you are looking for as this denotes the configuration file for your domain. Open the file with your favorite text editor. We will use vim for this example.

```sh
vim /etc/nginx/vhost.d/yourdomain.com.conf

Your server block will look similar to this:

server {
	listen 80;
	server_name yourwebsite.com www.yourwebsite.com;
}
```

Depending on your particular configuration, this will likely contain more information than what is listed above, but for the purposes of this example, we're using a basic example focusing on the redirect option.

However, you want your customers to go to the secured version of yourwebsite.com, so we need to add a redirect to the above server block. You do that by adding the following:

```sh
server {
	listen 80;
	server_name yourwebsite.com www.yourwebsite.com;
	return 301 https://yourwebsite.com$request_uri;
}
```

With the above redirect line added, any time your customers type in yourwebsite.com or www.yourwebsite.com, they will automatically be redirected to the https://yourwebsite.com version of your website. Please note, however, that this line must be added to the HTTP (80) server block, not the HTTPS (443) server block.

You will probably also want to redirect any https://www.yourwebsite.com requests to https://yourwebsite.com. You can do this by adding another redirect line to the 443 server block (often located below the 80 server block within the configuration file). That change will look like this:

```sh
server {
	listen 443;
	server_name www.yourwebsite.com;
	return 301 https://yourwebsite.com$request_uri;
}

server {
	listen 443;
	server_name yourwebsite.com;
}
```

Please note that your server block will contain more information. The above examples are purely to illustrate the change made to redirect the www version of your website to the non-www version for https.


One Domain to Another

When you have a domain with multiple top-level domains (ie, .com, .net, .org, etc.), and you want all of those sites to reach the same website, we do that with a redirect. For this example, we will be assuming that you own yourwebsite.com, yourwebsite.org, and yourwebsite.net, and you would like all of those to redirect to yourwebsite.com.

You will locate the configuration file for your domain again. Instead of adding an https redirect, we will add the following:

```sh
server {
	listen 80;
	server_name yourwebsite.net;
	return 301 $scheme://yourwebsite.com$request_uri;
}

server {
	listen 80;
	server_name yourwebsite.org;
	return 301 $scheme://yourwebsite.com$request_uri;
}
```

Now, whenever your customers enter yourwebsite.net or yourwebsite.org, they will be redirected to yourwebsite.com instead.

Save and close your configuration files after your edits, restart both nginx and php-fpm to make those changes live, and you're all set!
	


