---
permalink: drop-tables-in-mysql
audit_date: '2020-11-04'
title: Drop tables in MySQL
type: article
created_date: '2020-11-02'
created_by: James Andrade
last_modified_date: '2020-11-04'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

You can use the `drop table` command to remove a table definition and all data, indexes, triggers, constraints,
and permission specifications for that table.

**IMPORTANT**: You should be very careful with this command because after you delete a table,
you can't retrieve any of that information.

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
