---
permalink: terminal-services-in-a-hosted-exchange-environment
audit_date: '2020-11-18'
title: 'Terminal Services in a Hosted Exchange Environment'
type: article
created_date: '2013-11-12'
created_by: Milton Prado
last_modified_date: '2020-11-18'
last_modified_by: Rose Morales
product: Microsoft Exchange
product_url: exchange
---

Terminal Services (Remote Desktop Services) provides a method for
multiple users to access Outlook from one centrally-managed server.
Users connect to that server to access Outlook and view their mailboxes.
Terminal Services is useful in some configurations, but
it is not a good fit for our Hosted Exchange environment.

### Not supported for Hosted Exchange

In the past, Email and Apps clients who use Terminal Services (Remote Desktop
Services) with our services have had very poor experiences.
From this, we learned that the technical issues associated with
users connecting to our environment from a server are not something we
can reasonably, effectively, or fanatically resolve. We need to ensure that
we are a good fit for the client, setting both the client and ourselves
up for success. For this reason, Rackspace does not support it.

### Not recommended for Outlook 2010 running in Cached Exchange Mode through Terminal Services

Outlook 2010 can run in Cached Exchange Mode when connected through
Terminal Services (Remote Desktop Services) and connect to our
Exchange environment. However, clients in the past have had
poor experiences with Hosted Exchange in cached exchange mode when connecting through Terminal
Services. Many potential complications associated with users
connecting through Terminal Server make it a poor fit for our
environment. Therefore, Email and Apps does not support or
encourage this practice.

If you still feel that Terminal Services might be a good fit for your business,
we recommend researching the topic at [Microsoft's TechNet](https://technet.microsoft.com/en-us/default.aspx) site for
further information, including the
[Plan for Outlook 2010](https://technet.microsoft.com/en-us/library/ff394406.aspx) article.
