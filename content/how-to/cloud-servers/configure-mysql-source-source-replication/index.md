---
permalink: configure-mysql-source-source-replication
audit_date:
title: Configure MySQL source-source replication
type: article
created_date: '2011-06-07'
created_by: Rackspace Support
last_modified_date: '2020-09-17'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

**Note**: Rackspace Support cannot assist with source-source replication setups
due to the complexity of configuration and likelihood of error.  As an
alternative to direct MySQL source-source replication, consider either our
[Cloud Databases](https://www.rackspace.com/cloud/databases/) service or a
replication engine like [Tungsten](https://code.google.com/p/tungsten-replicator/)
for more reliable data replication between database instances.

### MySQL Source-Source replication

This article shows you how to set up
[Cluster Replication: Bidrectional and Circular Replication](https://dev.mysql.com/doc/refman/5.6/en/mysql-cluster-replication-multi-source.html)
between two Cloud Servers. Source-Source data replication enables replicated
data, stored on multiple computers, to be updated by any authorized contributing
member of the group. This enables more open collaboration than
[source-replica replication](/support/how-to/set-up-mysql-source-replica-replication) where
any needed changes identified by a group member must to be submitted to the
designated source of the node.

This tutorial uses the Debian 5 (Lenny) operating sytem, built from the Rackspace
Cloud base image.

### Setup Outline

There are two Cloud Servers, `debian501` and `debian502`, in this exercise.
Both servers have two IP addresses (one public, one private). The exercise
configures the replication to be done over the private IP interface so that you
don't incur any bandwidth charges.

### Creating the Cloud Servers

You need to create two Linux Cloud Servers, using the Debian 5 base image. Use
the following steps to create each server separately.

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3. Select **Servers > Cloud Servers**.
4. Click **Create Server**.
5. Name the servers so that you can easily identify them during setup. In this exercise they are named debian501 and debian502.
6. Select the Debian image.
7. Select the RAM configuration (flavor) meets your database requirements.
8. Click **Create Server**.

The following server commands should be run as a privileged (root, sudo group) user.

### Installing MySQL

First we need to install MySQL on both the Debian Cloud Servers. As always,
prior to installing any packages, we need to make sure that our package list is
up to date and our locale/language settings are configured properly.

- Update the package database:

        # aptitude update

- Install locales:

        # aptitude install locales

        # dpkg-reconfigure locales

- The `dpkg-reconfigure locales` command brings up a locales setting window
where you can choose the locales for your system depending on your country and
region. In this case, choose `en\_GB.UTF-8`.

- Now, run the following commands to install MySQL:

        # aptitude install mysql-server mysql-client libmysqlclient15-dev

### Configuring replication

Once the _mysql-server_ package has been installed successfully, start
configuring each of the MySQL nodes in order to enable replication between them.

You need to create the database that will be replicated as well as the
replication username and password to be used with it. You can use the commands
outlined below to set them up, remembering to change all the strings/values in
brackets to apply to your specific configuration.

- First, on debian501, log in to the _mysql console_ (using the mysql root password that you setup during MySQL installation).

        # mysql -u root -p
        mysql>

- Now, create the replication user, which is used to synchronize the changes.

        mysql> grant replication slave on \*.\* to replicauser@'[private IP of debian502]' identified by '[some password]';
        mysql> flush privileges;
        mysql> exit

- Do the same for debian502.

        mysql> grant replication slave on \*.\* to replicauser@'[private IP of debian501]' identified by '[some password]';
        mysql> flush privileges;
        mysql> exit

- Back on debian501, edit _/etc/mysql/my.cnf_ and insert, update, or uncomment the following entries:

        bind-address = 0.0.0.0
        server-id = 1
        log-bin = /var/log/mysql/var/bin.log
        log-slave-updates
        log-bin-index = /var/log/mysql/log-bin.index
        log-error = /var/log/mysql/error.log
        relay-log = /var/log/mysql/relay.log
        relay-log-info-file = /var/log/mysql/relay-log.info
        relay-log-index = /var/log/mysql/relay-log.index
        auto_increment_increment = 10
        auto_increment_offset = 1
        master-host = [private IP address of debian502]
        master-user = [replication username]
        master-password = [replication password]
        replicate-do-db = <database name to be replicated>

- Repeat the steps on the debian502 server.

        bind-address = 0.0.0.0
        server-id = 2
        log-bin = /var/log/mysql/bin.log
        log-slave-updates
        log-bin-index = /var/log/mysql/log-bin.index
        log-error = /var/log/mysql/error.log
        relay-log = /var/log/mysql/relay.log
        relay-log-info-file = /var/log/mysql/relay-log.info
        relay-log-index = /var/log/mysql/relay-log.index
        auto_increment_increment = 10
        auto_increment_offset = 2
        master-host =  [private IP address of debian501]
        master-user = [replication username]
        master-password = [replication user password]
        replicate-do-db = [database name to be replicated]

- Now, restart both databases. If the service restart on either server fails,
then check the **/var/log/mysql/error.log** file for any errors. Update the
configuration and check for any typos, and so on.

### Testing the scenarios

For the purpose of testing your replication setup, create the database
specified in the previous configuration section.  Also create a test table on
one of the nodes and watch the log files in **/var/log/mysql** directory. Note
that all database changes should be replicated to your other server immediately.

      mysql> create database [your-db-name];
      mysql> use [your-db-name]
      mysql> create table foo (id int not null, username varchar(30) not null);
      mysql> insert into foo values (1, 'bar');

- As an additional test, stop the MySQL service on debian502, making database
changes on the debian501 server and then restarting the MySQL service on debian502.
The debian502 MySQL service should sync up all the new changes automatically.

- You should also consider changing the default binary log rotation values
(`expire_logs_days` and `max_binlog_size`) in the **/etc/mysql/my.cnf** file,
because, by default, all the binary logs are kept for 10 days. If you have a high
transaction count on your database application, it can cause significant hard
disk space usage in logs. So, consider changing those values to match your server
backup policies. For example, if you have daily backups setup of your MySQL node,
you don't need to keep 10 days worth of binary logs.
