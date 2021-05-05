---
permalink: network-configuration-for-eth0-changed-to-dhcp-after-upgrading-rhel-centos
audit_date: '2019-02-18'
title: Network configuration for eth0 changed to DHCP after upgrading RHEL/CentOS
type: article
created_date: '2019-01-18'
created_by: Rackspace Community
last_modified_date: '2019-11-15'
last_modified_by: William Loy
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

1. Check that **nova-agent** is running on the server as it is required to automatically load the networking configuration.   This can be checked by using the following command:

         systemctl is-active nova-agent
         
   If the **nova-agent** is not running, make sure to start it and set "active" on-boot with the following sequence of commands:
         
         systemctl start nova-agent
         systemctl enable nova-agent 

2. Trigger the **nova-agent** to reload the network configuration by using one of the following options:

      - Add a Cloud Network to the server.
      
      - Use an [API call](https://docs.rackspace.com/docs/cloud-servers/v2/api-reference/svr-basic-operations/#reset-network-for-server) to trigger **resetNetwork**.[Pitchfork](https://pitchfork.rax.io/servers/#reset_network-cloud_servers) is a graphical user interface (GUI) API tool that can be used to easily access the API.
      
      - Trigger the network reset locally on the server by running the following command:

            xenstore-write data/host/$(uuidgen) '{"name":"resetnetwork", "value":""}'
 
  Warning: When adding a new Cloud Network,  do not remove or disconnect the existing Public or Private networks, otherwise you may lose your IP address.
   

3. When networking is recovered, ensure that rebooting does not continue to break networking by running the following command:

         echo -e 'network:\n  config: disabled' >> /etc/cloud/cloud.cfg.d/10_rackspace.cfg


