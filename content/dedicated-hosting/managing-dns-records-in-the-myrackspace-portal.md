---
permalink: managing-dns-records-in-the-myrackspace-portal
audit_date:
title: Managing DNS Records in the MyRackspace Portal
created_date: '2020-02-28'
created_by: Derek Benson
last_modified_date: 
last_modified_by: 
product: Dedicated Hosting
product_url: dedicated-hosting
---

This article is meant to assist with creating and managing DNS zones and records within the MyRackspace portal and covers the following topics:
*       Creating and deleting DNS zones
*       Modifying zone TTL settings
*       Creating and modifying subdomains
*       Importing and exporting zone files
*    Record types
*    Record fields
*       Creating, modifying, and removing records

## Accessing DNS settings
Log into the [My Rackspace portal](https://login.rackspace.com/) and navigate to **Network > Domains (DNS)**.

## Managing DNS Zones

### Creating a DNS zone
**Note:** Domains added must already be registered before you can add them to the account. You may choose to register a domain name through one of the many registrars available.
1. To access the zone creation page, click **Actions > Create Zone**.
2. In the field **Domains (one per line)**, enter the domain of the zone you wish to create.
3. Initial A records for the new zone can be added in the **Create Records** section. To modify the number of initial records you need, check or uncleck the box for the record. 
**Note:** At least one A record must be created when adding a new zone.
4. A comment may be added under **Comment**. This would be used to describe the purpose of the new zone and is not accessible publically.
5. Once complete, click **Create New Zone** to finish adding the Zone.


### Deleting a DNS zone
1. Click the zone domain name you wish to delete in the list of zones displayed. If you have a large number of zones, you can use the **Filter Zones** search box at the upper right to locate the necessary zone.
2. Click **Actions > Delete Zone**.


### Modifying DNS zone TTL settings
When modifying DNS zone TTL settings, you can adjust the TTL for all zones, or specifically for an individual zone.

#### Modifying TTL settings for all zones
Starting from the [DNS Zone List](https://my.rackspace.com/portal/domain/list):
1. Click **Actions > Modify all TTLs**.
2. Enter a new TTL in seconds ranging from 300 to 864400.
3. Click **Modify All TTLs** to save the change for all zones.


#### Modifying TTL settings for a single zone
Starting from the [DNS Zone List](https://my.rackspace.com/portal/domain/list):
1. Click the zone domain name you'd like to modify. If you have a large number of zones, you can use the **Filter Zones** search box at the upper right to locate the necessary zone.
2. Click **Actions > Modify Zone TTLs**.
3. Enter a new TTL in seconds ranging from 300 to 864400.
4. Click **Modify All TTLs** to save the change for the zone.


### Managing Subdomains

#### Creating subdomains
Starting from the [DNS Zone List](https://my.rackspace.com/portal/domain/list):
1. Click the zone domain name you'd like associated with the subdomain. If you have a large number of zones, you can use the **Filter Zones** search box at the upper right to locate the necessary zone.
2. Click **Actions > Add Subdomain**.
3. Enter the subdomain.
4. Choose a target from the list.
5. Enter additional info based on the target chosen.
6. Click **Add Subdomain** to save.


#### Modifying subdomains
Starting from the [DNS Zone List](https://my.rackspace.com/portal/domain/list):
1. Click the zone domain name associated with the subdomain. If you have a large number of zones, you can use the **Filter Zones** search box at the upper right to locate the necessary zone.
2. Click **Actions > Edit Subdomain**.
3. Click the desired subdomain.
4. Change subdomain target as desired using the list.
5. Enter additional info based on the new target chosen.
6. Click **Save Changes** to finish.


### Exporting DNS zones
When exporting DNS zones, it is possible to export all zones, or a specific zone as desired

#### Export all DNS zones
Starting from the [DNS Zone List](https://my.rackspace.com/portal/domain/list):
1. Click **Actions > Export All Zone Files**.
2. This will begin an export of all zone files. 
3. Once completed, a **.zip** file beginning with the account number will be added to the file manager containing **.txt** files for each zone in **BIND9** format.
**Note:** This process may take a while, depending on the number of zones.


#### Exporting a single DNS zone
Starting from the [DNS Zone List](https://my.rackspace.com/portal/domain/list):
1. Click the zone domain name you'd like to modify. If you have a large number of zones, you can use the **Filter Zones** search box at the upper right to locate the necessary zone.
2. Click **Actions > Export Zone File**.
3. This will download a **.txt** file automatically named after the exported zone domain name in **BIND9** format.


## DNS Record Types

### A, AAAA, Cname records
Records for webservers and domain aliases.


### MX records
Used for indicating the mail server for your domain.


### TXT records
Miscelleneous records with various uses. These are largely used by businesses for domain ownership verification as well as email server security.


### SRV records
Records related to various domain services. *Ex. Office 365*


## DNS record fields

### A record fields
1. Host (domain name)
2. TTL (time-to-live)
     - Default: 86400 seconds
3. Type 
     - Choose **IN A**
4. Target
     - Accepts IPv4 Addresses *ex: 192.168.1.1*
5. Comment
     - Optional field used to describe the record.


### AAAA record fields
1. Host (domain name)
2. TTL (time-to-live)
     - Default: 86400 seconds
3. Type 
     - Choose **IN AAAA**
4. Target
     - Accepts IPv6 Addresses *ex: 2001:db8::8a2e:370:7334*
5. Comment
     - Optional field used to describe the record.


### Cname record fields
1. Host (domain name)
2. TTL (time-to-live)
     - Default: 86400 seconds
3. Type 
     - Choose **IN CNAME**
4. Target
     - Accepts hostnames *ex: example.com*
5. Comment
     - Optional field used to describe the record.


### MX record fields
1. Host (domain name)
2. TTL (time-to-live)
     - Default: 86400 seconds
3. Priority
     - Numerical value defining the priority of the mail server when there are multiple MX records configured. Lower number indicates higher priority.
4. Target
     - Accepts hostnames and IP addresses.
5. Comment
     - Optional field used to describe the record.


### TXT record fields
1. Host (domain name)
2. TTL (time-to-live)
     - Default: 86400 seconds
3. Text
     - Record value as provided by the provider requesting it be added.
4. Comment
     - Optional field used to describe the record.
5. Validate
     - Indicates whether the TXT record is being used for SPF validation.


### SRV records fields
1. _Service
     - Service name
2. _Protocol
     - TCP/UDP
3. Host (domain name)
     - Record value as provided by the provider requesting it be added.
4. TTL (time-to-live)
     - Default: 86400 seconds
5. Priority
     - Numerical value defining the priority of the mail server when there are multiple MX records configured. Lower number indicates higher priority.
6. Weight
     - Helps prioritize certain servers over others when there are multiple SRV records
7. Port
     - Port associated with the service.
8. Target
     - Accepts hostnames and IP addresses.
9. Comment
     - Optional field used to describe the record.


### Zone settings
Allows a descriptive comment to be added to the zone.


## Adding and modifying records for existing zones
Click the domain name you wish to edit in the list of zones displayed. If you have a large number of zones, you can use the **Filter Zones** search box at the upper right to locate the necessary zone.

### Adding new records
1. Select the tab for the appropriate record type. 
2. Enter the details for the new record.
3. Click the **+** to the right of the new record to save.


### Modifying existing records
1. Select the tab for the appropriate record type. 
2. Click the **pencil** icon to the right of the record to make changes. 
3. Edit the details for the record.
4. Click **Save Changes** to commit the change.


### Deleting DNS records
1. Select the tab for the appropriate record type. 
2. Check the box to the left of the record you wish to delete. 
3. Click **Delete Selected Records**.
