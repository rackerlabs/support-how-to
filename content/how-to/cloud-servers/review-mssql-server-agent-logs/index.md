---
permalink: review-mssql-server-agent-logs
audit_date: '2020-09-21'
title: Review MSSQL Server Agent logs
type: article
created_date: '2020-09-18'
created_by: Benji Ivey
last_modified_date: '2020-09-21'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article helps you navigate your Microsoft&reg; MSSQL&reg; Server Agent logs when trying to narrow down an issue.

### General Information

By default, SQL Server Agent creates an error log that records warnings and errors.

Warning messages provide information about potential issues, such as "Job (job name) was deleting while running."

Errors require a System Administrator to intervene.  One example is: "Unable to start mail session." 

SQL Server&reg; can maintain up to nine SQL Server Agent error logs. Each archived log has an extension that indicates the
relative age of the log. An extension of **.1** indicates the newest archived error log, and an extension of **.9**
indicates the oldest archived error log.

The system does not write execution trace messages to the SQL Server Agent log because they can fill up space on the log.
Having a full error log reduces your ability to analyze more difficult issues effectively. The error log adds
to the server's processing load, so, generally, you should capture all messages only when you are debugging a specific issue. 

When SQL Server Agent is in a stopped state, you can modify the location of the SQL Server Agent error log. When there is
no information in the error log, you can't open the log file. Cycle the SQL Server Agent log at any time without
stopping SQL Server Agent by using **dbo.sp_cycle_agent_errorlog**.

### Permissions

For SQL Server Agent to perform correctly, you must configure the Agent to use the credentials of a user who is a member
of the sysadmin fixed server role in SQL Server. The user must have the following permissions:

- Log on as a service (**SeServiceLogonRight**)
- Replace a process-level token (**SeAssignPrimaryTokenPrivilege**)
- Bypass traverse checking (**SeChangeNotifyPrivilege**)
- Adjust memory quotas for a process (**SeIncreaseQuotaPrivilege**)

**Note:** The Object Explorer displays the SQL Server Agent node only if you have permission to use it.

### View the SQL Server Agent Log

1. In **Object Explorer**, click the **+** sign to expand the server that contains the SQL Server Agent error log that you want to view.
2. Click the **+** sign to expand **SQL Server Agent**.
3. Click the **+** sign to expand the **Error Logs** folder.
4. Right-click the error log you want to view and select **View Agent Log**.
5. Select the appropriate options. See **Available options**.
6. Click **close**.

#### Available options

The **Log File Viewer -server_name** dialog box has the following options:

##### Load Log

Opens a dialog box where you can specify a log file to load.

##### Export

Opens a dialog box that lets you export the information shown in the log file summary grid to a text file.

##### Refresh

Refreshes the view of the selected logs. The **Refresh** button rereads the selected logs from the target server while
applying any filter settings.

##### Filter

Opens a dialog box that lets you specify settings used to filter the log file, such as **Connection**, **Date**,
or other general filter criteria.

##### Search

Searches the log file for specific text. Searching with wildcard characters is not supported.

##### Stop

Stops loading the log file entries. For example, you can use this option if a remote or offline log file takes a
long time to load, and you want to view only the most recent entries.

##### Log File Summary

Displays a summary of the log file filtering. If you do not filter the file, you see the following text,
*No filter applied*. If you apply a filter to the log, you see the text, *Filter log entries where:*.

##### Selected Row Details

Selects a row to display additional details about the selected event row at the bottom of the page. Reorder the columns
by dragging them to new locations in the grid. Resize the columns by dragging the column separator bars in the grid header
to the left or right. Double-click the column separator bars in the grid header to automatically size the column to the
content width.

##### Instance

Displays the name of the instance on which the event occurred, which displays as the computer name or instance name.

##### Date

Displays the date of the event.

##### Source

Displays the source feature from which the event is created, such as the service name (**MSSQLSERVER**, for example).
This does not appear for all log types.

##### Message

Displays any messages associated with the event.

##### Log Type

Displays the type of log to which the event belongs. All selected logs appear in the log file summary window.

##### Log Source

Displays a description of the source log in which the event is captured.

### Rename a SQL Server Agent log

**Note:** SQL Server Agent does not write to the new log file until you restart the SQL Server Agent service.

1. In **Object Explorer**, click the **+** sign to expand the server that contains the SQL Server Agent error log
   you want to rename.
2. Click the **+** sign to expand SQL Server Agent.
3. Right-click the **Error Logs** folder and select **Configure**.
4. In the **Configure SQL Server Agent Error Logs** dialog box, go to the **Error log file** box.
5. Enter the new file path and file name for the error log. Alternately, click the ellipses (**...**) to open the
   **Specify agent error log location** dialog box.
5. Click **OK**.

### Send SQL Server Agent error messages

**Note:** The Microsoft Windows Messenger service must be running to receive net send events.

1. In **Object Explorer**, click the **+** sign to expand the server that contains the SQL Server Agent error log
   from which you want to send error messages by using `net send`.
2. Right-click **SQL Server Agent** and select **Properties**.
3. In the **SQL Server Agent Properties -server_name** dialog box, under **Error log** on the **General** page, type
   the user name or computer name to which you want to send error messages in the **Net send recipient box**.
4. Click **OK**.

### Write execution trace messages to the SQL Server Agent error log

**Note**: Because this option can cause the error log to become large, include execution trace messages in SQL
Server Agent error logs only when investigating a specific SQL Server Agent problem.

1. In **Object Explorer**, click the **+** sign to expand the server that contains the SQL Server Agent error
   log to which you want to write execution trace messages.
2. Right-click **SQL Server Agent** and select **Properties**.
3. In the **SQL Server Agent Properties -server_name** dialog box, under **Error log** on the **General** page,
   select the **Include execution trace messages** checkbox.
4. Click **OK**.
