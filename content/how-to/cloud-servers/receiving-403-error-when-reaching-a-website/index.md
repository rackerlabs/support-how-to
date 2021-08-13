---
permalink: receiving-403-error-when-reaching-a-website/
audit_date:
title: 'Receiving 403 error when reaching a website'
type: article
created_date: '2021-06-27'
created_by: Ivan Arteaga
last_modified_date: '2021-08-13'
last_modified_by: Miguel Salgado
product: Cloud
product_url: Cloud
---

## Receiving 403 when trying to reach a website
HTTP Error 403 is a HTTP status error received when attempting to access a webpage that is restricted or forbidden, commonly presented when we are testing our website.
Keep in mind that this error can have a variety of reasons to be displayed in our webpage for example, **Incorrect File/Directory Permissions** or a **misconfiguration of your files**.
This error can alternatively be displayed like:
- HTTP Error 403 – Forbidden
- Forbidden: You do not have permission to access [directory] on this server
- 403 Forbidden
- Access Denied You do not have permission to access
- 403 forbidden request forbidden by administrative rules

## Causes
Assuming our website is running with Nginx:
**Cause 1: Incorrect Index File**
First make sure the correct file it’s indicated and in index config:
This can be done by accessing the root for our webpage: `cd /var/www/html ` 

A simple `ls` command should enable you to determine the name of our php file.
Next, we open with our text editor the following file: `/etc/ngix/sites-available/default`

And the following configuration is displayed:
```
server {
      listen 80;
      listen [::]:80:
      servername example.com;
      root /var/www/html/;
      index index.html index.php;
```

If the PHP file indicated in index index.html index.php; does not match the name of the file located in  `/var/www/html` we will need to make the changes so the file names match.

**Cause 2: Incorrect set of permissions**
Navigate to `/var/www/html` and perform a `ls -la` to verify the permissions of the directory and the files.

Perform the following commands to provide permissions to your directory and files.
```
find /var/www/html/ -type d /exec chmod 755 {}\;
find /var/www/html/ -type f /exec chmod 644 {}\;
```

To verify that permissions have been updated use `ls-la` again and the following output will confirm the changes.

Now we have verified that the permissions have changed and you should have access to the website.

## Conclusion
As we previously discussed, receiving a 403 HTTP Status may have a variety of causes, the 2 from above are just a portion of what a 403 HTTP may represent but are the most common for a test page.


