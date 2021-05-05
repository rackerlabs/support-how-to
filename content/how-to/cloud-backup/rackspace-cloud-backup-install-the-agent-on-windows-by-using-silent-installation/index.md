---
permalink: rackspace-cloud-backup-install-the-agent-on-windows-by-using-silent-installation
audit_date: '2020-10-19'
title: Install the Cloud Backup agent on Windows by using silent installation
type: article
created_date: '2015-01-20'
created_by: Rose Contreras
last_modified_date: '2020-10-19'
last_modified_by: Rose Morales
product: Cloud Backup
product_url: cloud-backup
---

This article describes how to perform a fresh installation or update of the
Rackspace Cloud Backup agent on your Windows&reg; server by using the silent
installation method. If you are using a Linux&reg; server, see [Install the Cloud Backup agent on Linux](/support/how-to/rackspace-cloud-backup-install-the-agent-on-linux) for
the parallel instructions.

**WARNING:** The procedure described in this article is for advanced users and should be run
from an administrator account. All others users should install the
Rackspace Cloud Backup agent by using the interactive installation described in
[Install the Cloud Backup agent on Windows](/support/how-to/rackspace-cloud-backup-install-the-agent-on-windows).

### Before you install

The Rackspace Cloud Backup agent requires .NET&reg; 4.0 or later.

Reinstalling the agent on a server disconnects any previously registered agents
that were running on that server. The only way to associate the backup data from
a disconnected agent registration is to perform a backup migration. You can
perform a [vault migration](https://docs.rackspace.com/docs/cloud-backup/v1/developer-guide/#migrate-vault)
to a connected agent by using the Cloud Backup API call.

### Download the installer

For a 64-bit Windows server architecture, download the latest MSI installation
file for that architecture from [64-bit Windows MSI](https://agentrepo.drivesrvr.com/win64/driveclient-latest.msi). This file
is almost always the correct one for your server.

### Perform a silent installation

Use the Windows package installer (**msiexec.exe**) to install the Cloud Backup agent.

1. Run the following command:

        msiexec /i driveclient-latest.msi /qn /l*v %tmp%\install-driveclient-latest.log APIUSER=<user> APIKEY=<apikey> APIHOSTNAME=<region>.backup.api.rackspacecloud.com DATACENTER=<region>

    - Use values for `APIUSER`, `APIKEY`, `APIHOSTNAME`, and `DATACENTER` that match your installation.

2. During a fresh installation, use the following values:

    - `APIUSER` (required): The user name you use to log in to the Rackspace Cloud Control Panel.
    - `APIKEY` (required): Your Rackspace Cloud API key.

    **Note**: For information about viewing your API key, see [View and reset your API key](/support/how-to/view-and-reset-your-api-key).

    - `APIHOSTNAME` (required): The host address where the Cloud Backup API
      endpoints reside. Host addresses for various data centers are listed in
      the [Service Access endpoints](https://docs.rackspace.com/docs/cloud-backup/v1/developer-guide/#document-general-api-info/service-access-endpoints).
      The Service Access endpoints pass in only the domain name of
      the endpoint and not the full URL.

        |               | **Example**                                            |
        |---------------|--------------------------------------------------------|
        | **Correct**   | `dfw.backup.api.rackspacecloud.com`                    |
        | **Incorrect** | `https://dfw.backup.api.rackspacecloud.com/v1.0/1234/` |

    - `DATACENTER` (required): The data center associated with this server. The data center is the same as the region. Possible values are ORD, DFW, SYD, IAD, HKG, and LON.
    - `DEBUGHIGH` (default `false`): Turns on debug-level logging in the MSI custom actions and the agent Updater service.

Following are optional, expert installation options:

- `FLAVOR` (default `raxcloudserver`): Possible values are `privatecloud`, `raxcloudserver`, and `personalmachine`.
- `INSTALLDIR` (default ``%ProgramFiles%\Driveclient``): The installation directory for agent executables.
- `SERVICENETENABLED` (default `<null>`): This option decides whether the agent uses public IP addresses for backup operations. You can set this option to `SERVICENETENABLED=1` to force the agent to never use public IP addresses for backup operations.
- `UPGRADEARCH` (default `win64` or `win32` depending on the MSI agent type): The folder on the download server where you find the MSI for the architecture you want.
- `UPGRADEBASEURL` (default `https://agentrepo.drivesrvr.com/`): The URL for the download server where the setup MSI files are stored.

For more options for installing MSI packages, see [msiexec command line options](https://technet.microsoft.com/en-us/library/cc759262%28v=ws.10%29.aspx).

A successful installation results in two running services, the Driveclient and the Updater. You can see these via **services.msc**. For the verification steps to test the installation, see the **Test Windows installation or update** section in [Install the Cloud Backup agent on Windows](/support/how-to/rackspace-cloud-backup-install-the-agent-on-windows).
