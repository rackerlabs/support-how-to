---
node_id: 3172
title: Configuring OpenStack Block Storage
type: article
created_date: '2012-11-05'
created_by: Karin Levenstein
last_modified_date: '2015-09-23'
last_modified_by: Kyle Laffoon
product: Rackspace Private Cloud Powered by OpenStack
product_url: rpc-openstack
---

Rackspace has developed a set of OpenStack Block Storage (Cinder) chef
recipes, combined into a cookbook, that can be used to configure a
Cinder node or group of nodes. This section discusses the concepts and
architecture behind Cinder and describes the procedures for configuring
Cinder nodes.

### Block Storage Overview

The Cinder project provides "block storage as a service" functionality
in OpenStack. Beginning in the Folsom release and going forward, it is
designed to replace the nova-volumes service.

The Cinder architecture includes the following components:

-   **API service**: Responsible for receiving and handling requests and
    placing them in the message queue. OpenStack clusters deployed with
    Rackspace Private Cloud will use rabbitmq.
-   **Scheduler service**: Assigns tasks in the queue and determines the
    volume server to which provisioning requests are sent.
-   **Volume service**: Runs on the storage node and manages the
    storage space. The volume service can run on multiple nodes, each
    constituting part of the block storage "pool"; the scheduler service
    will distribute requests across all nodes that are running the
    volume service.

With the Rackspace Private Cloud Cinder recipes, you can install the
services across multiple nodes or all together on a single node. The
Rackspace Private Cloud cookbooks provide convenient chef roles to
assist in installing services on nodes. The `cinder-api`{.filename},
`cinder-scheduler`{.filename}, and `cinder-volume`{.filename} roles,
when applied to a node, will install the respective services by running
the relevant recipes. The `cinder-all`{.filename} meta-role includes all
three cinder roles.

### Adding Volume Storage Nodes

Rackspace Private Cloud installs `cinder-api`{.filename} and
`cinder-scheduler`{.filename} on the controller node by default. You
will need to add additional `cinder-volume`{.filename} nodes to use
OpenStack Block Storage on your cluster.

#### Node Prerequisites

Rackspace recommends that the physical server that will become a Cinder
volume node or a Cinder all-in-one node meet the following criteria.

-   1 core per 3TB capacity
-   At least 6 SATA or SAS drives of at least 1TB capacity each.
-   At least 2GB RAM, plus an additional 250MB RAM per TB of drive.
-   RAID Controller with battery backup in RAID5 or
    RAID10 configuration.

Your environment must meet the following criteria.

-   An OpenStack controller node is running Nova controller components
    and APIs, Glance, Horizon, Keystone, rabbitmq, and MySQL, installed
    with Rackspace Private Cloud.
-   At least one node is running nova-compute, and was installed with
    Rackspace Private Cloud.
-   A Chef server is available on the cluster.
-   You have the means to install Ubuntu 12.04 on the server where the
    Cinder node will exist.
-   You DO NOT already have a node running nova-volumes in the
    OpenStack cluster.

#### Volume Storage Installation

1.  Install Ubuntu 12.04 on the server that will become the Cinder
    volume node.
2.  Install and configure chef-client on the new server. The following
    commands will ensure that the chef-client points to the Chef server
    on the controller node.

    ``` {.screen}
    $ curl -L http://opscode.com/chef/install.sh | bash
    $ mkdir -p /etc/chef
    $ export chef=<yourControllerIP>
    $ cat > /etc/chef/client.rb <<EOF
        chef_server_url "http://${chef}:4000"
        environment "rpcs"
      EOF

    ```

3.  On the controller node, locate
    `/etc/chef/validation.pem`{.filename}.
4.  Copy this file to `/etc/chef/`{.filename} on the new server.
5.  Run chef-client on the new server to register the new server.

    ``` {.screen}
    $ rm -fr /etc/chef/client.pem ; chef-client

    ```

6.  Log into the controller node and switch to root access with
    `sudo -i`. Update the cookbooks and roles with the procedure
    documented in "Update the Cookbooks".
