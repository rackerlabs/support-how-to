---
permalink: pitchfork-create-servers/
audit_date: '2021-03-10'
title: Pitchfork: Create server
type: article
created_by: Rocio Rodriguez
created_date: '2021-03-02'
last_modified_date: '2021-03-10'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

Use the following steps to set up a cloud server using Pitchfork. If you want to create  a new server from
the Cloud Control Panel interface, use the [Create a server article](/support/how-to/create-a-cloud-server). 

### Create server

1. Log in to the [API tool Pitchfork](https://pitchfork.rax.io/). 

   **Note**: To learn more about the Pitchfork login instructions and uses, refer to
   [Pitchfork—the Rackspace Cloud API web application](/support/how-to/pitchfork-the-rackspace-cloud-api-web-application). 

2. Click on the **Servers** section to pull up the Servers API calls.

3. Navigate to the **Servers** section to find the **Create Server** API call. Then, click **Details** to expand the call.

4. In the **Parameters** section, enter a name for your server in the ***server_name*** field.

5. Choose the appropriate **flavor** for the server in the ***flavor_id*** field.

   **Note**: To get a flavor id list, you can use the **List Flavors** API call.

   For more information about flavors, see the
   [ Cloud Core Infrastructure User Guide](https://docs.rackspace.com/docs/user-guides/infrastructure/cloud-config/compute/cloud-servers-product-concepts/flavor-class/#cloud-servers-flavor-class).

6. If you need to boot the new server from an existing volume, you need to populate the ***image_id*** field.
   You can get an image list by using the **List Images** API call.

7. Click **Send API Call**.

   **Warning**: This action can be destructive or can result in additional charges to the account.

After provisioning is complete, your server displays the status **Running** and is now available for remote connection.
Specific remote connection instructions for your server display in the side bar on the right-hand side of the Cloud Control Panel.
