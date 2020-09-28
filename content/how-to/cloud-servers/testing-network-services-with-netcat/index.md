---
permalink: testing-network-services-with-Netcat/
audit_date: '2020-09-25
title: Testing Network Services with Netcat
type: article
created_date: '2012-06-21'
created_by: Rackspace Support
last_modified_date: '2020-09-25
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

**Warning:** Netcat's Software creator has not updated the software since 2006. Therefore, Rackspace Technology makes no warranty that the quality of Netcat will meet your expectations.  

### Using Netcat

If you have a network service malfunctioning, but you know the service is [listening to a network port](/support/how-to/checking-listening-ports-with-netstat), you can verify the program connection in search of the problem. 

Use Netcat **Nc**, to access the service. If you are running a Red Hat-based distribution, and you don't have Nc installed, type this command in the command line:

`sudo yum install nc`

For a Debian-based distribution, type this command in the command line: 


`sudo apt-get install Netcat`


### Basic test

Run a simple test to verify that the port accepts connections.

Type `nc` in the command line followed by the `-vz` option:

    {.pre .codeblock}
    nc -vz IP_Address Port
    
The IP address should be the one on which the service receives connections.   

The following examples show the possible output messages:

##### The connection is successfully made

```
    {.pre .codeblock}
    nc -vz 203.0.113.96 21
    Connection to 203.0.113.96 21 port [tcp/ftp] succeeded!
```

##### The connection is refused

    {.pre .codeblock}
    nc -vz 203.0.113.96 80
    nc: connect to 203.0.113.96 port 80 (tcp) failed: Connection refused

##### There is no response to the connection request

    {.pre .codeblock}
    nc -vz 203.0.113.96 80
    nc: connect to 203.0.113.96 port 80 (tcp) failed: Connection timed out

##### Connection refused

The service isn't running, or a firewall is rejecting the connection. Verify the process status by running `ps` in the command line. Check the [previous article in this series on checking running services](/support/how-to/checking-running-services-on-linux) for more options.


**Note:** If your service is running, your firewall may reject the connection. Read the _connection timed out_ section for instructions on firewall troubleshooting.


### Connection timed out

A connection timed out response indicates that your connection is not working. This could mean your firewall is blocking the port. Test the connection status by adding a rule that will accept connections on the required port.

The following example inserts a rule on line 1 of the input chain that will accept all tcp connections on port 80 (http). Use this rule when testing a web server such as Apache.

    {.pre .codeblock}
    sudo /sbin/iptables -I INPUT 1 -p tcp --dport http -j ACCEPT

IP tables instantly reflect any changes made. Repeat the test with nc to see if there is any change in the response.

If you want to remove the rule you have added you can use the -D option as well as the position of the rule in the chain. In the previous example we added a rule at line 1, the top of the chain. The following example shows how to remove it.

    {.pre .codeblock}
    sudo /sbin/iptables -D INPUT 1


You can check your current firewall configuration at any time by running the following command in the command line:

    {.pre .codeblock}
    sudo /sbin/iptables -L -v

### Connection succeeded

If the initial connection succeeds, Netcat can connect to the service. Look at the connection in more detail.

First use the "-vt" option to see if the service can respond to basic network queries:

    {.pre .codeblock}
    nc -vt IP Address Port

If you can send commands to the service-daemon and receive responses, that indicates that the program is accessible and your issue may be due to the client's connection configuration.

Once you've connected, test the service to get a response. You can test the service by sending a _GET_ request to a web server, or some other appropriate data to prompt the server for a response.

### Closing the connection

You can termintate the connection by either pressing `Ctrl + C`,  or type the service specific quit command.

As an example, you can close a connection to a file transfer protocol _FTP_ server with the `QUIT` command:

    {.pre .codeblock}
    nc -vt 203.0.113.96 21
    Connection to 203.0.113.96 21 port [tcp/ftp] succeeded!
    220 (vsFTPd 2.0.5)
    QUIT
    221 Goodbye.

#### Commands rejected

If Nc reports success, but does not allow you to send any commands, or you get a response from the service-daemon reporting the service is not available, you may have transmission control protocol _tcp wrappers_ providing access control.

An ftp service being blocked by tcp wrappers could look like this:

    {.pre .codeblock}
    nc -vt 203.0.113.96 21
    Connection to 203.0.113.96 21 port [tcp/ftp] succeeded!
    421 Service not available.

If the program is compatible with tcp wrappers it will have been compiled with libwrap. To check if a program can utilize tcp
wrappers, use the following command:

    {.pre .codeblock}
    ldd /path/to/binary | grep libwrap

In the following example the vsftpd program is checked for the libwrap shared library file.

    {.pre .codeblock}
    ldd /usr/sbin/vsftpd | grep libwrap
    libwrap.so.0 => /lib64/libwrap.so.0 (0x00007f62c734a000)

If the program is not compatible with tcp wrappers, grep will not return anything.

#### Checking logs

A blocked connection produces a log entry. Check the program's logs for relevant messages.

In the logs for vsftpd, found at /var/log/vsftpd.log, a blocked connection due to tcp wrappers looks like this:

    {.pre .codeblock}
    Tue Jun  7 16:14:21 2011 [pid 28599] CONNECT: Client "203.0.113.43", "Connection refused: tcp_wrappers denial."

#### hosts.deny

The /etc/hosts.deny file establishes the definition for block connections. If you have trouble seeing an entry for your service in the file, use grep to search for it.

Search the file for the program name by typing: 

    {.pre .codeblock}
    sudo grep "vsftpd" /etc/hosts.deny
    vsftpd : ALL

Try commenting out any offending lines using a hash (\#). Changes to this file take effect automatically - no services need to be restarted.

Note that tcp wrappers will allow a connection by default, so if it is the cause of the issue there must be an entry in /etc/hosts.deny for the
service. You could rename the file /etc/hosts.deny to temporarily remove all your deny rules e.g. `sudo mv /etc/hosts.deny /etc/hosts.deny.old`.
Please be aware that this will affect all applications that use tcp wrappers.

### Further investigation

If you have completed all the tests described above without identifying any issues that is a good indication that the service is running
normally. The next step is to test the connectivity to the server by using ping and traceroute utilities.
  
