---
permalink: dfs-replication-installation
audit_date: '2020-01-25'
title: DFS replication installation
type: article
created_date: '2020-01-19'
created_by: Steven Mondragon-DeVoss
last_modified_date: '2020-01-25'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

**Note**: This article applies to Windows Server&reg; versions 2008 and later.

### What is DFSR?

You can use Distributed File System Replication (DFSR) to replicate data from DFS namespaces across a group of
servers called a replication group. This enables data to stay synchronized on multiple servers.

DFSR uses remote differential compression (RDC), which uses an algorithm to detect data changes in a file to
compress and replicate the changes, allowing for smaller and quicker transfers.

**Note**: The [staging area quota](/support/how-to/determine-dfsr-staging-quota/) must be as large as the 32
largest files in the replicated folder.

### Requirements

- Use Active Directory.

- Determine the primary server that holds the up-to-date files for initial replication.

- Ensure that all servers must live in the same forest.

- Install DFS replication on all replication group server members.

- Verify that the anti-virus software allows replication and configure exceptions as needed.

- Determine the files and folders that you want to replicate.

### Installing DFS

This article describes two ways to install DFS: The Graphic User Interface (GUI) method
within the Server Manager and the PowerShell&reg; method.

#### GUI method

1. Launch **Server Manager**.

2. Go to **Manage** > **Add Roles and Features**.

3. On **Installation Type**, select the default, **Role-based or feature-based installation**.

4. For **Server Selection**, select the server name.

5. Go to **Server Roles** > **File and Storage Services** > **File and iSCSI Services** and select **DFS Replication**.

6. Click **Add Features** in the pop-up window.

7. Click **Next** for the remaining windows.

8. Click **Install** on the **Confirmation** page.

#### PowerShell method

1. Open a PowerShell session with elevated permissions and run one of the
   following to suit your requirements:

- Install the DFS role:

        Install-WindowsFeature "FS-DFS-Replication"

- Install the DFS Management console:
  
        Install-WindowsFeature "RSAT-DFS-Mgmt-Con"

- Install the DFS role and the DFS Management console at the same time:

        Install-WindowsFeature "FS-DFS-Replication","RSAT-DFS-Mgmt-Con"
