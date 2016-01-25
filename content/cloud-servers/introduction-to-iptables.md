---
node_id: 362
title: Introduction to iptables
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2015-12-08'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to use IP tables for a simple firewall, and
describes the process to open up holes in your firewall to necessary
ports. An <span>IP table is a firewall and networking tool available to
all Linux distros and operates by analyzing packets at the kernel level
as they are received.</span>

For a comprehensive list of IP tables commands, parameters, and other
options, see the [MAN page](http://linux.die.net/man/8/iptables) and the
[IP tables how-to](https://help.ubuntu.com/community/IptablesHowTo/).

------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><div id="toctitle">
<h2 id="contents">Contents</h2>
</div>
<ul>
<li><a href="#The_Base_Ruleset"><span class="tocnumber">1</span> <span class="toctext">The Base Ruleset</span></a>
<ul>
<li><a href="#Reading_the_Ruleset"><span class="tocnumber">1.1</span> <span class="toctext">Reading the Ruleset</span></a></li>
<li><a href="#Policies"><span class="tocnumber">1.2</span> <span class="toctext">Policies</span></a></li>
</ul></li>
<li><a href="#Available_Options"><span class="tocnumber">2</span> <span class="toctext">Available Options</span></a>
<ul>
<li><a href="#COMMANDS"><span class="tocnumber">2.1</span> <span class="toctext">COMMANDS</span></a></li>
<li><a href="#PARAMETERS"><span class="tocnumber">2.2</span> <span class="toctext">PARAMETERS</span></a></li>
<li><a href="#OTHER_OPTIONS"><span class="tocnumber">2.3</span> <span class="toctext">OTHER OPTIONS</span></a></li>
</ul></li>
<li><a href="#Simple_Firewall"><span class="tocnumber">3</span> <span class="toctext">Simple Firewall</span></a>
<ul>
<li><a href="#Simple_Rules"><span class="tocnumber">3.1</span> <span class="toctext">Simple Rules</span></a>
<ul>
<li><a href="#Allow_connections_that_are_already_connected_to_your_server."><span class="tocnumber">3.1.1</span> <span class="toctext">Allow connections that are already connected to your server.</span></a></li>
<li><a href="#Allow_connections_to_SSH"><span class="tocnumber">3.1.2</span> <span class="toctext">Allow connections to SSH</span></a></li>
<li><a href="#Allowing_connections_to_HTTP.2FHTTPS"><span class="tocnumber">3.1.3</span> <span class="toctext">Allowing connections to HTTP/HTTPS</span></a></li>
<li><a href="#Allowing_connections_to_FTP"><span class="tocnumber">3.1.4</span> <span class="toctext">Allowing connections to FTP</span></a></li>
<li><a href="#List_of_common_Ports"><span class="tocnumber">3.1.5</span> <span class="toctext">List of common Ports</span></a></li>
</ul></li>
<li><a href="#Changing_the_Default_Policy"><span class="tocnumber">3.2</span> <span class="toctext">Changing the Default Policy</span></a></li>
</ul></li>
<li><a href="#Save_Save_Save_your_Ruleset"><span class="tocnumber">4</span> <span class="toctext">Save Save Save your Ruleset</span></a></li>
<li><a href="#Summary"><span class="tocnumber">5</span> <span class="toctext">Summary</span></a></li>
<li><a href="#References_and_links"><span class="tocnumber">6</span> <span class="toctext">References and links</span></a></li>
</ul></td>
</tr>
</tbody>
</table>





<span class="mw-headline">The Base Ruleset </span>
--------------------------------------------------

-   List of the Current rules

<!-- -->

    $ sudo iptables --list

Your output is going to look like the following if you haven't made any
changes:

    Chain INPUT (policy ACCEPT)
    target     prot opt source               destination

    Chain FORWARD (policy ACCEPT)
    target     prot opt source               destination

    Chain OUTPUT (policy ACCEPT)
    target     prot opt source               destination



### <span class="mw-headline">Reading the Ruleset </span>

In a default install you will see three predefined Chains that will take
care of the three major activities: Incoming Traffic, Forwarded Traffic
and Outgoing Traffic. The "policy" is probably the most important thing
to take away from the above table. The policy is the default ruleset for
that particular Chain, with a standard install all policies will be
"Accept".



### <span class="mw-headline">Policies </span>

The available policies and other options are extensive, if you would
like to know more about them check out the '[man
page](http://linux.die.net/man/8/iptables "http://linux.die.net/man/8/iptables")'
for IPtables. In the scope of this article I will only cover the
following three policies which are the most common:

-   Accept - This is used to explicitly pass through as long as no
    target rules apply.

<!-- -->

-   Reject - This is used to send back an error packet in response to
    the matched packet: otherwise it is equivalent to DROP so it is a
    terminating TARGET, ending rule traversal.

<!-- -->

-   Drop - This policy will halt a connection to a host without any
    communication unless there is a target rule that applies.



<span class="mw-headline">Available Options</span>
--------------------------------------------------

IPtables MAN page: <http://linux.die.net/man/8/iptables>

The options that are recognized by iptables can be divided into several
different groups:

-   <span class="mw-headline">Commands - </span>These options specify a
    specific action to perform.
-   <span class="mw-headline">Parameters - </span>Parameters set rule
    specifications for the commands used.
-   <span class="mw-headline">Other Options - </span>Other options can
    be specified, as necessary, for commands used.

<span class="mw-headline">Simple Firewall </span>
-------------------------------------------------



### <span class="mw-headline">Simple Rules </span>



#### <span class="mw-headline">Allow connections that are already connected to your server. </span>

    $ sudo iptables -A INPUT -i eth0 -m state --state ESTABLISHED,RELATED -j ACCEPT



#### <span class="mw-headline">Allow connections to SSH </span>

Ok, in this case we can make a few different choices, the choices can be
applied to other ports or situations to make customizations.

In this command, we will allow connections for all tcp connections
attempts at SSH connections.

    $ sudo iptables -I INPUT 1 -p tcp  --dport 22 -j ACCEPT

In this command, we will allow connections only coming from a certain IP
subnet using
[CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing "http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing")
notation. In this example we are going to lockdown to any IP address
lying in the range of 192.168.1.0 - 192.168.1.255

    $ sudo iptables -I INPUT 1 -p tcp --dport 22 -s 192.168.1.0/24 -j ACCEPT



#### <span class="mw-headline">Allowing connections to HTTP/HTTPS </span>

The following iptables rules will allow connections from both port 80
(HTTP) and port 443 (HTTPS) from any connections.

    $ sudo iptables -I INPUT 1 -p tcp --dport 80 -j ACCEPT
    $ sudo iptables -I INPUT 1 -p tcp --dport 443 -j ACCEPT



#### <span class="mw-headline">Allowing connections to FTP </span>

The following iptables rules will allow connections for FTP servers on
port 21.

    $ sudo iptables -I INPUT 1 -p tcp --dport 21 -j ACCEPT



#### <span class="mw-headline">List of common Ports </span>

Using what you've learned from the above use the following list of
[common
ports](http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well_known_ports:_1_-_1023 "http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well_known_ports:_1_-_1023")
from the link to create rules for any running server you have.



### <span class="mw-headline">Changing the Default Policy </span>

The only real policy change that we are going to make is going to effect
incoming traffic, as a general rule we are going to Drop all
connections, and only allow those we have deemed legit.

    $ sudo iptables -P INPUT DROP

-   **This rule should be run only after you have setup your access
    rules to allow you to ssh in.**



<span class="mw-headline">Save Save Save your Ruleset </span>
-------------------------------------------------------------

If your server reboots for any reason or you restart IPTables you will
loose your changes. The rules that you input by hand are stored in
volatile memory. Make sure that you save IPtables rules for any change
you want to make permanent you will need one of the following commands:

-   for CentOS and Fedora

<!-- -->

    # /etc/init.d/iptables save

-   for Ubuntu

<!-- -->

    # iptables-save > /etc/iptables.rules

-   for all other Distros

<!-- -->

    # iptables-save > /etc/sysconfig/iptables

The above commands will create a file /etc/sysconfig/iptables that will
be a flat file with human readable syntax that can be edited by hand if
necessary. All edits to this file will be live whenever iptables is
restarted.



<span class="mw-headline">Summary </span>
-----------------------------------------

Hopefully from this article you can create a simple firewall to protect
your server from basic attacks. Keep in mind that IPTables is a very
powerful tool that would take a book to fully go through all of its
abilities. My next networking article will go through a few simple
networking tricks like port forwarding and NATing. If you need help
creating more rules, see [Easy Firewall Generator for
IPTables](http://easyfwgen.morizot.net/gen/ "http://easyfwgen.morizot.net/gen/").



<span class="mw-headline">References and links </span>
------------------------------------------------------

-   [Ubuntu IPtables
    Howto](https://help.ubuntu.com/community/IptablesHowTo/ "https://help.ubuntu.com/community/IptablesHowTo/")
-   [Man
    IPtables](http://linux.die.net/man/8/iptables "http://linux.die.net/man/8/iptables")


[List of
Articles](/knowledge_center/index.php/List_of_Articles "List of Articles")

<div class="printfooter">

Retrieved from
"[/knowledge\_center/index.php/Introduction\_to\_iptables](http://www.rackspace.com/knowledge_center/index.php/Introduction_to_iptables)"

</div>

