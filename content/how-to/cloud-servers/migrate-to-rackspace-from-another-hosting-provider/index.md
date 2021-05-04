---
permalink: migrate-to-rackspace-from-another-hosting-provider
audit_date: '2019-11-22'
title: Migrate to Rackspace from another hosting provider
type: article
created_date: '2016-01-21'
created_by: Nate Archer
last_modified_date: '2019-11-22'
last_modified_by: William Loy
product: Cloud Servers
product_url: cloud-servers
---

This article provides instructions for developers who are migrating their infrastructure from another hosting provider or virtual machine to the Rackspace Cloud. These instructions are not specific to any particular hosting provider. If you require further assistance, you can use [Rackspace Migration Services](https://www.rackspace.com/migration).

### Prerequisites

-   A Rackspace Cloud services account
-   Access to your account with your current hosting provider

### Preparation

Based on the size and configuration of your existing cloud instance, select an equivalent size and configuration for the Rackspace Cloud Servers instance. Consider any resources, such as application and database resources, that you want to migrate from your current hosting provider.

For an overview of the Rackspace Cloud products, see the [Rackspace Core Infrastructure Guide](https://docs.rackspace.com/docs/user-guides/infrastructure/cloud-intro/cloud-tour/).

### Provision and configure the Cloud Servers instance

Select an instance type equivalent to that of your current server and operating system, and then [provision a new instance](/support/how-to/create-a-cloud-server) on Rackspace Cloud Servers.

### Migrate data

The migration method that you use depends on the nature of your data.

   **Note:** Back up the data on your existing server *before* you migrate it.

### InstanceSync (Linux only)

You might be able to migrate your Linux&reg; servers to the Rackspace
Public Cloud by using [InstanceSync](https://github.com/cloudnull/InstanceSync/).

   Note: Rackspace does not officially support InstanceSync, and we cannot 
   guarantee migration success.

You do not need to stop everything on your source server to complete the migration, although we do recommend that you minimize load. 

Use the following steps for this migration:

1. Sign up for a Rackspace Public Cloud account.

2. Create a new destination server in the Rackspace Public Cloud and record
   the public IPv4 address and root password of your new Rackspace server. See
   [Create a general purpose Cloud Server](/support/how-to/creating-a-general-purpose-cloud-server)
   for assistance. If your current servers are running an end-of-life (EOL)
   operating system (OS), such as Ubuntu&reg; 14, contact Rackspace Support for
   assistance building the destination server.

3. If you are running an EOL OS, you need to change the base repositories for your
   server (both your old source server and the new Rackspace Cloud server). For
   example, the CentOS&reg; 5 repository should be `baseurl=https://vault.centos.org/5.11/os/$basearch`.
   Consult your distribution's documentation for more specifics on this step.

4. Apply all available updates for your OS on both your source server and your
   new Rackspace destination server. For example, if you're running Ubuntu 16,
   don't upgrade to 18, but do apply all updates to Ubuntu 16.

5. Download [InstanceSync](https://github.com/cloudnull/InstanceSync/) onto your
   source server and run the script. Watch the [screencast](https://asciinema.org/a/1063)
   for more info about how to run `InstanceSync`.

6. Verify the operation of your applications on your new Rackspace Cloud server.

7. Make any other needed changes to complete the migration, such as updating
   Domain Name Services (DNS) records or configuring monitoring. 


### Next steps

Implement monitoring and backup solutions on your cloud server and begin [enhancing security](/support/how-to/configuring-basic-security).
