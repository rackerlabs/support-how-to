---
node_id: 4912
title: Scheduled Backups for Cloud Databases
type: article
created_date: '2015-11-02'
created_by: Rackspace Support
last_modified_date: '2015-11-02'
last_modified_by: Mike Asthalter
product: Cloud Databases
product_url: cloud-databases
---

Scheduled backups for Cloud Databases allow users to schedule periodic
backups of their single instances and high availability instance groups.
Users can define a day of the week when a full backup is performed on
their selected instance type along with an optional hour and minute,
which is random if not provided.

This feature is supported for datastore versions MySQL 5.6, Percona 5.6,
and MariaDB 10 or higher.

The schedule will run every day at the assigned time creating daily
incremental backups, except for the specified day of the week when the
full backup task is performed. All backups will be stored in Cloud Files
and will be charged the standard Cloud Files storage fees.

### Features

-   Daily incremental backups except for the full backup day.
-   Automated backups for HA instance groups will use the HA instance id
    as a reference and the backup process will use the most up-to-date
    node as a source.
-   User-defined full automated backup retention policy.
-   Allows users to run the backup process immediately through the
    client or API by setting the `run_now` option.

### How to schedule backups

Scheduled backups can be enabled through the API using the following API
operation:

<https://developer.rackspace.com/docs/cloud-databases/v1/developer-guide/#create-scheduled-backup>

The following information needs to be provided:

| Name                    | Description                                                                               | Required |
|-------------------------|-------------------------------------------------------------------------------------------|----------|
| action                  | The scheduled action: backup.                                                             | Yes      |
| day\_of\_week           | The day of the week. Sunday is 0.                                                         | Yes      |
| hour                    | The hour of the day. Midnight is 0.                                                       | Yes      |
| minute                  | The minute of the hour.                                                                   | Yes      |
| instance\_id            | The database instanceId to back up.                                                       | Yes      |
| source\_id              | The database instanceId or haId to back up.                                               | No       |
| source\_type            | The type of backup for the given source\_id (&lsquo;instance&rsquo; or &lsquo;ha&rsquo;, defaults to &lsquo;instance&rsquo;). | No       |
| full\_backup\_retention | The number of full automated backups to keep.                                             | No       |

The `day_of_week` attribute specifies the day on which a full backup
will be made. After that day, the schedule will automatically run daily
incremental backups until the next full backup. If the `day_of_week`
attribute is not provided, then a random day of the week will be
assigned to the schedule.

The hour and minute specify the time at which the backup job will run.
If either of those values are not specified, then a random time will be
assigned to the schedule. The timezone used by the schedule backup
service is UTC.

Currently only one schedule can be active per instance. If an instance
already has a schedule enabled, a subsequent API call to create a
schedule for that instance will cause an error with the message
&ldquo;your\_instance\_id already has an active schedule."

### Backup retention policy

By default, the automated backup retention policy is set to two full
backups. This means that when the third full automated backup is
performed, the oldest full automated backup and its child incremental
backups will be deleted. Users can define their own retention policy at
the time they create a schedule, or by updating an existing schedule
according to their needs, with the allowed minimum retention value set
to 2. There is no maximum value for the amount of full backups to keep.

### HA automated backups

For High Availability (HA) groups, the backup will be performed with the current active node
as the source, and it will be a full or incremental backup based on the
schedule settings. If a master/slave setup is converted to an HA group,
and either the master or slave nodes have scheduled backups enabled, the
resulting HA group will also have a schedule enabled with the same time
settings as the primary or first replica node's schedule. The individual
schedules for the master/slave nodes will be deleted.

### Managing and restoring scheduled backups

Scheduled backups can be managed and restored in the same manner as on
demand backups. Details on how to manage backups can be found in the
article
[Managing backups for Cloud Databases](/how-to/managing-backups-for-cloud-databases).

### Cloud Databases automated backups API

For more details about the following API calls see the full API
documentation at:

[<span>https://developer.rackspace.com/docs/cloud-databases/v1/developer-guide/\#create-scheduled-backup</span>](https://developer.rackspace.com/docs/cloud-databases/v1/developer-guide/#create-scheduled-backup)

The following table gives a brief overview of the automated backups API
calls.

| API                   | Method | URI                                           | Description                                                                            |
|-----------------------|--------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| Create schedule       | POST   | /{version}/{accountId}/schedules              | Creates a schedule for running a backup periodically for a single instance or HA group |
| Show schedule details | GET    | /{version}/{accountId}/schedules/{scheduleId} | Shows details of the specified schedule.                                               |
| List all schedules    | GET    | /{version}/{accountId}/schedules              | Lists all the schedules for the specified account.                                     |
| Update schedule       | PUT    | /{version}/{accountId}/schedules/{scheduleId} | Updates the specified schedule.                                                        |
| Delete schedule       | DELETE | /{version}/{accountId}/schedules/{scheduleId} | Deletes the specified schedule.                                                        |

**Note:** The `instance_id` field is deprecated. It can still be used when
providing a single instance id when creating a schedule. HA instance
schedules should provide `source_id` with the `source_type` set
to &ldquo;ha&rdquo;.

### Limitations

-   The automated backup schedule for HA instances can only be created
    after the HA group is completed. This means that if an HA setup has
    just been created, all nodes must be active before attempting to
    create the schedule.
-   Schedules cannnot be directly assigned to instances that are part of
    an HA group.
-   Only one schedule is allowed per source, either a single instance or
    HA group.

For more information on backups with Cloud Databases, please see 
[Managing backups for Cloud Databases](/how-to/managing-backups-for-cloud-databases).
