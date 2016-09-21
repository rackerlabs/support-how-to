---
permalink: troubleshooting-when-your-website-is-down/
audit_date:
title: Troubleshooting when your website is down
type: article
created_date: '2016-09-08'
created_by: Nate Archer
last_modified_date: '2016-09-16'
last_modified_by: Nate Archer
product: Cloud Servers
product_url: cloud-servers
---

More than half of all deployment issues involves an inaccessible of downed website. The causes of a website being offline are often simple and easy to fix. This article describes how to troubleshoot a downed website.

**Note:** This article assumes knowledge of networking tools such as `ping` and `nmap` and `traceroute`. Go to [Basic network troubleshooting](how-to/basic-network-troubleshooting) for more information on these tools.

### Prerequisites

Gather the following information before troubleshooting your downed site:

- The URL of your website
- The name and IP address of the server the site is hosted on
- A list of methods you have tried to resolve the issues

### Troubleshooting steps

1. Try accessing your website through a web browser.

  - If the site does not load or you receive a "Server Not Found" message, move on to the next step.

  - If the site loads, but there is an error page visible, look over your current deployment configuration.

    **Note:** Rackspace support cannot assist with configuration errors

  - If the site loads and functions as intended, load the site through a different web browser. It is possible that you are experiencing [network issues].

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

    $ ping website.com
    PING website.com (104.130.7.75) 56(84) bytes of data.
    64 bytes from 104.130.7.75: icmp_seq=1 ttl=55 time=32.4 ms
    64 bytes from 104.130.7.75: icmp_seq=2 ttl=55 time=32.2 ms
    64 bytes from 104.130.7.75: icmp_seq=3 ttl=55 time=32.2 ms
    64 bytes from 104.130.7.75: icmp_seq=4 ttl=55 time=32.2 ms
    64 bytes from 104.130.7.75: icmp_seq=5 ttl=55 time=32.2 ms
    ^C
    --- website.com ping statistics ---
    5 packets transmitted, 5 received, 0% packet loss, time 4008ms
    rtt min/avg/max/mdev = 32.208/32.261/32.429/0.141 ms

  If you receive a `ping: unknown host` response, check your DNS settings for missing or misconfigured A record.

4. Run the `nmap` command on the IP address of your server. If port 80 is shown as `open` and utilizing `http`, move on the "Load the console" section.

    # nmap website.com
     
    Starting Nmap 5.51 ( http://nmap.org ) at 2016-08-25 12:23 UTC
    Nmap scan report for website.com (104.130.8.75)
    Host is up (0.0000060s latency).
    rDNS record for 104.130.8.75: elector
    Not shown: 997 closed ports
    PORT     STATE SERVICE
    21/tcp   open  ftp
    80/tcp   open  http
    3306/tcp open  mysql
     
    Nmap done: 1 IP address (1 host up) scanned in 0.07 seconds

  If port 80 shows as `closed` or `filtered`, make sure that the web service for your server is running and that port 80 is open on your server's firewall.

    # nmap -Pn -p 443 website.com
     
    Starting Nmap 5.51 ( http://nmap.org ) at 2016-08-25 12:25 UTC
    Nmap scan report for website.com (104.130.8.75)
    Host is up (0.000052s latency).
    rDNS record for 104.130.8.75: elector
    PORT    STATE  SERVICE
    443/tcp closed https
     
    Nmap done: 1 IP address (1 host up) scanned in 0.05 seconds

### Testing your connection using your server's console

Even if your website appears back online after performing the preceding steps, you need to test your websites connectivity using the console the cloud server that hosts your website. To access your server's console:

1. Log in to the [Cloud Control Panel](https://mycloud.rackspace.com/).

2. Click **Cloud Servers**.

3. Click the gear next to the name of the server that hosts your website and select **Connect via Console**.

Use the following to test your servers connectivity using the console:

**For linux servers**

Press **enter** to see if the server is responsive during the log in process. If the server is responsive, you should see the following login prompts each time you press **enter**.

    CentOS Linux 7 (Core)
    Kernel 3.10.0-327.22.2.e17.x86_64 on an x86_64
 
    server-01 login:
 
    CentOS Linux 7 (Core)
    Kernel 3.10.0-327.22.2.e17.x86_64 on an x86_64
 
    server-01 login:

If you press **enter** you might receive an `Out of memory` error.

    kernel: Out of memory: Kill process 9163 (mysqld) score 511 or sacrifice child
    kernel: Killed process 9163, UID 27, (mysqld) total-vm:2457368kB, anon-rss:816780kB, file-rss:4kB

If you receive this error:

- Reboot your server and attempt to use the server's console again.

- If the `Out of memory` error occurs again, determine whether you need to resize your server, or tweak your configuration for scalability.

**For Windows servers**

Use **CTRL ALT DELETE** to see if the server prompts your to login. If prompted to login, your server is powered on and active. Your website should be up and running.

If using **CTRL ALT DELETE** switches the console to a blank screen, your server has likely crashed, reboot your server. If rebooting does not cause the login prompt to occur after opening up the console again, press **ESC**.

**Note:** If you cannot connect to your Window's servers console at all, contact support to ensure that your host is not down.


If none of the preceeding troubleshooting steps bring your website online, review the steps in [Basic network troubleshooting](how-to/basic-network-troubleshooting) before contacting Rackspace support.
