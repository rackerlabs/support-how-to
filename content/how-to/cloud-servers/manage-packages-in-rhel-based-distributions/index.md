---
permalink: manage-packages-in-rhel-based-distributions
audit_date: '2020-06-11'
title: 'Manage packages in RHEL-based distributions'
type: article
created_date: '2020-06-09'
created_by: Chris Silva
last_modified_date: '2020-06-11'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to manage packages with `yum` in Red Hat® Enterprise Linux®-based distributions. 

### Prerequisites

You need to have the following prerequisites:

- Basic understanding of Secure Shell (SSH)
- Sudo or administrative access to your server
- A Cloud Server running either Red Hat Enterprise Linux 6 or later or CentOS 6 or later

### Package management in Linux

The term *package management* in Linux describes the installation, removal, or updating of software on your Linux server.
Packages are built by using source code that installs a piece of software on your server. Packages are compiled
to allow for easy installation rather than installing each component from the source. 

### Package tools in RHEL distributions

RHEL&reg;-based distributions include the following two forms of package management: 

- `rpm` is considered a low-level tool used to install, remove, and gather information, as well as to
build packages to install on a RHEL-based server. 

- `yum` is considered a high-level tool that has the same functionality as `rpm` but also resolves
dependencies to allow for smoother installation of **.rpm** packages. 

**Note**: Rackspace does not support the installation of packages from source. 

### Using `yum`

The `yum` tool is your primary tool for installing and managing the software on your server. 

#### Gather information

To see the repositories from which `yum` pulls packages, run the following command: 

    yum repolist

This command lists the repositories available on your server: 

    # yum repolist
    Loaded plugins: langpacks, product-id, rhnplugin, search-disabled-repos, subscription-manager
    This system is receiving updates from RHN Classic or Red Hat Satellite.
    repo id                                           repo name                                                                    status
    !drivesrvr                                        drivesrvr                                                                        20
    epel/x86_64                                       Extra Packages for Enterprise Linux 7 - x86_64                               13,314
    ius/x86_64                                        IUS for Enterprise Linux 7 - x86_64                                             609
    rackspace                                         Rackspace Monitoring                                                              1
    rhel-x86_64-server-7                              Red Hat Enterprise Linux Server (v. 7 for 64-bit x86_64)                     29,118
    rhel-x86_64-server-optional-7                     RHEL Server Optional (v. 7 64-bit x86_64)                                    21,287
    repolist: 64,3

To search for a package from your repositories, use the following command:

    yum search <package name>

**Note**: This command locates all instances of the `<package name>` that are available in your
repositories. This list can be quite verbose, so use the full name of the package, if you know it,
to narrow your search. 

To get more information on a package, use the following command:

    yum info <package name> 

This command provides some information about the package. Here's an example of searching for the `httpd` package:

    # yum info httpd  
    Available Packages
    Name         : httpd
    Version      : 2.4.43
    Release      : 1.fc31
    Architecture : x86_64
    Size         : 1.4 M
    Source       : httpd-2.4.43-1.fc31.src.rpm
    Repository   : updates
    Summary      : Apache HTTP Server
    URL          : https://httpd.apache.org/
    License      : ASL 2.0
    Description  : The Apache HTTP Server is a powerful, efficient, and extensible web server.

To see the currently installed packages, run the following command: 

    yum list installed

This command lists all the packages installed on the system. This list can be extensive.
If you know the package you're looking for, you can use `grep` to filter your search as shown in
the following example:

    yum list installed | grep httpd

This command provides a more manageable list:

    # yum list installed | grep httpd
    httpd.x86_64                       2.4.6-93.el7            @rhel-x86_64-server-7
    httpd-tools.x86_64                 2.4.6-93.el7            @rhel-x86_64-server-

#### Install packages

To install a package, use the following command:

    yum install <package>

This command queries your repositories and pulls down the package to install. During the
installation process, `yum` tries to resolve dependencies associated with the package you are
installing. If `yum` can resolve the dependencies, it shows output and asks you to confirm the
installation. The following example shows dependency resolution: 

    # yum install httpd
    Loaded plugins: langpacks, product-id, rhnplugin, search-disabled-repos, subscription-manager
    This system is receiving updates from RHN Classic or Red Hat Satellite.
    drivesrvr                                              | 2.9 kB  00:00:00     
    Resolving Dependencies
    --> Running transaction check
    ---> Package httpd.x86_64 0:2.4.6-93.el7 will be installed
    --> Finished Dependency Resolution

    Dependencies Resolved

    =========================================================================================================================
     Package                  Arch                Version                        Repository                           Size
    =========================================================================================================================
    Installing:
     httpd                 x86_64                2.4.6-93.el7                   rhel-x86_64-server-7                  1.2 M

    Transaction Summary
    =========================================================================================================================
    Install  1 Package

    Total download size: 1.2 M
    Installed size: 3.7 M
    Is this ok [y/d/N]:

