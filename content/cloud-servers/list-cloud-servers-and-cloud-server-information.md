---
node_id: 3735
title: List Cloud Servers and Cloud Server Information
type: article
created_date: '2013-10-23'
created_by: Rose Contreras
last_modified_date: '2016-01-11'
last_modified_by: Rose Coste
product: Cloud Servers
product_url: cloud-servers
---

In addition to viewing CPU, RAM, and disk space configuration
information for available cloud servers, you can also view disk, I/O,
and networking information. Use this information to help you decide
which cloud server is right for your needs. You can view the servers
through either the command-line nova client or the Cloud Control Panel
GUI.

-   [View server information through the nova client](#novaclient)
-   [View server information through the Cloud Control
    Panel](#flavors_CP)

View server information through novaclient
------------------------------------------

For information about installing the nova client on Windows, Linux, or
Mac systems, see  [Using python-novaclient with the Rackspace
Cloud](/how-to/using-python-novaclient-with-the-rackspace-cloud).

On the command line, run the following command::

    $ nova flavor-list

All available server configurations are displayed.

The server list contains the following information:

-   ID &ndash; The configuration ID
-   Name &ndash; The configuration name, labeled by RAM size and performance
    type
-   Memory\_MB &ndash; The amount of RAM that the configuration has
-   Disk &ndash; The size of the disk in GB (for General Purpose Cloud
    Servers, the size of the system disk)
-   Ephemeral &ndash; The size of the data disk
-   Swap &ndash; The size of the swap space
-   VCPUs &ndash; The number of virtual CPUs associated with the configuration
-   RXTX\_Factor &ndash; The amount of bandwidth, in Mbps, allocated to the
    PublicNet ports, ServiceNet ports, and isolated networks
    (Cloud Networks) attached to a server
-   Is\_Public &ndash; Not used

You will see one of the following possible result sets, depending on
whether the region you selected supports General Purpose Cloud Servers:

### **Server list for General Purpose and Compute, I/O, or Memory servers**

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Screen%20Shot%202013-10-11%20at%205.03.29%20PM_0_0.png" width="791" height="205" />

###

### **Server list for only General Purpose servers**

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Screen%20Shot%202013-10-11%20at%205.04.01%20PM_0_0.png" width="787" height="168" />

Copy the ID of the configuration that you want to use from the ID field.
You need it to create your server. To create a cloud server with nova
client, see the *[Cloud Servers Developer
Guide](https://developer.rackspace.com/docs/cloud-servers/v2/developer-guide/)*.



View server information through the Cloud Control Panel
-------------------------------------------------------

You can view all the available information for your cloud server through
the Cloud Control Panel GUI. On a single page, you choose what type of
server to create (Windows or Linux) and the server configuration that
best meets your needs. Each server option has a unique configuration of
RAM, CPU, and disk space.

1.  Log in to the Cloud Control Panel.
2.  On the Cloud Servers page, click **Create Server**.
3.  Enter a name and choose a location for your server.
4.  Select the operating system for your server.
5.  Select the configuration (flavor) by choosing the class of server:
    General Purpose, Compute, I/O, or Memory.
6.  Use the slider bar to select the configuration of your server.
    The following information is listed for each configuration:
    -   CPU - The number of vCPUs
    -   RAM - The amount of RAM
    -   Boot Source - Allows you to boot a server from a remotely
        attached volume, which moves the system disk from local to
        remote
    -   System Disk - The size of the system disk (either 20 GB or
        40 GB)
    -   Network - The network throughput
    -   Disk I/O - A comparison of the I/O speed of this configuration
        with the I/O speed of other configurations &mdash; Good, Better, or
        Best

A description of the selected configuration can help you decide if the
configuration is right for you.

![](https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/CP-PF_IMG.png)

When you are satisfied with your server information and configuration,
click **Create Server.**

