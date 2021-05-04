---
permalink: testing-network-services-with-Netcat
audit_date: '2020-09-25'
title: Testing network services with Netcat
type: article
created_date: '2012-06-21'
created_by: Rackspace Support
last_modified_date: '2020-09-25'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

**Warning:** Netcat's software creator has not updated the software since 2006. Therefore, Rackspace Technology makes no warranty that the quality of Netcat will meet your expectations.  

### Using Netcat

If your network service is malfunctioning but you know the service is [listening to a network port](/support/how-to/checking-listening-ports-with-netstat), you can verify the program connection to troubleshoot the problem. 

Use the Netcat command, `nc`, to access the service. If you are running a Red Hat&reg;-based distribution and you don't have `nc` installed, type the following command on the command line:

    $ sudo yum install nc`

For a Debian&reg;-based distribution, type the following command on the command line: 

    $ sudo apt-get install Netcat`

### Basic test

Run a simple test to verify that the port accepts connections.

Type `nc` on the command line followed by the `-vz` option with your IP address and port:

    $ nc -vz IP_address port
    
The IP address should be the one on which the service receives connections.   

The following examples show the possible output messages:

#### The connection succeeds

    $ nc -vz 203.0.113.96 21
    Connection to 203.0.113.96 21 port [tcp/ftp] succeeded!

#### The connection is refused

    $ nc -vz 203.0.113.96 80
    nc: connect to 203.0.113.96 port 80 (tcp) failed: Connection refused

#### There is no response to the connection request

    $ nc -vz 203.0.113.96 80
    nc: connect to 203.0.113.96 port 80 (tcp) failed: Connection timed out

#### Connection refused

The service isn't running, or a firewall is rejecting the connection. Verify the process status by running `ps` on the command line. See [Checking running services on Linux](/support/how-to/checking-running-services-on-linux) for more options.

**Note:** If your service is running, your firewall might reject the connection. Read the **connection timed out** section for instructions on firewall troubleshooting.

### Connection timed out

A *connection timed out* response indicates that your connection is not working, which could mean your firewall is blocking the port. Test the connection status by adding a rule that accepts connections on the required port.

The following example inserts a rule on line 1 of the input chain that accepts all TCP connections on port `80` (HTTP). Use this rule when testing a web server such as Apache&reg;.

    $ sudo /sbin/iptables -I INPUT 1 -p tcp --dport http -j ACCEPT

IP tables instantly reflects any changes made. Repeat the test with `nc` to see if there is any change in the response.

If you want to remove the rule you have added, you can use the `-D` option combined with the position of the rule in the chain. The previous example added a rule at line 1, the top of the chain. The following example shows how to remove it.

    $ sudo /sbin/iptables -D INPUT 1

You can check your current firewall configuration at any time by running the following command on the command line:

    $ sudo /sbin/iptables -L -v

### Connection succeeded

If the initial connection succeeds, Netcat can connect to the service. Look at the connection in more detail.

First, use the `-vt` option to see if the service can respond to basic network queries:

    $ nc -vt IP Address Port

If you can send commands to the service-daemon and receive responses, that indicates that the program is accessible, and your issue might be due to the client's connection configuration.

After you connect, test the service to get a response. You can test the service by sending a `GET` request to a web server, or some other appropriate data to prompt the server for a response.

### Closing the connection

You can terminate the connection by either pressing **Ctrl-C** or type the service-specific quit command.

For example, you can close a connection to a file transfer protocol, FTP, server with the `QUIT` command:

    $ nc -vt 203.0.113.96 21
    Connection to 203.0.113.96 21 port [tcp/ftp] succeeded!
    220 (vsFTPd 2.0.5)
    $ QUIT
    221 Goodbye.

#### Commands rejected

Suppose `nc` reports success but does not allow you to send any commands, or you get a response from the service-daemon reporting the service is not available. In that case, you might have transmission control protocol wrappers, *TCP wrappers*, providing access control.

An FTP service being blocked by TCP wrappers could look like the following example:

    $ nc -vt 203.0.113.96 21
    Connection to 203.0.113.96 21 port [tcp/ftp] succeeded!
    421 Service not available.

Programs that are compatible with TCP wrappers are compiled with `libwrap`. To check if a program can use TCP
wrappers, use the following command:

    $ ldd /path/to/binary | grep libwrap

The following example checks the `vsftpd` program for the `libwrap` shared-library file.

    ldd /usr/sbin/vsftpd | grep libwrap
    libwrap.so.0 => /lib64/libwrap.so.0 (0x00007f62c734a000)

If the program is not compatible with TCP wrappers, the preceding `grep` command does not return anything.

#### Checking logs

A blocked connection produces a log entry. Check the program's logs for relevant messages.

In the `vsftpd` logs, found at **/var/log/vsftpd.log**, a blocked connection due to tcp wrappers looks like the following example:

    Tue Jun  7 16:14:21 2011 [pid 28599] CONNECT: Client "203.0.113.43", "Connection refused: tcp_wrappers denial."

#### hosts.deny

The **/etc/hosts.deny** file establishes the definition for blocked connections. If you have trouble seeing an entry for your service in the file, use `grep` to search for it.

Search the file for the program name by running the following command: 

    $ sudo grep "vsftpd" /etc/hosts.deny
    vsftpd : ALL

Try commenting out any offending lines using a hash (\#). Changes to this file take effect automatically&mdash;you don't need to restart any services.

Note that TCP wrappers allow a connection by default, so if it is the cause of the issue, there must be an entry in **/etc/hosts.deny** for the
service. You could rename the file **/etc/hosts.deny** to temporarily remove all your deny rules.  For example,  run `sudo mv /etc/hosts.deny /etc/hosts.deny.old`. Note that this command affects all applications that use TCP wrappers. Don't forget to change it back after you finish your tests, if necessary.

### Further investigation

If you have completed all the tests in this article without identifying any issues, the service is likely running
normally. The next step is to test the connectivity to the server by using `ping` and `traceroute` utilities.
  
