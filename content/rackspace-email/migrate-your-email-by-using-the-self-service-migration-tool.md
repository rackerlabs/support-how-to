---
permalink: migrate-your-email-by-using-the-self-service-migration-tool/
audit_date: '2016-09-01'
title: Migrate your email by using the Self-Service Migration Tool
type: article
created_date: '2013-03-18'
created_by: Mawutor Amesawu
last_modified_date: '2017-06-29'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

Use the Self-Service Migration Tool provided in the Cloud Office Control Panel to copy email data from your
current provider to Rackspace Email, Rackspace Hosted Exchange, or Rackspace Office 365.

### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Moderate
- **Tools required:** Cloud Office Control Panel access, DNS host Administrator access

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).

**Note**: Some of the features that are present in the full version of
MigrationWiz (at migrationwiz.com) are not available within the
Self-Service Migration Tool. If you want to use the full version, see
[Accessing the full version of MigrationWiz](/how-to/accessing-the-full-version-of-migrationwiz).


### Create mailboxes

Before you begin your migration, you need to create your mailboxes on
the Rackspace environment. The migration tool does not create your
mailboxes for you.

Use the following resources to help you create your mailboxes:

- Rackspace Email: [How to add Rackspace Email mailboxes](/how-to/add-rackspace-email-mailboxes)
- Microsoft Exchange: [How to add Microsoft Exchange mailboxes](/how-to/adding-microsoft-exchange-mailboxes-0)
- Rackspace Office 365:
  - [Add Office 365 Licenses](/how-to/add-an-office-365-license/)
  - [Add users](https://support.office.com/en-US/article/Add-users-individually-or-in-bulk-to-Office-365-Admin-Help-1970f7d6-03b5-442f-b385-5880b9c256ec)
  - [Create shared mailboxes](https://support.office.com/en-us/article/Create-shared-mailboxes-in-Office-365-871a246d-3acd-4bba-948e-5de8be0544c9)

Note: You will need the email address, and password for every mailbox you create for the self-migration tool later.

### Migration requirements

**DO NOT** cancel your source mail server service until you have confirmed with all users that they have their email data.

1. Gather all email addresses, usernames, and passwords for mailboxes on both your source (current) and destination (Rackspace Email/Rackspace Hosted Exchange) mail servers. This information is required for migrating email data with the Self-Service Migration Tool. For Office 365, you can use admin credentials to verify your migration.

   **Note:** The username for a mailbox is typically the same username you would use to log in to the Outlook Web App (OWA) or webmail in a web browser. For Rackspace, the username is the full email address

2. Ensure that you can update your email DNS records at your current DNS host. If you do not know where to update your email DNS records, read [Find your DNS host](/how-to/find-your-dns-host/).  You can find information about the best DNS records for Rackspace in [Set up DNS records for Cloud Office email ](/how-to/set-up-dns-records-for-cloud-office-email).

3. Review the list of [items migrated during a Cloud Office migration](/how-to/items-migrated-during-an-cloud-office-migration/).

4. Ensure that the size of your source mailbox does not exceed 70 percent of your new mailbox's capacity.

5. Copy email from the source server so that no data is lost. Some email messages might be corrupt and not migrate. If you want to back up your mailbox locally, see the "Export data into a .PST file" section in the article, [Migrating Exchange to Exchange via Outlook](/how-to/migrating-exchange-to-exchange-via-outlook/).

6. Inform users to refrain from changing their passwords during the migration process.

Note: Users must reconfigure Outlook, [mail clients](/how-to/cloud-office-support-terminology/), and mobile devices, after the migration is complete to connect to their mailbox at Rackspace. Users can visit https://emailhelp.rackspace.com for configuration instructions.

Warning: For more information about the migration preparation required for POP, IMAP, and Exchange servers, see [Prepare for POP, IMAP, and Exchange mail servers for migration](/how-to/prepare-pop-imap-exchange-mail-servers-for-migration/)



### Migrate your email

1.  Log into your [Cloud Office Control Panel](cp.rackspace.com).
2.  Under the **Domains** section at the bottom of the screen click **Email Migrations** in the far right column.
3.  Click **Start Migration Now**.

    - You will be redirected to the MigrationWiz portal.
    - You can follow the remaining instructions or follow this [MigrationWiz video tutorial](https://www.youtube.com/watch?v=AOvY0gOY1ao)

4.  Enter a contact email address that will NOT be migrating in the **Email Address** box, agree to
    the Terms of Service (BitTitan is MigrationWiz), and then click
    **Login**.

    <!--add screen shot file MigWizSC1.png-->

    A notification informs you that an email with a secure link has been
    sent to your email address. Follow the instructions in the email to
    log in to the MigrationWiz portal.

5.  Find the server address for your existing email service.

    -   IMAP: If you use Outlook, the incoming server address can be
        found under your account settings. It typically looks like
        **mail.domain.com** or **imap.domain.com**.
    -   Webmail: Your server address is a portion of the webmail URL.
        For example, if your webmail address is
        `https://webmail.domain.com`, then your server address is
        **webmail.domain.com**.
    -   Exchange: Your Outlook Web Access (OWA) address is the best way
        to connect. Check your mail via an Internet browser. It
        typically looks like `https://mail.domain.com/owa` or
        `https://mail.domain.com/exchange`.

    **Note:** You may also use your server's IP address in place of any host names and server addresses.

6.  Click **Next**.
7.  Enter your source and destination server configuration settings.

    - Select the source server system type and enter the server address. For IMAP, you must also enter a port number. IMAP ports are **993** (SSL) and **143** (non-SSL).
    - For the destination server, select the service that you are migrating to, **Rackspace Email**, **Rackspace Exchange 2016**, or **Microsoft Office 365**.
    - Click **Next**.    

    **Note:** : If you are migrating to a hybrid solution (both Rackspace Email and Rackspace Exchange), you need to create more than one migration project. Step 12 explains how to start a new project when the current one is completed.

    <img src="{% asset_path rackspace-email/migrate-your-email-by-using-the-self-service-tool/8-2_0.png %}" width="450" height="328" />

8.  Enter the email address, username and password for the source and
    destination mailboxes. You can migrate multiple mailboxes by
    clicking the + symbol or by entering your mailbox information in
    the spreadsheet provided. Then, click **Next**.

    <img src="{% asset_path rackspace-email/migrate-your-email-by-using-the-self-service-tool/9-2_0.png %}" width="450" height="311" />

    The next step is a trial migration to ensure that connectivity is
    successful to both the source and destination mailboxes based on the
    information that you entered.


9.  Click **Next** to begin the trial migration.

10.  When the status changes to **Ready for migration**, click **Next**.

      Note: If the status shows **Failed**, click the red button labeled **More info**. Next select **Solve Issue** for instructions on resolving the issue.

11. On the Ready to migrate page, click **Next** to begin the migration of your email data.

    <img src="{% asset_path rackspace-email/migrate-your-email-by-using-the-self-service-tool/13-2_0.png %}" width="450" height="302" />

    Several factors influence how long your email takes to migrate.
    For a list of possible factors, see [Factors that affect the
    duration of email
    migrations](/how-to/factors-that-affect-the-duration-of-email-migrations).

12. After your migration has completed, you can run the migration tool
    again by clicking **Migrate new items.** For more information about
    running additional migrations, see [Running additional passes with
    MigrationWiz](/how-to/running-additional-passes-with-migrationwiz).
    Otherwise, click **Finish**.

    <img src="{% asset_path rackspace-email/migrate-your-email-by-using-the-self-service-tool/14-2_0.png %}" width="450" height="335" />

13. To begin a new migration project, click **My Migrations** in the top-right corner of your migration portal. On the My Migrations page, click **Start new migration**.

    <img src="{% asset_path rackspace-email/migrate-your-email-by-using-the-self-service-tool/15-2_0.png %}" width="450" height="243" />