7.  Create an LVM volume group on the new server. In this example, the
    server has a disk that appears as `/dev/sdb`{.filename}, and a
    volume group called `cinder-volumes`{.filename}will be created on
    this disk.

    ``` {.screen}
    $ ssh <serverIP>
    $ sudo pvcreate /dev/sdb
    $ sudo vgcreate cinder-volumes /dev/sdb

    ```

8.  On the controller node, execute the following knife command to add
    the `cinder-volume`{.filename} role to the server. For
    `<serverName>`{.filename}, substitute the fully qualified domain
    name of the server, such as `cindervolume1.mydomain.com`{.uri}.

    ``` {.screen}
    $ knife node run_list add <serverName> 'role[cinder-volume]'

    ```

9.  Run chef-client on the server to complete the process.

    ``` {.screen}
    $ ssh my.new.server
    $ sudo chef-client

    ```

When the procedure is complete, you should receive output similar to the
following:

``` {.screen}
[2012-10-30T10:32:02+00:00] INFO: *** Chef 10.14.2 ***
[2012-10-30T10:32:04+00:00] INFO: Run List is [role[cinder-volume]]
<--output truncated-->
[2012-10-29T16:23:34+00:00] INFO: Running report handlers
[2012-10-29T16:23:34+00:00] INFO: Report handlers complete

```

When the process is complete, the new Cinder volume node will be ready
to use.

### Create a Volume

Volumes can be created through the Dashboard or with
python-cinderclient. The client is installed by default on the cinder
node, but you can install it on your local workstation with the
following command:

``` {.screen}
$ sudo apt-get install python-cinderclient

```

You should also ensure that your workstation's environment variables
have been set correctly, as described in Viewing and Setting Environment
Variables.

In this example, a volume called `myvolume`{.filename} with a size of 1
is created and attached to an instance with python-cinderclient.

``` {.screen}
$ cinder create --display-name myvolume 1
+---------------------+--------------------------------------+
|       Property      |                Value                 |
+---------------------+--------------------------------------+
|     attachments     |                  []                  |
|  availability_zone  |                 nova                 |
|      created_at     |      2012-10-29T17:16:23.260483      |
| display_description |                 None                 |
|     display_name    |               myvolume               |
|          id         | 845514f9-8fff-44bb-b82a-27d4e32b9939 |
|       metadata      |                  {}                  |
|         size        |                  1                   |
|     snapshot_id     |                 None                 |
|        status       |               creating               |
|     volume_type     |                 None                 |
+---------------------+--------------------------------------+

$ cinder list
+------------------------+-----------+---------+------+--------+---------+
|          ID            |   Status  | Display | Size | Volume | Attached|
|                        |           | Name    |      | Type   | to      |
+------------------------+-----------+---------+------+--------+---------+
| 845514f9[id truncated] | available |myvolume |  1   | None   |         |
+------------------------+-----------+---------+------+--------+---------+
```

This volume is now available to be attached to a nova instance. For this
example, `myvolume`{.filename} will be attached to an instance called
`myserver`{.filename} with the `nova volume-attach` command. The `auto`
argument allows the Block Storage API to determine how the disk will
appear when its information is viewed from within the virtual machine.
In this case, Cinder assigns a block device named `/dev/vdb`{.filename}
to the volume.

``` {.screen}
$ nova list
+------------------------+----------+--------+----------------------+
| ID                     | Name     | Status | Networks             |
+------------------------+----------+--------+----------------------+
| f947896e[id truncated] | myserver | ACTIVE | public=192.168.100.4 |
+------------------------+----------+--------+----------------------+

$ cinder list
+------------------------+-----------+---------+------+--------+---------+
|          ID            |   Status  | Display | Size | Volume | Attached|
|                        |           | Name    |      | Type   | to      |
+------------------------+-----------+---------+------+--------+---------+
| 845514f9[id truncated] | available |myvolume |  1   | None   |         |
+------------------------+-----------+---------+------+--------+---------+

$ nova volume-attach f947896e-600a-4600-a27a-3f372146b6e9 <br>
  845514f9-8fff-44bb-b82a-27d4e32b9939 auto
+----------+--------------------------------------+
| Property | Value                                |
+----------+--------------------------------------+
| device   | /dev/vdb                             |
| id       | 0501bc27-5ebd-44f2-8a4a-bb1595ee7e42 |
| serverId | f947896e-600a-4600-a27a-3f372146b6e9 |
| volumeId | 0501bc27-5ebd-44f2-8a4a-bb1595ee7e42 |
+----------+--------------------------------------+

```

