---
permalink: cloud-backup-troubleshooting/
audit_date: '2020-10-14'
title: Cloud Backup troubleshooting
type: article
created_date: '2015-06-29'
created_by: Rackspace Support
last_modified_date: '2020-10-14'
last_modified_by: Rose Morales
product: Cloud Backup
product_url: cloud-backup
---

**Previous section**: [Rackspace Cloud Backup - Preferences](/support/how-to/rackspace-cloud-backup-preferences)

If you encounter issues when working with Cloud Backup, use the information in
this article to help you troubleshoot.

- Backup statuses
- Connection errors
- Backup agent logs
- Recovery of your encrypted vault password
- Unable to back up or restore files (Windows&reg; only)
- System resource utilization
- Other errors and problems

### Backup statuses

This section describes each of the backup statuses, why you might receive each
status, and what action you might take.

#### Backup status: Skipped

This status indicates that the scheduler skipped this backup job because another backup job was
already queued. If the frequency of the backup job is set too high (for example, hourly),
and a single backup takes too long (longer than an hour), the system skips subsequent jobs.
Only one can run at a time. The backup scheduler skips backups it cannot execute.

Consider reducing the frequency of the job or reducing the amount of data. If
this is the initial job, the subsequent jobs might finish faster.

On older **DriveClient** installations, the status might occur if the agent
was hard-restarted (or the operating system rebooted) during a backup,
cleanup, or restore.

- For Linux&reg;, a possible fix is to upgrade to the latest version of
   **DriveClient** and restart the running agent.

- For Windows, a possible fix is to restart the **DriveClient** Windows service
   through Window's Service Manager, or through the `sc` command line Windows
   utility.

#### Backup status: Missed

This status indicates that the backup job didn't run. The DriveClient
service was likely not running at the time of the scheduled backup, and the
agent was therefore offline.

Verify that the agent is running on the server. If the agent is not already
running, start it. Next, check the logs to determine why the agent was not
running.

An agent should never go offline by itself. If the agent did not respond, then
the agent could not reach one of the API endpoints, the agent was not running,
or someone manually stopped or terminated it.

#### Backup status: Completed with Errors

This status indicates that the backup completed, but the job could not backup
one or more files. The most common issues that cause this status are as follows:

- The file was deleted before the backup job could make the copy. This issue is common with
  temporary files, such as PHP session files, and is almost always harmless. If
  it is possible and practical for you to exclude these files from the backup
  definition, this kind of error goes away.

- The file was exclusively locked (Windows) so that no other process could read
  it. This issue is common with database binary files. You should never back up
  the database binaries themselves. Instead, but dump the database's contents
  to a flat file (such as an SQL&reg; file) and back up that flat file.
  Doing so allows for a quicker backup and an easier restore.
  Break individual databases into different flat files to more easily manipulate
  them on restore. Then, you do not have to fully restore the
  flat file to restore a single database.

- The path of the file in the operating system contained Non-UTF-8 characters. The
  current version of Cloud Backup supports only UTF-8 characters. When you use
  non-UTF-8 characters, a `Path Not Found` message displays.

For more information, see [Back up databases with Cloud Backup](/support/how-to/rackspace-cloud-backup-backing-up-databases/).

#### Backup status: Failed

A status of Failed indicates that a serious problem occurred, and the
backup job did not run. Check the logs on the server an indication of the issue.

#### Backup status: Error

Many issues might cause a backup status of **Error** to occur, such as the cloud account
permissions for the user who configured that agent are incorrect or the DriveClient
can't connect to the agent APIs.

Rackspace Support must review the **driveclient.log** file to determine the
cause. If the agent is not connected, attach the **driveclient.log** file to a
ticket so that Support can review it. For more information, see 
[Cloud Backup agent logging basics - Where to store saved logs](/support/how-to/cloud-backup-agent-logging-basics/).

Following are some of the issues and some possible fixes:

##### Missing Password for encrypted volume

If you use the API to change an account from `ServiceNet` to `PublicNet` or vice versa,
the process changes the volume URI. However, the **bootstrap.json** file doesn't reflect
that change.

