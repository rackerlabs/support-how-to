---
permalink: set-up-dns-records-for-cloud-office-email-and-skype-for-business/
audit_date:
title: Set up DNS records for Cloud Office email and Skype for Business
type: article
created_date: '2014-08-15'
created_by: Cody Jobson
last_modified_date: '2017-02-22'
last_modified_by: Stephanie Fillmon
product: Microsoft Skype for Business
product_url: skype-for-business
---

To complete the configuration of your Rackspace Email, your hosted
implementation of Microsoft Exchange, or your hosted implementation of
[Microsoft Skype for Business](#set-up-dns-records-for-hosted-skype-for-business), you must set up DNS records. If incorrect
DNS settings are associated with your domain, you will experience
problems using these applications.

### Initial Domain (DNS) Configuration to Send/Receive Email

DNS tells the world how email should be handled and routed for your domain.
This guide will allow you to setup your domain to allow proper routing of incoming and outgoing mail as well as easy user client setups.
It is important to follow all steps and carefully input settings exactly as described below.

#### Before Continuing
This guide will require access to update DNS entries for your domain.
If you do not know where you DNS is hosted please read: [How do I find out who my DNS host is?](#)

#### DNS Settings
The following DNS entries are required to properly use email services at Rackspace.

**MX Records** tell other email providers where to properly send mail. In this case, you would like to set your MX Records to point to Rackspace. [More on MX Records](#).
**SPF (Sender Policy Framework)** Records reduce unwanted SPAM and spoofing from your domain and help ensure best-possible deliverability success of your outgoing emails. [More on SPF Records](#)
**Autodiscover Records** allow for full functionality of calendar features (free/busy information) and easier user email client setups. [More on Autodiscover Records](#)


**Warning:** Changing DNS settings for a domain that was previously hosting email elsewhere will require user email clients and devices to be reconfigured to point to Rackspace. Send your users to [http://emailhelp.rackspace.com](http://emailhelp.rackspace.com) to assist them with new settings.

1.	Log into your domain DNS host control panel. As identified above.
2.	Set the DNS entries to the following (ensure there are no other MX record entries or you will have complications with email). [How do I edit/add entries for my DNS host?](#)

_Note: The field headings below may vary slightly depending on your DNS host. See your DNS host for help._

3.	Save your changes.
4.	Wait for up to 48 hours for your new settings to propagate to the world. [Why does it take so long for these settings to propagate?](#)
5.	You have now successfully setup your DNS for your Domain, allowing users to send and receive email from your Rackspace Hosted Email solution.


#### Autodiscover records

Autodiscover is a service that enables you and your team to easily
configure your email clients by knowing only your Rackspace Email or
Microsoft Exchange email address and password. Autodiscover enables
additional features for Microsoft Exchange mailboxes such as downloading
the offline address book, viewing free and busy time in a calendar, and
using the Out-of-Office Assistant.

**Note:** Autodiscover is not compatible with Outlook 2011, Outlook
2016, or Mac Mail when setting up an email account as POP or IMAP.

To enable Autodiscover, set up a Canonical Name (CNAME) record with the
following information.

Replace *example.com* with your own domain name.

-   **Hostname:** `autodiscover.example.com`
-   **Time to live (TTL):** lowest possible
-   **Record type:** CNAME
-   **Destination:** `autodiscover.emailsrvr.com`

#### SPF records

The Sender Policy Framework (SPF) record is a DNS record designed to
combat and reduce spam for your domain. SPF records help mail servers
identify unauthorized use of your domain in the form of forgeries
(spoofing). SPF records also help improve your email deliverability rate
by preventing the email that you send from landing in a recipient's spam
or junk mail inbox.

To have an SPF record implemented, contact your DNS hosting provider and
have them add the following TXT record to your DNS:

-   **Hostname:** blank or @
-   **Time to live (TTL):** lowest possible
-   **Record type:** TXT
-   **Destination:** `v=spf1 include:emailsrvr.com ~all`

### **Set up DNS records for Hosted Skype for Business**

To complete the configuration of your hosted implementation of Microsoft
Skype for Business formerly Microsoft Lync, you must set up DNS records.
The following three CNAME records and two SRV records must be in place
to enable Skype for Business to work with the Hosted Exchange
Environment.

CNAME records

-   autodiscover.*example.com*
-   lyncdiscover.*example.com*
-   sip.*example.com*

SRV records

-   \_sip.\_tls.*example.com*
-   \_sipfederationtls.\_tcp.*example.com*

Because of the nature of our hosted environment, the domain listed for
these three CNAME records will contain specific Skype for Business DNS
records. Use our help tool for the specific DNS records for your domain.
After you log in with a mailbox that is enabled for Skype for Business,
you can find the DNS settings through the [Help
Tool](https://emailhelp.rackspace.com/) as shown in the following image.

<img src="{% asset_path skype-for-business/set-up-dns-records-for-cloud-office-email-and-skype-for-business/SkypeforBusinessa.png %}" width="656" height="261" />

**Note:** If you have an internal DNS, you must also set up these records on your internal DNS. If you want to enable Lync federation with domains hosted outside of Rackspace or domains that are hosted within Rackspace, contact our support team to learn more.
