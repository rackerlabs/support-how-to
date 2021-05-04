---
permalink: install-python-novaclient-on-windows
audit_date: '2020-90-23'
title: Install python-novaclient on Windows
type: article
created_date: '2012-07-23'
created_by: Jered Heeschen
last_modified_date: '2020-09-23'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---
 
This article describes how to remotely manage a Rackspace Cloud Server by using the
`python-novaclient` package running on Microsoft&reg; Windows&reg;.
 
### Remote management
 
The [Cloud Control Panel](https://login.rackspace.com) isn't the only way to
manage Cloud Servers. If you're running a script or program, you can use the
[Cloud Servers API](https://docs.rackspace.com/docs/cloud-servers/v2/developer-guide/),
but that involves some coding effort.
 
If you want to manage your servers from the command line and not deal directly with the
API, you can use an open-source client application called [python-novaclient](https://pypi.python.org/pypi/python-novaclient/).
 
**Note**: Rackspace does not maintain the nova client, so you should consider the software as
*in development*.
 
### Prerequisites
 
To run python-novaclient, you need to install python&reg; 2.6 or later on your system. You can
run the client from either a desktop computer or a remote system, such as a Cloud Server.
 
Make sure you install the `setuptools` package when you install python. A python distribution
such as [ActiveState ActivePython](https://www.activestate.com/activepython/downloads),
discussed in the next section, includes `setuptools`.
 
To run the nova client, you need to have access to your Rackspace Cloud account username
and password.
 
### Install ActiveState ActivePython on Windows
 
If you don't have a python installation on your Windows system, download
and install the free community version of ActiveState ActivePython.
 
Download and run the [installer](https://www.activestate.com/activepython/downloads).
 
#### Install the python-novaclient package
 
After you install ActiveState Python, use the python package installer `pip` to
download and install `novaclient` automatically. Perform the following steps:
 
1. To open a command window, go to the **Start** menu and type **cmd** in the **Search** box.
 
2. In the command window, enter the following command to install the `pbr` package and avoid a
package bug:
 
    pip install pbr==0.5.21
 
3. Enter the following command to install a metapackage that includes the latest version
of `python-novaclient` and the Rackspace extensions:
 
    pip install rackspace-novaclient python-novaclient==3.3.0
    
4. When the installations finish, close the command window.
 
The `rackspace-novaclient` package is a metapackage that uses pip to install the client and all
Rackspace extensions for the client. If you have any problems with the metapackage,
use pip to install the `python-novaclient` and `rackspace-auth-openstack` packages
individually.
 
### Install with other python distributions
 
Some python distributions might not include `setuptools`. If you're using another python
distribution, such as the official python distribution, you can install the
[python setuptools package from pypi](https://pypi.python.org/pypi/setuptools)
and use `easy_install` to install pip:
 
    easy_install pip
 
Then, follow the installation instructions in the preceding section.
 
### Environment variables
 
Now that you have installed the nova client, set up the environment variables that
allow it to connect to your Rackspace Cloud account.
 
#### Find the environment variables editor
 
For most Windows versions, set your environment variables through the
**System** Control Panel, by performing the following steps:
 
1. From the **Start** menu, select **Control Panel**.
2. In the Control Panel, navigate to the **System and Security** section and select **System**.
3. In the **System Properties** window, click the **Advanced** tab in the top navigation.
4. In the **Startup and Recovery** section, click **Environment Variables**.
 
If you have any trouble finding the System Control Panel, type **environment**
in the **Start** menu **Search** box. This action provides a link that lets you edit your environment
variables. If given a choice between editing values for your user account or the system,
choose the selection for your user account.
 
#### Set the environment variables
 
Now set your environment variables. In the **User variables for Administrator** section,
click an environment variable and then click **New**.
 
The following table describes the required variable names and values:
 
<table cellpadding="4" cellspacing="0" summary="" id="reference_1bw_3xy_cg__properties_1bm_kxy_cg" border="1" class="simpletable properties"><tr class="sthead prophead">
<th valign="bottom" align="left" id="d26e245" class="stentry proptypehd">Variable name</th>
<th valign="bottom" align="left" id="d26e248" class="stentry propvaluehd">Value type</th>
<th valign="bottom" align="left" id="d26e251" class="stentry propdeschd">Description</th>
</tr><tr class="strow property">
<td valign="top" headers="d26e245" class="stentry proptype">OS_USERNAME</td>
<td valign="top" headers="d26e248" class="stentry propvalue">username</td>
<td valign="top" headers="d26e251" class="stentry propdesc">Set this value to your Rackspace Cloud account username.</td>
</tr>
<tr class="strow property">
<td valign="top" headers="d26e245" class="stentry proptype">OS_TENANT_NAME</td>
<td valign="top" headers="d26e248" class="stentry propvalue">account number</td>
<td valign="top" headers="d26e251" class="stentry propdesc">Set this value to your Rackspace Cloud account number, visible in the upper-right corner in the <a href="https://login.rackspace.com">Cloud Control Panel</a>.</td>
</tr>
<tr class="strow property">
<td valign="top" headers="d26e245" class="stentry proptype">OS_AUTH_SYSTEM</td>
<td valign="top" headers="d26e248" class="stentry propvalue">rackspace</td>
    <td valign="top" headers="d26e251" class="stentry propdesc">Set this value to <b>rackspace</b> to connect to the Rackspace Cloud.</td>
</tr>
<tr class="strow property">
<td valign="top" headers="d26e245" class="stentry proptype">OS_PASSWORD</td>
<td valign="top" headers="d26e248" class="stentry propvalue">password or API key</td>
<td valign="top" headers="d26e251" class="stentry propdesc">Set this value to your Rackspace Cloud API key. You can retrieve your API key in
          the Cloud Control Panel. For information about how to find your API key, see <a href="/support/how-to/view-and-reset-your-api-key">View and reset your API key</a>. With a non-Rackspace Openstack cloud, you usually put the account password in this variable.</td>
</tr>
<tr class="strow property">
<td valign="top" headers="d26e245" class="stentry proptype">OS_AUTH_URL</td>
<td valign="top" headers="d26e248" class="stentry propvalue">identity endpoint</td>
<td valign="top" headers="d26e251" class="stentry propdesc">Set this value to the endpoint for the identity service the client uses to
          authenticate for API operations. For the US and AUS Rackspace Cloud that is
            <code>https://identity.api.rackspacecloud.com/v2.0/</code>, and for the UK Rackspace
          Cloud, it is <code>https://lon.identity.api.rackspacecloud.com/v2.0/</code>. </td>
</tr>
<tr class="strow property">
<td valign="top" headers="d26e245" class="stentry proptype">OS_REGION_NAME</td>
<td valign="top" headers="d26e248" class="stentry propvalue">data center region</td>
<td valign="top" headers="d26e251" class="stentry propdesc">The code for the data center region containing the servers you want to manipulate.
    You can check your server's data center by checking its <b>details</b> screen in the Cloud Control
          Panel. The data center code is just the first three letters of the data center's identifier, such as
          <code>DFW</code> or <code>ORD</code>. You can override the region setting
          with the <code>--os-region-name</code> command-line option.</td>
</tr>
</table>
 
After you've set all seven environment variables, click **OK** when prompted to complete the process until all the windows close. 
 
**Note** Any command windows you already have open do not reflect the changes to your environment variables until
you close and reopen them.
 
### Test the client
 
To make sure the nova client is ready to go, open a new command
window by going to the **Start Menu** and entering the following text in the search box.
 
    cmd
 
To see if you can talk to the API server, run the following command at the command prompt:
 
    nova image-list
 
If the command is successful, the system provides a list of the images available
to create a server.
 
### View the command list
 
To get a full list of commands, enter the following command:
 
    nova help
 
**Note**: You won't be able to use every command listed.  The nova client was
written for use with recent development versions of OpenStack, so it might include support for
some features that Rackspace has not yet implemented in the Rackspace Cloud.
 
You can get more help for a specific command by running the following command:
 
    nova help <command>
    
For example, to learn about the `create` command, run the following command:
 
    nova help create
 
### Troubleshooting
 
The client doesn't provide detailed errors. Because many people enter the username,
tenant name, or password incorrectly, be sure to double-check those settings.
 
Remember that if you change any environment variables, you need to close your command
window and open a new one to work with the new values.
 
You can also use the options listed at the end of the `nova help` output to override
some environment variable settings.  If you're unsure about the region, for example, you can
substitute it with the `--os-region-name` option as follows:
 
    nova --os-region-name ORD image-list
 
### Next steps
 
By following the instructions in this article, you can set up the nova client
so that you can access it and it can talk to your Rackspace Cloud account.
To look at some common operations, you can perform with the client, such as creating
servers and taking snapshots, see
[Useful python-novaclient commands](/support/how-to/useful-python-novaclient-commands).

