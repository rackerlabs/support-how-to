---
permalink: dns-basics
audit_date: '2020-06-03'
title: DNS Basics
type: article
created_date: '2020-06-01'
created_by: John Garcia
last_modified_date: '2020-06-03'
last_modified_by: Cat Lookabaugh
product: general
product_url: general
---

This article provides an overview of the basic terms and concepts of the Domain Name System (DNS). 

### What is DNS?

DNS is a networking system that takes a given domain name and queries to locate its corresponding
addressable location or IP address. DNS enables you to enter user-friendly domain names, such
as "www.rackspace.com" into a web browser for navigation instead of a more complicated string of
numbers that comprise an IP address. This process is similar to how you can search for contacts by name
instead of using their phone numbers on your mobile device when you make a call. 

### DNS components

DNS has the following hierarchical infrastructure of components.

#### Root servers

There are 13 root servers, which handle information requests for top-level domains.  When any lower-level
name server cannot resolve a request, a query is sent to a mirrored root server for additional information.
The root server directs the requester to specific name servers that handle that specific top-level domain.
For example, when a query for "www.rackspace.com" comes in, the root server directs the requester to the
top-level domain name server that is responsible for **.com** addresses. The root server has a stored record
for the **.com** top-level domain server that is responsible for those domains.  

#### Top-level domain servers

Top-level domain (TLD) servers are the highest level of the hierarchy. They are responsible for top-level domains
and contain information regarding second-level domain name servers.  In the previous example, a TLD server handles
the request for "www.rackspace.com" from the root server and finds the IP address of the second-level domain server
that is responsible for additional information for **rackspace.com**.

####  Authoritative name server

These servers receive queries from TLDs and return the IP address for the requested domain. The authoritative
name server is the final stop for a query. If the authoritative name server has the requested records in its
cache, it returns the IP address to the requester.

#### Zone files

Name servers use zone files, which are plain text files, to store information about a domain. Zone files
contain any domain that a name server knows about. The zone described in the zone file is usually a single
domain with a series of records for that domain.
  
The following zone file record types are available.

##### A/AAAA records

**A records**: Map a Domain Name to a specified IPv4 address.   

**AAAA records**: Map a domain name to a specified IPv6 address.  

You can have several records that point to different IP addresses.

##### MX records

**MX Records (Mail Exchanger)**: Specify the mail server that is responsible for handling emails
for the specified domain name.

##### CNAME records

**CNAME records (canonical name)**: Map alias names to redirect a canonical domain name.

##### NS records

**NS records (name server)**: Indicate the DNS Server containing the actual records for a Domain
and are used to locate the requested zone files.

##### PTR records

**PTR records (pointer)**: Serve as reverse DNS records. They map an IP address to a domain name,
which is the opposite of an A/AAAA Record.  Typically, you use these records for verification, such as
email authentication.

##### SOA records

**SOA records (start of authority)**: Contain all the administrative information about a domain name,
such as the following details:

-  Primary Name Server
-  Email Address of Administrator of the Domain
-  Serial Number
-  Refresh Time
-  Retry Time
-  Expiration Time
-  Time To Live.