To work around this issue, edit the **bootstrap.json** file and make the
following changes to the volume URI:

- If you changed the account from `ServiceNet` to `PublicNet`, remove the `snet-`
  prefix from the volume URI.
- If you changed the account from `PublicNet` to `ServiceNet`, add an `snet-`
  prefix to the volume URI.

##### Out of Disk Space

If the local system has less than 100 MB of free disk space, the backup and even
the server itself might be critically affected. Effects on the backup agent
include but are not limited to the following issues:

- Logging is throttled or stopped.
- The vault database might be unable to compress or decompress for backup,
  restore, or cleanup operations.
- Corruption of the vault database might occur.
- Automated log uploads made by using the Cloud Control Panel might not be
  possible.
- File restore operations might partially or completely fail.

If disk space is so low that any of the preceding issues occur, move as many
extraneous files as possible off of the local system drive. For possible ways
to do this with Cloud Backup files, see
[Conserving resources with Cloud Backup](/support/how-to/best-practices-for-cloud-backup/).

##### Container does not exist

The Cloud Files container used to store backup data has been deleted.
You can check this by getting the agent details via the Cloud Backup API. The
`VolumeURI` field in the displayed JSON indicates the Cloud Files container that
Cloud Backup is attempting to access. If that Cloud Files container does not
exist, you must recreate it. It also means that any previous backups were
deleted and cannot be used to restore.

##### CurlEasyPerformWrapper : Could not perform an HTTP request. Connection timed out while waiting for https://snet-storage101

This message indicates that a networking error prevented DriveClient from
connecting to the Cloud Files API to upload backups.

##### locale::facet::\_S\_create\_c\_locale name not valid

This message indicates that the locale is not properly set on the target system,
which happens mostly in older operating systems.

This message is also common when you use Secure Shell (SSH) to connect from a Mac OS desktop to
a Linux server and run the `sudo service DriveClient status command`. The Mac OS
client does not properly provide the locale information in the SSH session.

