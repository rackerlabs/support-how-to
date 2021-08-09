---
permalink: adding-a-managed-operations-service-level-to-your-cloud-account
audit_date: '2018-09-10'
title: Add a managed operations service level to your cloud account
type: article
created_date: '2011-10-11'
created_by: Rackspace Support
last_modified_date: '2021-08-09'
last_modified_by: Stephanie Fillmon
product: Managed Operations
product_url: managed-operations
---

{{< accordion title="What does it mean to have a Rackspace Managed Operations account?" col="in" href="accordion1" >}}

A Rackspace Managed Operations account extends the managed support level
from our Managed Services offering into our Cloud offering. This offer
provides an additional level of support and management that includes
monitoring, operating system layer support, and technical guidance for
your Rackspace Cloud portfolio.

{{< /accordion >}}

{{< accordion title="What does a Rackspace Managed Operations account include?" col="in" href="accordion2" >}}

Managed Operations accounts include access to a dedicated support team
available 24x7x365 by phone, chat, email, and online support ticket.
The team supports your Cloud Servers from the operating system level
through the application stack of Microsoft&reg; SQL Server&trade;, .NET&reg;,
and Internet Information Services (IIS), as well as the
Linux&reg;, Apache&reg;, MySQL&reg;, and PHP (LAMP) stack on Linux&reg;.
Rackspace regularly patches and updates your Cloud Server. We also manage your
[Cloud Databases](https://www.rackspace.com/cloud/public/databases/) and provide
basic database administrator assistance, such as user and table
management and data backups. The Managed Operations team provides monitoring
services and proactively responds to any alerts. As a Managed Operations
customer, you can configure up to eight monitors per server with any
combination of ping, port, and URL.

{{< /accordion >}}

{{< accordion title="What operating systems and applications for Cloud Servers does Managed Operations support?" col="in" href="accordion3" >}}

For a list of supported operating system versions and applications for Linux,
see [Linux
Spheres of Support for Dedicated and Managed
Operations](/support/how-to/linux-spheres-of-support-for-dedicated-and-managed-ops).

For information about support for Windows&reg;, see [Cloud Servers
with Managed Operations Support for
Windows](/support/how-to/cloud-servers-with-managed-operations-support-for-windows).

{{< /accordion >}}

{{< accordion title="Does my server IP address or hostname change when I upgrade?" col="in" href="accordion4" >}}

No, upgrading to a Managed Operations account doesn't change server Internet
Protocol (IP) addresses or hostname. It also doesn't change server IDs, your
Rackspace Cloud account number, or your username and password combination.

{{< /accordion >}}

{{< accordion title="What if my current Cloud Server operating system isn't supported?" col="in" href="accordion5" >}}

Suppose you choose to upgrade to a Managed Operations account. In that case,
you must either delete any active Cloud Servers and images that run unsupported
operating systems or transfer those unsupported images to a separate
account. After you have taken these steps, you are eligible to upgrade.

If you need a new Cloud Server or Cloud Database, you can create the image on
the server or have the Managed Operations team create it for you.
In either case, we update, patch, and
run the instance for you.

{{< /accordion >}}

{{< accordion title="Who is eligible to upgrade?" col="in" href="accordion6" >}}

To upgrade to a Rackspace Managed Operations account, you must have an account
that meets the following conditions:

-   The account is active and up to date on all billing invoices.
-   No Cloud Servers on the account run on unsupported operating systems.
-   No Cloud Server images exist on the account for unsupported
    operating systems.

A technical account manager can ensure that Managed
Operations is the best fit for your needs.

{{< /accordion >}}

{{< accordion title="What does a Rackspace Managed Operations account cost?" col="in" href="accordion7" >}}

Contact your Rackspace Support team to learn more about Managed Operations service level pricing.

{{< /accordion >}}

{{< accordion title="Why is there an account fee as well as a per-instance service fee?" col="in" href="accordion8" >}}

Rackspace Technology determines the monthly individual account fee, which
covers the monthly account administration. Every Cloud Server or Database
instance incurs a service fee that represents the administration of each server
instance. This fee structure enables Rackspace to provide you with our
managed service at the lowest possible cost.

{{< /accordion >}}

{{< accordion title="Is the account fee assess with only partial-month usage of a managed Cloud server, or is it prorated?" col="in" href="accordion9" >}}

We do not prorate the account fee. However, the service fee is a
utility-based fee that bills only the amount of time that your
instance is active.

{{< /accordion >}}

{{< accordion title="Does the Rackspace Support team automatically scale Cloud Servers if necessary?" col="in" href="accordion10" >}}

Not at this time. However, if you notice issues or have questions about
capacity, your Rackspace Account team can work with you and recommend
solutions.

{{< /accordion >}}

{{< accordion title="Does Rackspace troubleshoot program code for customers?" col="in" href="accordion11" >}}

No, your Rackspace Account team does not troubleshoot your program code.

{{< /accordion >}}

{{< accordion title="What backups does Rackspace perform?" col="in" href="accordion12" >}}

New Cloud Servers on Managed Operations accounts have a basic Rackspace
Cloud Backup configuration. This configuration backs up directories that
commonly contain user data weekly. The default backup profile is
not a full system backup. Our support team can assist you with adding more
locations to the backup profile or changing the time interval between
backups.

Because Cloud Backup stores its archives in Cloud Files, standard storage and
bandwidth costs for Cloud Files apply. Deleting a Cloud Server does
not delete associated backup archives in Cloud Files. You must manually remove
these archives.

{{< /accordion >}}

{{< accordion title="Why do I need a separate account for my Cloud Servers and Cloud Databases associated with Managed Operations?" col="in" href="accordion13" >}}

Because Rackspace offers Managed Operations at the account level, those
services apply to every cloud product on an account. If you want
Managed Operations to apply to only certain cloud products, you need to move the
products for which you don't want Managed Operations to a separate account.

{{< /accordion >}}

{{< accordion title="What does the upgrade process entail?" col="in" href="accordion14" >}}

During the upgrade process, Rackspace performs the following steps:

- Resets the root password for each server to gain access to the server.
- Creates a Rackspace management account on each server.
- Installs the Rackspace Cloud Backup agent.
- Installs the Monitoring Agent.
- If necessary, installs the vendor-provided kernel and prepare for updates.

**Note**: Because rebooting a server during the upgrade process might cause
problems, you should image each server before an upgrade.
Rackspace does not perform this step for you. You should also ensure that all
of your services (such as MySQL) restart upon reboot before you upgrade.

 In addition, you need to open port `445` for Microsoft Windows&reg; or port
 `22` for Linux for the automation to run successfully. Rackspace
 can open ports manually only after you associate a server to a Managed
 Operations account.

We recommend that you work with your account manager (AM) throughout the
upgrade process to ensure that you have the best possible
experience. The following list describes reasons why you should work with an
AM:

1. If an automated server upgrade fails, an administrator must log in and
   complete the work.
2. The automation occurs on port `22` on Linux and port `445` on Windows. If these
   ports are inactive, the server automation process fails, but the account still
   upgrades. If you don't want to use port `22` or `443`, Rackspace can make a
   manual change that enables you to rerun the automation on a different port.
3. If you have older servers that run operating systems that Managed
   Operations doesn't support, an AM can provide you with options for moving
   to the most appropriate operating system.
4. An AM can review your architecture to ensure that it's appropriate for a
   cloud-based environment.
5. An AM can help you set expectations for your bill.

**Note**: Changing to a new service level agreement might also change your AM.
When this occurs, the process includes a hand-off from your current AM to your
new AM.

{{< /accordion >}}

{{< accordion title="As a Rackspace customer, can I link my Managed Services configuration and account to a Cloud Server with a Managed Operations configuration and account?" col="in" href="accordion15" >}}

Yes, the process is similar to the process you use to link your Managed
Hosting accounts and your cloud accounts.

{{< /accordion >}}

{{< accordion title="How do I contact my Rackspace Managed Operations account team?" col="in" href="accordion16" >}}

You can contact the Rackspace Managed Operations account team by chat,
phone, or submitting a ticket online. You can find the phone number and
links to other communication methods in the [Cloud Control
Panel](https://login.rackspace.com).

{{< /accordion >}}

{{< accordion title="What if I want to downgrade from my Rackspace Managed Operations account?" col="in" href="accordion17" >}}

At this time, you can only upgrade to Rackspace Managed Operations.
If you want to remove the managed service, you need to create a new account
and build new Cloud Servers and Cloud Databases.

Use the Feedback tab to make any comments or ask questions. You can also click
**Contact Us** to [start the conversation](https://www.rackspace.com/).

{{< /accordion >}}
