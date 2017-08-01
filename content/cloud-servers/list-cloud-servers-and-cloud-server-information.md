---
permalink: list-cloud-servers-and-cloud-server-information/
audit_date: '2017-08-01'
title: List Cloud Servers and Cloud Server information
type: article
created_date: '2013-10-23'
created_by: Rose Contreras
last_modified_date: '2017-08-01'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

In addition to viewing CPU, RAM, and disk space configuration
information for available cloud servers, you can also view disk, I/O,
and networking information. Use this information to help you decide
which cloud server is right for your needs. You can view the servers
through either the command-line nova client or the Cloud Control Panel
GUI.

### View server information through novaclient

For information about installing the nova client on Windows, Linux, or
Mac systems, see [Using python-novaclient with the Rackspace Cloud](/how-to/using-python-novaclient-with-the-rackspace-cloud).

On the command line, run the following command::

     nova flavor-list

All available server configurations are displayed.

The server list contains the following information:

-   ID - The configuration ID
-   Name - The configuration name, labeled by RAM size and performance
    type
-   Memory_MB - The amount of RAM that the configuration has
-   Disk - The size of the disk in GB (for General Purpose Cloud
    Servers, the size of the system disk)
-   Ephemeral - The size of the data disk
-   Swap - The size of the swap space
-   VCPUs - The number of virtual CPUs associated with the configuration
-   RXTX_Factor - The amount of bandwidth, in Mbps, allocated to the
    PublicNet ports, ServiceNet ports, and isolated networks
    (Cloud Networks) attached to a server
-   Is_Public - Not used

