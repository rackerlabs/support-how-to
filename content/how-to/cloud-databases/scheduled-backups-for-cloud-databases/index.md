---
permalink: scheduled-backups-for-cloud-databases
audit_date: '2018-07-05'
title: Scheduled backups for Cloud Databases
type: article
created_date: '2015-11-02'
created_by: Rackspace Support
last_modified_date: '2020-09-17'
last_modified_by: Cat Lookabaugh
product: Cloud Databases
product_url: cloud-databases
---

Scheduled backups for Cloud Databases enable you to schedule periodic
backups of your single instances, including replica sets and high
availability (HA) instance groups.

You can schedule a backup of either the primary source or the replica of a replica
set, but they act more like standalone instances. When you schedule a backup
on an HA instance group, HA chooses the most up-to-date replica to run the
backup.

When you schedule a backup, you can define the day of the week on which to
perform a full backup on the selected instance type, and optionally specify
the hour and minute when full and incremental backups are performed. By
default, a random day of the week is generated.

The schedule runs every day at the assigned time, creating daily
incremental backups, except for the specified day of the week when the
full backup task is performed. All backups are stored in Cloud Files
and are charged the standard Cloud Files storage fees.

This feature is supported for MySQL 5.6, Percona 5.6,
and MariaDB 10 or later.

### Features

Scheduled backups provide the following features:

- Incremental backups are performed daily, except for the day of the full
  backup.
- Automated backups for HA instance groups use the HA instance ID as a
  reference, and the backup process uses the most up-to-date replica node as a
  source.
- You define the number of full, automated backups to retain.
- You can run the backup process immediately through the client or the API by
  setting the `run now` option.

### Pricing

Scheduled backups are priced the same as on-demand backups. They are charged
based on the amount of storage used at the standard Cloud Files rates. For
information on these rates, see [Cloud
Pricing](https://www.rackspace.com/en-us/cloud/public-pricing#cloud-files).
Charges are incurred as long as the backups exist. Even if you delete the
instance, you might be charged for the backups if you don't delete them
individually.

### Scheduling backups by using the Cloud Control Panel

You can enable, modify, and delete scheduled backups by using the Cloud
Control Panel.

#### Create a backup schedule on an existing instance

Use the following steps to create a backup schedule on an existing instance:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com/).

2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.

3. Select **Databases > MySQL**.

4. In the list of instances, click the gear icon next to the instance for
   which you want to create a schedule and select **Schedule Backup**.

5. In the pop-up dialog box that appears, select the day of the week for the
   full backup, specify a time of day to run the daily backups, and specify how
   many full backups to retain. If you do not specify a time, a random time is
   selected.

6. Click **Create Schedule**.

   A message appears at the bottom of the panel that says `Created schedule for
   instanceName`.

#### Create a backup schedule on a new instance

Use the following steps to create a backup schedule on a new instance:

**Note:** At this time, the ability to create a schedule during instance
creation is only available on HA groups.

1. Log in to the [Cloud Control Panel](https://login.rackspace.com/).

2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.

3. Select **Databases > MySQL**.

4. Above the list of instances, select **Create High Availability Group**.

5. Under **Settings**, ensure that the box next to **Protect your data with
   Daily Scheduled Backups** is selected.

6. Click **Specify Scheduled Backup Settings…** to specify the exact time for
   the daily backups, the day of the week for the weekly full backup, and the
   number of weekly full backups to retain. If any of those values are not
   specified, they are selected randomly. Then, click **Create Schedule**.

7. After you've selected all of the other settings for the HA group, click
   **Create HA Group**.

#### View and modify a scheduled backup

Use the following steps to view and modify a scheduled backup:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com/).

2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.

3. Select **Databases > MySQL**.

4. Click the name of the instance for which you want to view or modify a
   backup schedule.

   **Note:** On the instance **Details** page, the schedule appears next to
   **Scheduled Backups**.

5. To edit the schedule, click **Edit**.

#### Delete a scheduled backup

Use the following steps to delete a scheduled backup:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com/).

2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.

3. Select **Databases > MySQL**.

4. Click the name of the instance for which you want to delete a backup
   schedule.

   On the instance **Details** page, the schedule is displayed next to
   **Scheduled Backups**.

5. To delete the schedule, click **Delete**.

### Scheduling backups by using the API

