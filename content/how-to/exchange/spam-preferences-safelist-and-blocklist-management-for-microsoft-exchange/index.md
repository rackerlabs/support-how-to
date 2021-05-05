---
permalink: spam-preferences-safelist-and-blocklist-management-for-microsoft-exchange
audit_date: '2019-02-20'
title: 'Spam preferences, safelist, and blocklist management for Microsoft Exchange'
type: article
created_date: '2012-05-22'
created_by: Rackspace Community
last_modified_date: '2019-02-20'
last_modified_by: William Loy
product: Microsoft Exchange
product_url: exchange
---

You have the flexibility at Rackspace to set your own Microsoft&reg; Exchange spam
preferences. This includes editing and managing domain-wide spam settings such as safelists, Blocklists, and the ability to
override the spam filtering for the entire domain.

### Manage domain spam settings

Use the following steps to manage your domain's spam settings:

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com).

2. Click **Spam Settings** within the **Domain** section.

3. If your account has multiple domains, select the domain for which you would like to edit the spam settings.

4. In the **Spam Settings** section, makes your selection from the following three options under the **Status** section:

    {{<image src="status_options.png" alt="" title="">}}

5. Scroll down to the section labeled **Microsoft Exchange Handling** and make your selections from the following available options:

    {{<image src="exchange_settings.png" alt="" title="">}}


6. In the **Override Options** section, select one of the following options:

- Set preferences **only** for users who have not set their own.

- Override preferences for **all** users regardless of their own preferences.

### Managing safelists

A safelist identifies sources of trusted email and ensure emails from those sources are delivered to the user's inbox. Safelists do not prevent a message from being flagged as spam.

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com).

2. Click **Safelists** within the **Domain** section.

3. If your account has multiple domains, select the domain for which you would like to edit the safelist settings.

4. Add a domain name or email address to the safelist by entering the
   domain in the box labeled **Enter a domain or email address**, then click the **Add** button.

   - Remove a domain or email address by selecting the name in the list, then
   clicking the **Remove** button.

   - Use the **Clear** button to remove all domain
   names or email addresses listed in the window.

   - Add multiple domain names or email addresses to the safelist by using the bulk import option to upload a comma-separated-values (.CSV) file or a text (.TXT) file containing the
   information.

5. Add an Internet Protocol (IP) address to the domain-wide safelist by entering the IP address in the box labeled **Enter an IP address (or range)** and then click the **Add** button.

   - Remove an IP address by selecting the address in the list then clicking the **Remove** button.

   - Use the **Clear** button to remove all IP addresses listed in the window.

   - Add multiple IP addresses to the safelist by using the bulk import option to upload a .CSV file or a text .TXT file containing the
   information.

6. Click **Save**.

### Managing Blocklists

A Blocklist identifies sources of untrusted email. Messages from blocklisted addresses or domains are rejected before being delivered.

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com).

2. Click **Blocklists** within the **Domain** section.

3. If your account has multiple domains, select the domain for which you would like to edit the Blocklist settings.

4. Add a domain name or email address to the Blocklist by entering the
   domain in the box labeled **Enter a domain or email address**, then click the **Add** button.

   - Remove a domain or email address by selecting the name in the list, then
   click the **Remove** button.

   - Use the **Clear** button to remove all domain
   names or email addresses listed in the window.

   - Add multiple domain names or email addresses to the Blocklist by using the bulk import option to upload a .CSV file or a .TXT file containing the
   information.

5. To add an IP address to the Blocklist, enter the IP address in the box labeled **Enter an IP address (or range)**, then select the **Add** button.

   - Remove an IP address by selecting the address in the list, then clicking the **Remove** button.

   - Use the **Clear** button to remove all IP addresses listed in the window.

   - Add multiple IP addresses to the Blocklist by using the bulk import option to upload a .CSV file or a .TXT file containing the information.

6. Click **Save**.
