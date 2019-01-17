---
permalink: installing-and-configuring-vsftpd
audit_date:
title: Installing and Configuring vsFTPD
created_date: '2019-01-17'
created_by: Rackspace Community
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

At the end of this document, you will have a functioning FTP server.

**CentOS/RHEL**

Run these commands from SSH:

yum -y install vsftpd
chkconfig vsftpd on
> /etc/vsftpd/vsftpd.conf
sed -i -e 's/IPTABLES_MODULES=""/IPTABLES_MODULES="ip_conntrack_ftp"/g' /etc/sysconfig/iptables-config
modprobe ip_conntrack_ftp
vim /etc/vsftpd/vsftpd.conf

**Ubuntu**

Run these commands from SSH:

apt-get install vsftpd
> /etc/vsftpd.conf
mkdir /etc/vsftpd
vim /etc/vsftpd.conf
Put the following in the /etc/vsftpd/vsftpd.conf (CentOS/RHEL/Fedora) or  /etc/vsftpd.conf (Ubuntu) file, overwriting everything else:

anonymous_enable=NO
local_enable=YES
write_enable=YES
local_umask=022
dirmessage_enable=YES
xferlog_enable=YES
connect_from_port_20=YES
xferlog_std_format=YES
listen=YES
pam_service_name=vsftpd
userlist_enable=YES
tcp_wrappers=YES
pasv_min_port=60000
pasv_max_port=65000
Chroot
Want chroot jails? Add the following lines at the end of vsftpd.conf:

chroot_local_user=YES
chroot_list_enable=YES
chroot_list_file=/etc/vsftpd/vsftpd.chroot_list
You will need to create a vsftp.chroot_list file and put users in it who ARE NOT chrooted. Everyone is chrooted by default. You need to create the file even if it's going to be empty:

> /etc/vsftpd/vsftpd.chroot_list
Default File Permissions
Have a customer who wants to use FACLS, or just wants a group permission set by default? Here's how:

file_open_mode=XXXX
local_umask=XXX
Here, file_open_mode can be changed to 0775, 0664, etc. to meet your basic permission needs. You may not need to combine it with umask, depending on what you want to do.

Umask will remove permissions from the files.  For example, a file with 777 will be 755 with a umask of 022 (the default). This is there to restrict access for security purposes.  Some people mistakenly will set the umask to 000, thinking that the files will then show up as 777.  This is an important distinction; whereas file_open_mode tells vsftpd the default permissions to use, umask will only take away permissions, it can never grant them.

### Poke holes in the firewall
**CentOS/RHEL**

iptables -I RH-Firewall-1-INPUT -p tcp --dport 21 -m comment --comment "FTP" -j ACCEPT
iptables -I RH-Firewall-1-INPUT -p tcp -m multiport --dports 60000:65000 -m comment --comment "FTP passive mode ports" -j ACCEPT
/etc/init.d/iptables save

**Ubuntu**

ufw allow 21
ufw allow proto tcp from any to any port 60000:65000
Start me up!
service vsftpd start
