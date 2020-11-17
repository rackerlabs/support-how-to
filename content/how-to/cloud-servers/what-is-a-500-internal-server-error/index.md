---
permalink: what-is-a-500-internal-server-error/
audit_date:
title: What is a 500 Internal Server Error
type: article
created_date: '2020-11-06'
created_by: James Andrade
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# What is a 500 Internal Server Error?

This is a generic error that basically means something is wrong with the website server, however it doesn't get more specific then that. It's a sign that someone will need to log into the server and troubleshoot/investigate the issue. 

There can be a number of issues that could cause this error, majority of the time it will be server-side: 

1. Permissions on website content files/folders 
2. Issues with .htaccess file
3. Scripting errors 
4. Specific errors with your CMS (wordpress, magento)

File permissions:

https://docs.rackspace.com/support/how-to/linux-file-permission-concepts/

You can try checking the error logs for your website. This is usually found in "/var/log/httpd/" or wherever the logs where set for your website. 

https://docs.rackspace.com/support/how-to/using-server-logs/

Hopefully this gives a little bit more information on the error.
