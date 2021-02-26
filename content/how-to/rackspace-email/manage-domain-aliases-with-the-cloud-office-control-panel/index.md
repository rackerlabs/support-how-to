---
permalink: manage-domain-aliases-with-the-cloud-office-control-panel/
audit_date: '2021-03-01'
title: Manage domain aliases with the Cloud Office Control Panel
type: article
created_date: '2014-04-10'
created_by: Mawutor Amesawu
last_modified_date: '2021-03-01'
last_modified_by: Carlos Arriaga
product: Rackspace Email
product_url: rackspace-email
---

Resellers can create domain aliases for their customers. If you are a
direct customer, however, and you want to create a domain alias,
contact the Rackspace Technology support team. Direct customers can still
view the set aliases by going to step two in the following procedure.

### Domain aliases and accepted domains

You might want to create a domain alias if, for example, your company
owns several domains (for example, **mycompany.com**, **mycompany.biz**,
and **mycompany.us**), and you want to direct all incoming email to the
company's primary domain. If you assign **mycompany.biz** and
**mycompany.us** as domain aliases, email that is sent to mailboxes at
the aliases will be automatically redirected to a mailbox on the primary
domain, **mycompany.com**.

**Warning:** You must own the domain you plan to use as a domain alias or accepted domain.
The [MX records](/support/how-to/dns-record-definitions/#mx-record) must also point to
Rackspace Technology for the system to deliver mail to your mailboxes.

The type of email hosting service that you use determines the relevant
terminology &mdash;*domain alias* versus *accepted domain*, and functionality,
such as how email is redirected:

-   **Domain alias**: If you are a Rackspace Email customer, you create
    a domain alias. The system automatically directs email sent to the domain
    alias to the corresponding mailbox in the original domain. For
    example, if **mycompany.biz** is a domain alias for
    **mycompany.com**, when someone sends an email to
    **bob@mycompany.biz**, the system redirects it to **bob@mycompany.com**.
-   **Accepted domain**: If you are a Microsoft Exchange customer, you create
    an accepted domain. The system can automatically direct mail sent to the
    accepted domain to any mailbox that you specify.

### Add a domain alias or accepted domain (Resellers Only)

1.  Log in to the [Cloud Office Control
    Panel](https://cp.rackspace.com/).
2.  Select **Domains**.
3.  On the left, click **Aliases**.
4.  If you have multiple domains, select the appropriate domain name.
    Or, to change domains, click the dropdown arrow next to the domain name.
5.  Click **Add Alias**.
6.  In the **Alternate Domain** box, enter the full domain name that you
    want to assign as a domain alias or accepted domain.
7.  In the **Alternate Domain Type** area, select **Domain Alias** or
    **Accepted Domain**. To learn more, see the preceding section in
    this article.
8.  If you selected the Exchange option, **Accepted Domain**, select the
    **Create alternate addresses for existing recipients** check box to
    automatically generate the new domain addresses for your current
    Exchange mailboxes.
9.  Click **Save**.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
