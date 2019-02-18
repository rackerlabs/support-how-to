---
permalink: network-configuration-for-eth0-changed-to-dhcp-after-upgrading-rhel-centos
audit_date: '2019-02-18'
title: Network configuration for eth0 changed to DHCP after upgrading RHEL/CentOS
created_date: '2019-01-18'
created_by: Rackspace Community
last_modified_date: '2019-02-18'
last_modified_by: 'Erik Wilson'
product: Cloud Servers
product_url: cloud-servers
---

When upgrading to RHEL/CentOS 7.4, rebooting causes the `eth0` configuration to change to DHCP. This breaks network connectivity.

**Note:** The RackConnect v2 servers are not affected.

## Check if your server is affected

Rackspace public cloud servers with a directly-attached public IP and Rackconnect v3 public cloud servers are likely to be affected by this issue.

To determine if your server is affected, run the following command:

      cat /var/run/cloud-init/result.json

The results of this command show if your server is affected.

If you receive the following results, your server is affected:
        {

          "v1": {

            "datasource": "DataSourceNone",

            "errors": []

          }

If you receive the following results, your server is not affected:

      {   "v1": {     "datasource": "DataSourceConfigDrive [net,ver=2][source=/dev/xvdd]",     "errors": []   } }


If your server is affected, the problem is that the `cloud-init` application is looking for a datasource that Rackspace does not provide by default.

Run the following commands to fix this issue. You do not have to downgrade the package.

If you have not rebooted yet, run the following command:

      echo -e 'network:\n  config: disabled' >> /etc/cloud/cloud.cfg.d/10_rackspace.cfg

This command stops the `cloud-init` application from deleting your `eth0` configuration on reboot.

If you rebooted already and networking is down, complete the following steps:

1. Add a Cloud Network to the server or reset the network API call.

   You cannot reset the network API call through the mycloud portal. You must use the API. The easiest way to use the API is with the unofficial GUI API tool, Pitchfork: https://pitchfork.cloudapi.co/servers/#reset_network-cloud_servers.

2. After you recover networking, run the following command or rebooting will continue to break networking:

      echo -e 'network:\n  config: disabled' >> /etc/cloud/cloud.cfg.d/10_rackspace.cfg