If you don't have a Linux computer available for use, you can access your server's web
console through the [Cloud Control Panel](https://login.rackspace.com/). When you're in
the web console for your server, perform the following actions:

1. Open the **/etc/ssh/sshd_config** file for editing.
2. Find the lines that start with `AcceptEnv` and insert a `#` character in
   front of each line.
3. Save the file and then restart the SSH service. Depending on the Linux
   distribution, run either `service ssh restart` or `service sshd restart`.
4. Try to connect again.

### Connection errors

When DriveClient starts, it attempts to connect to the RSE API endpoint
(**rse.drivesrvr.com** or **rse.drivesrvr.co.uk**) to let the API know that it
is available to take commands. If it can't reach that endpoint or the
associated **api.drivesrvr.com** or **api.drivesrvr.co.uk** endpoints, the
service stops.

The following symptoms might occur:

- On Windows, the following permissions error message might display:
  `Please check your permissions and try again`. Windows diplays this default error
  message when a service fails to start.

- On Linux, the agent just shuts itself down.

When the agent shuts itself down, you see a line similar to the following line,
indicating that the logging is stopping. This is the last log entry before the
agent shuts itself off.

    `INFO |root|rax::AgentPolicy::TearDown(38)] Tearing down logging...`

You also see this as a `Disconnected` agent through the **Backups** area of the
Cloud Control Panel.

If the agent cannot communicate with one or more of the following required API
endpoints, you can test the communication as indicated:

- Cloud Backup API: **api.drivesrvr.com** (for US accounts) or
  **api.drivesrvr.co.uk** (for UK accounts) You can test this communication with
  an HTTP GET request (or Open Standard Web Browser) to the URL
  <https://api.drivesrvr.com/v1.0/help/apihealth>.

- Cloud Backup RSE API: **rse.drivesrvr.com** (for US accounts) or
  **rse.drivesrvr.co.uk** (for UK accounts) You can test this communication with
  an HTTP GET request (or Open Standard Web Browser) to the URL
  <https://rse.drivesrvr.com/health>.

- Cloud Files API endpoints: These are regional endpoints, but they all have the
  same `/healthcheck` command that allows for network connection testing. You
  can test this communication with an HTTP GET request:
  <https://%3Cendpoint%3E/healthcheck> using regional public and ServiceNet
  endpoints, as shown in the following table. For example,
  <https://storage101.ord1.clouddrive.com/healthcheck>.

| Region | Public API                     | ServiceNet API                      |
|--------|--------------------------------|-------------------------------------|
| ORD    | storage101.ord1.clouddrive.com | snet-storage101.ord1.clouddrive.com |
| DFW    | storage101.dfw1.clouddrive.com | snet-storage101.dfw1.clouddrive.com |
| IAD    | storage101.iad3.clouddrive.com | snet-storage101.iad3.clouddrive.com |
| LON    | storage101.lon3.clouddrive.com | snet-storage101.lon3.clouddrive.com |
| SYD    | storage101.syd2.clouddrive.com | snet-storage101.syd2.clouddrive.com |
| HKG    | storage101.hkg1.clouddrive.com | snet-storage101.hkg1.clouddrive.com |  

### Backup agent logs

The agent logs are stored, by default, in the following directories:

- (Windows) **C:\\ProgramData\\DriveClient\\logs\\driveclient.log**

    You can change the **C:\\ProgramData\\DriveClient** directory based on the
    installer or through the **AgentConfig.exe** executable.

- (Linux) **/var/log/driveclient.log**

    The **log4cxx.xml** configuration file, in the **Cloud Backup** cache folder,
    controls agent logging. Among the things that you can manually
    edit in this file are the size of the **driveclient.log** file (`MaxFileSize`)
    and how many previous versions (`MaxBackupIndex`) to save before deletion.
    For more information about how to configure this file,
    see [Cloud Backup agent logging basics](/support/how-to/cloud-backup-agent-logging-basics).  

#### Format of log lines

Log lines have the following format:

`[DATE TIME | THREADID | LOGLEVEL | USER | CONTEXT] LOG INFORMATION`

- `DATE TIME`: Time stamp indicating when the log line was written.
- `THREADID`: Because DriveClient is a threaded service, this ID is an indicator
  to separate the thread from all of the other threads writing to the same log
  file.
- `LOGLEVEL`: The depth of the logging. The default is INFO, but Support might
  increase this level to TRACE or DEBUG. The log levels are common log levels,
  such as INFO, WARN, and ERROR.
- `USER`: The user that is running the service. On Linux, this value is `root`,
  and on Windows, it is `Administrator`.
- `CONTEXT`: Internal information about where the log generated.
- `LOG INFORMATION`: The context of the log.

#### Common log items

The **driveclient.log** file includes the following common items:

- `rax::LoggingPolicy::PerformSetup(134)`: Indicates the start of the
  DriveClient service.
- `rax::AgentPolicy::TearDown(38)] Tearing down logging...`: Indicates that the
  DriveClient service shut down properly.

#### Common errors in the log

Common errors in the log include the `401` and `403` errors received when the
agent is accessing the **rse.drivesrvr.com**, **api.drivesrvr.com**,
**rse.drivesrvr.co.uk**, or **api.drivesrvr.co.uk** endpoints.

When you first start the DriveClient service, the RSA key pair for
authentication might not properly synchronize immediately, which causes a brief
time of `401` and `403` errors in the **driveclient.log** file. This is normal for
the Cloud Backup internal APIs. The DriveClient service handles these errors and
retries the appropriate number of times before canceling the startup of that
service.

If the errors continue for more than 5-10 seconds, contact Rackspace Support.

### Recovery of your encrypted vault password

You cannot recover your encrypted vault password. The vault password is stored
only on the cloud server linked to that encrypted vault. If you forget that
password and the **bootstrap.json** file was overwritten or lost,
there is no way to recover the password.

### Unable to back up or restore files (Windows only)

Windows can exclusively lock a file so that no other
process can read or write to it. This locking is common in database
binary files, but many other programs also use this locking protocol. If this
locking occurs, the only workarounds are closing the program with
the exclusive lock or restoring the file to a different location.

If you are backing up a file that you know will be exclusively locked,
you should think about using VSS snapshots (if your version of Windows
supports it) and back up the VSS snapshot's contents. Using VSS
snapshots enables you to get a proper backup of the file.

The latest version of Cloud Backup for Windows automatically takes a VSS
snapshot of the drive and attempts to back up files from it.

### System resource utilization

The amount of resources (memory, CPU, and load) used by the DriveClient is
directly related to how many files the system backs up in each backup
configuration. An increased number of files (or the size of files) can cause the
agent to consume more resources. For best practice suggestions, see 
[Best practices for Cloud Backup](/support/how-to/best-practices-for-cloud-backup).

### Other errors and problems

You might encounter the following other errors and problems:

#### Backup failed with a 403 error from Cloud Files when the account has sub-users

A registered sub-user is authorized for Cloud Backup but not for Cloud Files
access. When this user attempts a backup, all requests to Cloud Files return a
`403` error. The user attempts to authenticate again, but the new authentication
token is the same as the old one.

Account administrators can manage permission levels in the User Management
section of the [Cloud Control Panel](https://login.rackspace.com). Submit a
request to your account administrator for **Full** access to your account or
**Administrative** access to Cloud Files for your sub-user account. Cloud Backup
does not support Dedicated Users with Cloud access or Federated users.

#### Unable to browse a previous backup or browse a backup to select files to restore

The running DriveClient service generates the list of files in a backup in
the Cloud Control Panel. When you are browsing existing backup reports that
have not been rotated because of retention policies, this information
generates on that cloud server.

When you attempt to restore, the target cloud server, to which you have selected
to restore the files, generates the file list.

#### Cleanup stuck in preparing mode

The cleanup process requires many calculations before it can start
cleaning up for the file rotation. As a result, the cleanup process could show
as *preparing* for some time before the files start rotating. There
is no way to track the percentage complete at this time.

#### Unexpected Skipped notifications for a backup

You might get a Skipped notification if you have reregistered servers (the old
server appears offline with a duplicate online server). By design, scheduled
backups for offline servers send a Skipped notification. To discontinue
getting these notifications for offline servers, select **Disable** from the
**Actions** menu for the **Backup Configuration**.

**Warning**: We do *not* recommend reregistering a DriveClient agent, especially
if the server has existing backup configurations and data backed up.
Reregistering disassociates the server from the prior backup configurations and
backed up data.

Suppose you have reregistered a DriveClient agent and are unintentionally
disassociated from your backups. In that case, you can use the
[Migrate vault API operation](https://docs.rackspace.com/docs/cloud-backup/v1/developer-guide/#migrate-vault)
to migrate the previous backup vault from the previous agent to a new agent that
has no backup configurations or previous backups run against it.

#### Files modified during backup are missing or corrupted

**Note**: This issue relates to the backed up data, not to the actual file on the file system.

The following types of file changes can occur during a backup:

- Files are overwritten or get deleted. There is no guarantee that these files have
    usable content or are even included in the backup at all.
- Data is appended to files, similar to logs. We endeavor to back up these
    files, and we expect to restore a reasonable and usable form of
    these files.
- Files, like databases, might have random updates to any part of them. We do
    not guarantee that these files are restorable, and even if you
    restore them, we do not guarantee that the restored content is not corrupt.

These file types either change too rapidly (databases, logs, caches) or don't
exist long enough to be backed up (session files). You should avoid backing up session
files entirely. If the information is valuable to your business, log files
should track it. Also avoid caches because their data is meant to be discarded.

If you need to back up these types of files, we recommend the following
workarounds:

- For databases, take a snapshot of the database (for example, a database dump)
  and back up the dump. See [Back up databases with Cloud Backup](/support/how-to/rackspace-cloud-backup-backing-up-databases) for full
  instructions.
- For log files, take snapshots of your log files and back them up. To avoid
  running out of disk space, rotate your log files periodically.
