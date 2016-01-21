---
node_id: 3421
title: A quick start guide to launching the Brocade Vyatta vRouter
type: article
created_date: '2013-04-18'
created_by: Sameer Satyam
last_modified_date: '2016-01-14'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

Introduction
------------

Follow this quick-start guide to spin up a Brocade Vyatta vRouter
(formerly known as Vyatta network appliance). Keep in mind that the
username for logging into the appliance once the appliance is up and
running is &ldquo;vyatta&rdquo; and NOT &ldquo;root.&rdquo; The minimum server size that you
will be able to choose is one with a 1GB RAM.

The configuration basics for this appliance can be found in Chapter 4 of
the quick start guide at

[http://3e851594df14a9eacdef-5cc7866f7aae0a382278b5bce7412a4a.r58.cf1.rackcdn.com/Vyatta-QuickStart\_6.5R1\_v01.pdf](http://bit.ly/ZrdYHq)

Launching the appliance
-----------------------

<span>1. Click on the &ldquo;Create Server&rdquo; button. The Vyatta image should be
listed in the list of images. Look for an image called &ldquo;Vyatta Network
OS 6.5R2&rdquo; and select it.</span>

<span>2. Choose the server size (The minimum size for the server is
1GB).</span>

<span>3. If you have cloud networks enabled, you can create a new
network or choose from an existing network to attach to a server (This
is in addition to PublicNet and ServiceNet).  Do not disable PublicNet
or ServiceNet.</span>

<span>4. Click on &ldquo;Create Server.&rdquo; At this point you should see the
root-password for the appliance. Make note of this password.
</span>**Keep in mind that you will be able to &lsquo;ssh&rsquo; into the appliance
using a username &ldquo;vyatta&rdquo; and NOT &ldquo;root.&rdquo;**

<span>5. Configure the appliance. The appliance can only be configured
via the command-line-interface. You must &lsquo;ssh&rsquo; into the device on the
Public interface with username &ldquo;vyatta&rdquo; and the password from the
previous step (or anything you changed it to).</span>

    $ ssh vyatta@X.X.X.X
    Welcome to Vyatta
    vyatta@x.x.x.x's password:
    Welcome to Vyatta
    Version:      VSE6.5R2
    Description:  Vyatta Subscription Edition 6.5 R2
    Copyright:    2006-2012 Vyatta, Inc.
    Last login: Fri Apr  5 20:07:03 2013 from x.x.x.x
    vyatta@vyatta-thefinal:~$

You are in operational mode. You can run basic commands such as the
following:

    vyatta@vyatta-thefinal:~$ show interfaces

    Codes: S - State, L - Link, u - Up, D - Down, A - Admin Down

    Interface        IP Address                        S/L  Description

    ---------        ----------                        ---  -----------

    eth0             xx.xx.x.xx/24                   u/u  public

    xxxx:xxxx:xxxx:514:xxxx:xxxx:xxxx:xxxx/64

    eth1             10.x.x.x/17                   u/u  private

    eth2             192.168.3.4/24                    u/u  dot-three

    eth3             192.168.1.2/24                    u/u  dot-one

    eth4             192.168.2.16/24                   u/u  dot-two

    lo               127.0.0.1/8                       u/u

    ::1/128

    vyatta@vyatta-thefinal:~$

    vyatta@vyatta-thefinal:~$ show configuration

    interfaces {

       ethernet eth0 {

    address x.x.x.x/24

    address xxxx:xxxx:xxxx:514:xxxx:xxxx:xxxx:xxxx/64

    description public

    duplex auto

    hw-id bc:76:4e:04:90:0a

    smp_affinity auto

    speed auto

    }
    <edited>
    }


You can go into configuration mode by typing the command &lsquo;configure&rsquo;

    $ configure
    [edit]
    vyatta@vyatta-thefinal#

Refer to Chapter 4 of the quick start configuration guide for more
details at

<http://3e851594df14a9eacdef-5cc7866f7aae0a382278b5bce7412a4a.r58.cf1.rackcdn.com/Vyatta-QuickStart_6.5R1_v01.pdf>

References
----------



For Help with Vyatta configuration for specific use cases please refer
to the following links:

Firewall: </how-to/configuring-interface-based-firewall-on-the-vyatta-network-appliance>

Outbound
NAT: </how-to/enable-internet-access-on-cloud-servers-using-snat-on-a-vyatta-network-appliance>

Site-to-Site
VPN: </how-to/configure-a-site-to-site-vpn-using-the-vyatta-network-appliance>

L2TP/IPSec
VPN: </how-to/configure-remote-access-vpn-service-on-a-vyatta-appliance>

Accessing Rackspace Services via Isolated networks using
SNAT: </how-to/accessing-rackspace-services-via-isolated-networks-through-the-vyatta-network-appliance>

Control Panel "Actions" and limitations for
Vyatta: </how-to/brocade-vyatta-vrouter-supported-actions-through-the-cloud-control-panel>



