---
permalink: reset-a-cloud-server-network-with-pitchfork
audit_date: '2020-04-30'
title: 'Reset a Cloud Server network with Pitchfork'
type: article
created_date: '2020-04-30'
created_by: Evan Benavides
last_modified_date: '2020-05-01'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to reset a Cloud Server's network with the API tool, Pitchfork.

**NOTE:** Do not use this article for servers that use RackConnect v2 because resetting the network breaks RackConnect connectivity. However, you can use this API call with RackConnect v3 Cloud Servers. If you're unsure which version of RackConnect you have, reach out to your Support team for further assistance.

### Prerequisites

You need to ensure the `nova-agent` service is running on the Cloud Server before proceeding. If the service isn't running, the API call doesn't complete successfully despite responding with a `202` status code. For more information on `nova-agent` see [Nova agent (Linux) and Rackspace Agent (Windows)](/support/how-to/nova-agent-unix-and-rackspace-agent-windows/).

### Log in to Pitchfork

Log in to Pitchfork at: [https://pitchfork.rax.io/](https://pitchfork.rax.io/)

Refer to [Pitchfork - the Rackspace Cloud API web application](/support/how-to/pitchfork-the-rackspace-cloud-api-web-application/) to learn how to log in to and use Pitchfork.

### Reset the network with Pitchfork

1. After you log in to Pitchfork, click on the **Cloud Servers** icon to pull up the Cloud Server API calls.

2. At the top of this page, click the **Region** drop-down box to select the region the server resides in.

3. Next, navigate to the **Actions** section to find the **Reset Network** API call. Then, click **Details** to expand the    call.

4. Enter the server's ID, or UUID, in the **server_id** box and click **Send API Call**. The **Response Body** output of the API call displays the following message, which indicates success:

`No content received. Status Code: 202`

**Note**: To find the server UUID, go to the **Server Details** page of the Rackspace Cloud Control panel and locate the UUID on the **ID** line.

You should now be able to perform reset network API calls for Cloud Servers.
