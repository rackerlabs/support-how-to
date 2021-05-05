---
permalink: create-redirects-in-nginx
audit_date: '2021-03-31'
title: 'Create redirects in Nginx'
type: article
created_date: '2021-03-04'
created_by: John Abercrombie
last_modified_date: '2021-03-31'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

### Why use a redirect

You use a redirect whenever a website owner wants an address to reroute to
another address, typically redirecting HTTP to HTTPS
or redirecting one domain to another domain.

**HTTP to HTTPS scenario:**

You want your customers to reach your secure (SSL) site even if they type
in `http://yourwebsite.com` or `yourwebsite.com` into their browser. This type of
redirect accomplishes just that. For example, if your customer types in `http://yourwebsite.com`,
the redirect in Nginx&reg; redirects the request to **https://yourwebsite.com**.

**One domain to another scenario:**

You own **yourwebsite.com**, **yourwebsite.org**, and **yourwebsite.net**, and
you want your customers to arrive at **yourwebsite.com** regardless of the URL they enter
into their browser to visit your site.

### How to redirect in Nginx

The following sections describe how to redirect from HTTP to HTTPS and from one
domain to another domain.

#### HTTP to HTTPS

When you install an SSL certificate on your server, you have two
server blocks for your website: one each for HTTP and HTTPS. The problem is
you need a way to force traffic to your SSL-secured site (the HTTPS version).
You can accomplish this by adding a redirect to the Nginx server block for your
website.

Open the configuration file for your domain. The file should be named similar to
**/etc/nginx/vhost.d/yourwebsite.com.conf**. The **.conf** indicates
the configuration file for your domain. Open the file with your favorite text editor.
The following example uses the `vim` editor:

```sh
vim /etc/nginx/vhost.d/yourdomain.com.conf

Your server block will look similar to this:

server {
	listen 80;
	server_name yourwebsite.com www.yourwebsite.com;
}
```

Depending on your particular configuration, this might contain more
information than the preceding example, but this is a
simple example focusing on the redirect option.

However, you want your customers to go to the secured version of
**yourwebsite.com**, so you need to add a redirect to the server block
in the configuration file. To do that, modify the block to look similar
to the following example and save the file:

```sh
server {
	listen 80;
	server_name yourwebsite.com www.yourwebsite.com;
	return 301 https://yourwebsite.com$request_uri;
}
```

With the preceding redirect line in place, any time your customers type in
**yourwebsite.com** or **www.yourwebsite.com**, the system automatically
redirects them to the **https://yourwebsite.com** version of your website.
Note, however, that you must add this line to the HTTP `80` server block, not
the HTTPS `443` server block.

You should probably also redirect any **https://www.yourwebsite.com**
requests to **https://yourwebsite.com**. You can do this by adding another
redirect line to the `443` server block, often located below the `80` server
block in the configuration file. That change looks similar to the following example:

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

**Note:** Your server blocks likely contain more information than the
preceding simplified examples.

#### One domain to another

When you have a domain with multiple top-level domains (such as **.com**,
**.net**, **.org**, and so on) and want all of those sites to reach the
same website, use a redirect. For this example, we assume that you own
**yourwebsite.com**, **yourwebsite.org**, and **yourwebsite.net**, and you want
to redirect all of those to **yourwebsite.com**.

Edit the configuration file for your domain again. Instead of adding
an **HTTPS** redirect, modify the server block as shown in the following
example:

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

Now, whenever your customers enter **yourwebsite.net** or **yourwebsite.org**, the
system redirects them to **yourwebsite.com** instead.

Save and close your configuration files after your edits and restart both `nginx` and
`php-fpm` to make those changes go live.
