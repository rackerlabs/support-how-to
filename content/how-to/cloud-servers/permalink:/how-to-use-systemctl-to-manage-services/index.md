---
permalink: use-systemctl-to-manage-services/
audit_date:
title: Use Systemctl to Manage Services
type: article
created_date: '2020-09-20'
created_by: John Abercrombie
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# Using Systemctl to Manage Services

What is Systemctl?

Systemctl is the central management tool for controlling to the systemd init system. As such, it is the command most often used to interact with the systemd system. Most Linux distributions utilize systemd as their init system, so it pays to be familiar with how to use the systemctl function when it comes to the services running on your Linux system.

Managing Services

The basic command template when using the systemctl command will always be as follows:

```sh
systemctl (command) (service)
```

This may take a little getting used to since the service command utilized a ‘service (service) (command)’ format (ex: service httpd reload to reload the Apache service). Using this name example under the systemctl format, the command will look like this:

```sh
systemctl reload httpd (in CentOS/RHEL based systems)
OR
systemctl reload apache2 (in Ubuntu systems)
```
Note: it should be noted that you do not have to include the .service after the name of the service you are attempting to manage. Systemctl is smart enough to know that you are attempting to operate a service when using service management commands.

Now that we’ve got the format down, there are certain commands that you will most frequently use when utilizing the systemctl tool. They are as follows:

> start – when you are attempting to start a service that is not currently running
> stop – when you want to stop a service currently running
> restart – when you want to restart a service that is currently running
> reload – when you want to perform a soft restart on a service is this currently running*
> enable – when you wish to enable a service to start automatically whenever the system reboots
> disable – when you no longer want a service to start automatically when the system reboots
> status – when you want to check the current status of a service on your system

> * - reload is not always an available option. You can use reload-or-restart instead if you are unsure about whether or not the particular service you are managing has the option to reload. Using reload-or-restart will attempt to use reload first, but will use restart if reload is not available.

There are a few more options that can be used, but they are less commonly utilized. Those options are:

> is-active – when you want to check to see if a unit is currently active (running)
> is-enabled – when you want to quickly check if a service is enabled or disabled
> is-failed – when you want to check if a service is in a ‘failed’ state
> list-units – when you want to see all the units that systemd currently has active on the system

The list-unit option will output a table with columns entitled, ‘UNIT’, ‘LOAD’, ‘ACTIVE’, ‘SUB’, and ‘DESCRIPTION.’ Each of these columns has the following meaning:

> UNIT – the systemd unit (or service) name
> LOAD – is the service currently loaded in systemd
> ACTIVE – a summary of whether or not the service is currently active or not
> SUB – gives a little more detail about the current state of the service
> DESCRIPTION – a short description of what the service is/does

Adding the --all argument to the list-units systemctl command will also include any service that systemd loaded or attempted to load with no consideration given to its current state on the system. The use of this additional argument will look like this:

```sh
systemctl list-units --all
```

The ‘list-units’ command can be used in a few additional ways. One such option is adding the --state= filter. This will look like this:

```sh
systemctl list-units --all --state=(filter)
```
This option is typically used to filter the results by the service’s current state. This will typically be either ‘active’ or ‘inactive’ (ie, systemctl list-units --all --state=inactive)

You can filter the results further by adding the following argument:

```sh
systemctl list-units --type=(filter)
```
This will tell systemctl to only list the services of the type we are currently interested in. For example, replacing (filter) with ‘service’ in the above command will list only active service units.

Similarly, the command systemctl list-units-files can be used to list every available unit file within the systemd path, including those that systemd has not attempted to load.

If you need to prevent a service from starting, manually or automatically, you can use the mask command with systemctl. For example, let’s say you needed Apache to not be run. If not running as root, you’ll need to place the ‘sudo’ command in front as per usual. Otherwise, the command would look like this:

```sh
systemctl mask httpd.service
OR
systemctl mask apache2.service
```
When you want to unmark the service, replace the above ‘mask’ with ‘unmask,’ and the service will be able to be started again.

While there are more advanced uses of the systemctl utility, these are the use options that are going to be utilized most often. By now, you should be familiar with the most common uses of systemctl when interacting with systemd. Systemctl will be your main method of interaction for service management.
