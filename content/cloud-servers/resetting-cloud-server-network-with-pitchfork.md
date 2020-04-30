---
permalink: resetting-cloud-server-network-with-pitchfork/
audit_date:
title: 'Resetting a Cloud Server's network through Pitchfork'
type: article
created_date: '2020-04-30'
created_by: Evan Benavides
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

This article goes over the steps necessary to reset a Cloud Server's network with the API tool, Pitchfork.

**NOTE:** This guide is *NOT* intended for servers using RackConnect v2 as resetting the network will break RackConnect's connectivity. This API call can be used on RackConnect v3 Cloud Servers. If you're unsure which version of RackConnect you have please reach out to your support team for further assistance.

### Prerequisites

You'll need to ensure the nova-agent service is running on the Cloud Server before proceeding. If the service isn't running then the API call won't complete successfully despite responding with a 202 status code. For more information on nova-agent see the following article:

https://support.rackspace.com/how-to/nova-agent-unix-and-rackspace-agent-windows/

You'll first need to log in to the API tool Pitchfork at: https://pitchfork.rax.io/

The following guide shows how to log in to and use Pitchfork:

https://support.rackspace.com/how-to/pitchfork-the-rackspace-cloud-api-web-application/

### Resetting the network through Pitchfork

1. Once you're logged into Pitchfork you'll want to click on the 'Cloud Servers' icon to pull up the section of Cloud Servers' API calls.

2. At the top of this page you'll want to click the 'Region' drop down box to select the region the server resides in.

3. Next, you'll want to navigate to the 'Actions' section where you'll find the 'Reset Network' API call. From here you can click on the 'Details' button to expand the call.

4. The API call will require the 'server_id' which is going to be the UUID of the server. This can be found on the server details page in the Rackspace Cloud control panel in the 'ID' line. Once this is placed in the 'server_id' box you can then click the 'Send API Call button'. In the 'Response Body' output of the API call you should see the following:

`No content received. Status Code: 202`


You should now be able to perform reset network API calls for Cloud Servers. If you have any questions or issues please contact your support team for further assistance.
