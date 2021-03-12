---
permalink: configure-always-on-mssql-server-failover-clusters/
audit_date: '2021-03-12'
title: Configure always-on MSSQL server failover clusters
type: article
created_date: '2021-03-02'
created_by: Ken Azuma
last_modified_date: '2021-03-12'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article provides guidance on the following always-on MSSQL&reg; server
failover cluster configurations:

- Rename a failover cluster
- Add dependencies to a SQL server resource
- Configure Quorum NodeWeight settings
- Change the Failover Cluster Instance IP address
- Configure HealthCheckTimeout
- Configure FailureConditionLevel

### Rename a SQL Server failover cluster instance

SQL Server supports renaming servers involved in replication only if you're 
using *Log Shipping with replication*. You can rename the secondary server if
the primary is permanently lost.

If you want to rename a server invovled with replication, you must turn replication off
before renaming the virtual server. Then, re-establish mirroring with the new virtual
server name. Also, manually update the metadata for database mirroring to reflect the new
virtual server name.

### Rename a virtual server

1. Using Cluster Administrator, change the SQL Network Name to the new name.

2. Take the network name resource offline. This takes the SQL Server resource and other dependent
resources offline as well.

3. Bring the SQL Server resource back online.

To confirm the rename operation, you can select information from either **@@servername** or
**sys.servers**, and you should also try to fail the SQL Server over to the other nodes.

**NOTE:** Any other nodes in the cluster can use the new name almost immediately. However, client
computers might have to wait for network propagation before they can see the new name. To
minimize propagation time, run the following commands on the node:

```sh
ipconfig /flushdns
ipconfig /registerdns
nbtstat -RR
```

### Add dependencies to a SQL server resource

If you add any other resources to the SQL Server group, they must always have their own unique SQL
network name resources and their own SQL IP address resources. You should never use the existing SQL
network name resources and SQL IP address resources for anything other than SQL Server.

When you innstall MSSQL in a resource group with multiple disk drives and choose to place your data on
one of them, the SQL Server resource is set to be dependent only on that drive. Before putting data
or logs on another disk, you must add a dependency to the SQL Server resource for the additional disk.

1. Open the **Failover Cluster Manager** snap-in.

2. Locate the group that contains the applicable SQL Server resource that you would like to make
dependent.

3. If the resource for the disk is already in this group, go to step 4. Otherwise, locate the group that
contains the disk. If the same node does not own both that group and the group that contains SQL Server,
move the group containing the resource for the disk to the node that owns the SQL Server group.

4. Select the SQL Server resource, open the **Properties** dialog box, and use the **Dependencies** tab to add
the disk to the set of SQL Server dependencies.

### Configure Quorum NodeWeight settings

The user must be a domain user and a member of the local Administrators group on each node of
the cluster.

1. From PowerShell&reg;, run the following commands as Administrator:

```sh
Import-Module FailoverClusters
$node = "<Node's Name>"
(Get-ClusterNode $node).NodeWeight = <Desired integer value (use 0 to remove the node's quorum
vote)>
You can use the commands below to review the NodeWeight settings for all nodes in the cluster:
$cluster = (Get-ClusterNode $node).Cluster
$nodes = Get-ClusterNode -Cluster $cluster
$nodes | Format-Table -property NodeName, State, NodeWeight
```

To maintain or update a Failover Cluster Instance, you must be a local administrator with permission to
logon as a service on all of its nodes.

### Change the Failover Cluster Instance IP Address

1. Open the **Failover Cluster Manager** snap-in.

2. Click the **+** next to **Services and applications** in the left-hand pane and click on the Failover Cluster
Instance.

3. In the right-hand pane, under the **Server Name** category, right-click the SQL Server Instance, and click
**Properties**.

4. In the **Properties** dialog box, in the **General** tab, change the IP address resource.

5. Click **OK** to close the dialog box.

6. In the right-hand pane, right-click the SQL IP Address1(instance name) and select **Take Offline**.

7. In the right-hand pane, right-click **SQL Server** and select **Bring Online**.

8. Close the Failover Cluster Manager snap-in.

### Configure the *HealthCheckTimeout* property pettings

You need to have `ALTER SETTINGS` and `VIEW SERVER STATE` permissions to perform this configuration.

The values for this property are in milliseconds, the default value is 30,000 (30 seconds), and the minimum
value is 15,000 (15 seconds).

From PowerShell&reg;, run the following commands as Administrator:

```sh
Import-Module FailoverClusters
$instance = "SQL Server (INST1)"
Get-ClusterResource $instance | Set-ClusterParameter HealthCheckTimeout <Desired Tim Out Time (in
milliseconds)>
```

### Configure the *FailureConditionLevel* property settings

You need to have `ALTER SETTINGS` and `VIEW SERVER STATE` permissions to perform this configuration.

You can perform this configuration by using PowerShell, the Failover CLuster Manager, or Transact SQL.

#### Use PowerShell

From PowerShell&reg;, run the following commands as Administrator:

```sh
Import-Module FailoverClusters
$instance = "SQL Server (instance name)"
Get-ClusterResource $instance | Set-ClusterParameter FailureConditionLevel 3
```

#### Use the Failover Cluster Manager Snap-in

1. Open the **Failover Cluster Manager** snap-in.

2. Click the plus sign next to **Services and Applications** and select the **Failover Cluster Instance**.

3. Right-click the SQL server resource under **Other Resources** > **Properties** in the menu.

4. Select the **Properties** tab, enter the desired value for the `FaliureConditionLevel` property, and then
click **OK** to apply the change.

#### Use Transact-SQL

Enter the following command:

    ALTER SERVER CONFIGURATION SET FAILOVER CLUSTER PROPERTY FailureConditionLevel = <desired level (0-5)>;

### Failure conditions reference

| Level | Condition | Description |
|-------|-----------|-------------|
|0|No automatic failover or restart|Indicates that no failover or restart triggers automatically | On any failure conditions. This level is for system maintenance purposes only. |
|1|Failover or restart on server down|Indicates that a server restart or failover triggers if the following condition is raised: SQL Server service is down. |
|2|Failover or restart on server unresponsive|Indicates that a server restart or failover triggers if any of the following conditions are raised: SQL Server service is down, SQL Server instance is not responsive (Resource DLL cannot receive data from sp_server_diagnostics within the HealthCheckTimeout settings).|
|3*|Failover or restart on critical server errors|Indicates that a server restart or failover triggers if any of the following conditions are raised: SQL Server service is down, SQL Server instance is not responsive (Resource DLL cannot receive data from sp_server_diagnostics within the HealthCheckTimeout settings), System stored procedure sp_server_diagnostics returns 'system error'.|
|4|Failover or restart on moderate server errors|Indicates that a server restart or failover triggers if any of the following conditions are raised: SQL Server service is down, SQL Server instance is not responsive (Resource DLL cannot receive data from sp_server_diagnostics within the HealthCheckTimeout settings), System stored procedure sp_server_diagnostics returns 'system error', System stored procedure sp_server_diagnostics returns 'resource error'.|
|5|Failover or restart on any qualified failure conditions|Indicates that a server restart or failover triggers if any of the following conditions are raised: SQL Server service is down, SQL Server instance is not responsive (Resource DLL cannot receive data from sp_server_diagnostics within the HealthCheckTimeout settings), System stored procedure sp_server_diagnostics returns 'system error', System stored procedure sp_server_diagnostics returns 'resource error', System stored procedure sp_server_diagnostics returns 'query_processing error'.|

*Default Value
