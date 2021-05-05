---
permalink: install-or-update-the-cloud-backup-agent-on-linux
audit_date: '2018-02-20'
title: 'Install or update the Cloud Backup agent on Linux (Deprecated)'
type: article
created_date: '2014-05-05'
created_by: Kyle Laffoon
last_modified_date: '2020-01-15'
last_modified_by: Brett Johnson
product: Cloud Backup
product_url: cloud-backup
---

**Note**: Rackspace deprecated the Red Hat&reg; and Debian&reg; updaters in
favor of an updater designed to support multiple flavors of Linux&reg;. At some point,
we will no longer support the old **.rpm** and **.deb** installers and automated updaters.
Instead, see the documentation for the [standard RCBU Linux updater](/support/how-to/update-or-install-the-cloud-backup-agent-on-linux/).

The Rackspace Cloud Backup agent facilitates the backup process on your servers.
You must install the agent on every server that you want to back up. This
article provides instructions for installing the agent on a Linux&reg; server
by using the Cloud Backup Updater.

If you are using a Windows Server&reg;, see
[Install the Cloud Backup agent on Windows&reg;](/support/how-to/rackspace-cloud-backup-install-the-agent-on-windows)
for Windows instructions.

### Considerations

You can use Cloud Backup on any Linux server in the Rackspace Cloud except
FreeBSD&reg; 9 and Debian&reg; 5. For both of these distributions, use an alternative
method to back up your data.

Also, 32-bit servers and agents on Linux are not supported.

The agent should already be installed on servers that have the Managed Operations
service level. See the following section to determine if the agent is already
installed on a server.

If the Cloud Backup Updater fails, use the instructions in
[Manually update the Rackspace Cloud Backup agent](/support/how-to/update-the-rackspace-cloud-backup-agent).

### Verify whether the agent is already installed

To determine whether the Cloud Backup agent is already installed on a server,
run the following command:

    sudo cloudbackup-updater -v

If the command runs without an error, the agent is already installed. If you get
a message that the command can't be found, you must install the agent.

The following instructions detail installation procedures for APT-based, RPM-based,
or other Linux distributions.

### Install the agent on APT-based systems

Use the following steps to install the backup agent on APT-based systems such as the Ubuntu operating system or Debian.

1. Use SSH to log in to your server, and run any commands as a user with sudo
or superuser privileges.

2. Download the **Keyring** package and install it.

       curl --silent --show-error https://agentrepo.drivesrvr.com/debian/cloudbackup-keyring.gpg | sudo apt-key add -

3. Add `driveclient` to the apt sources list.

       echo "deb [arch=amd64] https://agentrepo.drivesrvr.com/debian serveragent main" | sudo tee /etc/apt/sources.list.d/driveclient.list

4. Update the `apt` repository information. Install with the `-f` option. This
option fixes any outstanding package dependency issues on the system.

       sudo apt-get -y update
       sudo apt-get -y install -f

5. Install the updater and all dependencies.

       sudo apt-get install -q -y cloudbackup-updater

    The updater installs the agent and sets the agent to start at boot.

6. Check the installation.

   The updater might take a few minutes to download and install the agent. To
   check the status of the agent installation, run the following command:

       sudo cloudbackup-updater -v

   The command won't respond until the installation is complete. When the shell
   prompt displays, the installation is complete.

   If you get a `command not found` error, run `sudo apt-get install -f` again.