The Cinder volume is now attached to `myserver`{.filename}.

``` {.screen}
$ cinder list
+------------------------+-----------+---------+------+--------+------------+
|          ID            |   Status  | Display | Size | Volume | Attached   |
|                        |           | Name    |      | Type   | to         |
+------------------------+-----------+---------+------+--------+------------+
| 845514f9[id truncated] | available |myvolume |  1   | None   | f947896e...|
+------------------------+-----------+---------+------+--------+------------+

```

When you ssh to the instance to which the volume was attached and look
up the disk information, you will see the disk information for the block
device. In this example, the instance has an IP address of
`192.168.100.4`{.uri}.

``` {.screen}
$ ssh cirros@192.168.100.4
$ sudo fdisk -l /dev/vdb

Disk /dev/vdb: 1073 MB, 1073741824 bytes
16 heads, 63 sectors/track, 2080 cylinders, total 2097152 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x00000000

Disk /dev/vdb doesn't contain a valid partition table

```

### Building a Block Storage All-In-One Node

If you did not use a Rackspace Private Cloud installer to create your
cluster, and if you did not use the Rackspace
`single-controller`{.filename} role in a manual configuration, you will
need to create a Block Storage node with the `cinder-all`{.filename}
role. This will create a node with the `cinder-api`{.filename},
`cinder-scheduler`{.filename}, and `cinder-volume`{.filename} roles.

