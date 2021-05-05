---
permalink: mysql-java-database-connectivity-communications-exception
audit_date: '2021-03-03'
title: 'MySQL Java Database connectivity communications exception'
type: article
created_date: '2021-02-16'
created_by: Miguel Salgado
last_modified_date: '2021-03-03'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

Java Database Connectivity (JDBC) is the Java API that allows you to access and execute queries and commands on a database.

This article describes some steps to troubleshoot the `com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: Communications link failure`
error, which occurs when you try to connect to a database by using JDBC.

The `Communications link failure` error occurs when the database cannot be reached. Following are the possible causes and their solutions:

### The IP address or hostname in _JDBC URL_ is wrong.

Verify and test that the hostname or the IP address can answer back by using
[`ping`](/support/how-to/common-network-troubleshooting-tools/#ping "Commno Network Troubleshooting Tools - Rackspace").

### The local DNS server does not recognise the hostname in the _JDBC URL_  

Refresh your DNS or use the IP address in _JDBC URL_ instead.

### The port number is missing or incorrect in _JDBC URL_

Verify that the IP is well configured in the MySQL&reg; database **_my.cnf_** file by using your favorite
[text editor](/support/how-to/command-line-text-editors-in-linux/).

To find the **my.cnf** file, run the following command to check your MySQL settings:

    mysql --help | grep "Default options" -A 1 

If you still can't find the file, try running the following command:

    find / -name my.cnf

You can also look in the default locations:

- **/etc/my.cnf**
- **/etc/mysql/my.cnf**
- **/usr/etc/my.cnf**
- **~/.my.cnf**

### The database server is not accepting TCP/IP connections

Verify that the `mysqld` service is rrunning. To verify the status of the `mysqld` service, run the following commands
according to your Linux&reg; distribution:

For CentOS&reg; 6 or Red Hat&reg; Enterprise Linux&reg; (RHEL) 6:

    service mariadb status

For CentOS 7+ or RHEL 7+:

    systemctl status mariadb.service

For the Ubuntu&reg; operating system:

    /etc/init.d/mysql status

### The database is down or powered off

Run the following command to start the MySQL database:

For CentOS 6 / RHEL 6:

    service mariadb start

For CentOS 7+ / RHEL 7+:

    systemctl start mariadb.service

For the Ubuntu operating system:

    /etc/init.d/mysql start

### The database server has run out of connections

Restart the database and see if your code is having an issue when closing the connections.

### Connections between Java and DB are blocking the communication

Disable the firewall or proxy. Alternately, configure them to allow or forward the port. If you are using CentOS 6/RHEL 6,
review the [iptables article](https://docs.rackspace.com/support/how-to/basic-iptables-firewall-management/ "Basic iptables firewall management").
