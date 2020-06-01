---
permalink: dns-basics
audit_date:
title: DNS Basics
type: article
created_date: '2020-06-01'
created_by: John Garcia
last_modified_date:
last_modified_by:
product: general
product_url: general
---

This article is an overview of the basic terms and concepts of DNS. 

# What is DNS?

The Domain Name System (DNS) is a networking system that will take a given Domain Name and will query to locate its corresponding addressable location called an IP Address.  This would allow user-friendly Domain Names such as "www.rackspace.com" for example to be entered into a web browser for navigation instead of a more complicated string of numbers that comprise an IP address.  This is similar to how you can search for a contact by name as opposed to their phone number on your mobile device when making a call. 

# DNS Components

DNS is a hierarchical infrastructure of components that are used when making these types of queries and we will break these down as follows:

## Root Servers

There are 13 root servers which handle information requests for Top-Level Domains.  When any lower level Name Server is unable to resolve a request, then a query is sent to a mirrored root server for additional information.  The Root Server will direct the requester to specific name servers that handle that specific Top Level Domain.  An example of this would be when a query for "www.rackspace.com"comes in, the Root Server will be able to direct the requester to a Top Level Domain Name Server that is responsible for **.com** addresses, this is due to the Root Server having a stored record for the **.com** Top Level Domain Server that would be responsible for those domains.  

## Top Level Domain Servers (TLDs)

These servers are the highest level on the hierarchy, which are in responsible for Top Level Domains and contain information regarding Second-Level Domain Name Servers.  In our previous example, a TLD Server would handle the request for "www.rackspace.com" from the Root Server and will find an IP address of the Second Level Domain Server responsible for additional information for **rackspace.com**.

##  Authoritative Name Server

These servers will receive queries from TLD's and will return the IP address for the requested Domain.  The Authoritative Name Server is the final stop for a query and if the Authoritative Name Server has the requested records in its cache, it will return the IP address back to the requester.

# Zone Files

**Zone Files** are plain text files used by Name Servers to store information about a Domain.   Any Domain that a Name Server knows of will be stored in a Zone File.  The "zone" described in the Zone File is usually a single domain with a series of records for that domain.
  
## Zone Files can consist of the following record types:

## A/AAAA Records

**A Records** are used to map a Domain Name to a specified IPv4 Address.   

**AAAA Records** are similar to **A Records**, however they are used to map a Domain Name to a specified IPv6 address.  You can also have several records that point to different IP Addresses.

## MX Records

**MX Records (Mail Exchanger)** are used to specify a Mail Server that is responsible for handling emails for the specified Domain Name.

## CNAME Records

**CNAME Records (Canonical Name)** are used as a redirection tool that map alias names to a Canonoical Domain Name.

## NS Records

**NS Records (Name Server)** indicate the DNS Server containing the actual records for a Domain and are used to locate the requested Zone Files.

## PTR Records

**PTR Records (Pointer)** are used as Reverse DNS Records in that they map an IP Address to a Domain name, which is the opposite of an A/AAAA Record.  These Records are typically used for verification, such as email authentication.

## SOA Records

**SOA Records (Start of Authority)** contain all the administrative information about a Domain Name, these include:  Primary Name Server, Email Address of Administrator of the Domain, Serial Number, Refresh Time, Retry Time, Expiration Time, and Time To Live.
