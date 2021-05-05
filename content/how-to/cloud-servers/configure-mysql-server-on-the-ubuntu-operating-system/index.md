---
permalink: configure-mysql-server-on-the-ubuntu-operating-system
audit_date: '2020-10-09'
title: Configure MySQL server on the Ubuntu operating system
type: article
created_date: '2011-07-29'
created_by: Jered Heeschen
last_modified_date: '2020-10-09'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

[The article,](/support/how-to/install-mysql-server-on-the-ubuntu-operating-system), covered a basic MySQL&reg;
server setup on the Ubuntu&reg; operating system. It described how to set the root password, create a database,
and add a user for the database. This artcile examines MySQL congfiguration in a little more detail so you can
adjust its configuration and be ready in case something goes wrong.

### Find the configuration files

By default, you can find the MySQL&reg; configuration files in:

    /etc/mysql

If they're not there, however, you can use `mysqld` to find the
configuration. Run the following command:

    $ /usr/sbin/mysqld --help --verbose

The first part of the lengthy response describes the options
you can send to the server when you launch it. The second part displays 
the configuration set during the server compilation.

Near the start of the output, find a couple of lines that look similar to the following example:

    Default options are read from the following files in the given order:
    /etc/my.cnf /etc/mysql/my.cnf /usr/etc/my.cnf ~/.my.cnf

The server examines that list until it finds a configuration file.

### my.cnf configuration file

Open and review the **/etc/mysql/my.cnf** file.

Comment lines, starting with **#**, document the use of the different settings. They show details about the
location of log files, database files, and other details.

#### Config groups

The configuration file contains lines with a single word in square brackets, like *[client]* or *[mysqld]*.
Those sections are configuration groups. They make important configuration elements more visible to the programs
that read the configuration file.

The server configuration section is, technically, a collection of tools. That includes the server (`mysqld`), the
client (`mysql`), and other tools. Those programs look in **my.cnf** to see how they should behave.

The client configuration section controls the `mysql` client, and the `mysqld` section controls the server configuration.

### Log files

Log files are the best place to start troubleshooting any program. By default, MySQL stores its log files in the
following directory:

    /var/log/mysql

You might need to use `sudo` to get a listing of the files in that directory.

If you don't find the MySQL&reg; logs in the default directory, check the MySQL configuration. View the **my.cnf**
file and look for a `log_error` line, as in:

    log_error = /var/log/mysql/error.log

If you don't see a line like that, create one in the **mysqld** section so MySQL&reg; can use its own error log. Use
the location in the example, creating the **/var/log/mysql** directory if it doesn't already exist. Then, restart
MySQL to make the change.

Make sure the user can write to the chosen log directory by controlling the `mysql` process. The user running the
process is defined in the **user configuration** value for mysqld in **my.cnf**.

#### Network settings

There might be a "port" setting under both the **client** and **server** configuration sections. The port under
the **server** section controls what port the server listens to. The default port is `3306` but, you can change it.

The port in the **client** section tells the client what port to connect to by default. You generally want both port
settings to match.

If you are using the default settings, you won't see the port entries in the configuration file. If you want to change
the port, add the following lines in the appropriate categories:

    [client]
    port = 3306

    [mysqld]
    port = 3306

The other network setting to look for is the **bind-address** value. That usually gets set to the address for localhost,
**127.0.0.1**. By binding to localhost, the server ensures no one can connect to it from outside the local computer.

If you're running your MySQL server on a different computer from your application, you should bind to a remotely-accessible
address instead of the localhost. Change the bind-address setting to match your public IP address. For security reasons,
you should use a backend IP address on a network.

If you don't see a **bind-address** entry, you should put one into the **mysqld** category to help control access to the server:

    [mysqld]
    $ bind-address = 127.0.0.1

Remember to account for the client's hostname when you set up your database users and to provide firewall access if you're
running `iptables`.

### mysqld and mysqld_safe

Behind the scenes, there are two versions of the MySQL server, `mysqld` and `mysqld_safe`. Both read the same configuration
sections. However, `mysqld_safe` launches with more safety features enabled to make it easier to recover from troubleshooting.

Both `mysqld` and `mysqld_safe` read configuration entries in the **mysqld**
section. If you include a **mysqld_safe** section, then only **mysqld_safe** uses those values.

By default, the MySQL service launches `mysqld_safe`, which is appropriate.

### mysqladmin

The `mysqladmin` tool lets you perform some administrative functions from
the command line, which this article does not address. You might
explore the tool in more depth later to see what it can do,
particularly if you need to build scripts that perform functions such as
checking the status of the server or creating and dropping databases.

### Backups

You have the following options to backup your databases, apart from the usual *back up the whole computer* approach.
The main two options are to copy the database files or use `mysqldump`.

#### File copy

By default, MySQL creates a directory for each database in its data directory, **/var/lib/mysql**.

After you find the data directory, wait a moment before making a copy of it. When the database server is active, it
writes new values to tables. Don't interrupt this processes to avoid potentially corrupting your backup.

To ensure that you copied the database files cleanly, you should shut the MySQL server down entirely before the copy.

You can lock the database as *read-only* for the duration of the copy. When you finish, release the lock. That way,
your applications can still read data while you're backing up files.

Lock the databases to *read-only* by running the following command from the command line:

    $ mysql -u root -p -e "FLUSH TABLES WITH READ LOCK;"

Run the following command to unlock the database when you're done:

    $  mysql -u root -p -e "UNLOCK TABLES;"

The MySQL client option, `-e`, tells the client to run the query in quotes as if we entered it in the MySQL&reg; shell.

If you're writing these commands in a script, you can put the password in quotes right after `-p` with no space between the
two, similar to the following examples:

    $ mysql -u root -p"password" -e "FLUSH TABLES WITH READ LOCK;"
    $ mysql -u root -p"password" -e "UNLOCK TABLES;"

Make sure you set the permissions on that file to restrict read access for password-security reasons.

#### mysqldump

Another approach to backing up your database is to use the `mysqldump` tool. Rather than copying the database
files directly, `mysqldump` generates a text file that represents the database. By default, the text file contains a list
of SQL statements to recreate the database, but you can also export the database in another format like **.CSV**
or **.XML**. You can read the man page for `mysqldump` to see all its options.

The statements generated by `mysqldump` go straight to standard output. You can specify a to redirect the output by
running the following command in the command line: 

    $ mysqldump -u root -p demodb > dbbackup.sql

This command tells `mysqldump` to recreate the **demodb** database in SQL statements and to write them to the file
**dbbackup.sql**. Note that the username and password options function the same as the MySQL client so that you can
include the password directly after `-p` in a script.

#### Restore from mysqldump

Restoring a `mysqldump` database is similar to how you created the dump, but you use `mysql` instead of `mysqldump`, 
as shown in the following restore command:

    $ mysql -u root -p demodb < dbbackup.sql

Also, note that the `<` angle bracket changes direction. That switches the command from redirecting its output to extracting
input from the existing file. That input is sent to the `mysql` command, causing the instructions to recreate the database.

By default, the SQL statements generated add to existing database tables and not overwrite them. If you're restoring a backup
over an existing database, you should drop the database tables first, or drop and recreate the database itself. You can change
that behavior by using the `$ --add-drop-table` option with the command that creates the `mysqldump`. That causes `mysqldump`
to add a command to the backup files it writes that drops tables before recreating them.

### Database engine

The **database engine** is the process that works behind the scenes,
writing to and reading data from files. You only need to know about this if you want to run an
application that's been optimized for a particular database engine.

Applications that need tables create them on-demand and create the engine type automatically.
To see the engine your database's tables use, you can run the following command in the MySQL shell,
changing **demodb** to the name of your database.:

    $ SHOW TABLE STATUS FROM demodb;

#### Choose an engine

Ideally, you won't need to choose an engine. If you're not very familiar with MySQL, allow the application
to choose one by default. If you're writing the application, use the default engine until you're more comfortable
with your options.

Follow your database administrator's (DBA) instructions, if you have one.

The two database engines used most often with MySQL are `MyISAM` and `InnoDB`. The default database engine for MySQL
version 5.1 and earlier is `MyISAM`, while `InnoDB` is the default database engine starting with MySQL version 5.5.

#### MyISAM

Because `MyISAM` has been the default in MySQL for a while, it's the most compatible choice of the two main engines.
Certain types of searches perform better on `MyISAM` than `InnoDB`. Even though it's the older of the two, it
might be the best choice for a given application type.

#### InnoDB

**NOTE:** A DBA can help you achieve the best `InnoDB` performance because `InnoDB` requires
many adjustments to your environment and access patterns. The default configuration is optimal for everyday software
development use. 

`InnoDB` is more fault-tolerant than `MyISAM` and handles crashes and recovery with a much smaller risk of database
corruption.

If your application requires InnoDB and you're using MySQL 5.1 or earlier, there might not be any settings
already in the **my.cnf** configuration file. That can be a problem if you're running on a server that doesn't
have much memory.

The following settings can get you started with InnoDB on a shared server with 256 megs of RAM:

    innodb_buffer_pool_size = 32M
    innodb_log_file_size = 8M
    innodb_thread_concurrency = 8
    innodb_file_per_table

Add those to the **[mysqld]** section of the configuration file. Again, those are
only rough guides. They can get you started but they are not optimized. Consult with your DBA or
experiment with incremental changes over time to improve performance.

### Related articles

- [Install MySQL&reg; server on the Ubuntu operating system](/support/how-to/install-mysql-server-on-the-ubuntu-operating-system)
- [Reset a MySQL&reg; root password](/support/how-to/reset-a-mysql-root-password)
