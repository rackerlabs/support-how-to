---
permalink: troubleshoot-nova-agent-or-rackspace-cloud-server-agent
audit_date: '2020-07-06'
title: 'Troubleshoot nova-agent or Rackspace Cloud Server Agent'
type: article
created_date: '2020-07-02'
created_by: Chris Silva, Brian Abshier
last_modified_date: '2020-07-06'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes the `nova-agent` service on Linux&reg; servers and `Rackspace Cloud Server Agent` on
Windows&reg;. 

### What is `nova-agent`?
  
`nova-agent` is a vital service for all virtualized servers in the Rackspace public cloud. While a cloud server is
operational, `nova-agent` provides a way to interact with the server through the API or the Cloud Control Panel.
`nova-agent` enables components outside the server to control the server by sending messages through the Xen&reg; XenStore
file system. For example, when an authorized user of the Cloud Control Panel sends the server a request to reset a
password, the Cloud Control Panel writes the request to XenStore, and `nova-agent` then reads from XenStore and informs
the server.

### How does `nova-agent` affect my server?
  
When you initialize a cloud server, `nova-agent` performs startup functions such as configuring the server's network,
establishing its hostname, and setting its root or admin passwords.

The normal operation of a cloud server requires `nova-agent` to remain active. Disabling or removing `nova-agent` can result
in issues with the server interfacing with the host environment. We do not recommend removing or disabling the service
on your server. 

### `nova-agent` dependencies

`nova-agent` relies on another service being started and running on the server first, **xe-linux-distribution** (in some
operating systems, it is called **xe-daemon**.) This service is responsible for allowing the virtual machine (VM) to
communicate with the hypervisor via XenStore. The **xe-guest-utilities** package, installed by default on all Linux
servers on the Rackspace Cloud, provides the **xe-linux-distribution** service. Because `nova-agent` relies on XenStore to
function, you should make sure that **xe-linux-distribution** starts *before* the `nova-agent` service.

On Windows servers, the dependency is known as **Citrix Xen Windows Guest Agent**. This service performs the same duties
as the **xe-linux-distribution** does for a Linux server. This service also is installed and starts automatically by
default on all base Windows images.

### How is my server affected if `nova-agent` is broken or missing?

Without the `nova-agent` service running on your server, the following issues occur:

- Unable to reset the root/Administrator password through your portal.

- Unable to add or remove networks or set proper IPs or routes

- No Red Hat&reg; Enterprise Linux&reg; registration or Windows Activation

  
**Note**: New servers created from a Cloud Image without `nova-agent` result in build failures. The server
build process completes, but networking and root or Administrator password issues are likely. The best solution
for this kind of issue is to fix `nova-agent` on the source server, capture a new image, and use the new image to
build your server.

### Check the `nova-agent` status on Linux servers

To make sure that `nova-agent` is running on your Linux server, run one of the following commands:

  
- **Red Hat Enterprise Linux 6, CentOS® 6**:

         service nova-agent status
 
- **Red Hat Enterprise Linux 7, CentOS 7**:

         systemctl status nova-agent
  

- **Debian®-based distributions**:

         systemctl status python3-nova-agent

You can also verify the process is running on all OS versions with the following command:

         ps aux | grep -i nova-agent

### Check the `nova-agent` status on Windows servers
 
To check the `nova-agent` status on Windows servers, perform the following steps:

1. Open the **Server Manager** within Windows.

2. Select **Tools**.

3. Select **Services**.

4. Right-click the **Rackspace Cloud Server Agent** service and choose **Start**.

  
### Start and enable `nova-agent` on Linux servers

To start and enable the service on boot for a Linux server, run one of the following commands:

- **Red Hat Enterprise Linux 6 and CentOS 6**:

       chkconfig nova-agent on

- **Red Hat Enterprise Linux 7 and CentOS 7**:

       systemctl enable nova-agent

- **Debian-based distributions**:

      systemctl enable python3-nova-agent

### Start and enable `Rackspace Cloud Server Agent` on Windows servers

To start and enable the `Rackspace Cloud Server Agent` on Windows servers, perform the following steps:

1. Open the **Server Manager** within Windows.

2. Select **Tools**.

3. Select **Services**.

4. Right-click the **Rackspace Cloud Server Agent** service and choose **Properties**.

5. Change the **Startup Type** to `Automatic` and click **Apply/OK**.
  
### Rescue mode troubleshooting

As noted above, the `nova-agent` is responsible for managing password changes. If you can't access your server
after changing the password, the `nova-agent` service might have stopped.

If you can't access your server, you need to enter Rescue Mode and troubleshoot. See 
[Rescue Mode](/support/how-to/rescue-mode/) for more information.

### Rescue Mode on a Linux Server  

After you boot the server in Rescue Mode and log into the server, use the following commands to change the root
password and enable nova-agent:

1. Make a temporary directory by running the following command:

        mkdir /mnt/rescue

2. Mount the filesystem to the temporary directory by running the following commands:
 
        mount /dev/xvdb1 /mnt/rescue
        chroot /mnt/rescue

3. Run the `passwd` command to change the root password by running the following command and entering the new password twice: 

        passwd
  
4. Enable the `nova-agent` service by running the following command:

   - **Red Hat Enterprise Linux 6 and CentOS 6**:

         chkconfig nova-agent on
  
   - **Red Hat Enterprise Linux 7 and CentOS 7**:

         systemctl enable nova-agent
 
   - **Debian-based distributions**:

         systemctl enable python3-nova-agent

    **Note**: Older and unsupported versions of Debian-based operating systems might refer to the service as 
    *nova-agent*. As a best security practice, if an operating system has reached end-of-life (EOL), we strongly
    recommend that you migrate to a server with a newer operating system.

5. Exit out of `chroot` mode by running the following command:

        exit

6. Unmount the temporary filesystem by running the following command:

        umount /mnt/rescue
  
At this point, you can disconnect from the server and exit Rescue Mode. Upon rebooting the server, you should
now be able to access the server via the password created in the preceding steps. Additionally, the `nova-agent`
service should be running on the server. You can verify the service is running, as shown in the previous section.

### Rescue Mode on a Windows Server

Rescue mode on a Windows server functions differently than a Linux server. On a Windows server, when a rescue server
is created, you are given access to your filesystem so that you can access your data, but you cannot modify your
server's system configuration. This restriction means you cannot set the `Rackspace Cloud Server Agent` to start automatically
from within `Rescue Mode`. If you've locked yourself out of your Administrator account, and have no other accounts
that you can use to connect over RDP or the Emergency Console, contact Rackspace Support. 
