---
permalink: restore-a-single-table-from-a-full-mysqldump-file/
title: Restore a single table from a full mysqldump file
type: article
created_by: Rocio Rodriguez
created_date: 2021-07-13
last_modified_date: 2021-08-13
last_modified_by: Miguel Salgado
audit_date:
---

Note: This article assumes that you have installed and configured MySQL® on your server.

### Prerequisites
   - A MySQL® server
   - Access to a MySQL® privileged user such as root.
   - A MySQL® dump file of the database that includes the table that you want to import.

### Procedure

1. Login into your MySQL® server. 
    **Note**: This step can change depending on your OS and user type.
    ```sh
    mysql -u root -p
    ```
2. Create a temporary database.
    ```mysql
    CREATE DATABASE tempdatabase;
    ```
3. Exit the MySQL® server.
    ```mysql
    exit;
    ```
4. Go to the MySQL® dump file directory and execute the following command:
    ```sh
    mysql -u root -p tempdatabase < mysqldump.sql
    ```
5. Login into your MySQL® server to ensure that your database was imported properly and the table exists. (Optional)
    Login into your MySQL® server.
    ```sh
    mysql -u root -p
    ```
    Switch to the temporary database and show the tables:
    ```mysql
    USE tempdatabase;
    SHOW TABLES;
    exit;
    ```
6. Export the desire table to a MySQL® dump.
    ```sh
    mysqldump -u root -p tempdatabase mytable > mytabledump.sql
    ```
7. Import the table to the database.
    ```sh
    mysql -u root -p mydatabase < mytabledump.sql
    ```
8. Delete the temporary database.
    Login into your MySQL® server.
    ```sh
    mysql -u root -p
    ```
    Delete the database:
    ```mysql
    DROP DATABASE tempdatabase;
    exit;
    ```


    
