---
permalink: troubleshooting-dfs-replication/
audit_date: '2020-11-23'
title: Troubleshooting DFS Replication
type: article
created_date: '2020-11-20'
created_by: Steven Mondragon-DeVoss
last_modified_date: '2020-11-23'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers

**Note**: This article applies to the following Windows Server 2008 version and up.

Distributed File System Replication (DFSR) is used to replicate data from DFS namespaces across a group of servers which are called a replication group. This will allow data to stay synchronized on multiple servers. This document is used to aid in troubleshooting synchronization problems.
### Check for Backlogs

A. Run a diagnostic report.

   1. Start DFS Management.

      - For Server 2012 and later, Click **Server Manager** > **Tools** > **DFS Management**.
      - For Server 2008 or 2008 R2, click **Start** > **Administrator Tools** > **DFS Management**.

   2. Expand Replication.

   3. Right-click on the replication group for the namespace.

   4. Click **Create Diagnostic Report**.

   5. Choose **Next** for the remaining windows of the wizard.

   6. The completed report will open in a browser. You can also find the report under `C:\DFSReports`.

B. From an elevated command or powershell prompt, run **DFSDiag /TestDFSIntegrity /DFSRoot:<DFS root path> /Full** and review the output of the results.

### Check for Delays

A. Confirm the server's network interface card drivers are up to date.

B. Confirm the anti-virus software is aware of the replication and has exclusions set if needed. You can also disable your anti-virus software to confirm if that corrects the issue.

C. Check for bandwidth throttling.

   1. Start DFS Management.

      - For Server 2012 and later, Click **Server Manager** > **Tools** > **DFS Management**.
      - For Server 2008 or 2008 R2, click **Start** > **Administrator Tools** > **DFS Management**.

   2. Expand **Replication**.

   3. Click on the replication group for the namespace.

   4. Click on the **Connections** tab.

   5. right-click the replication group member and select **Properties**.

   6. Make sure **"Enable replication"** and **RDC** are checked.

   7. Click the **Schedule tab**.

   8. Click **View Schedule**.

   9. Make sure that the bandwidth usage says *Full*. You can also change the bandwidth throttling to see if there is a difference.

D. Check the *Staging Quota*.

   1. The default quota is 4GB

   2. In **Server Manager**, click **Tools**, then **DFS Management**

   3. Expand **Replication**

   4. Click on the replication group for the namespace

   5. right-click each member of the replication group in the **Memberships** tab

   6. Click the **Staging** tab

   7. If 4GB is not sufficient, you can increase it.

### Check Active Directory

To verify AD connectivity, open a command or powershell prompt and run the
following.

**Note**: This will provide you with the details Active Directory has about DFS including the replication groups and folders it belongs to.
>DFSRDIAG dumpadcfg /member:SERVERNAME

---

Have the servers check-in with AD. This should return "*operation succeed*" as a result.
>DFSRDIAG pollad /member:SERVERNAME

---
To view what is replicating
>FDSRDIAG replicationstate

The results will be similar to the following if replication is working.

>Active inbound connection: 1<br>
> Connection GUID: BE12378E-123D-41233-1238-123412B7AFD6<br>
> Sending member: YOURSERVERNAMEHERE<br>
>   Number of updates: 6
>
  >Updates being processed:
      [1] Update name: 83b78c9696004f7797f319bfcc314d201.jpg<br>
      [2] Update name: d1d86aa38477492680ff14ffffcc3fa61.fla<br>
      [3] Update name: b131d9dbffca4b7faa82a3bd172271a72.swf<br>
      [4] Update name: 5ac75c7ad2ae4d74931257d605205d441.swf<br>
      [5] Update name: 856d568e07644803844988dfd5aab05b1.jpg<br>
      [6] Update name: 1ebaa536c0574797a04ba5999e754aff3.swf<br>
  Total number of inbound updates being processed: 6
>
 > Total number of inbound updates scheduled: 0
