---
layout: post
title: "Migrate a SQL Server database to an AWS RDS instance"
date: 2019-09-13
comments: true
author: Ramkumar Singh
published: true
authorIsRacker: true
categories:
    - Database
    - SQL Server
metaTitle: "Migrate a SQL Server database to an AWS RDS instance"
metaDescription: "This blog explains how to move a Microsoft&reg; SQL Server&reg; database to Amazon Relational Database Service (RDS)."
ogTitle: "Migrate a SQL Server database to an AWS RDS instance"
ogDescription: "This blog explains how to move a Microsoft&reg; SQL Server database to Amazon Relational Database Service (RDS)."
---

This blog explains how to move a Microsoft&reg; SQL Server&reg; database hosted
on-premises (or on Amazon&reg; EC2 or Azure&reg;) to Amazon Relational Database
Service (RDS). This move requires backing up your SQL database to an AWS S3
bucket and restoring the database on your AWS RDS instance from that S3 bucket.

<!--more-->

### Introduction

Previous versions of the Amazon RDS instance did not let you restore data from
**.bak** files. As a result, users had to use Amazon Data Migration Services or
use the **Import and Export** wizard to move data to and from AWS RDS.

Amazon started support for Native Backup Restore in July 2016 and added the
following stored procedures in MSDB database on RDS:

- **rds\_backup\_database** – Back up a single database to an S3 bucket.
- **rds\_restore\_database** – Restore a single database from S3.
- **rds\_task\_status** – Track a running backup and restore task.
- **rds\_cancel\_task** – Cancel a running backup or restore task.

This blog discusses how to leverage the **rds\_restore\_database** procedure to
restore a **.bak** file from S3 and how to use the **rds\_task\_status**
procedure to monitor the restore progress while the AWS S3 sync command is used
to upload the backup file to an AWS S3 bucket.

#### Prerequisites

To perform a migration, you should have the following prerequisites:

-	SQL Server Agent Proxy
-	AWS Command Line Interface (AWS CLI)
-	ProfileName (an AWS user with access to Amazon S3 and an S3 bucket including
   the `aws_access_key_id` and `aws_secret_access_key`.)
-	AWS RDS instance with an appropriate option group with the `SQLSERVER_BACKUP_RESTORE`
   option mapped to it.
-  PowerShell installation

You also should have basic knowledge about SQL Server, creating an S3 bucket,
creating an AWS user, granting access to an S3 bucket, and creating an RDS instance.

### Solution

The following steps cover the solution in the following sections:

1.	Back up the database on the local server.

2.	Copy the backup file to an AWS S3 bucket.

3.	Restore the SQL backup in RDS from the S3 bucket.

#### Back up the database on the local server

You can use any method to take a backup locally. The following example uses a
**.bat** script with a sqlcmd command that you can use as in any SQL agent job,
in case you need to schedule the migration task:

    Sqlcmd -S SourceInstanceName -U sa -P password_here -Q
    "Declare @DBName nvarchar(200)='MigrationTestDB'
    DECLARE @BackupLocation NVARCHAR(2000) = 'C:\Temp\RDSmigration\backup\'+@DBName+
    + REPLACE(CONVERT(VARCHAR(20), GETDATE(), 120) + '.bak', ':', '');
    BACKUP DATABASE @DBName TO DISK = @BackupLocation with compression;"


#### Copy and upload the backup file to an AWS S3 bucket

You can do this by using the `AWS S3 copy` or `AWS S3 sync` commands. However, the
sync command is very popular and widely used in the industry, so the following
example uses it.

By default, the AWS sync command does not delete files. It simply copies new or
modified files to the destination. You can use the following PowerShell script
in an SQL agent job. You need to run both the backup and this copy step by using
an SQL agent proxy account configured to run `cmdExec` and the PowerShell
subsystem.

    $LogDate = Get-Date -Format yyyy-MM-dd
    $Global:LogFile = "C:\Temp\RDSmigration\Logs\$LogDate.log"

    $env:Path += ';C:\Program Files\Amazon\AWSCLI\bin'

    Set-AWSCredential -ProfileName backuptos3user
    aws configure set aws_access_key_id AKIAVIH6FYWVO62BZ7QA
    aws configure set aws_secret_access_key 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
    aws configure set region ap-south-1

    try
    {
       $now = (Get-Date -Format G)
       aws s3 sync C:\Temp\RDSmigration\backup s3:// ramkrdsrestore --sse | out-file $LogFile
    }
    catch {
       Write-Host $_.Exception.Message -ForegroundColor Green
    }

