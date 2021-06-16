---
permalink: limit-file-upload-size-in-nginx
audit_date:
title: 'Limit File Upload Size in NGINX'
type: article
created_date: '2021-05-08'
created_by: Ivan Arteaga
last_modified_date: '2021-06-16'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

By limiting the file size of uploads, you can prevent some types of Denial-of-service (DOS)
attacks and many other issues. By default, NGINX&reg; has a upload limit of 1 MB per file.
By editing **client_max_body_size**, you adjust the file upload size.

Use the **http**, **server**, or **location** block to edit **client_max_body_size**.

- Changes to the **http** block affect all server blocks (virtual hosts).
- Changes to the **server** block affect a particular site or application.
- Changes to the  **location** block affect a particular directory for uploads under a site
  or application.

### Edit the upload file size value

1. Edit the **/etc/nginx/nginx.conf** file to increase the limit of the files to upload:

   - **http**:

          http {
          ...
          client_max_body_size 100M;
          }

   - **server**:

          server {
          ...
          client_max_body_size 100M;
          }

   - **location**:

          location /uploads {
          ...
          client_max_body_size 100M;
          } 

2. Save the file and restart the NGINX webserver to apply the changes:
   
   - **systemd**
    
      `systemctl restart nginx`

   - **sysvinit**

     `service nginx restart`


**Note:** `sudo nginx -s reload` reloads the configuration without restarting `nginx`.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
