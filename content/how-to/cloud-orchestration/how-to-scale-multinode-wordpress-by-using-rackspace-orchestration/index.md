---
permalink: how-to-scale-multinode-wordpress-by-using-rackspace-orchestration
audit_date: '2017-01-19'
title: Scale a multinode WordPress stack by using Rackspace Orchestration
type: article
created_date: '2013-11-12'
created_by: Rackspace Support
last_modified_date: '2020-09-17'
last_modified_by: Cat Lookabaugh
product: Cloud Orchestration
product_url: cloud-orchestration
---

This article provides instructions for adding a new server, or node, to scale a multinode WordPress environment that you created by using Rackspace Orchestration.

**Note:** If you need to scale a single WordPress instance, we recommend that you create a new multinode WordPress stack and migrate your data. Many WordPress plug-ins, such as [duplicator](https://wordpress.org/plugins/duplicator/) or [WP Migrate DB](https://wordpress.org/plugins/wp-migrate-db/), can help with this process.

### Create the server

Use the following steps to create the server:

1. Log in to [the Cloud Control Panel](https://login.rackspace.com).

2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.

3. Click **Orchestration > Stacks**.

4. On the Stacks page, click the name of the stack to scale.

5. In the Infrastructure section of the stack details page, click the name of the first web server (`web01`) to load the cloud server details page.

6. In the server details page, go to the **Actions** menu, and select **Create Image**.

7. When prompted, enter a name for the image, and click **Create Image**.

8. To monitor the image creation progress, click **View Images** in the Images section of the server details page.

   After the image is created, the image name and its creation time stamp are displayed.

9. Click the gear icon next to the name of the new image, and select **Create Server with Image** from the menu.

    {{<image src="cpviewimage.png" alt="" title="">}}

10. On the server creation page, enter a name for the new server, and select the region where it will be created.

    We recommend following the stack naming convention (for example, **web02.example.com**) and creating the new server in the same region as the other nodes in the stack.

11. In the Image section of the page, select the newly created image.

12. Select a size for the new server, then click **Create Server** at the bottom of the page.

### Prepare the new server

After the server is created and active, you need to make a few adjustments before it is ready to be used by WordPress.

Use the following steps to prepare the new server:

1. From the server details page, note the ServiceNet IP address of the new server. You will need this information in a later step.

    {{<image src="cpservicenet.png" alt="" title="">}}

2. Click the **Orchestration** link at the top of the page, and return to the stack that you are scaling out.

3. In the Infrastructure section of the stack's page, click the link for the primary server in the list of nodes.

4. From the primary server's details page, find the PublicNet IP address in the Networks section, and use it to log in to the server by using SSH.

   If you do not have the stack's private key, you can reset the primary server's root password.

   For help using the SSH key with your server, see the How-To articles for [Mac and Linux](/support/how-to/logging-in-with-an-ssh-private-key-on-linuxmac) or [Windows](/support/how-to/logging-in-with-an-ssh-private-key-on-windows).

5. After you have logged in to the primary server, change the directory to **/etc/lsyncd**, and open the **lsyncd.conf.lua** file with `nano`.

        cd /etc/lsyncd
        sudo nano lsyncd.conf.lua

    The file's contents should look something similar to the following output (you might have more sections depending on how many servers you have):

        settings = {
          logfile = "/var/log/lsyncd/lsyncd.log",
          statusFile = "/var/log/lsyncd/lsyncd-status.log",
          statusInterval = 5,
          pidfile = "/var/run/lsyncd.pid"
        }
        sync{
          default.rsync,
          source = "/var/www/vhosts/iloveblog.rackspace.com/http_docs",
          target = "wp_user@10.176.129.22:/var/www/vhosts/iloveblog.rackspace.com/http_docs",
          excludeFrom = "/etc/lsyncd/lsyncd.exclude",
          rsyncOps = {"-rlpgoDvz", "-e", "/usr/bin/ssh -i /var/www/vhosts/iloveblog.rackspace.com/.ssh/id_rsa.lsyncd -o StrictHostKeyChecking = no"}
        }

6. Copy the last `sync{ ... }` section, and paste a new copy of the section at the end of the file.

7. In the new `sync` block, replace the IP address in the value for `target` with the ServiceNet IP address of the new server that you created earlier.

    The line to edit looks similar to `target = "wp_user@10.176.129.22:/var/www/vhosts/iloveblog.rackspace.com/http_docs"`, as in the following example:

        settings = {
          logfile = "/var/log/lsyncd/lsyncd.log",
          statusFile = "/var/log/lsyncd/lsyncd-status.log",
          statusInterval = 5,
          pidfile = "/var/run/lsyncd.pid"
        }
        sync{
          default.rsync,
          source = "/var/www/vhosts/iloveblog.rackspace.com/http_docs",
          target = "wp_user@10.176.129.22:/var/www/vhosts/iloveblog.rackspace.com/http_docs",
          excludeFrom = "/etc/lsyncd/lsyncd.exclude",
          rsyncOps = {"-rlpgoDvz", "-e", "/usr/bin/ssh -i /var/www/vhosts/iloveblog.rackspace.com/.ssh/id_rsa.lsyncd -o StrictHostKeyChecking = no"}
        }
        sync{
          default.rsync,
          source = "/var/www/vhosts/iloveblog.rackspace.com/http_docs",
          target = "wp_user@10.176.130.89:/var/www/vhosts/iloveblog.rackspace.com/http_docs",
          excludeFrom = "/etc/lsyncd/lsyncd.exclude",
          rsyncOps = {"-rlpgoDvz", "-e", "/usr/bin/ssh -i /var/www/vhosts/iloveblog.rackspace.com/.ssh/id_rsa.lsyncd -o StrictHostKeyChecking = no"}
        }

8. When you're finished, press `Ctrl-o` and `Enter` to write the changes, and then press `Ctrl+x` to exit `nano`.

9. Now that the configuration is updated, restart `lsyncd`.

        sudo service lsyncd restart

10. Check the `lsyncd` log to verify that content is being pushed to the new server.

        # cat /var/log/lsyncd/lsyncd.log
        ....
        Fri Nov  8 23:20:44 2013 Normal: recursive startup rsync: /var/www/vhosts/iloveblog.rackspace.com/http_docs/ -> wp_user@10.176.130.89:/var/www/vhosts/iloveblog.rackspace.com/http_docs/
        Warning: Permanently added '10.176.130.89' (ECDSA) to the list of known hosts.
        sending incremental file list
        wp-config.php
        sending incremental file list
        wp-content/uploads/2013/11/ilovelamp-150x150.jpg
        wp-content/uploads/2013/11/ilovelamp-300x219.jpg
        wp-content/uploads/2013/11/ilovelamp-400x270.jpg
        wp-content/uploads/2013/11/ilovelamp.jpg
        wp-config.php
        wp-content/uploads/
        wp-content/uploads/2013/
        wp-content/uploads/2013/11/
        wp-content/uploads/2013/11/ilovelamp-150x150.jpg
        wp-content/uploads/2013/11/ilovelamp-300x219.jpg
        wp-content/uploads/2013/11/ilovelamp-400x270.jpg
        wp-content/uploads/2013/11/ilovelamp.jpg

        sent 27885 bytes  received 936 bytes  19214.00 bytes/sec
        total size is 12563838  speedup is 435.93
        Fri Nov  8 23:20:45 2013 Normal: Startup of '/var/www/vhosts/iloveblog.rackspace.com/http_docs/' finished.

        sent 105017 bytes  received 261 bytes  70185.33 bytes/sec
        total size is 12563838  speedup is 119.34
        Fri Nov  8 23:20:45 2013 Normal: Startup of '/var/www/vhosts/iloveblog.rackspace.com/http_docs/' finished.

    You should see something like the preceding example log, with the new server's IP address in the log and a list of files that have been synchronized since `lsyncd` restarted.

    If you see an error, go back and check the **/etc/lsyncd/lsyncd.conf.lua** file to ensure that there are no mistakes.

### Add the new server to the load balancer

After you have confirmed that the new server is receiving content, you can add it to the stack load balancer by using the following steps:

1. Go back to the Orchestrations page in the [Cloud Control Panel](https://login.rackspace.com) and select your stack again.

2. In the Infrastructure list, click the link for your stack's load balancer.

3. In the Nodes section of the load balancer details page, click **Add Cloud Servers**.

4. From the list of servers, select the check box next to the server that you just created, and click **Add Selected Servers** at the bottom of the page.

After the server is added to the load balancer, you are done. You can repeat these steps as needed to add more servers to the stack.
