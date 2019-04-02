---
permalink: set-up-autodiscover-for-outlook/
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


You must configure your domain name with an [Autodiscover](https://support.rackspace.com/how-to/dns-record-definitions/#cname-record) record that points to the Rackspace Cloud Office Autodiscover server, in order for certain features on your Microsoft&reg; Exchange&reg; account to work with Outlook&reg;.

**Note:** If you are troubleshooting issues connecting Outlook to Exchange by using Autodiscover please reference [Autodiscover connection issues](https://support.rackspace.com/how-to/autodiscover-connection-issues/) or [Microsoft account association issues](https://support.rackspace.com/how-to/microsoft-account-association-issues/) for information on troubleshooting Autodiscover connections.


### Outlook features enabled by using Autodiscover

Set up Outlook by using Autodiscover to enable the following Exchange features:

- View free or busy details for calendar scheduling

- Out of office setup and management through Outlook

- Offline address book synchronization

- Sharing calendars, contacts, and folders using a sharing invitation within Outlook

- Access to Public Folders in Exchange 2013 and Exchange 2016

- Automatic mapping of shared mailboxes

See [DNS record definitions](https://support.rackspace.com/how-to/dns-record-definitions/#cname-record) for information on configuring Autodiscover for your domain.

### Test Autodiscover functionality in Outlook

To determine if the Autodiscover service is configured properly,  use the **Test E-mail AutoConfiguration** tool in Outlook.

1. Open Outlook and then minimize the Outlook application.

2. While Outlook is running, press and hold down the **CTRL** key, and then right-click the Outlook icon in the system tray or notification area on the lower right corner of the screen.

3. From the menu, select **Test E-mail AutoConfiguration**.

    <img src="{% asset_path exchange/set-up-autodiscover-for-outlook/autodiscover1.png %}" alt="" />

4. Uncheck the **Use Guessmart** and **Secure Guessmart Authentication** check boxes. Autodiscover is the only check box that is selected.

5. Enter your email address and password.

6. Click test.

    The result tab shows that Autodiscover is detected.
    <img src="{% asset_path exchange/set-up-autodiscover-for-outlook/autodiscover2.png %}" alt="" />


    You can also click the **Log** tab for the following lines:

      - `Redirect Check`

      - `Autodiscover to https://secure.autodiscover.emailsrvr.com/autodiscover/autodiscover.xml starting`

      - `Autodiscover to https://secure.autodiscover.emailsrvr.com/autodiscover/autodiscover.xml Succeeded (0x00000000)`
