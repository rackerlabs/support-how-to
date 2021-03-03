---
permalink: mysql-java-database-connectivity-communications-exception/
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

Java Database Connectivity or also known as *JDBC*  is the Java API that allows the access, executing queries and commands of a database.

This article will describe common steps to troubleshoot the error `com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: Communications link failure` when trying to connect to a database using JDBC:

Let's breakdown the error: `Communications link failure`. This error occurs when the database cannot be reached. These are the possible causes and their solutions:

### IP address or the hostname in _JDBC URL_ is wrong.

Verify and test the hostname or the IP with the command [ping](/support/how-to/common-network-troubleshooting-tools/#ping "Commno Network Troubleshooting Tools - Rackspace") to see if it is able to answer back.

### Hostname in the _JDBC URL_ is not being recognized by the local DNS server

Refresh your DNS or use the IP address in _JDBC URL_ instead.

### Port number is missing or it may be wrong in _JDBC URL_

Verify that the IP is well configured in the **_my.cnf_** file of MySQL Database with your favorite [text editor](/support/how-to/command-line-text-editors-in-linux/ "Command-line text editors in Linux - Rackspace").

If you do not know where is your __my.cnf__ file you can run the following command to check your MySQL settings:

    mysql --help | grep "Default options" -A 1 

Additionally, if you are not able to find it you can run the following commands to check where it may possible be.

    find / -name my.cnf

These are usually the default locations:

- /etc/my.cnf
- /etc/mysql/my.cnf
- /usr/etc/my.cnf
- ~/.my.cnf

### The database server is not accepting TCP/IP connections

Verify if `mysqld` service is started. To verify the status of the `mysqld` service run the following commands according to your Linux Distribution:

For CentOS 6 or RHEL 6:

    service mariadb status

For CentOS 7+ or RHEL 7+:

    systemctl status mariadb.service

For Ubuntu:

    /etc/init.d/mysql status

### The database is down or powered off

Start the database and run the following command in order to start MySQL.

For CentOS 6 / RHEL 6:

    service mariadb start

For CentOS 7+ / RHEL 7+:

    systemctl start mariadb.service

For Ubuntu:

    /etc/init.d/mysql start

### The database server has run out of connections

Restart the database and check if your code is having an issue when closing the connections.

### Connections between Java and DB are blocking the communication

Disable the firewall/proxy or configure them to allow/forward the port. If you are using CentOS 6/RHEL 6 you can follow the [iptables](https://docs.rackspace.com/support/how-to/basic-iptables-firewall-management/ "Basic iptables firewall management") article.
