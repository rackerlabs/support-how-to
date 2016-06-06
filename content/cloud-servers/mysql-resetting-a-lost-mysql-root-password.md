---
permalink: mysql-resetting-a-lost-mysql-root-password/
audit_date: 2016-06-07
title: Reset a MySQL root password
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2016-06-07'
last_modified_by: Renee Rendon
product: Cloud Servers
product_url: cloud-servers
---

The MySQL root password allows the root user to have full access to the MySQL database. You must have (Linux) root or (Windows) Administrator access to the Cloud Server to reset the MySQL root password. 

**Note:** The Cloud Server (Linux) root or (Windows) Administrator account password is not the same as the MySQL password.  The Cloud Server password allows access to the server. The MySQL root password allows access only to the MySQL database.

Use the following steps to reset a MySQL root password using the command line interface.

### Stop MySQL
For Ubuntu or Debian, run the following command to stop the MySQL service.

    sudo /etc/init.d/mysql stop
    
For CentOS, Fedora, or RHEL, run the following command to stop the MySQL service.

    sudo /etc/init.d/mysqld stop

### Start MySQL without a password

    sudo mysqld_safe --skip-grant-tables &

**Note**: The ampersand (&) at the end of the command is required.

### Connect to MySQL 

    mysql -uroot

### Set a new MySQL root password

    use mysql;

    update user set password=PASSWORD("mynewpassword") where User='root';

    flush privileges;

    quit
    
### Stop and start MySQL
For Ubuntu or Debian, use the following commands to stop and start the MySQL service.

    sudo /etc/init.d/mysql stop
    ...
    sudo /etc/init.d/mysql start
    
For CentOS, Fedora, or RHEL, use the following commands to stop and start the MySQL service.

    sudo /etc/init.d/mysqld stop
    ...
    sudo /etc/init.d/mysqld start

### Login

Test the new password by logging in.

    mysql -u root -p

You will be prompted for your new password.
