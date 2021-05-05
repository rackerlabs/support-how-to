---
permalink: reset-a-mysql-root-password
audit_date: '2016-06-13'
title: Reset a MySQL root password
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2020-09-04'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

The MySQL&reg; root password allows the root user to have full access to the
[MySQL database](https://www.rackspace.com/cloud/databases). You must have
(Linux&reg;) root or (Windows&reg;) Administrator access to the
[Cloud Server](https://www.rackspace.com/cloud) to reset the MySQL root password.

**Note:** The Cloud Server (Linux) root or (Windows) Administrator account
password is not the same as the MySQL password.  The Cloud Server password allows
access to the server. The MySQL root password allows access only to the MySQL
database.

Use the following steps to reset a MySQL root password by using the command line
interface.

### Stop the MySQL service

(Ubuntu operating system and Debian) Run the following command:

    sudo /etc/init.d/mysql stop

(CentOS, Fedora, and Red Hat Enterprise Linux) Run the following command:

    sudo /etc/init.d/mysqld stop

### Start MySQL without a password

Run the following command. The ampersand (&) at the end of the command is required.

    sudo mysqld_safe --skip-grant-tables &

### Connect to MySQL

Run the following command:

    mysql -uroot

### Set a new MySQL root password

Run the following command:

    use mysql;

    update user set authentication_string=PASSWORD("mynewpassword") where User='root';

    flush privileges;

    quit

### Stop and start the MySQL service

(Ubuntu operating system and Debian) Run the following commands:

    sudo /etc/init.d/mysql stop
    ...
    sudo /etc/init.d/mysql start

(CentOS, Fedora, and Red Hat Enterprise Linux) Run the following commands:

    sudo /etc/init.d/mysqld stop
    ...
    sudo /etc/init.d/mysqld start

### Log in to the database

Test the new password by logging in to the database.

    mysql -u root -p

Enter your new password when prompted.

### Related articles

- [Install MySQL server on the Ubuntu operating system](/support/how-to/install-mysql-server-on-the-ubuntu-operating-system)
- [Configure MySQL server on the Ubuntu operating system](/support/how-to/configure-mysql-server-on-the-ubuntu-operating-system)

<script type="application/ld+json">
{
"@context": "https://schema.org/",
"@type": "HowTo",
"text":"Reset a MySQL root password",
"description": "Use the following steps to reset a MySQL root password by using the command line interface.",
"step": [{
	"@type": "HowToStep",
	"text": "Stop the MySQL service",
	"description": "You need to know the Internet Protocol (IP) address of the computer from which you’re connecting.",
	"itemListElement": [{
		"@type": "HowToDirection",
		"text": "(Ubuntu operating system and Debian) Run the following command: sudo /etc/init.d/mysql stop"
		},{
		"@type": "HowToDirection",
		"text": "(CentOS, Fedora, and Red Hat Enterprise Linux) Run the following command: sudo /etc/init.d/mysqld stop"
	}]},{
	"@type": "HowToStep",
	"text": "Start MySQL without a password",
	"description": "Run the following command. The ampersand (&) at the end of the command is required: sudo mysqld_safe --skip-grant-tables &"
	},{
	"@type": "HowToStep",
	"text": "Connect to MySQL",
	"description": "Run the following command: mysql -uroot"
	},{
	"@type": "HowToStep",
	"text": "Set a new MySQL root password",
	"description": "Run the following command: use mysql;\r\n\r\nupdate user set authentication_string=PASSWORD(\"mynewpassword\") where User='root';\r\n\r\nflush privileges;\r\n\r\nquit"
	},{
	"@type": "HowToStep",
	"text": "Stop and start the MySQL service",
	"itemListElement": [{
		"@type": "HowToDirection",
		"text": "(Ubuntu operating system and Debian) Run the following commands: sudo \/etc\/init.d\/mysql stop\r\n...\r\nsudo \/etc\/init.d\/mysql start"
		},{
		"@type": "HowToDirection",
		"text": "(CentOS, Fedora, and Red Hat Enterprise Linux) Run the following commands: sudo \/etc\/init.d\/mysqld stop\r\n...\r\nsudo \/etc\/init.d\/mysqld start"
	}]},{
	"@type": "HowToStep",
	"text": "Log in to the database",
	"itemListElement": [{
		"@type": "HowToDirection",
		"text": "Test the new password by logging in to the database."
		},{
		"@type": "HowToDirection",
		"text": "mysql -u root -p"
		},{
		"@type": "HowToDirection",
		"text": "Enter your new password when prompted."
}]}]}
