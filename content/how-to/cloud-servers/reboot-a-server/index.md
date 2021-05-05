---
permalink: reboot-a-server
audit_date: '2020-04-06'
title: Reboot a server
type: article
created_date: '2012-07-19'
created_by: Ari Liberman
last_modified_date: '2020-04-08'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

**Previous section:** [Create a Cloud Server](/support/how-to/create-a-cloud-server)

You can reboot a server in one of two ways. A *soft reboot* uses the
operating system's reboot process so that applications shut down
gracefully. A *hard reboot* halts the instance and then restarts it,
similar to turning a computer off and then on.

We recommend attempting a soft reboot of a server whenever possible,
using a hard reboot only when the server is unresponsive.

**Note:** You should ensure that critical services start at reboot and
that there are no tasks pending that could slow the reboot process.

### Perform a soft reboot

To perform a soft reboot of a server, you must be logged in to the
server using an account with superuser or administrator permissions. For
information about logging in to a cloud server, see [Connect to a cloud server](/support/how-to/connect-to-a-cloud-server).

For the command you should use to soft reboot your server, see the
appropriate section for your server operating system:

#### Linux

    sudo reboot

#### Windows

Select the method that matches your installation:

- Open **Settings** in the Charms Bar. Click **Power > Restart**.
- Click **Start**. Click the arrow next to **Shut down** and select **Restart** from the menu.

Alternatively, you can initiate a soft reboot from the command line by
entering the following command:

    shutdown /r

If a dialog box appears, select **Restart** from the drop-down menu. Click **OK**.

### Perform a hard reboot

If your server is not responding or was shut down manually, perform a
hard reboot by using the Cloud Control Panel to simulate power cycling the
server.

**Warning:** A hard reboot does not shut down applications gracefully
and can result in data loss.

1.  Log in to the [Cloud Control Panel](https://login.rackspace.com).
2.  In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3.  Select **Servers > Cloud Servers**, and then click
the gear icon next to the server that you want to reboot.
4.  Select **Reboot**.
5.  In the pop-up dialog box, click **Reboot Server**.

The server status on the **Servers** page updates while the server is
rebooting. When the reboot is complete, check your server to confirm
that everything is functioning as expected.

### Halt a server

You can also shut down a server to put it in a *halted* state, in
which no operating systems or applications are running.
Restoring a halted server to operation requires you to perform a hard
reboot using the Cloud Control Panel.

To halt a server, you need remote access to the server using an
account with superuser or administrator
permissions. For information about logging in to a cloud
server, see [Connect to a cloud server](/support/how-to/connect-to-a-cloud-server).

**Note:** Shutting down a server does *not* stop billing for the server
because the server still has resources allocated to the server instance. Billing
for a server stops only when someone deletes the server.

#### Linux

Log in as a sudo-enabled user via SSH and enter the following command:

    sudo shutdown -h now

The command shuts down the server, and you must perform a hard reboot to
restart the server.

#### Windows

Log in to your server and issue a shutdown request by
clicking **Start > Shut down**.

Alternatively, you can issue a shutdown from the command line by
entering the following command:

    shutdown /s

**Next section:** [Rescue mode](/support/how-to/rescue-mode)
