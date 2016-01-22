---
node_id: 4057
title: Install the Cloud Backup agent on Linux
type: article
created_date: '2014-05-05'
created_by: Kyle Laffoon
last_modified_date: '2016-01-21'
last_modified_by: Margaret Eker
product: Cloud Backup
product_url: cloud-backup
---

**Previous section:** [Cloud Backup
overview](/how-to/rackspace-cloud-backup-overview)

The following instructions are for the installation of the Rackspace
Cloud Backup agent on your Linux server. If you are using a Windows
server, see [Install the Cloud Backup agent
(Windows)](/how-to/rackspace-cloud-backup-install-the-agent-on-windows)
for parallel instructions.  To schedule and configure backups after the
agent is installed, see [Create a
Backup](/how-to/rackspace-cloud-backup-create-a-backup-0).

**Note:** You can use Cloud Backup on almost any Linux server in the
Rackspace Cloud. Exceptions are FreeBSD 9 (not supported) and Debian 5
(End of Life February 2012).  If you use FreeBSD 9 or Debian 5 please
use an alternate method to backup your data. Also note that 32-bit
servers and agents on Linux are not supported.

### Install the agent


To see if your server already has the Cloud Backup agent installed, run:

    sudo cloudbackup-updater -v

If the command runs without an error, the agent is already installed
(this should be the case for servers with a Managed Operations service
level). If you get a message that the command can't be found, the agent
needs to be installed.

If the Cloud Backup agent is not installed, proceed with the
instructions for your Linux distribution:

-   Install the agent on APT-based systems, including Ubuntu and
    Debian
-   Install the agent on RPM-based systems, including CentOS, Fedora,
    and Red Hat
-   Install the agent on Arch, Gentoo, SUSE, and other
    Linux systems

**Note**: None of the Linux backup agents can be installed without a
reboot. However, an agent update does not require a reboot.

### Install the agent on APT-based systems, such as Ubuntu and Debian

Use SSH to log in to your server and run the following commands
consecutively as a user with sudo or superuser privileges.

1.  Update the APT repository information.

        sudo apt-get update

2.  Install the **python-apt** package.

        sudo apt-get install python-apt

3.  Get the auto-updater.

        wget 'http://agentrepo.drivesrvr.com/debian/cloudbackup-updater-latest.deb'