You can also create a block storage all-in-one node following the steps
outlined in [Adding Volume Storage
Nodes](#cinder-additional "Adding Volume Storage Nodes"), with one
change.

In step 8, you will specify the `cinder-all`{.filename} role instead of
`cinder-volume`{.filename}. For `<serverName>`{.filename}, substitute
the fully qualified domain name of the server, such as
`cinder1.mydomain.com`{.uri}.

``` {.screen}
$ knife node run_list add <serverName> 'role[cinder-volume]'

```

When the procedure is complete, you should receive output similar to the
following:

``` {.screen}
[2012-10-30T10:32:02+00:00] INFO: *** Chef 10.14.2 ***
[2012-10-30T10:32:04+00:00] INFO: Run List is [role[cinder-all]]
[2012-10-30T10:32:04+00:00] INFO: Run List expands to [osops-utils::packages, openssh, ntp, sosreport, rsyslog::default, hardware, osops-utils::default, cinder::cinder-api, cinder::cinder-scheduler, cinder::cinder-volume]
<--output truncated-->
[2012-10-29T16:23:34+00:00] INFO: Running report handlers
[2012-10-29T16:23:34+00:00] INFO: Report handlers complete

```

When the process is complete, the new Cinder all-in-one node will be
ready to use.

### Configuring Cinder for Third-Party Storage Options

By default, Cinder uses LVM for volume storage. An environment created
with the Rackspace Private Cloud cookbooks can also be configured to use
the following drivers.

-   [EMC](#cinder-emc "Using Cinder with EMC")
-   [NetApp](#cinder-netapp "Using Cinder with NetApp")
-   [SolidFire](#cinder-solidfire "Using Cinder with SolidFire")

When using Cinder with one of these drivers, the
`cinder-volume`{.filename} service interfaces via iscsi with the driver
API instead of going through the usual LVM volume group that it would
normally use on the compute node.  When a provisioning request for a new
volume comes in through the `cinder-api`{.filename},
`cinder-volume`{.filename} makes a request via the driver API, and the
storage tool will provision the new volume.

When a request is made via the `cinder-api`{.filename} to attach a
provisioned volume to an instance, the `cinder-volume`{.filename}
service will ensure that the tool exports the relevant LUN via iscsi to
the compute node on which the instance resides.
`nova-compute`{.filename} on the compute node will then present the
volume as a disk to the instance.

#### Using Cinder with EMC

Additional information about using Cinder with EMC can be found at the
[OpenStack wiki page for
Cinder/EMCVolumeDriver](https://wiki.openstack.org/wiki/Cinder/EMCVolumeDriver).

To configure Cinder to use EMC, you must set the following variables in
the override\_attributes section of your Chef environment:

``` {.screen}
node[cinder][storage][provider] = "emc"

```

By default, this variable is unset and Cinder uses LVM by default.
Specifying `emc`{.literal} ensures that cinder-volume will use the EMC
API instead. After you set this variable, you must specify the following
additional variables with the values appropriate to your environment:

``` {.screen}
node["cinder"]["storage"]["iscsi"]["ip_address"] = "<IPAddressOfStorageProcessor>"
node["cinder"]["storage"]["provider"] = "emc"
node["cinder"]["storage"]["emc"]["config"] = "/etc/cinder/cinder_emc_config.xml"
node["cinder"]["storage"]["emc"]["StorageType"] = "<poolName>"
node["cinder"]["storage"]["emc"]["EcomServerIP"] = "<IPAddressOfEcomServer>"
node["cinder"]["storage"]["emc"]["EcomServerPort"] = 5988
node["cinder"]["storage"]["emc"]["EcomUserName"] = "<userName>"
node["cinder"]["storage"]["emc"]["EcomPassword"] = "<userPassword>"

```

These will then be used to populate `/etc/cinder.conf`{.filename}
appropriately, and provisioning can proceed.

#### Using Cinder with NetApp

Rackspace has tested NetApp with NFS with OpenStack Grizzly. NetApp with
iscsi exists, but has not been tested yet. For information about the
iscsi configuration, refer to the readme at
[`https://github.com/rcbops-cookbooks/cinder`{.uri}](https://github.com/rcbops-cookbooks/cinder)

To configure Cinder to use NetApp and NFS, you must set the following
variables in the override\_attributes section of your Chef environment:

``` {.screen}
node[cinder][storage][provider] = "netappnfsdirect"

```

By default, this variable is unset and Cinder uses LVM by default.
Specifying `netappnfsdirect`{.literal} ensures that cinder-volume will
use the NetApp API instead. After you set this variable, you must
specify the following additional variables with the values appropriate
to your environment:

``` {.screen}
node["cinder"]["storage"]["netapp"]["nfsdirect"]["server_hostname"] = "<NetAppHostnameOrIP>"
node["cinder"]["storage"]["netapp"]["nfsdirect"]["port"] = "<NetAppPort(80/443)>"
node["cinder"]["storage"]["netapp"]["nfsdirect"]["login"] = "<userName>"
node["cinder"]["storage"]["netapp"]["nfsdirect"]["password"] = "<userPassword>"
node["cinder"]["storage"]["netapp"]["nfsdirect"]["transport_type"] = "http/https"
node["cinder"]["storage"]["netapp"]["nfsdirect"]["nfs_shares_config"] = "/etc/cinder/shares.txt"
node["cinder"]["storage"]["netapp"]["nfsdirect"]["export"] = "<NetAppExportedVolumeToUse>"

```

**Note:** You will need to obtain the wsdl URL and credentials from your
NetApp administrator.

These will then be used to populate `/etc/cinder.conf`{.filename}
appropriately, and provisioning can proceed.

#### Using Cinder with SolidFire

To configure Cinder to use SolidFire, you must set the following
variables in the override\_attributes section of your Chef environment:

``` {.screen}
node[cinder][storage][provider] = "solidfire"

```

By default, this variable is unset and Cinder uses LVM by default.
Specifying `solidfire`{.literal} ensures that cinder-volume will use the
SolidFire API instead. After you set this variable, you must specify the
following additional variables with the values appropriate to your
environment:

``` {.screen}
node["cinder"]["storage"]["solidfire"]["mvip"] = "<serviceVIPofSolidFireDevice>"
node["cinder"]["storage"]["solidfire"]["username"] = "userName"
node["cinder"]["storage"]["solidfire"]["password"] = "userPassword"

```

These will then be used to populate `/etc/cinder.conf`{.filename}
appropriately, and provisioning can proceed.

