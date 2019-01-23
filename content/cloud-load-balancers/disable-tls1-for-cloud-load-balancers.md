---
permalink: disable-tls1-for-cloud-load-balancers
audit_date:
title: Disable TLS1.0 for Cloud Load Balancers
created_date: '2019-01-23'
created_by: Rackspace Community
last_modified_date: 
last_modified_by: 
product: Cloud Load Balancers
product_url: cloud-load-balancers
--- 

TLS1.0 was implemented many years ago for secure communication protocols  It has been determined that TLS1.0 is no longer effective and should be disabled for PCI compliance.

TLS1.0 can be disabled on Cloud Load Balancers but it must be via an API command or by using a Racker Tool call Pitchfork  In order to disable TLS1.0, the procedures listed below will allow you to disable TLS1.0.

This article assumes you have cURL installed as this is the only method of disabling TLS1.0  The Cloud Load Balancer will be out of service while the update is being implemented on the cloud load balancer.  Please ensure you perform the procedure when it will not impact your normal operations.

You will need to obtain an authentication token for this process.  See the following article for how to obtain your token:  https://developer.rackspace.com/docs/cloud-load-balancers/quickstart/    

If you are having any issues with this process, please contact Rackspace Support.

In order to make this a relatively easy process, you will need to create several variables to use in the cURL command.

TOKEN=<>
DDI=<Your account number>
LBID=<The load balancer id>
REG=<region where the load balancer is located>

Before you disable TLS1.0 on the cloud load balancer, check the current settings:

curl -sX GET -H "x-auth-token:$TOKEN" https://$REG.loadbalancers.api.rackspacecloud.com/v1.0/$DDI/loadbalancers/$LBID/ssltermination

Ensure this is all one line without any returns or enter the command with the symbol that continues the line without an actual line break:

curl -sX GET -H "x-auth-token:$TOKEN" \

https://$REG.loadbalancers.api.rackspacecloud.com/v1.0/$DDI/loadbalancers/$LBID/ssltermination

The \ is the symbol to be used to continue the typing on the next line without any actual line break.
This will be part of the output from the command: 

"secureTrafficOnly": false,
        "securityProtocols": [
            {
                "securityProtocolName": "TLS_10",
                "securityProtocolStatus": "ENABLED"
 
Then use the following command to disable it or create a text file with the required information. 

curl -sX PUT -H "x-auth-token:$TOKEN" https://$REG.loadbalancers.api.rackspacecloud.com/v1.0/$DDI/loadbalancers/$LBID/ssltermination -H "Content-Type: application/json" \
-d '{"sslTermination":{"securityProtocols":[{"securityProtocolName": "TLS_10","securityProtocolStatus":"DISABLED"}]}}'

The file must contain the exact same information and spacing.   The file must contain the following:
 
{
  "sslTermination": {
    "securityProtocols": [
      {
        "securityProtocolName": "TLS_10",
        "securityProtocolStatus": "DISABLED"
      }
    ]
  }
}

The command to use the file is:

curl -sX PUT -H "x-auth-token:$TOKEN" https://$REG.loadbalancers.api.rackspacecloud.com/v1.0/$DDI/loadbalancers/$LBID/ssltermination -H "Content-Type: application/json" \    
-d @<filename>

You should see some the certificate returned along with the following:  

enabled":true,"secureTrafficOnly":false,"securePort":443,"cipherProfile":"default","securityProtocols":[{"securityProtocolName":"TLS_10","securityProtocolStatus":"DISABLED"}]}}

Perform the check to ensure that TLS1.0 is really disabled.

curl -sX GET -H "x-auth-token:$TOKEN" https://$REG.loadbalancers.api.rackspacecloud.com/v1.0/$DDI/loadbalancers/$LBID/ssltermination
