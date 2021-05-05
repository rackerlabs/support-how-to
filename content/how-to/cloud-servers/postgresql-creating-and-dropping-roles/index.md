---
permalink: postgresql-creating-and-dropping-roles
audit_date: '2019-05-01'
title: Create and drop roles in PostgreSQL
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2019-05-01'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

To test a production database server, you should create additional roles
because regularly working in your databases as the default superuser role is
risky.

This article shows you how to create additional roles with PostgreSQL&reg;
by using either `psql` client commands or shell commands. You need to use
the Linux&reg; user, **postgres**&reg;, with both methods.

Log in to your instance with your Linux credentials and run the following
command to switch users to the **postgres** user:

    # sudo su - postgres

### Use psql commands

Use the following steps to create or drop users by using the `psql` client.

#### Connect with psql

Connect to the database server by using the
[psql](https://www.postgresql.org/docs/8.3/static/app-psql.html "https://www.postgresql.org/docs/8.3/static/app-psql.html")
client with the `postgres` role:

    postgres@demo:~$ psql -U postgres
    ...
    Welcome to psql 8.3.6, the PostgreSQL interactive terminal.

    Type:  \copyright for distribution terms
           \h for help with SQL commands
           \? for help with psql commands
           \g or terminate with semicolon to execute query
           \q to quit

    postgres=#

#### Create a role

After you connect with the `psql` client, run the following command to create a
role that has the `LOGIN` attribute and a non-empty, MD5-encrypted password:

    postgres=#CREATE ROLE demorole1 WITH LOGIN ENCRYPTED PASSWORD 'password1';

**Note**: The trailing semicolon ( ; ) at the end of the SQL statement is
required. The single-quotes ( ' ' ) are not part of the password but must
enclose it.

Validate that you created the role successfully by using the following command:

    postgres=# \du
                                   List of roles
     Role name | Superuser | Create role | Create DB | Connections | Member of
    -----------+-----------+-------------+-----------+-------------+-----------
     demorole1 | no        | no          | no        | no limit    | {}
     postgres  | yes       | yes         | yes       | no limit    | {}
    (2 rows)

#### Drop a role

When you no longer need a role, you can drop (delete or remove) a role by
using the following command:

    postgres=# DROP ROLE demorole1;

If you then check with the `\du` command, you can see that `demorole1` is no
longer listed.

#### Create a superuser

Occasionally, you might need to create additional superuser roles, such as when
you have a database programmer whom you trust to administer the postgres
server.

To create a superuser, run the following command:

    postgres=#CREATE ROLE mysuperuser2 WITH SUPERUSER CREATEDB CREATEROLE LOGIN ENCRYPTED PASSWORD 'mysuperpass2';

The command sets the `LOGIN` attribute and specifies a non-empty password.
These factors are important if you intend this superuser role for local and
remote connections to the database.

#### Exit psql

To exit `psql`, run the following command:

    postgres=# \q
    ...
    postgres@demo:~$

### Use shell commands

You can create and drop database roles by using the
[createuser](https://www.postgresql.org/docs/8.3/static/app-createuser.html "https://www.postgresql.org/docs/8.3/static/app-createuser.html")
and
[dropuser](https://www.postgresql.org/docs/8.3/static/app-dropuser.html "https://www.postgresql.org/docs/8.3/static/app-dropuser.html")
shell commands, which are wrappers for the CREATE and DROP
SQL statements. A standard postgres installation includes these commands.

#### createuser

Run the following command to create a non-superuser role that has the `LOGIN`
attribute:

    postgres@demo:~$ createuser -PE demorole2

    Enter password for new role:
    Enter it again:
    ...
    postgres@demo:~$

The `-P` flag prompts you to set a password for the new role, and the `-E` flag
indicates to store the password as an MD5-encrypted string.

To verify the role creation, connect to `psql` and run the following command:

    postgres=# \du
                                   List of roles
     Role name | Superuser | Create role | Create DB | Connections | Member of
    -----------+-----------+-------------+-----------+-------------+-----------
     demorole2 | no        | no          | no        | no limit    | {}
     postgres  | yes       | yes         | yes       | no limit    | {}
    (2 rows)

#### dropuser

Run the following command to drop a role:

    postgres@demo:~$ dropuser -i demorole2
    ...
    Role "demorole2" will be permanently removed.
    Are you sure? (y/n) y
    ...
    postgres@demo:~$

The `-i` flag provides a confirmation prompt, which is a good safety
measure when you run a potentially destructive command.

#### Create a superuser

Occasionally, you might need to create additional superuser roles, such as when
you have a database programmer whom you trust to administer the postgres
server.

To create a superuser, run the following command:

    postgres@demo:~$ createuser -sPE mysuperuser
