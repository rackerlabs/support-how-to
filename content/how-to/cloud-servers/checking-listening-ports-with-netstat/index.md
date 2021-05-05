---
permalink: checking-listening-ports-with-netstat
audit_date: '2018-09-19'
title: Check listening ports with netstat
type: article
created_date: '2012-06-21'
created_by: Rackspace Support
last_modified_date: '2018-12-21'
last_modified_by: Kate Dougherty
product: Cloud Servers
product_url: cloud-servers
---

If you're troubleshooting a service that you know [is running normally](/support/how-to/checking-system-load-on-linux),
the next step is to ensure it's listening on the correct network port.

The `netstat` command shows the services listening to ports on a Linux
server and the details of any connections currently made to them.
The connection details to consider during basic network daemon
troubleshooting are the addresses that the daemon is listening on (including
the port number), the daemon's process identifier (PID), and the program
name.

You need to run `netstat` on the server that is running the service.
`Netstat` is not affected by your firewall configuration.

**Note:** You can also use the `lsof` and `ss` commands to check ports. Many of the command flags contained in this article are the same when you run the `lsof` and `ss` commands. However, the output returned when you use these commands might not resemble the output of the `netstat` tool. For more information about both commands, see the [`lsof`](https://linux.die.net/man/8/lsof) and [`ss`](https://linux.die.net/man/8/ss) command manuals.

### Check ports

To list the TCP ports that are being listened on, and the name of
each listener's daemon and its PID, run the following command:

    sudo netstat -plnt

The following example shows the output for three common programs
that are listening on three different sockets.

    $ sudo netstat -plnt
    Active Internet connections (only servers)
    Proto Recv-Q Send-Q Local Address               Foreign Address             State       PID/Program name
    tcp        0      0 0.0.0.0:3306                0.0.0.0:*                   LISTEN      3686/mysqld
    tcp        0      0 :::443                      :::*                        LISTEN      2218/httpd
    tcp        0      0 :::80                       :::*                        LISTEN      2218/httpd
    tcp        0      0 :::22                       :::*                        LISTEN      1051/sshd

### Filter the list

If the list of listening daemons is long, you can use `grep` to filter it.
For example, to filter out everything except the default web server port `80`, run the following command:

    $ sudo netstat -plnt | grep ':80'
    tcp        0      0 :::80                       :::*                        LISTEN      8448/httpd

### Analyze the results

Common outcomes include the following results:

-   Nothing is listening on the port. Check the service configuration
    files, and then restart the service.
-   The correct service is listening on the correct port. In this case
    you need to test the service more thoroughly. Skip to the article on
    [testing the listening service for response using
    netcat](/support/how-to/testing-network-services-with-netcat).
-   Something other than the expected service appears to be listening on
    the port.

**Note**: A super-server, such as xinetd,
might be listening on the port. Check your xinetd configuration to ensure that this behavior is acceptable.

If something else is listening on the port, you can disable the program by running `sudo service httpd stop`, or change its configuration so that it no
longer listens on the port. When `netstat` shows the port is free, enable the correct service (for example `sudo service vsftpd start`).

If you make any changes because the incorrect service is listening, run the `netstat` command again. If `netstat` doesn't show the program listening on the correct port, you need to address its configuration before you go any further.

If you make changes at this point, be sure to test your setup to verify that you have resolved your issue.

If using the `netstat` did not resolve your port issues, continue to test connections to the service by using [the netcat command.](/support/how-to/testing-network-services-with-netcat)

<script type="application/ld+json">
  {
  "@context": "https://schema.org/",
  "@type": "HowTo",
      "name":"Check listening ports with netstat",
  	  "description": "This article describes how to ensure that a server that you are troubleshooting is listening on the correct network port by using netstat.",
  	  "step": [
  	   	{
  	   	"@type": "HowToSection",
  	   	"name": "Check ports",
  	       "position": "1",
           "itemListElement": "To list the TCP ports that are being listened on and the name of each listener’s daemon and its PID, run the netstat command."
        },
        {
  	   	"@type": "HowToSection",
  	   	"name": "Filter the list",
  	       "position": "2",
    	   	 "itemListElement": "If the list of listening daemons is long, you can use grep to filter it."
         },
         {
   	   	 "@type": "HowToSection",
   	   	 "name": "Analyze the results",
   	        "position": "2",
     	   	  "itemListElement": "Your next steps depend on the results. There are several common outcomes."
         }
    ]}
</script>
