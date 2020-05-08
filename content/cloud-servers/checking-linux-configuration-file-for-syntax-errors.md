---
permalink: checking-linux-configuration-file-for-syntax-errors/
audit_date:
title: 'Checking Linux configuration file for syntax errors'
type: article
created_date: '2020-05-05'
created_by: Matthew Brown
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

This article show you where to check configuration files for SSH, Apache an Nginx. This is a vital step when making changes to configuration files because if there is a syntax error, when you got to restart or reload the service, it will show an error and not start resulting in downtime.


## SSH

For ssh, the configuration file will be located in /etc/ssh/sshd_config. Whenever you make a change in the configuration you will run the command `sshd -t` to check the configuration. If there is something wrong with the configuration, it will display an error message like the following:

```

# sshd -t

/etc/ssh/sshd_config: line 17: Bad configuration option: ZPort
/etc/ssh/sshd_config: terminating, 1 bad configuration options

```

If there are no errors then it will not display anything when you run the command

## Apache

For apache, the syntax checker will check the default apache config and any virtual hosts that you have configured on the server. The command to check the syntax is `httpd -t` (`apache2ctl -t` for Ubuntu and Debian). When running the syntax check, if there is an error it will show where the error is and what file has the error:

```

# httpd -t

AH00112: Warning: DocumentRoot [/var/www/test.com/httpdocs] does not exist
AH00526: Syntax error on line 3 of /etc/httpd/conf.d/test.conf:
ServerName takes one argument, The hostname and port of the server

```
If there are no errors, it will output `Syntax OK`. Keep in mind that if there are no vhosts on the server, the syntax check will still show `Syntax OK` if the syntax for the default configuration file for Apache is correct.

## Nginx
For Nginx, it is a little different compared to Apache, where in order to check the syntax of the default nginx configuration, you will run the command `nginx -t`. However if you want to check the syntax of a specific server block, you will need to add the `-c` flag and specify the path to the server block as such:

```

[root@localhost ~]# nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful

[root@localhost ~]# nginx -t -c /etc/nginx/conf.d/test.com.conf
nginx: [emerg] "server" directive is not allowed here in /etc/nginx/conf.d/test.com.conf:1
nginx: configuration file /etc/nginx/conf.d/test.com.conf test failed

```
