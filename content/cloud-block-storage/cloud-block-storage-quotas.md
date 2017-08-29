---
permalink: cloud-block-storage-quotas/
audit_date: '2017-08-29'
title: Cloud Block Storage quotas
type: article
created_date: '2014-02-12'
created_by: Rose Contreras
last_modified_date: '2017-08-29'
last_modified_by: Stephanie Fillmon
product: Cloud Block Storage
product_url: cloud-block-storage
---

By default, all new Cloud Block Storage users are assigned a 20 TB SATA and 20 TB SSD quota in each region. You can create as many volumes as you want in each category, but the total storage used by SATA volumes can't exceed 20 TB, and the total storage used by SSD volumes can't exceed 20 TB.

This quota is primarily to help with capacity planning and to prevent system abuse. If your application requires more storage than the default quota, submit a ticket to Support to ask for an increase. In your request, be sure to include the storage amount that you need (in TBs)), storage type (SATA or SSD), and region (for example, DFW or LON).

**Note**: Your Cloud Block Storage quota is independent from any other account quotas that you might have.

You can use the OpenStack Cinder API to see your current block storage quota. The following is an example of the cURL request to use:

    curl https://dfw.blockstorage.api.rackspacecloud.com/v1/<Customer Number>/os-quota-sets/<
                -H "X-Auth-Project-Id: <Customer Number>" <br>
                -H "User-Agent: python-cinderclient" <br>
                -H "Accept: application/json" <br>
                -H "X-Auth-Token: <My Auth Token>"

The response is similar to the following:

    {
        "quota_set": {
            "gigabytes": 10240,
            "id": <Customer Number>",
            "snapshots": -1,
            "volumes": 50
        }
    }

For Cinder client users, the request looks similar to the following example:

    $ cinder quota-show <Customer Number>
    +------------------+-------+
    |     Property     | Value |
    +------------------+-------+
    | backup_gigabytes |  1000 |
    |      backups     |   10  |
    |     gigabytes    |   -1  |
    |  gigabytes_SATA  | 20480 |
    |  gigabytes_SSD   | 20480 |
    |     snapshots    |   -1  |
    |  snapshots_SATA  |   -1  |
    |  snapshots_SSD   |   -1  |
    |      volumes     |   -1  |
    |   volumes_SATA   |   -1  |
    |   volumes_SSD    |   -1  |
    +------------------+-------+

- **backup_gigabytes** - Total gigabytes of space available for a customer's combined backups.
- **backups** - Total number of backups that a customer can have.
- **gigabytes** - Limit on total number of gigabytes available for all customer volumes (does not apply because this is controlled by gigabytes_SATA and gigabytes_SSD.)
- **gigabytes_SATA** - The default total size limit for all the customer's SATA volumes is 20 TB.
- **gigabytes_SSD** - The default total size for all the customer's SSD volumes is 20 TB.
- **snapshots** - Limit for the number of snapshots (no limit set.)
- **snapshots_SATA** - Limit for the number of SATA snapshots (no limit set.)
- **snapshots_SSD** - Limit for the number of SSD snapshots (no limit set.)
- **volumes** - Limit for the total number of volumes (does not apply because this is controlled by volumes_SATA and volumes_SSD.)
- **volumes_SATA** - Limit for the number of SATA volumes (no limit set.)
- **volumes_SSD** - Limit for the number of SSD volumes (no limit.)
