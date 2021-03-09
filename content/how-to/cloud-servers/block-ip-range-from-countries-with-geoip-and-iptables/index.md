---
permalink: block-ip-range-from-countries-with-geoip-and-iptables/
audit_date: '2021-03-09'
title: 'Block IP range from countries with GeoIP and iptables'
type: article
created_date: '2021-02-28'
created_by: Daniel Hernandez
last_modified_date: '2021-03-09'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article will provide guidance to block traffic originated from specific
country IPs, in this case by using GeoIP database and Linux&reg; iptables. It is
also used for preventing DOS, DDOS attacks originating from certain countries.

### Prerequisites

- GeoIP module installed with iptables-addons.

GeoIP is a collection of IP's corresponding with the geographical locations
  mapped with the IP addresses allocated for a specific organization, city,
  state and country.

`iptables` is a command-line firewall utility that uses policy chains to allow
  or block traffic. When a connection tries to establish itself on your system,
  iptables looks for a rule in its list to match it to. If it doesn’t find one,
  it resorts to the default action.

Also, with the help of a module called **xt_geoip** consisting in an iptables
   extension **xtables-addon** and the **GeoIP** database, we'll perform
   country-based traffic filtering which helps us block or allow the traffic
   from a specific country.

### Upgrading and Installing Dependencies

Our Linux system must be upgraded as well as the installation of the required xtables-addons dependencies. Run the following command that corresponds with the distribution you are running in your machine.

#### Debian based system (Debian, Ubuntu)

    apt-get update && apt-get upgrade # apt-get install iptables-dev xtables-addons-common libtext-csv-xs-perl pkg-config# ./configure

#### RedHat based system (CentOS, RHEL, Fedora)

    yum update # yum install gcc-c++ make automake kernel-devel-`uname -r` wget unzip iptables-devel perl-Text-CSV_XS# make

### Installing xtables-addons

We'll now install **xtables-addons** in our machine. To do so, we'll download
the latest tarball from the [official xtables-addons](https://sourceforge.net/projects/xtables-addons/files/ "Xtables-addons") project site using wget.

Once it's downloaded, we'll extract the tarball, then compile and install it in
our machine.
```sh
# wget http://downloads.sourceforge.net/project/xtables-addons/Xtables-addons/xtables-addons-2.13.tar.xz
# tar xf xtables-addons-2.13.tar.xz
# cd xtables-addons-2.13
# ./configure
# make
# make install
```

### Allow SeLinux from loading modules (RedHat based System)

RedHat based Linux distributions (ie CentOS, RHEL, Fedora) has **selinux** enabled by default but we must adjust the **selinux** policy as follows, else **seLinux** will prevent **iptables** from loading the **xt_geoip** module.

```sh
# chcon -vR --user=system_u /lib/modules/$(uname -r)/extra/*.ko
# chcon -vR --type=lib_t /lib64/xtables/*.so
```

### Install GeoIP Database

The module called **xt_geoip** comes with the **xtables-addons** extension which downloads the **GeoIP** database from [MaxMind](https://www.maxmind.com/ "MaxMind.com") and converts it into a binary arrangement recognized by **xt_geoip**. It also must be built and moved into the required path, in this example is **/usr/share/xt_geoip/**

```sh
# cd geoip
# ./xt_geoip_dl
# ./xt_geoip_build GeoIPCountryWhois.csv
# mkdir -p /usr/share/xt_geoip/
# cp -r {BE,LE} /usr/share/xt_geoip/
```

## Block traffic to and from a Country

We should now be able to use our firewall utilities program iptables to use the geoip module.
### Using Iptables

In order to block traffic originating from or destined to a country, here's the basic syntax for using iptables with geoip module. We need to use [two-letter ISO3166 code](https://en.wikipedia.org/wiki/ISO_3166-1 "ISO3166") in place of country , for eg., RU for Russian Federation, US for United States, IN for India, BR for Brazil and so on.
```sh
# iptables -m geoip --src-cc country[,country...] --dst-cc country[,country...]
```
If we want to block incoming traffic from Canada (CA) and United States (US), the following iptables command should do.

```sh
# iptables -I INPUT -m geoip --src-cc CA,US -j DROP
```
If we want to block all incoming non-US traffic on our server, we need to execute the following.
```sh
# iptables -I INPUT -m geoip ! --src-cc US -j DROP
```
If we want to block outgoing traffic destined to China (CN), we need to run the following command.
```sh
# iptables -A OUTPUT -m geoip --dst-cc CN -j DROP
```

### Using firewalld

We can also use **firewalld** for the above job if we are running **systemd** based system and we have **firewalld** as frontend controller for **iptables**.
```sh
# firewall-cmd --direct --add-rule ipv4 filter INPUT 0 -m geoip --src-cc CA,US -j DROP
# firewall-cmd --direct --add-rule ipv4 filter INPUT 0 -m geoip ! --src-cc US -j DROP
# firewall-cmd --direct --add-rule ipv4 filter OUTPUT 0 -m geoip --dst-cc CN -j DROP
```