<pre><code>
+-------------------------+-----------------------------------+-----------+------+-----------+------+-------+-------------+-----------+
| ID                      | Name                              | Memory_MB | Disk | Ephemeral | Swap | VCPUs | RXTX_Factor | Is_Public |
+-------------------------+-----------------------------------+-----------+------+-----------+------+-------+-------------+-----------+
| 2                       | 512MB Standard Instance           | 512       | 20   | 0         |      | 1     |             | N/A       |
| 3                       | 1GB Standard Instance             | 1024      | 40   | 0         |      | 1     |             | N/A       |
| 4                       | 2GB Standard Instance             | 2048      | 80   | 0         |      | 2     |             | N/A       |
| 5                       | 4GB Standard Instance             | 4096      | 160  | 0         |      | 2     |             | N/A       |
| 6                       | 8GB Standard Instance             | 8192      | 320  | 0         |      | 4     |             | N/A       |
| 7                       | 15GB Standard Instance            | 15360     | 620  | 0         |      | 6     |             | N/A       |
| 8                       | 30GB Standard Instance            | 30720     | 1200 | 0         |      | 8     |             | N/A       |
| compute1-15             | 15 GB Compute v1                  | 15360     | 0    | 0         |      | 8     |             | N/A       |
| compute1-30             | 30 GB Compute v1                  | 30720     | 0    | 0         |      | 16    |             | N/A       |
| compute1-4              | 3.75 GB Compute v1                | 3840      | 0    | 0         |      | 2     |             | N/A       |
| compute1-60             | 60 GB Compute v1                  | 61440     | 0    | 0         |      | 32    |             | N/A       |
| compute1-8              | 7.5 GB Compute v1                 | 7680      | 0    | 0         |      | 4     |             | N/A       |
| general1-1              | 1 GB General Purpose v1           | 1024      | 20   | 0         |      | 1     |             | N/A       |
| general1-2              | 2 GB General Purpose v1           | 2048      | 40   | 0         |      | 2     |             | N/A       |
| general1-4              | 4 GB General Purpose v1           | 4096      | 80   | 0         |      | 4     |             | N/A       |
| general1-8              | 8 GB General Purpose v1           | 8192      | 160  | 0         |      | 8     |             | N/A       |
| io1-120                 | 120 GB I/O v1                     | 122880    | 40   | 1200      |      | 32    |             | N/A       |
| io1-15                  | 15 GB I/O v1                      | 15360     | 40   | 150       |      | 4     |             | N/A       |
| io1-30                  | 30 GB I/O v1                      | 30720     | 40   | 300       |      | 8     |             | N/A       |
| io1-60                  | 60 GB I/O v1                      | 61440     | 40   | 600       |      | 16    |             | N/A       |
| io1-90                  | 90 GB I/O v1                      | 92160     | 40   | 900       |      | 24    |             | N/A       |
| memory1-120             | 120 GB Memory v1                  | 122880    | 0    | 0         |      | 16    |             | N/A       |
| memory1-15              | 15 GB Memory v1                   | 15360     | 0    | 0         |      | 2     |             | N/A       |
| memory1-240             | 240 GB Memory v1                  | 245760    | 0    | 0         |      | 32    |             | N/A       |
| memory1-30              | 30 GB Memory v1                   | 30720     | 0    | 0         |      | 4     |             | N/A       |
| memory1-60              | 60 GB Memory v1                   | 61440     | 0    | 0         |      | 8     |             | N/A       |
| onmetal-general2-large  | OnMetal General Purpose v2 Large  | 131072    | 800  | 0         |      | 24    |             | N/A       |
| onmetal-general2-medium | OnMetal General Purpose v2 Medium | 65536     | 800  | 0         |      | 24    |             | N/A       |
| onmetal-general2-small  | OnMetal General Purpose v2 Small  | 32768     | 800  | 0         |      | 12    |             | N/A       |
| onmetal-io2             | OnMetal I/O v2                    | 131072    | 240  | 3200      |      | 40    |             | N/A       |
| performance1-1          | 1 GB Performance                  | 1024      | 20   | 0         |      | 1     |             | N/A       |
| performance1-2          | 2 GB Performance                  | 2048      | 40   | 20        |      | 2     |             | N/A       |
| performance1-4          | 4 GB Performance                  | 4096      | 40   | 40        |      | 4     |             | N/A       |
| performance1-8          | 8 GB Performance                  | 8192      | 40   | 80        |      | 8     |             | N/A       |
| performance2-120        | 120 GB Performance                | 122880    | 40   | 1200      |      | 32    |             | N/A       |
| performance2-15         | 15 GB Performance                 | 15360     | 40   | 150       |      | 4     |             | N/A       |
| performance2-30         | 30 GB Performance                 | 30720     | 40   | 300       |      | 8     |             | N/A       |
| performance2-60         | 60 GB Performance                 | 61440     | 40   | 600       |      | 16    |             | N/A       |
| performance2-90         | 90 GB Performance                 | 92160     | 40   | 900       |      | 24    |             | N/A       |
+-------------------------+-----------------------------------+-----------+------+-----------+------+-------+-------------+-----------+
</code></pre>

Copy the ID of the configuration that you want to use from the ID field.
You need it to create your server. To create a cloud server with nova
client, see the [Cloud Servers Developer Guide](https://developer.rackspace.com/docs/cloud-servers/v2/developer-guide/).

### View server information through the Cloud Control Panel

You can view all the available information for your cloud server through
the Cloud Control Panel GUI. On a single page, you choose what type of
server to create (Windows or Linux) and the server configuration that
best meets your needs. Each server option has a unique configuration of
RAM, CPU, and disk space.

1. Log in to the Cloud Control Panel.
2. On the Cloud Servers page, click **Create Server**.
3. Enter a name and choose a location for your server.
4. Select the operating system for your server.
5. Select the configuration (flavor) by choosing the class of server: General Purpose, Compute, I/O, or Memory.
6. Use the slider bar to select the configuration of your server.

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
        with the I/O speed of other configurations - Good, Better, or
        Best

   A description of the selected configuration can help you decide if the configuration is right for you.

When you are satisfied with your server information and configuration,
click **Create Server.**