**Note**: When you install `httpd`, there are no other dependencies required to install the package. In other
situations, there might be additional dependencies required for installation that `yum` needs to install.
If `yum` cannot resolve dependencies, the output lists the errors. You need to resolve these
dependencies to continue the installation. 

#### Update packages

To update an installed package, run the following command: 

    yum update <package>

This command searches the repository for updates to the specified package, if available. 

If there is an update available, the command shows you the change and requests confirmation. Otherwise,
it informs you that there is nothing to do:

    # yum update httpd
    Loaded plugins: langpacks, product-id, rhnplugin, search-disabled-repos, subscription-manager
    This system is receiving updates from RHN Classic or Red Hat Satellite.
    drivesrvr                                                                                     | 2.9 kB  00:00:00     
    No packages marked for update 

You can also use the following command to trigger an update for all packages on the system: 

    yum update


This command queries the repositories for any updates to the packages installed on your server. 

**Imporant**: This process tries to update all packages on the system. Make sure that you've reviewed
your environment before proceeding because the changes could cause unexpected issues with applications
as a result of the updates. 

#### Remove packages

To remove an installed package, use the following command:

    yum remove <package name>

This command checks the installed packages, provides output, and asks you to confirm the change:

    # yum remove httpd
    Loaded plugins: langpacks, product-id, rhnplugin, search-disabled-repos, subscription-manager
    This system is receiving updates from RHN Classic or Red Hat Satellite.
    Resolving Dependencies
    --> Running transaction check
    ---> Package httpd.x86_64 0:2.4.6-93.el7 will be erased
    --> Processing Dependency: httpd-mmn = 20120211x8664 for package: mod_php73-7.3.18-1.el7.ius.x86_64
    --> Running transaction check
    ---> Package mod_php73.x86_64 0:7.3.18-1.el7.ius will be erased
    --> Finished Dependency Resolution
    drivesrvr                                                                                      | 2.9 kB  00:00:00     

    Dependencies Resolved

    ======================================================================================================================
     Package                    Arch              Version                        Repository                        Size
    ======================================================================================================================
    Removing:
     httpd                      x86_64            2.4.6-93.el7                  @rhel-x86_64-server-7             3.7 M
    Removing for dependencies:
     mod_php73                  x86_64            7.3.18-1.el7.ius              @ius                              4.8 M

    Transaction Summary
    =======================================================================================================================
    Remove  1 Package (+1 Dependent package)

    Installed size: 8.6 M
    Is this ok [y/N]:

**Note**: When you remove `httpd`, `yum` also removes the `mod_php73` package, which depends on `httpd`. Make sure that
removing a package does not negatively impact other parts of your server. 


#### Review history and revert changes

In some cases, you need to review the actions taken with the `yum` tool. 

To see the history of the `yum` command usage, run the following command:

    yum history

This command provides numbered output that shows the transactions made by `yum`.

    # yum history
    Loaded plugins: langpacks, product-id, rhnplugin, search-disabled-repos, subscription-manager
    This system is receiving updates from RHN Classic or Red Hat Satellite.
    ID     | Login user               | Date and time    | Action(s)      | Altered
    -------------------------------------------------------------------------------
        19 |  <rack>                  | 2020-06-09 14:58 | Install        |    2   
        18 |  <rack>                  | 2020-06-09 14:57 | Erase          |    2   
        17 |  <rack>                  | 2020-06-09 14:56 | Install        |    1   
        16 |  <rack>                  | 2020-06-09 14:55 | Install        |    4   
        15 |  <rack>                  | 2020-06-09 14:55 | Erase          |    2   
        14 |  <rack>                  | 2020-06-09 14:54 | Erase          |    1   
        13 |  <rack>                  | 2020-06-09 14:50 | Install        |    1   
        12 |  <rack>                  | 2020-06-09 14:49 | Erase          |    2   
        11 | root <root>              | 2020-06-09 10:14 | I, U           |    2   
        10 | root <root>              | 2020-06-09 10:14 | Install        |    2 EE
         9 |  <rack>                  | 2020-06-09 10:14 | Install        |    4   
         8 | root <root>              | 2020-06-09 10:14 | Install        |    1 EE
         7 |  <rack>                  | 2020-06-09 10:14 | Install        |    5   
         6 | root <root>              | 2020-06-09 10:13 | Install        |    4   
         5 | root <root>              | 2020-06-09 10:13 | I, U           |   18  <
         4 | System <unset>           | 2020-01-15 13:02 | Install        |    1 > 
         3 | System <unset>           | 2020-01-15 13:02 | Install        |    1   
         2 | System <unset>           | 2020-01-15 13:02 | Erase          |    1   
         1 | System <unset>           | 2020-01-15 12:55 | Install        |  578   
    history list

This list provides only the date, action, and number of the altered package. To get more information
on a specific action, you can query the `ID` from the left column. Use the following command to view
information on the action: 

       yum history info <ID>

