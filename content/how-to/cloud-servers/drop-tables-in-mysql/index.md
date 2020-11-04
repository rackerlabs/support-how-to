---
permalink: drop-tables-in-mysql/
audit_date: '2020-11-04'
title: Drop tables in mysql
type: article
created_date: '2020-11-02'
created_by: James Andrade
last_modified_date: '2020-11-04'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

The drop table command is used to remove a table definition and all data, indexes, triggers, constraints and permission specifications for that table.

**IMPORTANT**: You should be very careful while using this command because once a table
is deleted then all information will be lost forever.

You can drop tables within MySQL&reg; and MariaDB&reg; by following these steps:

1. Login to MySQL or MariaDB:

        root@localhost# mysql -u root -p
        Enter password:*******

2. Change to the database and drop the table:

        mysql> use TESTINGDB;
        Database changed
        mysql> DROP TABLE testing_tbl;
        Query OK, 0 rows affected (0.8 sec)
        mysql>
