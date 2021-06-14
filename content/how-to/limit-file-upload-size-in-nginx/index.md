---
permalink: limit-file-upload-size-in-nginx/
audit_date:
title: 'Limit File Upload Size in Nginx'
type: article
created_date: '2021-05-08'
created_by: Ivan Arteaga
last_modified_date: '2021-05-08'
last_modified_by: Ivan Arteaga
product: Cloud
product_url: Cloud
---

## Limit File Upload Size in Nginx

By limiting the upload file size we can prevent some types of (DOS) attacks and many other related issues, Nginx has a limit of 1MB uploads and in order to adjust/change the file upload size we can edit the **`client_max_body_size`**.

This can be performed in the **http**, **server**, or **location** block.

- If the change has been made in the **http** block, will affect all server blocks (virtual hosts).
- If the change has been made in the **server** block, will affect a particular site/app.
- If the change has been made in the **location** block, will affect a particular directory (uploads) under a site/app.

## How to do it?
To increase the limit we will require to perform the changes in the /etc/nginx/nginx.conf file on block described as above.
HTTP
**`
http {
    ...
    client_max_body_size 100M;
}
`**
SERVER
**`
server {
    ...
    client_max_body_size 100M;
}
`**
LOCATION
**`
location /uploads {
    ...
    client_max_body_size 100M;
} 
`**

Now only save the file and restart the Nginx web server to apply the changes using following commands.

**`systemctl restart nginx`**   -----systemd
**`service nginx restart`**    ----sysvinit


Additional notes:
**`sudo nginx -s reload`** reloads configuration without restarting nginx
