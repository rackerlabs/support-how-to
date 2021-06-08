---
permalink: run-additional-passes-with-migrationwiz
audit_date: '2021-02-18'
title: Run additional passes with MigrationWiz
type: article
created_date: '2013-12-04'
created_by: Milton Prado
last_modified_date: '2021-02-18'
last_modified_by: Carlos Arriaga
product: Rackspace Email
product_url: rackspace-email
---

When you migrate email to Rackspace, the new Rackspace mailboxes'
migration might not be complete after the first migration pass. This
incomplete migration usually occurs during the *switch over*
phase when changing MX records. During that time, email might continue
to be delivered to the environment from which you are migrating.

To mitigate this issue, you can run additional migration passes. These
extra passes capture differential data and migrate any new items that
might not have been available during the first migration.

### Details about additional passes

Every migrated mailbox receives up to 10 passes at no additional
charge. Following are some additional details about migration passes:

- MigrationWiz&reg; does not duplicate items that the service itself
  migrated. No matter how many times you submit a migration, you 
  should not encounter duplicates.

- MigrationWiz does not delete items during delta migration passes. 
  For example, an email migrated during a first migration pass and later 
  deleted at the source remains in the destination Rackspace mailbox 
  during additional passes.

- MigrationWiz does not update items during additional migration passes&mdash;it
  migrates only items not migrated previously. For example, if an email 
  migrated during a first migration pass and was later modified at the
  source, the process does not update that email in the destination Rackspace mailbox
  during an additional migration pass.

- If you move emails to different source sub-folders during a migration,
  those emails might appear in a second folder after an additional pass.
  For example, suppose that MigrationWiz migrated emails in source folder A,
  but later those emails were moved to source folder B. MigrationWiz
  remembers which emails it migrated from folder A. However, because items
  moved to a new source folder B, MigrationWiz migrates these emails
  to folder B in the destination Rackspace mailbox.

### Run additional passes when migrating with MigrationWiz

1. Log in to the migration portal through the link you received when
   you signed up for MigrationWiz.

    The link looks similar to the following one: 
    **https://rackspace.selfmigration.com/Public/Default.aspx?t=MjEyMTRiMGYtOW**.
   After you log in, you are directed to the page that you were previously on.

2. To view all migration projects, click the **My migrations** link in
   the upper-right corner of the page.

3. In the **Actions** column of the **Migrations Projects** table, click
   the **Migrate New Items** icon. The **Status** changes to
   `Processing`, indicating that the pass has begun.

{{<image src="picture1.png" alt="" title="">}}

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact). 
