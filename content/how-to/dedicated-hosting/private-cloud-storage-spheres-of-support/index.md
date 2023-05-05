---
permalink: private-cloud-storage-spheres-of-support
audit_date: '2023-05-05'
title: Rackspace Private Cloud Storage Spheres of Support
type: article
created_date: '2023-05-05'
created_by: Michael Levy
product: Dedicated Hosting
product_url: dedicated-hosting
---

The following tables delineates what managed services are in scope for each of the storage services governed by the Dedicated Hosting Product terms found here: [https://www.rackspace.com/information/legal/DedicatedHostingTerms](https://www.rackspace.com/information/legal/DedicatedHostingTerms).

Please note, the spheres of support differ by product. Any request for services beyond those marked in scope would command an additional charge at Rackspace then-current rates for professional services, pending availability.


<p style="text-align: center; font-size: 16px; font-weight: 600; margin-bottom:4px; margin-top:40px;">Rackspace Block Storage</p>

|                     | **Supported**                                            | **Unsupported**                                    |
| ------------------- | -------------------------------------------------------- | -------------------------------------------------- |
| **Protocols**       | FC                                                       | iSCI                                               |
|                     |                                                          | FCOE                                               |
| **Replication**     |                                                          | Replication                                        |
| **Snapshots**       | Crash Consistent                                         | Application Consistent                             |
|                     | Scheduled                                                |                                                    |
| **Provisioning**    | Array Administration                                     | Host/cluster management                            |
|                     | FC Switch Administration                                 | Filesystem management                              |
|                     | Zoning                                                   |                                                    |
| **Decommissioning** | LUNs                                                     |                                                    |
|                     | High assurance LUN wiping                                |                                                    |
|                     | Arrays                                                   |                                                    |
| **Administration**  | Capacity planning                                        |                                                    |
|                     | LUN expansion                                            |                                                    |
|                     | Host add/removes                                         |                                                    |
|                     | LUN add/removes                                          |                                                    |
|                     | Health check                                             |                                                    |
| **Troubleshooting** | Hardware break-fix                                       |                                                    |
|                     | Software break-fix                                       |                                                    |
|                     | Performance (from HBA to array                           |                                                    |
|                     | Configuration                                            |                                                    |
| **Monitoring**      | Hardware failures                                        |                                                    |
|                     | Capacity thresholds                                      |                                                    |
|                     | Connectivity                                             |                                                    |
| **Performance**     | Review on request                                        |                                                    |
|                     | Review to troubleshoot an issue                          |                                                    |
| **Upgrades**        | Rackspace-defined upgrade schedule                       | Multi-pathing configuration                        |
|                     | Vendor-approved procedures                               | Schedule upgrade around single customer preference |
| **Maintenance**     | Rackspace change management (managed, defined, executed) |                                                    |
|                     | Fabric expansion                                         |                                                    |


<p style="text-align: center; font-size: 16px; font-weight: 600; margin-bottom:4px; margin-top:40px;">Unified Data Storage – Dedicated NAS</p>
<p style="text-align: center; font-size: 16px; font-weight: 600; margin-bottom:4px">Dell Isilon/PowerScale, NetApp FAS/AFF</p>

|                     | **Supported**                                             | **Unsupported**                                                              |
| ------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Protocols**       | NFS                                                       | FCOE                                                                         |
|                     | SMB                                                       | FC                                                                           |
|                     |                                                           | iSCI                                                                         |
| **Replication**     | DR Asynchronous Mirrors                                   | Synchronous mirror                                                           |
|                     |                                                           | MetroCluster                                                                 |
| **Snapshots**       | On-demand                                                 | Application-consistent snapshots                                             |
|                     | Scheduled                                                 |                                                                              |
| **Provisioning**    | Create vserver                                            | Mixed security styles                                                        |
|                     | Create QOS policy                                         | Present a volume with storage efficiency off (deduplication and compression) |
|                     | Enter assigned IP                                         | Thick provision volume                                                       |
|                     | Create logical Interfaces (LIF)                           |                                                                              |
|                     | Create export policy for NFS                              |                                                                              |
|                     | Create volume                                             |                                                                              |
|                     | Configure security style for volume                       |                                                                              |
|                     | Enter vserver root and volume Ips for NFS export policy   |                                                                              |
|                     | Create vserver root and volume export rules               |                                                                              |
|                     | <br>Create route on vserver for the backup network        |                                                                              |
|                     | Turn on volume efficiency (deduplication and compression) |                                                                              |
|                     | Enter AD lif IP and create AD default route (SMB)         |                                                                              |
|                     | Join intensive domain (SMB)                               |                                                                              |
|                     | Configure share permissions CIFS/SMB shares               |                                                                              |
|                     | Provide mount path to map or mount new share              |                                                                              |
| **Decommissioning** | Delete snapshots                                          | Drive destruction or DoD wipe                                                |
|                     | Remove quotas                                             |                                                                              |
|                     | Remove exports                                            |                                                                              |
|                     | Delete volume                                             |                                                                              |
|                     | Delete Logical Interfaces                                 |                                                                              |
| **Administration**  | Capacity planning                                         |                                                                              |
|                     | LUN expansion                                             |                                                                              |
|                     | Host add/removes                                          |                                                                              |
|                     | LUN add/removes                                           |                                                                              |
|                     | Health check                                              |                                                                              |
| **Troubleshooting** | Hardware break-fix                                        | Changes to cluster-wide settings                                             |
|                     | Software break-fix                                        |                                                                              |
|                     | Performance                                               |                                                                              |
|                     | Configuration                                             |                                                                              |
| **Monitoring**      | Active IQ Unified Manager (AIQUM)                         | Allow customer access to customer monitor tools                              |
|                     | Monitor email alerts                                      |                                                                              |
| **Performance**     | Review on request                                         |                                                                              |
|                     | Review to troubleshoot an issue                           |                                                                              |
| **Upgrades**        | Vendor-approved procedures                                | Schedule upgrade around single customer preference                           |
|                     | Quality control upgrade steps                             |                                                                              |
| **Maintenance**     | Software upgrades                                         | Schedule maintenance around single customer preference                       |
|                     | Software patches                                          |                                                                              |
|                     | Hardware driver or firmware updates                       |                                                                              |


<p style="text-align: center; font-size: 16px; font-weight: 600; margin-bottom:4px; margin-top:40px;">Rackspace Object Storage</p>

|                     | **Supported**                                                    | **Unsupported**                                        |
| ------------------- | ---------------------------------------------------------------- | ------------------------------------------------------ |
| **Protocols**       | S3                                                               |                                                        |
|                     | API calls using NamespaceAdmin credentials against the namespace | API calls outside of Namespace                         |
| **Replication**     | Local Replication Group                                          | Geo Replication                                        |
| **Snapshots**       |                                                                  | Snapshots                                              |
| **Provisioning**    | NameSpace Creation                                               | Bucket Creation                                        |
|                     | Namespace Admin Creation                                         | User Account Creation/Management                       |
|                     | Namespace Quota                                                  |                                                        |
|                     | Replication Group                                                |                                                        |
|                     | Retention Policies                                               |                                                        |
| **Decommissioning** | Namespace Deletion                                               | Drive Destruction / DoD wipe                           |
|                     | Bucket Deletion                                                  |                                                        |
| **Administration**  | Quota Increase                                                   |                                                        |
|                     | Health Check                                                     |                                                        |
| **Troubleshooting** | Hardware break-fix                                               | VDC-wide Changes                                       |
|                     | Software break-fix                                               |                                                        |
|                     | Performance                                                      |                                                        |
|                     | Configuration                                                    |                                                        |
| **Monitoring**      | Hardware Failures                                                |                                                        |
|                     | Capacity Thresholds                                              |                                                        |
|                     | Connectivity                                                     |                                                        |
| **Performance**     | Review on request                                                |                                                        |
|                     | Review to troubleshoot an issue                                  |                                                        |
| **Upgrades**        | Rackspace-defined upgrade schedule                               | Schedule upgrade around single customer preference     |
|                     | Vendor-approved procedures                                       |                                                        |
| **Maintenance**     | Software upgrades                                                | Schedule maintenance around single customer preference |
|                     | Software patches                                                 |                                                        |
|                     |  firmware updates                                                |                                                        |
|                     | Xdoctor & Service Console updates                                |                                                        |


<p style="text-align: center; font-size: 16px; font-weight: 600; margin-bottom:4px; margin-top:40px;">Unified Data Storage – Dedicated NAS</p>
<p style="text-align: center; font-size: 16px; font-weight: 600; margin-bottom:4px;">Dell Isilon/PowerScale, NetApp FAS/AFF</p>

|                     | **Supported**                                                 | **Unsupported**                                   |
| ------------------- | ------------------------------------------------------------- | ------------------------------------------------- |
| **Protocols**       | NFS                                                           | FCOE                                              |
|                     | SMB                                                           |                                                   |
|                     | iSCSi                                                         |                                                   |
| **Replication**     | DR and Vault Mirrors                                          | Synchronous mirror                                |
|                     | No restriction on location of source and destination clusters | MetroCluster                                      |
|                     | Replication to NetApp Cloud Volumes on Tap (CVO)              |                                                   |
| **Snapshots**       | On-demand                                                     | Application-consistent snapshots                  |
|                     | Scheduled                                                     |                                                   |
| **Provisioning**    | Configure array and provision storage                         | Mixed mode security style                         |
|                     | Update access policies                                        |                                                   |
|                     | Create shares/volumes                                         |                                                   |
|                     | Provide mount paths                                           |                                                   |
|                     | Create vserver                                                |                                                   |
|                     | Create QOS policy                                             |                                                   |
|                     | Enter assigned IP                                             |                                                   |
|                     | Create logical interfaces (LIF)                               |                                                   |
|                     | Create export policy for NFS                                  |                                                   |
|                     | Create volume                                                 |                                                   |
|                     | Configure security style for the volume                       |                                                   |
|                     | Enter vserver root and volume IPs for NFS export policy       |                                                   |
|                     | Create vserver root and volume export rules                   |                                                   |
|                     | Turn on volume efficiency (deduplication and compression)     |                                                   |
|                     | Enter AD lif IP and create AD default route (SMB)             |                                                   |
|                     | Join intensive domain (SMB)                                   |                                                   |
|                     | Configure share permissions for CIFS/SMB shares               |                                                   |
|                     | Provide the mount path to map or mount the new share          |                                                   |
| **Decommissioning** | Delete snapshots                                              | Drive destruction (available for additional cost) |
|                     | Remove quotas                                                 |                                                   |
|                     | Remove exports                                                |                                                   |
|                     | Delete volume                                                 |                                                   |
|                     | Delete lif                                                    |                                                   |
|                     | Delete vserver                                                |                                                   |
|                     | Destroy aggregates                                            |                                                   |
|                     | Reinitialize and zero drives                                  |                                                   |
| **Administration**  | Capacity planning                                             |                                                   |
|                     | LUN expansion                                                 |                                                   |
|                     | Host add/removes                                              |                                                   |
|                     | LUN add/removes                                               |                                                   |
|                     | Health check                                                  |                                                   |
| **Troubleshooting** | Hardware break-fix                                            |                                                   |
|                     | Software break-fix                                            |                                                   |
|                     | Performance                                                   |                                                   |
|                     | Configuration                                                 |                                                   |
| **Monitoring**      | Active IQ Unified Manager (AIQUM)                             |                                                   |
|                     | Monitor emails alerts                                         |                                                   |
| **Performance**     | Review on request                                             |                                                   |
|                     | Review to troubleshoot an issue                               |                                                   |
| **Upgrades**        | Vendor-approved procedures                                    |                                                   |
|                     | Quality control upgrade steps                                 |                                                   |
|                     | Execute Upgrade                                               |                                                   |
| **Maintenance**     | Software upgrades                                             |                                                   |
|                     | Software patches                                              |                                                   |
|                     | Hardware driver or firmware updates                           |                                                   |
|                     | Shelf expansions/additions                                    |                                                   |


<p style="text-align: center; font-size: 16px; font-weight: 600; margin-bottom:4px; margin-top:40px;">Unified Data Storage - Dedicated SAN</p>
<p style="text-align: center; font-size: 16px; font-weight: 600; margin-bottom:4px;">Dell Unity XT</p>

|                     | **Supported**                                                      | **Unsupported**             |
| ------------------- | ------------------------------------------------------------------ | --------------------------- |
| **Protocols**       | FC                                                                 | iSCSI                       |
|                     | SMB                                                                | FCOE                        |
|                     | NFS                                                                |                             |
| **Replication**     | RecoverPoint                                                       |                             |
|                     | OEM Standard Replication                                           |                             |
| **Snapshots**       | OEM Standard Snapshots                                             |                             |
| **Provisioning**    | Install brocade license                                            | Host\\cluster management    |
|                     | Zoning                                                             | Filesystem management       |
|                     | Masking                                                            | Ethernet infrastructure     |
|                     | FC Switch Administration                                           |                             |
|                     | LUN creation                                                       |                             |
|                     | Interfaces\\servers\\shares (file)                                 |                             |
| **Decommissioning** | FC switches                                                        |                             |
|                     | LUNs                                                               |                             |
|                     | High Assurance LUN wiping                                          |                             |
|                     | Arrays                                                             |                             |
|                     | Interfaces\\servers\\shares (file)                                 |                             |
| **Administration**  | Capacity planning/reporting                                        |                             |
|                     | LUN expansion                                                      |                             |
|                     | Host add/removes                                                   |                             |
|                     | LUN add/removes                                                    |                             |
|                     | Health check                                                       |                             |
|                     | Unified file                                                       |                             |
|                     | 24/7/365 coverage                                                  |                             |
| **Troubleshooting** | Hardware break-fix                                                 |                             |
|                     | Software break-fix                                                 |                             |
|                     | Performance (HBA - array)                                          |                             |
|                     | Configuration                                                      |                             |
| **Monitoring**      | Hardware failures                                                  | Ethernet connectivity       |
|                     | Capacity thresholds                                                |                             |
|                     | Connectivity                                                       |                             |
| **Performance**     | Review on request                                                  |                             |
|                     | Review to troubleshoot an issue                                    |                             |
|                     | Basic reporting                                                    |                             |
| **Upgrades**        | Rackspace-recommended upgrade schedule                             | Multi-pathing configuration |
|                     | Customer-requested schedule                                        |                             |
|                     | Vendor-approved procedures                                         |                             |
| **Maintenance**     | Customer change management                                         |                             |
|                     | Emergency Rackspace change management (managed, defined, executed) |                             |
|                     | Fabric expansion                                                   |                             |
|                     | Storage expansion                                                  |                             |


<p style="text-align: center; font-size: 16px; font-weight: 600; margin-bottom:4px; margin-top:40px;">Dedicated Object Storage (Dell ECS)</p>

|                     | **Supported**                                                      | **Unsupported**                              |
| ------------------- | ------------------------------------------------------------------ | -------------------------------------------- |
| **Protocols**       | S3                                                                 |                                              |
|                     | API calls using NamespaceAdmin credentials against the namespace   |                                              |
| **Replication**     | Local Replication Group                                            |                                              |
|                     | Geo Replication                                                    |                                              |
| **Snapshots**       | N/A                                                                |                                              |
| **Provisioning**    | Deploy/Configure:                                                  | NameSpace User management                    |
|                     | Cluster                                                            |                                              |
|                     | VDC                                                                |                                              |
|                     | Namespace                                                          |                                              |
|                     | Buckets                                                            |                                              |
|                     | Quotas                                                             |                                              |
|                     | Replication Groups                                                 |                                              |
|                     | Data IP's update for LB Configuration                              |                                              |
|                     | SRM Monitoring                                                     |                                              |
|                     | Erasure Coding Levels                                              |                                              |
| **Decommissioning** | Wipe of the cluster config including Namespaces, Buckets           | Drive Destruction (Not available by default) |
| **Administration**  | Capacity planning/reporting                                        |                                              |
|                     | Quota Updates                                                      |                                              |
|                     | NameSpace add/removes                                              |                                              |
|                     | Bucket add/removes                                                 |                                              |
|                     | Health check                                                       |                                              |
|                     | 24/7/365 coverage                                                  |                                              |
| **Troubleshooting** | Hardware break-fix                                                 |                                              |
|                     | Software break-fix                                                 |                                              |
|                     | Performance (HBA - array)                                          |                                              |
|                     | Configuration                                                      |                                              |
| **Monitoring**      | Hardware failures                                                  |                                              |
|                     | Capacity thresholds                                                |                                              |
|                     | Connectivity                                                       |                                              |
| **Performance**     | Rackspace-recommended upgrade schedule                             |                                              |
|                     | Customer-requested schedule                                        |                                              |
|                     | Vendor-approved procedures                                         |                                              |
| **Upgrades**        | Customer change management                                         |                                              |
|                     | Emergency Rackspace change management (managed, defined, executed) |                                              |
|                     | Cluster expansion                                                  |                                              |
| **Maintenance**     | Storage expansion                                                  |                                              |
