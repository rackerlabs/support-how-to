---
permalink: use-systemctl-to-manage-services
audit_date: '2020-09-22'
title: Use Systemctl to manage services
type: article
created_date: '2020-09-20'
created_by: John Abercrombie
last_modified_date: '2020-09-20'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

### What is `Systemctl`?

`Systemctl` is the central management tool for controlling to the `systemd init` system. As such, you use
this command most often to interact with the `systemd` system. Most Linux&reg; distributions use `systemd` as
their `init` system, so it helps to be familiar with using the `systemctl` function when 
managing the services running on your Linux system.

### Manage services

The following example shows the basic command template for using the `systemctl` command:

    systemctl (command) (service)

This differs from the service command use a *service (service) (command)* format, which uses commands
such as `service httpd reload to reload the Apache service`. Using this name example under the `systemctl`
format, the command looks like the following examples:

**CentOS&reg;-based or Red Hat&reg; Enterprise Linux&reg;-based systems:**

    systemctl reload httpd
    
<br>

**Ubuntu operating systems:**

    systemctl reload apache2

**Note:** You do not have to include the **.service** after the name of the service you want to manage.
Systemctl is smart enough to know that you are trying to operate a service when using service management commands.

Following are certain common `systemctl` commands:

- **start**: Start a service that is not currently running
- **stop**: Stop a service currently running
- **restart**: Restart a currently running service
- **reload**: Perform a soft restart of a currently running service
- **enable**: Enable a service to start automatically whenever the system reboots
- **disable**: Prevent a service from starting automatically when the system reboots
- **status**: Check the current status of a service on your system

**Note**: The `reload` option is not always available. You can use `reload-or-restart` instead if you are unsure
about `reload` availability. Using `reload-or-restart` attempts to use `reload` first, and uses `restart`
if `reload` is not available.

Following are some less common options:

- **is-active**: Check to see if a unit is currently active (running)
- **is-enabled**: Check if a service is enabled or disabled
- **is-failed**: Check if a service is in a *failed* state
- **list-units**: Check all the units that `systemd` currently considers active on the system

#### The list-units command

The `list-units` option displays a table with the following columns:

- **UNIT**: The systemd unit (or service) name
- **LOAD**: The service currently loaded in systemd
- **ACTIVE**: A summary of whether the service is currently active
- **SUB**: Gives a little more detail about the current state of the service
- **DESCRIPTION**: A short description of what the service is or does

Adding the `--all` argument to the `list-units` `systemctl` command includes any service that `systemd`
loaded or tried to load regardless of its current state on the system, as shown in the following example:

    systemctl list-units --all

You can use the `list-units` command can be used in a few additional ways, such as adding the `--state=` filter,
as shown in the following example:

    systemctl list-units --all --state=(filter)

Typically, you use this option to filter the results by the service’s current state, either `active` or `inactive`,
as shown in the following example:

    systemctl list-units --all --state=inactive

You can filter the results further by adding the following argument:

    systemctl list-units --type=(filter)

This option tells `systemctl` to list only the services of the specified type. For example, replacing `(filter)` with
`(service)` in the preceding command lists only active service units.

Similarly, you can use the command `systemctl list-units-files` list every available unit file within the `systemd`
path, including those that `systemd` has not tried to load.

#### The mask command

If you need to prevent a service from starting, manually or automatically, you can use the `mask` command with `systemctl`.
For example, suppose you want to make sure Apache&reg; does not run. If you are not running as root, you need to place
the `sudo` command in front of the command. Otherwise, the command looks similar to the following example:

    systemctl mask httpd.service

or

    systemctl mask apache2.service

When you want to unmark the service, replace the preceding `mask` with `unmask`, and the service can start again.

### Conclusion

While there are more advanced uses of the `systemctl` utility, these are the use options that you will use most often.
You are now familiar with the most common uses of `systemctl` when interacting with `systemd`. `Systemctl` is your
main method of interaction for service management.
