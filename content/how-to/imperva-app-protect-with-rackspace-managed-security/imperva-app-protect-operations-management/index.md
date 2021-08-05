---
permalink: imperva-app-protect-operations-management/
audit_date: '2021-08-04'
title: Imperva App Protect operations management
type: article
created_date: '2021-08-04'
created_by: Adam Brown
last_modified_date: '2021-08-04'
last_modified_by: Stephanie Fillmon
product: Imperva App Protect
product_url: imperva-app-protect
---

### Patching

Imperva releases new patches, features, and capabilities during weekly
release windows. The dates indicate a start of the release and might not
reflect when the change takes place for a particular customer. For full
details about Imperva releases, see
[Imperva Release Notes](https://docs.imperva.com/bundle/cloud-application-security/page/release-notes/release-notes.htm).

### Backups

Imperva’s configuration is backed up within their data centers and distributed
through the various point of presences (PoPs) to ensure 24x7x365 availability
and configuration management. Exact details on the backup process cannot be
provided for the SaSS based service.

| Essential Maintenance |   |
| :-- | :-- |
| Definition | Required for a production incident that is currently or potentially affecting our Imperva customers |
| Advance Notice | None |
| Schedule  | As needed to stabilize and prevent customer impact |
| Impact on Service | The Imperva cloud is designed to be a distributed fault tolerant service. A PoP undergoing maintenance should not impact the level of service as traffic is routed to the nearest available PoP |
| Communication Method | Customers are notified as follows:<br /><ul><li>Imperva Status page notification.</li><li>Email to Infrastructure Protection customers.</li><ul/> |


| Scheduled Maintenance  |   |
| :-- | :-- |
| Definition  | Required for:  <br /><ul><li>Infrastructure hardware/software changes which may pose a risk.</li><li>Infrastructure upgrade.</li><ul/> |
| Advance Notice | A minimum of two weeks.  |
| Schedule | Imperva aim to conduct scheduled maintenance as follows:<br /><ul><li>  On Sunday (preferable).</li><li>During office off hours (20:00 – 8:00 according to PoP local time).</li><li>One PoP at any given time.</li><ul/> |
| Impact on Service | The Imperva cloud is designed to be a distributed fault tolerant service. A PoP undergoing maintenance should not impact the level of service as traffic is routed to the nearest available PoP |
| Communication Method | Customers are notified as follows:<br /><ul><li>Imperva Status page notification.</li><li>Email to Infrastructure Protection customers.</li><ul/> |

### Log Storage

Imperva App Protect stores logs for traffic- related logs 30 or 90 days,
depending on the plan selected. After such time, logs are purged from the
system. Imperva stores the following three types of logs:

- Events as displayed on the Events page in the Cloud Security Console, and
  the associated threat alerts based on the events.
- SIEM integration weblogs
- Network layer 3/4 headers, which contain IP addresses

In addition, audit trail logs are captured of actions performed in your
account-by-account users, system processes, and Imperva system administrators
and support. All audit logs are stored for a minimum of 7 years.
