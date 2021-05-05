---
permalink: secure-existing-webmail-private-label-site
audit_date: '2018-03-07'
title: Secure existing Webmail private label site
type: article
created_date: '2018-02-23'
created_by: Ben Smith
last_modified_date: '2018-03-07'
last_modified_by: Cat Lookabaugh
product: Rackspace Email
product_url: rackspace-email
---

Webmail private label sites created before September 2017 were deployed to an environment that did not enforce the use of secure web protocols over HTTPS, such as SSL or TLS. To add this additional level of protection to your existing Webmail private label site, we recommend you secure it.

### Prerequisites

- **Applies to:** Administrators of reseller accounts
- **Difficulty:** Easy
- **Time needed:** Approximately 5 minutes to secure the site, and 24 to 48 hours for the DNS changes to propagate
- **Tools required:**  DNS host administrator access

For more information on prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

### Secure Webmail private label site

To secure a Webmail private label site site, perform the following steps:

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com).

2. In the **Reseller Tools** section of the home page, click the **Webmail Sites** link.

   {{<image src="webmail_sites.png" alt="" title="">}}

3. On the **Webmail Sites** page, locate the site that you want to secure. It should have a red unlocked icon to the right of the name.

    **Warning:** You cannot secure a Control Panel site with a site name that uses the following root domains:  mymailsrvr.com, mycpsrvr.com, or any domain which is listed on *Google Safe Browsing*.

4. Click **Secure Site** from the **Actions** drop-down list.

   {{<image src="action_secure_sites.png" alt="" title="">}}

5. On the **Secure Webmail Site** page, enter or verify the company information for your site. This information is used to register the security certificate that secures your site. If your end users choose to view the certificate from their browser, this information is visible to them. Click **Secure Webmail Site**.

   {{<image src="secure_webmail_site.png" alt="" title="">}}

6. Copy the displayed instructions to update the DNS entry for your site with new information by clicking **Copy Instructions**.  Then click **Ok, Got It**.

   {{<image src="site_being_created.png" alt="" title="">}}

    - The DNS for most existing sites is an ``A`` record that points to a specific IP address. Change the ``A`` record type to ``CNAME``, and change the IP address to the host name provided. For example, if your Webmail site is going to be **mail.yourdomainexample.com**, you would change the host name to **mail** or **mail.yourdomainexample.com**. The following tables illustrate this change.

        **Before DNS change:**

        |Record type | Host | Point-to or Address |
        |---|---|---|
        |A| @ | 000.00.000.00 |

        **After DNS change:**

        |Record type | Host | Point-to or Address |
        |---|---|---|
        |CNAME| mail| pl-10.webmail.emailsrvr.com |

    - If your existing DNS record is already a CNAME, then just update the existing host name to the new one provided.

        **Example DNS entry:**

        |Record type | Host | Point-to or Address |
        |---|---|---|
        |CNAME| mail| pl-10.webmail.emailsrvr.com |

    **Note:** For specific instructions on editing your DNS records, contact your DNS host. [Find your DNS host here.](/support/how-to/find-dns-host)

After the DNS change is propagated, the site displays as secured in the **Webmail Sites** listing and has a green locked icon to the right of the name.

{{<image src="secure_completed.png" alt="" title="">}}
