---
permalink: common-network-troubleshooting-tools/
audit_date:
title: Common network troubleshooting tools
type: article
created_date: '2016-10-03'
created_by: Nate Archer
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

This article is designed to help you troubleshoot network connectivity issues using common networking tools. You can utilize some or all of those tools listed in the article for your networking purposes.

### Tools installed by default

The following tools are installed on all Windows, Mac, and Linux operating systems and servers by default.

#### Ping

Ping is a computer network administration software utility used to test how reachable a host on an Internet Protocol (IP) network is. It also measures the amount of time messages (listed in the output as `packets`) take to send from originating host of to a destination computer and back.

Ping commands require no flags to test. Simply use enter the command `ping` followed by the URL or IP addresses of the website you are testing. You can find the IP Address of your website in the **Servers** section of the [Cloud control panel](https://mycloud.rackspace.com/).

    ping google.com

**Good Ping response**

If `ping` indicates an equal amount of `packets` transmitted and received, as well as a response time of under 100ms in the US and under 200ms outside of the US (as shown in the following example), no networking issues exist:

    $ ping google.com
    PING google.com (216.58.218.238) 56(84) bytes of data.
    64 bytes from iad23s40-in-f14.1e100.net (216.58.218.238): icmp_seq=1 ttl=55 time=0.971 ms
    64 bytes from iad23s40-in-f14.1e100.net (216.58.218.238): icmp_seq=2 ttl=55 time=0.983 ms
    64 bytes from iad23s40-in-f14.1e100.net (216.58.218.238): icmp_seq=3 ttl=55 time=0.924 ms
    64 bytes from iad23s40-in-f14.1e100.net (216.58.218.238): icmp_seq=4 ttl=55 time=0.957 ms
    64 bytes from iad23s40-in-f14.1e100.net (216.58.218.238): icmp_seq=5 ttl=55 time=0.981 ms
    ^C
    --- google.com ping statistics ---
    5 packets transmitted, 5 received, 0% packet loss, time 4007ms
    rtt min/avg/max/mdev = 0.924/0.963/0.983/0.029 ms

**Bad Ping response**

If no packets are received, like in the following example, this doesn't mean that the network is down. However, it may warrant additional troubleshooting.

    $ ping -c 5 engadget.com
    PING engadget.com (149.174.110.102) 56(84) bytes of data.

    --- engadget.com ping statistics ---
    5 packets transmitted, 0 received, 100% packet loss, time 3999ms

<----We probably need to add some troubleshooting steps, particularly how to see if ping response has been disabled on the customers cloud server---->

#### Traceroute

Traceroute is a computer network diagnostic tool for displaying the route (path) and measuring transit delays of packets across an IP network.

This is particularly useful for identifying network latency issues by using the `traceroute` command followed by URL of the website you wish to test.

    $ traceroute google.com
    traceroute to google.com (216.58.217.174), 30 hops max, 60 byte packets
    1  162.242.237.3 (162.242.237.3)  0.644 ms  0.623 ms  0.740 ms
    2  aggr403b-9-core8.iad3.rackspace.net (72.4.122.254)  1.217 ms  2.539 ms aggr403b-9-core7.iad3.rackspace.net (72.4.122.250)  1.205 ms
    3  core7-corea.iad3.rackspace.net (69.20.2.96)  1.177 ms core7-coreb.iad3.rackspace.net (69.20.2.112)  1.237 ms  0.962 ms
    4  dcpe1-coreb.iad3.rackspace.net (69.20.2.164)  1.492 ms  1.148 ms dcpe1-corea.iad3.rackspace.net (69.20.2.160)  1.502 ms
    5  be2-mspe4.iad30.rackspace.net (10.25.2.99)  1.712 ms  1.465 ms be1-mspe4.iad30.rackspace.net (10.25.2.83)  1.527 ms
    6  72.14.203.106 (72.14.203.106)  3.746 ms  0.965 ms  0.937 ms
    7  209.85.253.197 (209.85.253.197)  1.062 ms 209.85.251.249 (209.85.251.249)  1.022 ms  1.009 ms
    8  209.85.143.143 (209.85.143.143)  1.570 ms 209.85.143.145 (209.85.143.145)  1.092 ms 209.85.143.143 (209.85.143.143)  1.523 ms
    9  iad23s44-in-f14.1e100.net (216.58.217.174)  0.971 ms  0.962 ms  0.943 ms

To learn more about how to troubleshoot latency issues with **Traceroute** see the MaxCDN tutorial [Reading a Traceroute](https://www.maxcdn.com/one/tutorial/how-to-read-a-traceroute/).


#### Telnet

Telnet is an application layer protocol used on the Internet or local area networks to provide a bidirectional interactive text-oriented communication facility using a virtual terminal connection. User data is interspersed in-band with Telnet control information in an 8-bit byte oriented data connection over the Transmission Control Protocol (TCP).

Telnet is used to to test if a networking port is open by using the command `telnet` followed by the server's IP address and the port number you wish to test.

    telnet 104.130.5.20 22

The following are common `telnet` command flags.

- `-4`: Forces telnet to use IPv4 addresses only.

- `-6`: Forces telnet to use IPv6 addresses only.

**Good Telnet response**

If Telnet connects to the server's IP address through an open port (as shown in the following example), no networking issues exist.

    $ telnet 104.130.5.20 22
    Trying 104.130.5.20...
    Connected to 104.130.5.20.
    Escape character is '^]'.
    SSH-2.0-OpenSSH_5.3

**Note:** Use **CTRL ]** and than enter `exit` to leave the telnet connected state.

**Bad Telnet response**

If the port you attempted a connection though is not open (as shown in the following example), either the connection is refused or the command will become stuck in a `trying` state.

    telnet 104.130.5.20 443
    Trying 104.130.5.20...
    telnet: connect to address 104.130.5.20: Connection refused

**Note:** Use **CTRL c** to break out of a `trying` state.

#### Netcat

Netcat (nc) is a computer networking utility for reading from and writing to network connections using TCP or UDP. It is used to test whether a host's connection succeeds or fails by using the `nc` command, followed by URL and the port you want to test the connectivity of.

    $ nc -vz google.com 80

**Common Flags**

The following are common `netcat` command flags:

- `-v` or `--verbose`: Sets the amount of information you wish to see in each response

- `-4`: Use IPv4 only

- `-6`: Use IPv6 only

- `-z`: Sets netcat to scan for connected servers, without sending any actual data to the servers.


**Good Netcat response**

If netcat connects to the website through the port indicated (as shown in the following example), no network connectivity issues exist.

    $ nc -vz google.com 80
    found 0 associations
    found 1 connections:
        1:    flags=82<CONNECTED,PREFERRED>
        outif utun0
        src 10.15.171.172 port 53429
        dst 216.58.194.110 port 80
        rank info not available
        TCP aux info available

    Connection to google.com port 80 [tcp/http] succeeded!

**Bad Netcat response**

If netcat fails to connect to the website through the port indicated (as shown in the following example), try using the tools described in "Other networking tools"

    $ nc -vz google.com 8080
    nc: connectx to google.com port 8080 (tcp) failed: Operation timed out
    nc: connectx to google.com port 8080 (tcp) failed: No route to host


### Other networking tools

The following tools can be installed on your local system or a Rackspace cloud server.

#### MTR

My traceroute (mtr) combines the functions of the Traceroute and Ping programs. MTR tracks routers on the route path by limiting the number of hops individual packets may traverse. It tracks the response times of hops along the route path.

**Installation**
Mtr is either installed or can be installed on each operating system.

- Linux: Installed by default

- Mac: Enter the command `brew install mtr`

- Windows: Download using the link <http://winmtr.net/download-winmtr/>

**Common Flags**

The following are common flags used with the `mtr` command:

- `-4`:  Use IPv4 only.

- `-6`:  Use IPv6 only.  (IPV4 may be used for DNS lookups).

- `-w`:  This option puts mtr into wide report mode.  When in this mode, mtr will not cut hostnames in the report.

- `-c`: Use this option to set the number of pings sent to determine both the machines on the  network and the reliability of those machines.  Each cycle lasts one second.

- `-b`: Use this option to tell mtr to display both the host names and numeric IP numbers.  In split mode this adds an extra field to the output. In report mode, there is usually too little space to add the IPs, and they will be truncated. Use  the  wide report (-w) mode to see the IPs in report mode.


**Mtr example**

The `mtr` command requires flags to get the desired response with IP addresses and formatting. One of the most commonly used `mtr` flags is `-web4c`, followed by the number of packets you wish MTR to count, then the IP address or URL you wish to send the packets too. A good `mtr` response shows a packet loss of 0%, and a response time below 10ms as shown in response columns `Last`, `Avg`, `Best`, and `Wrst`, as shown in the following example.

    $ mtr -wrb4c 10 google.com
    Start: Fri Apr  8 15:53:25 2016
    HOST: test-cent7--070604apr08                              Loss%   Snt   Last   Avg  Best  Wrst StDev
      1.|-- 162.242.237.3                                       0.0%    10    0.5   0.5   0.4   0.6   0.0
      2.|-- aggr403b-9-core7.iad3.rackspace.net (72.4.122.250)  0.0%    10    1.9   1.3   1.2   1.9   0.0
      3.|-- core7-corea.iad3.rackspace.net (69.20.2.96)         0.0%    10    1.1   1.2   0.9   2.6   0.5
      4.|-- dcpe2-corea.iad3.rackspace.net (69.20.2.168)        0.0%    10    0.9   1.3   0.9   1.7   0.0
      5.|-- be2-mspe4.iad30.rackspace.net (10.25.2.99)          0.0%    10    1.0   1.2   1.0   1.4   0.0
      6.|-- 72.14.203.106                                       0.0%    10    0.7   0.7   0.7   0.8   0.0
      7.|-- 209.85.252.80                                       0.0%    10    1.1   1.0   1.0   1.1   0.0
      8.|-- 72.14.233.97                                        0.0%    10    1.3   1.7   1.2   5.4   1.2
      9.|-- iad23s26-in-f14.1e100.net (172.217.1.206)           0.0%    10    0.9   0.9   0.9   1.0   0.0

#### Nmap

Network Mapper (Nmap) is a security scanner used to discover hosts and services on a computer network, thus creating a "map" of the network. To accomplish its goal, Nmap sends specially crafted packets to the target host and then analyzes the responses.

**Installation**

The following commands or URL's are used to install `nmap` on each operating system.

- Linux: Enter `yum install nmap`

- Mac: Enter `brew install nmap`

- Windows: Download using the link <https://nmap.org/download.html>

**Common flags**

Nmap is most useful when used in conjunction with the following common command flags.

- `-Pn`: (No ping) This option skips the Nmap discovery stage altogether. Normally, Nmap uses this stage to determine active machines for heavier scanning.

- `-sV`:  Enables version detection, as discussed above. Alternatively, you can use -A, which enables version detection among other things.

 - `-v`:  Increases the verbosity level, causing Nmap to print more information about the scan in progress. Open ports are shown as they are found and completion time estimates are provided when Nmap thinks a scan will take more than a few minutes.

 **Nmap example**

 The `nmap` command is best used to test whether or not a port is behind a firewall, and if that firewall is preventing the port from listening to the nmap service, as shown in the following example.

      $ nmap -Pn $IP

      Starting Nmap 6.40 ( http://nmap.org ) at 2016-04-08 15:34 UTC
      Nmap scan report for 23.253.48.249
      Host is up (0.022s latency).
      Not shown: 998 filtered ports
      PORT STATE SERVICE
      80/tcp open http
      443/tcp open https

      Nmap done: 1 IP address (1 host up) scanned in 6.38 seconds
