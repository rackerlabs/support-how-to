---
node_id: 3261
title: RackConnect Auto NAT Feature
type: article
created_date: '2013-01-16'
created_by: Juan Perez
last_modified_date: '2014-10-21'
last_modified_by: Kyle Laffoon
product: RackConnect
product_url: rackconnect
---

<span style="line-height: 1.538em;">RackConnect Auto NAT is a new
feature available to RackConnect 2.0 customers that have Automation
Features enabled.  It provides the ability to allocate a set of
pre-routed dedicated public IP addresses for use with new RackConnect
cloud servers.  This allows you to assign one of the specific public IP
addresses from the set to new RackConnect cloud servers at build time.
These IP addresses are allocated out of your dedicated IP address space,
just like normal RackConnect public IP addresses are, but with Auto NAT
IP addresses, you now have the ability to select the specific IP that is
assigned to a cloud server at build time.</span>

### Requirements for utilizing the RackConnect Auto NAT feature

1.  RackConnect 2.0 Automation Features must be enabled on your
    cloud account.
2.  A set of dedicated public IP addresses must be allocated for use
    with the Auto NAT feature.  Your Support Team can help you get this
    set up.
3.  Once your Auto NAT IP addresses have been allocated, your Support
    Team will provide you with a list of Auto NAT Public IP addresses
    that have been allocated to you.
4.  When creating new cloud servers, you must use the [Cloud Servers
    API](http://docs.rackspace.com/servers/api/v2/cs-devguide/content/ch_preface.html)
    to enter the Metadata information required to assign an Auto NAT IP
    to a cloud server at build time
5.  When creating a new cloud server you would like configured with an
    Auto NAT Public IP, you will need to enter the following Metadata
    values to assign that IP to the cloud server:
    -   **Key**: RackConnectPublicIP
    -   **Value**: &lt;Enter the Auto NAT Public IP Address you would
        like to use&gt;

**IMPORTANT**: You can specify the metadata values when you use the
Cloud Servers API to create new cloud servers. Please view the Cloud
Servers API documentation for more details about how to use the API to
enter metadata information for a cloud server: [Cloud Servers Developer
Guide: Set
Metadata](http://docs.rackspace.com/servers/api/v2/cs-devguide/content/Create_or_Replace_Metadata-d1e5358.html).

*NOTE:* *The Auto NAT feature is set at the RackConnect Configuration
level.  You can utilize Auto NAT IP addresses that have been allocated
to your configuration across multiple cloud accounts in your environment
as long as they are part of the same RackConnect Configuration, and as
long as each cloud account has Automation Features enabled.*

**IMPORTANT:** If you attempt to assign an Auto NAT IP address that is
already in use, the allocation process will fail silently and will
revert to allocating a normal (Non-Auto NAT) IP address to your cloud
server.

### Auto NAT feature benefits

By utilizing the Auto NAT feature, you now have the ability to
effectively move a single public IP address across cloud servers as you
provision and de-provision them.  Please keep in mind that the Auto NAT
feature only assigns a designated IP address to a cloud server during
the initial build process, so the Auto NAT feature will \*not\* allow
you to move an Auto NAT IP address between two cloud servers that are
already in an active state.

<span style="line-height: 1.538em;">Here is a scenario that covers one
possible method you can use to move a single public IP address to a new
cloud server using the Auto NAT feature.  </span><span
style="line-height: 1.538em;">Let us say you have created a cloud server
called MyAutoNAT-A and built it with an AutoNAT IP address of 10.A.A.A.
 Y</span><span style="line-height: 1.538em;">ou then decide to build a
new server call </span><span style="line-height: 1.538em;">MyAutoNAT-B,
but you would like it to use the AutoNAT IP address that is currently
assigned to </span>MyAutoNAT-A <span
style="line-height: 1.538em;">of 10.A.A.A.</span>

1.  The first step towards accomplishing this is going to be to delete
    the MyAutoNAT-A cloud server, so that the AutoNAT IP address of
    10.A.A.A is placed back into the set of available AutoNAT
    IP addresses.
2.  Now you can create the MyAutoNAT-B cloud server, and during the
    build process you can enter the Metadata 'Key' of
    RackConnectPublicIP, along with an associated Auto NAT IP address
    'Value' of 10.A.A.A.

### <span style="line-height: 1.538em;">Removing Auto NAT IP addresses</span>

As discussed in the scenario above, Auto NAT IP addresses are only
removed from a cloud server and placed back into the set of available
Auto NAT IP addresses when that cloud server is deleted.  It is not
possible to remove the Auto NAT IP address assigned to a cloud server
that is still 'Active'.

### Additional Information

The Auto NAT feature is available to all RackConnect 2.0 customer with
Automation Features enabled as of January 16, 2013.  For details
regarding the RackConnect Automation features, please view the
[RackConnect Automation Features
FAQ](/how-to/rackconnect-v20-automation-features-faq).

If you have any further questions regarding the RackConnect Auto NAT
feature, please contact your Support Team.

