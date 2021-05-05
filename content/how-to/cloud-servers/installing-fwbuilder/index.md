---
permalink: installing-fwbuilder
audit_date: '2020-09-25'
title: Install fwbuilder
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2020-09-25'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

**Note:** The commands and utilities in this article have been tested on a Debian cloud server and are not guaranteed to function correctly on other distributions. However, the [General Package Installation Guidelines](/support/how-to/general-package-installation-guidelines) article might assist in "porting" this article to another distribution.

### Prerequisites

[VNC Install](/support/how-to/vnc-install "VNC Install")

Fwbuilder is an advanced graphical firewall configuration tool. You can use it to establish complex firewall policies in situations where command-line scripting tools are too slow.

### Installation

Download Fwbuilder directly from [Sourceforge](https://sourceforge.net/project/showfiles.php?group_id=5314&package_id=125359),
or from your cloud server's built-in package manager by typing:

    aptitude install fwbuilder

Connect to your cloud server by using the instructions in the VNC article in the previous section. To launch the application, type:

    fwbuilder


### Additional resources

[Firewall Builder 5 User's Guide](http://fwbuilder.sourceforge.net/4.0/docs/users_guide5/ "http://fwbuilder.sourceforge.net/4.0/docs/users_guide5/")
