---
permalink: /import-database-to-a-local-mysql-instance
audit_date:
title: 'Import Database to a Local MySQL Instance'
type: article
created_date: '2021-08-25'
created_by: Alfonso Murillo
last_modified_date: '2021-09-03'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---
This article provides a basic guide to import a database to a local MySQL instance from text files through the command-line by using the `mysqlimport` client, which is a program included in MySQL.

The `mysqlimport` program offers a simplified command-line interface for the `LOAD DATA` MySQL statement, which reads rows from a text file to add them to tables in the database. `mysqlimport` sends a `LOAD DATA` statement to the server.

## Requirements
- The `mysqlimport` program strips the file's extension to identify the table's name, so the file's name is important. If the target table is called `test_table`, the file can be named `test_table.txt`, `test_table.csv`, `test_table.tab`, or any other extension.
- The target table should exist in the table. In case you get an error because the table does not exist make sure that it is created before using the `mysqlimport` tool and that the file name matches the table name correctly.

## Using the mysqlimport client
The syntax for the `mysqlimport´ program is as follows:

```sh
mysqlimport [OPTIONS] DB_NAME TEXT_FILE_1 [TEXT_FILE_2 ... ]
```

## Useful options
The `mysqlimport` command supports multiple options. In this section, we will describe some of the most useful options.

##### Authentication
The flag `--user` or `-u` is the MySQL username that will be used to connecting to the server.

You can also add the `--password` or `-p` flag to specify the user's password to connect to the server. Note that using this option requires the password to be written into the command invocation, which is **insecure** as it saves in the command history log. If you do not add this flag the password will be asked for after executing the command.

In case the user does not need any password to access the server you can avoid the terminal prompting for one by using the `--skip-password` option.

`mysqlimport -u USERNAME -password NOT_SO_SECURE_PASSWORD db_name table_name.txt`

##### Read local files
The flag `--local` or `-L` indicates that the file will be found on the client. If this flag is not added the file will be searched on the server.

`mysqlimport -u USERNAME --local db_name table_name.txt`

##### Compress the information
To compress the information sent between the client and the server (if possible) use the `--compress` or `-C` option.

##### Specify the columns names
By using the `--columns` option and providing a comma-separated list you can define the name for the imported columns.

`mysqlimport -u USERNAME --columns column1,column2,column3 --local db_name table_name.txt`

##### Other options
Some other common options are listed below:
- `--delete`: empties the target table before importing the new data.
- `--lock-tables`: locks all the tables preventing any writing. This allows that all tables are correctly synchronized.
- `--hostname` or `-h`: indicates the host where the data will be imported. The default value is `localhost`.
- `--port` or `-P`: indicated the TCP/IP port that will be used for the connection.

## Conclusions
The `mysqlimport` client is really useful to import information to existing tables in a MySQL instance inside the same server (local) or to another server by using the `--hostname` and `--port` options in a fast and reliable manner.

The options mentioned in this article will allow you to make an easy import with specific criteria.

### Related articles
For the complete guide of `mysqlimport´ options, you can visit the [official mysqlimport documentation](https://dev.mysql.com/doc/refman/5.6/en/mysqlimport.html).
