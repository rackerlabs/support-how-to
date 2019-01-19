---
permalink: network-config-for-eth0-changed-to-dhcp
audit_date:
title: Network Config for eth0 Changed to DHCP After Upgrading RHEL/CentOS
created_date: '2019-01-18'
created_by: Rackspace Community
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

This is a known issue.  Upgrading to RHEL/CentOS 7.4, then rebooting causes eth0 configuration to change to DHCP (breaking network connectivity).
Confirmed not affected:
RackConnect v2 servers
Checking if your server is affected:
Rackspace public cloud servers with a directly-attached public IP and Rackconnect v3 public cloud servers are likely to be affected. Run the command: 

cat /var/run/cloud-init/result.json

You can tell whether or not you are affected by the result of this command.

Affected:
{

  "v1": {

    "datasource": "DataSourceNone",

    "errors": []

  }

Not affected:
{   "v1": {     "datasource": "DataSourceConfigDrive [net,ver=2][source=/dev/xvdd]",     "errors": []   } }
Problem:
The cloud-init application is looking for a datasource and Rackspace does not provide one by default. The fix for this is easy to do and you do not have to downgrade the package.
Solution:
If you haven't rebooted yet, run the following command:
echo -e 'network:\n  config: disabled' >> /etc/cloud/cloud.cfg.d/10_rackspace.cfg

This will stop cloud-init from wiping your eth0 configuration on reboot.

If you rebooted already and networking is down:
You can quickly recover networking by adding a Cloud Network to the server or by doing a reset network API call. The reset-network call is not available via the mycloud portal, only via the API. The easiest way to use the API is with the unofficial GUI API tool, Pitchfork: https://pitchfork.cloudapi.co/servers/#reset_network-cloud_servers 

After you recover networking:
Be sure to apply the solution listed in the "Solution" section. Otherwise, rebooting will break networking again.
