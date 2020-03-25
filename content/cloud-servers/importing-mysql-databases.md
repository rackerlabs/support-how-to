---
permalink: importing-mysql-databases/
audit_date:
title: 'Importing MySQL Databases'
type: article
created_date: '2020-03-25'
created_by: James Andrade
last_modified_date: 
last_modified_by: 
product: Cloud Product
product_url: cloud-product
---


# MySQL Restore


Before importing a mysql backup, it is useful to create a .my.cnf file with the root credentials, so that way you won't have to input the password when restoring the databases. This is also beneficial if you want to create a cron job script to backup mysql daily.

Store mysql root password in /root/.my.cnf. Chmod 600.

```
[client]
user=root
password=yourmysqlrootpassword
```
^this is what you'll place in the .my.cnf file.

### Commands


Restore a single database:

```sh
$ mysql [database_name] < /path/to/backup/backupfile.sql
```

Restore all databases (tables need to exist, or backup needs to contain CREATE TABLE statements):

```sh
$ mysql < /path/to/backup/alldatabases.sql
