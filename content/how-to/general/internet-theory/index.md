---
permalink: internet-theory/
title: Internet Theory
type: article
created_by: Coral Moore
created_date: 2021-04-12
last_modified_date: 
last_modified_by: 
audit_date:
product: General
product_url: general
---

# Internet Theory
*For understanding how the internet works on a basic level*

# How does web traffic get from your computer, to the website, and back again?
{{<image src="web traffic.png" alt="" title="">}}

## Your Computer
On your computer, you type a website like http://example.com into a browser (like Chrome, Firefox or Internet Explorer)
You computer will create little data packets.
If it helps, think of them as a little rocket or a letter which is filled with your request.
This data packet is then stamped with your computer IP, like a return address.
And then shoots out of your computer, through your modem, and out into the internet.

{{<image src="data packet.png" alt="" title="">}}

## DNS
Domain Name Servers are the like big Yellow Pages of the internet.
They look up the web site, and where it's registered.

If you buy a domain, you can then specify where you want the DNS to point your traffic.
You can point it your computer, a specific server, or to a hosting company like Rackspace.

The DNS translates http://example.com into the IP address of where it's meant to go.
This way, you always get up to date information, and you don't have to remember endless streams of IP numbers!
Just the words like 'example.com' which is much easier than memorising '93.184.216.34'

**Note:**
This is why a web site might still point to Rackspace when it is no longer hosted with us.
If the domain owners didn't update their domain name vendor with the new web site location, the DNS public records will remain that same.
For data packets trying to access that website, it would be like travelling to an empty house where the residents have already moved away.

## The Firewall
Once the data packet gets to its destination, it might still get turned away!
The firewall might deny access.
Acting like a bouncer, the firewall can be set to allow/deny certain types of traffic.

## The Server
If the data packet gets into the server, for a web site it will look for a web server.
A web server on a server will then try to match the web site that you're looking for with its vhosts.
Virtual Hosts are the Yellow Pages of web sites on the server.
And each vhost will specify where the web site files are on the server.
This is like if you have travelled to the right country, the right house, and now you need the floorplan to find the right room.

## The Return Journey
Now that your data packet has:
    - travelled through the internet
    - looked up which computer/server to go to
    - passed any security like firewalls
    - and navigated the web server to find the right web site files

It can finally collect the web site data you wanted!

Then, with that return address from the beginning, it needs to travel back:
    - out of the server
    - through the firewall
    - across the internet
    - through your modem
    - back to your computer
    - and shows you the data it collected in your browser

**NOW** *after a few milliseconds*, **you can see the web site!**

### Related articles
[Find your DNS host] (https://docs.rackspace.com/support/how-to/find-dns-host/)
[DNS Fundamentals] (https://docs.rackspace.com/support/how-to/dns-fundamentals/)
