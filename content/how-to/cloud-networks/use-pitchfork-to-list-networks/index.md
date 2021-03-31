---
permalink: use-pitchfork-to-list-networks/
audit_date: '2021-03-12'
title: Use Pitchfork to list networks
type: article
created_date: '2021-02-06'
created_by: Rocio Rodriguez
last_modified_date: '2021-03-12'
last_modified_by: Rose Morales
product: Cloud Networks
product_url: cloud-networks
---

Cloud Networks lets you create and manage secure, isolated networks in the
cloud. Use the following steps to list via API call
[Cloud Networks](https://docs.rackspace.com/support/how-to/cloud-networks) all Cloud
Networks that tenant has access to:

### Log in to Pitchfork

Log in to the API tool [Pitchfork](https://pitchfork.rax.io/).

To learn how to log in to and use Pitchfork, refer to 
[Pitchfork—the Rackspace Cloud API web application](/support/how-to/pitchfork-the-rackspace-cloud-api-web-application).

### List networks

1. Click the **Networks** section.
2. Navigate to the **Networks** > **List Networks**.
3. Click **Details**.
4. Click **Send API Call**.

The **Response Body** output of the API call displays the Networks and status, as shown in the following example:

```json
{
"networks": [
        {
            "status": "ACTIVE", 
            "subnets": [
                "f33aa5e1-e8da-4dee-8dc4-b48e4c64f615"
            ], 
            "name": "test", 
            "admin_state_up": true, 
            "tenant_id": "000000", 
            "shared": false, 
            "id": "3ae3d620-8e3e-45cb-a3cb-e44bd7d178e3"
        }, 
        {
            "status": "ACTIVE", 
            "subnets": [
                "a707f9a7-5284-4d1d-bd80-65410e1d37ff"
            ], 
            "name": "FW-routed", 
            "admin_state_up": true, 
            "tenant_id": "000000", 
            "shared": false, 
            "id": "529d4fd4-9816-415b-a715-3529d7df49cb"
        }, 
        {
            "status": "ACTIVE", 
            "subnets": [
                "eca4bab4-a35a-4a02-885d-be8edc5bad6b"
            ], 
            "name": "test2", 
            "admin_state_up": true, 
            "tenant_id": "000000", 
            "shared": false, 
            "id": "81b11889-909e-4fcd-a0ee-5ecc3d111439"
        }, 
        {
            "status": "ACTIVE", 
            "subnets": [
                "2b3cff8b-c3ef-48f9-9415-2af39ef37c89"
            ], 
            "name": "aznet", 
            "admin_state_up": true, 
            "tenant_id": "000000", 
            "shared": false, 
            "id": "fa9559b8-c66c-433c-ae1a-35431d4a444a"
        }
    ], 
    "networks_links": [
        {
            "href": "http://localhost:9696/v2.0/networks?marker=3ae3d621-8e3e-45cb-a3cb-e44bd7d178e2&page_reverse=True", 
            "rel": "previous"
        }
    ]
}
```
