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

This article describes how to block traffic originating from specific country IPs,
such as by using the GeoIP database and Linux&reg; iptables. You can also
use it to prevent DOS and DDoS attacks originating from certain countries.

### Prerequisites

Ensure that the GeoIP module is installed with iptables-addons.

GeoIP is a collection of IP addresses corresponding with the geographical locations
mapped with the IP addresses allocated for a specific organization, city,
state, and country.

`iptables` is a command-line firewall utility that uses policy chains to allow
or block traffic. When a connection tries to establish itself on your system,
iptables looks for a matching rule in its list. If it doesn’t find one,
it resorts to the default action.

Also, with the help of a module called **xt_geoip**, which consists of an `iptables`
extension (**xtables-addon**) and the **GeoIP** database, we can perform
country-based traffic filtering to help block or allow the traffic
from a specific country.

### Upgrade and install dependencies

You need to upgrade your Linux system and install the required xtables-addons dependencies. Run
the following command that corresponds with the distribution you are running in your machine.

#### Debian-based system (Debian&reg;, Ubuntu&reg; operating system)

    apt-get update && apt-get upgrade # apt-get install iptables-dev xtables-addons-common libtext-csv-xs-perl pkg-config# ./configure

#### RedHat-based system (CentOS&reg;, RHEL&reg;, Fedora&reg;)

    yum update # yum install gcc-c++ make automake kernel-devel-`uname -r` wget unzip iptables-devel perl-Text-CSV_XS# make

### Install xtables-addons

Next, install **xtables-addons** on your machine. Download the latest tarball from the
[official xtables-addons](https://sourceforge.net/projects/xtables-addons/files/ "Xtables-addons") project site using `wget`.

After you down the file, extract the tarball. Then compile and install it in your machine.

```sh
# wget http://downloads.sourceforge.net/project/xtables-addons/Xtables-addons/xtables-addons-2.13.tar.xz
# tar xf xtables-addons-2.13.tar.xz
# cd xtables-addons-2.13
# ./configure
# make
# make install
```

### Allow SeLinux from loading modules (RedHat based System)

RedHat&reg;-based Linux distributions (such as CentOS, RHEL, Fedora) have `selinux` enabled by default, but you
must adjust the `selinux` policy. If you don't run the following commands, `seLinux` prevents `iptables` from loading
the **xt_geoip** module.

```sh
# chcon -vR --user=system_u /lib/modules/$(uname -r)/extra/*.ko
# chcon -vR --type=lib_t /lib64/xtables/*.so
```

### Install the GeoIP database

The module called **xt_geoip** comes with the **xtables-addons** extension, which downloads the **GeoIP** database
from [MaxMind&reg;](https://www.maxmind.com/ "MaxMind.com") and converts it into a binary arrangement recognized
by **xt_geoip**. You must build and move to the required path. In this example, the path is **/usr/share/xt_geoip/**

```sh
# cd geoip
# ./xt_geoip_dl
# ./xt_geoip_build GeoIPCountryWhois.csv
# mkdir -p /usr/share/xt_geoip/
# cp -r {BE,LE} /usr/share/xt_geoip/
```

### Block traffic to and from a country

You can now use the `geoip` module with either your firewall utilities program, `iptables`, or `firewalld`. 

#### Using Iptables

The section provides the basic syntax for using `iptables` and the `geoip` module to block traffic originating
from or destined to a country. You need to use [two-letter ISO3166 code](https://en.wikipedia.org/wiki/ISO_3166-1 "ISO3166")
in place of country. Forexample, use `RU` for Russian Federation, `US` for United States, `IN` for India,
`BR` for Brazil, and so on.

```sh
# iptables -m geoip --src-cc country[,country...] --dst-cc country[,country...]
```

To block incoming traffic from Canada (CA) and United States (US), use the
following `iptables` command:

```sh
# iptables -I INPUT -m geoip --src-cc CA,US -j DROP
```

To block all incoming non-US traffic on your server, execute the following command:

```sh
# iptables -I INPUT -m geoip ! --src-cc US -j DROP
```

To block outgoing traffic destined to China (CN), run the following command:

```sh
# iptables -A OUTPUT -m geoip --dst-cc CN -j DROP
```

#### Using firewalld

If you are running `systemd`-based system and have `firewalld` as frontend controller for `iptables`,
you can use the following `firewalld` commands to block traffic:

```sh
# firewall-cmd --direct --add-rule ipv4 filter INPUT 0 -m geoip --src-cc CA,US -j DROP
# firewall-cmd --direct --add-rule ipv4 filter INPUT 0 -m geoip ! --src-cc US -j DROP
# firewall-cmd --direct --add-rule ipv4 filter OUTPUT 0 -m geoip --dst-cc CN -j DROP
```
