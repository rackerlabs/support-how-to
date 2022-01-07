---
permalink: high-cpu-caused-by-sophos-in-windows
audit_date: '2022-01-07'
title: 'High CPU caused by Sophos in Windows'
type: article
created_date: '2022-01-07'
created_by: Dave Myers
last_modified_date: '2022-01-07'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---
Most of the time when high CPU conditions occur with the Sophos real-time scanner becoming backlogged due to heavy/frequent writes to the disk with the real-time scans. Thus requiring Sophos more CPU cycles to work through the backlog.

### Resolution
Identifying the path where the heavy/frequent writes are taking place and determining if the path would be suitable to exclude from the real-time scanner. Removing unessessary paths from the real time scan could greatly reduce CPU utilization.

### Making Exclusions in Sophos via (Enterprise Console) 

**Exclude items from on-access scanning**
**Windows**
On Windows, drives, folders, files and processes can be excluded. The use of wild cards * and ? are accepted.

**Making Exclusions From Sophos Enterprise Console:**
1. Open Sophos Enterprise Console.
2. Right-click the policy to be excluded under Anti-virus and HIPS and select View/Edit Policy.
a. Click the Configure button for Enable on-access scanning.
b. To add exclusions, click Windows Exclusions tab, then click the Add button.

### Related articles

The following articles are recommended to follow since they explain what it may need to be excluded as well.

- [Microsoft Anti-Virus Exclusion List](https://social.technet.microsoft.com/wiki/contents/articles/953.microsoft-anti-virus-exclusion-list.aspx)
- [Virus scanning recommendations for Enterprise computers that are running currently supported versions of Windows (KB822158)](https://support.microsoft.com/en-us/topic/virus-scanning-recommendations-for-enterprise-computers-that-are-running-currently-supported-versions-of-windows-kb822158-c067a732-f24a-9079-d240-3733e39b40bc)



<br>

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
