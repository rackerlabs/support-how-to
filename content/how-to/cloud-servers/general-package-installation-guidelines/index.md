---
permalink: general-package-installation-guidelines
audit_date: '2018-12-26'
title: General package installation guidelines
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2019-12-20'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

This article shows you how to use package managers to make adaptations
to your Linux&reg; cloud server. The procedure for installing packages
is similar across Linux distributions.

### Package managers and repositories

Unlike Windows&reg;-based operating systems in which software
packages come with their own installers, most Linux distributions
include a centralized **package manager**. A centralized package manager
enables you to install nearly every package on the system by using
the same tool.

#### Repositories

In addition to centralized package installation, Linux also
offers centralized sources of software called **repositories**.

When you run a command such as `yum install iptables`, the package manager
(in this case, `Yum`) downloads the relevant package (`iptables`) from its own
repositories and installs it on the system.

We recommend that you read the relevant documentation to learn more
about each of these package managers.

### Linux package managers

Every distribution that Cloud Servers offers comes with its own package
manager. The following sections describe common package managers and provide
example commands for different distributions.

**Warning**: Avoid performing an in-place upgrade of any of the following
package management systems or of all installed packages between versions on
Rackspace Cloud Servers. This operation can break the configurations that
enable Rackspace Cloud Servers to communicate with the hypervisors.

#### APT (Debian and Ubuntu operating system)

Advanced Package Tool (APT) is a command-line tool for interacting with dpkg,
the packaging system used by Debian&trade;. Use the following commands to
manage packages by using APT:

-   Install a package:

        aptitude install PACKAGENAME

-   Reinstall a package:

        aptitude reinstall PACKAGENAME

-   Remove a package (while keeping its configuration files):

        aptitude remove PACKAGENAME

-   Remove a package and purge its configuration files:

        aptitude remove --purge PACKAGENAME

-   Update the package list:

        aptitude update

-   Show information about an installed package:

        aptitude show PACKAGENAME

-   Search package repositories:

        aptitude search SEARCHSTRING

For more information about APT-based package management, see the following
resources:

