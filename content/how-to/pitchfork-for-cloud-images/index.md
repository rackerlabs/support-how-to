---
permalink: pitchfork-for-cloud-images/
audit_date: '2021-03-12'
title: Pitchfork for Cloud Images
type: article
created_date: '2021-02-06'
created_by: Rocio Rodriguez
last_modified_date: '2021-03-12'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

Use the following steps to create, share, delete, list, or update 
[Cloud Images](https://docs.rackspace.com/support/how-to/cloud-images-faq/) throught the API
by using Pitchfork:

### Log in to Pitchfork

Log in to the API tool [Pitchfork]](https://pitchfork.rax.io/).

To learn how to log in to and use Pitchfork, see [Pitchfork—the Rackspace Cloud API web application](https://docs.rackspace.com/support/how-to/pitchfork-the-rackspace-cloud-api-web-application).

### Using cloud images

1. After you log in to Pitchfork, click **Images**.

2. Navigate to **Images** API calls and click **Details** to expand the call.

    **Operations:** List, add, replace, or remove images.

    **Sharing:** List, delete, or update image members.

    **Tasks:** Request to export an image, get details, import, or list a
    specified task.

    **Tags:** Add or delete a specified tag of a specified image.

    **Schema:** Get a schema document or JSON schema that represents members or
    single image entities.

3. Fill in the **Parameters** and click **Send API Call**.

When the operation complets, you get a JSON response with the information you requested.

### Example of the response bodyfor a *List Image* request

 ```"images": [
        {
            "com.rackspace__1__options": "0", 
            "container_format": "ovf", 
            "min_ram": 256, 
            "updated_at": "2029-02-20T02:12:29Z", 
            "self": "/v2/images/cc45237e-27d1-4592-aa0a-817904b99c70", 
            "owner": null, 
            "file": "/v2/images/cc45237e-27d1-4592-aa0a-817904b99c70/file", 
            "flavor_classes": "*,!onmetal,!onmetal2", 
            "vm_mode": "hvm", 
            "com.rackspace__1__release_id": "debian_10_pvhvm", 
            "com.rackspace__1__build_core": "1", 
            "id": "cc45237e-27d1-4592-aa0a-817904b99c70", 
            "size": 741591040, 
            "os_distro": "debian", 
            "com.rackspace__1__release_version": "23", 
            "hypervisor_version_requires": ">=6.2", 
            "image_type": "base", 
            "org.openstack__1__os_version": "10", 
            "disk_format": "vhd", 
            "com.rackspace__1__platform_target": "PublicCloud", 
            "com.rackspace__1__build_managed": "1", 
            "org.openstack__1__architecture": "x64", 
            "schema": "/v2/schemas/image", 
            "status": "active", 
            "com.rackspace__1__visible_core": "1", 
            "tags": [], 
            "com.rackspace__1__ui_default_show": "True", 
            "com.rackspace__1__release_build_date": "2021-02-20_01-39-41", 
            "visibility": "public", 
            "com.rackspace__1__visible_rackconnect": "1", 
            "min_disk": 10, 
            "org.openstack__1__os_distro": "org.debian", 
            "com.rackspace__1__visible_managed": "1", 
            "virtual_size": null, 
            "name": "Debian 10 (Buster) (PVHVM)", 
            "com.rackspace__1__build_rackconnect": "1", 
            "checksum": "2deba9ca87f5e90d602edb59ebc96698", 
            "created_at": "2021-02-20T01:39:41Z", 
            "cache_in_nova": "True", 
            "com.rackspace__1__build_config_options": "rack_user_only,base_mgdops_config,mailgun,backup_agent_only,backup_defaults,monitoring_agent_only,monitoring_defaults,updates", 
            "protected": true, 
            "auto_disk_config": "disabled", 
            "os_type": "linux", 
            "com.rackspace__1__source": "kickstart"
        }
 ```
