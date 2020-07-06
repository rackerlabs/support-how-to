---
layout: post
title: "Dbvisit Standby for Oracle SE v2.0 disaster recovery"
date: 2020-04-07
comments: true
author: Kanwerjeet Singh
published: true
authorIsRacker: true
authorAvatar: 'https://s.gravatar.com/avatar/f73f72ee82679fc3d9e52f277a83e410'
bio: "Hey, I’m Kanwer: Oracle DBA and always looking to explore new database technologies."
categories:
  - database
  - Oracle
metaTitle: "Dbvisit Standby for Oracle SE v2.0 disaster recovery"
metaDescription: "Dbvisit Standby is a replication tool for Oracle&reg; Standard Edition (SE) and
Oracle Standard Edition 2 (SE2) databases."
ogTitle: "Dbvisit Standby for Oracle SE v2.0 disaster recovery"
ogDescription: "Dbvisit Standby is a replication tool for Oracle&reg; Standard Edition (SE) and
Oracle Standard Edition 2 (SE2) databases."
---

Dbvisit Standby is a replication tool for Oracle&reg; Standard Edition (SE) and
Standard Edition 2 (SE2) databases.

<!--more-->

### Introduction

Cost is always a factor when you set up a disaster recovery (DR) solution for
Oracle databases. Oracle does not include DR solutions with Standard Database,
but Dbvisit offers a solution. Dbvisit uses Oracle's tried and tested archive
and redo mechanism and provides a tool for database DR.

Dbvisit Standby has the following features:

- Manual or automatic failover
- Graceful switchover
- Support for Oracle Real Application Clusters (RAC), Automatic Storage Management (ASM),
  and Oracle Manageed Files (OMF)
- Compression and encryption for archive log transportation to create and maintain
  the DR database by using the DBvisit tool

Dbvisit Standby picks up archived logs from the primary database, compresses
them if necessary, and transfers them to a standby database server. If any
network issues occur, Dbvisit accumulates archives on the primary database until
the restoration of the network. Dbvisit Standby also offers automatic or manual failover
of Oracle Standard Databases.

### Why Dbvisit?

You can run Dbvisit Standby on your standby database solution for Oracle SE
databases with no scripting needed for the Oracle standby database.

You can switch over easily. Dbvisit performs a Graceful Switchover (GS) in a
controlled manner, so you lose no data during the role change over. The latest
version of Dbvisit gives you the option of using a Dbvisit snapshot to create a
replica of your production database at a point in time by using your standby
database. After you create the snapshot, you can use the database without
impacting the primary database because you performed this action on the standby
database. Use the Dbvisit Standby Snapshot Option for reporting environments,
DR testing, development or test environments, and application testing.


Dbvisit Standby Version 8 consists of the following components:

- **`dbvctl`**: Dbvisit Standby command line interface (CLI)
- **`dbvnet`**: Dbvisit network communications
- **`dbvagent`**: Dbvisit Agent
- **`dbvserver`**: Dbvisit Central Console, a web-based user interface

![]({% asset_path 2020-04-07-dbvisit-standby-for-oracle-se-v2.0-disaster-recovery/Picture1.png %})

*Image Source*: [https://dbvisit.com/blog/dbvisit-standby-version-8-architecture-overview](https://dbvisit.com/blog/dbvisit-standby-version-8-architecture-overview)


### Supported platforms

DBvisit supports small to medium business databases on the following
database platforms:

- Oracle Standard Edition
- Oracle Database Appliance
- Oracle Cloud
- DR in the Cloud
- Oracle Solaris
- Advanced Interactive eXecutive (AIX)
- RAC

### Pricing

Dbvisit bases pricing on your configuration needs and determines the cost per
database. The minimum configuration requires a primary database, a secondary
database, and support for a year. Dbvisit has different licensing options based
on your requirements.

### Conclusion

Of the available DR solutions in the market, DBvisit is a more cost-effective
Oracle database replication solution. You can use it to manage and create Oracle
SE and SE2 standby databases easily.

Currently, Rackspace already has Datapipe customers using the Dbvisit tool to
manage standby databases on the Standard Edition.

Use the Feedback tab to make any comments or ask questions. You can also
[chat now](https://www.rackspace.com/#chat) to start the conversation.

<a class="cta teal" id="cta" href="https://www.rackspace.com/dba-services">Learn more about our Database services.</a>
