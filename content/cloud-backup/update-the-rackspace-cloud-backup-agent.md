---
node_id: 3255
title: Update the Rackspace Cloud Backup Agent
type: article
created_date: '2013-01-08'
created_by: Rackspace Support
last_modified_date: '2015-08-12'
last_modified_by: Catherine Richardson
product: Cloud Backup
product_url: cloud-backup
---

### Update the agent

We release regular updates to the Rackspace Cloud Backup agent about
every two weeks. Managed Cloud Service Level account customers have
their agent updated automatically when the new version is released.
However, if you are a Managed Infrastructure customer, you should update
your agent from time to time. Follow the instructions below to take
advantage of the latest features and fixes.

**Note:** These instructions assume that the agent has been previously
installed. Updates are typically completed automatically. Only in rare
circumstance should updates be completed manually.

### Update the agent for apt-based Sytems, like Ubuntu, Debian, and Vyatta

First, you must SSH into your server and run the below commands
consecutively on a user with sudo or superuser privileges. You might
wish to review [Install the Cloud Backup agent on
Linux](/how-to/rackspace-cloud-backup-install-the-agent-on-linux)
before performing the steps shown below.

**Note:** The Advanced Packaging Tool (APT) automatically stops and
restarts the driveclient service as part of the update process.
Driveclient versions 1.28 and later install the service called the Cloud
Backup Updater that keeps the agent up to date on the system. ****

**Step 1 &ndash; Update the repository data:**

    apt-get update

**Step 2 &ndash; Install the Cloud Backup Updater:**

    apt-get install --reinstall --assume-yes driveclient


### Update the agent for yum-based Systems, like CentOS, Fedora, and Red Hat

First, you must SSH into your server and run the below commands
consecutively on a user with sudo or superuser privileges. You might
wish to review [Install the Cloud Backup agent on
Linux](/how-to/rackspace-cloud-backup-install-the-agent-on-linux)
before performing the steps shown below.

**Note:** Yum automatically stops and restarts the driveclient service
as part of the update process. Driveclient versions 1.28 and later
install a service called the Cloud Backup Updater that keeps the agent
up to date on the system.

**Step 1 &ndash; Update the driveclient:**

    yum upgrade --assume-yes driveclient

**Note:** Fedora 22 and later uses a new package manager called DNF
(Dandified Yum).

### Update the agent for Arch, Gentoo, and Suse systems

First, you must SSH into your server and run the below commands
consecutively on a user with sudo or superuser privileges. You might
wish to review [Rackspace Cloud Backup - Install the agent on
Linux](/how-to/rackspace-cloud-backup-install-the-agent-on-linux)
before performing the steps shown below.

**Note:** The tarball you download in Step 3 has the most up-to-date
instructions. So if the tarball instructions differ from those below,
follow the tarball instructions.

**Step 1 - Stop the current agent:**

    pkill driveclient

**Step 2 &ndash; Delete (or rename) the previously downloaded tarball:**

    rm driveclient-latest.tar

**Step 3 - Download the new tarball:**

    wget http://agentrepo.drivesrvr.com/tar/driveclient-latest.tar.bz2

**Step 4 - Extract the files:**

    tar -xjf driveclient-latest.tar.bz2

**Step 5 - Change to the new directory created in Step 4. The following
command includes an example of the directory created from Step 4.**

    cd driveclient-1.12.006246

**Step 6 - Copy the updated agent over the current agent:**

    cp driveclient /usr/local/bin/
    chown root:root /usr/local/bin/driveclient
    chmod 700 /usr/local/bin/driveclient

    cp cacert.pem  /etc/driveclient

**Step 7 - Start the updated agent:**

    driveclient --daemon

Example init/startup scripts are included in the tarball.


### Update the agent on a Windows systems

The steps shown in this section should be run as Administrator or as a
user with Administrator privileges. You might wish to review [Install the Cloud Backup agent on
Windows](/how-to/rackspace-cloud-backup-install-the-agent-on-windows)
before performing the steps shown below.

Because the Windows agent includes an automated updater, there should
rarely be an occasion to update the Windows agent manually. However,
there may be some rare need to do so. Here are a couple of different
options that might be useful.

The preferred way to do a manual update is to download the latest agent
from the deployment server and simply run it.

**Step 1 - Download the updated agent:**

-   Get the agent for 32-bit systems:

        http://agentrepo.drivesrvr.com/win32/driveclient-setup-latest.exe

-   Get the agent for 64-bit systems:

        http://agentrepo.drivesrvr.com/win64/driveclient-setup-latest.exe

**Step 2 - Run the updated agent:**

    driveclient-setup-latest.exe

You may even run it by simply executing the wrapper app from a Windows
file browser.

Doing an upgrade by hand without messing up your agent registration can
be tricky. Only attempt to do this if you know exactly what you are
doing.

To update and existing agent from the command line with msiexec, you
must first save the configuration files from `%PROGRAMDATA%\Driveclient`
and uninstall the current agent. Then copy the saved configuration files
back to their original locations in %PROGRAMDATA%\\Driveclient. Finally,
download the latest MSI from the deployment server and run the install
without APIUSER and APIKEY.

    msiexec /i driveclient-1.18.007148-en-us.msi /qn /l*v %tmp%\install-1.18.007148.log DEBUGHIGH=true

Otherwise, updating the agent using the MSI is the same as a fresh
install. You have all the same MSI options available. For the
verification steps to test the update, see [Test Windows installation or
update](/how-to/rackspace-cloud-backup-install-the-agent-on-windows#testsetup).
