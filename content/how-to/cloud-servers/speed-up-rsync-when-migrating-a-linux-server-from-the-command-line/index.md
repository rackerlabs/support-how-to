---
permalink: speed-up-rsync-when-migrating-a-linux-server-from-the-command-line
audit_date: '2021-05-24'
title: Speed up rsync when migrating a Linux server from the command line
type: article
created_date: '2011-06-23'
created_by: Rackspace Support
last_modified_date: '2021-05-24'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

**Note:** This article is a guide and not a step-by-step process. It assumes
you are familiar with Linux&reg; system administration and the `rsync` utility.
Do not run the commands in this article if you're not fully familiar with them.
In all cases, ensure that you have backed up your data before you following
the steps in this guide. Standard bandwidth charges apply.

This guide helps you shorten server migration times. If your server's applications
match any of the characteristics highlighted in this article, then read on&mdash;this
article might make rsync times shorter and more predictable for you. It also shows
how to cut migration times by taking preventative action before doing it.

### Speed up the rsync process

The volume of used disk space on a server determines rsync times. That is, the more
data to copy, the longer the job takes. Typically, an empty OS rsync takes 10-15
minutes to complete. The following server use cases can dramatically extend rsync time:

- **Servers containing lots of small files, such as Ruby session files, cache files,
  mail server message files, or web server image thumbnails**. Migrating such data by
  using rsync takes longer to complete than you might expect. This means an initial
  rsync takes longer, but a second pass in rescue mode&mdash;with associated
  downtime&mdash;is shorter.
- **Servers containing multiple files that are being updated during live rsync**.
  Typically, these are MySQL&reg; MyISAM table files or web servers hosting multiple domains,
  each configured to log to separate files. The need to update these actively written
  files after the rsync's first-pass copy extends the downtime from a reboot to
  complete a second pass of the rsync process.
- **Servers containing one or more large files updated during migration**. Examples
  include MySQL databases using InnoDB format, mail servers with large mail logs, and
  web servers that log to single, large files. Updating these actively written files
  with a second rsync after the first-pass rsync copy can greatly extend associated
  downtime.

The secret to cutting rsync times is to manage data on your server and identify any
applications that write to disk during the live migration.

### Issue: Small files overhead

Although they don't take up much individual disk space, servers hosting many small
files force the rsync process to carry out many `file-open`, `file-copy`, and
`file-check` processes.

For example, a one-gigabyte data file requires one set of file open, copy, and check
processes. Contrast that with a one-gigabyte chunk of data spread across 10,000
individual files that requires 10,000 individual sets of file processes. That's much
more system and network overhead.

The following list shows applications that create many small files and have longer
migration preparation times:

-  Web servers serving many small thumbnails or image files
-  Caching servers that cache on disk with small files
-  Email servers with large archives of undeleted email
-  Ruby or Rails servers, which tend to create multiple small session files and not delete them
-  git repositories
-  Custom application servers that create but do not delete session files for each visitor

The *small files problem* makes the rsync less predictable and take longer.

#### How to migrate

Check your server applications against the preceding list. If your applications are on the list,
do what you can to prune unwanted small files before running the actual `rsync` command. If you
are running Ruby or Rails, assume the worst and search community forums for typical session and
cache file locations, as well as how to identify which ones you can safely delete. Consider
storing session data in MySQL with the following command:

    rake db:sessions:create

Truncate log files in **log/** to zero bytes with the following command:

    rake log:clear

If you are running a caching server that caches to disk instead of RAM, identify its file-storage
directory and prune aggressively. Check your file system for small session and cache files created
by custom applications. Again, prune with vigor. If migrating an email server with a Mail Delivery
Agent (MDA) such as Dovecot installed, have your email users clean their email archives of old
email first.

### Issue: Constantly changing files

You must copy again files that change between the start and end of an rsync with a follow-up rsync
for thorough server migration. This process extends the migration completion time.

Database servers are the most frequent culprits that update large data files between the start
and end of a migration. These changes force the system to copy the entire database file again
in a second rsync process that you might perform in a migration.

Some combinations of database structure and type tend to exacerbate this kind of problem. For
example, suppose you have a MySQL multi-table MyISAM database with many table files updated
within individual SQL transactions. In that case, many, if not all, table files might need
to be copied again during the second rescue-mode rsync operation.

Given that database files can be large, the implications of these updates for migration time
become clear. It's difficult to predict accurately how long a migration rsync might take.
After all, how can we predict what and how many SQL updates will occur between migration
start and finish?

#### How to migrate

If your database contains a lot of obsolete data, consider archiving that data and then pruning
it from the live database before migrating your server. MySQL, for example, allows you to archive
data by using the `mysqldump` script, after which you can delete obsolete data in the live
database. The large `mysqldump` output file containing the obsolete data does not extend a
second rsync because it won't have changed since the first pass.

Another option if you have applications writing to many files during resize is to set the
application into read-only mode immediately before running the `rsync` command. You can
usually set databases into temporary read-only mode. With other applications, your mileage
might vary. You can also prevent writes to multiple files by turning applications off, but
setting applications to read-only mode is usually the preferred option.

### Issue: Large, constantly updating files

Very large files (10 GB or more) updated during an rsync pose similar problems for
migration time as smaller, constantly updated files but on steroids. If your server
hosts files that are frequently written to, this section is for you.

A second rsync needs to completely re-copy these large, constantly updating files to capture
any updates made after a migration or resize process began. This extends migration time
considerably because of the size of that second rsync copy.

MySQL database servers that use the InnoDB data-file format write data to a single file
that grows very large indeed. Similarly, MySQL in InnoDB mode logs to a single, large log file.

An update to a large InnoDB MySQL data or log file, such as **/var/lib/mysql/ibdata1**, forces
the rsync process to re-copy the entire file in a second pass. If these files are large, then
the re-copy can take some time, which keeps the database offline.

