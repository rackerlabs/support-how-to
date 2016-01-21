---
node_id: 2056
title: Multiple SSL Certificates on a Single RackConnected Cloud Server (PAT)
type: article
created_date: '2012-08-23'
created_by: Juan Perez
last_modified_date: '2014-10-03'
last_modified_by: Jered Heeschen
product: RackConnect
product_url: rackconnect
---

Each Cloud Server comes with a single private IP address.  When
leveraging RackConnect, if you need direct access to the Cloud Server
from the Internet, you can utilize the public IP assigned to your
RackConnected Cloud Server (the "Provision public IP address" Automation
Feature must be enabled).  This public IP will leverage a NAT (Network
Address Translation) on your network device to translate the public IP
to the private IP of your Cloud Server.

Sometimes, a use case will arise where you need to have more than one
public IP assigned to a single Cloud Server.  The most common case for
this is when you are hosting multiple SSL sites on a single Cloud Server
and are not able to use a wildcard certificate.  Since only one private
(10.x) address is allowed on each Cloud Server, this setup can be
accomplished leveraging PAT (Port Address Translation) on your network
device versus NAT.

For example, if you have a single Cloud Server that you want to use to
host https:// www.&lt;example-domain&gt;.com and https://
www.&lt;example-domain-2&gt;.com, we could setup your network device as
follows:

-   Cloud Server private IP address is 10.1.1.1
-   DNS points www.&lt;example-domain&gt;.com to public IP 1.1.1.1
-   DNS points www.&lt;example-domain-2&gt;.com to public IP 1.1.1.2
-   PAT entry on network device points 1.1.1.1 port 443 to 10.1.1.1 port
    8443
-   PAT entry on network device points 1.1.1.2 port 443 to 10.1.1.1 port
    8444

On your Cloud Server, you would configure your web server software (e.g.
Apache or IIS) to listen on ports 8443 and 8444 (they would be able to
distinguish which site the encrypted traffic was destined for based on
the unique port number).


Please contact your Dedicated Support team for assistance with setting
up PAT on your network device.

