---
permalink: getting-started-with-glusterfs-considerations-and-installation
audit_date: '2020-01-06'
title: Get started with GlusterFS - considerations and installation
type: article
created_date: '2014-08-14'
created_by: Ryan Stark
last_modified_date: '2020-01-06'
last_modified_by: Ryan Stark
product: Cloud Servers
product_url: cloud-servers
---

This article is updated to cover GlusterFS&reg; 7 installation on CentOS&reg; 7 and Ubuntu&reg; 18.04. All the original work in this document is the same, except for the step where you create the volume with the **replica** keyword.

Before you start to use GlusterFS, you must decide what type of volume you need for your environment. The following methods are used most often to achieve different results.


#### Replicated volume

This type of volume provides file replication across multiple bricks. It is the best choice for environments requiring high availability, high reliability, and scalable storage. This volume type works well if you plan to self-mount the GlusterFS volume, for example, as the web server document root (<strong><code>/var/www</code></strong>) or similar where all files must reside on that node. The value passed to <strong>replica</strong> is the same number of nodes in the volume.

Files are copied to each brick in the volume, similar to a redundant array of independent disks (RAID-1). However, you can have three or more bricks or an odd number of bricks. Usable space is the size of one brick, and all files written to one brick are replicated to all others. Volumes of this type also offer improved read performance in most environments and are the most common type of volumes used when clients are external to the GlusterFS nodes themselves.

#### Distributed-replicated volume

Similar to a RAID-10, an even number of bricks must be used. Usable space is the size of the combined bricks passed to the <strong>replica</strong> value. For example, if there are <strong>four bricks of 20 Gigabytes (GB)</strong> and you pass <strong>replica 2</strong> to the creation, your files are distributed to two nodes (40 GB) and replicated to two nodes. With <strong>six bricks of 20 GB</strong> and <strong>replica 3</strong>, your files are distributed to three nodes (60 GB) and replicated to three nodes. If you used replica 2, they are then distributed to two nodes (40 GB) and replicated to four nodes in pairs. This distribution and replication are used when your clients are external to the cluster, not local self-mounts.


### Prerequisites

- Two or more servers with separate storage. The examples in this article are based on CentOS 7 and Ubuntu 18.04 servers.
- A private network between servers. The examples in this article use `192.168.0.0/24`.

### Build setup

The build described in this document uses the following setup:

- Four Rackspace Cloud server images with a `/dev/xvde` partition ready to use for each brick
- One Cloud Private Network on `192.168.0.0/24` for GlusterFS communication
- GlusterFS 7.1 installed from the vendor package repository

### Preparing the servers

Perform the following configuration and installations to prepare the servers:

1. Configure **`/etc/hosts`**.
2. Install the operating system (OS) updates.
3. Install GlusterFS software.
4. Configure network access.
5. Connect GlusterFS nodes.

#### Configure /etc/hosts for intra-node communication

Instead of using DNS, prepare **`/etc/hosts`** on every server and ensure that the servers can communicate with each other. All servers have the name <strong>gluster<em>N</em></strong> as a host name, so use <strong>glus<em>N</em></strong> for the private communication layer between servers.

    # vi /etc/hosts
	192.168.0.1  glus-01
	192.168.0.2  glus-02
	192.168.0.3  glus-03
	192.168.0.4  glus-04

	# ping -c2 glus-01; ping -c2 glus-02;  ping -c2 glus-03;  ping -c2 glus-04

#### Install packages

Run the commands in this section to perform the following steps:

1.	Install OS updates.
2.	Install the GlusterFS repository and GlusterFS packages.

**CentOS**

    yum update -y
    yum install -y centos-release-gluster7
    yum install -y glusterfs-server

**Ubuntu operating system**

The default Ubuntu repository has GlusterFS 3.13.2 installed. Use the following commands to install 7.1:

    apt update
    apt upgrade -y
    add-apt-repository -y ppa:gluster/glusterfs-7
    apt install -y glusterfs-server

#### Configure network access

**CentOS**

Use the following commands to allow Gluster traffic between your nodes and allow client mounts:

    firewall-cmd --add-service=glusterfs
    firewall-cmd --add-service=glusterfs --permanent

**Ubuntu operating system**

Use the following commands to allow all traffic over your private network segment to facilitate Gluster communication:

    ufw enable
    ufw allow from 192.168.0.0/24

#### Prepare the bricks

Run the commands in this section to perform the following steps:

1.	Partition block devices.
2.	Create the logical volume manager (LVM) foundation.
3.	Prepare volume bricks.

The underlying bricks are a standard file system and mount point. Mount each brick in such a way to discourage any user from changing to the directory and writing to the underlying bricks themselves.

**Warning:** Writing directly to a brick corrupts the volume.

The bricks must be unique per node, and there should be a directory within the mount point to use in volume creation. Attempting to create a replicated volume by using the top level of the mount points results in an error with instructions to use a subdirectory.

