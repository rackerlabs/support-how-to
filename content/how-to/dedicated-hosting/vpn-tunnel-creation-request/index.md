---
permalink: vpn-tunnel-creation-request/
audit_date:
title: VPN Tunnel Creation Request
type: article
created_date: 2021-05-04
created_by: Israel Centeno
last_modified_date:
last_modified_by:
product: Dedicated Hosting
product_url: dedicated-hosting
---

# VPN Questionnaire

This article lists the information needed to create a new VPN tunnel. In order to set up the site-to-site our Network Security team will need the following information from you:

### Create a ticket in MyRackspace portal

1. Log in to the [MyRackspace Portal](https://login.rackspace.com/login) with your username and
   password.

2. On the top navigation bar, choose **Select a Product** > **Dedicated Hosting**.

3. Select **Tickets** > **Create Ticket**. The **Create New Ticket** page displays. 

4. Select the **Subject** field.

5. In the ticket **Subject**, type **VPN Tunnel Creation** and press **Enter**.

6. Copy the following form, paste it in the ticket, and fill in the details:

```
===========================================================
01 – IKE Version 1 or IKE Version 2:

02 - Manufacturer and model number of the VPN device that will be used on the side opposite Rackspace:

03 - Public IP of the VPN device (peer address):

04 – Your encryption domain - Remote IP(s) and/or network(s) that will be communicating across this VPN:

05 – Rackspace encryption domain: Rackspace IP(s) and/or network(s) that you would like to have communicate across this VPN:

06 – Phase 1 Encryption Algorithm [AES-128/192/256]:

07 – Phase 1 Hash Algorithm [MD5, SHA1, SHA256*/SHA384*/SHA512*]:

08 – Phase 1 Diffie Hellman Group [2, 5, 14*, 19*, 20*, 21*]:

09 – Phase 1 Pseudorandom Function (PRF)* [MD5, SHA1, SHA256, SHA384, SHA512]:

10 – Phase 1 Lifetime, in seconds**:

11 - IKEv1 Pre-shared key [password of your choice](skip to 12 and 13 for IKEv2):

12 – IKEv2 Local (Rackspace) Pre-shared key:

13 - IKEv2 Remote (your side) Pre-shared key:

###Please note the Local and Remote Pre-shared keys can be identical if you would like###

14 – Phase 2 Encryption Algorithm [AES-128/192/256]:

15 – Phase 2 Hash Algorithm [MD5, SHA1, SHA256*/SHA384*/SHA512*]:

16 – Perfect Forward Secrecy (PFS) enabled? If so, please specify DH Group [2, 5, 14*, 19*, 20*, 21*]:

17 – Phase 2 Lifetime, in seconds**:

*IKEv2 Only

**While lifetimes typically do not need to match between VPN peers, it is recommended they do, to avoid VPN stability issues. Commonly used Phase 1 Lifetimes are 86400 seconds or 28800 seconds. Phase 2 Lifetimes are preferably lower than Phase 1, and are commonly 28800 seconds or 3600 seconds.

===========================================================
**Please note:**
All new IPSec tunnels will no longer use DH group 1, 2 and 5 due to a potential logjam security. Group 14 or better is recommended.
```

**Glossary**

AES - Advanced Encryption Standard
DH - Diffie Hellman
IKE - Internet Key Exchange
IPSEC - Internet Protocol Security
MD5 - Message Digest Algorithm 5
PFS - Perfect Forward Secrecy
PRF - Pseudorandom Function
SHA - Secure Hash Algorithm
VPN - Virtual Private Network
