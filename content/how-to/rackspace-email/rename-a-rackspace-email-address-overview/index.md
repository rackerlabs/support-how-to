---
permalink: rename-a-rackspace-email-address-overview
audit_date: '2017-09-11'
title: Rename a Rackspace Email address overview
type: article
created_date: '2017-09-11'
created_by: William Loy
last_modified_date: '2018-12-06'
last_modified_by: Stephanie Fillmon
product: Rackspace Email
product_url: rackspace-email
---

You can rename an existing Rackspace Email address. This article provides an overview of the process, including information about backing up mail data, renaming the address, reconnecting to the address from your devices, and troubleshooting.

### Prerequisites

- **Applies to:** User or administrator
- **Difficulty:** Easy
- **Time needed:** Dependent on the amount of data backed up, otherwise approximately 20 minutes
- **Tools required:**  Email address password and access to the devices you want to connect

For more information about prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology/).


### Back up the mailbox

Before you rename your mailbox, export a copy of the mailbox from your [local mail client](/support/how-to/cloud-office-support-terminology). Creating a copy ensures that you won't lose any data when making configuration changes.

### Rename the email address

For instructions, see [Rename a Rackspace Email address](/support/how-to/rename-a-rackspace-email-address).

### Connect to the newly named address

After backing up the mail data locally, you are ready to connect to the renamed mailbox. Use the following instructions for your mail client:

#### Desktop clients

Choose one of the following articles based on your desktop operating system: 

- [Outlook 2016, 2013, and 2010 for Windows](/support/how-to/configure-a-renamed-email-address-on-outlook-for-windows)
- [Outlook 2016 for Mac](/support/how-to/configure-a-renamed-email-address-on-outlook-2016-for-mac)
- [Outlook 2011 for Mac](/support/how-to/configure-a-renamed-email-address-on-outlook-2011-for-mac)
- [Apple Mail](/support/how-to/configure-a-renamed-email-address-in-apple-mail)

#### Mobile clients

Choose one of the following articles based on your phone operating system: 

- [iPhone iOS](/support/how-to/configure-a-renamed-email-address-on-iphone-ios)
- [Android](/support/how-to/configure-a-renamed-email-address-on-android-devices)
- [Windows](/support/how-to/configure-a-renamed-email-address-configuration-for-windows-mobile-phone)

### Troubleshooting

This section provides several troubleshooting tips.

#### I renamed my Rackspace Email address, but now Outlook and my phone are not receiving messages. How do I fix this?

Your devices are not receiving mail because their configurations connect with the old email address.
If you log in at [apps.rackspace.com](https://apps.rackspace.com) with the new email address, you
can see that the mailbox is still receiving mail. Select your mail client in
[Desktop clients](#desktop-clients) or [Mobile clients](#mobile-clients) for specific instructions.

#### I followed the configuration instructions, and now I am missing mail! What happened?

In many cases, you can resolve this issue easily if you back up the local data before making changes.
If you are missing mail data, your old configuration might have stored data locally to your device.
You can import the data into the new configuration.

#### Will I get mail sent to the old email address at my new email address?

Yes. When you rename a mailbox, the system automatically creates an alias of the old email address
to direct email to your new email address.

#### Did my password change now that I have a new email address?

No. Although we recommend changing your password regularly to keep your account secure, the rename
process does not change the password.