4.  Install the auto-updater.

        sudo dpkg -i cloudbackup-updater-latest.deb

    The updater installs the agent (if it's not already installed) and
    sets the agent to start at boot.  If you see an error, don't worry;
    we'll fix it in the next step.

5.  To make sure the package configuration process completes, run
    `apt-get` with the `-f` option.  This will fix any outstanding
    package dependency issues on the system.

        sudo apt-get install -f

6.  Check the installation.

    The updater might take a few minutes to download and install
    the agent. To check the status of the agent installation, run the
    following command:

        sudo cloudbackup-updater -v

    If the agent installation is not complete, that command will hang
    until it completes.  When it returns you to the shell prompt,
    proceed to the next step.

    If you get a command not found error, run `sudo apt-get install -f`
    per the preceding step.

7.  Configure the bootstrap.

    Run the agent with the `--configure` option to configure the agent.
    Use your Rackspace Cloud account username and API key, where
    indicated by &lt;username&gt; and &lt;API key&gt; in the
    following command. For information about how to find your API key,
    see [View and reset your
    API key.](/how-to/view-and-reset-your-api-key)

    **Tip**: This step asks you to confirm that you want to overwrite
    your configuration file. Answer yes.

        sudo /usr/local/bin/driveclient --configure --username <username> --apikey <apikey> --flavor <flavor> --datacenter <datacenter> --apihost api.drivesrvr.com

    In the example above, &lt;*flavor*&gt; is one of `privatecloud`,
    `raxcloudserver`, or `dedicated`, and is typically
    `raxcloudserver`.

    **Note**: For installation on an OnMetal server, you *must* specify
    the region and host name for the datacenter in order to connect. For
    an OnMetal server, best results have been received by setting
    &lt;*flavor*&gt; to `privatecloud` with the `--snet` flag.

    If you use any flavor other than `raxcloudserver`, the Backup Agent
    is shown as not installed in the **Backups** section at the bottom
    of the **Cloud Servers Details** page in the Cloud Control Panel, as
    shown below. However, items do show up as they should under the
    **Backup** tab in the Cloud Control Panel.

    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Screen%20Shot%202015-10-15%20at%203.38.07%20PM.png" width="567" height="92" />

8.  Start the agent.

        sudo service driveclient start

### Install the agent on RPM-based systems, such as CentOS, Fedora, and Red Hat

Use SSH to log in to your server and run the following commands
consecutively as a user with sudo or superuser privileges.

1.  Download and install the auto-updater.

        sudo rpm -Uvh 'http://agentrepo.drivesrvr.com/redhat/cloudbackup-updater-latest.rpm'

    The updater installs the agent (if it's not already installed) and
    sets it to start at boot.

2.  Check the installation.

    The updater might take a few minutes to download and install
    the agent. To check the status of the agent install, run the
    following command:

        sudo cloudbackup-updater -v

    If the agent installation is not complete, that command will hang
    until it completes.  When it returns you to the shell prompt,
    proceed to the next step.

3.  Configure the bootstrap.

    Run the agent with the --configure option to configure the agent.
    You will be asked for your Rackspace Cloud account username
    and password.

        sudo /usr/local/bin/driveclient --configure --username <username> --apikey <apikey> --flavor <flavor> --datacenter <datacenter> --apihost api.drivesrvr.com

    In the example above, &lt;*flavor*&gt; is one of `privatecloud`,
    `raxcloudserver`, or `dedicated`, and is typically
    `raxcloudserver`.

    **Note**: For installation on an OnMetal server, you *must* specify
    the region and host name for the datacenter in order to connect. For
    an OnMetal server, best results have been received by setting
    &lt;*flavor*&gt; to `privatecloud` with the `--snet` flag.

    If you use any flavor other than `raxcloudserver`, the Backup Agent
    is shown as not installed in the **Backups** section at the bottom
    of the **Cloud Servers Details** page in the Cloud Control Panel, as
    shown below. However, items do show up as they should under the
    **Backup** tab in the Cloud Control Panel.

    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Screen%20Shot%202015-10-15%20at%203.38.07%20PM.png" width="567" height="92" />

4.  Start the agent.

        sudo service driveclient start

### Install the agent on Arch, Gentoo, and SUSE systems

For Arch, Gentoo, and SUSE Linux systems, you must first download the
tarball. Then, use SSH to log in to your server and run the following
commands consecutively as a user with sudo or superuser privileges.

**Note:** The tarball has the most up-to-date instructions. If the
following instructions differ from the tarball instructions, use the
tarball instructions.

1.  Download the tarball.

        wget http://agentrepo.drivesrvr.com/tar/driveclient-latest.tar.bz2

2.  Extract the files.

    Use SSH to log in to your server, and then run the following command
    to extract the installation files.

        tar -xvjf driveclient-latest.tar.bz2

3.  Change to the directory.

    Enter the directory that was created by extracting the files, for
    example:

        cd driveclient-1

4.  Create directories and copy files.

        sudo cp driveclient /usr/local/bin/
        sudo chown root:root /usr/local/bin/driveclient
        sudo chmod 700 /usr/local/bin/driveclient
        sudo mkdir -m 700 /etc/driveclient
        sudo cp cacert.pem /etc/driveclient

5.  Configure the agent.

    Run the agent with the --configure option to configure the agent.
    You will be asked for your Rackspace Cloud account username
    and password.

    **Tip:** This step asks you to confirm that you want to overwrite
    your configuration file. Answer yes.

        sudo /usr/local/bin/driveclient --configure --username <username> --apikey <apikey> --flavor <flavor> --datacenter <datacenter> --apihost api.drivesrvr.com

    In the example above, &lt;*flavor*&gt; is one of `privatecloud`,
    `raxcloudserver`, or `dedicated`, and is typically
    `raxcloudserver`.

    **Note**: For installation on an OnMetal server, you *must* specify
    the region and host name for the datacenter in order to connect. For
    an OnMetal server, best results have been received by setting
    &lt;*flavor*&gt; to `privatecloud` with the `--snet` flag.

    If you use any flavor other than `raxcloudserver`, the Backup Agent
    is shown as not installed in the **Backups** section at the bottom
    of the **Cloud Servers Details** page in the Cloud Control Panel, as
    shown below. However, items do show up as they should under the
    **Backup** tab in the Cloud Control Panel.

    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Screen%20Shot%202015-10-15%20at%203.38.07%20PM.png" width="567" height="92" />

6.  Start the agent.

        sudo /usr/local/bin/driveclient --daemon

    Example init/startup scripts are included in the tarball.


### Troubleshooting

If you encounter issues during installation, use the tips in this
section to troubleshoot.

### Connection error

If Cloud Backup indicates that the agent is not running on your server,
ensure that your firewall isn't blocking outgoing connections on port
443.

### Status codes

#### What do the backup statuses Skipped, Missed, Errored, and Failed mean?

-   **Skipped:** The backup job was skipped because a  backup job was
    already queued. A single backup job can be queued only once.
-   **Missed:** The backup job was missed because the agent did not respond.
    The agent was likely offline.
-   **Errored:** An error occurred during the backup. The backup job did
    run, but it needs to be investigated.
-   **Failed:** A serious problem occurred, and the backup job did not run.

#### How do I troubleshoot the Skipped, Missed, Errored, and Failed statuses?

-   **Skipped:** This error likely occurs because the frequency of the
    backup job is set too high. Consider reducing the frequency of the
    job, or reducing the amount of data. If this is the initial job,
    then the subsequent jobs might finish faster.
-   **Missed:** Verify that the agent is running on the server. If the agent
    is not already running, then start it. Next, check the logs to
    determine why the backup job failed. An agent should never go
    offline by itself. Either a software exception occurred or the agent
    was manually terminated.
-   **Errored:** Look in the logs on the server. The agent stores all the
    logs in one location (see the following section). Review the logs
    line by line. If you cannot determine the cause of the error, raise
    a ticket with the SME group, and they can help you identify
    the problem.
-   **Failed:** As with the *Errored* status, check the logs on the server. A
    failed status is severe.

### Agent logs

If you need to read the logs of the agent, you can find them in
`/var/log`.


### Uninstall the agent from Linux


To uninstall the agent, you can stop and remove both the auto-updater
and the backup agent by using the system package manager.

#### CentOS or Red Hat

    sudo yum remove cloudbackup-updater driveclient

#### Ubuntu

    sudo apt-get remove cloudbackup-updater driveclient

#### Other Linux Distributions

For all other Linux operating systems, follow OS-standard uninstallation
operations. Based on the previous installation instructions, use the
following commands to uninstall the agent.

Remove `/usr/local/bin/driveclient`.

    sudo rm /usr/local/bin/driveclient

Remove the `/etc/driveclient` directory.

    sudo rm -r /etc/driveclient

If the `init` script for the `driveclient` was added for this
installation, remove that as well.

### Next steps

[Create a backup](/how-to/rackspace-cloud-backup-create-a-backup-0)
