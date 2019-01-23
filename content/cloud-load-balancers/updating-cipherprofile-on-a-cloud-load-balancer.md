---
permalink: updating-cipherprofile-on-a-cloud-load-balancer
audit_date:
title: Updating CipherProfile on a Cloud Load Balancer
created_date: '2019-01-23'
created_by: Rackspace Community
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
--- 

SSL Ciphers are algorithms that help secure networking connections using TLS. One particular cipher, 'SSL_RSA_WITH_3DES_EDE_CBC_SHA,' has been identified as vulnerable to potential intrusion. Rackspace is therefore allowing users to toggle ciphers in use on Cloud Load Balancers in order to better protect their environments. Updating the CipherProfile can be done via the API or by using the Rackspace tool Pitchfork. pitchfork.rax.io

CipherProfiles can be found at the Rackspace Developer Docs :

developer.rackspace.com/.../ 

Note: There are 2 CipherProfiles currently available: 'Default' or 'CLBCipherPolicy2017-08'. The 'Default' CipherProfile has 'SSL_RSA_WITH_3DES_EDE_CBC_SHA' enabled and 'CLBCipherPolicy2017-08' CipherProfile has 'SSL_RSA_WITH_3DES_EDE_CBC_SHA' disabled.

API Instructions:

This article assumes you have the cURL utility installed. The Cloud Load Balancer will be out of service while the update is being applied. Please ensure you perform this process when it will not impact your normal operations.

You will need to obtain an authentication token for this process. See the following article for how to obtain your token: developer.rackspace.com/.../

If you experience any issues with this process, please contact Rackspace support.

Set variables:

# REG={region]

# DDI={cloud_account_number}

# LBID={Load balancer ID}

# TOKEN={API_Token}

To see which CipherProfile is enabled on your cloud load balancer you can use the following cURL command :

# curl -sX GET -H "X-Auth-Token: $TOKEN" https://$REG.loadbalancers.api.rackspacecloud.com/v1.0/$DDI/loadbalancers/$LBID/ssltermination/ | python -m json.tool | grep cipherProfile

OUTPUT:

"cipherProfile": "CLBCipherPolicy2017-08"

Disabling 'SSL_RSA_WITH_3DES_EDE_CBC_SHA' Cipher via API:

Check if the Cipher 'SSL_RSA_WITH_3DES_EDE_CBC_SHA' is enabled on your cloud load balancer:

# curl -X GET -H "X-Auth-Token: $TOKEN" https://$REG.loadbalancers.api.rackspacecloud.com/v1.0/$DDI/loadbalancers/$LBID/ssltermination/ciphers

OUTPUT: 

{"ciphers":[{"name":"SSL_ECDHE_RSA_WITH_AES_128_CBC_SHA"},{"name":"SSL_ECDHE_RSA_WITH_AES_128_CBC_SHA256"},{"name":"SSL_ECDHE_RSA_WITH_AES_128_GCM_SHA256"},{"name":"SSL_ECDHE_RSA_WITH_AES_256_CBC_SHA"},{"name":"SSL_ECDHE_RSA_WITH_AES_256_CBC_SHA384"},{"name":"SSL_ECDHE_RSA_WITH_AES_256_GCM_SHA384"},{"name":"SSL_RSA_WITH_3DES_EDE_CBC_SHA"},{"name":"SSL_RSA_WITH_AES_128_CBC_SHA"},{"name":"SSL_RSA_WITH_AES_128_CBC_SHA256"},{"name":"SSL_RSA_WITH_AES_128_GCM_SHA256"},{"name":"SSL_RSA_WITH_AES_256_CBC_SHA"},{"name":"SSL_RSA_WITH_AES_256_CBC_SHA256"},{"name":"SSL_RSA_WITH_AES_256_GCM_SHA384"}]}

Currently, the 'SSL_RSA_WITH_3DES_EDE_CBC_SHA' Cipher is the only one that can be disabled on your cloud load balancer. The CipherProfile 'CLBCipherPolicy2017-08' disables and 'Default' enables the 'SSL_RSA_WITH_3DES_EDE_CBC_SHA' Cipher

Disable the 'SSL_RSA_WITH_3DES_EDE_CBC_SHA' Cipher by updating CipherProfile to 'CLBCipherPolicy2017-08':

# curl -X PUT https://$REG.loadbalancers.api.rackspacecloud.com/v1.0/$DDI/loadbalancers/$LBID/ssltermination -H "X-Auth-Token: $TOKEN" -H "Accept: application/json" -H "content-Type: application/json" -d '{"cipherProfile": "CLBCipherPolicy2017-08"}'

Updating CipherProfile using unofficial API Interactive Website Application Pitchfork:

Browse to the following link : pitchfork.rax.io

You will need your Rackspace Cloud username and API key. See the following article for help locating your API key: support.rackspace.com/.../

Once you are logged in:

Click on the Cloud Load Balancer icon.

Select the region where your CLB is located.

Scroll down to 'SSL' >> Select 'Update Or Configure SSL Termination' >> 'Details' >>

Input load balancer ID and cipher_profile >> hit 'Send API call'

To ensure that the CipherProfile has been updated :

Go to >> SSL >> Get SSL Termination Configuration >> Details >> Input Load balancer ID >> Send API call
