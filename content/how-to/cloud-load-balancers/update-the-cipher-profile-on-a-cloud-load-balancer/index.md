---
permalink: update-the-cipher-profile-on-a-cloud-load-balancer
audit_date: '2019-12-12'
title: Update the cipher profile on a cloud load balancer
type: article
created_date: '2019-02-07'
created_by: Rackspace Community
last_modified_date: '2019-12-12'
last_modified_by: Chad Sterling
product: Cloud Load Balancers
product_url: cloud-load-balancers
---

Secure Sockets Layer (SSL) ciphers are algorithms that help secure networking connections by using
Transport Layer Security (TLS). However, the cipher `SSL_RSA_WITH_3DES_EDE_CBC_SHA` has been 
identified as vulnerable to potential intrusion. Rackspace is therefore enabling you to update the 
ciphers that your cloud load balancers use to better protect your environment.

You can update the cipher profiles from the [Cloud Control Panel](https://login.rackspace.com).

For more information about cipher profiles and to see all available ciphers, see [Ciphers](https://docs.rackspace.com/docs/cloud-load-balancers/v1/api-reference/ciphers/) in the Rackspace 
developer documentation.

The following cipher profiles are currently available:

- `Default`: The `Default` cipher profile has cipher `SSL_RSA_WITH_3DES_EDE_CBC_SHA` enabled.
- `CLBCipherPolicy2017-08`: This cipher profile has cipher `SSL_RSA_WITH_3DES_EDE_CBC_SHA` disabled.
- `CLBCipherPolicy2019-05`: This cipher profile has all ciphers disabled except the following ones:
   - `SSL_ECDHE_RSA_WITH_AES_256_GCM_SHA384`
   - `SSL_ECDHE_RSA_WITH_AES_128_GCM_SHA256`

### Update the cipher profile by using the MyCloud portal

Use the following steps to update the cipher profile from the Load Balancer page in the Cloud Control Panel:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com) with your username and password.

2. In the top navigation bar click **Select a Product > Rackspace Cloud**.

3. Select **Networking** > **Load Balancers**.

4. Select the Load Balancer you want to update. 

5. Scroll to the Optional Features section.

   {{<image alt="The Optional Features section" src="picture1.png" title="The Optional Features section">}}

6. Select the pencil icon next to Secure Traffic (SSL). 

7. Update the ciphers and TLS versions. 

8. Select **Save SSL Configuration**.

   {{<image alt="The SSL dialog" src="picture2.png" title="The SSL dialog">}}
