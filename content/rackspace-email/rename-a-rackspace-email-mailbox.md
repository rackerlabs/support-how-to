---
permalink: rename-a-rackspace-email-address/
title: Rename a Rackspace Email address
type: article
created_date: '2016-05-10'
created_by: Amber Melita
last_modified_date: '2017-09-08'
last_modified_by: Stephanie Fillmon
product: Rackspace Email
product_url: rackspace-email
---

This article explains how to rename a Rackspace Email address from the Cloud Office Control Panel.


### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Easy
- **Time needed:** Approximately 20 minutes
- **Tools required:** Control Panel access

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology).

### Before you begin

If the mailbox is set up in a [local email client](/how-to/cloud-office-support-terminology) profile such as Outlook or Apple Mail, you should export the user's local profile. After the email address is renamed, the local profile must be recreated. Exporting the profile before renaming the mailbox prevents the loss of mail data.

### Rename a Rackspace Email Address

1. Log into the [Cloud Office Control Panel](https://cp.rackspace.com/).

2. In the **Rackspace Email** section, click on the link for **Mailboxes**.

3. In the mailbox list, click the link for the email address which you would like to rename.

    <img src="{% asset_path rackspace-email/rename-a-rackspace-email-address/edit-mailbox-options.png %}" />

4. Click the **More** button, expanding the dropdown menu and select **Rename Email Address**.

5. A window will appear asking for the new email address. Enter the **NEW EMAIL** address name, then click **Rename Email Address**.

    <img src="{% asset_path rackspace-email/rename-a-rackspace-email-address/rename-pop-up-SC1.png %}" />

    - Note: `This email address is already taken`, means the address is already in use as an alias, group list, distribution list, or as a Microsoft Exchange mailbox on this domain. Try a different address.

6. A confirmation message will appear with the banner **Email Address Renamed!**, displaying the old email address and the new email address. Click **OK**.

    <img src="{% asset_path rackspace-email/rename-a-rackspace-email-address/success-message.png %}" />

You have successfully renamed a Rackspace Email address!


### Update devices to connect to the renamed email address

Once the email address has been renamed, you must update all devices such as desktop computers and mobile phones to connect to the renamed mailbox. See [Renamed Rackspace Email address setup guide](/how-to/renamed-rackspace-email-address-setup-guide/) for next steps.

Note: We recommend logging into [apps.rackspace.com](https://apps.rackspace.com/index.php) with the new mailbox address before configuring devices. If you are unable to log in, updated the mailbox password before continuing. See [Change a Rackspace Email mailbox password](/how-to/change-rackspace-email-mailbox-password/#change-a-password-through-cloud-office-control-panel) if you are unable to log into the mailbox.
