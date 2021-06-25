---
permalink: useful-python-novaclient-commands
audit_date: '2021-06-18'
title: Useful python-novaclient commands
type: article
created_date: '2012-07-23'
created_by: Jered Heeschen
last_modified_date: '2021-06-18'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

This article shows some `python-novaclient` commands.

### Nova client operations

This article assumes that you have installed the 
[python-novaclient](/support/how-to/using-python-novaclient-with-the-rackspace-cloud),
and that the client works with your Cloud Servers account.

#### nova help command

The `help` command lists all available commands:

    nova help


Add the name of a command after `nova help` to see its syntax. For example, 
to see the syntax of the **boot** command, run:


    nova help boot

Note that not every command listed in **nova help** works with Rackspace Cloud Servers.
The nova client works with OpenStack, including the
Rackspace Cloud. However, some of the commands refer to operations 
that we haven't implemented on Cloud Servers, while others enable you to
manage a full OpenStack installation.

**Note:** If you want to refer to a server or image by name and the 
name has a space in it, put the name in quotes so that the client takes 
it as a single argument.

### Common commands

You can use the following commands for most operations with Cloud Servers:

#### nova list command

The `list` command returns a list of the servers on your account. You can use **list**
without arguments, but options are available
to limit the list by a range of IP addresses or to show you servers with
a particular status.

The output shows the unique ID of the server in the first column, followed by the
server name, the server status, and, finally, the network addresses associated with the server.

Example:

    nova list --status active

#### nova image-create command 

The `image-create` command takes a snapshot of a server. The first
argument is the name or ID of the server, and the second argument is 
the name that you want to assign to the new snapshot.

Example:

    nova image-create servername backupname

#### nova flavor-list command

The `flavor-list` command displays a list of available server flavors. A flavor
describes the options of memory, disk space, and CPUs that you can allocate for the server.

The response has the following information for the flavors:

- Flavor ID
- Flavor name
- Memory allocation (in megabytes)
- Swap allocation (if any, also in megabytes)
- Disk space allocated to the server (in gigabytes)
- Number of virtual CPUs for the instance
- Network throughput cap factor associated with the flavor

Example:

    nova flavor-list

#### nova boot command

Use the `boot` command to create a new cloud server. At its
simplest, you tell the boot command what flavor to use with the
`--flavor` option, what image to use as the base with the `--image`
option, and then include the name of the server that you're creating
as an argument for the command.

The output of the boot command lists data about the new server,
including the root or administrator password.

Example:

    nova boot --flavor 1 --image 758d32fe-9f2c-470a-a082-ba6832a06431 servername

#### nova reboot command

The `reboot` command uses the name or ID of the target server as its 
argument. By default, the server performs a soft reboot, where the 
OS gracefully reboots the server. You can do a hard reboot
(like switching the power off and on again) with the `--hard` option.

Example:

    nova reboot --hard servername

#### nova delete command

The `delete` command uses the name or ID of the server as its argument. **Use this command with caution**.

Example:

    nova delete servername

#### nova show command

The `show` command returns details about a server: flavor, the
image it was built from, network addresses, and other details.

Example:

    nova show servername

#### nova resize command

Use the `resize` command to switch a server to another flavor. When you
call the command, the first argument is the server name or ID, and the
second argument is the flavor name or ID.

**Note**: `nova resize` does not work for virtual cloud servers or
Rackspace Standard servers with manual disk allocation enabled. For more
information on changing the size of a virtual cloud server, see
[Changing the Size of Your Performance Cloud
Server](/support/how-to/upgrading-resources-for-general-purpose-or-io-optimized-cloud-servers).

You cannot resize a server to a smaller flavor if it has more allocated disk space
than the smaller flavor can use.

Example:

    nova resize servername "512MB instance"

#### nova resize-confirm command

After a resize completes, you must confirm the resize success before the
resize becomes permanent. Use the `resize-confirm` command with a server name or ID.

Example:

    nova resize-confirm servername

#### nova resize-revert command

After a resize completes, you might discover a problem with the server that
indicates the resize introduced a problem. In this case, you can enter the
`resize-revert` command to roll the server back to its original flavor.

Example:

    nova resize-revert servername

#### nova rebuild command

The `rebuild` command takes an existing server and rebuilds it using
an image. The first argument is the server name or ID, and
the second argument is the name or ID of the image you chose.

You can include the `-rebuild_password` option to set a root
password, instead of having one randomly generated.

Example:

    nova rebuild --rebuild_password PASSWORD servername "Fedora 16"

#### **nova rescue command

The `rescue` command sets a server into rescue mode, enabling you to
access and modify the file system while the server is inactive. The
output of the command is the root password used by the rescue instance.

Example:

    nova rescue servername

#### nova unrescue command

Use the `unrescue` command to take a server out of rescue mode and make
it boot normally.

Example:

    nova unrescue servername

#### set-password command

Change the root password for an instance by using the `set-password`
command. 

Example:

    nova set-password servername

#### nova meta command

Use the `meta` command to set or delete metadata on a server. The
metadata is in `key=value` form. You can view the metadata set on a
server with the `show` command.

The command has the folloiwng arguments:

- The name or ID of the server
- The action: `set` or `delete`
- The key-value pair that defines the metadata

Example:

    nova meta servername set "role=development"

#### nova limits command

Use the `limits` command to list the limits set on your account.
The limits can include the following options:

- The maximum number of metadata pairs you can associate with an image or server
- The maximum number and size of _personalities_ (files) that you can install on a server when you create it
- The maximum number of servers allowed on your account
- The maximum amount of memory that you can allocate in total to all the servers on your account

Example:

    nova limits


Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
