---
permalink: basic-nginx-troubleshooting/
audit_date:
title: 'Basic Nginx troubleshooting'
type: article
created_date: '2021-08-10'
created_by: Alfonso Murillo
last_modified_date: '2021-08-12'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

# Basic Nginx troubleshooting
This article shows some basic troubleshooting for Nginx, one of the most popular HTTP servers. The purpose is to fix some of the most common errors that may be present in your Nginx configuration.

### Search for syntax errors or warnings in the configuration
Through a simple command you can verify the status of the Nginx configuration file:
`$ sudo systemctl config nginx`
The output will show if the configuration file is correct or, if it is not, it will show the file and the line where the problem is.
```
$ sudo systemctl config nginx
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

```
$ sudo systemctl config nginx
"worker_connections" directive is not allowed here in /etc/nginx/nginx.conf:12
nginx: configuration file /etc/nginx/nginx.conf test failed
```
In case you do not have the service command available in your system you can opt to use the `-t` Nginx parameter, which also tests the configuration file for correct syntax and then tries to open the files that are referred to in the configuration.
`$ sudo nginx -t`

### Check that Nginx is running
To check the Nginx service status you can use the following command:
`$ sudo systemctl status nginx`
You can also use the generic commands to validate the status of the service:
`$ sudo /etc/init.d/nginx status`

### Verify that the ports are open and the service is listening
Verify that you have the needed ports are open and to verify that the Nginx service is listening through them you can use the `lsof` command, ideally in the default ports 80 and 443.

```
$ sudo lsof -i :80 -s TCP:LISTEN
nginx   1305 nginx    6u  IPv4 1613873      0t0  TCP *:http (LISTEN)
nginx   1305 nginx    7u  IPv6 1613874      0t0  TCP *:http (LISTEN)
nginx   1306 nginx    6u  IPv4 1613873      0t0  TCP *:http (LISTEN)
nginx   1306 nginx    7u  IPv6 1613874      0t0  TCP *:http (LISTEN)
```

### Check if Nginx processes requests
If Nginx is actually listening to the appropriate ports, the next step is to check if it is processing requests, which can be made by using the `curl` tool by using the IP, URL, or localhost if your setup listens on localhost:

```
$ curl -i http://127.0.0.1/nginx_status
HTTP/1.1 200 OK
Server: nginx/1.11.1
Date: Wed, 08 Aug 2021 11:36:43 GMT
Content-Type: text/plain
Content-Length: 97
Connection: keep-alive

Active connections: 1
server accepts handled requests
3 3 3
Reading: 0 Writing: 1 Waiting: 0
```

### Check the logs
Check the last logs of the Nginx service.
`$ sudo tail -f /var/log/nginx/access.log /var/log/nginx/error.log`

### Check permissions
Make sure that Nginx has the appropriate permissions for accessing the needed files.

```
$ namei -om /usr/share/nginx/html/index.html
f: /usr/share/nginx/html/index.html
drwxr-xr-x root root /
drwxr-xr-x root root usr
drwxr-xr-x root root share
drwxr-xr-x root root nginx
drwxr-xr-x root root html
-rw-r--r-- root root index.html
```

### Reload the service
In case you made changes to the configuration file that have not been applied you can reload the service, starting new Nginx processes, and shutting down gently the old workers to avoid a quick and aggressive shutdown.
`$ sudo service nginx reload`
For the quick shutdown that does not wait for processes to end, you can restart Nginx.
`$ sudo service nginx restart`

### Enable de debug mode
In the configuration file (usually `/etc/nginx/nginx.conf`) change the log level for the `error_log` directive:
```
server {
# stuff
error_log /var/logs/nginx/error.log debug;
# stuff
}
```
You can debug rewrite rules to see the processing results in the error log:
```
server {
# stuff
error_log /var/logs/nginx/error.log notice;
rewrite_log on;
# stuff
}
```

### Verify the DNS resolution
Rules on `/etc/hosts` have priority over DNS resolutions. You can verify the DNS records with:
`$ host -t A website.com`
You can aslo check the complete DNS resolution:
`$ dig +trace website.com`

## Conclusions
These are some basic troubleshooting steps for some of the most common errors with Nginx. You can also rely on the documentation if these steps do not fix your issue, taking advantage of the great popularity of Nginx.




















