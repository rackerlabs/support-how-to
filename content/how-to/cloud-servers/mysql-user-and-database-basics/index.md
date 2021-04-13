---
permalink: mysql-user-and-database-basics/
audit_date: '2021-03-15'
title: MySQL user and database basics
type: article
created_date: '2021-03-02'
created_by: Coral Moore
last_modified_date: '2021-03-15'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This article explains MySQL and how to manage users and databases in the tool.

### What is MySQL?

Databases are organized collections of data. You can use them to store pure data like credit card information,
product IDs, prices, lists of things, and so on. However, you wouldn't store more complex things such as images,
files, or documents. If it helps, it's a little like Microsoft&reg;, Excel&reg; where you only copy in the raw data
to be stored, processed, or retrieved later. And MySQL&reg; is a very commonly used type of Linux&reg; database.

#### MySQL versus MariaDB

You might have MySQL installed, but it looks like it's called MariaDB&reg;. When Oracle&reg; acquired MySQL in 2010,
the original founders then created MariaDB as a like-for-like replacement in case Oracle discontinued MySQL.
So MySQL and MariaDB are largely the same and interchangeable. The information in this article applies to both.

### Check the version

Run the following command to check your database version:

`# mysql -v`

### Log in

Log into your database by using one of the following methods:

#### Method 1: SSH in as root, then log in to MySQL

If this is already the default option,  consider leaving it alone.
If not, create the following file with your chosen text editor:

````
# vim /root/.my.cnf
[client]
user=root
password=<password>
````

Or if you prefer, you can instead create it this with:

````
# echo -e "\n[client]\nuser=root\npassword=<PASSWORD>" >> /root/.my.cnf
````
The SecureShell (SSH) into your server as `root`, and log in to MySQL by running the following command:

`# mysql`

#### Method 2: SSH to the server, then log in to MySQL

If you SSH into your server first, your user connects to MySQL from the `localhost` because
you are already on the machine with MySQL.

Log in from localhost by running the following command:

`# mysql -u <USER> -p`

#### Method 3: Connect directly to MySQL

If you want to connect directly to MySQL from your computer, you need the hostname or IP address of the MySQL server.
Then, run the following command:

`# mysql -h <HOSTNAME_OR_IP> -u <USER> -p`

### Wildcards in MySQL

In software, a wildcard is a kind of placeholder represented with an asterisk (\*).
This `*` can mean any combination of letters/numbers/symbols, so you could represent '12345'
as  `1*  or  *3*  or  *5`. For example, if you want to find a name
beginning with the letter M, you could search `M*`.

In MySQL, the wildcard character is a percentage (%) symbol.

For example, run the following command to search for all databases ending in the word *schema*:

`> show databases like "%schema";`

### Common MySQL commands 

These are some common MySQL commands:

**Note:** End all MySQL commands with a semicolon (**;**).

**List databases:**

`> show databases;`

**Create a database:**

`> create database <DATABASE>;`

**Delete a database:**

`> drop database <DATABASE>;`

### Common users-related commands

All users connect from somewhere. If the hosts show as **localhost**, they connected to the server first and then to MySQL.
If it shows as an IP address, they are connected directly to MySQL.

**Show DB users:**

`> select user, host from mysql.user;`

**Show DB users and encrypted passwords:**

`> select user, host, password from mysql.user;`

**Create user with full permissions:**

`> grant all on *.* to sher@localhost identified by "sdF5";`

**This can be for localhost, IP address, or % everywhere (which we don't recommend):**

`> grant all on *.* to sher@134.213.179.10 identified by "sdF5";`

**Rename user or change host:**

`> rename user user@ip1 to user@ip2;`

**Refresh:**

`> flush privileges;`

### Privileges, grants, and permissions commands

In MySQL, the usual Linux-based read, write, and execute rules don't apply. Instead, you assign
permissions to users as *privileges* or *grants*, which is much more granular and specific.
The following sections show some examples:

**Show user grants:**

`> show grants for '<user>'@<localhost/IP>;`

**Add user grants:**

`> GRANT SELECT,INSERT,UPDATE on <database>.* to <user>@<localhost/IP>;`

**Remove all user grants:**

`> revoke ALL on *.* from <user>@<localhost/IP>;`

**Create a database and add the user for it (read/write means all):**

`> create database dbase;`
`> grant all on dbase.* to <user>@<localhost/IP> identified by 'passwd';`

### Terms and functions

The following list shows some of the most common MySQL terms and commands mentioned previously and their functions:

- **ALL PRIVILEGES**: All access (to specific DB / everything)
- **CREATE**: Create new tables / DBs
- **DROP**: Delete tables / DBs
- **DELETE**: Delete rows from tables
- **INSERT**: Insert rows into tables
- **SELECT**: Use the Select command to read through DBs (read-only)
- **UPDATE**: Update table rows
- **USAGE**: No privileges, default
- **GRANT OPTION**: Grant or remove other users' privileges
- **CRUD**: Create, Read, Update, Delete

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
