---
permalink: set-up-a-mail-relay
audit_date: '2021-05-12'
title: 'Set up a Mail Relay'
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2021-05-12'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

Because the system dynamically assigns IP addresses in Cloud Servers, the IP
space is unfit for email use. This means that major blacklist providers declare
that mail systems should not accept email coming from cloud servers.
For this reason, email from cloud servers might not reliably get through to your
intended recipients.

To send email reliably from your server, we recommend you
sign up for a [Rackspace Email account](https://www.rackspace.com/email-hosting),
or use any email account that allows you to send email through secure SMTP
authentication. You can then configure your server to send email through
that account. This way, you can still send mail from the server and avoid these
issues.

This article helps with that setup, showing you how to set up a relay with
Rackspace Email by using a smarthost. The same basic steps work for most email
providers. This solution targets system-generated emails, like sign-up
scripts, password confirmation pages, and so on that you cannot otherwise
easily route through an outside mail provider. Depending on your email
needs, you might need to configure an account with a third-party like
Mailgun&reg;, Mailchimp&reg;, or SendGrid&reg;.

Managed Support customers can contact support and ask us to do this for
you. Provide the email server and the username and password for the
account that you want to send mail. Other Cloud Servers customers
can set up the relay by following the steps in this article.

### Set up a relay

Perform the folloinwg dteps to set up an email relay:

1. Install postfix and SASL tools.

   For Red Hat&reg; Enterprise Linux&reg; or CentOS&reg;:

        yum install postfix cyrus-sasl-plain cyrus-sasl-md5

   For Ubuntu&reg; operating systems:

        aptitude update
        apt-get install postfix libsasl2-modules

2. Configure postfix.

   a. Add the following lines to **/etc/postfix/main.cf**:

        relayhost = secure.emailsrvr.com
        smtp_sasl_auth_enable=yes
        smtp_sasl_password_maps=hash:/etc/postfix/sasl_passwd
        smtp_sasl_mechanism_filter = AUTH LOGIN
        smtp_sasl_security_options =

   b. Add the Rackspace Email username and password to
      **/etc/postfix/sasl\_passwd** by running these commands:

        echo 'secure.emailsrvr.com username@domain.com:secretpassword' > /etc/postfix/sasl_passwd
        chmod 600 /etc/postfix/sasl_passwd
        postmap /etc/postfix/sasl_passwd

   c. Restart Postfix and check the mail logs. You should see something like
      the following output:

        Nov 23 10:46:05 web2 postfix/qmgr\[24259\]: 5497F3708AA:
        from=<orders@myawesomeecommercesite.com>, size=1762, nrcpt=1 (queue active)
        Nov 23 10:46:05 web2 postfix/smtp\[1343\]:497F3708AA:to=<customer@someisp.com>,
        relay=secure.emailsrvr.com\[98.129.185.2\]:25, delay=0.31, delays=0.02/0.01/0.19/0.1,
        dsn=2.0.0, status=sent (250 2.0.0 Ok: queued as B5E3D2D0476)

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
