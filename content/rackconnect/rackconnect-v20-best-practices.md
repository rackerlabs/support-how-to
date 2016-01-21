---
node_id: 2053
title: RackConnect v2.0 Best Practices
type: article
created_date: '2012-08-23'
created_by: Juan Perez
last_modified_date: '2015-09-04'
last_modified_by: Constanze Kratel
product: RackConnect
product_url: rackconnect
---

**APPLIES TO**: RackConnect v2.0

This document outlines [recommendations](#recommendations) and
[cautions](#cautions) based on customer feedback with RackConnect.

### Recommendations

#### Use RackConnect Network Policies to make changes to network access for your Cloud Servers

When you need to open ports to or from your Cloud Server, or you need to
make changes to the software firewall, you *must* use the RackConnect
Network Policies section of the
[MyRackspace ](https://my.rackspace.com/)Portal to make the changes.  If
you use the Firewall Control Panel, the RackConnect automation that
services your installation could fail, a conflict in your Network
Policies might arise, and your rules will be removed when there are
updates to the system.  A note on terminology: "software firewall"
refers to IPTables in Linux and Windows Firewall in Windows.

**Note:** The term *software firewall* refers to iptables in Linux, and
Windows Firewall in Windows.

#### Monitor your Cloud Server status during a rebuild

If you rebuild a server, you can monitor its automation status in the
RackConnect Management Interface in the
[MyRackspace](https://my.rackspace.com/)Portal or you can use the [API
to monitor the automation
status](/how-to/how-to-programmatically-determine-the-rackconnect-v20-automation-status-of-your-cloud).

#### **Understand how your servers use RackConnect**

In order to understand how RackConnect transfers data to your Cloud
Server, please read the following description of the process.

-   The traffic flow is between the eth0 / public interfaces
    (Private IP) on your Dedicated servers to the eth1 / private
    interfaces (Private IP) on your Cloud Servers.
-   The gateway for the Cloud Servers is configured on your Dedicated
    Firewall or Load Balancer.
-   Traffic speed is generally limited by the slowest network in
    your environment. A Dedicated Firewall or Load Balancer with a
    slower (less than 1GB) network interface will limit speeds, and
    Dedicated servers (currently on a 1GB network) won't be able to take
    direct advantage of the higher network speed for our General
    Purpose and work-optimized Cloud Servers (currently on a
    10GB network).
-   The **eth0 / public interface is disabled** on your Cloud Servers
    and ALL traffic must flow from the eth1 / private interface through
    your Dedicated Firewall or Load Balancer.

Traffic flow between Dedicated and Cloud Servers: RackConnect Firewall

<img src="http://www.rackspace.com/knowledge_center/sites/default/files/styles/full_width/public/field/image/RC.Traffic.Flow_.png" class="image-full_width" />




 Traffic Flow between Dedicated and Cloud Servers: RackConnect Load
Balancer

<img src="http://www.rackspace.com/knowledge_center/sites/default/files/styles/full_width/public/field/image/RC.Traffic.Flow_.LB_.png" class="image-full_width" />


------------------------------------------------------------------------

### Cautions

#### Do not change your root/administrator password before your Cloud Server is deployed

For several minutes after your Cloud Server is built, automation scripts
use the root/administrator password to establish a service account.  The
service account is used to configure the server for RackConnect as well
as implement updates to the server in the future.  If the password is
changed before the service account can be created, the automation
fails.  You may change the root/administrator password after your Cloud
Server is deployed.  You know it is deployed when the Server's status
shows a green circle in
the [MyRackspace ](https://my.rackspace.com/)Portal under **Network**
-&gt; **RackConnect** -&gt; &lt;**yourCloudAccount**&gt; -&gt;
**&lt;yourCloudServer&gt;** (*not* under the Cloud Server tab).

#### Do not delete or modify the "rackconnect" user

When RackConnect is implemented on your Cloud Servers, a user account
named "rackconnect" is created with administrator rights.  Automation
scripts depend on this user and without it, the scripts fail.  If this
user is deleted, it must be re-created.

*Linux users:* If you modify the /etc/sudoers file, be sure to keep all
references to the "rackconnect" user unchanged.  If you change the login
authentication method from password authentication to key based
authentication, be sure to still allow password authentication for the
"rackconnect" user.

*Windows users:* The user needs to be in the Administrators group.  If
you update your server to be a domain controller, be sure to create a
ticket and inform the RackConnect team about this change.  You must
manually create a &ldquo;rackconnect&rdquo; user account on the domain and add the
account to the &ldquo;Domain Admins&rdquo; global group.  The RackConnect team will
add &ldquo;DOMAIN\\rackconnect&rdquo; account to the RackConnect system instead of
&ldquo;rackconnect&rdquo; to get RackConnect to work with your server.

#### Do not prevent the root user from logging in using Password Authentication via SSH before the completion of the initial RackConnect process

RackConnect does not support key-based authentication, so password
authentication must be allowed for the root user during the RackConnect
automation process.

The PermitRootLogin entry must be set to YES in the sshd config file
during the initial process of connecting your Linux Cloud Servers
through RackConnect. After the "rackconnect" user has been added to the
server, and your server is properly deployed with RackConnect, SSH
access by the root user can be disabled because RackConnect uses the
"rackconnect" user from that point forward.

#### Do not modify the standard port used by SSH (Port 22)

If you modify the port number, RackConnect automation breaks. Rackspace
does not have the ability to support non-standard SSH ports at this
time.

#### Do not mount an NFS on a dedicated hosted system before completion of the initial RackConnect process

The RackConnect initial process gives the cloud server access to the
dedicated network, so mounting a network file share before the process
is complete causes the process to fail.

#### **Do not use overly complicated network configurations with RackConnect Cloud Servers**

Complex networking configurations, such as bridged interfaces, will
likely break RackConnect automation.

#### **Do not enable SELinux on RackConnect Cloud Servers**

Rackspace does not currently support Security-Enhanced Linux (SELinux).
If it is enabled, disable it or set it to Permissive mode.

#### Do not remove any basic system utilities like sed, awk, or ip from Linux Cloud Servers

Removing basic system utilities such as sed, awk, or ip can break the
RackConnect automation process.

<span> </span>

