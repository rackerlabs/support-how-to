---
layout: post
title: "Upgrade Oracle EBS 12.2 database to Oracle Database 19c"
date: 2020-03-27
comments: true
author: Vivek Verma
published: true
authorIsRacker: true
authorAvatar: 'https://s.gravatar.com/avatar/ea77be7be4ebf7aed353087f677104be'
bio: "I'm a consultant working on Oracle E-Business Suite and related products.
As an Amazon Cloud Solutions Architect Associate, I am passionate about the
Cloud Platform. Python and Chef are works in progress."
categories:
    - Oracle
    - database
metaTitle: "Upgrade Oracle EBS 12.2 with Oracle Database 19c"
metaDescription: "This blog post explores the steps to upgrade Oracle&reg; E-Business Suite (EBS) 12.2 with Oracle Database 19c."
ogTitle: "Upgrade Oracle EBS 12.2 with Oracle Database 19c"
ogDescription: "This blog post explores the steps to upgrade Oracle&reg; E-Business Suite (EBS) 12.2 with Oracle Database 19c."
---

This post explores the steps to configure Oracle&reg; E-Business Suite (EBS)
12.2 with Oracle Database 19c.

<!--more-->

### Introduction

Oracle recently certified Oracle Database 19c with EBS 12.2. When you upgrade an
Oracle EBS database from version 12c (12.1.0.2) or 11.2.0.4 to Database 19c, the
database architecture changes to a container database (CDB) architecture. If you
upgrade the EBS database from previous versions to 19, the upgrade process must
convert the EBS database to CDB architecture with a single pluggable database
(PDB).

### Database 19c multitenant architecture

The Database 19c multitenant architecture enables an Oracle database to function
as a multitenant CDB. You should be familiar with the following terms:

- **CDB**: Includes zero, one, or many customer-created PDBs.

- **PDB**: A portable collection of schemas, schema objects, and non-schema
  objects that appears to an Oracle Net client as a non-CDB.

- **Container**: A logical collection of data or metadata within the multitenant
  architecture.

The following figure shows possible containers in a CDB and demonstrates that a
CDB can support multiple PDBs in Database 19c:

![]({% asset_path 2020-03-27-upgrade-oracle-ebs-12.2-database-to-oracle-database-19c/Picture1.png %})

*Image Source*: [https://docs.oracle.com/en/database/oracle/oracle-database/12.2/cncpt/img/admin112.png](https://docs.oracle.com/en/database/oracle/oracle-database/12.2/cncpt/img/admin112.png)

However, Oracle EBS currently supports only a single PDB in a CDB and does not
certify a CDB with multiple PDBs.

### Upgrade an EBS database to Database 19c

Refer to the following notes to upgrade an EBS database to 19c:

- **Interoperability Notes**: Oracle E-Business Suite Release 12.2 with Oracle
  Database 19c (Doc ID 2552181.1)
- **Oracle 19c**: Complete Checklist for Manual Upgrades to Non-CDB Oracle
  Database 19c (Doc ID 2539778.1)

#### Before the database installation

1. Verify the current software component versions before upgrading the database
   to 19c. Make sure your current database release supports a direct upgrade.
   You must apply all missing patches to EBS.

2. Run **txkOnPremPrePDBCreationTasks.pl** in the source **Oracle Home**
   directory to generate files that you need after the database upgrade to
   initialize CDB parameters.

#### Database installation

1. Download Oracle Database 19c(19.3) media from
   [https://www.oracle.com/database/technologies/oracle19c-linux-downloads.html](https://www.oracle.com/database/technologies/oracle19c-linux-downloads.html)
   and install the 19c database software. Choose the **Set Up Software Only**
   option.

2. Apply additional 19c Relational Database Management System (RDBMS) patches to
   19c **Oracle Home**.

3. Create a CDB using the Database Configuration Assistant (DBCA). Create an
   empty container database (CDB) without a PDB.

4. Run **txkGenCDBTnsAdmin.pl** in 19c the **Oracle Home** directory to
   generate the required Transparent Network Substrate (TNS) files. Do not
   create or start a listener.

#### Database upgrade

Versions after Oracle Database 18c do not support the `UTL_FILE_DIR` database
initialization parameter. Instead, the later versions use database directory
objects to specify the locations used for PL/SQL file I/O. A directory object
specifies an alias for a directory on the server file system. Starting with
Oracle Database 19c, Oracle EBS introduced new `apps.v$parameter` and
`apps.v$parameter2` views in the APPS schema. These views provide a supplemental
`UTL_FILE_DIR` parameter, which you can reference in the same way that you
reference the former `UTL_FILE_DIR` database initialization parameter. As part
of the upgrade, you need to migrate your previous `UTL_FILE_DIR` database
initialization parameter settings to the new parameter.

1. Run  **txkCfgUtlfileDir.pl** in `getUtlFileDir` mode to retrieve the
   directory path values from the source `UTL_FILE_DIR` database initialization
   parameter.

2. Later, run **txkCfgUtlfileDir.pl** in `setUtlFileDir` mode to store the
   directory path values in the database.

3. Upgrade the source database to 19c by following Chapter 2 of the
   **Oracle Database Upgrade Guide 19c using Database Upgrade Assistant (DBUA)**.
   To perform the upgrade manually, follow **Metalink Note 2539778.1 - Oracle 19c -
   Complete Checklist for Manual Upgrades to Non-CDB Oracle Database 19c**.

#### After the database upgrade

1. Run `adgrants`.

2. Compile invalid objects.

#### Convert the database to multitenant architecture

At this point, there are two databases associated with the 19c Oracle home:

- The CDB database
- The non-CDB database

The EBS database is the non-CDB database that the upgrade migrates to the PDB
and plugs into the CDB.

1. Update the initialization parameters for the CDB, or the freshly installed
   19c database, to accommodate the EBS database as a PDB.

2. Check for any PDB violations before plugging in the EBS database as PDB to CDB.

3. Run **txkCreatePDB.pl** and **txkPostPDBCreationTasks.pl** to convert the EBS
   database to a PDB and plug the PDB in to the CDB. You can make the PDB data
   file location the same as the source data file location.

4. Ensure that you update all common and release-specific database initialization
   parameters for Oracle 19c by following the **My Oracle Support Knowledge
   Document 396009.1, Database Initialization Parameter Settings for Oracle
   E-Business Suite Release 12** documentation.

#### Application-tier steps

1. Run `autoconfig` on the application tier.

2. Review the links present in the database before the start of the upgrade and
   create corresponding database links in the upgraded database.

3. Start the application services and perform a sanity test.

#### Unsupported EBS products

Because EBS Release 12.2 on Oracle Database 19c does not support the following
EBS products at this time, EBS Release 12.2 customers who plan to upgrade the
database to Oracle Database 19c might need to check for alternative products or
functionality:

- Oracle Enterprise Data Warehouse (EDW)
- Oracle Enterprise Planning and Budgeting (EPB)
- Demand Signal Repository (DDR)
- Oracle E-Business Suite Integrated SOA Gateway (ISG)

### Conclusion:

This blog post provides an overview of multitenant architecture with container
and pluggable databases. By using the outlined steps, database administrators
can configure Oracle EBS 12.2 with the Oracle Database 19c. The upgrade process
converts your EBS database to CDB architecture with a single pluggable database.

Use the Feedback tab to make any comments or ask questions. You can also
[chat now](https://www.rackspace.com/#chat) to start the conversation.

<a class="cta purple" id="cta" href="https://www.rackspace.com/dba-services">Learn more about Databases.</a>