#### Restore the SQL backup in RDS from the S3 bucket

Run the following command to restore the **MigrationTestDB2019-08-15 181640.bak**
file as the **MigrationTestDB** database:

    EXEC msdb.dbo.rds_restore_database
       @restore_db_name = 'MigrationTestDB',
       @S3_arn_to_restore_from = 'arn:aws:s3:::ramkrdsrestore/MigrationTestDB2019-08-15 181640.bak'

![](Picture1.png)

Note the parameters supplied to the stored procedure. You need to specify the
following parameters:

-	The name of the database to restore.
-	The Amazon Resource Name (ARN) of the backup file. For S3 objects, the ARN
   follows the format shown here.

SQL Server starts a restore task and assigns it a **TaskID**. You can easily
track the status of the task with the following command:

    EXEC  msdb.[dbo].[rds_task_status]  @db_name ='DestinationDBName'

You can use the **TaskID** to track progress instead of **@db_name**.

![](Picture2.png)

Be aware of the following concerns:

-	The bucket backup file name is case sensitive in the **rds\_restore\_database**
   procedure.
-	The IAM role used in the option group has access to the S3 bucket.
-	The S3 bucket policy is not restrictive to exclude the IAM role.
-	The RDS SQL instance uses the correct option group where you added the
   backup/restore option. This setting is critical. Without it, restore does not
   begin.

### Limitations of SQL Server native backup and restore in Amazon RDS

Following are some limitations of SQL Server native backup and restore in Amazon
RDS:

-	No differential, transaction log, filegroup backup, or restore is possible,
   which is not a hindrance to data recovery. Amazon RDS allows you to create
   scheduled instance snapshots, and those snapshots are kept accessible for a
   rolling 35-day period. You can restore the instance within five minutes of a
   specified time in the last thirty-five days.
-	You cannot restore KMS-encrypted backups from S3 to on-premises.
-	You cannot restore a database in the same RDS instance.
-  You cannot restore backups of Tabular Data Encryption (TDE) enabled databases.
-	Target RDS instances require access to the S3 bucket.
-	The user account that is running RDS SQL Server native backup and restore
   commands needs to have appropriate permissions.

### Conclusion

This blog showed you how to back up a database on a cloud destination and to
restore it on an AWS RDS instance. The RDS instance does not provide access to
the drives or server. The key is to transfer a backup file to the AWS S3
bucket and then restore it from there.

One more use case for this article is to store your SQL backups directly on AWS
S3, which provides data availability, security, and performance enhancements.
Amazon S3 is designed for 99.999999999% (eleven 9s) durability. This approach
is cost effective when it comes to storing database backups by saving a lot of
hard storage.

Use the Feedback tab to make any comments or ask questions.

### Optimize your environment with expert administration, management, and configuration

[Rackspace's Application services](https://www.rackspace.com/application-management/managed-services)
**(RAS)** experts provide the following [professional](https://www.rackspace.com/application-management/professional-services)
and
[managed services](https://www.rackspace.com/application-management/managed-services) across
a broad portfolio of applications:

- [eCommerce and Digital Experience platforms](https://www.rackspace.com/ecommerce-digital-experience)
- [Enterprise Resource Planning (ERP)](https://www.rackspace.com/erp)
- [Business Intelligence](https://www.rackspace.com/business-intelligence)
- [Salesforce Customer Relationship Management (CRM)](https://www.rackspace.com/salesforce-managed-services)
- [Databases](https://www.rackspace.com/dba-services)
- [Email Hosting and Productivity](https://www.rackspace.com/email-hosting)

We deliver:

- **Unbiased expertise**: We simplify and guide your modernization journey,
focusing on the capabilities that deliver immediate value.
- **Fanatical Experience**&trade;: We combine a Process first. Technology second.&reg;
approach with dedicated technical support to provide comprehensive solutions.
- **Unrivaled portfolio**: We apply extensive cloud experience to help you
choose and deploy the right technology on the right cloud.
- **Agile delivery**: We meet you where you are in your journey and align
our success with yours.

<a class="cta teal" id="cta" href="https://www.rackspace.com/dba-services">Learn more about Databases</a>

Visit [www.rackspace.com](https://www.rackspace.com) and click **Sales Chat**
to get started.

Use the Feedback tab to make any comments or ask questions.