You can enable, modify, and delete scheduled backups through the API by using
the API operations that are described in the [Cloud Databases API
Reference](https://docs.rackspace.com/docs/cloud-databases/v1/api-reference/automated-backups/).

The following table provides a brief overview of the scheduled backup API
operations:

| Name                          | Method   | URI                                             | Description                                                                                |
| ----------------------------- | -------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Create scheduled backup       | `POST`   | `/{version}/{accountId}/schedules`              | Creates a schedule for running a backup periodically for a single instance or an HA group. |
| List scheduled backups        | `GET`    | `/{version}/{accountId}/schedules`              | Lists all of the scheduled backups for the specified account.                              |
| Show scheduled backup details | `GET`    | `/{version}/{accountId}/schedules/{scheduleId}` | Shows the details for the specified scheduled backup.                                      |
| Update scheduled backup       | `PUT`    | `/{version}/{accountId}/schedules/{scheduleId}` | Updates the specified scheduled backup.                                                    |
| Delete scheduled backup       | `DELETE` | `/{version}/{accountId}/schedules/{scheduleId}` | Deletes the specified scheduled backup.                                                    |

The following table lists the required and optional attributes for these
operations:

| Attribute name          | Description                                                                                 | Required? |
| ----------------------- | ------------------------------------------------------------------------------------------- | --------- |
| `action`                | The scheduled action: `backup`.                                                             | Yes       |
| `day_of_week`           | The day of the week. Sunday is 0.                                                           | Yes       |
| `hour`                  | The hour of the day. Midnight is 0.                                                         | Yes       |
| `minute`                | The minute of the hour.                                                                     | Yes       |
| `instance_id`           | The ID of the database instance to back up.                                                 | Yes       |
| `source_id`             | The ID of the database instance or HA group to back up.                                     | No        |
| `source_type`           | The type of backup for the given `source_id`. (`instance` or `ha`. Defaults to `instance`.) | No        |
| `full_backup_retention` | The number of full automated backups to keep.                                               | No        |

**Note:** The `instance_id` field is deprecated. You can still use this field
when you are providing a single instance ID to create a schedule. HA instance
schedules should provide the `source_id` with the `source_type` set to `ha`.

The `day_of_week` attribute specifies the day on which a full backup
is made. After that day, the schedule automatically runs daily
incremental backups until the next full backup. If the `day_of_week`
attribute is not provided, a random day of the week is
assigned to the schedule.

The ``hour`` and ``minute`` attributes specify the time when the backup job
runs. If either of these values isn't specified, a random time is assigned to
the schedule.

The time zone that the schedule backup service uses is UTC.

Currently only one schedule can be active per instance. If an instance already
has a schedule enabled, a subsequent API call to create a schedule for that
instance causes an error with the message `yourInstanceId already has an
active schedule`.

### Managing and restoring scheduled backups

You can manage and restore scheduled backups in the same manner as on-demand
backups. For details, see [Managing backups for Cloud
Databases](/support/how-to/managing-backups-for-cloud-databases).

### Backup retention policy

By default, the automated backup retention policy is set to two full backups.
When the third full automated backup is performed, the oldest full automated
backup and its child incremental backups are deleted. You can define your own
retention policy when you create a new schedule or update an existing
schedule by setting the allowed minimum retention value to `2`. There is no
limit on the number of full backups that you may retain.

If the instance that is associated with a backup is deleted, the backups
remain until you manually delete them. Note that backups continue to be
charged for the Cloud Files storage that they use as long as they exist.

### HA automated backups

For HA groups, the backup schedule applies to the entire HA group and backups
are performed against the most up-to-date replica. If a replica set setup is
converted to an HA group and either the primary or replica nodes have scheduled
backups enabled, the resulting HA group also has a schedule enabled with the
same time settings as the primary or first replica node's schedule. The individual
schedules for the primary and replica nodes themselves are then deleted.

### Limitations

Backups for Cloud Databases have the following limitations:

- Backup schedules cannot be directly assigned to instances that are part of
  an HA group. They must be applied to the universally unique identifier
  (UUID) for the HA group instead.
- Only one backup schedule is allowed per instance, replica set, or HA group.

### Related articles

- [Managing backups for Cloud
Databases](/support/how-to/managing-backups-for-cloud-databases)