- [Ubuntu&reg; operating system documentation:
  dpkg](https://help.ubuntu.com/lts/serverguide/dpkg.html.en)

- [Debian GNU/Linux
  FAQ: Chapter 8, The Debian package management
  tools](https://www.debian.org/doc/FAQ/ch-pkgtools.en.html)

- [APT
  HOWTO](https://www.debian.org/doc/manuals/apt-howto/)

#### apt-get (Debian and the Ubuntu operating system)

Apt-get is a popular alternative to APT that you can use to manage packages on
Debian and the Ubuntu operating system.

Use the following commands to manage packages by using apt-get:

-   Install a package:

        apt-get install PACKAGENAME

-   Reinstall a package:

        apt-get reinstall PACKAGENAME

-   Remove a package (while keeping its configuration files):

        apt-get remove PACKAGENAME

-   Remove a package and purge its configuration files:

        apt-get remove --purge PACKAGENAME

-   Update the package list:

        sudo apt-get update

-   Search for a specific package:

        apt-cache search KEYWORD

#### Yum and RPM Package Manager (RPM) (CentOS, Fedora, and Red Hat)

Yum handles automatic updates and package installation and removal for RPM
Package Manager (RPM) systems.

On CentOS&reg;, Fedora&trade;, and Red Hat&reg;, use the following commands
with the Yum package manager:

-   Install a package:

        yum install PACKAGENAME

-   Remove a package:

        yum remove PACKAGENAME

    **Note**: This command might not remove all configuration files and
    dependencies.

-   Update a package:

        yum update PACKAGENAME

-   List available updates:

        yum list updates

-   Show a package:

        yum list PACKAGENAME

-   Search package repositories:

        yum search SEARCHSTRING

-   List package groups:

        yum grouplist

-   Install a package group:

        yum groupinstall 'GROUP NAME'

-   Remove a package group:

        yum groupremove 'GROUP NAME'

For more information about Yum and RPM-based package management, see the following resources:

- [Red Hat Enterprise Linux 7 System Administrator's Guide:
  Yum](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system_administrators_guide/ch-yum)

- [Maximum RPM](https://www.rpm.org/max-rpm/)

- [Fedora Draft Documentation: RPM
  Guide](https://docs.fedoraproject.org/en-US/Fedora_Draft_Documentation/0.1/html/RPM_Guide/index.html)

- [Yum Command Cheat
  Sheet](https://access.redhat.com/sites/default/files/attachments/rh_yum_cheatsheet_1214_jcs_print-1.pdf)

#### Pacman (Arch)

Pacman is the package management tool for the Arch Linux&trade; distribution.
Use the following commands with Pacman:

-   Install a package:

        pacman -S PACKAGENAME

-   Remove a package (while keeping its configuration files):

        pacman -R PACKAGENAME

-   Remove a package and purge its configuration files and unneeded
    dependencies:

        pacman -Rsn PACKAGENAME

-   Update the package list:

        pacman -Sy

-   Show information about an installed package:

        pacman -Qi PACKAGENAME

-   Show information about a repository package:

        pacman -Si PACKAGENAME

-   Search package repositories:

        pacman -Ss SEARCHSTRING

For more information about Pacman, see the
[ArchWiki](https://wiki.archlinux.org/index.php/Pacman).

#### Emerge and Portage (Gentoo)

Portage is the package manager for the Gentoo&trade; system. Emerge is the
command structure that you use to run Portage. Use the following commands with
Emerge on Gentoo:

-   Install a package:

        emerge PACKAGENAME

-   Update the package list:

        emerge --sync

-   Update explicitly installed packages:

        emerge --update world

-   Search package repositories (package names only):

        emerge --search SEARCHSTRING

-   Search package repositories (package names and descriptions):

        emerge --searchdesc SEARCHSTRING

-   Remove a package:

        emerge --depclean --ask --verbose <packagename>

    This command checks if the package that you want to remove is a dependency
    of another package before it performs the removal. If the package is not a
    dependency, it asks you to confirm that you want remove the package. There
    is typically a five-second delay during which you can back out of removing
    the package. The delay is 10 seconds for packages that are important to
    the system. If the package that you want to remove is used by another
    package, then the command does not remove the package.

    Alternatively, you can use the shorter version of this command:

        emerge -cav <packagename>

    After the package is removed, run the following command, but omit the
    package name:

        emerge --depclean --ask --verbose (or emerge -cav)

    This command searches for deprecated dependencies that are no longer used
    by any package. It therefore removes the dependencies from the package
    that you just removed.

For more information about Emerge and Portage, see the [Gentoo X86
Handbook](https://www.gentoo.org/doc/en/handbook/handbook-x86.xml?part=2&chap=1).

### What if the software I'm looking for isn't in my package manager's repositories?

If you can't find the software you're looking for in your package manager's
main repositories, the software might not be well-known enough to be included.
If this occurs, you can try to locate the package by searching the Internet.

[Rpmfind](https://rpmfind.net "https://rpmfind.net") is another
good source for RPM packages. After you have located and downloaded the
package, you can still use your distribution's package manager to install it.

### Install from source

In some situations, you might have to manually compile and install a
package. This might occur when you need special customizations that
weren't enabled by default, or when the software that you want to
install doesn't have a pre-compiled version.

If you need to manually compile and install a package, we recommend that
you go directly to the software documentation for instructions. You almost
certainly need a C/C++ compiler and make utility to perform this
task. You can install these tools by running the following commands:

-   On Debian:

        apt-get install build-essential

-   On CentOS:

        yum groupinstall "Development Tools"

These commands install the utilities that you need to install most common
packages directly from the source. After you install them, you are able to
follow the package's instructions and tailor the compilation to align with
your needs.
