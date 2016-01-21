---
node_id: 1462
title: Creating DNS Records with Cloud DNS
type: article
created_date: '2012-07-15'
created_by: Rackspace Support
last_modified_date: '2014-11-11'
last_modified_by: David Hendler
product: Cloud Servers
product_url: cloud-servers
---

Creating DNS records for your domain is easy to do within the [Cloud
Control Panel](https://mycloud.rackspace.com). In this article, we will
look at creating a DNS zone for your domain and adding basic A, MX, and
CNAME records using the Cloud Control Panel.

#### Contents

-   [Adding a Domain](#A)
-   [Adding an A Record](#B)
-   [Adding a CNAME Record](#C)
-   [Adding an MX Record](#D)
-   [Deleting a Record](#E)
-   [Deleting a Domain](#F)
-   [What are the canonical DNS servers for Cloud Servers?](#G)

### Adding a Domain

1.  Log into the [Cloud Control Panel](https://mycloud.rackspace.com)
    and select **DNS **at the top.

    ![](http://c15154024.r24.cf2.rackcdn.com/1.png)

2.  Select **Create Domain** under **Cloud DNS** and enter in the domain
    name, email address, Time To Live (TTL), and then select **Create
    Domain **once more.

    ![](http://c15154024.r24.cf2.rackcdn.com/2.png)

    *Note: Time To Live indicates how log a DNS record is cached before
    it's updated.*

3.  You will see your domain listed in the domain section as well
    options to create other DNS records as well.

### Adding an A Record

Next, let's go through the process of adding an A Record for your
domain.

1.  Log into the [Cloud Control
    Panel](https://mycloud.rackspace.com) and select **DNS** at the top.
2.  Select your Domain in the list and then select **Add Record**
    under Records. Select **A/AAAA Record **for the type and fill out
    the following fields accordingly.

    ![](http://c15154024.r24.cf2.rackcdn.com/3.png)

3.  After you have entered everything, select **Add Record** and you are
    finished!

### Adding a CName Record

Next, we will go through the process of setting up CNAME Records for
your domain.

1.  Log into the [Cloud Control
    Panel](https://mycloud.rackspace.com) and select **DNS** at the top.
2.  Select your Domain in the list and then select **Add
    Record** under Records. Select **CNAME Record** for the type and
    fill out the following fields accordingly.

    ![](http://c15154024.r24.cf2.rackcdn.com/4.png)

3.  After you have entered everything, select **Add Record** and you are
    finished!

### Adding an MX Record

Next, we'll go through the process of setting up MX Records for your
domain.

1.  Log into the [Cloud Control
    Panel](https://mycloud.rackspace.com) and select **DNS** at the top.
2.  Select your Domain in the list and then select **Add
    Record** under Records. Select **MX Record** for the type and fill
    out the following fields accordingly.

    ![](http://c15154024.r24.cf2.rackcdn.com/5.png)

### Deleting a Record

Next, we'll go through the process of Deleting a DNS Record for your
domain.

1.  Log into the [Cloud Control
    Panel](https://mycloud.rackspace.com) and select **DNS** at the top.
2.  Click the gear icon next to the desired domain and then select
    **Delete Record**.

    ![](http://c15154024.r24.cf2.rackcdn.com/6.png)

### Deleting a Domain

Next, we'll go through the process of Deleting a Domain.

1.  Log into the [Cloud Control
    Panel](https://mycloud.rackspace.com) and select **DNS** at the top.
2.  Click the gear icon next to the desired domain and then
    select **Delete Domain**.

    ![](http://c15154024.r24.cf2.rackcdn.com/7.png)

### What are the canonical DNS servers for Cloud Servers?

If you're setting the canonical name servers for your domain with your
domain registrar (the NS records), use the following addresses:

    dns1.stabletransit.com
    dns2.stabletransit.com