Running this command provides more information about what took place during this transaction: 

    # yum history info 18
    Loaded plugins: langpacks, product-id, rhnplugin, search-disabled-repos, subscription-manager
    This system is receiving updates from RHN Classic or Red Hat Satellite.
    Transaction ID : 18
    Begin time     : Tue Jun  9 14:57:12 2020
    Begin rpmdb    : 609:12b0c5cdd97ae2f0a77a06403b7b16f3d404403c
    End time       :            14:57:13 2020 (1 seconds)
    End rpmdb      : 607:784f813e94127f71465085cd9437377514697243
    User           :  <rack>
    Return-Code    : Success
    Command Line   : remove httpd
    Transaction performed with:
        Installed     rpm-4.11.3-40.el7.x86_64                    @anaconda/7.7
        Installed     subscription-manager-1.24.13-3.el7_7.x86_64 @base/7.7
        Installed     yum-3.4.3-167.el7.noarch                    @rhel-x86_64-server-7
        Installed     yum-rhn-plugin-2.0.1-10.el7.noarch          @anaconda/7.7
    Packages Altered:
        Erase httpd-2.4.6-93.el7.x86_64         @rhel-x86_64-server-7
        Erase mod_php73-7.3.18-1.el7.ius.x86_64 @ius
    history info

If you need to undo a change, you must use the following command: 

    yum history undo <ID>

This command provides information on what this action changes and asks for confirmation. 

    # yum history undo 13
    Loaded plugins: langpacks, product-id, rhnplugin, search-disabled-repos, subscription-manager
    This system is receiving updates from RHN Classic or Red Hat Satellite.
    Undoing transaction 13, from Tue Jun  9 14:50:18 2020
        Install httpd-2.4.6-93.el7.x86_64 @rhel-x86_64-server-7
    Resolving Dependencies
    --> Running transaction check
    ---> Package httpd.x86_64 0:2.4.6-93.el7 will be erased
    --> Processing Dependency: httpd-mmn = 20120211x8664 for package: mod_php73-7.3.18-1.el7.ius.x86_64
    --> Running transaction check
    ---> Package mod_php73.x86_64 0:7.3.18-1.el7.ius will be erased
    --> Finished Dependency Resolution
    drivesrvr                                                                                        | 2.9 kB  00:00:00     

    Dependencies Resolved

    ======================================================================================================================
     Package                    Arch               Version                        Repository                       Size
    ======================================================================================================================
    Removing:
     httpd                      x86_64           2.4.6-93.el7                 @rhel-x86_64-server-7                3.7 M
    Removing for dependencies:
     mod_php73                  x86_64           7.3.18-1.el7.ius             @ius                                 4.8 M

    Transaction Summary
    ======================================================================================================================
    Remove  1 Package (+1 Dependent package)

    Installed size: 8.6 M
    Is this ok [y/N]:

If you want to roll back all the changes to a specific transaction, use the following command:

    yum history rollback <ID>

This command shows you what this action changes and asks for confirmation. Depending on how far
you want to rollback, this list can be extensive. The output is similar to the following example: 

    # yum history rollback 17
    Loaded plugins: langpacks, product-id, rhnplugin, search-disabled-repos, subscription-manager
    This system is receiving updates from RHN Classic or Red Hat Satellite.
    Rollback to transaction 17, from Tue Jun  9 14:56:03 2020
      Undoing the following transactions: 18, 19
        Reinstall httpd-2.4.6-93.el7.x86_64         @rhel-x86_64-server-7
        Reinstall mod_php73-7.3.18-1.el7.ius.x86_64 @ius
    drivesrvr                                                                             | 2.9 kB  00:00:00     
    Resolving Dependencies
    --> Running transaction check
    ---> Package httpd.x86_64 0:2.4.6-93.el7 will be reinstalled
    ---> Package mod_php73.x86_64 0:7.3.18-1.el7.ius will be reinstalled
    --> Finished Dependency Resolution

    Dependencies Resolved

    =====================================================================================================================
     Package                 Arch               Version                        Repository                         Size
    =====================================================================================================================
    Reinstalling:
     httpd                  x86_64             2.4.6-93.el7                   rhel-x86_64-server-7                1.2 M
     mod_php73              x86_64             7.3.18-1.el7.ius               ius                                 1.6 M

    Transaction Summary
    =====================================================================================================================
    Reinstall  2 Packages

    Total download size: 2.8 M
    Installed size: 8.6 M
    Is this ok [y/d/N]:

### Further information

There are more options available within `yum`. You can view the different flags and options in the Linux
`man` page for `yum` at this link: [yum man page](https://www.man7.org/linux/man-pages/man8/yum.8.html) 

Because the `yum` command makes changes to the system, you should always ensure that you've tested your
environment before installing or updating packages. If possible, make sure you have a usable image to roll
back to in the case of any post-update issues. 
