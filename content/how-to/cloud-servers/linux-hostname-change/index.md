---
permalink: linux-hostname-change
audit_date: '2022-06-20'
title: Change a Linux server's hostname
type: article
created_date: '2022-06-20'
created_by: Osvaldo Ambrosio
last_modified_date: '2022-06-20'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---
By default, your server is started with the server's given name as the hostname. 
Some software such as cPanel&reg; requires a valid fully qualified domain name (FQDN) for the hostname 
to be used during their licensing verification system. This article describes how to change a server hostname 
in Linux&reg;.

### Change a server's hostname

1.  Check existing hostname
    ```sh
    $ hostname
    ```

2.  Modify the value to match your FQDN hostname,
    as shown in the following example:
    ```sh
    $  hostnamectl set-hostname NEW-HOST
    $  hostname
    NEW-HOST
    ```

3.  Open the file at /etc/hosts. To update the information for internal
    networking, change the host that is associated with the main IP address
    for your server, as shown in the following example:
    ```sh         
    $  vim /etc/hosts    
    127.0.0.1      localhost localhost.localdomain
    123.45.67.89   hostname.domain.com   hostname
    ```

4.  Change the domain name (where required)
    ```sh
    $  vim /etc/resolv.conf
    domain abc.com            <--- This would be the domain.
    nameserver 173.203.4.8
    nameserver 173.203.4.9
    ```

5.  Change networking configuration /etc/sysconfig/network
    ```sh
    $  vim /etc/sysconfig/network
    NETWORKING=yes
    FORWARD_IPV4=false
    HOSTNAME=hostname.domainname.com   <---- change this bit (FQDN)
    DOMAINNAME=domainname.com          <---- change this bit if the domain name has changed
    GATEWAY=172.0.0.1
    GATEWAYDEV=eth0
    ```

6.  Change networking configuration /etc/sysconfig/network
    ```sh
    $  vim /etc/hostname
    hostname.domainname.com
    ```

7.  Update the Mail Transfer Agent (MTA) configuration.
    ```sh
    $  vim /etc/postfix/mydomains
    mydomains - included a list of aliases for your machine here, formatted:
    example.com                                   OK
    After change, run 'postmap /etc/postfix/mydomains'
    localhost                                     OK
    #myoldserver.domain.com                       OK <------ commented out
    myserver.domain.com                           OK <----- added in
    ```

    Update the hostname in Postfix if it is hadcoded in and restart the service
    ```sh
    $  vim /etc/postfix/main.cf
    $  postmap /etc/postfix/main.cf
    $  systemctl restart postfix
    ```
    **NOTE:** This file can have quite a bit of information. You can grep for 'hostname' for faster results.
    ```sh
    $  grep 'hostname' /etc/postfix/main.cnf
    $  cat /etc/postfix/main.cnf | grep hostname
    ```

8.  Update MySQL, MariaDB or Percona - Check the user table for the old hostname.
    ```sh
    $  mysql -e "SELECT DISTINCT host FROM mysql.user;"
    ```

    If binary logging is enabled and the log files named using the original hostname then you must update /etc/my.cnf or binary logging will break and possibly have replication. You must specify the filename of the existing files, i.e. the old hostname

    ```sh
    $  grep  -E 'log-bin|relay-log' /etc/my.cnf /etc/mysql/my.cnf
    log-bin=/var/lib/mysqllogs/oldlogfilename
    relay-log=/var/lib/mysqllogs/oldrelaylogfilename
    ```

9.  Restart syslog
    ```sh
    $  service rsyslog restart    
    or
    $  systemctl restart rsyslog
    ```

# Related Articles
- [Change a server hostname in the Ubuntu operating system][ChanUbu]
- [Cloud Servers Articles][CloudSer]

[ChanUbu]: <https://docs.rackspace.com/support/how-to/change-a-server-hostname-in-the-ubuntu-operating-system/>
[CloudSer]: <https://docs.rackspace.com/support/how-to/cloud-servers-all-articles>
</br>

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
