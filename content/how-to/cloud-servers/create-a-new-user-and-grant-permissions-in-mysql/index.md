---
permalink: create-a-new-user-and-grant-permissions-in-mysql
audit_date: '2020-06-03'
title: Create a new user and grant permissions in MySQL
type: article
created_date: '2020-05-31'
created_by: John Abercrombie
last_modified_date: '2020-06-03'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

The article describes the MySQL&reg; database permissions. It also describes how to create a new
user and grant or revoke permissions.

### Using MySQL commands

Following are helpful suggestions for MySQL commands.

#### Capitalization

You do not have to type MySQL commands in capital letters. Both of the following commands work equally well:

    CREATE USER ‘username’@’localhost’ IDENTIFIED BY ‘password’;
    create user ‘username’@’localhost’ identified by ‘password’;

However, using capital letters helps you keep the command syntax separate from the data or variable elements
of the command.

#### localhost parameter

Also, you can change the `localhost` element, which allows the user to access the database from the computer
you are currently on. If you want to allow the user to access the database from anywhere, use a `%` symbol
instead of `localhost`. If you want the user to log into the database from a specific IP address, insert that
IP address instead. For example `username’@’22.111.000.34`.

Therefore, you could create a user with any of the following commands:

CREATE USER ‘username’@’localhost’ IDENTIFIED BY ‘password’;
CREATE USER ‘username’@’%’ IDENTIFIED BY ‘password’;
CREATE USER ‘username’@’22.111.000.34’ IDENTIFIED BY ‘password’;

**Note:** If you want the user to be able to access the database from two specific locations, and only those
locations, you should create the user twice. For example, suppose you want your user to be able to log in to
the database from the computer you are currently on as well as a specific IP address. First, create the user
by using the `localhost` location in the command. Then, create the user again by using the specific IP address.

### Permissions

Common permissions include the following:

- **ALL PRIVILEGES**: Allows the user full access to a designated database or allows global access across
  the system if you don't designate a database. This permission includes all of the following permissions
  except **GRANT**.

- **CREATE**: Allows the user to create new tables or databases.

- **DROP**: Allows the user to delete tables or databases.

- **DELETE**: Allows the user to delete rows from tables.

- **INSERT**: Allows the user to insert rows into tables.

- **SELECT**: Grants the user read-only privileges to the designated databases.

- **UPDATE**: Allows the user to update table rows.

- **LOCK TABLES**: Allows the user to lock tables.

- **SHOW DATABASES**: Allows the user to list all databases.

- **GRANT OPTION**: Allows the user to grant or remove other users’ privileges. You must grant this permission
  explicitly.

### Log in

Log in to MySQL as the root user by using the following command:

    mysql -u root -p

The system prompts you for the root password for MySQL, which is different than your root password for
the server itself.

**Note:** If you have sudo privileges on the server, you can likely find the MySQL root password in the
**~/.my.cnf** file, as the root user.

### Create a new user

Now that you are logged into MySQL as root, you can create your user. Choose a username that you like.
Enter the following command, replacing `username` and `password` with your chosen username and password:

    CREATE USER ‘username’@’localhost’ IDENTIFIED BY ‘password’;

If successful, the system displays **Query OK**.
  
### Grant permission

Use the following format to grant user privileges in MySQL:

    GRANT permission1, permission2, permission3 ON databasename.tablename TO ‘newuser’@’localhost’;

If you just want to give the user access to all the tables on a database, use `databasename.*` instead
of `databasename.tablename`. Similarly, if you want the user to have a particular set of privileges on
all tables of all databases, use `*.*`.

Examples of granting privileges:

    GRANT ALL PRIVILEGES ON databasename.* TO ‘newuser’@’%’;

    GRANT ALL PRIVILEGES, GRANT OPTION ON *.* TO ‘newuser’@’22.111.000.34’;

    GRANT SELECT, SHOW DATABASES, LOCK TABLES ON databasename.* TO ‘newuser’@’localhost’;

### Revoke permissions

When you need to revoke a user’s privileges, use the following format:

    REMOVE permission1, permission2, permission3 ON databasename.* FROM ‘newuser’@’localhost’;
    
### Check permissions

To check what privileges a user has, use the following command:

    SHOW GRANTS newuser;
    
### Apply permissions

After you create a user, grant privileges, or revoke privileges, run the following command:

    FLUSH PRIVILEGES;

This command reloads the tables with the new users and privileges included. Think of it as saving your changes.

### Log out

After you have finished making changes, use the following command to exit MySQL safely:

    EXIT;
