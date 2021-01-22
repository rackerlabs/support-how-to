---
permalink: dfs-replication-installation/
audit_date:
title: DFS Replication Installation
type: article
created_date: '2020-01-19'
created_by: Steven Mondragon-DeVoss
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

*This article is applicable to the following Windows Server versions: 2008 and up*

# What is Distributed File System Replication

Distributed File System Replication (DFSR) is used to replicate data from DFS namespaces across a group of servers, which are called a replication group. This will allow data to stay synchronized on multiple servers. This document is used to assist in installing DFS.

DFSR uses remote differential compression (RDC), which uses an algorithm to detect changes of the data in a file to compress and replicate only the changes. This allows for smaller and quicker transfers.

* The [staging area quota](https://docs.rackspace.com/support/how-to/determine-dfsr-staging-quota/) must be as large as the 32 largest files in the replicated folder. 

# Requirements

1. Active Directory

2. Determine which server will be the primary server that will hold the most up-to-date files for initial replication

3. All servers will need to be in the same forest

4. DFS replication will need to be installed on all servers that will be members of the replication group

5. Verify your anti-virus software allows replication and configure any exceptions as needed

6. Determine the files/folders that will need to be replicated

# Installing DFS

We will show two ways to install DFS.

1. GUI method (Server Manager)

2. Powershell method

## Gui Method

1. Launch **Server Manager**

2. Go to **Manage**, then **Add Roles and Features**

3. Installation Type: select the default **Role-based or feature-based installation**

4. Server Selection: select the server

5. Server Roles: go to "File and Storage Services"-> "File and iSCSI Services"->select **DFS Replication**

6. Click the "Add Features" button in the pop-up window which will also install the DFS Management Console

7. Click "Next" for the remaining windows, then click "Install" when you get to the Confirmation page.

## Powershell Method

1. Open a Powershell session with elevated permissions and run one of the following that suits your requirements

- To install the DFS role
  > Install-WindowsFeature "FS-DFS-Replication"

- To install the DFS Management Console
  > Install-WindowsFeature "RSAT-DFS-Mgmt-Con"

- To install the DFS role and the DFS Management console at the same time
  > Install-WindowsFeature "FS-DFS-Replication","RSAT-DFS-Mgmt-Con"
