---
permalink: internet-theory/
audit_date: '2021-07-23'
title: Internet theory
type: article
created_by: Coral Moore
created_date: '2021-04-12'
last_modified_date: '2021-07-23'
last_modified_by: Cat Lookabaugh
product: General
product_url: general
---

This article explore the Internet from a theoretical perspacetive to help you
understand how the Internet works at a basic level.

### How does web traffic get from your computer to a website and back again?

The following image shows the flow of information:

{{<image src="web traffic.png" alt="" title="">}}

#### Your computer
    
On your computer, you enter a website, such as http://example.com, into a browser
(Chrome, Firefox, Internet Explorer, and so on). Your computer creates data packets.
Think of a packet as an envelope that holds your request.
This data packet is then stamped with your computer IP, like a return address.
It then leaves your computer, through your modem or router, and enters the internet.

#### Domain Name Servers
    
Domain Name Servers (DNS) are similar to the Yellow Pages of the Internet.
They look up the website and where it's registered.

If you buy a domain, you can then specify where you want the DNS to point your traffic.
You can point it to your computer, a specific server, or to a hosting company, such as
Rackspace.

The DNS translates http://example.com into the IP address of its destination.
This way, you always get up-to-date information, and you don't have to remember
endless streams of IP numbers. The words **example.com** are much easier to recall
than **93.184.216.34**.

**Note:** This is why a website might still point to Rackspace when it is no longer hosted with us.
          If the domain owners don't update their domain name vendor with the new web site location,
          the DNS public records remain the same. For data packets trying to access that website,
          it would be like traveling to an empty house after the residents have already moved away.

### Firewalls
    
After the data packet gets to its destination, it might still get turned away because a
firewall denies access. Acting as a bouncer, the firewall can be set to allow or deny certain
types of traffic.

#### Destination server
    
When the data packet gets past the firewall, it looks for a web server for the website.
The web server on the server then tries to match the destination website with its Virtual
Hosts (vhosts).  Vhosts are the Yellow Pages of websites on the server.
And each vhost specifies where the web site files are on the server.
It's as if you travelled to the right country, the right house, and now you need the
floorplan to find the right room.

#### The return journey
    
Your data packet has done the following things so far:
    
    - Travelled through the Internet
    - Looked up which computer or server to go to
    - Passed any security like firewalls
    - Navigated the web server to find the right website files

Now, it can finally collect the website data you need.

Then, it needs to travel back to the return address it came with
and do the following:
    
    - Exit the server
    - Pass through the firewall
    - Traverse the internet
    - Go through your modem or router
    - Enter your computer
    - Display the data it collected in your browser

In just a few milliseconds, you can see the website, courtesy of the Internet.

### Related articles
    
[Find your DNS host] (https://docs.rackspace.com/support/how-to/find-dns-host/)
[DNS fundamentals] (https://docs.rackspace.com/support/how-to/dns-fundamentals/)
