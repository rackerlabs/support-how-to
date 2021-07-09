---
permalink: mariadb-error-log-configuration
audit_date:
title: 'MariaDB Error Log configuration'
type: article
created_date: '2021-06-23'
created_by: Alfonso Murillo
last_modified_date: '2021-07-12'
last_modified_by: Ana Corpus
product: Cloud Databases
product_url: cloud-databases
---

Some examples of MariaDB logs are:

- **Error log:** This log is always enabled, logging all critical errors. It can log warnings.

- **General query log:** The `--general-log` variable enables this log. You can debug and audit queries by enabling it.

- **Slow query log:** Enable this log by starting `mysqld` with option `--slow-query-log`. You can identify queries that cause performance issues by enabling this log. 

- **Binary log:** Enable this log by starting `mysqld` with option `--log-bin`. This log is for replication masters only.

You can customize the log configuration of MariaDB&reg; by using system variables. 
## The error log

You can find error logs in the `datadir` directory. By default the system names the error logs as  `${hostname}.err`. The `log_error`system variable changes the default name, and logs are written in the `datadir`directory. 

You can change the absolute path of the error logs by adding the path to the name:

  ```
  [mariadb]
  ...
  log_error=/var/log/mysql/mariadb.err
  ```

You can configure the prefix of the log files with the `log-basename` variable. The prefix applies to all types of log files (error logs, general query logs, slow query logs, binary logs, etc.). Error logs have the `.err` extension.

## Send error logs to stderr

On Unix&reg; and Unix-like environments, the `log_error` variable is not set, and `stderr` (the computer terminal that started `mysqld`) displays errors by default. If `stderr` doesn't display errors, unset the `log_error`variable with the `--skip-log-error`option.

## Verbosity of the error log

Use the `log_warnings` system variable to configure the verbosity of error logs:

```
[mariadb]
...
log_warnings=3
```

The log warnings verbosity levels are: 

- **Level 0** logs some core warnings but ignores many optional warnings. 

- **Level 1** logs the following warnings, among others:
    - Replication-related messages.
    - DNS lookup failures messages.
    - Event scheduler messages.
    - Unsafe statements for statement-based replication messages.

- **Level 2** logs the following warnings, among others:
    - Access denied errors.
    - Aborted connections due to timeouts.
    - Table handler errors.

- **Level 3** logs the following warnings, among others:
    - Old-style language options messages.
    - Progress of InnoDB online DDL related messages.

- **Level 4** logs the following warnings, among others:
    - Killed connections messages.
    - All closed connections messages.
    - Released connections messages.
- **Level 9** logs the following warning, among others:
    - Initializing plugins messages.

Refer to the MariaDB documentation for more information about [system variables configuration](https://mariadb.com/kb/en/server-system-variables/) and [error logs](https://mariadb.com/kb/en/error-log/).

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
