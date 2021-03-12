---
permalink: mysql-user-and-database-basics/
audit_date: '2021-03-15'
title: MySQL User and Database Basics
type: article
created_date: '2021-03-02'
created_by: Coral Moore
last_modified_date: '2021-03-15'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

### What is MySQL&reg;?

Databases are an organized collection of data.
Here you would store pure data like credit card information, product IDs, prices, lists of things etc.
You would not store more complex things like images, files, or documents.
If it helps, it's a little like Microsoft Excel&reg; where you only copy in the raw data to be stored/processed/retrieved later.
And MySQL is a very commonly used type of Linux&reg; database.



#### MySQL vs MariaDB&reg;

You might have MySQL installed, but it looks like it's called MariaDB.
When MySQL was acquired by Oracle&reg; in 2010, the original founders then created MariaDB as a like-for-like replacement in case MySQL was ever discontinued.
So MySQL and MariaDB are are largely the same and thought to be interchageable.
At the time of writing this article, all of the following information applies to both.


#### Check which version you have:

`mysql -v`

#### How to log in:

- **Method 1. SSH in as root, then log in to MySQL**

This might already be set up by default. If so, be careful and leave it alone.
If not, create this file with your chosen text editor:

````
# vim /root/.my.cnf
[client]
user=root
password=<password>
````

Or if you prefer, you can instead create this with:

````
# echo -e "\n[client]\nuser=root\npassword=<PASSWORD>" >> /root/.my.cnf
````

After which, if you are SSH'd in to your server as root, you can log in to MySQL very easily by typing this command in the command line:

`# mysql`

- **Method 2. SSH to the server, then log in to MySQL**

If you SSH in to your server first, your user is connecting to MySQL from the `localhost`
As you are already on the machine where MySQL is installed.

Log in from localhost, by typing this command in the command line:

`# mysql -u <USER> -p`

- **Method 3. Connect directly to MySQL**

- If you wish to connect directly to MySQL, from your computer, you will need the hostname or IP of the server you wish to connect to.
Type the following command in the command line:

`# mysql -h <HOSTNAME_OR_IP> -u <USER> -p`

### These are some of the most basic and common MySQL commands:

**Note:** End all MySQL commands with a semi colon **;**

**List databases:**

`> show databases;`

**Create a database:**

`> create database <DATABASE>;`

**Delete a database:**

`> drop database <DATABASE>;`

### These are some of the most common Users-related commands:

**Users:**

`show db users:`

`> select user, host from mysql.user;`

**Show db users and encrypted passwords:**

`> select user, host, password from mysql.user;`

**User hosts:**

All users connect from somewhere.
**Localhost** means they SSH in to the server first, THEN connect to MySQL
Or they can connect DIRECTLY to MySQL from their IP

**Create user with full permissions:**

`> grant all on *.* to sher@localhost identified by "sdF5";`

**This can be for localhost, IP, or % everywhere (which we don't recommend):**

`> grant all on *.* to sher@134.213.179.10 identified by "sdF5";`

**Rename user/change host:**

`> rename user user@ip1 to user@ip2;`

**Refresh:**

`> flush privileges;`

**Privileges / grants / permissions:**

The following commands will allow you to access privileges-related information on MySQL:

**Show user permissions:**

`> show grants for 'sher'@localhost;`

**Add user permissions:**

`> GRANT SELECT,INSERT,UPDATE on dbase.* to sher@localhost;`

**Remove user permissions:**

`> revoke ALL on *.* from sher@localhost;`

#### This is a list of some of the most commmon MySQL terms and commands, and their functions:

- **ALL PRIVILEGES** All access (to specific DB / everything)
- **CREATE** Create new tables / DBs
- **DROP** Delete tables / DBs
- **DELETE** Delete rows from tables
- **INSERT** Insert rows into tables
- **SELECT** Use the Select command to read through DBs   (read only)
- **UPDATE** Update table rows
- **USAGE** No privileges, default
- **GRANT OPTION** Grant / remove other users' privileges
- **CRUD** Create, Read, Update, Delete (create,select,update,delete)


- **Create a database:** 

`> create database dbase;`

- **Add the user for it (read/write means all):**

`> grant all on dbase.* to sher@localhost identified by 'passwd';`

### Understanding the command

`Permissions/grants`, `database.table`, `user@where`, and `set the password`

`*.*` means everything

`> grant all           on dbase.*              to sher@localhost    identified by 'passwd';`

- **Cp DB / mysqldump:**

`Back up / restore your databases to a file in SSH`

- **List:**

`# mysqldump dbase > /home/rack/dbase.sql`

- **List:**

`# mysql dbase < /home/rack/dbase.sql`

#### Wildcards in MySQL

In software, a wildcard is a kind of placeholder represented with an asterisk *
This `*` can mean any combination of letters/numbers/symbols
So '12345' could be represented as  `1*  or  *3*  or  *5``

If you were looking for anyone's name beginning with the letter M, you could search M*

In MySQL, an asterisk means something else. So to use a wildcard you need a percentage symbol %

Search for all databases ending in the word 'schema':

`> show databases like "%schema";`

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 