**All nodes**

    parted -s -- /dev/xvde mktable gpt
    parted -s -- /dev/xvde mkpart primary 2048s 100%
    parted -s -- /dev/xvde set 1 lvm on
    pvcreate /dev/xvde1
    vgcreate vgglus-01 /dev/xvde1
    lvcreate -l 100%VG -n gbrick1 vgglus-01
    mkfs.xfs /dev/vgglus-01/gbrick1
    echo '/dev/vgglus-01/gbrick1 /var/lib/gvol0 xfs defaults 0 0' >> /etc/fstab
    mkdir /var/lib/gvol0
    mount /var/lib/gvol0

-  glus-01

        mkdir /var/lib/gvol0/brick1

-  glus-02

        mkdir /var/lib/gvol0/brick2

-  glus-03

        mkdir /var/lib/gvol0/brick3

-  glus-04

        mkdir /var/lib/gvol0/brick4

### Set up GlusterFS

Use the steps below to run the GlusterFS setup.

#### Start the glusterfsd daemon

You can restart the daemon at run time by using the following commands:

    systemctl enable glusterd
    systemctl start glusterd

### Build a peer group

A peer group is known as a *trusted storage pool* in GlusterFS.

-  glus-01

       gluster peer probe glus-02
       gluster peer probe glus-03
       gluster peer probe glus-04
       gluster peer status

-  glus-02

       gluster peer status

-  glus-03

       gluster peer status

-  glus-04

       gluster peer status

Now you can verify the status of your node and the gluster server pool:

    [root@gluster1 ~]# gluster pool list
    UUID	                				Hostname	State
    734aea4c-fc4f-4971-ba3d-37bd5d9c35b8	glus-04   	Connected
    d5c9e064-c06f-44d9-bf60-bae5fc881e16	glus-03   	Connected
    57027f23-bdf2-4a95-8eb6-ff9f936dc31e	glus-02   	Connected
    e64c5148-8942-4065-9654-169e20ed6f20	localhost	Connected

### Create the volume

By default, glusterd NFS allows global read/write during volume creation, so you should set up basic authorization restrictions to only the private subnet. `glusterd` automatically starts NFSd on each server and exports the volume through it from each of the nodes. The reason for this behavior is that to use the native client Filesystem in Userspace (FUSE) for mounting the volume on clients, the clients have to run exactly the same version of GlusterFS packages. If the versions are different, there could be differences in the hashing algorithms used by servers and clients, and the clients won't be able to connect.

#### Replicated volume

The following example creates replication to all four nodes. Each node contains a copy of all data, and the size of the volume is the size of a single brick. Note that the output shows `1 x 4 = 4`.

**One node only**:

     gluster volume create gvol0 replica 4 transport tcp \
     glus-01:/var/lib/gvol0/brick1 \
     glus-02:/var/lib/gvol0/brick2 \
     glus-03:/var/lib/gvol0/brick3 \
     glus-04:/var/lib/gvol0/brick4
     gluster volume start gvol0

    [root@gluster1 ~]# gluster volume info gvol0

    Volume Name: gvol0
    Type: Replicate
    Volume ID: 8d12cb5a-77ad-43a3-bdd1-ab48405ff1da
    Status: Started
    Snapshot Count: 0
    Number of Bricks: 1 x 4 = 4
    Transport-type: tcp
    Bricks:
    Brick1: glus-01:/var/lib/gvol0/brick1
    Brick2: glus-02:/var/lib/gvol0/brick2
    Brick3: glus-03:/var/lib/gvol0/brick3
    Brick4: glus-04:/var/lib/gvol0/brick4
    Options Reconfigured:
    transport.address-family: inet
    storage.fips-mode-rchecksum: on
    performance.client-io-threads: off

#### Distributed-replicated volume

This example creates distributed replication to 2x2 nodes. Each pair of nodes contains the data, and the size of the volume is the size of two bricks. Note that the output shows `2 x 2 = 4`.

**One node only**:

    gluster volume create gvol0 replica 2 transport tcp \
    glus-01:/var/lib/gvol0/brick1 \
    glus-02:/var/lib/gvol0/brick2 \
    glus-03:/var/lib/gvol0/brick3 \
    glus-04:/var/lib/gvol0/brick4
    gluster volume start gvol0

    [root@gluster1 ~]# gluster volume info gvol0

    Volume Name: gvol0
    Type: Distributed-Replicate
    Volume ID: b2ddd34b-ffb4-4fd8-ae60-b90adbd4c2ab
    Status: Started
    Snapshot Count: 0
    Number of Bricks: 2 x 2 = 4
    Transport-type: tcp
    Bricks:
    Brick1: glus-01:/var/lib/gvol0/brick1
    Brick2: glus-02:/var/lib/gvol0/brick2
    Brick3: glus-03:/var/lib/gvol0/brick3
    Brick4: glus-04:/var/lib/gvol0/brick4
    Options Reconfigured:
    transport.address-family: inet
    storage.fips-mode-rchecksum: on
    performance.client-io-threads: off

### Delete the volume

After you ensure that no clients (either local or remote) are mounting the volume, you can stop the volume and delete it by using the following commands:

    gluster volume stop gvol0
    gluster volume delete gvol0

#### Clearing bricks

If bricks are used in a volume and they need to be removed, you can use one of the following methods:

