---
permalink: checking-network-connectivity-on-a-server/
audit_date:
title: 'Checking network connectivity on a server'
type: article
created_date: '2020-06-09'
created_by: Matthew Brown
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

In this article, we will explain how to check networking from outside the server by using tools such as ping, traceroute, nmap, etc.


## Troubleshooting tools
A lot of times you will need to troubleshoot network connectivity on a server but you cannot log into the server. These tools will assist you in troubleshooting from outside the server

### ping and traceroute
These are the most basic tools for troubleshooting network connectivity from outside the server. The `ping` command will send a packet request to the server and if it reaches the server, it will display the reply:

```
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
```
One thing to note regarding ping is that some servers will have ICMP disabled (meaning the ping probes will be blocked), so that means you will not get a response from ping but that doesn't mean networking is down.

The `traceroute` command will trace the network hops from your local machine to the host server. This tool is helpful om determining if there is an issue in between your computer and the host server. An example of the command out will look like the following:

```
$ traceroute google.com
traceroute to google.com (172.217.1.142), 30 hops max, 60 byte packets
 1  23.253.71.2 (23.253.71.2)  1.098 ms 23.253.71.3 (23.253.71.3)  1.004 ms 23.253.71.2 (23.253.71.2)  1.157 ms
 2  aggr160a-4-core10.dfw3.rackspace.net (98.129.84.204)  1.074 ms  1.725 ms aggr160b-4-core10.dfw3.rackspace.net (98.129.84.206)  1.712 ms
 3  corec-core9.dfw3.rackspace.net (148.62.41.124)  1.009 ms corec-core10.dfw3.rackspace.net (148.62.41.134)  1.376 ms corec-core9.dfw3.rackspace.net (148.62.41.136)  1.171 ms
 4  dcpe3-corec.dfw3.rackspace.net (148.62.41.96)  2.009 ms dcpe4-cored.dfw3.rackspace.net (148.62.41.98)  1.994 ms dcpe3-cored.dfw3.rackspace.net (148.62.41.100)  2.063 ms
 5  be2-mspe4.dfw30.rackspace.net (10.25.1.119)  2.724 ms  2.792 ms  2.881 ms
 6  72.14.221.26 (72.14.221.26)  2.517 ms  1.317 ms  1.366 ms
 7  108.170.252.129 (108.170.252.129)  1.406 ms  1.508 ms 108.170.252.161 (108.170.252.161)  2.480 ms
 8  209.85.244.59 (209.85.244.59)  2.212 ms  2.399 ms 209.85.243.255 (209.85.243.255)  2.431 ms
 9  atl14s07-in-f142.1e100.net (172.217.1.142)  1.768 ms  1.722 ms  1.817 ms
```

### curl
The `curl` command that is used to transfer data from or to a server. This command has a bunch of features and tools for it but one way it can be useful is by using the flags `IL` and `ILk` (for use with https sites). Using these will return the status codes of the sites. It will also list any redirects that are in front of the server. These can be handy when troubleshooting issues on a website. The example output will look like the following:

```
$ curl -IL http://google.com
HTTP/1.1 301 Moved Permanently
Location: http://www.google.com/
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
Set-Cookie: NID=204=TAwW41Xd8265avwh4_xx_BkbXwhIgpKFV4pADCq00xw4drIPhdWNJaKlJplrxby8xJksIntdx3uBERj9S1gHTrf56S4XPpCAEjI0uZmpaQIeS79ZfYeMGh33hq4cnGZLU6g0ATclpSK7ZNOEIroqLuDMYvfUuJ6FgeFbYJaQ1fQ; expires=Sun, 06-Dec-2020 00:51:12 GMT; path=/; domain=.google.com; HttpOnly


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
```

### nmap
The `nmap` command that is used to scan ports for a specific host. This will not be installed on some servers by default so it will be something you will need to install on your local machine. If the host is up but you are not able to connect to it via a specifi protocol;, you can run the nmap command to see if the port is closed or is being filtered. Here is an example of the output:

```
$ nmap x.x.x.x

Starting Nmap 6.40 ( http://nmap.org ) at 2020-06-06 00:56 UTC
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
```

If you attempt all these steps and you are still not able to reach the server, you can consult this [article][09aa6e79]
 for more steps.

  [09aa6e79]: https://support.rackspace.com/how-to/troubleshoot-a-downed-linux-cloud-server/ "article"
