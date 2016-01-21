---
node_id: 1411
title: 'Spam Preferences, Safe Lists, and Black List In Rackspace Email'
type: article
created_date: '2012-05-25'
created_by: Rackspace Support
last_modified_date: '2014-07-14'
last_modified_by: Kyle Laffoon
product: Rackspace Email
product_url: rackspace-email
---

Rackspace gives our users the flexibility to set their own Spam
preferences to their liking. This includes editing and managing
domain-wide spam settings, Safe list, Black List and the ability to
override the spam filtering for the entire domain. Let's take a look at
how to manage this:

-   [Managing Domain Spam Settings](#DomainSpam)
-   [Managing Individual User Spam Settings](#IndividualSpam)
-   [Managing Spam Filter Settings](#FilterSettings)
-   [Rackspace Email Handling](#Handling)
-   [Managing Safe Lists](#Safelist)
-   [Managing Black Lists](#Blacklist)

**Manage Domain Spam Settings**
-----------------------------------

To manage your domain level spam settings, go to **Domains** section and
select **Filter Settings, Blacklists, or Safelists** (please reference
the below steps for each specific option)

 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/DomainsSpam_1.JPG" width="537" height="133" />

*Note: If you have multiple domains, you may be prompted to select the
domain you intend to make changes to first.*



**Managing Individual User Spam Settings**
----------------------------------------------

To manage **indiviual** user's spam settings, go to **Rackspace Email**
section and select **Filter Settings, Blacklists, or Safelists** (please
reference the below steps for each specific option)

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/RSSpam.JPG" width="527" height="148" />

Select the desired **User** to update Spam Settings

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/RSEUsers_0.JPG" width="658" height="241" />



**Spam Filtering Setting Options
**
--------------------------------------

Select **Filter Settings** to edit the Spam Filter Settings.

*Note: For Indivudal Mailboxes, select **Filter Settings** in the
**Rackspace Email** section. For the domain, select **Filter Settings**
in the **Domains** Section.*

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/DomainsSpam_0.JPG" width="527" height="110" />

In the Settings section select whether you'd like to turn the spam
filtering on or off.
You may also select the **Exclusive** button to receive email **ONLY**
from senders on your domain&rsquo;s safelist if you desire.
Next, select the preferred settings for your domain. Below is an
overview of each of the options:

 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Afterdomain1_1.JPG" width="499" height="398" />



### **Rackspace Email Handling**

-   Deliver to Spam folder: Spam messages are sent to the user&rsquo;s Spam
    folder.

<!-- -->

-   If you would like to automatically delete messages from this folder,
    select the Delete after \[    \] days or \[    \] total email check
    box and enter a specified number of days and/or total emails.

<!-- -->

-   Delete the email immediately: Spam email will be deleted
    automatically and not delivered to the user's mailbox.

<!-- -->

-   Include "\[SPAM\]" at the beginning of the subject line - Spam email
    will be delivered to the user's Inbox, but will include the text
    "\[SPAM\]" in the Subject line.

<!-- -->

-   Deliver to the email address: Spam messages are sent to an email
    address of your choice that resides on your domain.

 In the **Override Options** section indicate whether to apply these
settings to users who have not already set their spam preferences, or if
these settings should override spam preferences for all users. If you're
finished select the **Save** button.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/SpamFiltering%20Override.png" width="403" height="153" />

*Note: The override option will not be presented if you selected
Individual Rackspace Email Mailbox.*



**Managing Safe List**
--------------------------

Safelists allow you to add a sender's email address, domains, or IP
address to deliver directly to the mailbox. This is useful when a sender
is flagged as spam and you would like to allow this email not deliver to
the Spam/Junk Folder.

To manage your Safe List, select **Safelists**

*Note: For Indivudal Mailboxes, select **Safelists** in the **Rackspace
Email** section. For the domain, select **Safelists** in the **Domains**
Section.*

 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/CPFiltersettingsSL_0.jpg" width="519" height="106" />

### Domain & Email Safelist

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/SpamFiltering%20SL%20Domains%20and%20Email.png" width="335" height="385" />

1.  To add a domain name or email address to the safelist, enter the
    domain or email address inside the box, then select the
    **Add** button.
2.  To remove a domain or email address, select the name in the list
    then select the **Remove** button.
3.  Use the **Clear** button to remove all domain names or email
    addresses listed in the window.
4.  After you're finished select the **Save** button.

*Note: If you have multiple domain names and/or email addresses to add
use the bulk import option to upload a .csv or .txt file containing the
information.*

### IP Safelist

 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/SpamFiltering%20SL%20IP.png" width="327" height="377" />

1.  To add an IP address to the safelist, enter the IP address
    (or range) into the box then select the **Add** button.
2.  To remove an IP address, click the address in the list then click
    the **Remove** button.
3.  Use the **Clear** button to remove all IP addresses listed in
    the window.
4.  After you're finished select the **Save** button.

*Note: If you have multiple domain names and/or email addresses to add,
use the bulk import option to upload a .csv or .txt file containing the
information*



**Managing Blacklists**
---------------------------

Blacklists allow you block a sender's email address, domain, or IP
address from delivering to your mailbox. Objects that are blacklisted
are not delivered to the mailbox.

To manage your Black List, select **Blacklists**

*Note: For Indivudal Mailboxes, select **Backlists** in the **Rackspace
Email** section. For the domain, select **Blacklists** in the
**Domains** Section.*

 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/CPFiltersettingsBL_0.jpg" width="519" height="106" />

### Domain & Email Blacklist

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/SpamFiltering%20BL%20Domains%20and%20Email.png" width="331" height="389" />

1.  To add a domain name or email address to the blacklist, enter the
    domain or email address inside the box then select
    the **Add** button.
2.  To remove a domain or email address, select the name in the list
    then select the **Remove** button.
3.  Use the **Clear** button to remove all domain names or email
    addresses listed in the window.
4.  After you're finished select the **Save** button.

 *Note: If you have multiple domain names and/or email addresses to add,
use the bulk import option to upload a .csv or .txt file containing the
information.*

### IP Blacklist

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/SpamFiltering%20BL%20IP.png" width="346" height="374" />

1.  To add an IP address to the blacklist, enter the IP address
    (or range) into the box then select the **Add** button.
2.  To remove an IP address, click the address in the list then click
    the **Remove** button.
3.  Use the **Clear** button to remove all IP addresses listed in
    the window.
4.  After you're finished select the **Save** button.

 *Note: If you have multiple domain names and/or email addresses to add,
use the bulk import option to upload a .csv or .txt file containing the
information*

