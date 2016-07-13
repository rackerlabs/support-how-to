---
permalink: cloud-backup-agent-logging-basics/
audit_date:
title: Cloud Backup agent logging basics
type: article
created_date: '2014-05-29'
created_by: Ross Diaz
last_modified_date: '2016-07-13'
last_modified_by: Catherine Richardson
product: Cloud Backup
product_url: cloud-backup
---

The Rackspace Cloud Backup infrastructure communicates with your servers
through a software-based agent that resides on the system that you have
designated to back up. This agent stores information about which files
and directories you want to back up, and at what frequency. The agent is
also critical for gathering information about how Cloud Backup is
interacting with your server or storage volume, and it can produce
detailed logging to help with troubleshooting a problem with Rackspace Support.

### Log configuration file

The log configuration file is named **log4cxx.xml**, and it uses **log4j** syntax.
The default configuration differs between Windows and Linux only in the target
log file path. Otherwise, the file is similar the following example of a Windows
configuration file:


    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE log4j:configuration SYSTEM "log4j.dtd"[]>
    <log4j:configuration xmlns:log4j="http://jakarta.apache.org/log4j/">
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

### Agent logging operations

Agent logs can store valuable troubleshooting information by outputting
data to a series of log files. When the problem condition occurs, the
logged information is analyzed to diagnose the problem. To ensure the
logs are recording the correct information it is necessary to modify the
configuration file for your agent and set the appropriate *level value*.

The Cloud Backup agent stores valuable troubleshooting information in a
series of up to a dozen or so rolling log files. If a problem condition occurs,
the logged information can be analyzed to diagnose the problem. To make sure that
the logs are recording the correct information, you might need to modify the
configuration file for your agent and set the appropriate *level value*. For information
about how to locate your **log4cxx.xml** configuration file on Windows or Linux,
see the section, “Locations of Cloud Backup agent files”.

The available logging modes are as follows:

-   OFF - Turn logging off.
-   FATAL - Log very severe errors that will cause the application to
    abort.
-   ERROR - Log all error events, even those that might still allow the
    application to continue running.
-   WARN - Log warnings of potentially harmful situations.
-   INFO - Log informational messages that highlight the progress of the application.
    This is the default logging mode for the Cloud Backup agent.
-   DEBUG - Log fine-grained informational events to assist in
    troubleshooting.
-   TRACE - Log even more fine-grained informational events than DEBUG
    mode.
-   ALL - Turn on all logging.

**Note:** TRACE and ALL are equivalent values for logging.

### Trace-level debugging

When you set the logging level to TRACE, the agent captures more
granular data than when in DEBUG mode. TRACE logging increases the
risk of losing older log information because of the large volume of
data written to the logs in this mode. The volume of data depends on
things like what operations are running, how long they run, and so on.
Under certain conditions, TRACE logging might write hundreds or even
thousands of lines per second to the logs. You might need to
increase the size and number of rollover logs.

### Rolling logs

By default, the Cloud Backup agent logs are rolling logs, which means that they
have a maximum size and that a maximum number of logs are stored on a server.
These limits set a maximum boundary to help prevent logs from filling up the cache
volume (often the system volume) of the server. When logging capacity is reached,
the primary log file is rolled over, and a new primary log file is started. As more
log files are rolled over to the point that the maximum number of logs is reached,
the oldest rolled log is deleted.

Sometimes troubleshooting an agent requires running in TRACE log mode
for a long time. When this happens, some information that Rackspace
Support needs might be overwritten before it can be captured. In such cases,
you must increase the values of the `MaxFileSize` and `MaxBackupIndex`
parameters for the agent logs. In the following example **log4cxx.xml**
configuration file, these values are set higher than the default values:

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE log4j:configuration SYSTEM "log4j.dtd"[]>
    <log4j:configuration xmlns:log4j="http://jakarta.apache.org/log4j/">
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

The maximum values for these parameters are as follows:

-  `MaxBackupIndex`: `12`

