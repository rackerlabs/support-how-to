---
permalink: set-up-rackspace-email-with-thunderbird
audit_date: '2021-06-02'
title: Set up Rackspace Email with Thunderbird
type: article
created_date: '2014-05-20'
created_by: Ian Avery
last_modified_date: '2021-06-02'
last_modified_by: Ana Corpus
product: Rackspace Email
product_url: rackspace-email
---

This article shows you how to configure your Rackspace Email account by using
your Thunderbird&reg; email client.

1. Open Thunderbird.
2. On the **Welcome** screen, click **Email**.

{{<image src="thunderbird-create-account.png" alt="" title="">}}

3. In the **Mail Account Setup** dialog box, enter the following information: 

    - **Your name**: Enter the name you want to appear in the **From** field of messages you send. 

    - **Email address**: Enter your email address (for example, **yourName@example.com**). 

    - **Password**: Enter the password of the email account. 

4. If Thunderbird cannot automatically configure your account, the dialog box expands to show new fields.
5. Enter the following values in the **Incoming** column: 

    - **IMAP** 

    - **Server hostname**: `secure.emailsrvr.com`

    - **Port**: `993` 

    - **SSL**: `SSL/TLS` (This value should automatically populate when you enter the port number.) 

    - **Authentication**: `Autodetect` 

6. Enter the following values in the **Outgoing** column: 

    - **Server hostname**: `secure.emailsrvr.com` 

    - **Port**: `465`

    - **SSL**: `SSL/TLS` (This value should automatically populate when you enter the port number.) 

    - **Authentication**: `Autodetect`

7. Click **Re-test**.

    {{<image src="thunderbird-dialog-fields.png" alt="" title="">}}

    The **Authentication** fields should change to **Normal Password**, and the following
    message should appear in the middle of the screen: 

        The following settings were found by probing the given server. 

8.  Click **Done**. 

You have configured your mailbox in Thunderbird and should start seeing mail populating the **Inbox**. 

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
