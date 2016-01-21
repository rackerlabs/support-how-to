---
node_id: 3772
title: Terminal Services in a Hosted Exchange Environment
type: article
created_date: '2013-11-12'
created_by: Milton Prado
last_modified_date: '2016-01-18'
last_modified_by: Kyle Laffoon
product: Microsoft Exchange
product_url: exchange
---

Terminal Services In A Hosted Exchange Environment
--------------------------------------------------

Terminal Services (Remote Desktop Services) provides a method for having
multiple users access Outlook from one centrally managed server, the
users connect to the server to access Outlook and view their mailboxes.
Terminal Services is a great tool and we get a lot of questions on it so
we wanted to take some time to discuss why it is not a good fit for our
Hosted Exchange environment.

Email and Apps clients who have used Terminal Services (Remote Desktop
Services) with our services have had very poor experiences in the past.
 From this we have learned the advanced technical issues associated with
users connecting to our environment from a server are not something we
can reasonably, effectively, or Fanatically resolve.  We need to ensure
we are a good fit for the client, setting both the client and ourselves
up for success; for this reason Rackspace does not support it.

**What about Outlook 2010 running in Cached Exchange Mode via Terminal
Services?**

Outlook 2010 is able to run in Cached Exchange Mode when connected via
Terminal Services (Remote Desktop Services) and will connect to our
Exchange environment.  However, we have had clients in the past who had
poor experiences with our Hosted Exchange when connecting via Terminal
Services.  It is the many potential complications associated with users
connecting via Terminal Server which makes it a poor fit for our
environment and therefore something Email and Apps does not support or
encourage.

If you still feel that Terminal Services may be a good fit for your set
up, we would recommend looking at [Microsoft's
TechNet](http://technet.microsoft.com/en-us/default.aspx) site for
further information including the following
[article](http://technet.microsoft.com/en-us/library/ff394406.aspx).

