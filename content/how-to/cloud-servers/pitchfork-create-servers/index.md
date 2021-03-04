---
permalink: pitchfork-create-servers/
audit_date: '2021-03-02'
title: Pitchfork: Create servers
type: article
created_by: Rocio Rodriguez
created_date: '2021-03-02'
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

Use the following steps to set up a [cloud server](https://pitchfork.rax.io/) using Pitchfork. If you would like to create  a new server from your Cloud Control Panel interface you can follow this [guide](https://docs.rackspace.com/support/how-to/create-a-cloud-server)

### Log in to Pitchfork

Log in to the API tool Pitchfork [https://pitchfork.rax.io/](https://pitchfork.rax.io/)

To learn how to log in to and use Pitchfork, refer to [Pitchfork—the Rackspace Cloud API web application](https://docs.rackspace.com/support/how-to/pitchfork-the-rackspace-cloud-api-web-application)

### Create servers

This call will allow you to create a new server via API using Pitchfork.

1. After you log in to Pitchfork, click on the **Servers** section to pull up the Servers API calls.

2. Navigate to the **Servers** section to find the **Create Server** API call. Then, click **Details** to expand the call.

3. In the **Parameters** section, enter a name for your server in the ***server_name*** field.

4. Choose the appropriate **flavor** for the server in the ***flavor_id*** field.
To get a flavor id list you can use the **List Flavors** API call.
For more information about flavors, see the [ Cloud Core Infrastructure User Guide](https://docs.rackspace.com/docs/user-guides/infrastructure/cloud-config/compute/cloud-servers-product-concepts/flavor-class/#cloud-servers-flavor-class)

5. If you require to boot the new server from an existing volume you will need to fill the ***image_id*** field.
You can get an image list using the **List Images** API call.

6. Click **Send API Call**.

Warning! This action can be destructive or can result in additional charges to the account.

After provisioning is complete, your server displays the status Running and is now available for remote connection. Specific remote connection instructions for your server are displayed in the side bar on the right of the Cloud Control Panel.
