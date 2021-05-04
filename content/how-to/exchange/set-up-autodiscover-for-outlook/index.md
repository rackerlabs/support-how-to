---
permalink: set-up-autodiscover-for-outlook
audit_date: '2019-04-02'
title: Set up Autodiscover for Outlook
type: article
created_date: '2016-10-25'
created_by: Aaron Medrano
last_modified_date: '2019-04-02'
last_modified_by: William Loy
product: Microsoft Exchange
product_url: exchange
---


For certain features in your Microsoft&reg; Exchange&reg; account to work with Outlook&reg;, you must configure your domain name with an [Autodiscover](/support/how-to/dns-record-definitions/#cname-record) record that points to the Rackspace Cloud Office Autodiscover server.

**Note:** If you are troubleshooting issues with connecting Outlook to Exchange by using Autodiscover, reference [Autodiscover connection issues](/support/how-to/autodiscover-connection-issues/) or [Microsoft account association issues](/support/how-to/microsoft-account-association-issues/) for more information.


### Outlook features enabled by using Autodiscover

Use Autodiscover to set up Outlook to enable the following Exchange features:

- View free or busy details for calendar scheduling

- Out of office setup and management through Outlook

- Offline address book synchronization

- Share calendars, contacts, and folders by using a sharing invitation within Outlook

- Access Public Folders in Exchange 2013 and Exchange 2016

- Automatic mapping of shared mailboxes

For information about configuring Autodiscover for your domain, see [DNS record definitions](/support/how-to/dns-record-definitions/#cname-record).

### Test Autodiscover functionality in Outlook

To determine if Autodiscover is configured properly, use the **Test E-mail AutoConfiguration** tool in Outlook by following these steps:

1. Open Outlook and then minimize the Outlook application.

2. While Outlook is running, press and hold down the **CTRL** key, and then right-click the Outlook icon in the system tray or in the notification area in the lower right corner of the screen.

3. From the menu, select **Test E-mail AutoConfiguration**.

    {{<image src="autodiscover1.png" alt="" title="">}}

4. Uncheck the **Use Guessmart** and **Secure Guessmart Authentication** checkboxes. **Use Autodiscover** is the only checkbox that is selected.

5. Enter your email address and password.

6. Click **Test**.
    
    {{<image src="autodiscover2.png" alt="" title="">}}

   As shown in the preceding figure, the **Results** tab shows that Autodiscover is detected.
   
   You can also click the **Log** tab to see the following lines:

      - `Redirect Check`

      - `Autodiscover to https://secure.autodiscover.emailsrvr.com/autodiscover/autodiscover.xml starting`

      - `Autodiscover to https://secure.autodiscover.emailsrvr.com/autodiscover/autodiscover.xml Succeeded (0x00000000)`
