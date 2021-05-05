---
permalink: cloud-backup-agent-logging-basics
audit_date: '2020-09-15'
title: Cloud Backup agent logging basics
type: article
created_date: '2014-05-29'
created_by: Ross Diaz
last_modified_date: '2020-09-15'
last_modified_by: Brett Johnson
product: Cloud Backup
product_url: cloud-backup
---

The Rackspace Cloud Backup infrastructure communicates with your servers
through a software-based agent that resides on the system that you have
designated to back up. This agent stores information about which files
and directories you want to back up, and at what frequency.

The agent also gathers information about how Cloud Backup interacts
with your server or storage volume, and it can produce detailed logging
information to help with troubleshooting. This article provides information
about the logging functions of the Cloud Backup agent.

### Log configuration file

The log configuration file is named **log4cxx.xml**, and it uses **log4j**
syntax. The default configuration differs between Microsoft&reg; Windows&reg;
and Linux&reg; only in the target log file path. Otherwise, the file is
similar to the following example of a Windows configuration file:

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE log4j:configuration SYSTEM "log4j.dtd"[]>
    <log4j:configuration xmlns:log4j="https://jakarta.apache.org/log4j/">
      <appender name="FILE" class="org.apache.log4j.RollingFileAppender">
        <param name="File" value="C:\ProgramData\Driveclient\log\driveclient.log" />
        <param name="MaxFileSize" value="500MB" />
        <param name="MaxBackupIndex" value="10" />
        <layout class="org.apache.log4j.PatternLayout">
          <param name="ConversionPattern" value="[%d{yyyy-MM-dd HH:mm:ss}{GMT+0}|T%t|%-5p|%c|%C::%M(%L)] %m%n" />
        </layout>
      </appender>
      <appender name="ASYNC" class="org.apache.log4j.AsyncAppender">
        <appender-ref ref="FILE" />
      </appender>
      <root>
        <level value=“INFO" />
        <appender-ref ref="ASYNC" />
      </root>
    </log4j:configuration>

For information about locating the Linux **log4cxx.xml** configuration file,
see **Agent file locations on Linux** in
[Update or install the Cloud Backup agent on Linux&reg;](/how-to/update-or-install-the-cloud-backup-agent-on-linux).
For the same information for Windows, see **Agent file locations on Windows** in
[Install the Cloud Backup agent on Windows&reg;](/how-to/rackspace-cloud-backup-install-the-agent-on-windows).

### Agent logging operations

The Cloud Backup agent stores troubleshooting information in a *primary log
file* and a series of up to 12 *rollover log files*. When logging capacity is
reached, the primary log file rolls over to a rollover log file, and a new
primary log file starts. As more logs roll over to the point
that the maximum number of rollover logs is reached, the system deletes the
oldest rollover log file.

The rollover log files have a maximum size, and a maximum number of rollover
logs are stored on a server. These limits help prevent logs from filling up
the server's cache volume (often the system volume).

### Logging modes

To ensure that the logs record the correct information, you might need
to modify the configuration file for your agent and set the appropriate *level
value*. You can specify one of the following logging modes for the level value:

-   **OFF**: Turns logging off.
-   **FATAL**: Logs very severe errors that cause the application to stop
    running.
-   **ERROR**: Logs all error events, even those that might still allow the
    application to continue running.
-   **WARN**: Logs warnings of potentially harmful situations.
-   **INFO**: Logs informational messages that highlight the progress of the
    application. This level is the default logging mode for the Cloud Backup
    agent.
-   **DEBUG**: Logs fine-grained informative events to assist in
    troubleshooting.
-   **TRACE**: Turns on all logging. This mode generates a very large number of
    log lines, especially for larger backups. If `MaxFileSize` (the maximum
    size for each rollover log file) is set too low, trace information early
    in a backup or restore operation might roll off before you're able to
    look at it. Some experimentation might be necessary to know how large to
    set this size.
-   **ALL**: Same as TRACE.

### Trace-level debugging

The TRACE logging mode increases the risk of losing older log information
because of the large volume of data written to the logs in this mode. The
volume of data depends on what operations are running, how long they run, and
so on. Under certain conditions, TRACE logging might write hundreds or even
thousands of lines per second to the logs.

