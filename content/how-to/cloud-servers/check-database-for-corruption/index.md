---
permalink: check-database-for-corruption/
audit_date: '2021-05-24'
title: 'Check database for corruption'
type: article
created_date: '2021-04-07'
created_by: David Fonseca
last_modified_date: '2021-05-24'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to check your database for corruption in MySQL&reg;. Why
does corruption occur in a database? It might happen because of hardware, specifically
disk-based failures or when a disk is full.

### Symptoms

The principal symptom: You try to log in and get an error message
in the console: **Session Replace: Table './DB\_NAME/mdl\_sessions2' is marked as
crashed and should be repaired**.

### Solutions

You can check and repair this issue by using the `mysqlcheck` command with the
`--auto-repair DBNAME` flag. When you add the `--auto-repair` flag, MySQL tries to
repair the corruption in your database.

```sql
# mysqlcheck -u USER_NAME -p --auto-repair DB_NAME
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

If you just want to check if your database is or not corrupted, run the
following command:

```sh
# mysqlcheck -c DATABASE_NAME  -u USER_NAME -p
```

If you want to check all databases and tables in your server, add
the flag `--all-databases` and omit the name of the database,
as shown in the following command:

```sh
# mysqlcheck -c -u USER_NAME -p --all-databases
```

If you just want to check a table inside a database, run the following
command:

```sh
# mysqlcheck -a DB_NAME TABLE_NAME -u USER_NAME -p
```

### Conclusion

With the commands presented in this article, you can now check your MySQL
database or table for corruption.
