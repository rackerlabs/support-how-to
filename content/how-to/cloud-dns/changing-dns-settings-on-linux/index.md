---
permalink: changing-dns-settings-on-linux
audit_date: '2018-11-15'
title: Change DNS settings on Linux
type: article
created_date: '2011-07-20'
created_by: Jered Heeschen
last_modified_date: '2019-07-22'
last_modified_by: Stephanie Fillmon
product: Cloud DNS
product_url: cloud-dns
---

If you find that your server's Domain Name Server (DNS) settings are
misconfigured or you prefer to use your own, this article describes how to
change your Linux&reg; server's DNS settings.

If you want to test your site without the test link prior to going live with SSL
or verify that an alias site works prior to DNS changes, you can
[Modify your hosts file](/support/how-to/modify-your-hosts-file) to override the
DNS for a domain on a specific machine.

### Add name servers to the configuration file

On most Linux operating systems, the DNS servers that the system uses for name
resolution are defined in the **/etc/resolv.conf** file. That file should
contain at least one `nameserver` line. Each `nameserver` line defines a DNS
server. The name servers are prioritized in the order the system finds them in
the file. Use the Internet Protocol (IP) addresses of the name servers when
you enter them into the configuration file because the system doesn't know
what to do with domain names until after it knows how to get to the DNS
servers.

In some cases, **/etc/resolv.conf** could be a directly managed file,
populated by the network service (`network` by using initscripts or
`NetworkManager`). To directly edit the configuration file, use the
following steps to add the DNS servers:

1. Open the **resolv.conf** file with an editor, such as `nano`, to make the
   necessary changes. If the file doesn't already exist, this command creates it:

    sudo nano /etc/resolv.conf

2. Add lines for the name servers that you want to use. The following table
   displays which name server IP addresses to use depending on which datacenter
   houses your cloud servers. The "Name server IP address" column shows the
   lines to add to the configuration file:

   | Data center | Name server IP address |
   |---|---|
   | Hong Kong (HKG) | nameserver 120.136.32.62 <br /> nameserver 120.136.32.63 |
   | Northern Virginia (IAD) | nameserver 69.20.0.164 <br /> nameserver 69.20.0.196 |
   | London (LON) | nameserver 83.138.151.80 <br /> nameserver 83.138.151.81 |
   | Chicago (ORD) | nameserver 173.203.4.8 <br /> nameserver 173.203.4.9 |
   | Dallas/Fort Worth (DFW) | nameserver 72.3.128.240 <br /> nameserver 72.3.128.241. |
   | Sydney (SYD) | nameserver 119.9.60.62 <br /> nameserver 119.9.60.63. |
   | Frankfurt (FRA) | nameserver 159.135.130.45 <br /> nameserver 159.135.130.46 |

3. Save the file.

4. To ensure that your new settings are working, `ping` the domain name by
   using the following command:

    ping -c 3 rackspace.com

You should see a result similar to the following one:

    PING rackspace.com (173.203.44.122) 56(84) bytes of data.
    64 bytes from 173.203.44.122: icmp_req=1 ttl=249 time=25.3 ms
    64 bytes from 173.203.44.122: icmp_req=2 ttl=249 time=25.2 ms
    64 bytes from 173.203.44.122: icmp_req=3 ttl=249 time=25.2 ms

    --- rackspace.com ping statistics ---
    3 packets transmitted, 3 received, 0% packet loss, time 2002ms
    rtt min/avg/max/mdev = 25.236/25.292/25.392/0.147 ms

If you receive an `unknown host` message, double-check the IP addresses that
you set as your DNS servers.

#### Add the same name servers with IPv6 addresses

If you're using IPv6 on your server, you might need to add the IPv6
addresses of your name servers to the **resolv.conf** file. You can see if a
DNS server has an IPv6 address by performing the following steps:

1. Use the following `host` command to get the domain name of the server
   (substitute your DNS server IP address):

       $ host 72.3.128.240
       240.128.3.72.in-addr.arpa domain name pointer cachens1.dfw1.rackspace.com.

2. Use the domain name you got back in another `host` lookup:

       $ host cachens1.dfw1.rackspace.com
       cachens1.dfw1.rackspace.com has address 72.3.128.240
       cachens1.dfw1.rackspace.com has IPv6 address 2001:4800:d::1

If an IPv6 address is returned, you can add that as another `nameserver`
line in the **resolv.conf** file, as follows:

    nameserver 2001:4800:d::1

Then test as previously shown, by using the `ping6` command instead of the
regular `ping` command to force the system to use IPv6.

<script type="application/ld+json">
  {
  "@context": "https://schema.org/",
  "@type": "HowTo",
      "name":"Change DNS settings on Linux",
  	  "description": "This article describes how to change your Linux&reg; server's Domain Name Server (DNS) settings if they are misconfigured or you prefer to use your own.",
  	  "step": [
  	   	{
  	   	"@type": "HowToSection",
  	   	"name": "Add name servers to the configuration file",
  	       "position": "1",
           "itemListElement": [
             {
                  "@type": "HowToStep",
                  "position": "1",
                  "text": "Open the resolv.conf file with an editor such as nano to make the necessary changes."
             },{
                  "@type": "HowToStep",
                  "position": "2",
                  "text": "Add lines for the name servers that you want to use."
             },{
                  "@type": "HowToStep",
                  "position": "3",
                  "text": "Save the file."
             },{
                  "@type": "HowToStep",
                  "position": "4",
                  "text": "To ensure that your new settings are working, ping the domain name."
             }]
  	   	}
    ]}
</script>
