---
layout: post
title: "Use Oracle external tables"
date: 2020-05-28
comments: true
author: Vikas Kumar
published: true
authorIsRacker: true
authorAvatar: 'https://s.gravatar.com/avatar/02d1f0f4f3f24ee84e33211a51a0b237'
bio: "I've been a Racker for two years and have more than ten years of Oracle&reg; DBA experience. Currently I work on Oracle, MongoDB&reg;, and other NoSQL databases."
categories:
    - Oracle
    - database
metaTitle: "Use Oracle external tables"
metaDescription: "External tables receive data from the flat files stored outside
of the database and allow Oracle&reg; to query the data in those files."
ogTitle: "Use Oracle external tables"
ogDescription: "External tables receive data from the flat files stored outside
of the database and allow Oracle&reg; to query the data in those files."
---

External tables receive data from the flat files stored outside of the database
and allow Oracle&reg; to query the data in those files.

<!--more-->

### Introduction

Oracle can parse any file format supported by the SQL\*Loader. You can't use data
manipulation language (DML) on external tables, but you can use DML for query, join,
and sort operations. You can also create views and synonyms against the external tables.

To take advantage of the external table feature, you should use the ORACLE_LOADER
access driver and make sure the data files are in the text format. You should
also understand Structured Query Language (SQL) so you can create an external table and
perform queries against it.

### Make an external table in an Oracle database

To create external tables by using an Oracle loader, perform the following steps:

#### Create a directory

Use the following code to create a directory that points to the location of the
comma-separated value (CSV) or text files provided by a user.

    create directory vk_dir as '/opt/oracle/app/admin/je1prd/mods/151214_CHG0004529';

#### Create an external table

Use the following SQL to create an external table:

    create table kumarv5.VK_4529_ext
    (
      IBMCU   NCHAR(12),
      IBLITM   NCHAR(25),
      IBANPL   NUMBER
    )
    organization external
    (
       type oracle_loader
       default directory vk_dir
       access parameters
       (
         records delimited by newline
         logfile vk_dir:'VK_4529_ext.log'
         badfile vk_dir:'VK_4529_ext.bad'
         discardfile vk_dir:'VK_4529_ext.dcf'
         skip 1
         fields
         terminated by '~'
         missing field values are null
         reject rows with all null fields
         (
           IBMCU,
           IBLITM,
           IBANPL
         )
       )
       location
       (
         'data14.csv'
       )
    )
    reject limit unlimited;

#### Create a local table

Because you can't perform DML on the external tables, use the following code to
create a local table based on the external one:

    --create
    create table kumarv5.VK_4529_int
    (
      IBMCU   NCHAR(12),
      IBLITM   NCHAR(25),
      IBANPL   NUMBER
    )
    tablespace proddtat;

#### Copy data from the external to the local table

Use the following code to copy data from the external to the local table:

    --insert
    Insert into kumarv5.VK_4529_int   select * from kumarv5.VK_4529_ext;
    commit;
    select count(*) from kumarv5.VK_4529_int;

#### Update the main production table

After you create the local table based on the external one, you can use the
following code to update the main production table from the local table:

    update PRODDTA.F43090 a
        set a.PCMCU='         1AM'
        WHERE (a. IBMCU, a. IBLITM, a. IBANPL) in
           (select b. IBMCU, b. IBLITM, b. IBANPL from kumarv5.VK_4529_int b );

#### Load data from external tables to regular tables

The following image shows you how to load data from an external table to a
regular table:

![]({% asset_path 2020-05-28-use-oracle-external-tables/Picture1.png %})

*Image Source*: [https://dba.fyicenter.com/faq/oracle/Load-Data-from-External-Tables.html](https://dba.fyicenter.com/faq/oracle/Load-Data-from-External-Tables.html)

### Conclusion

External tables enable you to access data in the external sources as if it were
in a table in the database. If users provide data in a spreadsheet or CSV
format, and you need to update database tables based on the excel sheet, an
external table comes in handy.


Use the Feedback tab to make any comments or ask questions. You can also
[chat now](https://www.rackspace.com/#chat) to start the conversation.

<a class="cta red" id="cta" href="https://www.rackspace.com/dba-services">Learn more about Databases.</a>
