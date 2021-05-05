---
permalink: change-the-ssh-port-in-the-linux-ubuntu-operating-system
audit_date: '2020-06-26'
title: Change the SSH Port in the Linux Ubuntu operating system
type: article
created_date: '2020-06-25'
created_by: John Garcia
last_modified_date: '2020-06-26'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article demonstrates how to change the default SSH Port on a server using the Linux&reg; Ubuntu&reg; operating system.

### Edit the SSH daemon configuration file

Perform the following steps to edit the configuration file:

1. Run the following command to open the **sshd_config** file:

       root@server-02:~# vi /etc/ssh/sshd_config

2. Use the arrow keys to scroll through the file until you locate the following text:

       #Port 22
       #AddressFamily any
       #ListenAddress 0.0.0.0
       #ListenAddress ::

3. Move the cursor to the line below the **#Port 22** line and press the **i** key to enter *Insert Mode*.

4. Press **Enter** to insert a new line and enter **Port \<Specified Port Number\>**. `Port 2021` is the new SSH port in the following example:

       #Port 22
       Port 2021
       #AddressFamily any
       #ListenAddress 0.0.0.0
       #ListenAddress ::

5. Press the **Esc** key to exit *Insert Mode* and enter **:wq** to save your changes and close the file.

### Restart SSH daemon

To restart the SSH daemon and complete the bind to the newly specified port, run the following command:

    root@server-02:~# systemctl restart ssh

### Verify the bind to the new port

Run the following commmand to verify the bind:

    root@server-02:~# ss -tlpn| grep ssh
    LISTEN    0         128                0.0.0.0:2021             0.0.0.0:*        users:(("sshd",pid=4227,fd=3))
    LISTEN    0         128                   [::]:2021                [::]:*        users:(("sshd",pid=4227,fd=4))
    root@server-02:~# netstat -tlpn| grep ssh
    tcp        0      0 0.0.0.0:2021            0.0.0.0:*               LISTEN      4227/sshd: /usr/sbi
    tcp6       0      0 :::2021                 :::*                    LISTEN      4227/sshd: /usr/sbi

### Update the firewall

Update the firewall to ensure that the system allows incoming connections to the newly specified port. Enter
the following command with your new port:

    root@server-02:~# ufw allow 2021/tcp
    Rules updated
    Rules updated (v6)

### Verify the change by logging in

Attempt to log into the server with Secure Shell (SSH). You should see the following response:

    ssh: connect to host 104.239.174.157 port 22: Connection refused

Now, SSH by using the **-p \<Port Number\>** option. This should work:

    ssh root@104.239.174.157 -p 2021
    root@104.239.174.157's password:
