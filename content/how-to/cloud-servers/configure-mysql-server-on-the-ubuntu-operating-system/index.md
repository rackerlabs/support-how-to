---
permalink: configurationure-mysql-server-on-the-ubuntu-operating-system/
audit_date: '2020-10-09'
title: Configure MySQL&reg; server on the Ubuntu operating system
type: article
created_date: '2011-07-29'
created_by: Jered Heeschen
last_modified_date: '2020-10-09'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

In the [previous article](/support/how-to/install-mysql-server-on-the-ubuntu-operating-system), we covered a basic MySQL&reg; server setup on the Ubuntu&reg; operating system. We set the root password, created a database, and a user for the database. Now
let's look at MySQL&reg; in a little more detail so we can adjust its
configuration and be ready in case something goes wrong.

### Finding the configuration files

By default, you'll find MySQL&reg;'s configuration files in:

    /etc/mysql

If they're not there, however, you can ask mysqld where it looks for its
configuration. Run the command:

    $ /usr/sbin/mysqld --help --verbose

You'll get a flood of text back. The first part describes the options
you can send to the server when you launch it. The second part displays 
the configuration set when the server was compiled.

Near the start of the output, find a couple of lines that look similar to the following example:

    Default options are read from the following files in the given order:
    /etc/my.cnf /etc/mysql/my.cnf /usr/etc/my.cnf ~/.my.cnf

The server examines that list until it finds a configuration file.

### my.cnf

Open the `my.cnf` file and have a look inside.

    /etc/mysql/my.cnf

Lines starting with **#** are comments, they document the use of the different settings. If you read them, you'll find details the location of log files, database files, and other details.

#### Config groups

The configuration file contains lines with a single word in square brackets, like "[client]" or "[mysqld]". Those are **configuration groups** and make important configuration elements more visible to the programs that read the configuration file.

The server part of MySQL&reg; is, technically, a collection of tools. That includes the server (mysqld), the client (mysql), and other tools we'll discuss later. Those programs look in **my.cnf** to see how they should behave.

The "client" configuration section controls the mysql client, and the "mysqld" section controls the server configuration.

### Log files

Log files are the best place to start troubleshooting any program when necessary. By default MySQL&reg; stores its log files in the directory:

    /var/log/mysql

You may need to use `sudo` to get a listing of the files in that directory.

If you don't find the MySQL&reg; logs in the default directory you'll need to check MySQL&reg;'s configuration. Look in the **my.cnf** file and look for a `log_error` line, as in:

    log_error = /var/log/mysql/error.log

If you don't see a line like that, create one in the **mysqld** section so MySQL&reg; will use its own error log. We recommend using the location in the example, creating the `/var/log/mysql` directory if it doesn't already exist. Then, restart MySQL&reg; to make the change.

Make sure the user can write on the log directory of choice by controlling the `mysql`process. The user running the process will be defined in the **user configuration** value for mysqld in `my.cnf`.

#### Network settings

There might be a "port" setting under both the client and server configuration sections. The port under the server section controls what port the server will listen to. By default, that's `3306` but, you can change it to your taste.

The port in the client section tells the client what port to connect to by default. You'll generally want the two port settings to match up.

If you are using the default settings, you don't see the port entries in the configuration file. If you want to change the port, add the lines in the appropriate categories:

    [client]
    port = 3306

    [mysqld]
    port = 3306

The other network setting to look for is the `bind-address` value. That usually gets set to the address for localhost, 127.0.0.1. By binding to localhost, the server ensures no one can connect to it from outside
the local computer.

If you're running your MySQL&reg; server on a different computer from your
application, you'll want to bind to a remotely-accessible address instead of the localhost. Change the bind-address setting to match your public IP address (we recommend a backend IP address on a network for security reasons).

If you don't see a "bind-address" entry you should put one into the `mysqld` category to help control access to the server:

    [mysqld]
    $ bind-address = 127.0.0.1

Remember to account for the client's hostname when you set up your database users and to poke a hole in your firewall if you're running ip tables.

### mysqld and mysqld_safe

Behind the scenes, there are actually two versions of the MySQL&reg; server, `mysqld` and `mysqld_safe`. Both read the same configuration sections. However `mysqld_safe` launches with more safety features enabled to make it easier to recover from troubleshooting.

Both `mysqld` and `mysqld_safe` will read configuration entries in the `mysqld`
section. If you include a `mysqld_safe`section, then only `mysqld_safe` will read those values in.

By default, the MySQL&reg; service launches `mysqld_safe`. We recommend keeping it that way.

### mysqladmin

The `mysqladmin` tool lets you perform some administrative functions from
the command line. We won't talk much about it here because we're just
trying to get you up and running with enough basics to get by. It's
worth looking at the tool in more depth later to see what it can do,
particularly if you need to build scripts that perform functions like
checking the status of the server or creating and dropping databases.

### Backups

You have the following options to backup your databases, apart from the usual "back up the whole computer" approach. The main two
are copying the database files and using `mysqldump`.

#### File copy

By default MySQL&reg; creates a directory for each database in its data
directory:

    /var/lib/mysql

