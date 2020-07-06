---
layout: post
title: "PostgreSQL administration, Part 1"
date: 2020-04-03
comments: true
author: Kailash Chandra Kalkhundiya
published: true
authorIsRacker: true
authorAvatar: 'https://gravatar.com/avatar/36ea6795bf5e6bfc103f34a38a303060'
bio: "I'm an Oracle DBA with experience on the different flavors of Oracle RDBMS.
I'm also certified on the AWS cloud platform and PostgreSQL. I am passionate
about learning new things in different RDBMS environments and about Python, as
a programing language."
categories:
  - database
  - Oracle
metaTitle: "PostgreSQL administration, Part 1"
metaDescription: "This post introduces PostgreSQL and walks you through the installation and
configuration of version 9.3 on Linux&reg;."
ogTitle: "PostgreSQL administration, Part 1"
ogDescription: "This post introduces PostgreSQL and walks you through the installation and
configuration of version 9.3 on Linux&reg;."
---

This post introduces PostgreSQL and walks you through the installation and
configuration of version 9.3 on Linux&reg;.

<!--more-->

### Introduction

PostgreSQL is the world's most advanced open-source Relational Database Management
System (RDBMS). Many leading organizations, such as Apple, IMDB, Skype, Uber,
Lockheed Martin, Verizon, and others, use PostgreSQL. This RDBMS began in 1986
as part of the POSTGRES project at the University of California at Berkeley and
has more than 30 years of active development on the core platform.

PostgreSQL runs on all major operating systems and has been ACID-compliant since
2001. The acronym ACID consists of the following components:

- **Atomicity**: You guarantee that either the entire transaction succeeds or
  none of it does.
- **Consistency**: You guarantee that all data is consistent. All data is valid
  according to the defined rules. The rules include constraints, cascades, and
  triggers applied to the database.
- **Isolation**: All transactions occur in isolation. The transaction cannot read
  data from any other transaction that has not yet completed.
- **Durability**: After you commit a transaction, it remains in the system, even
  if there's a system crash immediately following the operation.

Unsurprisingly, PostgreSQL serves as the open-source relational database of
choice for many people and organizations because of its powerful add-ons such
as the popular PostGIS geospatial database extender.

![]({% asset_path 2020-04-03-postgresql-administration-part-1/Picture1.png %})

