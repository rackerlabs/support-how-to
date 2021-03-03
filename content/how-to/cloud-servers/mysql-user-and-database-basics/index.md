---
permalink: mysql-user-and-database-basics/
title: MySQL User and Database Basics
type: article
created_by: Coral Moore
created_date: 2021-03-02
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

What is MySQL?

Databases are an organised collection of data.
Here you would store pure data like credit card information, product IDs, prices, lists of things etc.
You would not store more complex things like images, files, or documents.
If it helps, it's a little like Microsoft Excel where you only copy in the raw data to be stored/processed/retrieved later.
And MySQL is a very commonly used type of Linux database.



MySQL vs MariaDB:

You might have MySQL installed, but it looks like it's called MariaDB.
When MySQL was acquired by Oracle in 2010, the original founders then created MariaDB as a like-for-like replacement in case MySQL was ever discontinued.
So MySQL and MariaDB are are largely the same and thought to be interchageable.
At the time of writing this article, all of the following information applies to both.


Check which version you have:

# mysql -v

How to log in:
Method 1. SSH in as root, then log in to MySQL
This may already be set up by default. If so, please be careful and leave it alone!
If not, please create this file with your chosen text editor:

# vim /root/.my.cnf
[client]
user=root
password=<password>

Or if you prefer, you can instead create this with:

# echo -e "\n[client]\nuser=root\npassword=<PASSWORD>" >> /root/.my.cnf

After which, if you are SSH'd in to your server as root, you can log in to MySQL very easily:

# mysql

Method 2. SSH to the server, then log in to MySQL
If you SSH in to your server first, your user is connecting to MySQL from the 'localhost'
As you are already on the machine where MySQL is installed.

Log in from localhost:

# mysql -u <USER> -p

Method 3. Connect directly to MySQL
If you wish to connect directly to MySQL, you will need the hostname or IP of the server you wish to connect to:

Log in from your computer:

# mysql -h <HOSTNAME_OR_IP> -u <USER> -p

Click here for more information about how to connect remotely


Basic MySQL commands:
End all MySQL commands with a semi colon ;

List databases:

> show databases;

Create a database:

> create database <DATABASE>;

Delete a database:

> drop database <DATABASE>;



Users:
show db users:

> select user, host from mysql.user;

show db users+encrypted passwds:

> select user, host, password from mysql.user;

User hosts:
All users connect from somewhere.
Localhost means they SSH in to the server first, THEN connect to MySQL
Or they can connect DIRECTLY to MySQL from their IP



create user with full permissions:

> grant all on *.* to sher@localhost identified by "sdF5";

This can be for localhost, IP, or % everywhere (which we don't recommend):

> grant all on *.* to sher@134.213.179.10 identified by "sdF5";

rename user/change host:

> rename user user@ip1 to user@ip2;

refresh:

> flush privileges;

Privileges / grants / permissions:
If a customer asks for read/write/execute, they don’t know what they are talking about

show user permissions:

> show grants for 'sher'@localhost;

add user permissions:

> GRANT SELECT,INSERT,UPDATE on dbase.* to sher@localhost;

remove user permissions:

> revoke ALL on *.* from sher@localhost;

ALL PRIVILEGES   All access (to specific DB / everything)
CREATE           Create new tables / DBs
DROP             Delete tables / DBs
DELETE           Delete rows from tables
INSERT           Insert rows into tables
SELECT           Use the Select command to read through DBs   (read only)
UPDATE           Update table rows
USAGE            No privileges, default
GRANT OPTION     Grant / remove other users' privileges
CRUD is Create, Read, Update, Delete (create,select,update,delete)

 

Most common:
create a database:

> create database dbase;

Then add the user for it (read/write means all):

> grant all on dbase.* to sher@localhost identified by 'passwd';

Understanding the command
Permissions/grants    database.table          user@where           set the password

                      *.* means everything

> grant all           on dbase.*              to sher@localhost    identified by 'passwd';

 

Cp DB / mysqldump:
Back up / restore your databases to a file in SSH

List:

# mysqldump dbase > /home/rack/dbase.sql

List:

# mysql dbase < /home/rack/dbase.sql

Wildcards in MySQL;
In software, a wildcard is a kind of placeholder represented with an asterisk *
This * can mean any combination of letters/numbers/symbols
So '12345' could be represented as  1*  or  *3*  or  *5
If you were looking for anyone's name beginning with the letter M, you could search M*

In MySQL, an asterisk means something else. So to use a wildcard you need a percentage symbol %

Search for all databases ending in the word 'schema':

> show databases like "%schema";

Bonus Scripts Only use when you understand!
sends commands to MySQL from SSH:

# mysql -e “”

Show MySQL databases and users::

# mysql -e "show databases\gselect user, host from mysql.user\g"

Show MySQL users:

# ht --root -C "mysql --defaults-file=/root/.my.cnf -e 'select user, host from mysql.user;'" 21 | grep -vE '^\s*(Exit Status)'

Add MySQL user:

# ht --root -C "mysql --defaults-file=/root/.my.cnf -e 'grant all on *.* to rew@localhost identified by \"ewq\";'; mysql -u rew -pewq -e 'select user, host, password from mysql.user;'" 21

List:

# ht --root -C "mysql --defaults-file=/root/.my.cnf -e 'grant SELECT on *.* to rew@localhost identified by \"ewq\";'; mysql -u rew -pewq -e 'select user, host, password from mysql.user;'" 21

Change MySQL password:

# ht --root -C "mysql --defaults-file=/root/.my.cnf -e 'set password for rew@localhost = password (\"dsa\");'; mysql -u rew -pdsa -e 'select user, host, password from mysql.user;'" 21



Handy prefab:
How to log in to MySQL remotely:

Thank you for contacting us.

 

There are a few ways to login to a MySQL server remotely:

    1. Use a third party tool like MySQL Workbench: https://www.mysql.com/products/workbench

    Usually this will connect to your server with an SSH user, after which you log in to MySQL on localhost with your MySQL user credentials.

    2. Use the default MySQL command-line client: # mysql -u USER -p -h IP   https://dev.mysql.com/doc/refman/8.0/en/mysql.html

    3. Use a web-interface-tool like phpMyAdmin: https://www.phpmyadmin.net            Please click "Try demo" to see this in action

 

 - What user do you want to connect with?

 - What database/s do you want to connect to?

 - What public IP will you be connecting from? (this information can be retrieved with sites like https://icanhazip.com and https://www.whatismyip.com)

 - Which of the above tools would you like to proceed with?

 

If you are still unable to connect from IP which is the only IP address this would work for, please provide the output of:

# tracert <IP>3306

