---
permalink: manage-dns-records-in-the-myrackspace-portal
audit_date: '2021-05-24'
title: Manage DNS records in the MyRackspace Portal
type: article
created_date: '2020-02-28'
created_by: Derek Benson
last_modified_date: '2021-05-24'
last_modified_by: Carlos Arriaga
product: Dedicated Hosting
product_url: dedicated-hosting
---

This article explains how to create and manage Domain Name System (DNS) zones and
records within the MyRackspace Portal and covers the following topics:

*    Create and delete DNS zones.
*    Modify zone Time to Live (TTL) settings.
*    Create and modify subdomains.
*    Import and export DNS zones.
*    Create, modify, and remove DNS records.

### Access DNS settings

To access DNS settings, log in to the [My Rackspace portal](https://login.rackspace.com/)
and navigate to **Network > Domains (DNS)**.

### Manage DNS zones

This section covers how to create or delete DNS zones.

#### Create a DNS zone

**Note:** The domains you add must already be registered before you can add them to the account. You can
choose to register a domain name through one of the many available registrars.

1. To access the zone creation page, click **Actions > Create Zone**.
2. In the field **Domains (one per line)**, enter the domain of the zone you want to create.
3. You must create at least one **A** record in the **Create Records** section when you add a new zone.
   To modify the number of initial records you need, check or uncheck the box for the record. 
4. You can add a comment under **Comment**. Use this to describe the purpose of the new zone. It is not 
   accessible publicly.
5. Click **Create New Zone** to finish adding the zone.

#### Delete a DNS zone

1. Click the zone domain name that you want to delete in the list of zones displayed. If you have a large 
   number of zones, you can use the **Filter Zones** search box at the upper right to locate the necessary
   zone.
2. Click **Actions > Delete Zone**.

### Modify DNS zone TTL settings

When you modify DNS zone TTL settings, you can adjust the TTL for all zones or specifically for an individual zone.

#### Modify TTL settings for all zones

Start from the [DNS Zone List](https://my.rackspace.com/portal/domain/list) and perform the following steps:

1. Click **Actions > Modify all TTLs**.
2. Enter a new TTL in seconds, ranging from 300 to 864400.
3. Click **Modify All TTLs** to save the change for all zones.

#### Modify TTL settings for a single zone

Start from the [DNS Zone List](https://my.rackspace.com/portal/domain/list) and perform the following steps:

1. Click the zone domain name you want to modify. If you have a large number of zones, you can use
   the **Filter Zones** search box at the upper right to locate the necessary zone.
2. Click **Actions > Modify Zone TTLs**.
3. Enter a new TTL in seconds, ranging from `300` to `864400`.
4. Click **Modify All TTLs** to save the change for the zone.

### Manage subdomains

This section covers subdomains.

#### Create subdomains

Start from the [DNS Zone List](https://my.rackspace.com/portal/domain/list) and perform the following steps:

1. Click the zone domain name you want to associate with the subdomain. If you have a large number of 
   zones, you can use the **Filter Zones** search box at the upper right to locate the necessary zone.
2. Click **Actions > Add Subdomain**.
3. Enter the subdomain.
4. Choose a target from the list.
5. Enter additional info based on the target.
6. Click **Add Subdomain** to save.

#### Modify subdomains

Start from the [DNS Zone List](https://my.rackspace.com/portal/domain/list) and perform the following steps:

1. Click the zone domain name associated with the subdomain. If you have a large number of zones,
   you can use the **Filter Zones** search box at the upper right to locate the necessary zone.
2. Click **Actions > Edit Subdomain**.
3. Click the desired subdomain.
4. Change the subdomain target by using the list.
5. Enter additional info based on the new target.
6. Click **Save Changes** to finish.

### Export DNS zones

When you export DNS zones, you can either export all zones or a specific zone.

#### Export all DNS zones

Start from the [DNS Zone List](https://my.rackspace.com/portal/domain/list) and perform the following steps:

1. Click **Actions > Export All Zone Files**.
   
   This begins the export of all zone files. 

2. After the export completes, the system adds a **.zip** file beginning with the account number to the file
manager containing **.txt** files for each zone in **BIND9** format.

**Note:** This process might take a while, depending on the number of zones.

#### Export a single DNS zone

Start from the [DNS Zone List](https://my.rackspace.com/portal/domain/list) and perform the following steps:

1. Click the zone domain name you want to modify. If you have a large number of zones, you can use the 
**Filter Zones** search box at the upper right to locate the necessary zone.
2. Click **Actions > Export Zone File**.

   This automatically downloads a **.txt** file named after the exported zone domain name in **BIND9** format.

### DNS records

DNS record types include the following records:

- **A, AAAA, Cname**: Records for webservers and domain aliases.
- **MX**: Used for indicating the mail server for your domain.
- **TXT**: Miscellaneous records with various uses. Businesses largely use these for domain ownership
  verification as well as email server security.
- **SRV**: Records related to various domain services, such as Office 365&reg;.

#### A record fields

- **Host**: Domain name.
- **TTL**: The default is 86400 seconds.
- **Type**: Choose **IN A**.
- **Target**: Accepts IPv4 addresses. For example, `192.168.1.1`.
- **Comment**: Optional field used to describe the record.

#### AAAA record fields

- **Host**: Domain name.
- **TTL**: The default is 86400 seconds.
- **Type**: Choose **IN AAAA**.
- **Target**: Accepts IPv6 addresses. For example, `2001:db8::8a2e:370:7334`.
- **Comment**: Optional field used to describe the record.

#### Cname record fields

- **Host**: Domain name.
- **TTL**: The default is 86400 seconds.
- **Type**: Choose **IN CNAME**.
- **Target**: Accepts hostnames. For example, `example.com`.
- **Comment**: Optional field used to describe the record.

#### MX record fields

- **Host**: Domain name.
- **TTL**: The default is 86400 seconds.
- **Priority**: Numerical value that defines the priority of the mail server when you
  configure multiple MX records. Lower numbers indicate a higher priority.
- **Target**: Accepts hostnames and IP addresses.
- **Comment**: Optional field used to describe the record.

#### TXT record fields
- **Host**: Domain name.
- **TTL**: The default is 86400 seconds.
- **Text**: Record value as provided by the provider requesting that you add it.
- **Comment**: Optional field used to describe the record.
- **Validate**: Indicates whether SPF validation uses the TXT record.

#### SRV records fields
- ***Service***: Service name
- ***Protocol***: TCP or UDP
- **Host** (domain name): Record value as provided by the provider requesting that you add it.
- **TTL**: The default is 86400 seconds.
- **Priority**: Numerical value that defines the priority of the mail server when there are
  multiple MX records configured. Lower numbers indicate a higher priority.
- **Weight**: Helps to prioritize certain servers over others when there are multiple SRV records.
- **Port**: The port associated with the service.
- **Target**: Accepts hostnames and IP addresses.
- **Comment**: Optional field used to describe the record.

#### Zone settings

Zone settings enable you to add a descriptive comment to the zone.

### Add and modify records for existing zones

Click the domain name you want to edit in the list of zones displayed. If you have a large
number of zones, you can use the **Filter Zones** search box at the upper right to locate
the necessary zone.

#### Add new records

1. Select the tab for the appropriate record type. 
2. Enter the details for the new record.
3. Click the **+** to the right of the new record to save it.

#### Modify existing records

1. Select the tab for the appropriate record type. 
2. Click the **pencil** icon to the right of the record to make changes. 
3. Edit the details for the record.
4. Click **Save Changes** to commit the change.

#### Delete DNS records

1. Select the tab for the appropriate record type. 
2. Check the box to the left of the record you want to delete. 
3. Click **Delete Selected Records**.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact). 