GlusterFS sets an attribute on the brick subdirectories. If you clear this attribute the bricks can be reused.

-  glus-01:

      setfattr -x trusted.glusterfs.volume-id /var/lib/gvol0/brick1/
      setfattr -x trusted.gfid /var/lib/gvol0/brick1
      rm -rf /var/lib/gvol0/brick1/.glusterfs

-  glus-02:

      setfattr -x trusted.glusterfs.volume-id /var/lib/gvol0/brick2/
      setfattr -x trusted.gfid /var/lib/gvol0/brick2
      rm -rf /var/lib/gvol0/brick2/.glusterfs

-  glus-03:

      setfattr -x trusted.glusterfs.volume-id /var/lib/gvol0/brick3/
      setfattr -x trusted.gfid /var/lib/gvol0/brick3
      rm -rf /var/lib/gvol0/brick3/.glusterfs

-  glus-04:

      setfattr -x trusted.glusterfs.volume-id /var/lib/gvol0/brick4/
      setfattr -x trusted.gfid /var/lib/gvol0/brick4
      rm -rf /var/lib/gvol0/brick4/.glusterfs

Alternatively, you can delete the subdirectories and then recreate them.

-  glus-01

      rm -rf /var/lib/gvol0/brick1
      mkdir /var/lib/gvol0/brick1

-  glus-02:

      rm -rf /var/lib/gvol0/brick2
      mkdir /var/lib/gvol0/brick2

-  glus-03:

      rm -rf /var/lib/gvol0/brick3
      mkdir /var/lib/gvol0/brick3

-  glus-04:

      rm -rf /var/lib/gvol0/brick4
      mkdir /var/lib/gvol0/brick4

### Add bricks

You can add more bricks to a running volume. Add an additional brick to our replicated volume example above by using the following command:

    gluster volume add-brick gvol0 replica 5 gluster5:/var/lib/gvol0/brick5

YOu can use the `add-brick` command to change the layout of your volume, for example, to change a two-node distributed volume into a four-node distributed-replicated volume. After such an operation, you must rebalance your volume. New files are automatically created on the new nodes, but the old ones do not get moved.

    gluster volume add-brick gvol0 replica 2 \
    gluster5:/var/lib/gvol0/brick5 ;
    gluster6:/var/lib/gvol0/brick6
    gluster volume rebalance gvol0 start
    gluster volume rebalance gvol0 status

    ## If needed (something didn't work right)
    gluster volume rebalance gvol0 stop

### Volume options

To view configured volume options, run the following command:

    gluster volume info gvol0

The following is an example output:

    Volume Name: gvol0
    Type: Replicate
    Volume ID: 8d12cb5a-77ad-43a3-bdd1-ab48405ff1da
    Status: Started
    Snapshot Count: 0
    Number of Bricks: 1 x 4 = 4
    Transport-type: tcp
    Bricks:
    Brick1: glus-01:/var/lib/gvol0/brick1
    Brick2: glus-02:/var/lib/gvol0/brick2
    Brick3: glus-03:/var/lib/gvol0/brick3
    Brick4: glus-04:/var/lib/gvol0/brick4
    Options Reconfigured:
    transport.address-family: inet
    storage.fips-mode-rchecksum: on
    performance.client-io-threads: off

To set an option for a volume, use the **set** keyword as follows:

    gluster volume set gvol0 performance.write-behind off
    volume set: success

To clear an option to a volume back to the default, use the **reset** keyword as follows:

    gluster volume reset gvol0 performance.read-ahead
    volume reset: success: reset volume successful


### Client mounts

The preferred method for a client to mount a GlusterFS volume is by using the native FUSE client. NFS mounts are possible when GlusterFS is deployed in tandem with NFS-Ganesha&reg;.

#### FUSE client

The FUSE client allows the mount to happen with a GlusterFS "round robin" style connection. In **/etc/fstab**, the name of one node is used. However, internal mechanisms allow that node to fail, and the clients roll over to other connected nodes in the trusted storage pool.

**CentOS**:

    yum install -y centos-release-gluster7
    yum install -y glusterfs-fuse

**Ubuntu**:

    add-apt-repository -y ppa:gluster/glusterfs-7
    apt install glusterfs-client

**Common**:

    vi /etc/hosts
    192.168.0.2  glus-01
    192.168.0.4  glus-02
    192.168.0.1  glus-03
    192.168.0.3  glus-04

    `modprobe fuse
     echo 'glus-01:/gvol0 /mnt/gluster/gvol0 glusterfs _netdev 0 0' >> /etc/fstab
     mkdir -p /mnt/gluster/gvol0
     mount /mnt/gluster/gvol0`

### References

- https://www.gluster.org/announcing-gluster-7-0/
- https://docs.gluster.org/en/latest/
- https://wiki.centos.org/HowTos/GlusterFSonCentOS
- https://kifarunix.com/install-and-setup-glusterfs-on-ubuntu-18-04/
- https://launchpad.net/~gluster

### Next article

[GlusterFS Troubleshooting](/support/how-to/glusterfs-troubleshooting)
