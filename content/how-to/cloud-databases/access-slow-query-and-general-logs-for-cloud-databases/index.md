---
permalink: access-slow-query-and-general-logs-for-cloud-databases
audit_date: '2020-09-21'
title: Access slow query and general logs for Cloud Databases
type: article
created_date: '2014-07-17'
created_by: Rose Contreras
last_modified_date: '2020-09-21'
last_modified_by: Rose Morales
product: Cloud Databases
product_url: cloud-databases
---

Database logs can be useful tools when analyzing database performance or
troubleshooting issues. You can log slow queries or general database
activity for a MySQL&reg; Cloud Database instance by attaching a configuration group
to the instance and setting the appropriate parameters.

### Prerequisites

To follow the steps in this article, you should have an existing MySQL configuration
group or create a new one. A MySQL configuration group holds the values for
MySQL options used at startup. To learn more about MySQL configuration groups,
see [Manage configuration groups for cloud databases with the Trove command
line
tool](/support/how-to/managing-configuration-groups-for-cloud-databases-with-the-trove-command-line-tool).

The examples use trove to make changes to configuration groups. You can find instructions for
installing and configuring trove in [Managing configuration groups
for cloud databases with the Trove command-line
tool](/support/how-to/managing-configuration-groups-for-cloud-databases-with-the-trove-command-line-tool).

To apply configuration groups, you need to enable root access to the
database instance. You can do this by using the [Cloud Databases
API](https://docs.rackspace.com/docs/cloud-databases/v1/developer-guide/) or
with a `trove` command:

        trove root-enable instanceID

### Enable the slow query log

You can use the slow query log to find queries that take a long time to execute
and are, therefore, candidates for optimization. You can access the MySQL slow
query log by writing it to a table and setting persistent values to appropriate
parameters in your configuration group.

For more information about the MySQL slow query log, see the [MySQL
documentation on the slow query
log](https://dev.mysql.com/doc/refman/5.6/en/slow-query-log.html).

To enable the logging of slow queries:

1. Grant root access to the `mysql.slow_log` table.

2. Set the configuration parameters that enable logging slow queries to the
    `mysql.slow_log` table:

| Parameter name  | Suggested value | Description |
| --- | --- | --- |
| `log_output`    |   `'TABLE'`   |   Tells MySQL to write logs to a table |
| `slow_query_log`    |   1   |   Enables the slow query log |

For example, to create a new configuration group with trove that enables slow query logging, run:

    trove configuration-create EnableSlowQueryLog '{"log_output":"'TABLE'"}' --datastore MySQL

3. Optionally, set the configuration parameters that define the conditions under which queries are written to the slow query log: 

| Parameter name  | Suggested value | Description |
| --- | --- | --- |
| `long_query_time` | 0 or more | The duration of a query to be logged as slow, in seconds. The default is 10 seconds. |
| `log_queries_not_using_indexes` | 0 or 1 | Queries that don't use an index, or that perform a full index scan where the index doesn't limit the number of rows, are logged to the slow query log (regardless of the time taken). You need to enable the slow query log for this to have an effect. |

For example, run the following command to add parameters to the configuration group created in the previous
step that set the slow query duration to 15 seconds and cause logs to be deleted after one day:

        trove configuration-patch configID '{"long_query_time":15}'

4. If necessary, attach the configuration group with these parameters to the
    instance for which you want to enable slow query logging. To attach the
    configuration by using `trove`, run:

        trove configuration-attach instanceID configID

5. After the configuration is applied to your server, you can retrieve the slow
    query log from the database with a query. For example:

        mysql -e "select * from mysql.slow_log order by start_time desc limit 1\G"

### Enable the general query log

You can use the general query log to track all activity, including any
connections to the database and all queries sent to the database. It can be
useful when you want to check the queries sent by a client for
troubleshooting purposes.

For more information about the MySQL general query log, see the [MySQL
documentation on the general query
log](https://dev.mysql.com/doc/refman/5.6/en/query-log.html).

#### To enable the general query log

1. Grant root access to the `mysql.general_log` table.

2. Set the configuration parameters that enable logging server activity to the
    `mysql.general_log` table:

| Parameter name  | Suggested value | Description |
| --- | --- | --- |
| `log_output` | `'TABLE'` | Tells MySQL to write logs to a table |

For example, to create a new configuration group with `trove` that enables general query logging, run:

    trove configuration-create EnableGeneralLog '{"log_output":"'TABLE'","slow_query_log":1}' --datastore MySQL

3. If necessary, attach the configuration group with these parameters to the
    instance for which you want to enable general query logging. To attach the
    configuration by using `trove`, run:

        trove configuration-attach instanceID configID

4. After the configuration group is attached, you can now enable general logging
   by running this command:

        mysql -e "set global general_log = 1"

    At the moment, the above variable can only be set dynamically on a running
    instance due to the overwhelming amount of data this change might generate.

    You can also disable general log with the following command:

        mysql -e "set global general_log = 0"

	**Note:** General logging is disabled when you restart a MySQL instance.

5. After the configuration is applied to the server, you can retrieve the
    general query log from the database with a query such as the following example:

        mysql -e "select * from mysql.general_log order by event_time desc limit 1\G"