Another source of large files is application logs, including logs produced by mail servers
and some web servers. Apache&reg; can produce log files that are 16Gb or larger, so it's not
safe to assume that Apache's default logging helps you avoid this large-file issue.

MySQL transaction logs can also grow large if you have turned on transaction logging. People
rarely do, and it's even rarer that they turn on transaction logging without running out of
disk space afterward. Still, it's wise to keep an eye out for this possibility.

#### How to migrate

As described previously, pruning databases of cruft might help reduce the total rsync time.
Archive and delete old or obsolete databases before attempting a migration.

Again, turning off database writes, if possible, reduces migration time. Turning off logging
can also help InnoDB databases.

If you have turned on MySQL transaction logging and the transaction log file is large, it's
worth turning it off, archiving, and then deleting it on the slice before starting an rsync
migration.

On mail servers, check the size of **/var/log/mail.log** or **/var/log/maillog** before migration.
Consider turning the mail server off before migration, especially if you have a backup mail server
to pick up the load.

Similarly, check how Apache is logging. If it's logging all requests to one file, check the size
of that file and consider archiving and deleting it or turning Apache off before starting the
migration process. The same advice applies to any other application that you know is writing to
a large log file.

For these applications and any others, review your `logrotate` policy (if you have one) to
check that it's keeping a check on your log file sizes. This saves you downtime during migration
and makes life with any Linux server easier.

### Pack your toolbag

Of course, it's difficult to track the files created after you set up the server. That is true
for applications that create session files. It pays to find and cull these large collections of little files.

You can identify the ten largest directories and files by issuing the following command as `root`:

    du -a / | sort -n -r | head -n 10

Change that final `10` to any other number to alter how many files and directories the search returns.
This command is a good middle-ground tool for identifying large directories of small files and large
files. If you only want to look for large files, try this large file finder (as `root`):

    find ~/ -mount -type f -ls|sort -rnk7 |head -30|awk '{printf "%10d MB\t%s\n",($7/1024)/1024,$NF}'

If you want to find large directories only, try this large directory finder (as `root`):

    du -x --max-depth=4 ~/|sort -rn|head -n30|awk '{printf "%10d MB\t%s\n",$1/1024,$2}'

### Technical details

Suppose your server does not match any of the common types we have examined above. In that
case, you can assess how its migration time might look if you consider your applications
with an understanding of how the migration (rsync) process works.

The typical first stage of a migration is a live rsync, which is basically a copy of the
server's entire file system. All applications are left running during this stage.

Here's where predicting migration time runs into its first uncertainty. Without detailed
knowledge of your usage of your server's file system, you can't accurately predict how
long the `file-copy` stage of an rsync will take to complete.

This unpredictability is true for the final directory on Linux file systems: the **/var/**
directory. It's called *var* because the size of the data it holds is *variable* and changes
while the server applications are running.

The second uncertainty is that the final phase of a migration includes a rescue mode (downtime)
component. During this phase, the process copies again any files updated after the live rsync
first phase began. The length of the downtime depends on the size and number of updated files.
Again, the rsync process cannot tell in advance how many updates applications like MySQL are
writing to data files, so it’s hard to predict the duration of this final *rescue-mode rsync*
copy.

The preceding information applies to a typical manual migration process. Our Cloud changes
the resize process to bring the server down for a single rsync, increasing downtime and
increasing the reliability of the sync.

### Summary

If you know how your applications are using disk space and writing to files you might be able
to judge if a migration will take longer than you want and make preparations accordingly. At
the very least, you can use your newfound migration knowledge to better schedule migrations
to fit your timing requirements.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 

