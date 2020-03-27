---
permalink: rackspace-cloud-backup-install-the-agent-on-linux/
audit_date: '2020-03-27'
title: Install or Update the Cloud Backup Agent on Linux
type: article
created_date: '2020-03-27'
created_by: Brett Johnson
last_modified_date: '2020-03-27'
last_modified_by: Brett Johnson
product: Cloud Backup
product_url: cloud-backup
---

This article describes how to install the Rackspace Cloud Backup agent on your Linux&reg;
server. If you are using a Windows&reg; server, see [Install the Cloud Backup Agent
(Windows)](/how-to/rackspace-cloud-backup-install-the-agent-on-windows) for instructions.

## Installation

The Rackspace Cloud Backup automated updater only supports 64-bit operating
systems. It also requires minimal tools, including but not limited to curl, tar,
and bzip2. If these tools are missing, you may not be able to install and use the updater.

### Download the installer

Download the latest updater installation file from the
[agent repository](http://agentrepo.drivesrvr.com/updater/cloudbackup-updater-latest.tar.bz2)
using a tool such as curl or wget.

Extract the Linux package files (`cloudbackup-updater-latest.tar.bz2`) to a temporary
directory.

    cd ~ && mkdir tmp && cd tmp && tar jxvf cloudbackup-updater-latest.tar.bz2

Change to the extracted folder. Read the LICENSE file. If you do not agree to the terms
contained in the file, do not continue with the installation.

For security reasons, it is important that you not enter your API key directly in
the command line. Enter this code at the Linux command line to set an environment
variable with the API key:

    echo -n 'API key: ' && read -s apikey && export apikey && echo ''

To install both the updater and to install and register the Cloud Backup agent, enter
the following code and the command line:

    ./cloudbackup-updater --configure --user myuserid --apikey ${apikey} --flavor raxcloudserver --datacenter DFW

where "myuserid" is the primary user ID for your account, and "DFW" is the code of the region where the cloud
server was created.

Other registration-time controls are available that are almost never used; however,
if you would like to know what these and other options are, you can display them with:

    ./cloudbackup-updater --help

For cloud servers that reside in the LON region, the API host must be specified. For
USA regions (currently including SYD and HKG), the default API host "api.drivesrvr.com"
must be used. For the LON region, the "api.drivesrvr.co.uk" must be used.

**Note:** A forced agent registration disconnects any previous registrations from
the server in question. You must do a backup migration to re-associate the backup
data from a disconnected registration. However, the old registration with its backup
data remains attached to the customer account until it is deleted.

### Non-Cloud, Non-Rackspace Installation

There are various scenarios in which you will be installing a Cloud Backup agent on
servers that are not in the Rackspace Public Cloud. Rackspace Cloud Backup can be used
on most Linux computers with a public internet connection. These include things like
company laptops and desktops, cloud servers from other providers, such as AWS EC2&reg,
Google Cloud&reg, and Azure&reg, or Rackspace Private Cloud and Rackspace On-Metal, etc.

To install on such computers or servers, you must use a different "flavor" of installation.

**Note:** The install flavor should not be confused with the Linux flavor. The Cloud
Backup install flavor is the type or kind of Cloud Backup installation.

Normal installations on Rackspace Cloud servers is "raxcloudserver". For installation
on other types of computers, the "dedicated" flavor should be used.

    ./cloudbackup-updater --configure --user myuserid --apikey ${apikey} --flavor dedicated --datacenter DFW

For dedicated installations, any region accessible by the customer account may be specified.

### Installations with Existing Agents

In the rare occasion that the server already has a registered Cloud Backup agent on it,
the updater should be run without the configuration option.

    ./cloudbackup-updater

This will install the updater. If the currently installed agent is not the latest version,
the agent will be updated.

### Check the Linux Installation or Update

Once the updater and agent have been installed, the installation can be verified several
ways.

To verify the version of the updater, first check the latest version number in our repository.

    curl http://agentrepo.drivesrvr.com/updater-version.txt

Compare to the version installed on the computer thus:

    cloudbackup-updater --version

To verify the version of the agent, first check the latest version number in our repository.

    curl http://agentrepo.drivesrvr.com/version.txt

Compare to the version installed on the computer thus:

    driveclient --version

Verify the PID of the agent and updater:

    pgrep -f cloudbackup-updater
    pgrep -f driveclient

The various flavors of Linux have different service control utilities. On CentOS&reg, for
instance, the syntax to display the service status is

    service driveclient status
    service cloudbackup-updater status

however, on other flavors, such as Debian&reg, Fedora&reg, or Ubuntu&reg, the syntax is

    systemctl status driveclient
    systemctl status cloudbackup-updater

The agent and updater logs can be viewed here with your favorite file viewer

    /var/log/cloudbackup-updater.log
    /var/log/driveclient.log
    /var/log/driveclient.log.1

and so forth. These logs can be grepped for ERROR or other information, if the agent or
updater are not behaving as expected. For more information on reading agent logs, see
[Cloud Backup Logging Basics](/how-to/cloud-backup-agent-logging-basics).

To verify that the agent is registered, look at the bootstrap file here:

    /etc/driveclient/boostrap.json

To ensure that the agent is registered, running, and connected, look at the Control Panel
status of this agent by logging in to [Cloud Control Panel](https://login.rackspace.com).
In the Backup section of the menu, you can create backup configurations, run backups and
cleanups, restore old backups, etc. by selecting the name of the server that the agent was
installed on.

## Troubleshooting installs, upgrades, and uninstalls

There are a number of reasons that installation and upgrade of the cloud backup agent
or updater may fail. Below are some troubleshooting tips that might help to get them
going again.

We recommend that you enable TRACE logging as part of the troubleshooting process.
Should you need to call the Support team, TRACE logging helps them identify the
problem. For more information about TRACE logging, see [Cloud Backup agent logging
basics](/how-to/cloud-backup-agent-logging-basics).

If the agent fails to start up, due to registration failure, for example, the most
effective log setting is to directly edit the `log4cxx.xml` file and change the level
from INFO to DEBUG or TRACE or ALL.

A Cloud Backup connection error indicates that the agent is not currently running
on the server. In this case, verify that the firewall isn't blocking outgoing connections
on port 443.

### Backup statuses - Skipped, Missed, Errored, and Failed

The backup statuses are defined below:

-   **Skipped:** The backup job was skipped because a backup job was
    already queued. A single backup job can be queued only once.
-   **Missed:** The backup job was missed because the agent did not respond.
    The agent was likely offline.
-   **Errored:** An error occurred during the backup. The backup job did
    run, but it needs to be investigated.
-   **Failed:** A serious problem occurred, and the backup job did not run.

To troubleshoot these error status, see [Cloud Backup Troubleshooting](/how-to/cloud-backup-troubleshooting/).

### Uninstall Cloud Backup Agent or Updater on Linux

To uninstall the agent, you must also uninstall the updater. Use the service control
tools provided by the flavor of Linux you are running. The name of the agent service
is "driveclient" and the name of the updater is "cloudbackup-updater". So for instance,
a Linux flavor that uses systemctl might require:

    systemctl disable cloudbackup-updater
    systemctl disable driveclient

**Warning:** When disabling the Cloud Backup agent, you **must** first disable the
updater, or it will eventually re-enable the agent.

### More Troubleshooting Tips

For more troubleshooting tips and FAQs, try one of these links:

    [Cloud Backup Troubleshooting](/how-to/cloud-backup-troubleshooting/)
    [Cloud Backup FAQs](/how-to/cloud-backup-faq/)

