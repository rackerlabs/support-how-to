---
permalink: how-to-drop-tables-in-mysql/
audit_date:
title: How to drop tables in mysql
type: article
created_date: '2020-11-02'
created_by: James Andrade
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# How to drop tables in MySQL

You can drop tables in MySQL/MariaDB by following these steps:

1. Login to MySQL/MariaDB:
    ```
    root@localhost# mysql -u root -p
    Enter password:*******
    ```

2. Change to the database and drop the table:
   ```
    mysql> use TESTINGDB;
    Database changed
    mysql> DROP TABLE testing_tbl;
    Query OK, 0 rows affected (0.8 sec)
    mysql>
    ```
