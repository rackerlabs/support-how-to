---
permalink: renamed-email-address-configuration-for-outlook-2011-on-mac/
audit_date: '2017-08-22'
title: Renamed email address configuration for Outlook 2011 on Mac
type: article
created_date: '2017-08-23'
created_by: William Loy
last_modified_date: '2017-08-23'
last_modified_by: William Loy
product: Rackspace Email
product_url: rackspace-email
---

Instructions for setting up a renamed email address in Outlook 2011 for Mac.

### Prerequisites

- **Applies to:** User
- **Difficulty:** Easy
- **Time needed:** Approximately 20 minutes
- **Tools required:**  Mailbox password and access to the devices you want to connect

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology/).

Once you have renamed a Rackspace Email address, your devices such as desktop computers, laptops, and mobile phones will not receive new email until you configure them to connect to the new email address.

Warning: If the old email address connects via POP, you will want to migrate the POP data to an IMAP account so no data is lost in the rename configuration. Follow the instructions in [Migrate from a POP server to IMAP in Outlook for Mac](/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook-2011-mac/).


#### Outlook 2011 for Mac


1. Quit **Outlook 2011** by right-clicking the icon and selecting *Quit*.

2. Open **Outlook 2011** while holding down the **Option** key. This will open the **Microsoft Database Utility**.

3. We will now create a new identity by click the **+** sign.

4. Once you have named the new identity, be sure to set it as the default identity. Highlight the new identity, then click the **Settings Gear**, and select **Set as Default**.

5. Close the **Microsoft Database Utility** and open **Outlook 2011**.

6. Once **Outlook 2011** is open, select **Outlook** in the upper right-hand corner and select **Preferences** from the drop down menu.

7. In the next prompt, select **Accounts**.

8. Within the Accounts dialog, select **Other Email**.

9. Enter the following requested settings:

    - **Email Address:** renamed@yourdomainexample.com (*Use the new mailbox address here*)
    - **Password:** Enter your mailbox password.
    - **User name:** renamed@yourdomainexample.com (*Use the new mailbox address here*)
    - **Type:** IMAP
        - *Incoming Server Settings:*
            - **Incoming Server:** secure.emailsrvr.com
            - **Override default port:** Checked
            - **Use SSL to connect (recommended):** Checked
            - **Incoming Server Port:** 993
        - *Outgoing Server Settings:*
            - **Outgoing Server:** secure.emailsrvr.com
            - **Override default port:** Checked
            - **Use SSL to connect (recommended):** Checked
            - **Outgoing Server Port:** 465

10. Click the **More Options** button, and enter the following settings:

    - **Authentication:** Use Incoming Server information
    - **Unqualified domain:** Leave this field blank
    - Click **OK**
11. Close the accounts window and click **Send/Receive** in Outlook.

You have now successfully configured Outlook 2011 to connect to the renamed mailbox.

Warning: If you see items missing in the new Outlook account, you will need to import the data from the old profile. See [Migrate from a POP server to Rackspace Email IMAP](/how-to/migrating-from-a-pop-server-to-rackspace-email-imap-using-outlook-2011-mac/).
