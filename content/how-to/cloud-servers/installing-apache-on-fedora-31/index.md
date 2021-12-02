---
permalink: installing-apache-on-fedora-31
audit_date: '2021-12-02'
title: 'Installing Apache on Fedora 31'
type: article
created_date: '2021-12-02'
created_by: Luis Vazquez
last_modified_date: '2021-12-02'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

Apache HTTPD (also known as the *Apache HTTPD Server*) provides the service with which the client web browser communicate. This service has a daemon process (httpd) which runs in the background on your server and waits for requests from web clients. Then, web browsers provide those connections to the HTTP daemon and send requests, which daemon interprets, sending back the required data(an image, web page, etc).

### Prerequisites
   - OS Fedora 31

### httpd package
We always must make sure about a package content before installing it. To do that we can run these commands:

```sh
# yumdownloader httpd
# rpm -qpi httpd-*rpm
# rpm -qpc httpd-*rpm
```
The yumdownloader command help us to download the latest version of the httpd pakage to the current directory.
THe rpm -qpi httpd-*rpm command let us see the pakage info.
THe rpm -qpc httpd-*rpm command let us see the configuration files of the pagkage.

### Installing Apache
You can only install the httpd package to get started with Apache. However, if you are thinking of creating a secure (SSL) site you might prefer to add some other pakages related to httpd. To do this, run the command below:
```sh
# yum groupinstall "Web Server"
```

Otherwise, just install the httpd package:
```sh
# yum install httpd
```

#### Starting apache
To get Apache server going on your server, run the following commands:

```sh
# systemctl enable httpd.service
# systemctl start httpd.service
# systemctl status httpd.service
```

You should now be able to navigate your server’s IP address in a browser and see the Apache test page to confirm you’ve configured the server correctly. This page also displays useful information to configure Apache to serve your custom website or application.

### Related articles
- [Using server logs](https://docs.rackspace.com/support/how-to/using-server-logs)
- [Linux log files](https://docs.rackspace.com/support/how-to/linux-log-files/)
- [Vhosts and server blocks basics](https://docs.rackspace.com/support/how-to/vhost-and-server-blocks-basics/)

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
