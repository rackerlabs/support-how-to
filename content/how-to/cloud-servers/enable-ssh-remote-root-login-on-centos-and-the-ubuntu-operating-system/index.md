---
permalink: enable-ssh-remote-root-login-on-centos-and-the-ubuntu-operating-system
audit_date: '2020-05-128'
title: 'Enable SSH remote root login on CentOS and the Ubuntu operating system'
type: article
created_date: '2020-05-26'
created_by: John Abercrombie
last_modified_date: '2020-05-28'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

We typically discourage remote root login as a security best practice, but if you need to remotely
Secure Shell (SSH) in to your server as the `root` user, use the following process for both CentOS&reg;
and the Ubuntu&reg; operating system:

1. Open the following configuration file with your favorite command line text editor, such as `nano`
   or `vim`, as the `root` user:

       /etc/ssh/sshd_config

2. Find the following line in the file:

       #PermitRootLogin no

3. Replace the commented-out line with the following line:

       PermitRootLogin yes

4. Save and close your text editor. 

5. Test your change to ensure that your SSH configuration does not break when you reload the `ssh`
   service. Check the syntax with the following command:

       sshd -t

   You might need to run the command as a super user by adding `sudo` to the beginning of the command.
   If you are editing the file as a `root` user, you do not need to use `sudo`. If you receive a 
   **Permission denied** response, use the following command:

       sudo sshd -t

   The server gives no response if the syntax is correct. You should see a response similar to the following:

       [root@testserver ~]# sshd -t
       [root@testserver ~]#


6. After you verify the syntax for your SSH configuration file, reload the `ssh` service. It is better to
   reload, rather than restart, so you aren’t disconnected from the server. Reload the `ssh` service with
   the following command:

        service sshd reload
        
   In CentOS 7 and later, you can use the `systemctl reload sshd` command instead of the `service`
   command to reload SSH. However, `service` works in both CentOS and the Ubuntu operating system.

7. After the reload completes, use the following command to check that `sshd` is running:

       service sshd status

The response should indicate that the service is currently running. You can now SSH into the server as
the `root` user.

**Note**:  Most bad actors attempt to hack into a server as the `root` user, so Rackspace recommends
disabling the ability to log in as `root` remotely. Instead, Rackspace recommends that you use SSH to
access the server as a user with `sudo` privileges. Then, you can elevate to the `root` user after you
connect.