7. Use the following command to run and configure the agent. Be prepared to
provide your Rackspace Cloud account username and api key in this command and
add other options as needed.

       sudo /usr/local/bin/driveclient --configure --username <username> --apikey <apiKey> --flavor <flavor> --datacenter <dataCenter> --apihost <apiDrivesrvr>

   - Use your Rackspace Cloud account username and API key for `<username>`
     and `<apiKey>`. For information about how to find your API key, see
     [View and reset your API key](/support/how-to/view-and-reset-your-api-key).

   - The value for `<flavor>` is `privatecloud`, `raxcloudserver`, or `dedicated`.

   - For the `apihost <apiDrivesrvr>` element, use the following values: For API
     servers in the US, use `api.drivesrvr.com`. For API servers in the UK,
     use `api.drivesrvr.co.uk`.

   - For installation on an OnMetal server, you must specify the region and
     host name for the data center to connect. For an OnMetal server, we
     recommend setting `<flavor>` to `privatecloud` with the `--snet` flag.

   **Note**: If you use any flavor other than `raxcloudserver`, the agent shows
   as "not installed" in the **Backups** section at the bottom of the Cloud
   Servers **Details** page in the [Cloud Control Panel](https://login.rackspace.com). However, items do appear
   as they should on the **Backups** tab in the Cloud Control Panel.

   It is possible to install Rackspace Cloud Backup on non-Rackspace assets, as long as
   the server has access to the public Internet and the operating system is supported by the
   Cloud Backup agent. These kinds of assets might include servers that run on other clouds,
   such as AWS EC2, Azure&reg;, or Google&reg;. They might also include personal laptops, desktops,
   or servers running in your own company's data center. For any asset outside of Rackspace
   infrastructure, you **must** use the *dedicated* flavor when registering the agent.

8. When prompted to confirm that you want to overwrite your configuration file,
answer `yes`.

9. Start the agent.

        sudo service driveclient start

### Install the agent on RPM-based systems, such as CentOS and Red Hat

For CentOS&reg; and Red Hat&reg;, use the following steps:

1.  Use SSH to log in to your server and run any commands as a user with sudo
or superuser privileges.

2.  Download and install the updater.

        sudo rpm -Uvh 'https://agentrepo.drivesrvr.com/redhat/cloudbackup-updater-latest.rpm'

    The updater installs the agent and sets it to start at boot.

3.  Check the installation.

    The updater might take a few minutes to download and install the agent. To
    check the status of the agent installation, run the following command:

        sudo cloudbackup-updater -v

    The command won't respond until the installation is complete. When the shell
    prompt displays, the installation is complete.

4.  Use the following command to run and configure the agent. Be prepared to
provide your Rackspace Cloud account username and api key in this command and
add other options as needed.

        sudo /usr/local/bin/driveclient --configure --username <username> --apikey <apiKey> --flavor <flavor> --datacenter <dataCenter> --apihost <apiDrivesrvr>

    - Use your Rackspace Cloud account username and API key for `<username>`
    and `<apiKey>`. For information about how to find your API key, see
    [View and reset your API key](/support/how-to/view-and-reset-your-api-key).

    - The value for `<flavor>` is `privatecloud`, `raxcloudserver`, or `dedicated`.

    - For the `apihost <apiDrivesrvr>` element, use the following values: For API
    servers in the US, use `api.drivesrvr.com`. For API servers in the UK, use
    `api.drivesrvr.co.uk`.

    - For installation on an OnMetal server, you must specify the region and
    host name for the data center to connect. For an OnMetal server, we recommend
    setting `<flavor>` to `privatecloud` with the `--snet` flag.

    **Note**: If you use any flavor other than `raxcloudserver`, the agent shows
    as "not installed" in the **Backups** section at the bottom of the Cloud
    Servers **Details** page in the Cloud Control Panel. However, items do appear
    as they should on the **Backups** tab in the Cloud Control Panel.

5.  Start the agent.

        sudo service driveclient start

### Install the agent on Arch, Gentoo, and SUSE systems

For Arch&reg;, Gentoo&reg;, and SUSE&reg; Linux systems, you must first download the tarball.
This tarball has the most up-to-date instructions, so, if the following
instructions differ from the tarball instructions, use the tarball instructions
instead.

1. Use SSH to log in to your server, and run the commands as a user with sudo
or superuser privileges.

2.  Download the tarball.

        wget https://agentrepo.drivesrvr.com/tar/driveclient-latest.tar.bz2

3.  Extract the installation files.

        tar -xvjf driveclient-latest.tar.bz2

4.  Change to the directory that was created by extracting the files. For example:

        cd driveclient-1

5.  Create directories and copy files.

        sudo cp driveclient /usr/local/bin/
        sudo chown root:root /usr/local/bin/driveclient
        sudo chmod 700 /usr/local/bin/driveclient
        sudo mkdir -m 700 /etc/driveclient
        sudo cp cacert.pem /etc/driveclient

6.  Use the following command to run and configure the agent. Be prepared to
provide your Rackspace Cloud account username and api key in this command and
add other options as needed.

          sudo /usr/local/bin/driveclient --configure --username <username> --apikey <apiKey> --flavor <flavor> --datacenter <datacenter> --apihost <apiDrivesrvr>

    - Use your Rackspace Cloud account username and API key for `<username>`
    and `<apiKey>`. For information about how to find your API key, see
    [View and reset your API key.](/support/how-to/view-and-reset-your-api-key).

    - The value for `<flavor>` is `raxcloudserver`, `privatecloud`, or `dedicated`.

    - For the `apihost <apiDrivesrvr>` element, use the following values: For API
    servers in the US, use `api.drivesrvr.com`. For API servers in the UK, use
    `api.drivesrvr.co.uk`.

    - For installation on an OnMetal server, you must specify the region and
    host name for the data center to connect. For an OnMetal server, we recommend
    setting `<flavor>` to `privatecloud` with the `--snet` flag.

    **Note**: If you use any flavor other than `raxcloudserver`, the agent shows
    as "not installed" in the **Backups** section at the bottom of the Cloud
    Servers **Details** page in the Cloud Control Panel. However, items do appear
    as they should on the **Backups** tab in the Cloud Control Panel.

7. When prompted to confirm that you want to overwrite your configuration file,
answer `yes`.

8.  Start the agent.

        sudo /usr/local/bin/driveclient --daemon

    Example `init/startup` scripts are included in the tarball.

### Troubleshooting

If you encounter issues after installation, use the following tips to troubleshoot.

#### Connection error

If Cloud Backup indicates that the agent is not running on your server, ensure
that your firewall isn't blocking outgoing connections on port 443.

#### Error status codes

You might see the following status codes:

-   **Skipped:** The backup job was skipped because a backup job was already
queued. A single backup job can be queued only once.

-   **Missed:** The backup job was missed because the agent did not respond.
The agent was likely offline.

-   **Errored:** An error occurred during the backup. The backup job did run,
but it needs to be investigated.

-   **Failed:** A serious problem occurred, and the backup job did not run.

You can troubleshoot these status codes as follows:

-   **Skipped:** This error likely occurs because the frequency of the backup
job is set too high. Consider reducing the frequency of the job or reducing
the amount of data. If this is the initial job, then the subsequent jobs might
finish faster.

-   **Missed:** Verify that the agent is running on the server. If the agent is
not already running, then start it. Next, check the logs to determine why the
backup job failed. An agent should never go offline by itself. Possibly a software
exception occurred, or the agent was manually terminated.

-   **Errored:** Examine the logs on the server. The agent stores all the logs
in one location (see the following section for the location). Review the logs
line by line. If you cannot determine the cause of the error, raise a ticket
with the SME group, and they can help you identify the problem.

-   **Failed:** As with the Errored status, check the logs on the server. A
failed status is severe.

#### Agent logs

Agent logs are stored in `/var/log`.

### Uninstall the agent from Linux

To uninstall the agent, stop and remove both the updater and the backup agent by
using the system package manager.  The following sections provide OS-specific
instructions.

#### Uninstall from CentOS or Red Hat

Run the following command:

    sudo yum remove cloudbackup-updater driveclient

#### Uninstall from the Ubuntu operating system

For the Ubuntu&reg; operating system, un the following command:

    sudo apt-get remove cloudbackup-updater driveclient

#### Uninstall from Other distributions

For all other Linux operating systems, follow OS-standard uninstallation operations.
Based on the previous installation instructions, use the following commands to
uninstall the agent.

1. Remove the agent (`/usr/local/bin/driveclient`).

        sudo rm /usr/local/bin/driveclient

2. Remove the `/etc/driveclient` directory.

        sudo rm -r /etc/driveclient

3. If the `init` script for the `driveclient` was added for this installation,
remove that as well.

**Next step:** [Create a backup](/support/how-to/rackspace-cloud-backup-create-a-backup)
