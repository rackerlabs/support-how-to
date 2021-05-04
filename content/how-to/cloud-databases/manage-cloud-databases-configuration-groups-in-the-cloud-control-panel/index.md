---
permalink: manage-cloud-databases-configuration-groups-in-the-cloud-control-panel
audit_date: '2020-09-21'
title: Manage Cloud Databases configuration groups in the Cloud Control Panel
type: article
created_date: '2014-11-13'
created_by: Rose Contreras
last_modified_date: '2020-09-21'
last_modified_by: Rose Morales
product: Cloud Databases
product_url: cloud-databases
---

A configuration group is a collection of settings that you can save and apply to
one or more Cloud Database instances. It consists of one or more configuration
parameters, which represent options.

For example, you can set the `max_connections` parameter in a configuration
group to `80`, which means that the instance to which the configuration group is
applied can have a maximum of 80 clients connected simultaneously. You can also
set the default time zone for an instance by defining the `default_time_zone`
parameter in a configuration group.

This article describes how to manage configurations by using the Cloud Control
Panel.

For details about configuration parameters, see the MySQL documentation [5.1.4
Server System
Variables](https://dev.mysql.com/doc/refman/5.6/en/server-system-variables.html).

### Create a new configuration group and apply it to an instance

Use the steps in this section to create a configuration group and apply it to a
database instance.

**Note**: You can only apply a configuration group to instances in the same
region as the configuration group. This means you cannot apply a configuration
group created for the `LON` region and apply it to an instance in `DFW`.

#### Create a new configuration group

Use the following steps to create a new configuration group:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com/).

2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.

3. Select **Databases**.

4. In **Databases**, select **MANAGE EXTRAS** > **MySQL Configurations**.

5. Click **Create Configuration**.

6. Under **Identity**, provide a name and description for the configuration and
   specify the region in which you want to use the configuration.

7. Under **Settings**, select the datastore of the database instances to
   which the configuration parameters applies. For example, if you choose MySQL&reg; 5.6, the
   configuration group can be applied only to database instances that use MySQL 5.6.

8. In **Configuration Parameters**, enter values for the parameters that you want
   to customize for this configuration group. 

    **NOTE:** The parameters shown in orange text are non-dynamic parameters. If the value
    of any of these parameters is changed, you must restart all instances attached to the
    configuration group.

    The configuration group displayed on the **Configuration Parameters** page shows the database
    type it can be applied to and last updated timestamp.

9. Click **Create Configuration**.

    You can use the configuration group displayed in the **Configurations** page for
    your database instances.

    **Note:** The most frequently used parameters are displayed at the top of the list, and
    the remaining parameters are listed underneath.

#### Apply a configuration to an existing instance or create a new instance

You can apply a configuration to one or more existing instances from the **Configurations**
page, or you can apply a configuration to a single new database instance that you created
with the default configuration.

#### Apply a configuration from the Configurations page

1. In the Cloud Control Panel, select **Databases > Configurations**.

2. On the Configurations page, click the gear icon next to the database configuration that
   you want to apply to an instance.

3. Click **Apply to Existing Instances**. The database instances in the same
   region that use the datastore specified in the configuration group
   display in a pop-up dialog box.

4. Select all the instances to which you want to apply the configuration, and then click
   **Apply Configuration**.

5. If you change non-dynamic parameters in the configuration group, you must restart all the
   instances attached to the configuration group. To restart the affected instances:

   a. Go to the **Database Instances** page.

   b. The instances that you need to restart display in orange. Click the gear icon next
      to the instance to which you just applied the configuration group and select **Restart Instance**.

#### Apply a configuration to an instance with the default configuration from the Instance Details page

Use the following steps to apply a configuration to an instance:

1. On the **Database Instances** page, click the newly created instance to which you want to
   apply a configuration.

2. Under **Instance Details**, click **Choose Configuration**.

3. Select the configuration that you want to apply to the instance and click **Use Selected**.

4. Restart the database instance so that the changes take effect.

### Create a new instance with a configuration group

Use the following steps to create a new instance with a configuration group:

1. In the Cloud Control Panel, select **Databases > Configurations**.

2. On the **Configurations** page, click the gear icon next to the configuration you want
   to use to create an instance. Select **Create Instance**.

