---
node_id: 84
title: Setting Up IMAP Or POP - Windows Mail
type: article
created_date: '2011-03-09'
created_by: Rackspace Support
last_modified_date: '2016-01-15'
last_modified_by: Stephanie Fillmon
product: Rackspace Email
product_url: rackspace-email
---

If you would like to learn more about the differences between Post
Office Protocol (POP) and Internet Message Access Protocol (IMAP), see
the help topic, [POP vs.
IMAP](/how-to/imap-and-pop-mail-protocol-comparison).

For increased security, we recommend that you use our Secure Sockets
Layer (SSL) servers as detailed below.

*NOTE: If your internal system configurations require non-SSL ports, see
the [Email Server
Settings](http://www.rackspace.com/apps/support/portal/1088) page for
our full list of available servers and ports.*

To set up Windows Mail for IMAP, perform the following steps:

1.    In Windows Mail, click **Tools** &gt; **Accounts**.

2.    Click **Add**.

3.    Click **Next**.

4.    Enter your first and last name. This is the name that will appear
in the **From** field of messages you send.

5.    Click **Next**.

6.    Enter your entire email address (for example,
*myname@mydomain.com*).

7.    Click **Next**.

8.    Enter the following information:

-   **Incoming e-mail server type**&mdash;Select **IMAP** from the list.
-   **Incoming mail (POP3 or IMAP) server**&mdash;Enter the secure server
    name:

    **secure.emailsrvr.com**

-   **Outgoing e-mail server (SMTP) name**&mdash;Enter the secure server name:

    **secure.emailsrvr.com**

-   Select the **Outgoing server requires authentication** check box.


![ Server addresses
form](http://c458714.r14.cf2.rackcdn.com/EA_ServerSettings_01.png)

9.    Click **Next**.

10\. Enter your entire email address (for example,
*myname@mydomain.com*).

11\. Enter the password for your email account.

12\. Leave the **Remember password** check box selected, if desired.

13\. Click **Next**.

14\. In the Congratulations window, if you don&rsquo;t want to download all
your messages, select the check box **Do not download my e-mail at this
time**. Otherwise, you can leave this setting unselected.

15\. Click **Finish**.

16\. The account you just created will be selected. Click the
**Properties** button.

17\. Click the **Advanced** tab.

18.  Select both **This server requires a secure connection (SSL)**
check boxes.

19\. In the **Outgoing mail (SMTP)** field, enter the secure outgoing
port: **465**

![ Port addresses
form](http://c458714.r14.cf2.rackcdn.com/EA_AdvancedSettings_02.png)

20\. Click **OK**.

21\. Click **Close**.

To set up Windows Mail for POP, perform the following steps:

1.    In Windows Mail, click **Tools** &gt; **Accounts**.

2.    Click **Add**.

3.    Click **Next**.

4.    Enter your first and last name. This is the name that will appear
in the **From** field of messages you send.

5.    Click **Next**.

6.    Enter your entire email address (for example,
*myname@mydomain.com*).

7.    Click **Next**.

8.    Enter the following information:

-   **Incoming e-mail server type**&mdash;Ensure that **POP3** is selected.
-   **Incoming mail (POP3 or IMAP) server**&mdash;Enter the secure server
    name:

    **secure.emailsrvr.com**

-   **Outgoing e-mail server (SMTP)**&mdash;Enter the secure server name:

    **secure.emailsrvr.com**

-   Select the **Outgoing server requires authentication** check box.


![ Server address
form](http://c458716.r16.cf2.rackcdn.com/EA_SetupServers_01.png)

9.    Click **Next**.

10\. Enter your entire email address (for example,
*myname@mydomain.com*).

11\. Enter the password for your email account.

12\. Leave the **Remember password** check box selected , if desired.

13\. Click **Next**.

14\. In the Congratulations window, if you don&rsquo;t want to download all
your messages, select the check box labeled **Do not download my e-mail
at this time**. Otherwise, you can leave this setting unchecked.

15\. Click **Finish**.

16\. The account you just created will be selected. Click **Properties**.

17\. Click the **Advanced** tab.

18\. Select both **This server requires a secure connection (SSL)** check
boxes.

19\. In the **Outgoing mail (SMTP)** field, enter the secure outgoing
port: **465**

![ Port numbers
form](http://c458716.r16.cf2.rackcdn.com/EA_AdvancedSettings_02.png)

20\. A POP connection typically removes the email messages from the email
server after you have downloaded new messages to your computer.  If you
would like to leave copies on the server, select the **Leave a copy of
messages on server** check box. To avoid exceeding your account&rsquo;s
storage limits, indicate whether the server should delete messages after
a certain number of days and/or delete messages when you manually delete
them from the Deleted Items folder.

21\. Click **OK**.

22\. Click **Close**.

