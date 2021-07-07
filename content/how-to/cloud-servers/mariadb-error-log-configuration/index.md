---
permalink: mariadb-error-log-configuration/
audit_date:
title: 'MariaDB Error Log configuration'
type: article
created_date: '2021-06-23'
created_by: Alfonso Murillo
last_modified_date: '2021-06-23'
last_modified_by: Alfonso Murillo
product: Cloud Servers
product_url: cloud-servers
---

# MariaDB Error Log configuration

MariaDB offers different configurations on what and when to log using system variables. MariaDB server logs are the followings:

- **Error log:** this log is always enabled, logging all critical errors. It is possible to log warnings.
- **General query log:** this log is enabled with `--general-log` and is used to debug or audit queries.
- **Slow query log:** this log allows identifying queries that cause performance issues. It is enabled by starting mysqld with `--slow-query-log`.
- **Binary log:** enabled by starting mysqld with `--log-bin`, it is used on machine that are replication masters.

This article focuses on the first log, the error log, and on how to configure it to obtain the information that is most useful for your purposes.

## Error log's output file
The error log's output is sent to the `datadir` directory as `${hostname}.err` file. This file's name can be changed by setting the ´log_error´ system variable. This new name will be relative to the `datadir` directory.

The `log_error` variable can be set to an absolute path to change the location of the log file:

```
[mariadb]
...
log_error=/var/log/mysql/mariadb.err
```

In case you want all log files (error log, general query log, slow query log, binary logs, etc.) to have the same prefix on their names you can configure the `log-basename` variable. For the error log, its name will be built by adding the .err extension to the established prefix.

## Send the error log output to Stderr on Unix
Commonly, on Unix environments, the `log_error` variable is not set so the logs are sent to `stderr` by default (the terminal that started mysqld). In case the `log_error` variable is set, it can be unset by specifying `--skip-log-error`.

## Verbosity of the error log
To configure the verbosity for the error log you can use the `log_warnings` system variable.

```
[mariadb]
...
log_warnings=3
```

- Level 0: with `log_warnings` set as 0 many optional warning will not be logged, but some core warnings will do.
- Level 1: by setting the `log_warnings` variable to 1 many types of warnings are logged, such as:
    - Replication-related messages.
    - DNS lookup failures messages.
    - Event scheduler messages.
    - Unsafe statements for statement-based replication messages.
- Level 2: more kinds of warnings are logged, such as:
    - Access denied errors.
    - Aborted connections due to timeouts.
    - Table handler errors.
- Level 3: more specific warnings are logged:
    - Old-style language options messages.
    - Progress of InnoDB online DDL related messages.
- Level 4: other kind of warnings are logged:
    - Killed connections messages.
    - All closed connections messages.
    - Released connections messages.
- Level 9: very verbose warnings are logged:
    - Initializing plugins messages.

## Conclusions

The configurations covered in this article are the ones that allow personalizing the error log output for being able to cover specific needs for making reading the logs more easy and understandable. There are many other system variables available for modification that are detailed on the MariaDB documentation ([click here](https://mariadb.com/kb/en/server-system-variables/)).
