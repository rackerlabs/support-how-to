---
permalink: network-configuration-for-eth0-changed-to-dhcp-after-upgrading-rhel-centos/
audit_date: '2019-02-18'
title: Network configuration for eth0 changed to DHCP after upgrading RHEL/CentOS
type: article
created_date: '2019-01-18'
created_by: Rackspace Community
last_modified_date: '2019-11-15'
last_modified_by: Erik Wilson
product: Cloud Servers
product_url: cloud-servers
---

When you upgrade to RHEL® CentOS® 7.4, rebooting causes the eth0 configuration to change to Dynamic Host
Configuration Protocol (DHCP). This change breaks network connectivity.

**Note:** The RackConnect v2 servers are not affected.

## Check if your server is affected

Rackspace public cloud servers with a directly-attached public Internet Protocol (IP) address and Rackconnect v3 public cloud servers are likely to be affected by this issue.

To determine if your server is affected, run the following command:

      cat /var/run/cloud-init/result.json

If you receive the following results, your server is affected:

        {
          "v1": {
            "datasource": "DataSourceNone",
            "errors": []
          }

If you receive the following results, your server is not affected:

        {
          "v1": {
            "datasource": "DataSourceConfigDrive [net,ver=2][source=/dev/xvdd]",
            "errors": []
          }

If your server is affected, it is because the **cloud-init** application is looking for a datasource that Rackspace does not provide by default.

If you have not rebooted, run the following command to fix this issue. You do not have to uninstall the package.

      echo -e 'network:\n  config: disabled' >> /etc/cloud/cloud.cfg.d/10_rackspace.cfg

This command stops the **cloud-init** application from deleting your `eth0` configuration on reboot.

If you have rebooted and networking is down, complete the following steps:

1. Check that **nova-agent** is running on the server as it is required to automatically load the networking configuration.

         systemctl is-active nova-agent
         
   If the agent is not running, make sure to start it and set "active" on-boot.
         
         systemctl start nova-agent
         systemctl enable nova-agent 

2. Trigger the **nova-agent** to reload the network configuration by either adding a Cloud Network to the server, sending an application programming interface (API) call to "reset network", or trigger the reset locally on the server.
 
   If adding a new Cloud Network, make sure when you remove it that you do not remove/disconnect the existing Public or Private networks, otherwise you may lose your IP address.

   You cannot trigger the "reset network" [API call](https://developer.rackspace.com/docs/cloud-servers/v2/api-reference/svr-basic-operations/#reset-network-for-server) through the Rackspace MyCloud portal. You must use the API. The easiest way to use the API is with the unofficial graphical user interface (GUI) API tool, [Pitchfork](https://pitchfork.rax.io/servers/#reset_network-cloud_servers).
   
   To trigger the reset on the server itself, run the following command (requires the **uuidgen** command):
   
       xenstore-write data/host/$(uuidgen) '{"name":"resetnetwork", "value":""}'

3. After you recover networking, run the following command or rebooting continues to break networking:

         echo -e 'network:\n  config: disabled' >> /etc/cloud/cloud.cfg.d/10_rackspace.cfg


