---
permalink: check-database-for-corruption/
audit_date:
title: 'Check database for corruption'
type: article
created_date: '2021-04-07'
created_by: David Fonseca
last_modified_date:
last_modified_by:
product:
product_url: 
---

# Check database for corruption (MySQL)
This article explains how to check your database for corruption in MySQL.
When occurs the corruption in a database? Usually occurs as a result of hardware, to be specific in disk-based failures or when a disk is full. 

## Symptoms
The principal symptom is got an error when you try to login, and shows a message in the console:
`Session Replace: Table './DB_NAME/mdl_sessions2' is marked as crashed and should be repaired`

## Solution
This issue could be checked and repaired using the _mysqlcheck_ command and the flag _--auto-repair DBNAME_.
Adding the flag _--auto-repair_, MySQL will try to repair the corruption in our database.

```# mysqlcheck -u USER_NAME -p --auto-repair DB_NAME
Enter password:
db_test.adodb_logsql                      OK
db_test.mdl_assignment                    OK
db_test.mdl_assignment_submissions        OK
...
db_test.mdl_log
error    : Table './db_test/mdl_log' is marked as crashed and should be repaired
...
db_test.mdl_sessions2
error    : Table './db_test/mdl_sessions2' is marked as crashed and should be repaired

Repairing tables
db_test_18_latest.mdl_log                           OK
db_test_18_latest.mdl_sessions2                     OK
```

If you just want to check if your database is or not corrupted, just type the following command:
`# mysqlcheck -c DATABASE_NAME  -u USER_NAME -p`

Besides, if you want to check all databases and all tables in your server adding the flag _--all-databases_ and omitting the name of the database:
`# mysqlcheck -c -u USER_NAME -p --all-databases`

Alternative, if you just want to check a table inside a database put the command:
`# mysqlcheck -a DB_NAME TABLE_NAME -u USER_NAME -p`

## Conclution 
With the commands presented in this article you now are able to check your MySQL database or table for corruption.
