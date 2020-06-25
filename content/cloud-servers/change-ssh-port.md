---
permalink: change-ssh-port-in-centos-rhel/
audit_date:
title: Change SSH Port in CentOS and RedHat
type: article
created_date: '2020-06-25'
created_by: John Garcia
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

This article will explain how to change the default SSH Port on a Linux server.

# CentOS/RHEL 

## Open and Edit SSH daemon configuration file

Enter the following to open the **sshd_config** file:

```
[root@server-01 ~]# vi /etc/ssh/sshd_config
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

Press the "Esc" key to exit Insert Mode and you may now save and quit by typing ":wq" and pressing the "Enter" Key.

## Bind SSH daemon to New Port
We will now need to install **policycoreutils** package in order to get SSH daemon to bind to the New SSH Port:

```
[root@server-01 ~]# yum install policycoreutils
```

Type "y" and press the "Enter" key to continue with installation.  Once this task has completed, we will add the following rules to ensure that the SSH daemon will bind with the specified port.  

In this example we will continue to use **Port 2021**:

```
[root@server-01 ~]# semanage port -a -t ssh_port_t -p tcp 2021
[root@server-01 ~]# semanage port -m -t ssh_port_t -p tcp 2021
```

Now we will restart the SSH daemon:
```
[root@server-01 ~]# systemctl restart sshd
```

## Verify Bind to New Port

Ensure the port changes have taken effect by using either the **netstat** or **ss** command as shown:
```
[root@server-01 ~]# ss -tlpn| grep ssh
LISTEN   0         128                 0.0.0.0:2021             0.0.0.0:*        users:(("sshd",pid=28065,fd=4))
LISTEN   0         128                    [::]:2021                [::]:*        users:(("sshd",pid=28065,fd=6))
[root@server-01 ~]# netstat -tlpn| grep ssh
tcp        0      0 0.0.0.0:2021            0.0.0.0:*               LISTEN      28065 sshd
tcp6       0      0 :::2021                 :::*                    LISTEN      28065 sshd
```
As you can see either command shows **Port 2021** is now in place.

## Update Firewall

Lastly, we will need to update our firewall to ensure incoming connections are allowed to the newly specified port.  Enter the following two lines:
```
[root@server-01 ~]# sudo firewall-cmd --add-port=2021/tcp --permanent
success
[root@server-01 ~]# sudo firewall-cmd --remove-service=ssh --permanent
success
```
**Note:** The first change will include the **<desired port>**, which for the example is **Port 2021**.

## Verify Change by Login

Attempt to ssh in and you should see the following return:
```
ssh: connect to host 104.130.26.57 port 22: No route to host
```
Now using the **-p <Port Number>** option you should be able to log in successfully:
```
ssh root@104.130.26.57 -p 2021
root@104.130.26.57's password:
```
