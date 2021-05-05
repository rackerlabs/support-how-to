---
permalink: manage-users-for-cloud-databases
audit_date: '2020-09-18'
title: Manage users for Cloud Databases
type: article
created_date: '2012-07-24'
created_by: Rackspace Support
last_modified_date: '2020-09-18'
last_modified_by: Rose Morales 
product: Cloud Databases
product_url: cloud-databases
---

This article describes the user management operations for Cloud Databases that
you can perform.

### Create users with host parameters

You can create a user in the Cloud Databases section of the [Cloud Control
Panel](https://login.rackspace.com/) by clicking on an existing instance name,
**Instance Details** > **Users** > **Create User**.  

#### Create users

When you create a new user, consider the following requirements and limitations:

- All users have full privileges on the databases assigned to them.
- User names cannot contain more than 16 characters.
- There is no character amount restriction for the password.
- You can assign one or more databases to the user.
- Upon database creation a user is assigned.  

#### Valid characters for user names and passwords

The following characters are valid for user names and passwords:

- Letters, both uppercase and lowercase, are allowed.
- Numbers, spaces, and the symbols @, ?,  and \# are allowed. Spaces are not
    allowed at the beginning or end of the user name or password.
- The underscore symbol (\_) is allowed anywhere in the database name, user
    name, or password.  

#### Limitations on user names and passwords

The following characters are not allowed when you create user names or
passwords:

- Single quotation marks
- Double quotation marks
- Back quotation marks
- Semicolons
- Commas
- Backslashes
- Forward slashes
- Spaces at the beginning or end of the user name or password  

#### Valid characters for host names

The host parameter should be a numeric IPv4 address that describes the host from
which the user must connect (such as 192.168.1.12) or the percent sign (%). The
percent sign serves as a wildcard to MySQL, and means "from anywhere". Users
created without a host parameter automatically get this default value, which
allows them to connect to the database from any host.

- Valid host name: 111.111.111.11
- Invalid host name: server1.test.com  

### Modify user accounts

You can perform the following operations to a user by clicking the cog icon next
to the user name:

- Edit the user name and host
- Change the user's password
- Delete the user
- Manage database access (grant or revoke access to specific databases)

### Manage database access for users

Selecting **Manage Database Access** in the **Actions** menu enables you to
control user access to each database. To revoke a user's access to a database,
click the "-" button next to the database name in the list.

To grant a user access to a database, click **Add Access** and select the check
box next to the appropriate database names.

**Important:** Users can only be granted or revoked full permissions on a
database. To add different permission levels, you must enable the root user as
described in the following section.

### Set access-level permissions for individual users

You can grant or revoke user universal privileges on a database in the
[Clound Control Panel](https://login.rackspace.com). You might need to set specific privileges for a user, such as granting
some users read-only access to a specific database. To do this you must enable
the root user for your database instance. After the root user is enabled, you
can log in to MySQL and manage the access privileges for individual users.

- **Method 1**: [Trove Command Line
  Tool](https://developer.rackspace.com/docs/cloud-databases/v1/getting-started/send-request-ovw/#using-the-trove-client),
  generally referred to as the CLI.

- **Method 2**:
  [API](https://docs.rackspace.com/docs/cloud-databases/v1/api-reference/database-instances/#enable-root-user).
  Support for access-level control on Cloud Databases through our Control Panel
  will be provided in the future.

#### Enable root user with Trove command-line tool

[Install the trove client](https://developer.rackspace.com/docs/cloud-databases/v1/getting-started/send-request-ovw/#install-the-trove-client)
and then enable the root user for the database instance by using the following command,
where &lt;instance&gt; is the ID of the instance:

        $ trove root-enable <instance>

This command generates a password for the root user. Now you have full control
for creating and managing user privileges.

In the following example, database instance, **MySQLDBInstance01**, has a database, **DBStaging1**, and
a user, **DevUser1**. You want to set up read-only permissions for **DevUser1**.

1. List database instances to get the instance ID:

       $ trove list

2. Enable the root user on **MySQLDBInstance01**, with instance ID
**23a6481f-f98a-4fcd-b4a9-54d06f6f6e88**:

       $ trove root-enable 23a6481f-f98a-4fcd-b4a9-54d06f6f6e88

   A password is generated and returned for the root user.

3. Log in to MySQL as a root user with the password generated in the
preceding step:

       $ mysql -u <root> -h <hostname> -p <password>

4. In MySQL, set up read permissions for **DevUser1** by using the following `GRANT`
statement:

       $ GRANT SELECT on DBStaging1.* to 'DevUser1'@'hostname';

**Note:**  You can reset the root user password by making subsequent calls to
enable the root user.

#### Enable root user with the API

If you want to enable the root user by using the API, follow the examples located in our
[API
documentation](https://docs.rackspace.com/docs/cloud-databases/v1/api-reference/database-instances/#enable-root-user).
