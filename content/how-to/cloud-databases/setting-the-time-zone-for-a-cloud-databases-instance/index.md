---
permalink: setting-the-time-zone-for-a-cloud-databases-instance
audit_date: '2020-09-17'
title: Set the time zone for a Cloud Databases instance
type: article
created_date: '2014-04-23'
created_by: Jered Heeschen
last_modified_date: '2020-09-17'
last_modified_by: Rose Morales
product: Cloud Databases
product_url: cloud-databases
---

You can set the server time zone for a Cloud Databases instance to be persistent
by using the configuration groups feature of Cloud Databases. You can use either
the [Cloud Databases
API](https://docs.rackspace.com/docs/cloud-databases/v1/getting-started/manage-tz-ovw/)
or the [trove command line
tool](https://docs.rackspace.com/support/how-to/managing-configuration-groups-for-cloud-databases-with-the-trove-command-line-tool)
to make the configuration changes. The examples in this article use the trove
command line tool.

### Prerequisites

- [Trove command line
  tool](https://docs.rackspace.com/support/how-to/managing-configuration-groups-for-cloud-databases-with-the-trove-command-line-tool)

### Setting the server time zone

The server time zone is set in MySQL with the `default_time_zone` parameter, and the
default value is `SYSTEM`. To set `default_time_zone` to a different value you
can use the named time zone for the region (from the [IANA Time Zone
Database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)) or the
offset of the time zone from [UTC (Coordinated Universal
Time)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). For example,
the name value for the Australian Eastern Standard Time (AEST) time zone could
be either `Australia/Sydney` for a region that observes daylight saving time, or
`Australia/Brisbane` for a region that observes AEST year-round; because AEST is
ahead of UTC by ten hours, the offset value that can be used instead of the
named time zone would be `+10:00.`

You can set the `default_time_zone` parameter in a configuration group that can
be applied to your Cloud Databases instance. You can create a new configuration
group for the time zone change or add the time zone parameter to an existing
configuration group.

### Create a new configuration group

To create a new configuration group for custom time zone information, run the
[configuration-create](https://docs.rackspace.com/support/how-to/managing-configuration-groups-for-cloud-databases-with-the-trove-command-line-tool#create-a-new-configuration-group)
command with `trove`.

The following example creates a configuration group named TimeConfig that sets
the time zone to India Standard Time (IST), which is Asia/Calcutta in the IANA
time zone database.

To set up a configuration group using the named time zone, you can set
`Asia/Calcutta` as the value of `default_time_zone`, as in:

    trove configuration-create TimeConfig '{"default_time_zone":"Asia/Calcutta"}' --datastore MySQL

To create the configuration group using the offset of IST from UTC, which is
`+5:30`, use the offset value for `default_time_zone`:

    trove configuration-create TimeConfig '{"default_time_zone":"+5:30"}' --datastore MySQL

#### Apply the configuration group

To apply the configuration group to an existing Cloud Databases instance, run
the
[configuration-attach](https://docs.rackspace.com/support/how-to/managing-configuration-groups-for-cloud-databases-with-the-trove-command-line-tool#apply-a-configuration-group-to-an-existing-instance)
command with `trove`, as follows:

    trove configuration-attach aab79bba-9eaa-4ac3-94fc-e4aaf46b4efb 26f6f753-3853-4bf5-9bfe-1765966ad2f6

The first argument is the instance ID and the second is the configuration group
ID.

You can get a list of instances and their IDs by running the list command with
`trove`.

    trove list

**Note:** For the time zone setting to take effect, the Cloud Databases instance
must be restarted.

#### Add to an existing configuration group

You can set the `default_time_zone` parameter can be set on an existing
configuration group by running the
[configuration-patch](https://docs.rackspace.com/support/how-to/managing-configuration-groups-for-cloud-databases-with-the-trove-command-line-tool#modify-configuration-groups)
command with `trove`.

The following example adds the India Standard Time (IST) time zone to a
configuration group:

    trove configuration-patch 26f6f753-3853-4bf5-9bfe-1765966ad2f6 '{"default_time_zone":"Asia/Calcutta"}'

**Note:** For the time zone setting to take effect, you must restart the Cloud Databases instance.

### Checking the server time zone

You can check the current time zone setting for an instance by [logging in to
the mysql
console](https://docs.rackspace.com/support/how-to/connect-to-a-cloud-databases-instance)
and querying the value of global.time\_zone parameter.

    SELECT @@global.time_zone;

The returned value shows the instance's current time zone setting.

    +--------------------+ | @@global.time_zone | +--------------------+ | +06:00             | +--------------------+

If the time zone does not reflect what you set in the configuration group
attached to the instance, the instance might need to be restarted for the change
to take effect.
