---
permalink: mysql-java-database-connectivity-communications-exception/
audit_date:
title: 'MySQL Java Database Connectivity (JDBC) Communications Exception'
type: article
created_date: '2021-02-16'
created_by: Miguel Salgado
last_modified_date:
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

## What is Java Database Connectivity? 

Java Database Connectivity or also known as "JDBC"  is the Java API that allows the access, executing queries and commands of a database. 

## MySQL JDBC Communications Exception

This article will show you the common steps to troubleshoot the following error when trying to connect to a database using JDBC.

`com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: Communications link failure`

Let's breakdown the following error:

`Communications link failure`

This error is usually displayed when the database cannot be reached. These are the possible causes and their solutions:

### 1. **IP address or the hostname in _JDBC URL_ is wrong.**
Verify and test the hostname or the IP with the command [ping](https://docs.rackspace.com/support/how-to/common-network-troubleshooting-tools/#ping "Commno Network Troubleshooting Tools - Rackspace") in order to see if it is able to answer back.

### 2. **Hostname in the _JDBC URL_ is not being recognized by the local DNS server.**
Refresh your DNS or use the IP address in _JDBC URL_ instead.

### 3. **Port number is missing or it may be wrong in _JDBC URL_.**
Verify that the IP is well configured in the **_my.cnf_** file of MySQL Database with your favorite [text editor](https://docs.rackspace.com/support/how-to/command-line-text-editors-in-linux/ "Command-line text editors in Linux - Rackspace").

If you do not know where is your __my.cnf__ file you can run the following command to check your MySQL settings:

    mysql --help | grep "Default options" -A 1 

Additionally, if you are not able to find it you can run the following commands to check where it may possible be.

    find / -name my.cnf

These are usually the default locations where it may be located:
1. /etc/my.cnf 
2. /etc/mysql/my.cnf 
3. /usr/etc/my.cnf 
4. ~/.my.cnf

### 4. **The database server is not accepting TCP/IP connections.**
Verify if mysqld service is started.

To verify the status of the mysqld service run the following commands according to your Linux Distribution:
    
For CentOS 6 / RHEL 6:

    service mariadb status

For CentOS 7+ / RHEL 7+:

    systemctl status mariadb.service

For Ubuntu:

    /etc/init.d/mysql status

### 5. **The database is down / power off.**
Start the database.

You can run the following command in order to start MySQL.

For CentOS 6 / RHEL 6:

    service mariadb start

For CentOS 7+ / RHEL 7+:

    systemctl start mariadb.service

For Ubuntu:

    /etc/init.d/mysql start

### 6. **The database server has run out of connections.**
Restart the database and check if your code is having an issue when closing the connections.

### 7. **Connections between Java and DB are blocking the communication. (It may be a firewall rule or the use of a proxy)**
Disable the firewall/proxy or configure them to allow/forward the port. If you are using CentOS 6/RHEL 6 you can use [iptables](https://docs.rackspace.com/support/how-to/basic-iptables-firewall-management/ "Basic iptables firewall management").
