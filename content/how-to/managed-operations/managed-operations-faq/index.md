---
permalink: managed-operations-faq
audit_date:
title: Managed Operations FAQ
type: article
created_date: '2015-12-10'
created_by: Rackspace Support
last_modified_date: '2020-10-07'
last_modified_by: Chad Sterling
product: Managed Operations
product_url: managed-operations
---

### Security
{{<accordion title="Are cloud servers PCI-DSS compliant?" col="in" href="accordion1">}}

The Rackspace Cloud environment has not been formally assessed for for
compliance with the Payment Card Industry (PCI) Data Security Standard
(DSS). For information about PCI-DSS, see [Cloud Security
Solutions](/support/how-to/are-cloud-servers-pci-dss-compliant/). For
information about PCI-DSS when using Rackspace Dedicated Hosting
services, see [PCI-Compliant Hosting for E-commerce
Websites](https://www.rackspace.com/compliance/pci).
{{</accordion>}}

------------------------------------------------------------------------

### NoSQL databases
{{<accordion title="Are NoSQL databases secure, reliable, and scalable?" col="in" href="accordion2">}}

NoSQL databases offer greater scalability and higher performance than
relational databases. In addition, the data model that NoSQL databases use
addresses several issues that the relational model is not designed to address.
For example, NoSQL databases can store semi-unstructured and
unstructured data.

However, to support reliability and security, developers must
implement their own code, which makes NoSQL systems more complex. This
complexity limits the number of applications that can rely on NoSQL databases
for secure and reliable transactions.
{{</accordion>}}
{{<accordion title="Can I use NoSQL databases for all types of applications?" col="in" href="accordion3">}}

NoSQL databases are well-suited for applications in social media, analytics,
and big data. However, relational databases are still preferable for
applications that require ACID (Atomicity, Consistency, Isolation, Durability)
transactions, such as banking applications.
{{</accordion>}}
{{<accordion title="What data security, backup, and recovery work do NoSQL databases require, including database tuning and monitoring?" col="in" href="accordion4">}}

Because NoSQL databases are decentralized, most have their own automatic
backup and recovery processes. By fine-tuning certain database elements such
as index use, query structure, data models, system configuration (such as
hardware and operating system settings), and application design, you can
significantly impact the overall performance of your application.
{{</accordion>}}
{{<accordion title="How do I create databases and objects and read and write data without SQL?" col="in" href="accordion5">}}

NoSQL databases are designed to enable the insertion of data without a
predefined schema. Every NoSQL platform has a unique method of creating
databases and objects. While few NoSQL platforms use query languages to build
databases and read and write data, some enable users to perform these
actions by using Java or Python scripting.
{{</accordion>}}

------------------------------------------------------------------------

### Rackspace Managed Database Services

{{<accordion title="What do Managed Database Services include?" col="in" href="accordion6">}}

Managed Database Services offers varying levels of support. The level of
support included depends on your service level agreement (SLA).

Under both of the available SLAs, DBAdministrator and DBArchitect, the Managed
Databases team maintains the availability and security of your database in
accordance with your SLA. We also regularly back up your database, perform
required patches at regular intervals, and proactively monitor and respond to
alerts.

For information about what each Managed Database Services
SLA includes, visit the [DBA Services](https://www.rackspace.com/dba-services) product
page. Scroll down to the product category that you want to use (**Relational
SQL** or **NoSQL**), and click the **Troubleshooting** tab.
{{</accordion>}}
{{<accordion title="Does Rackspace tune my database?" col="in" href="accordion7">}}

The level of support included in Managed Database Services depends on
your SLA. The DBArchitect SLA for Managed Database Services includes
performance tuning and diagnostics. If you're unsure whether your SLA includes
database tuning, contact the Managed Operations team for assistance.
{{</accordion>}}
{{<accordion title="What is the cost for Managed Database Services?" col="in" href="accordion8">}}

For full pricing information for Managed Database Services, visit
the [DBA Services](https://www.rackspace.com/dba-services) product
page. Scroll down to the product category you want to use (**Relational SQL**
or **NoSQL**), and click the **Pricing** tab.

**Note**: This pricing is for new databases only.

{{</accordion>}}
{{<accordion title="How do I contact the Managed Operations team?" col="in" href="accordion9">}}

You can contact the Managed Operations team by logging in to the [Cloud
Control Panel](https://login.rackspace.com/) and submitting a ticket or chat
request, or by calling 1 800 961 4454.
{{</accordion>}}

------------------------------------------------------------------------

### General

{{<accordion title="How do I contact the Managed Operations Team?" col="in" href="accordion11">}}

You can contact the Managed Operations team via direct chat, a phone
call to 1-800-961-4454, or by submitting a ticket online. There are
links to all these options on the Control Panel.
{{</accordion>}}
{{<accordion title="As a Rackspace customer, can I link my Managed Services configuration and account to a Cloud Server with Managed Operations Service Level configuration and account?" col="in" href="accordion12">}}

Yes, the same way you are currently able to link your Managed Services
accounts and your cloud accounts.
{{</accordion>}}
{{<accordion title="Is there a cost associated with data migration services?" col="in" href="accordion13">}}

The Managed Operations team can help you decide if a migration is
needed. If it is, the Managed Operations team works with the Rackspace
Professional Services team on the migration, or they can recommend a
Rackspace Partner. Any work performed by the Rackspace Professional
Services team or a partner incurs additional charges.

For more information, see [Rackspace Professional
Services](https://www.rackspace.com/en-us/professional-services/).
{{</accordion>}}
{{<accordion title="Can I move my servers from my current account to a Managed Operations Service Level account?" col="in" href="accordion14">}}

If you want Managed Operations Service Level support for a server that
is in your current Managed Infrastructure account, you must migrate that
server to a new server within a Managed Operations account. This
migration is necessary for the appropriate OS images, patching
and updates, and system administration access provisions to deploy
on the server. All of these features are necessary for the Managed
Operations team to provide you with the highest quality support for your
server. The Managed Operations support team helps you find the
most efficient and effective way to migrate your Managed Infrastructure
server to a Managed Operations Service Level account.
{{</accordion>}}
{{<accordion title="Do I need a separate account for Cloud Servers with a Managed Operations?" col="in" href="accordion15">}}

Because Rackspace offers the Managed Operations at the account level, every
cloud product in the account receives the Managed Operations. Therefore,
if you want to have some cloud servers that don't have a Managed
Operations and some that do, you need a separate account
for the Cloud Servers without Managed Operations. Servers on the other
account are at the Managed Infrastructure Service Level.
{{</accordion>}}
{{<accordion title="What is Rackspace Cloud Backup?" col="in" href="accordion16">}}

Rackspace Cloud Backup is a file-level storage option for Cloud Servers.
It lets you configure backups through the Control Panel and choose
to back up a particular folder or file with the frequency that works
best for you.

For additional information, see the following How-To articles:

-   Cloud Server images - Create and restore images via our [Cloud
    Control
    Panel](/support/how-to/create-an-image-of-a-server-and-restore-a-server-from-a-saved-image)
    or
    [API](https://docs.rackspace.com/docs/cloud-servers/v2/developer-guide/#create-image-of-specified-server).
-   Rackspace Cloud Backup - Create and schedule [file-based backups](/support/how-to/rackspace-cloud-backup-create-a-backup).
-   [Holland Backup Manager](https://hollandbackup.org/) - Find out about an open-source
    backup framework originally developed at Rackspace and written
    in Python.

For a comparison of Cloud Server images and Rackspace Cloud Backup, see
[Rackspace Cloud Backup vs. Cloud Server Image
Backups](/support/how-to/rackspace-cloud-backup-vs-cloud-server-image-backups).
{{</accordion>}}
{{<accordion title="Is my Rackspace Cloud Server with a Managed Operations Service Level account automatically backed up?" col="in" href="accordion17">}}

No, Rackspace does back up your server until you configure and schedule
backups.

For a comparison of Cloud Server images and Rackspace Cloud Backup, see
[Rackspace Cloud Backup vs. Cloud Server Image
Backups](/support/how-to/rackspace-cloud-backup-vs-cloud-server-image-backups).
{{</accordion>}}
{{<accordion title="Will Rackspace troubleshoot programming or code for customers?" col="in" href="accordion18">}}

No. The Managed Infrastructure and Managed Operations Service Level
teams do troubleshoot your code or programs.
{{</accordion>}}
{{<accordion title="Will the Rackspace support team automatically scale Cloud Servers if necessary?" col="in" href="accordion19">}}

Not at this time. However, if you notice issues or have questions about
capacity, the Managed Operations team works with you and recommend
solutions.
{{</accordion>}}
{{<accordion title="What does a server with Managed Operations Service Level support cost?" col="in" href="accordion20">}}

See our [Cloud Servers Pricing
Page](https://www.rackspace.com/cloud/servers/pricing/) for full pricing
details.
{{</accordion>}}
{{<accordion title="What does a Managed Operations Service Level account include?" col="in" href="accordion21">}}

Cloud Servers with a Managed Operations Service Level include access to
a dedicated, 24x7x365 support team via phone, chat, and online support
ticket. The team supports your servers from the OS up through the
application stack of Microsoft SQL Server, .Net/IIS, and the LAMP stack
on Linux. Your Cloud Server is regularly patched and updated.
Monitoring services are included, with the Managed Operations team
proactively responding to any alerts. We monitor up to two
user-defined ports as well as user-defined URL content.

Review [Rackspace Cloud Backup file-based backup options](https://www.rackspace.com/openstack/public/files) for details on backup solutions.

{{</accordion>}}
{{<accordion title="What is Cloud Servers with a Managed Operations Service Level?" col="in" href="accordion22">}}

Cloud Servers with a Managed Operations Service Level extends the
enhanced managed support level from our Managed Services offering into
our Cloud offering. The Managed Operations Service Level provides an
additional level of support that includes monitoring, OS, and application
infrastructure layer support, and technical guidance for your Cloud
Servers.

-   [Rackspace Cloud Backup
    FAQ](/support/how-to/cloud-backup-faq)
-   [Rackspace Cloud Backup: Getting Started
    Guide](/support/how-to/cloud-backup)
-   [Rackspace Cloud Backup (File-Level) vs. Cloud Server
    Images](/support/how-to/rackspace-cloud-backup-vs-cloud-server-image-backups)
    -   Cloud Server images - Create and restore images via our [Cloud
        Control
        Panel](/support/how-to/create-an-image-of-a-server-and-restore-a-server-from-a-saved-image)
        or
        [API](https://docs.rackspace.com/docs/cloud-servers/v2/developer-guide/#create-image-of-specified-server).
    -   Rackspace Cloud Backup - Create and schedule [file-based
        backups](/support/how-to/rackspace-cloud-backup-create-a-backup).
    -   [Holland Backup Manager](https://hollandbackup.org/) - Find information about an
        open-source backup framework originally developed at Rackspace
        and written in Python.
{{</accordion>}}