-  `MaxFileSize`: `unlimited` (limited only by the size of the free space on the volume where the cache files reside)

**Note:** `MaxFileSize` is the maximum size of each rolling log file.
A `MaxFileSize` of `1000MB` and a `MaxBackupIndex` of `12` could result in
approximately 13 GB of logs written to the cache volume (one current log
and 12 rolled logs, each approximately 1000 MB in size).

**Warning:** The cache volume is typically the system drive. Setting `MaxFileSize`
to a value that causes the system volume to fill up can have serious consequences
on the server. The consequences can include (but are not limited to) causing DB
corruption of the Cloud Backup agent, which causes restores to fail, as well as
cleanups and backups to fail, and cripples the server in other ways. If you need
a large amount of space for TRACE logging, make sure the space is available on
your system drive, with more room to spare for other apps and files. Alternatively,
consider setting your log path in **log4cxx.xml** (`param name="File"`) to a volume
with sufficient space to hold the maximum amount of data that is generated by the logs.
For information about how to locate your **log4cxx.xml** configuration file on Windows
or Linux, see the section, “Locations of Cloud Backup agent files”.

After the problem is diagnosed, we recommend that you return these
parameters to their original values to conserve disk space.

### Where to store saved logs

Logging in INFO mode (or lower) generates a relatively small amount of log volume,
but verbose logging (such as DEBUG and TRACE) can quickly accumulate a large amount
of data in a short period of time. The preferred method of saving log files is
through the **Request Agent Log** button on the server Cloud Backup
**System Details** page. However, there might be times when this is impossible or
impractical. In those cases, you might have to save the log files manually. See the
section, “Locations of Cloud Backup agent files,” to locate your **log4cxx.xml**
configuration file on Windows or Linux. In that file, `param name="File"`
gives the current path to your log files.

When you save log files manually, in order to keep the file sizes manageable, you should
typically compress the saved logs by using a zip or archive utility. Even when they are
compressed, log files are still sometimes too large to attach to a support ticket. In order
to make your logs easily available to Rackspace Support, we recommend that you upload them
to your Cloud Files account in a public container. From there, you can copy the download
links for the log files and paste the links into your support ticket.

### Locations of Cloud Backup agent files

The following section lists the locations of the Cloud Backup agent on
both Linux and Windows servers.

#### Agent file location (Linux)

Assuming a default installation, following are the agent file locations
on Linux systems:

-   Configuration files: **/etc/driveclient**
-   Logs: **/var/log** (This value might be different on your server, depending on your
    settings in **log4cxx.xml** under Configuration files.)
-   Startup script: **/etc/init.d**
-   Application: **/usr/local/bin**
-   PID file for running the agent: **/var/run/driveclient.pid**
-   Database: search for a **\*.db** file under **/var/cache/driveclient**

**Note:** If `driveclient` is installed as an individual user, most of
these files are under **~/.driveclient**.

#### Agent file locations (Windows)

Finding the `driveclient` files under various flavors of Windows is a
little more complicated. In general, you can find these files under the
folder to which **CSIDL_COMMON_APPDATA** points.

-   For more information about this location on Windows versions
    starting with Vista, see
    <a href="http://msdn.microsoft.com/en-us/library/windows/desktop/dd378457(v=vs.85).aspx">KNOWNFOLDERID</a>.
-   For more information about this location on earlier versions of
    Windows, see
    <a href="http://msdn.microsoft.com/en-us/library/windows/desktop/bb762494(v=vs.85).aspx">CSIDL</a>.

In a typical installation, the files will be located in these folders:

-   Configuration files: **%ProgramData%\\Driveclient**
-   Logs: **%ProgramData%\\Driveclient\\logs** (This value might be different on your server,
    depending on your settings in **log4cxx.xml** under Configuration files.)
-   Application: **%ProgramFiles%\\Driveclient**
-   Database: search for a \*.db file under **%ProgramData%\\Driveclient**

### Disable logging

To disable logging, remove the tag named `appender-ref` from
**log4cxx.xml**.
