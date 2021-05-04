---
permalink: check-linux-configuration-files-for-syntax-errors
audit_date: '2020-05-08'
title: 'Check Linux configuration files for syntax errors'
type: article
created_date: '2020-05-05'
created_by: Matthew Brown
last_modified_date: '2020-05-08'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to check the Linux&reg; configuration for Secure Shell (SSH), Apache&reg;, and
Nginx&reg;, which helps you to troubleshoot errors. For example, you might make a change
to a configuration file and introduce a syntax error. As a result, when you restart or reload the service, it
shows an error and fails to restart, which results in downtime.

### SSH

You can find the SSH configuration file in **/etc/ssh/sshd_config**. After you change the configuration file,
run the command `sshd -t` to check the configuration. If the configuration has errors, the following error
message displays:

    # sshd -t

    /etc/ssh/sshd_config: line 17: Bad configuration option: ZPort
    /etc/ssh/sshd_config: terminating, 1 bad configuration options

If there are no errors, nothing displays when you run the command.

### Apache

The syntax check command checks the default Apache configuration file and any virtual hosts (vhosts) that you
have configured on the server. To check the syntax, run `httpd -t` or `apache2ctl -t` for the Ubuntu&reg; operating
system and Debian&reg;. If there is an error with the syntax check, the error message displays output similar to the 
following example:

    # httpd -t

    AH00112: Warning: DocumentRoot [/var/www/test.com/httpdocs] does not exist
    AH00526: Syntax error on line 3 of /etc/httpd/conf.d/test.conf:
    ServerName takes one argument, The hostname and port of the server

If there are no errors, the message `Syntax OK` displays. Even if there are no vhosts on the server, the syntax
check still shows `Syntax OK` when the syntax for the default configuration file for Apache is correct.

### Nginx

Nginx syntax checks behave differently than Apache. To check the syntax of the default Nginx configuration,
run the command `nginx -t`. However, if you want to check the syntax of a specific server block, you need
to add the `-c` flag and specify the path to the server block as shown in the following example:

    [root@localhost ~]# nginx -t
    nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
    nginx: configuration file /etc/nginx/nginx.conf test is successful

    [root@localhost ~]# nginx -t -c /etc/nginx/conf.d/test.com.conf
    nginx: [emerg] "server" directive is not allowed here in /etc/nginx/conf.d/test.com.conf:1
    nginx: configuration file /etc/nginx/conf.d/test.com.conf test failed
