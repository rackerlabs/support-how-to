---
permalink: requesting-additional-ipv4-addresses-for-cloud-servers
audit_date:
title: Requesting additional IPv4 addresses for Cloud Servers
type: article
created_date: '2011-08-08'
created_by: Rackspace Support
last_modified_date: '2020-12-15'
last_modified_by: Rose Morales
product: Cloud Networks
product_url: cloud-networks
---

Rackspace offers the ability to add IPv4 addresses to cloud servers for a fee.
If you want to obtain an additional IPv4 address for your server, you must open
a ticket through the Support section of the Cloud Control Panel to get policy
information and approval. Before opening a ticket, read this article for
necessary information and alternatives.

### Conditions

Because of the global shortage of IPv4 address space, Rackspace currently offers
additional IPv4 addresses for only the following purposes:

- SSL on cloud servers
- NAT (Network Address Translation) on a Brocade Vyatta vRouter or a Fortinet Firewall

**Note:** You can allocate no more than five additional IPv4 addresses to a
single cloud server or Brocade Vyatta vRouter. Thus each cloud server or Brocade
Vyatta vRouter has a maximum capacity of six IPv4 addresses, including the
originally assigned public IPv4 address.

### Pricing

The rates for additional IPv4 addresses vary by region. Discuss rates for your
region with the Support team during your setup.

### Information needed for additional IPv4 addresses

After approval for an additional IPv4 address, you should
provide the following information.

#### Cloud servers

For an additional IPv4 address on a cloud server, you must provide the following
information:

- The name of the server for which you want to add the IP address.
- The SSL certificate. A valid Certificate Authority must have signed
  the certificate; self-signed certificates are not accepted.

#### Brocade Vyatta vRouters or Fortinet Firewalls

For an additional IPv4 address on a Brocade Vyatta vRouter or Fortinet Firewall,
you must confirm that you intend to use the additional IPv4 address for the
purpose of NAT.

### Alternatives to obtaining additional IPv4 addresses

Because there is a finite number of IPv4 addresses, Rackspace limits the number
that it distributes. We recommend that you use one of the following options
instead of obtaining additional IPv4 addresses:

- **Subject Alternate Name (SAN) certificates** - SAN certificates make it
  possible to protect multiple domain names with one certificate. When you use a
  SAN certificate for a domain, you can add more SAN values and have that
  same certificate protect that single domain.

- **Server Name Indication (SNI)** - SNI enables the server to choose the
  appropriate certificate early during the communication between the client and
  the webserver.

  SNI does not work properly and can produce SSL errors when used with any
  Internet Explorer version on Windows XP and when used with Internet
  Explorer version 7 or later on any operating system. Generally, you can use
  any operating system released after 2011 with SNI. Firefox, Chrome, and Safari
  work with SNI.

  Although support for SNI is not complete, it remains a good alternative to
  adding IPv4 addresses.
