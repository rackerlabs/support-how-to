---
title: Managing Cloud Databases High Availability Instance groups in the Cloud Control Panel
type: article
created_date: '2016-03-18'
created_by: Steve Croce
last_modified_date: '2016-03-18'
last_modified_by: Steve Croce
product: Cloud Databases
product_url: cloud-databases
---

A [high availability \(HA\) instance group](/how-to/high-availability-for-cloud-databases/) is a Cloud Databases option that provides better performance, reliability and reduced downtime in the event of an instance failure via a set of \(2-3\) MySQL/Percona/MariaDB instances that fail over automatically when an issue is encountered.

This article describes how to create and manage HA instance groups using the Cloud Control Panel.

### Create a new high availability instance group

Use the following steps to create a high availability (HA) instance group

**Note:** HA instances are only available on MySQL 5.6, Percona 5.6, MariaDB 10 and later

#### Create the HA group

1.	Log in to the [Cloud Control Panel](https://mycloud.rackspace.com).

2.	At the top of the panel, select **Databases**.

3.	In the **Databases** menu, select **MySQL Instance...** under **CREATE RESOURCES**.

<! Insert Image: TopNavigationCreate.png>

4.	In the **Identity** section, provide a name for the instance and specify the region in which you want to launch the HA instances

<! Insert Image: CreateInstanceName_Region.png>

	**Note:** The name provided in step 4 will be applied to all instances and then an index \(-01, -02, etc.\) will be applied to all instance names starting with the master. You can also see this in the **Build** section.

5.	In the **Engine** section, select a Datastore and Version that support HA instances: MySQL5.6+, MariaDB 10+, Percona 5.6+.

6.	In the **Build** section, select the amount of RAM and Disk you would like **each instance** of your HA group to have. The master and all replicas will all be created with this same amount of RAM and Disk each.

<! Insert Image: CreateInstanceBuildRAMDisk.png>

7.	Also, in the **Build** section, select the **High-Availability Group** radio button next to **Instance Type**, which will then display a couple of new selections.

<! Insert Image: CreateInstanceBuildHAExpanded.png>

	You are now presented with:
	- An **HA Instances** section that lists the Master and Replica instances along with their names. You can remove replicas by clicking the little circle next to the last replica, or add a replica by selecting **+ Add another replica** beneath the list. Currently, HA groups only support 1 or 2 replicas.
	- A **Networks** section to select which networks the HA group can connect to. If you select **ServiceNet**, the group will only be accessible on ServiceNet like standard Cloud Databases instances. If you select **ServiceNet and Public**, you're HA group will be given two hostnames after creation: one accessible on ServiceNet and another accessible on the public internet.

	**Note:** The Networks selection can only be modified during creation. Public network access cannot be enabled after the instance is created.

8.	In **Advanced Options**, you must select the Allowed IP Ranges (ACLs) that are allowed to connect to your HA instance group

	A major difference between single instances and HA instance groups is that HA groups sit behind a load balancer with a firewall. That firewall is set to block all connections by default, so you must add allowed IP addresses/ranges by clicking the **Add IP Range** button. Both Single IP addresses and IP address ranges in CIDR format are allowed.

<! Insert Image: CreateInstanceACLs.png>	

    **Note:** You will not be able to connect to your HA instance group without first setting up the allowed IPs/ranges here. You can add/remove addresses and ranges later as well

9.	When all selections are complete, click **Create HA Group** at the bottom
	
	The resulting price of the selected options can also be seen to the right of the **Create HA Group** button and displays the total cost of the HA group.

#### Viewing build status and connecting to the new HA group

After the **Create HA Group** button is selected, the browser is redirected to the HA Group Details page that lists important information about the HA instance group

Field | Information
--- | ---
HA Group Status | Displays the status of the overall HA group
Type | Displays the engine used for the instances in the group
HA Group ID | The UUID of the HA group. You will use this ID for many actions on the group, like resizes, backups, and attaching configurations
Region | The Rackspace datacenter where your group is deployed
RAM | The amount of RAM provisioned on each instance of the group
Disk | The size of the storage volume for each instance of the group
Backups | Number of backups for this group and the option to create an On-Demand Backup

1.	While the group is building, the **HA Group Status** is shown as `Building` and a `Loading...` animation is shown in the **HA Group Networks** table

<! Insert Image: InstanceDetailsBuilding.png>	

2. When the group has completed building, the **HA Group Status** section will change to `Active` and the **HA Group Networks** section will show the hostnames that can be used to connnect to the instance group

<! Insert Image: InstanceDetailsBuilt.png>

	The **HA Group Networks** section displays the hostnames and ports that are used to connect to the instance. These hostnames will stay the same regardless of failovers and which instance is the master.
	
	- The **Network** column indicates whether a row is a ServiceNet accessible hostname or a publicly accessible hostname
	- The **Access** column indicates whether the Address and Port can be used for reads or reads and writes
	- The **Port** column indicates which port can be used with the associated hostname
	- The **Address** solumn indicates the hostname that can be used to connect to MySQL

3.	Farther down the Instance Details page, greater detail about the HA group master instance is displayed.

	The information farther down the page is similar to what's shown on the Instance Details page for a single instance or replica set. Note that the `Increase Volume...`, `Resize RAM...`, and other instance modifications will be greyed out, because modifications to an HA group must be made to the group rather than the individual instances.

### Modifying an HA instance group

1.	While logged into the [Cloud Control Panel](https://mycloud.rackspace.com) select **MySQL** in the **Databases** menu.

2.	On the Databases list screen, select one of the HA database instances by clicking the name

	**Note:** The gear on the list page is not yet able to create backups, resize, or restart HA instance groups. This functionality will be added in an upcoming release

3.	To resize RAM, resize Volume, create On-Demand backups, or create/modify backup schedules, click the link in the detail list that matches the function you'd like

	All actions taken on the HA group will apply to all instances in the group. Resizes will take place on all instances. Backups will be taken against a replica of the HA group.

<! Insert Image: InstanceDetailsBuilt.png>

4.	An alternate way to make the modifications from the previous step, is to use the gear in the upper right corner. The gear adds an additional action to delete the HA group.

<! Insert Image: InstanceDetailsGear.png>

