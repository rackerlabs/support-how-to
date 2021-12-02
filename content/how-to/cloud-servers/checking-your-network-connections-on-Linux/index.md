---
permalink: checking-your-network-connections-on-Linux
audit_date: '2021-12-02'
title: 'Checking your Network Connections on Linux'
type: article
created_date: '2021-12-02'
created_by: David Fonseca
last_modified_date: '2021-12-02'
last_modified_by: Miguel Salgado
product: Cloud-Servers
product_url: cloud-servers
---

Connectivity in servers is fundamental and know how to manage it is really necessary. We can have network troubles at any time and this could impact our services, brand, and business. In this article, I will explain basic commands to manage our connectivity.

### IP command
The ip command is very powerful and helpful when we need to manage our connections. Basically, the ip command is used to display and configure the network's parameters for server interfaces. IT has a simply syntaxis:
    `ip OPTIONS OBJECT COMMAND`

#### Get information of all the networks interfaces
This command shows two interfaces in our server. The *lo* interface is a virtual network interface used by the server to communicate with itself. The ens33 is a second interface and it is used to connect to the internet or another network (the name could be different). We can see all information related to our connections as IP, broadcast, netmask, MAC address, etc.

```sh
[root@localhost ~]# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
    valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
    valid_lft forever preferred_lft forever
2: wlp1s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether 50:5b:c2:dd:de:89 brd ff:ff:ff:ff:ff:ff
    inet 192.168.100.25/24 brd 192.168.100.255 scope global dynamic noprefixroute wlp1s0
    valid_lft 259193sec preferred_lft 259193sec
    inet6 2806:2f0:9020:4021:d3bc:10e6:ae0:52db/64 scope global dynamic noprefixroute
    valid_lft 259196sec preferred_lft 172796sec
    inet6 fe80::d8d3:785e:1332:8d86/64 scope link noprefixroute
    valid_lft forever preferred_lft forever
```

**NOTE:** Command `ip addr` shows the same information as `ip a`

#### Obtaining detailed information of a single interface
We can obtain more information of an interface as stats of transmitted and received packets with the command `ip -s link show {interface}`

```sh
[root@localhost ~]# ip -s link show ens33
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP mode DEFAULT group default qlen 1000
    link/ether 00:0c:29:9a:f2:b3 brd ff:ff:ff:ff:ff:ff
    RX: bytes  packets  errors  dropped overrun mcast
    361033     1894     0       0       0       0
    TX: bytes  packets  errors  dropped carrier collsns
    8033       67       0       0       0       0
```

#### The Route table
Another feature is the routing table. To obtain this informations, we need tu run the command: `ip route show`
```sh
[root@localhost ~]# ip route show
default via 192.168.100.1 dev ens37 proto dhcp metric 100
192.168.100.0/24 dev ens37 proto kernel scope link src 192.168.100.37 metric 100
```


### Other important commands 

#### Adding a new IP to a interface
The following command will add a new IP to an interface `ip a add {ip_addr/mask} dev {interface}`

```sh
[root@localhost ~]# ip a add 192.168.100.50/255.255.255.0 dev ens33
[root@localhost ~]# ip a
[...]
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:9a:f2:b3 brd ff:ff:ff:ff:ff:ff
    inet 192.168.100.50/24 scope global ens33
       valid_lft forever preferred_lft forever
[...]
```
As we can see, I added the IP address 192.168.100.20 to interface ens33.

#### Deleting an IP
The following command will delete an IP from an interface `ip addr del {ip_addr/mask} dev {interface}`

```bash
[root@localhost ~]# ip addr del 192.168.100.50/255.255.255.0 dev ens33
[root@localhost ~]# ip a
[...]
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:9a:f2:b3 brd ff:ff:ff:ff:ff:ff
[...]
```
After running the command, the IP address 192.168.100.50 was deleted from the ens33 interface.

#### How to enable/disable a network interface
In case that you want to disable or enable a network interface, you can do it using a simple command. If you run the command `ip a`, in the properties of the interface, there is a state parameter, which indicates the state enable or disable (UP/DOWN) for the interface.

#### How to enable network interface
The following command will enable a network interface `ip link set {interface} up`

```sh
[root@localhost ~]# ip link set ens33 up
...
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:9a:f2:b3 brd ff:ff:ff:ff:ff:ff
...
```

#### How to disable network interface
The following command will disable a network interface `ip link set {interface} down`
```sh
[root@localhost ~]# ip link set ens33 down
...
2: ens33: <BROADCAST,MULTICAST> mtu 1500 qdisc pfifo_fast state DOWN group default qlen 1000
    link/ether 00:0c:29:9a:f2:b3 brd ff:ff:ff:ff:ff:ff
...
```
Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
