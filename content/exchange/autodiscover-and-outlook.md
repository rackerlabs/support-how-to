---
permalink: setting-up-autodiscover-with-outlook/
audit_date:
title: Setting up Autodiscover with outlook
type: article
created_date: '2016-10-25'
created_by: Aaron Medrano
last_modified_date: '2016-11-24'
last_modified_by: Nate Archer
product: Microsoft Exchange
product_url: exchange
---


In order for your Exchange account to work with Outlook, you need to set up your domain name with a special DNS record that points to Rackspace Cloud Office's Autodiscover server.


### Autodiscover outlook features

You need to set up the Autodiscover record for your domain name in order to have the following Exchange features:

- Free/Busy information for Calendar Scheduling

- Out of Office setup and management through Outlook.

- Offline Address Book synchronization.

- Sharing Calendars, Contacts, and Folders using Sharing invitation within Outlook.

- Access to Public Folders in Exchange 2013 and Exchange 2016.

- Automapping of Shared Mailboxes

**Note:** You can use the Outlook Web App to set-up out of office automatic replies without Autodiscover

### Set up the autodiscover DNS record

To set-up the special autodiscover DNS record, see [Set up DNS records for Cloud Office email and Skype for Business](https://support.rackspace.com/how-to/set-up-dns-records-for-cloud-office-email-and-skype-for-business/#autodiscover-records).

#### Text autodiscover functionality in Outlook

To determine if the Autodiscover service is configured properly, you may use the **Test E-mail AutoConfiguration tool** in Outlook.

1. While Outlook is running, hold down the CTRL key, right-click the Outlook icon in your system tray or notification area on the lower right corner of the screen.

2. Select **Test E-mail AutoConfiguration**.
<![autodiscover1.jpg]>

3. Enter your email address and password.

4. Uncheck the boxes next to **Use Guessmart** and **Secure Guessmart Authentication**. **Use Autodiscover** must be checked

5. Select **Test** to run the test.

<![autodiscover2.jpg]>


You can also check your outlook troubleshooting logs for the following: 

- `Redirect Check`

- `Autodiscover to https://secure.autodiscover.emailsrvr.com/autodiscover/autodiscover.xml starting`

- `Autodiscover to https://secure.autodiscover.emailsrvr.com/autodiscover/autodiscover.xml Succeeded (0x00000000)``

<![autodiscover3.jpg]>
