---
permalink: dfs-replication-installation/
audit_date: '2020-01-25'
title: DFS Replication Installation
type: article
created_date: '2020-01-19'
created_by: Steven Mondragon-DeVoss
last_modified_date: '2020-01-25'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

**Note**: This article is applicable to the following Windows Server versions: 2008 and up

### What is DFSR

Distributed File System Replication (DFSR) is used to replicate data from DFS namespaces across a group of servers, which are called a replication group. This will allow data to stay synchronized on multiple servers.

DFSR uses remote differential compression (RDC), which uses an algorithm to
detect changes of the data in a file to compress and replicate the changes
to allow for smaller and quicker transfers.

- The [staging area quota](https://docs.rackspace.com/support/how-to/determine-dfsr-staging-quota/) must be as large as the 32 largest files in the replicated folder.

### Requirements

- Active Directory.

- Determine the primary server that will hold the up-to-date files for initial replication.

- All servers must live in the same forest.

- DFS replication will need to be installed on all replication group server members.

- Verify the anti-virus software allows replication and configure exceptions as needed.

- Determine the files and folders to be replicated.

### Installing DFS

We will describe two ways to install DFS, GUI (Graphic User Interface) method
within the Server Manager and the Powershell method.

#### GUI Method

1. Launch **Server Manager**.

2. Go to **Manage** > **Add Roles and Features**.

3. On **Installation Type** select the default **Role-based or feature-based installation**.

4. For **Server Selection** select server name.

5. Go to **Server Roles** > **File and Storage Services** > **File and iSCSI Services** and select **DFS Replication**.

6. Click the **Add Features** button in the pop-up window.

7. Click **Next** for the remaining windows.

8. Click **Install** on the **Confirmation** page.

#### Powershell Method

1. Open a Powershell session with elevated permissions and run one of the
   following that suits your requirements:

- To install the DFS role

        Install-WindowsFeature "FS-DFS-Replication"

- To install the DFS Management Console
  
        Install-WindowsFeature "RSAT-DFS-Mgmt-Con"

- To install the DFS role and the DFS Management console at the same time

        Install-WindowsFeature "FS-DFS-Replication","RSAT-DFS-Mgmt-Con"
