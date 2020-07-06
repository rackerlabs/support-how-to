---
layout: post
title: "Enable Oracle audits at the operating system level in RAC databases"
date: 2020-04-29
comments: true
author: Anubhav Sharma
published: true
authorIsRacker: true
authorAvatar: 'https://s.gravatar.com/avatar/3ea62cab3c36ad848af5e53cf7610516'
bio: "I’m Anubhav, an Oracle Database Administrator working with Rackspace.
Currently, I work on Oracle, MongoDB, and other NoSQL database technologies."
categories:
    - Oracle
    - database
metaTitle: "Enable Oracle audits at the operating system level"
metaDescription: "Protect audit files from tampering."
ogTitle: "Enable Oracle audits at the operating system level"
ogDescription: "Protect audit files from tampering."
---

Occasionally, you might need to audit all the actions of the Oracle&reg; Database
superuser, `sys`. To meet this requirement, Oracle introduced a feature in
version 9i that includes the `AUDIT_SYS_OPERATIONS` parameter.

<!--more-->

### Introduction

When you set this parameter to `true`, the process generates files in the directory
determined by the `AUDIT_FILE_DEST` parameter. These files contain a protocol of
all the actions of the `sys` user. By default, the files contain the connections
by `sys` but do not include the actions that occur after the connection.

If you set `AUDIT_SYS_OPERATIONS=true`, the audit file containing all the actions
of `sys` belongs to the operating system user that installed the
database&mdash;usually, the Oracle user. A user with privileges to connect as
`sys` probably also has the privilege to connect as `Oracle` on the operating
system (OS) level. This access makes using `AUDIT_SYS_OPERATIONS` somewhat
useless from a security standpoint. So, Oracle permits `root` to own the audit file,
which should make it harder for the database administrator to manipulate or delete
the file.

### Configure the audit file at the OS level

Use the following steps to configure the audit file at the OS level in an
Oracle Real Application Clusters (RAC) environment:

#### Step 1: Set the database parameters

Use the following commands to set the database parameters:

    SQL> alter system set audit_sys_operations=true scope=spfile;
    System altered.

    SQL> alter system set audit_syslog_level='LOCAL1.WARNING' scope=spfile;
    System altered.

    SQL> alter system set audit_trail = OS
    SCOPE=SPFILE;
    System altered.

#### Step 2: Configure the RAC nodes

Use the following steps, as `root`, to configure the RAC1 and RAC2 nodes:

a) Run the following command to back up **/etc/rsyslog.conf**:

    cp -p /etc/rsyslog.conf /etc/rsyslog.conf.<ITK#>

b) Add the following lines to **/etc/rsyslog.conf**:

    # Oracle audit <ITK#>
    local1.warning /var/log/oracle/db_name_audit.log

#### Step 3: Restart the syslog logger

Run the following commands to restart the `syslog` logger process:

    service rsyslog status
    service rsyslog restart
    service rsyslog status

#### Step 4: Restart the RAC database

Use the following steps to restart the RAC database on RAC1 and RAC2 in a rolling fashion:

a) Run the following commands on RAC2:

    srvctl stop instance -d DB_NAME -i DB_SID2
    srvctl start instance -d DB_NAME -i DB_SID2
    srvctl status database -d DB_NAME

b) Wait for ten minutes.

c) Run the following commands on RAC1:

    srvctl stop instance -d DB_NAME -i DB_SID1
    srvctl start instance -d DB_NAME -i DB_SID1
    srvctl status database -d DB_NAME

#### Step 5: Set up the logrotate file

To set up the **logrotate** file on RAC1 and RAC2, edit **/etc/logrotate.d/oracle_audit**,
as `root`, to include the following lines:

    /var/log/oracle/db_name_audit.log
    {
       rotate 12
       compress
       weekly
       dateext
       notifempty
       missingok
       copytruncate
    }

##### Logrotate parameters

You can include the following options (collected from
[Manage your logs using Logrotate](https://techandfi.com/manage-your-logs-using-logrotate/)
and the [man file](https://man7.org/linux/man-pages/man8/logrotate.8.html)) in the
**logrotate** configuration file:


**Rotate**: Keep the last N archives of the log. You can set this high, as you
long as the disk usage is reasonable. You can also set it to the last 10 days or
2 weeks if the log gets bigger.

**Compress**: The archived logs are compressed using gzip (recommended). This
compression keeps the file size much lower than the raw logs.

**Weekly**: The log files are rotated once every day, or if the date is advanced
by at least 7 days, since the last rotation (while ignoring the exact time).
The weekday interpretation is as follows:  0 means Sunday, 1 means Monday, 6 means
Saturday. The special value 7 means each 7 days, irrespective of the weekday.
The default is 0 if the weekday argument is omitted.

**Yearly**: Log files are rotated if the current year is not the same as the last
rotation.

**dateext**: The archived log files are appended with the date when it is
processed. The default format is YYYYMMDD. This appendage makes the search
for the archived logs easier.

**notifempty**: If the log file is empty, do not archive it. This is important
because you only keep a certain number of archives, and this makes sure that you don’t
have archived empty files that push out older archived entries.

**missingok**: If any log file cannot be found, just search for the next log file
in the configuration. This ensures that the logrotate program does not exit
unexpectedly in case one log file is missing.

**copytruncate**: When a log is archived, logrotate copies the contents of the
log file into another file (with a timestamp). This option then tells logrotate
to remove or truncate the copied entries from the original log file. This
option is needed when programs continuously write into the log file, and this
option ensures that the same log file is being used by the program to prevent it
from exiting unexpectedly (due to it being unable to access the log file).


### Pros and cons

The pros and cons of writing the audit records to a file on the OS include the
following considerations:

**Pros:**

Logging the audit records to a `root`-owned filesystem restricts even the Oracle
user who installed the database from reading the content and modifying it.

**Cons:**

Storing audit files on the OS consumes space and can cause performance issues.
For example, `sys` could now perform large actions, such as running `catalog.sql`
or `catproc.sql` operations.

### Conclusion

The steps in this post direct all the audit records to an OS file in a RAC
database. Oracle recommends that you use the OS settings, especially if you use
an ultra-secure database configuration.

Use the Feedback tab to make any comments or ask questions. You can also
[chat now](https://www.rackspace.com/#chat) to start the conversation.

<a class="cta blue" id="cta" href="https://www.rackspace.com/dba-services">Learn more about Databases.</a>
