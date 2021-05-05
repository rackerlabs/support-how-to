---
permalink: using-outlook-cached-mode-with-rackspace-hosted-exchange
audit_date: '2019-11-04'
title: Use Outlook Cached Mode with Rackspace Hosted Exchange
type: article
created_date: '2015-01-15'
created_by: Kevin Richey
last_modified_date: '2019-11-04'
last_modified_by: William Loy
product: Microsoft Exchange
product_url: exchange
---

Outlook&reg; 2010 and 2013 have a feature called Cached Exchange Mode that keeps a copy of your email on your computer. The copy is faster for Outlook to load and search, and you can
access it when your computer is not connected to the Internet.

Outlook 2013 for Windows&reg; lets you choose how much email to keep in the cache. By default, it stores email for up to twelve months on your machine. To adjust the amount of email saved, adjust the **Mail to keep offline** slider in Outlook settings by using the following steps:

1.  Click **File** > **Account Settings** > **Account Settings**.
2.  In the Account Settings window, double-click your **Microsoft Exchange account** on the email tab.
3.  In the Change Account window, drag the **Mail to keep offline** slider to the desired number of months.
4.  Click **Next** and then **Finish**.

For more information, see the Microsoft support article,
[Only a subset of your Exchange mailbox items are synchronized in Outlook 2013](https://support.microsoft.com/kb/2733062).

We do not recommend using Cached Exchange Mode as a data backup solution as things can become corrupted and unusable. Rackspace offers an [Email Archiving](/support/how-to/rackspace-email-archiving/) solution, which offsets the risk of relying on a local cache backup.
