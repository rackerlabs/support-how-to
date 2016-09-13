---
permalink: troubleshooting-when-your-website-is-down/
audit_date:
title: Troubleshooting when your website is down
type: article
created_date: '2016-09-08'
created_by: Nate Archer
last_modified_date: '2016-09-08'
last_modified_by: Nate Archer
product: Cloud Servers
product_url: cloud-servers
---

More than half of all deployment issues involves an inaccessible of downed website. The causes of a website being offline are often simple and easy to fix. This article describes how to troubleshoot a downed website.

**Note:** This article assumes knowledge of networking tools such as `ping` and `nmap` and `traceroute`.

### Information to gather

Gather the following information before troubleshooting your downed site:

- The URL of your website
- The name and IP address of the server the site is hosted on
- A list of methods you have tried to resolve the issues

### Troubleshooting steps

1. Try accessing your website through a web browser.

  - If the site does not load or you receive a "Server Not Found" message, move on to the next step.
  - If the site loads, but there is an error page visible, proceed to the "Common errors" section of this article.
  - If the site loads and functions as intended, load the site through a different web browser or another location. It is possible that you are experiencing [network issues].

2. Ping your web server using the server's IP address. If you receive a response similar to the following, move on to step 3:

    $ ping 104.130.8.75
    PING 104.130.8.75 (104.130.8.75) 56(84) bytes of data.
    64 bytes from 104.130.8.75: icmp_seq=1 ttl=55 time=32.3 ms
    64 bytes from 104.130.8.75: icmp_seq=2 ttl=55 time=32.3 ms
    64 bytes from 104.130.8.75: icmp_seq=3 ttl=55 time=32.3 ms
    64 bytes from 104.130.8.75: icmp_seq=4 ttl=55 time=32.2 ms
    64 bytes from 104.130.8.75: icmp_seq=5 ttl=55 time=32.3 ms
    ^C
    --- 104.130.8.75 ping statistics ---
    5 packets transmitted, 5 received, 0% packet loss, time 4005ms
    rtt min/avg/max/mdev = 32.283/32.346/32.377/0.118 ms

  If you receive response similar to the following example, move on to the "Load the console" section.  

    $ ping 50.51.225.132
    PING 50.51.225.132 (50.51.225.132) 56(84) bytes of data.
    ^C
    --- 50.51.225.132 ping statistics ---
    5 packets transmitted, 0 received, 100% packet loss, time 3999ms

3. Ping your website by its host name. If you receive a response similar to the following example, move on to step 3:

    $ ping abshier.com
    PING abshier.com (104.130.7.75) 56(84) bytes of data.
    64 bytes from 104.130.7.75: icmp_seq=1 ttl=55 time=32.4 ms
    64 bytes from 104.130.7.75: icmp_seq=2 ttl=55 time=32.2 ms
    64 bytes from 104.130.7.75: icmp_seq=3 ttl=55 time=32.2 ms
    64 bytes from 104.130.7.75: icmp_seq=4 ttl=55 time=32.2 ms
    64 bytes from 104.130.7.75: icmp_seq=5 ttl=55 time=32.2 ms
    ^C
    --- abshier.com ping statistics ---
    5 packets transmitted, 5 received, 0% packet loss, time 4008ms
    rtt min/avg/max/mdev = 32.208/32.261/32.429/0.141 ms

  If you receive a `ping: unknown host` response, check your DNS settings for missing or misconfigured A record.

4. Run `nmap` command on the IP address of your server. If port 80 is shown as `open` and utilizing `http`, move on the "Load the console" section.

    # nmap abshier.com
     
    Starting Nmap 5.51 ( http://nmap.org ) at 2016-08-25 12:23 UTC
    Nmap scan report for abshier.com (104.130.8.75)
    Host is up (0.0000060s latency).
    rDNS record for 104.130.8.75: elector
    Not shown: 997 closed ports
    PORT     STATE SERVICE
    21/tcp   open  ftp
    80/tcp   open  http
    3306/tcp open  mysql
     
    Nmap done: 1 IP address (1 host up) scanned in 0.07 seconds

  If port 80 shows as `closed` or `filtered`, make sure that the web service for your server is running and that port 80 is open on your server's firewall.

    # nmap -Pn -p 443 abshier.com
     
    Starting Nmap 5.51 ( http://nmap.org ) at 2016-08-25 12:25 UTC
    Nmap scan report for abshier.com (104.130.8.75)
    Host is up (0.000052s latency).
    rDNS record for 104.130.8.75: elector
    PORT    STATE  SERVICE
    443/tcp closed https
     
    Nmap done: 1 IP address (1 host up) scanned in 0.05 seconds
