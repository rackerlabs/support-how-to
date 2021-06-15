---
permalink: hosted-microsoft-skype-for-business-at-rackspace-deployment-guide
audit_date: '2021-06-14'
title: Hosted Microsoft Skype for Business at Rackspace deployment guide
type: article
created_date: '2014-10-20'
created_by: Aaron Medrano
last_modified_date: '2021-06-14'
last_modified_by: Rose Morales
product: Microsoft Skype for Business
product_url: skype-for-business
---

Hosted Microsoft&reg; Skype for Business is a unified communications tool that
offers secure instant messaging, video chat, file transfer, and presence to
users from desktop and mobile devices. It is available as an add-on for the
Rackspace Hosted Exchange 2013 and 2016 email platforms.

The rollout of the Rackspace Hosted Skype for Business service to your users
varies based on the size of your organization and your IT infrastructure. The
overall deployment plan has three basic steps. This article is designed to help
you decide the best rollout method for your environment.

### Set up DNS records for Skype for Business

As the first step, you must create auto-discover entries on your DNS server. If
you have an internal DNS, you must also set up these records on your internal
DNS.

We highly recommend that you perform this step because all of the Hosted
Skype for Business features work only if DNS is correctly configured. For
instructions, see [Set up Cloud Office Skype for Business DNS records](/support/how-to/set-up-dns-records-for-cloud-office-skype-for-business/).

**Note:** If you are a Rackspace Hosted Exchange customer, these settings are in
addition to what you might currently have for Hosted Exchange Autodiscover.

### Activate Skype for Business for users in the Email Administrator Control Panel

You can enable Skype for Business for your entire domain or for selected users.
In the Email Administrator Control Panel, click on the Skype for Business
hyperlink to go to the Skype for Business page. Then select the check box next
to the users to enable Skype for Business for them.

### Deploy and distribute the client

Depending on the complexity of your environment, you have options for deploying
Skype for Business clients for desktops. The Skype for Business 2013 client is
part of the Microsoft Office Professional Plus bundle. You can also download a
basic version for free.

### Additional resources

See the following resources for further information:

- [Skype for Business client download](/support/how-to/download-a-skype-for-business-client)

- [Skype for Business client setup tool](https://emailhelp.rackspace.com/) - (Log in
    to set up Skype for Business on your devices.)

- [Skype for Business 2013 deployment guide on TechNet](https://technet.microsoft.com/en-us/library/jj204827.aspx)
