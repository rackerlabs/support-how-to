---
permalink: review-mssql-server-agent-logs/
title: Review MSSQL Server Agent Logs
type: article
created_date: '2020-09-18'
created_by: Benji Ivey
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

This article will assist you in navigating your MSSQL Server Agent Logs when trying to narrow down an issue.

### General Information

By default SQL Server Agent creates an error log that records warnings and errors. These are the types of warnings and errors you will commonly encounter:

1. Warning messages that provide information about potential issues: "Job (job name) was deleting while running."
2. Errors that require the intervention of a System Administrator, an example being "Unable to start mail session" You can use Net Send to send error messages to a specific user or computer.

SQL Server can maintain up to nine SQL Server Agent error logs. Each archived log has an extension that indicates the relative age of the log. An extension of .1 indicates the newest archived error log and an extension of .9 indicates the oldest archived error log.

Execution Trace Messages are not written to the SQL Server Agent Log as they can fill up space on the log. Having a full error log reduces your ability to effectively analyze more difficult issues. It is important to note that the error log adds to the server's processing load. Generally it is best to capture all messages only when you are debugging a specific issue. 

When SQL Server Agent is in a stopped state you can then modify the location of the SQL Server Agent Error Log. When there is no information in the error log it will be unable to be opened.  You can cycle the SQL Server Agent log at any time without stopping SQL Server Agent using dbo.sp_cycle_agent_errorlog

### Permissions

For SQL Server Agent to perform correctly the Agent must be configured to use the credentials of a user that is a member of the sysadmin fixed server role in SQL Server. It must have the following permissions:

1. Log on as a service (SeServiceLogonRight)
2. Replace a process-level token (SeAssignPrimaryTokenPrivilege)
3. Bypass traverse checking (SeChangeNotifyPrivilege)
4. Adjust memory quotas for a process (SeIncreaseQuotaPrivilege)

Please note that Object Explorer only displays the SQL Server Agent node if you have permission to use it.

### Viewing the SQL Server Agent Log

1. In Object Explorer, click the plus sign to expand the server that contains the SQL Server Agent error log that you want to view.
2. Click the plus sign to expand SQL Server Agent.
3. Click the plus sign to expand the Error Logs folder.
4. Right-click the error log you want to view and select View Agent Log.

The following options are available in the Log File Viewer -server_name dialog box:

##### Load Log
Open a dialog box where you can specify a log file to load.

##### Export
Open a dialog box that lets you export the information that is shown in the Log file summary grid to a text file.

##### Refresh
Refresh the view of the selected logs. The Refresh button rereads the selected logs from the target server while applying any filter settings.

##### Filter
Open a dialog box that lets you specify settings that are used to filter the log file, such as Connection, Date, or other General filter criteria.

##### Search
Search the log file for specific text. Searching with wildcard characters is not supported.

##### Stop
Stops loading the log file entries. For example, you can use this option if a remote or offline log file takes a long time to load, and you only want to view the most recent entries.

##### Log File Summary
This information panel displays a summary of the log file filtering. If the file is not filtered, you will see the following text, "No filter applied". If a filter is applied to the log, you will see the following text, "Filter log entries where: .""

##### Selected Row Details
Select a row to display additional details about the selected event row at the bottom of the page. The columns can be reordered by dragging them to new locations in the grid. The columns can be resized by dragging the column separator bars in the grid header to the left or right. Double-click the column separator bars in the grid header to automatically size the column to the content width.

##### Instance
The name of the instance on which the event occurred. This is displayed as computer name\instance name.

##### Date
Displays the date of the event.

##### Source
Displays the source feature from which the event is created, such as the name of the service (MSSQLSERVER, for example). This does not appear for all log types.

##### Message
Displays any messages associated with the event.

##### Log Type
Displays the type of log to which the event belongs. All selected logs appear in the log file summary window.

##### Log Source
Displays a description of the source log in which the event is captured.

5. When finished you can now click close.

### Renaming a SQL Server Agent Log

Please note that SQL Server Agent will not write to the new log file until the SQL Server Agent service is restarted.

1. In Object Explorer, click the plus sign to expand the server that contains the SQL Server Agent error log that you want to rename.
2. Click the plus sign to expand SQL Server Agent.
3. Right-click the Error Logs folder and select Configure.
4. In the "Configure SQL Server Agent Error Logs" dialog box, in the "Error log file" box, enter the new file path and file name for the error log. Alternately, click the ellipsis (...) to open the "Specify agent error log location" dialog box.
5. When done, click OK


### Sending SQL Server Agent Error Messages

Please note that the Microsoft Windows Messenger service must be running to receive net send events.

1. In "Object Explorer", click the plus sign to expand the server that contains the SQL Server Agent error log from which you want to send error messages via net send.
2. Right-click "SQL Server Agent" and select "Properties".
3. In the SQL Server Agent Properties -server_name dialog box, under "Error log" on the General page, type the user name or computer name to which you want to send error messages in the "Net send recipient box".
4. Click OK

### Writing Execution Trace Messages to the SQL Server Agent Error Log

Please note that because this option can cause the error log to become large, only include execution trace messages in SQL Server Agent error logs when investigating a specific SQL Server Agent problem.

1. In "Object Explorer", click the plus sign to expand the server that contains the SQL Server Agent error log to which you want to write execution trace messages.
2. Right-click "SQL Server Agent" and select "Properties".
3. In the SQL Server Agent Properties -server_name dialog box, under "Error log" on the General page, select the "Include execution trace messages" check box.
4. Click OK
