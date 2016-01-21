---
node_id: 502
title: VNC Install
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2016-01-13'
last_modified_by: Nate Archer
product: Cloud Servers
product_url: cloud-servers
---

This page explains how to install VNC on your Cloud Server. This article
was based upon the CentOS 5 distribution. This tutorial assumes you have
root access to your server and are running on a clean installation.

**Note: In order to use this you must have at least 512MB of RAM or X
Windows will not run.**

**WARNING: Running VNC on your Cloud Server will consume large amounts
of bandwidth. Please use wisely!**

If you would like information about tunnelling VNC over SSH please visit
<http://martybugs.net/smoothwall/puttyvnc.cgi>

------------------------------------------------------------------------

Contents
--------

-   [<span class="tocnumber">1</span> <span class="toctext">Install the
    Necessary Packages</span>](#Install_the_Necessary_Packages)
    -   [<span class="tocnumber">1.1</span> <span
        class="toctext">Install Perl</span>](#Install_Perl)
    -   [<span class="tocnumber">1.2</span> <span
        class="toctext">Install X Windows</span>](#Install_X_Windows)
    -   [<span class="tocnumber">1.3</span> <span
        class="toctext">Install a Window
        Manager</span>](#Install_a_Window_Manager)
        -   [<span class="tocnumber">1.3.1</span> <span
            class="toctext">KDE</span>](#KDE)
        -   [<span class="tocnumber">1.3.2</span> <span
            class="toctext">GNOME</span>](#GNOME)
        -   [<span class="tocnumber">1.3.3</span> <span
            class="toctext">TWM</span>](#TWM)
    -   [<span class="tocnumber">1.4</span> <span
        class="toctext">Install VNC Server</span>](#Install_VNC_Server)
-   [<span class="tocnumber">2</span> <span
    class="toctext">Configuration</span>](#Configuration)
    -   [<span class="tocnumber">2.1</span> <span
        class="toctext">Configure VNC</span>](#Configure_VNC)
    -   [<span class="tocnumber">2.2</span> <span
        class="toctext">Firewall</span>](#Firewall)
    -   [<span class="tocnumber">2.3</span> <span class="toctext">Test
        the Server</span>](#Test_the_Server)
        -   [<span class="tocnumber">2.3.1</span> <span
            class="toctext">Switch to your
            User</span>](#Switch_to_your_User)
        -   [<span class="tocnumber">2.3.2</span> <span
            class="toctext">Create a .vnc
            directory</span>](#Create_a_.vnc_directory)
        -   [<span class="tocnumber">2.3.3</span> <span
            class="toctext">Create the xstartup
            file</span>](#Create_the_xstartup_file)
        -   [<span class="tocnumber">2.3.4</span> <span
            class="toctext">Setup your VNC
            user</span>](#Setup_your_VNC_user)
        -   [<span class="tocnumber">2.3.5</span> <span
            class="toctext">Start the VNC
            server</span>](#Start_the_VNC_server)
        -   [<span class="tocnumber">2.3.6</span> <span
            class="toctext">Connect to your
            VNC</span>](#Connect_to_your_VNC)
        -   [<span class="tocnumber">2.3.7</span> <span
            class="toctext">Stopping the VNC
            Server</span>](#Stopping_the_VNC_Server)



<span class="mw-headline">Install the Necessary Packages </span>
----------------------------------------------------------------

This article will assume you know how to use the YUM Update Manager.



### <span class="mw-headline">Install Perl </span>

    # yum install perl



### <span class="mw-headline">Install X Windows </span>

We will need to install the X-Windows platform to run the graphical
portion of this project. X11 is a graphical display server, and will
server and will sit above the Window Manager.

To install run the following as root:

    # yum groupinstall "X Window System"



### <span class="mw-headline">Install a Window Manager </span>

[KDE](http://www.kde.org/ "http://www.kde.org/"),
[GNOME](http://www.gnome.org./ "http://www.gnome.org./") and
[TWM](http://xwinman.org/vtwm.php "http://xwinman.org/vtwm.php") are all
Window Managers and are the human usable layer that you are probably
familiar with. This gives you the access to use a mouse and send calls
to the X11 server.



#### <span class="mw-headline">KDE </span>

    # yum groupinstall "KDE Desktop"

Also, this may be needed:

    # yum install kde-session



#### <span class="mw-headline">GNOME </span>

    # yum groupinstall "GNOME Desktop Environment"

Also, this may be needed:

    # yum install gnome-session



#### <span class="mw-headline">TWM </span>

TWM is the default X-Window Manager and you don't have to install any
additional packages, it is light and will run on almost anything, but is
also not very user friendly and almost requires a power-user.



### <span class="mw-headline">Install VNC Server </span>

VNC is the service that display your X output to a tcp connection over
the internet.

    # yum install vnc-server



<span class="mw-headline">Configuration </span>
-----------------------------------------------



### <span class="mw-headline">Configure VNC </span>

-   Modify the **/etc/sysconfig/vncservers** configuration file by
    performing the following commands:

<!-- -->

    # nano /etc/sysconfig/vncservers

Insert the following lines into the file:

    VNCSERVERS="1:someguy"
    VNCSERVERARGS[1]="-geometry 800x600 -depth 16"

This will create a VNC session for one user with the username of
**someguy**. If you would like to setup multiple users you will need to
add additional users to that line. For example...

    1:someguy 2:someperson 3:somegirl

You will also need to add additional VNCSERVERARGS lines to correspond
to each user. Change the \[1\] to match the session number.



### <span class="mw-headline">Firewall </span>

If you have a firewall running, you will need to open port 5901. For
example, on CentOS, run:

    # iptables -I INPUT 1 -p tcp --dport 5901 -j ACCEPT

If needed, replace 5901 with a range, depending on the number of
sessions required (e.g. 5901:5905).

Save the new iptables rule:

    # service iptables save



### <span class="mw-headline">Test the Server </span>



#### <span class="mw-headline">Switch to your User </span>

    # su username
    $ cd ~



#### <span class="mw-headline">Create a .vnc directory </span>

*take note of the '.' in front of the name*

    $ mkdir .vnc
    $ cd .vnc



#### <span class="mw-headline">Create the xstartup file </span>

Insert the configuration below (this is for a KDE-VNC session):

    #!/bin/sh
    unset SESSION_MANAGER
    exec /etc/X11/xinit/xinitrc
    [ -x /etc/vnc/xstartup ] && exec /etc/vnc/xstartup
    [ -r $HOME/.Xresources ] && xrdb $HOME/.Xresources
    xsetroot -solid grey
    vncconfig -iconic &
    xterm -geometry 80x24+10+10 -ls -title "$VNCDESKTOP Desktop" &

    startx &
    exec kde-session &

-   If you are using GNOME, change 'kde-session' to 'gnome-session'

Make the file executable:

    $ chmod u+x xstartup



#### <span class="mw-headline">Setup your VNC user </span>

Set the user's private VNC connection password

    # vncpasswd

-   You will be required to confirm your password.



#### <span class="mw-headline">Start the VNC server </span>

Make sure you exit out of your user session and go back to 'root'.

start the server:

    # service vncserver start

-   You may see some error messages here stating 'unexpected EOF' or
    syntax errors -- these are normal. If you see **\[ OK \]** then the
    service has started properly.



#### <span class="mw-headline">Connect to your VNC </span>

Open up your VNC client and type in your external IP address, colon,
then your session ID configured in **/etc/sysconfig/vncservers**. The
session number must correspond to the user name or it will not connect.

Example: 64.25.25.25:1

-   Type in the password you chose with vncpasswd and you will
    be connected.


To close the connection simple close the window.



#### <span class="mw-headline">Stopping the VNC Server </span>

To stop the VNC server type the following:

    # service vncserver stop


