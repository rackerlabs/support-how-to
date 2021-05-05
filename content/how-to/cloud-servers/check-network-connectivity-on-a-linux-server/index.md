---
permalink: check-network-connectivity-on-a-linux-server
audit_date: '2020-06-11'
title: 'Check network connectivity on a Linux server'
type: article
created_date: '2020-06-09'
created_by: Matthew Brown
last_modified_date: '2020-06-11'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to check networking from outside the Linux&reg; server by using tools such as `ping`,
`traceroute`, `nmap`, and so on.

### Troubleshooting tools

Often, you need to troubleshoot network connectivity on a server, but you cannot log in to the server.
These tools help you to troubleshoot problems from outside the server.

#### `ping` and `traceroute`

These tools are the most basic tools for troubleshooting network connectivity from outside the server.

The `ping` command sends a packet request to the server. If the packet reaches the server, a reply
similar to the following example displays:

    $ ping google.com
    PING google.com (172.217.1.46) 56(84) bytes of data.
    64 bytes from ord37s07-in-f46.1e100.net (172.217.1.46): icmp_seq=1 ttl=54 time=1.76 ms
    64 bytes from ord37s07-in-f46.1e100.net (172.217.1.46): icmp_seq=2 ttl=54 time=1.84 ms
    64 bytes from ord37s07-in-f46.1e100.net (172.217.1.46): icmp_seq=3 ttl=54 time=1.73 ms
    64 bytes from ord37s07-in-f46.1e100.net (172.217.1.46): icmp_seq=4 ttl=54 time=1.79 ms
    ^C
    --- google.com ping statistics ---
    4 packets transmitted, 4 received, 0% packet loss, time 9015ms
    rtt min/avg/max/mdev = 1.683/1.859/2.444/0.203 ms

**Note**: Some servers have Internet Control Message Protocol (ICMP) disabled, which means that `ping`
probes are blocked. Thus, you don't get a response from `ping`, but that doesn't mean networking is down.

The `traceroute` command traces the network hops from your local machine to the host server. This
tool helps you to determine if there is an issue between your computer and the host server. The following
example shows the `traceroute` command and its output:

    $ traceroute google.com
    traceroute to google.com (172.217.1.142), 30 hops max, 60 byte packets
    1  23.253.71.2 (23.253.71.2)  1.098 ms 23.253.71.3 (23.253.71.3)  1.004 ms 23.253.71.2 (23.253.71.2)  1.157 ms
    2  aggr160a-4-core10.dfw3.rackspace.net (98.129.84.204)  1.074 ms  1.725 ms aggr160b-4-core10.dfw3.rackspace.net   (98.129.84.206)  1.712 ms
    3  corec-core9.dfw3.rackspace.net (148.62.41.124)  1.009 ms corec-core10.dfw3.rackspace.net (148.62.41.134)  1.376 ms      corec-core9.dfw3.rackspace.net (148.62.41.136)  1.171 ms
    4  dcpe3-corec.dfw3.rackspace.net (148.62.41.96)  2.009 ms dcpe4-cored.dfw3.rackspace.net (148.62.41.98)  1.994 ms dcpe3-cored.dfw3.rackspace.net (148.62.41.100)  2.063 ms
    5  be2-mspe4.dfw30.rackspace.net (10.25.1.119)  2.724 ms  2.792 ms  2.881 ms
    6  72.14.221.26 (72.14.221.26)  2.517 ms  1.317 ms  1.366 ms
    7  108.170.252.129 (108.170.252.129)  1.406 ms  1.508 ms 108.170.252.161 (108.170.252.161)  2.480 ms
    8  209.85.244.59 (209.85.244.59)  2.212 ms  2.399 ms 209.85.243.255 (209.85.243.255)  2.431 ms
    9  atl14s07-in-f142.1e100.net (172.217.1.142)  1.768 ms  1.722 ms  1.817 ms

#### `curl`