Once you've found the data directory, hold off a moment before making a copy of it. When the database server is active, it writes new values to tables. Don't interrupt its processes because this might potentially corrupt your backup.


To make sure the database files are copied cleanly you can shut the MySQL&reg; server down entirely before the copy. That's recommended.

You can lock the database as `read-only` for the duration of the copy. When you're done, release the lock. That way your applications can still read data while you're backing up files.

Lock the databases to `read-only` by running the following command from the command line:

    $ mysql -u root -p -e "FLUSH TABLES WITH READ LOCK;"

Run the following command to unlock the database when you're done:

   $  mysql -u root -p -e "UNLOCK TABLES;"

We're using a new option with the MySQL&reg; client, `-e`. That tells the client to run the query in quotes as if we'd entered it in the MySQL&reg; shell proper.

If you're writing these commands in a script, you can put the password _in quotes_ right after `-p` with no space between the two, as in:

    $ mysql -u root -p"password" -e "FLUSH TABLES WITH READ LOCK;"
    $ mysql -u root -p"password" -e "UNLOCK TABLES;"

Make sure you set the permissions on that file to restrict read access for password security reasons.

#### mysqldump

Another approach to backing up your database is to use the `mysqldump`
tool. Rather than copying the database files directly, `mysqldump` generates a text file that represents the database. By default the text file contains a list of SQL statements you would use to recreate the database, but you can also export the database in another format like .CSV or .XML. You can read the man page for `mysqldump` to see all its options.

The statements generated by `mysqldump` go straight to standard output. You can specify a to redirect the output by running the following command in the command line: 

    $ mysqldump -u root -p demodb > dbbackup.sql

This command tells `mysqldump` to recreate the `demodb` database in SQL statements and to write them to the file `dbbackup.sql`. Note that
the username and password options function the same as the MySQL&reg; client, so you can include the password directly after `-p` in a script.

#### Restore from mysqldump

Restoring a mysqldumped database looks similar to what was used to create it, but we use plain old `mysql` instead of `mysqldump`:

    $ mysql -u root -p demodb < dbbackup.sql

We also change from a greater-than `>`to a `<` angle bracket. That switches the command from redirecting its output to extracting input from the existing file. That input is sent to the `mysql` command, causing the MySQL&reg; dumped instructions to recreate the database.

By default, the SQL statements generated would just add to existing database tables, not overwrite them. If you're restoring a backup over an existing database you should drop the database's tables first, or drop and recreate the database itself. You can change that behavior by using the `$ --add-drop-table` option with the command that creates the `mysqldump`. That causes `mysqldump` to add a command to the backup files it writes that will drop tables before recreating them.

### Database engine


The **database engine** is the process that's churning away behind the scenes,
writing to, and reading data from files. You won't usually need to know
anything other than that it's there, but sometimes you'll want to run an
application that's been optimized for a particular database engine.

Applications that need tables, create them on-demand. The engine type is created automatically. We aren't going to get into that syntax here.

To see the engine your database's tables use,you can run the following command in the MySQL&reg; shell:

    $ SHOW TABLE STATUS FROM demodb;

Change `demodb` to the name of your database.

#### Choosing an engine

Ideally, you won't need to choose an engine. If you're not very familiar with MySQL&reg; allow the application to choose one by default and if you're writing the application, use the default engine until you're more comfortable with your options.

If you have a database administrator, follow his instructions.

The two database engines used most often with MySQL&reg; are MyISAM and InnoDB. The default database engine for MySQL&reg; version 5.1 and earlier is MyISAM, while InnoDB is the default database engine starting with MySQL&reg; version 5.5.

#### MyISAM

Because MyISAM has been the default in MySQL&reg; for a while, it's the most compatible choice of the two main engines. Certain types of searches perform better on MyISAM than InnoDB. Just because it's the older of the two doesn't mean it can't be the best for a given application type.

#### InnoDB

**NOTE:** A Data Base Administrator (DBA) can help you achieve InnoDB's best performance since InnoDB requires a lot of adjustments for your environment and access patterns. The default configuration is optimal for everyday software development use. 

InnoDB is more fault-tolerant than MyISAM and handles crashes and recovery with a much smaller risk of database corruption.



It's possible you may be running an application that requires InnoDB,
and if you're using MySQL&reg; 5.1 or earlier there might not be any settings
already in the my.cnf configuration file. That can be a problem if you're
running on a server that doesn't have an abundance of memory.

Some settings to get you started with InnoDB on a shared server with 256
megs of RAM are:

    innodb_buffer_pool_size = 32M
    innodb_log_file_size = 8M
    innodb_thread_concurrency = 8
    innodb_file_per_table

Add those to the [mysqld] section of the configuration file. Again, those are
only rough guides - enough to get you running, but definitely not
optimized. For that, you'll probably want a DBA, or at least to
experiment with incremental changes over time.

### Summary

Now you should have MySQL&reg; configured for your environment, and might even have accounted for the database engine being used by your tables.

### Related articles

- [Install MySQL&reg; server on the Ubuntu operating system](/support/how-to/install-mysql-server-on-the-ubuntu-operating-system)
- [Reset a MySQL&reg; root password](/support/how-to/reset-a-mysql-root-password)
