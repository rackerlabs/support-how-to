---
permalink: create-user-and-grant-permissions-in-mysql/
audit_date:
title: How to Create a New User, and Grant Permissions, in MySQL
type: article
created_date: '2020-05-31'
created_by: John Abercrombie
last_modified_date: '2020-05-31'
last_modified_by: John Abercrombie
product: Cloud Servers
product_url: cloud-servers
---

# How to Create a New User, and Grant Permissions, in MySQL

# How to Create a New User in MySQL

Prior to being able to create a new user in MySQL, you will need to log into MySQL as the root user. This is done with the following command:

```sh
mysql -u root -p
```

You will be prompted for the root password. This password is different than your root password for the server itself. This root password is only for MySQL.

>Note: If you have sudo privileges on the server, you can likely find the MySQL root password in the following file, as the root user: ~/.my.cnf

Now that you are logged into MySQL as root, you can create your user. Choose a username that you like. For this demonstration, we will use the username ‘newuser,’ however, use whichever username you prefer. Creating a user is rather simple once you get used to the syntax and format of the command. In the command below, replace ‘username’ and ‘password’ with your desired username and password.

```sh
CREATE USER ‘username’@’localhost’ IDENTIFIED BY ‘password’;
```

Press Enter. You will receive a ‘Query OK’ response if you entered it correctly.

A few notes to keep in mind with MySQL commands, you do not have to write the commands themselves in capital letters, as showcased above. You could easily type the command as:

```sh
create user ‘username’@’localhost’ identified by ‘password’;
```

It will still work. However, if using capital letters helps you keep the command syntax separate from the data your inserting, then feel free to do so.

Also, the ‘localhost’ element can change depending on where you would like your user to be able to access the MySQL database from. The ‘localhost’ means that you are allowing the user to access the database from the computer you are currently on. If you would like the user to be able to access the database from anywhere, use a ‘%’ symbol instead of ‘localhost’. If there is a specific IP address you want this user to be able to log into the database from, then insert that IP address instead. (EX: ‘username’@’22.111.000.34’)

Therefore, the user could be created with any ONE of the following commands:

```sh
CREATE USER ‘username’@’localhost’ IDENTIFIED BY ‘password’;
CREATE USER ‘username’@’%’ IDENTIFIED BY ‘password’;
CREATE USER ‘username’@’22.111.000.34’ IDENTIFIED BY ‘password’;
```

>Note: If you want the user to be able to access the database from two specific locations, and only those locations, you will create the user twice. As an example, let’s say you wanted your user to be able to log into the database from the computer you are currently on as well as a specific IP address. First, you would create the user using the ‘localhost’ location in the command, and then you would create the user again using the specific IP address location.


# How to Grant Permissions to a User in MySQL

Now that you’ve created a user in MySQL, you now need to give that user permissions to one or more database(s).  First, let’s break down what the most common permissions are.

> ALL PRIVILEGES – this grant allows the user full access to a designated database, or it can be used to allow global access across the system if no database is designated
> CREATE – allows the user to create new tables or databases
> DROP – allows the user to delete tables or databases
> DELETE – allows the user to delete rows from tables
> INSERT – allows the user to insert rows into tables
> SELECT – grants the user read-only privileges to the designated database(s)
> UPDATE – allows the user to update table rows
> LOCK TABLES – allows the user to lock tables
> SHOW DATABASES – allows the user to list all databases
> GRANT OPTION – allows the user to grant or remove other users’ privileges (this is the one permission that is NOT granted with ‘ALL PRIVILEGES’. It has to be given separately.)

You will use the following format to grant user privileges in MySQL:

```sh
GRANT permission1, permission2, permission 3 ON databasename.tablename TO ‘newuser’@’localhost’;
```

In the above example, you will input your particular database and table names in the command. If you just want to give the user access to all the tables on a database, you’ll use ‘databasename.*’ instead of ‘databasename.tablename’. Likewise, if you want the user to have a particular set of privileges on all tables of all databases, you’ll use ‘*.*’ instead.

Here are a few examples of granting privileges:

```sh
GRANT ALL PRIVILEGES ON databasename.* TO ‘newuser’@’%’;
```

```sh
GRANT ALL PRIVILEGES, GRANT OPTION ON *.* TO ‘newuser’@’22.111.000.34’;
```

```sh
GRANT SELECT, SHOW DATABASES, LOCK TABLES ON databasename.* TO ‘newuser’@’localhost’;
```

# Revoking Privileges

There may come a time when you need to revoke a user’s permissions. Simply use this format:

```sh
REMOVE permission1, permission2, permission3 ON databasename.* FROM ‘newuser’@’localhost’;
```

As you can see, we changed two words in the original command. We used ‘remove’ instead of ‘grant’; and instead of ‘to’ newuser, we used ‘from’ newuser.

If you want to check what permissions a user has, simply use the following command:

```sh
SHOW GRANTS newuser;
```

Once you are finished creating users, granting them privileges, or revoking privileges, you’ll want to use the following command:

```sh
FLUSH PRIVILEGES;
```

This command reloads the tables with the new users and/or privileges included. Think of it as saving your changes. Once you’ve done that, you can safely exit MySQL.

```sh
EXIT;
```
