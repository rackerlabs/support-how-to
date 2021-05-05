---
permalink: cloud-server-configuration-options
audit_date: '2019-04-15'
title: Cloud server configuration options
type: article
created_date: '2014-12-01'
created_by: Rose Contreras
last_modified_date: '2019-04-15'
last_modified_by: Brian King
product: Managed Operations
product_url: managed-operations
---

To deliver a Managed Cloud experience, Rackspace runs support automation
on every cloud server that we build. We have extended this capability by
creating a `build_config` metadata key that you can use to specify the
Rackspace-provided common tools that you want installed on your Rackspace
cloud servers configured with Rackspace-recommended best practices.

Many of the `build_config` metadata key options are available only when
you use the Cloud Servers API to build your servers. Building your
servers through the API gives you increased flexibility to configure the
server how you want it and ensures that it does not
conflict with any automation that you have running. If you build servers
through the Cloud Control Panel, you can select
only from the most common of these options.

To take advantage of this feature when using the API, you use any of the
defined `build_config` metadata key options that are available for your
specific service level (Managed Infrastructure or Managed Operations)
and pass your specified values to the scripts.

**Note:** This functionality is available only when you create a server.
If you want any of the tools installed after you have created the server, you
must download the tools and configure them individually on the servers.
If you have the Managed Operations SysOps service level, ask a Rackspace cloud
engineer to install the tools on your behalf.

### Build configuration options

Depending upon your service level, the following options are available for the
`build_config` metadata key:

`gateway`

- Available to all customers.
- Used with virtual network devices, such as the Fortigate-VM. This option 
  creates a Cloud Network suitable for routing traffic and configures the 
  virtual network device as the gateway for the Cloud Network.

`rack_user_only`

-   Available to Managed Operations customers.
-   Creates a Rackspace username and password for Rackspace Support to
    deliver System Administrator level support. This option does not add
    or configure any additional components.

`base_mgdops_config`

-   Available to Managed Operations customers.
-   Builds a regular Managed Operations server from a base image with a
    Rackspace username and password, installs and configures the Rackspace
    Monitoring agent to the Rackspace defaults, installs and configures
    Cloud Backup to the Rackspace defaults, installs all the support
    packages, and enables automatic updates. This configuration is the
    standard Managed Operations configuration.

`backup_agent_only`

-   Available to Managed Infrastructure customers.
-   Available to Managed Operations customers.
-   Installs the Cloud Backup agent.

`backup_defaults`

-   Available to Managed Infrastructure customers.
-   Available to Managed Operations customers.
-   Installs the Cloud Backup agent and configures a default backup set
    and schedule.

    By default, the following directories are backed up:

    **For Linux&reg; Managed Cloud servers:**

    -   `/etc`
    -   `/home`
    -   `/var/www`
    -   ` /var/lib/mysqlbackup`

    **For Windows&reg; Managed Cloud servers:**

    -   `c:\users`
    -   `c:\InetPub`

`monitoring_agent_only`

-   Available to Managed Infrastructure customers.
-   Available to Managed Operations customers.
-   Installs the Rackspace Monitoring agent.

`monitoring_defaults`

-   Available to Managed Infrastructure customers.
-   Available to Managed Operations customers.
-   Installs the Rackspace Monitoring agent and configures default
    monitoring, disk, and CPU checks.

    For Managed Operations service level customers, this option also
    configures default file system alerts that are sent to Rackspace.

`auto_updates`

-   Available to Managed Infrastructure customers.
-   Available to Managed Operations customers.
-   Enables automatic updates of server software.

You can combine the `build_config` options, for example:

-   `monitoring_defaults` with `auto_updates` installs the monitoring
    agent configured with Rackspace best practices and turns on
    automatic updates.

-   `backup_agent_only` installs the Cloud Backup agent
    but does not configure Rackspace backups. You must separately
    identify the directories that you want backed up after the agent
    is installed.

### Build options for configuration management software (Chef&reg;, Puppet&reg;, Ansible&reg;, and Salt)

Using the API to build a server with a core option passed does not
conflict with configuration management software. Such builds have a
Rackspace account and nothing more. If you want additional components,
you must pass them with the `build_config` metadata key.

The following example shows the build option for a Managed Infrastructure server:

    nova boot --flavor 2 --image [image] --meta build_config=core www.example.com

The following example shows the build option for building a Managed Operations server with a Rackspace username and password only and backup ability:

    nova boot --flavor 2 --image [image] --meta build_config= rack_user_only,driveclient fileserver.example.com

The following example shows a good option for a customer who wants a
Managed Infrastructure server that has monitoring and backups available, but
no updates or additional packages:

    nova boot --flavor 2 --image [image] --meta build_config=core,driveclient,monitoring db.example.com

If you use configuration management software, wait for the post-build
configuration to complete before performing your configuration management. For
standard and workload-optimized cloud servers only, you can obtain the Managed
Operations or Managed Infrastructure post-build automation status via the
Cloud Servers API. Look for the metadata key value  
`informationrax_service_level_automation`. Depending on the current status of
the Managed Cloud post-build automation process, the metadata key has
one of the following values:

- `Pending`
- `In Progress`
- `Complete`
- `Build Error`
- `Authentication Error`

When the metadata key is `Complete`, you can begin your
configuration management.
