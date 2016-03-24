---
permalink: creating-dns-records-with-cloud-dns/
node_id: 1462
title: Creating DNS records with Cloud DNS
type: article
created_date: '2012-07-15'
created_by: Rackspace Support
last_modified_date: '2014-11-11'
last_modified_by: David Hendler
product: Cloud DNS
product_url: cloud-dns
---

Creating DNS records for your domain is easy to do within the [Cloud Control Panel](https://mycloud.rackspace.com). In this article, we will
look at creating a DNS zone for your domain and adding basic A, MX, and
CNAME records using the Cloud Control Panel.

### Adding a domain

1.  Log into the [Cloud Control Panel](https://mycloud.rackspace.com)
    and select **DNS **at the top.

    <img src="{% asset_path cloud-dns/creating-dns-records-with-cloud-dns/1.png %}" alt="" />

2.  Select **Create Domain** under **Cloud DNS** and enter in the domain
    name, email address, Time To Live (TTL), and then select **Create
    Domain **once more.

    <img src="{% asset_path cloud-dns/creating-dns-records-with-cloud-dns/2.png %}" alt="" />

    **Note**: Time To Live indicates how log a DNS record is cached before
    it's updated.

3.  You will see your domain listed in the domain section as well
    options to create other DNS records as well.

### Adding an A record

Next, let's go through the process of adding an A record for your
domain.

1.  Log into the [Cloud Control Panel](https://mycloud.rackspace.com) and select **DNS** at the top.
2.  Select your domain in the list and then select **Add Record**
    under Records. Select **A/AAAA Record** for the type and fill out
    the following fields accordingly.

    <img src="{% asset_path cloud-dns/creating-dns-records-with-cloud-dns/3.png %}" alt="" />

3.  After you have entered everything, select **Add Record** and you are
    finished!

### Adding a CName record

Next, we will go through the process of setting up CNAME records for
your domain.

1.  Log into the [Cloud Control Panel](https://mycloud.rackspace.com) and select **DNS** at the top.
2.  Select your domain in the list and then select **Add
    Record** under Records. Select **CNAME Record** for the type and
    fill out the following fields accordingly.

    <img src="{% asset_path cloud-dns/creating-dns-records-with-cloud-dns/4.png %}" alt="" />

3.  After you have entered everything, select **Add Record** and you are
    finished!

### Adding an MX record

Next, we'll go through the process of setting up MX records for your
domain.

1.  Log into the [Cloud Control Panel](https://mycloud.rackspace.com) and select **DNS** at the top.
2.  Select your domain in the list and then select **Add
    Record** under Records. Select **MX Record** for the type and fill
    out the following fields accordingly.

    <img src="{% asset_path cloud-dns/creating-dns-records-with-cloud-dns/5.png %}" alt="" />

### Deleting a record

Next, we'll go through the process of deleting a DNS record from your
domain.

1.  Log into the [Cloud Control Panel](https://mycloud.rackspace.com) and select **DNS** at the top.
2.  Click the gear icon next to the desired domain and then select
    **Delete Record**.

    <img src="{% asset_path cloud-dns/creating-dns-records-with-cloud-dns/6.png %}" alt="" />

### Deleting a domain

Next, we'll go through the process of deleting a domain.

1.  Log into the [Cloud Control Panel](https://mycloud.rackspace.com) and select **DNS** at the top.
2.  Click the gear icon next to the desired domain and then
    select **Delete Domain**.

    <img src="{% asset_path cloud-dns/creating-dns-records-with-cloud-dns/7.png %}" alt="" />

### What are the canonical DNS servers for Cloud Servers?

If you're setting the canonical name servers for your domain with your
domain registrar (the NS records), use the following addresses:

    dns1.stabletransit.com
    dns2.stabletransit.com