The `curl` command, used to transfer data to or from a server, has many features and tools. For
troubleshooting a website, use the flags `IL` and `ILk` (for use with HTTPS sites). These flags return the
status codes of the sites. They also list any redirects that are in front of the server. The output
looks similar to the following example:

    $ curl -IL https://google.com
    HTTP/1.1 301 Moved Permanently
    Location: https://www.google.com/
    Content-Type: text/html; charset=UTF-8
    Date: Sat, 06 Jun 2020 00:51:12 GMT
    Expires: Mon, 06 Jul 2020 00:51:12 GMT
    Cache-Control: public, max-age=2592000
    Server: gws
    Content-Length: 219
    X-XSS-Protection: 0
    X-Frame-Options: SAMEORIGIN

    HTTP/1.1 200 OK
    Content-Type: text/html; charset=ISO-8859-1
    P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info."
    Date: Sat, 06 Jun 2020 00:51:12 GMT
    Server: gws
    X-XSS-Protection: 0
    X-Frame-Options: SAMEORIGIN
    Transfer-Encoding: chunked
    Expires: Sat, 06 Jun 2020 00:51:12 GMT
    Cache-Control: private
    Set-Cookie: 1P_JAR=2020-06-06-00; expires=Mon, 06-Jul-2020 00:51:12 GMT; path=/; domain=.google.com; Secure
    Set-Cookie:    NID=204=TAwW41Xd8265avwh4_xx_BkbXwhIgpKFV4pADCq00xw4drIPhdWNJaKlJplrxby8xJksIntdx3uBERj9S1gHTrf56S4XPpCAEjI0uZmpaQIeS79ZfYeMGh33hq4cnGZLU6g0ATclpSK7ZNOEIroqLuDMYvfUuJ6FgeFbYJaQ1fQ; expires=Sun, 06-Dec-2020 00:51:12 GMT; path=/; domain=.google.com; HttpOnly


    $ curl -ILk https://google.com
    HTTP/1.1 301 Moved Permanently
    Location: https://www.google.com/
    Content-Type: text/html; charset=UTF-8
    Date: Sat, 06 Jun 2020 00:51:28 GMT
    Expires: Mon, 06 Jul 2020 00:51:28 GMT
    Cache-Control: public, max-age=2592000
    Server: gws
    Content-Length: 220
    X-XSS-Protection: 0
    X-Frame-Options: SAMEORIGIN
    Alt-Svc: h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"

    HTTP/1.1 200 OK
    Content-Type: text/html; charset=ISO-8859-1
    P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info."
    Date: Sat, 06 Jun 2020 00:51:28 GMT
    Server: gws
    X-XSS-Protection: 0
    X-Frame-Options: SAMEORIGIN
    Transfer-Encoding: chunked
    Expires: Sat, 06 Jun 2020 00:51:28 GMT
    Cache-Control: private
    Set-Cookie: 1P_JAR=2020-06-06-00; expires=Mon, 06-Jul-2020 00:51:28 GMT; path=/; domain=.google.com; Secure
    Set-Cookie: NID=204=A4RYGnwtQmMAh8q4rF6bajtuadHU9OU0AbEfw529GZ74aeLM2voJmdhhG67rBGPmzWKPEea38LBu0FcSOEV1Fjiqnet26amxXQaCsRigOMuhOO4RCkSozOFZCn6uX00DWvDZ4ps3n0aoupaDQh1GrwGtEmkpfJ7_7sO4VHIaUmg; expires=Sun, 06-Dec-2020 00:51:28 GMT; path=/; domain=.google.com; HttpOnly
    Alt-Svc: h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"

#### `nmap`

Use the `nmap` command to scan the ports for a specific host. Some servers do not have this utility
installed by default, so you might need to install it on your local machine. If you cannot connect
to a server by using a specific protocol (even though the server is running), you can run the `nmap`
command to see if the port is closed or filtered. Here is an example of the output:

    $ nmap x.x.x.x

    Starting Nmap 6.40 ( https://nmap.org ) at 2020-06-06 00:56 UTC
    Nmap scan report for x.x.x.x
    Host is up (0.037s latency).
    Not shown: 992 closed ports
    PORT     STATE SERVICE
    22/tcp   open  ssh
    25/tcp   open  smtp
    80/tcp   open  http
    443/tcp  open  https
    8080/tcp open  http-proxy
    8443/tcp open  https-alt

    Nmap done: 1 IP address (1 host up) scanned in 0.61 seconds

If you try all of these methods and still cannot reach the server, see
[Troubleshoot a downed Linux cloud server](/support/how-to/troubleshoot-a-downed-linux-cloud-server)
for more steps.
