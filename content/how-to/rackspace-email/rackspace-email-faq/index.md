---
permalink: rackspace-email-faq
audit_date: '2021-02-26'
title: Rackspace Email FAQ
type: article
created_date: '2015-12-02'
created_by: Rackspace Support
last_modified_date: '2021-02-26'
last_modified_by: Carlos Arriaga
product: Rackspace Email
product_url: rackspace-email
---

Get quick answers to common questions about [Rackspace Email](https://www.rackspace.com/email-hosting/webmail).
{{<accordion title="What is the maximum mailbox storage?" col="in" href="accordion1">}}

The maximum size of a Rackspace Email box is 25 GB.
{{</accordion>}}
{{<accordion title="What is the maximum size for an attachment?" col="in" href="accordion2">}}

The maximum size for an attachment in the Rackspace environment is 50 MB.
{{</accordion>}}
{{<accordion title="How do I add a signature to my email?" col="in" href="accordion3">}}

You can find instructions for this in [Add a signature to Rackspace Email](/support/how-to/add-a-signature-to-rackspace-email).
{{</accordion>}}
{{<accordion title="How do I add an alias?" col="in" href="accordion4">}}

You can find instructions for this in [Add an alias with Rackspace Email](/support/how-to/adding-an-alias-with-rackspace-email).
{{</accordion>}}
{{<accordion title="How many group lists can I create?" col="in" href="accordion5">}}

You can create an unlimited number of group lists. Each group list can have an unlimited number of internal recipients
and a maximum of 250 external recipients.
{{</accordion>}}
{{<accordion title="How can I view my email online?" col="in" href="accordion6">}}

You can view and manage your email at [https://apps.rackspace.com](https://apps.rackspace.com/).
{{</accordion>}}
{{<accordion title="How do I change my password?" col="in" href="accordion7">}}

A Rackspace Email user can change their password through [Webmail](https://apps.rackspace.com/). For more
information, see [Change a Rackspace Email mailbox password](/support/how-to/change-rackspace-email-mailbox-password/).
{{</accordion>}}
{{<accordion title="What's the difference between IMAP and POP?" col="in" href="accordion8">}}

The main difference between IMAP and POP is that IMAP works with email directly on the server, while POP
fetches mail from the server and works with it on your local computer. For more information, see
[IMAP and POP mail protocol comparison](/support/how-to/imap-and-pop-mail-protocol-comparison).

We strongly recommend using an IMAP connection with Rackspace Email.
{{</accordion>}}
{{<accordion title="Where can I view my billing invoice?" col="in" href="accordion9">}}

You can view your billing invoice through the [Cloud Office Control Panel](https://cp.rackspace.com/Login.aspx?ReturnUrl=%2f).
After you log in, click **My account** in the upper-right corner and select **Billing**. Then, click **Invoice**
on the left-hand side of the page. You can then select any of your past invoices to view their history.
{{</accordion>}}
{{<accordion title="Help! I'm locked out of my control panel!" col="in" href="accordion10">}}

No worries. Just call our main support line so we can direct you to your dedicated support team for help: 1 800 961 4454.
{{</accordion>}}
{{<accordion title="How can I add an admin to my account?" col="in" href="accordion12">}}

For instructions, see [Manage email administrators with the Cloud Office Control Panel](/support/how-to/manage-email-administrators-with-the-cloud-office-control-panel).
{{</accordion>}}
{{<accordion title="How do I submit a ticket?" col="in" href="accordion13">}}

Log in to your control panel and click the **Support** menu at the top of the screen. From the menu, select **Tickets**.
To create a new ticket, click **New Ticket** and fill out the information describing your request or issue and submit.
You can also view the history of your most recent tickets.
{{</accordion>}}
{{<accordion title="How can I determine the Cloud Office system status?" col="in" href="accordion14">}}

To view the Cloud Office system status, go to <https://status.apps.rackspace.com/>.
{{</accordion>}}
{{<accordion title="How do TLS and SSL work in Cloud Office?" col="in" href="accordion15">}}

Transport Layer Security (TLS) and its predecessor, Secure Socket Layer
(SSL), are cryptographic protocols that provide security for
communications over networks. TLS and SSL encrypt the segments of
network connections at the application layer to ensure secure end-to-end
transit at the transport layer. For our purposes, they create an
encrypted tunnel through which we send plain text emails.

Cloud Office servers, by default, attempt a TLS connection for both
in and outbound email. For outgoing mail (any of our servers sending to
external MX servers), we perform TLS if the remote server advertises it.
When performing outgoing TLS, our servers are permissive
with the certificate. In other words, if the site is using an untrusted
or self-signed certificate, as long as it is a working certificate, we
should still accept it.

**Our outgoing SMTP servers use TLS in an opportunistic fashion.**
This means that our servers attempt to open an SMTP transaction
with the recipient server by using TLS. If TLS cannot connect successfully,
the communication defaults back to an unencrypted
transmission of the data, also referred to as *PLAINTEXT*.

Our servers respond to TLS and SSL requests to send mail to us encrypted.
{{</accordion>}}

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
