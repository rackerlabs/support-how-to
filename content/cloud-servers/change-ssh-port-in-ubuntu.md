---
permalink: change-ssh-port-in-ubuntu/
audit_date:
title: Linux - Ubuntu - Changing SSH Port 
type: article
created_date: '2020-06-25'
created_by: John Garcia
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

This article will explain how to change the default SSH Port on a Ubuntu server.

## Open and Edit SSH daemon configuration file

Enter the following to open the **sshd_config** file:

```
root@server-02:~# vi /etc/ssh/sshd_config
```

Use the arrow keys to move your cursor to move through the file until you locate the following text:

```
#Port 22
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::
```

Move the cursor to the line below the **#Port 22** line and press the "i" key to enter Insert Mode.  Press the "Enter" Key to create a new line and type "Port <Specified Port Number>".  For the following example, I have chosen **Port 2021** as the New SSH Port:

```
#Port 22
Port 2021
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::
```

## Restart SSH daemon

Now we will restart the SSH daemon to complete the bind to the newly specified port:

```
root@server-02:~# systemctl restart ssh
```

## Verify Bind to New Port

```
root@server-02:~# ss -tlpn| grep ssh
LISTEN    0         128                0.0.0.0:2021             0.0.0.0:*        users:(("sshd",pid=4227,fd=3))
LISTEN    0         128                   [::]:2021                [::]:*        users:(("sshd",pid=4227,fd=4))
root@server-02:~# netstat -tlpn| grep ssh
tcp        0      0 0.0.0.0:2021            0.0.0.0:*               LISTEN      4227/sshd: /usr/sbi
tcp6       0      0 :::2021                 :::*                    LISTEN      4227/sshd: /usr/sbi
```

## Update Firewall
Lastly, we will need to update our firewall to ensure incoming connections are allowed to the newly specified port.  Enter the following line with your **<desired port>**:

```
root@server-02:~# ufw allow 2021/tcp
Rules updated
Rules updated (v6)
```

## Verify Change by Login

Attempt to ssh in and you should see the following return:

```
ssh: connect to host 104.239.174.157 port 22: Connection refused
```

Now using the **-p <Port Number>** option you should be able to log in successfully:

```
ssh root@104.239.174.157 -p 2021
root@104.239.174.157's password:
```
