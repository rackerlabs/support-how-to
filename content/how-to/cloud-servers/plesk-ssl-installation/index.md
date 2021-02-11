---
permalink: plesk-ssl-installation/
audit_date:
title: 'Plesk: SSL Installation'
type: article
created_date: '2021-02-10'
created_by: Robert Kane
last_modified_date:
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

The following instructions will detail installing an SSL certificate to a domain or an IP address via the Plesk panel.


### Prerequisites 
 - Dedicated server/Virtual Machine running RHEL or CentOS
 - Plesk Obsidian or later
 - An SSL Certificate (*.crt), Private key (*.key) and CA Certificate (*-.ca.crt) file


### Adding an SSL to a domain name 

1. Log into Plesk (please review Plesk: Introduction for these steps)

2. Navigate to "Domains" on the left page panel & select the domain you wish to add the SSL to.

3. From the new options presented, select "SSL/TLS Certificates"

4. Here you will fill in the requisit information -
    Certificate name (eg 2021-domain.com)
    Private key (*.key)
    Certificate (*.crt)
    CA certificate (*-ca.crt)

5. Once complete, click "Upload Certificate"


### Adding an SSL to an IP Address

1. Log into Plesk (please review Plesk: Introduction for these steps)

2. Navigate to "Tools & Settings" on the left panel

3. Select "SSL/TLS Certificates" under "Security"

4. Here you will fill in the requisit information -
    Certificate name (eg 2021-domain.com)
    Private key (*.key)
    Certificate (*.crt)
    CA certificate (*-ca.crt)

5. Once complete, click "Upload Certificate"

6. Navigate back to "Tools & Settings", under "Tools & Resources" click on "IP Addresses"

7. Select the IP address you wish to add the SSL to and select the SSL you uploaded from the "SSL/TLS Certificate" 
drop down.

8. Once finished, hit OK.
