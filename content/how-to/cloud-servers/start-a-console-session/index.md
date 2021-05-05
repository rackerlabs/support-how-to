---
permalink: start-a-console-session
audit_date: '2020-06-08'
title: Start an Emergency Console session
type: article
created_date: '2012-03-27'
created_by: Rackspace Support
last_modified_date: '2020-06-08'
last_modified_by: William Loy
product: Cloud Servers
product_url: cloud-servers
---

As the administrator for your Cloud Servers, you might need to occasionally log
in to one of your servers by using the Emergency Console feature in the
[Cloud Control Panel](https://login.rackspace.com).

### Access the console

1.  Log in to the [Cloud Control Panel](https://login.rackspace.com).
2.  In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3.  Select **Servers > Cloud Servers**.
4.  Click on the name of your server to open the details page.
5.  From the **Actions** menu, select **Emergency Console**.

A terminal emulator window opens and displays your server's console. If you see
a blank screen, press **Enter** to bring up a login prompt or Windows&reg; desktop.

### Working in the console

The top row of the console displays the following functions that you can use
during a console session.

- Select the **Ctrl** or **Alt** check boxes while choosing an **F** key from
the **Fx** list to emulate the corresponding keyboard functions in the Console.

- For Windows servers, click the **Ctrl-Alt-Del** button to send an interrupt
command to the server.

- Click the **Refresh** button to refresh the Console screen.

- The **Shutdown** and **Reboot** buttons are inactive by default. When you are
logged in to your server as root or administrator, or as a user with those
privileges, those buttons become active.

### Closing the console

Before closing the console, log out of your account to ensure that the account
is not active the next time a user connects to your server's console.

You can disconnect the console from your server by clicking the **Disconnect**
button to end the session.

### Related article

[Reboot your server](/support/how-to/reboot-your-server)
