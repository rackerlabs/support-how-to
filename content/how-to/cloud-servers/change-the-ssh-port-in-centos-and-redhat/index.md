---
permalink: change-the-ssh-port-in-centos-and-redhat
audit_date: '2020-06-25'
title: Change the SSH Port in CentOS and Red Hat
type: article
created_date: '2020-06-25'
created_by: John Garcia
last_modified_date: '2020-06-25'
last_modified_by: William Loy
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to change the default Secure Shell (SSH) port on a CentOS&reg; or Red Hat&reg; Enterprise Linux&reg; server.

### Open and edit the SSH daemon configuration file

1. Run the following command to open the **sshd_config** file:


       [root@server-01 ~]# vi /etc/ssh/sshd_config

2. Use the arrow keys to scroll through the file until you locate the following text:


        #Port 22
        #AddressFamily any
        #ListenAddress 0.0.0.0
        #ListenAddress ::

3. Place the cursor on the line below **#Port 22** and press the **i** key to enter *Insert Mode*.

4. Press the **Enter** key to create a new line and type `Port <Specified Port Number>`. `Port 2021` is the new SSH port in the following example:


        #Port 22
        Port 2021
        #AddressFamily any
        #ListenAddress 0.0.0.0
        #ListenAddress ::


5. Press the **Esc** key to exit *Insert Mode*. Next, quit `vi` by typing `:wq` and pressing the **Enter** key.

### Bind SSH daemon to the new port

1. Install the **policycoreutils** package to bind the SSH daemon to the new SSH port by using the following command:

       [root@server-01 ~]# yum install policycoreutils

2. Type `y` and press the **Enter** key to continue with the installation. When this task completes, add the following rules
   to ensure that the SSH daemon binds with the specified port:

       [root@server-01 ~]# semanage port -a -t ssh_port_t -p tcp 2021
       [root@server-01 ~]# semanage port -m -t ssh_port_t -p tcp 2021

3. Next restart the SSH daemon:

       [root@server-01 ~]# systemctl restart sshd

### Verify the bind to the new port

Ensure that the port changes took effect by using either the **netstat** or **ss** command as shown in the following example:

        [root@server-01 ~]# ss -tlpn| grep ssh
        LISTEN   0         128                 0.0.0.0:2021             0.0.0.0:*        users:(("sshd",pid=28065,fd=4))
        LISTEN   0         128                    [::]:2021                [::]:*        users:(("sshd",pid=28065,fd=6))
        [root@server-01 ~]# netstat -tlpn| grep ssh
        tcp        0      0 0.0.0.0:2021            0.0.0.0:*               LISTEN      28065 sshd
        tcp6       0      0 :::2021                 :::*                    LISTEN      28065 sshd

As you can see, both commands show that `Port 2021` is now in place.

### Update your firewall

Update your firewall to ensure that incoming connections are allowed to the newly specified port.  Enter the following two lines:

        [root@server-01 ~]# sudo firewall-cmd --add-port=2021/tcp --permanent
        success
        [root@server-01 ~]# sudo firewall-cmd --remove-service=ssh --permanent
        success

**Note:** The first change includes the **\<desired port\>**, which is `Port 2021` in the example.

### Verify Change by Login

An attempt to SSH should return the following:

    `ssh: connect to host 104.130.26.57 port 22: No route to host`

Now, by using the `-p <Port Number>` option, you should be able to log in successfully:

        ssh root@104.130.26.57 -p 2021
        root@104.130.26.57's password:
