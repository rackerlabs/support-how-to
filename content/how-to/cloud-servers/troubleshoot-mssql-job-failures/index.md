---
permalink: troubleshoot-mssql-job-failures
audit_date: '2020-09-21'
title: Troubleshoot MSSQL job failures
type: article
created_date: '2020-09-17'
created_by: Karoline Mills
last_modified_date: '2020-09-21'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes common reasons for SQL Server&reg; job failures and basic troubleshooting steps to
investigate them.

### Common causes for job failures

SQL jobs can fail because of multiple reasons. To troubleshoot these failures, you can review the SQL Server
Agent job history. To view these logs, perform the following steps:

1. Open **SQL Server Management Studio** (SSMS) and connect to the corresponding database instance.

2. Navigate to **Management** -> **SQL Server Logs** -> **SQL job name**.

3. Find the job failure event and review the log details. 

The error logs should help you to determine if one or more steps of the job failed.

You can also configure jobs to export their logs to an external output file for detailed review by using
the **Advanced** tab of the job’s properties.

You might see the following common reasons for SQL job failures: 

#### Permission or authentication issues

The Windows&reg; SQL Server Agent service must be available to perform SQL jobs. For example, if the user or
service account that the service runs under has insufficient permissions to access network shares or file
locations, job failures can happen. To verify this, perform the following steps:

1. Click on the Windows button in your taskbar and type **Services**.

2. Locate and right-click the **SQL Server Agent** service.

3. Review the account information in the **Log On** tab.

Similar to Windows services, SQL Agent Jobs run under a user or service account configured in the job. Job
failures can occur when there are permission or authentication issues with the user or service account. Common
issues include:

-	Account expired
-	Password incorrect
-	Insufficient permissions to resources
-	Account no longer exists

Review the job failure log details in SSMS to get more information about the specific error or permission issue.
You can change the account under which the job is run by right-clicking the job. Navigate to the **General** tab
and change the account under **Run as:**.

#### Unavailable system resources

Job failures can occur when certain resources are not available at the time of job execution. Examples for this
include the following:

-	Insufficient disk space 

-	High memory utilization

-	High CPU utilization

-	Network connectivity issues

#### Incorrect job configuration

Job failures can also occur if the job configuration is incorrect. To review the job configuration, right-click
the job and select **Properties**. When you delete maintenance plans, the system does not automatically delete any
included jobs, so you need to delete these jobs separately to avoid job failures. Additionally, the job configuration
might point to system resources that no longer exist or an incorrect file or network path. 