Sometimes troubleshooting the agent requires running the TRACE log mode for a
long time. When this happens, the system might overwrite some information that
Rackspace Support needs before it can be captured. In such cases, you must
increase the values of the `MaxFileSize` and `MaxBackupIndex` parameters for
the agent logs. The following list provides descriptions of these parameters:

-  `MaxFileSize`: This parameter specifies the maximum size of each rollover
   log file. The maximum value is `unlimited` (limited only by the size of the
   free space on the volume where the cache files reside).

-  `MaxBackupIndex`: This parameter specifies the number of rollover log
   files. The maximum value is `12`.

In the following example **log4cxx.xml** configuration file, these values are
set higher than the default values:

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE log4j:configuration SYSTEM "log4j.dtd"[]>
    <log4j:configuration xmlns:log4j="https://jakarta.apache.org/log4j/">
      <appender name="FILE" class="org.apache.log4j.RollingFileAppender">
        <param name="File" value="C:\ProgramData\Driveclient\log\driveclient.log" />
        <param name="MaxFileSize" value=“2000MB" />
        <param name="MaxBackupIndex" value="12" />
        <layout class="org.apache.log4j.PatternLayout">
          <param name="ConversionPattern" value="[%d{yyyy-MM-dd HH:mm:ss}{GMT+0}|T%t|%-5p|%c|%C::%M(%L)] %m%n" />
        </layout>
      </appender>
      <appender name="ASYNC" class="org.apache.log4j.AsyncAppender">
        <appender-ref ref="FILE" />
      </appender>
      <root>
        <level value=“TRACE" />
        <appender-ref ref="ASYNC" />
      </root>
    </log4j:configuration>

A `MaxFileSize` of `1000MB` and a `MaxBackupIndex` of `12` could result in
approximately 13 GB of logs written to the cache volume (1 primary log
and 12 rollover logs, each approximately 1000 MB in size).

**Warning**: The cache volume is typically the system drive. Setting
`MaxFileSize` to a value that causes the system volume to fill up can have
serious consequences on the server. The consequences can include (but are not
limited to) causing database corruption of the Cloud Backup agent, which
causes restores, cleanups, and backups to fail, and cripples the server in
other ways. If you need a large amount of space for TRACE logging, ensure
that the space is available on your system drive, with more room available
for other applications and files. Alternatively, consider setting your log
path in **log4cxx.xml** (`param name="File"`) to a volume with sufficient
space to hold the maximum amount of data generated by the logs.

After you diagnose the problem, we recommend returning these
parameters to their original values to conserve disk space.

### Where to store saved logs

Logging in INFO mode or lower generates a relatively log
volume, but verbose logging (such as DEBUG and TRACE) can quickly accumulate a
large amount of data. The preferred method of saving log files is
through the **Request Agent Log** button on the server Cloud Backup
**System Details** page. However, there might be times when this is impossible
or impractical. In those cases, you might have to save the log files manually.
The path to your log files is in the `File` parameter of the **log4cxx.xml**
configuration file.

When you save log files manually, compress the saved logs by using a zip or
archive utility. Even when they are compressed, log files are sometimes too
large to attach to a support ticket. To make your logs easily available to
Rackspace Support, we recommend that you upload them to your Cloud Files
account in a public container. From there, you can copy the download
links for the log files and paste the links into your support ticket.

### Locations of Cloud Backup agent files

The following section lists the locations of the Cloud Backup agent on
both Linux and Windows servers.

### Disable logging

To disable logging, remove the `appender-ref` tag from the **log4cxx.xml**
file. Be aware that the API eventually overrides any local settings you
make. The most reliable place to turn down logging is on the Details page for
the agent in the Cloud Control Panel.

Use the following steps to turn off logging:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3. Select **Backups > Systems**.
4. On the **Systems** page, click the backup agent for which you want to turn
   off logging.

    The **Details** page for the agent appears.

5. In the **Logging Mode** field, select **Warn** from the drop-down list.
   There is no option for **Off**.

**Warning**: While you can also disable logging by removing the `appender-ref`
tag from the **log4cxx.xml** file, be aware that the API eventually overrides
any local settings that you make.