3. In the pop-up dialog box, provide a name for the instance and specify the RAM
   and disk size for the instance. The configuration group defines the region and datastore
   type, so you cannot change those settings.

4. Click **Create Instance**.

### Modify configuration parameters for a configuration group

You can modify configuration groups by updating the values of existing
parameters, adding new parameters, and removing parameters. This section
describes these steps. When you update a configuration group, you must
restart all the instances that use the configuration for the changes to take
effect on those instances.

#### Change the values of configuration parameters in a configuration group

Use the following steps to change the values of configuration parameters in a
configuration group:

1. On the **Configurations** page in the Cloud Control Panel, click the configuration group for which
   you want to modify the parameters.

2. On the **Configuration Details** page, click the gear icon for the parameter you want
   to delete and click **Edit Parameter**.

3. Modify the value.

    **NOTE:** Some configuration parameters cannot be deleted and require at least a
    minimum value. For example, `max_connections` must be set to a minimum value of `1`.

4. Click **Apply Changes**.

#### Add new configuration parameters to a configuration group

Use the following steps to add new configuration parameters to a configuration
group:

1. On the **Configurations** page in the Cloud Control Panel, click the configuration group for which
   you want to add parameters.

2. On the **Configuration Details** page, click **Add Parameters**. Only the parameters that
   are undefined appear in the list.

3. In the pop-up dialog box, provide values for the parameters that you want to add.

4. Click **Add Parameters**.

#### Remove configuration parameters from a configuration group

Use the following steps to remove configuration parameters from a
configuration group:

1. On the **Configurations** page in the Cloud Control Panel, click the configuration group for
   which you want to modify parameters.

2. On the **Configuration Details** page, click the gear icon for the parameter you want
   to delete and click **Edit Parameter**.

3. Change the value to `0`.

    **Note:** Some configuration parameters cannot be deleted and require at least a minimum
    value. For example, `max_connections` must be set to a minimum value of `1`.

4. Click **Apply Changes**.

### Remove a configuration from an instance

Use the following steps to remove a configuration from an instance:

1. In the Cloud Control Panel, select **Databases > Database Instances**.

2. Click the name of the instance from which you want to modify the configuration.

3. Under **Instance Details**, next to the **Configuration** field, click **Revert to Default**.

### Delete a configuration group

This section describes how to delete a configuration group.

#### Delete a configuration group by using the Configurations page

Use the following steps to delete a configuration group by using the
Configurations page:

1. In the Cloud Control Panel, select **Databases > Configurations**.

2. On the **Configurations** page, click the gear icon next to the database configuration that
   you want to delete.

3. From the menu, select **Delete Configuration**.

#### Delete a configuration group by using the Instance Details page

Use the following steps to delete a configuration group by using the Instance
Details page:

1. In the Cloud Control Panel, select **Databases > Database Instances**.

2. Click the name of the configuration you want to delete.

3. On the **Instance Details** page, click the **Action** menu.

4. Select **Delete Instance**.

### Special cases - Rebuilding FULLTEXT indexes

If you modify the value of any of the following configuration parameters, you must
rebuild indexes on all tables with FULLTEXT indexes. Only after you rebuild
the index will the database reflect the modified value. Use
<code>REPAIR TABLE tbl_name QUICK;</code>:

{{< table "table  table-striped table-bordered" >}}
|  |  |  |
|---------|--------|--------|
| innodb_ft_max_token_size  | innodb_ft_min_token_size| innodb_ft_num_word_optimize |
| innodb_ft_enable_stopword    |  innodb_ft_server_stopword_table   |   innodb_ft_user_stopword_table   |
| ft_min_word_len    |   innodb_ft_server_stopword_table   |   innodb_ft_user_stopword_table |
| innodb_ft_enable_stopword | innodb_ft_max_token_size |  innodb_ft_min_token_size |
| innodb_ft_num_word_optimize | innodb_ft_result_cache_limit | innodb_ft_server_stopword_table |
| innodb_ft_sort_pll_degree | innodb_ft_total_cache_size | innodb_ft_sort_pll_degree |
| innodb_ft_total_cache_size | | |
{{< /table >}}