*Image Source*: [https://postgresql-database.blogspot.com/2013/08/postgresql-architecture.html](https://postgresql-database.blogspot.com/2013/08/postgresql-architecture.html)

### Support

Production support SLA's available from the following companies:

- [https://www.enterprisedb.com](https://www.enterprisedb.com)
- [https://www.2ndquadrant.com/](https://www.2ndquadrant.com/)
- [https://www.revsys.com/](https://www.revsys.com/)
- [https://imperoit.com/PostgreSQL_Support.htm](https://imperoit.com/PostgreSQL_Support.htm)

Supported Versions: Current (12) / 11 / 10 / 9.6 / 9.5 / 9.4
Development Versions: devel
Unsupported versions: 9.3 / 9.2 / 9.1 / 9.0 / 8.4 / 8.3 / 8.2

### Installation and Configuration

Perform the following steps to install and configure Postgres 9.3:

#### Install Postgres 9.3 on Linux 7.1

Run the following command to install Postgres 9.3 on Red Hat&reg; Linux 7.1:

    [root@snwdbsolpeprod01 ~]# cat /etc/redhat-release
    Red Hat Enterprise Linux Server release 7.1 (Maipo)

#### Create an empty folder

Create an empty folder for the database installation.

    [root@snwdbsolpeprod01 mnt]# mkdir postt
    [root@snwdbsolpeprod01 postt]# pwd
    /mnt/postt

#### Download the RPM

Run the following command to download the Red Hat Package Manager (RPM) for your
OS version to start the Postgres installation:

    [root@snwdbsolpeprod01 postt]# wget https://yum.postgresql.org/9.3/redhat/rhel-7-x86_64/pgdg-redhat93-9.3-2.noarch.rpm

#### Install the RPM

Install the RPM package by using the following command:

    root@snwdbsolpeprod01 postt]# rpm -ivh pgdg-redhat93-9.3-2.noarch.rpm

#### Install additional packages

After you install RPM, you need to install some Postgre packages that install
the DB software.

    [root@snwdbsolpeprod01 postt]# yum install postgresql-contrib.x86_64
    [root@snwdbsolpeprod01 postt]# yum install postgresql93-server.x86_64

#### Configure the PGDATA location

Determine where to store the data. To use a non-default location for data, edit
the PostgreSQL service **sysconfig** file, and change the PGDATA argument.

    vi /etc/rc.d/init.d/postgresql
    vi /etc/sysconfig/pgsql/postgresql

**NOTE**: If PostgreSQL in **sysconfig/pgsql** does not exist, create it and
add a line denoting where you want to store the data, as shown in the following
example:

    [root@snwdbsolpeprod01 pgsql]# cd /etc/sysconfig/pgsql/
    [root@snwdbsolpeprod01 pgsql]# vi postgresql
    [root@snwdbsolpeprod01 pgsql]# cat postgresql
    PDGATA=/mnt/postt


#### Initialize the database

The first command (only needed once) is to initialize the database in PGDATA.

    service <name> initdb

For example: for version 9.3:

    service postgresql-9.3 initdb

or

    /usr/pgsql-9.3/bin/postgresql93-setup initdb

    [root@snwdbsolpeprod01 data]# /usr/pgsql-9.3/bin/postgresql93-setup initdb
    Initializing database ... OK

#### Set Postgres to start automatically

If you want PostgreSQL to start automatically when the OS starts, use the
following command:

    [root@snwdbsolpeprod01 data]# chkconfig postgresql-9.3 on

**Note**: Forwarding request to 'systemctl enable postgresql-9.3.service'.

#### Start the PostgreSQL service

To start the PostgreSQL service, run the following command:

    [root@snwdbsolpeprod01 data]# systemctl start postgresql-9.3.service

#### Configure the database

You can easily configure the database by updating postgresql.conf as shown in
the following example:

    vi /var/lib/pgsql/9.3/data/postgresql.conf

Change the following:

    listen_address = ‘*’
    port = 15000
    max_connections=300
    shared_buffers = 8192MB                 # min 128kB
                                            # (change requires restart)
    temp_buffers = 128MB                    # min 800kB
    max_prepared_transactions = 20          # zero disables the feature

    log_destination = 'csvlog'
    logging_collector = on
    log_directory = '/mnt/pgsql/logs'
    log_filename = 'postgresql-%a.log'

    #------------------------------------------------
    # AUTOVACUUM PARAMETERS
    #------------------------------------------------

    autovacuum = on
    # Enable autovacuum subprocess? 'on'
                                            # requires track_counts to also be on.
    #log_autovacuum_min_duration = -1       # -1 disables, 0 logs all actions and
                                            # their durations, > 0 logs only
                                            # actions running at least this number
                                            # of milliseconds.
    autovacuum_max_workers = 3              # max number of autovacuum subprocesses
                                            # (change requires restart)
    autovacuum_naptime = 10080min           # time between autovacuum runs
    autovacuum_vacuum_threshold = 1000      # min number of row updates before
                                            # vacuum
    #autovacuum_analyze_threshold = 50      # min number of row updates before
                                            # analyze
    #autovacuum_vacuum_scale_factor = 0.2   # fraction of table size before vacuum
    #autovacuum_analyze_scale_factor = 0.1  # fraction of table size before analyze
    #autovacuum_freeze_max_age = 200000000  # maximum XID age before forced vacuum
                                            # (change requires restart)
    #autovacuum_multixact_freeze_max_age = 400000000        # maximum Multixact age
                                            # before forced vacuum
                                            # (change requires restart)
    #autovacuum_vacuum_cost_delay = 20ms    # default vacuum cost delay for
                                            # autovacuum, in milliseconds;
                                            # -1 means use vacuum_cost_delay
    #autovacuum_vacuum_cost_limit = -1      # default vacuum cost limit for
                                            # autovacuum, -1 means use
                                            # vacuum_cost_limit

#### Configure database connection settings

To restrict or manage the database connection setting, run the following command:

    vi /var/lib/pgsql/9.3/data/pg_hba.conf

    # TYPE  DATABASE        USER            ADDRESS                 METHOD

    # "local" is for Unix domain socket connections only
    local   all             all                                     peer
    local   all             postgres                                md5
    local   all             postgres                                ident
    # IPv4 local connections:
    # IPv6 local connections:
    host    all             all             ::1/128                 ident
    host    all             all             0.0.0.0/0               md5
    # Allow replication connections from localhost, by a user with the
    # replication privilege.
    #local   replication     postgres                                peer
    #host    replication     postgres        127.0.0.1/32            ident
    #host    replication     postgres        ::1/128                 ident

#### Configure the firewall

To configure the port on the firewall, run the following commands:

    iptables -I INPUT -p tcp --dport 15000 --syn -j ACCEPT

    service iptables save

    service iptables restart

    root@snwdbsolpeprod01 postt]# service postgresql-9.3 restart

#### Create a user or role

To create a new user or role in the database, run the following commands:

    su – postgres

    psql -p 15000

    postgres=# CREATE ROLE OCT1 LOGIN
      UNENCRYPTED PASSWORD 'test@123'
      INHERIT REPLICATION;

#### Create a tablespace

To create a new tablespace on the database, run the following command:

    postgres=# CREATE TABLESPACE OCT1_tablespace
      OWNER ilusr
      LOCATION '/usrdata/pgsql/data/oct';

#### Create a database

To create a new database, run the following command:

    postgres=# CREATE DATABASE OCT1
      WITH ENCODING='UTF8'
       OWNER=test
       LC_CTYPE='en_US.UTF-8'
       CONNECTION LIMIT=-1
       TABLESPACE=OCT1_tablespace;

### Basic commands

Some basic administration commands include the following ones:

#### Stop and start PostgreSQL

    /opt/PostgreSQL/9.3/bin/pg_ctl -D /mnt/postt/data stop
    /opt/PostgreSQL/9.3/bin/pg_ctl -D /mnt/postt/data start
    /opt/PostgreSQL/9.3/bin/pg_ctl -D /mnt/postt/data restart
    /opt/PostgreSQL/9.3/bin/pg_ctl -D opt/PostgreSQL/9.4/data –m smart stop #wait for complete the transactions
    /opt/PostgreSQL/9.3/bin/pg_ctl -D /mnt/postt/data –m fast stop #Immediate stop
    /opt/PostgreSQL/9.3/bin/pg_ctl -D /mnt/postt/data –m immediate stop #Abort the DB
    /opt/PostgreSQL/9.3/bin/pg_ctl -D /mnt/postt/data –m smart restart
    /opt/PostgreSQL/9.3/bin/pg_ctl -D /mnt/postt/data –m fast restart
    /opt/PostgreSQL/9.3/bin/pg_ctl -D /mnt/postt/data –m immediate restart

#### Check the PostgreSQL version

    postgres=# select version();


#### Identify the activity on a specific database level

    select pid,backend_xid,backend_xmin,query from pg_stat_activity ;

#### Analyze table status

    select relname,last_autoanalyze,last_analyze,n_mod_since_analyze from pg_stat_all_tables;

#### Find the physical path of a table

    postgres=# SELECT pg_relation_filepath('testpitr1');

     pg_relation_filepath
     ----------------------
     base/13003/16399

    [postgres@postgres221 data]$ ls -l /mnt/postt/data/base/13003/16399
    -rw------- 1 postgres postgres 256024576 Feb 21 06:36 /mnt/postt/data/base/13003/16399

#### Get schema names inside an instance or cluster

    select schema_name from information_schema.schemata;

    select nspname from pg_catalog.pg_namespace;

    post_gre=# \dn
       List of schemas
       Name       |  Owner
    --------------+----------
     kailash_test | postgres
     public       | postgres
    (2 rows)

#### Get dbnames inside an instance or cluster

    template1=# select datname from pg_database;
     template1
     template0
     post_gre

     template1=# \l
     post_gre  | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =Tc/postgres          +
               |          |          |             |             | postgres=CTc/postgres +
               |          |          |             |             | kailash_s=CTc/postgres
     template0 | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres           +
               |          |          |             |             | postgres=CTc/postgres
     template1 | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres           +
               |          |          |             |             |

    template1=# select usename from pg_catalog.pg_user;
     kailash
     kailash_s
     postgres

    template1=# \du
     kailash   |                                                | {}
     kailash_s | Superuser, Create role, Create DB              | {}
     postgres  | Superuser, Create role, Create DB, Replication | {}


### Conclusion

PostgreSQL's tag line claims that it is "The world's most advanced open source
database." However, PostgreSQL isn't just relational, it's object relational.
This distinction gives it some advantage over other open source SQL databases
such as MySQL, MariaDB, and Firebird. PostgreSQL is an obvious choice on AWS
cloud for migrating in-house RDBMS to an Open Source RDBMS on CLOUD.

In Part 2 of this blog, I cover Postgre backup restore and recovery.

Use the Feedback tab to make any comments or ask questions. You can also
[chat now](https://www.rackspace.com/#chat) to start the conversation.

<a class="cta teal" id="cta" href="https://www.rackspace.com/dba-services">Learn more about our Database services</a>
