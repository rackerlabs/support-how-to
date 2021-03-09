---
permalink: mysql-event-scheduler/
audit_date: '2021-03-09'
title: MySQL Event Scheduler
type: article
created_date: '2021-03-02'
created_by: Joshua Salas
last_modified_date: '2021-03-09'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

MySQL Events are tasks that run according to a schedule. At the moment that you
create an event, you create a named database object which contains one or more
SQL statements ready to be executed, beginning and end, at one or more
regular intervals of date and time. Similar to the **Task Scheduler** in Windows
or **crontab** in UNIX.

### Features and properties

- An event is uniquely identified by its name and the schema to which it is assigned.
- Perform an specific action according to a schedule one time or recurrent.
- Import and save files from GitHub&reg;, Dropbox&reg;, Google Drive&reg; and
  One Drive&reg;.
- Drag and drop markdown and HTML files into Dillinger.
- Export documents as Markdown, HTML and PDF.

First of all, we have to validate the Event Scheduler status. The events are
executed by a special event scheduler thread. When running, the event scheduler
thread and its current state can be seen by users if they had the process
privilege in the output of `SHOW PROCESSLIST`.

**Example**

    mysql> SHOW PROCESSLIST\G
    *************************** 1. row ***************************
        Id: 1
      User: root
      Host: localhost
        db: NULL
    Command: Query
      Time: 0
      State: NULL
      Info: show processlist
    *************************** 2. row ***************************
        Id: 2
      User: event_scheduler
      Host: localhost
        db: NULL
    Command: Daemon
      Time: 3
      State: Waiting for next activation
      Info: NULL
    2 rows in set (0.00 sec)

If the event scheduler is not enabled, we can set the event_scheduler system
variable to enable and start it

    SET GLOBAL event_scheduler = ON;
    SET @@GLOBAL.event_scheduler = ON;
    SET GLOBAL event_scheduler = 1;
    SET @@GLOBAL.event_scheduler = 1;

Similary, we can set the event_scheduler system variable to disable or turn it
off

    SET GLOBAL event_scheduler = OFF;
    SET @@GLOBAL.event_scheduler = OFF;
    SET GLOBAL event_scheduler = 0;
    SET @@GLOBAL.event_scheduler = 0;

### **Event Syntax**

The CREATE EVENT statement creates a new event. This is the basic syntax of the
CREATE EVENT statement:

    SINTAX:
    ===========
        CREATE EVENT [IF NOT EXIST] event_name
        ON SCHEDULE schedule
        DO
        event_body

If the event is a one-time event, use:

    AT timestamp [+ INTERVAL]

If the event is a recurring event use:

    EVERY interval STARTS timestamp [+INTERVAL] ENDS timestamp [+INTERVAL]

Example:

    CREATE EVENT [IF NOT EXIST] test_event
    ON SCHEDULE EVERY 10 SECONDS
    DO
        INSERT INTO database VALUES (now());

Results:

    1   2021-02-23 15:44:05
    2   2021-02-23 15:44:15
    3   2021-02-23 15:44:25
    4   2021-02-23 15:44:35
    5   2021-02-23 15:44:45
    6   2021-02-23 15:44:55
    7   2021-02-23 15:45:05
    8   2021-02-23 15:45:15
    9   2021-02-23 15:45:25
    10   2021-02-23 15:45:35

### Grant priviledges

In order to allow a user to create, modify or delete events, you will need to
provide privileges:

    GRANT EVENT ON (schema) TO (user)

For example, in the following command we grant permissions for the schema
**myschema** to an user called **lin@tolvar**.

    GRANT EVENT ON myuschema TO lin@tolvar

If you use an asterisc (*), you will grant permissions to all schemas.
