---
permalink: rackspace-hosted-email-system-daily-sending-limit
audit_date: '2019-07-20'
title: Daily sending limit for Rackspace hosted email systems
type: article
created_date: '2015-02-10'
created_by: Sterling Mcneill
last_modified_date: '2019-07-20'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

This article discusses the sending limit parameters enforced on the
Rackspace hosted email systems. These restrictions are in place to protect the email service
and ensure a timely and reliable experience for all customers.

Rackspace enforces daily sending limits by using the following criteria:

- Limits are applied per email address.
- Sending limits are enforced on a 24-hour calendar day time period starting at 00:00:00 Eastern Daylight Time (EDT) and ending at 23:59:59 EDT.
- Sending limits are enforced on the total number of recipients during this period, not total messages.
- Email addresses are limited to 10,000 total recipients per 24-hour period.

  - For example, if you send a single message that contains 100 recipients, this single message counts as 100 total recipients against your daily sending limit. Alternatively, if you send 100 messages that contain 100 recipients each, this is counted as 10,000 recipients, which is your entire sending limit for that 24-hour period.


Automated email and spam are restricted at much lower limits to protect
the integrity of the system. Rackspace reserves the right to change any
limits without warning or notice to ensure the integrity of the email
service. For further information about limits for Rackspace hosted email systems,
visit the [Rackspace Postmaster](https://postmaster.emailsrvr.com/home) site.
