---
layout: post
title: "glibc Linux DNS round-robin explanation"
date: 2020-05-27
comments: true
author: Daniel Drown
published: true
authorIsRacker: true
authorAvatar: 'https://s.gravatar.com/avatar/3995b2d776949a99f3fdae386eca40ce'
bio: "Back in 2001, Dan joined Datapipe as employee number 23. Aware that technology
can be confusing, Dan liked that Datapipe's mission was to make it easier for
people to get their internet presence up and running. Our customers must have
liked that too, as the company grew quickly. There have been many challenges
along the way, and Dan has enjoyed learning new skills and technologies to adapt
to the industry's changes. Now, nineteen years later Dan is proud to be a Racker,
and is committed to Rackspace's vision of being the best service provider."
categories:
    - General
canonical: https://blog.dan.drown.org/glibc-linux-dns-round-robin/
metaTitle: "glibc Linux DNS round-robin explanation"
metaDescription: "My friend wanted a better exaplanation of glibc Linux DNS round-robin, so here it is."
ogTitle: "glibc Linux DNS round-robin explanation"
ogDescription: "My friend wanted a better exaplanation of glibc Linux DNS round-robin, so here it is."
---

A friend was trying to figure out what the GNU C Library (glibc) does with the
round-robin domain name system (DNS) load balancing technique, and information
about that is somewhat scarce. He expected it to randomly choose an address out
of the multiple at the hostname, but it preferred only one of the addresses.
This behavior is poorly documented, so I thought I should write a blog article
about it.

<!--more-->

### The standards

There are two relevant standards:

-[RFC3484](https://tools.ietf.org/rfc/rfc3484.txt) defines the sorting algorithm
for both source and destination address selection. When all else is equal, it
prefers the source/destination pairs with the longest matching prefix bits.

-[RFC6724](https://tools.ietf.org/html/rfc6724) obsoletes RFC3484, but seems to
not change things significantly except that IPv4 private addresses are no longer
preferred. All IPv4 addresses (except loopback) have equal priority. So, when
everything has equal priority, it should come down to the longest matching prefix.
This standard should choose randomly from everything at the same priority.

### Test

To verify this works as expected on Linux&reg;, I tested a hostname where one
of the addresses was in my LAN subnet. My client, using `getaddrinfo`, chose the
IP address on the LAN 100% of the time. This result doesn't match the standards
exactly, so let's dig into what Linux glibc actually does.

### The explanation

The [Rule 9: Use the longest matching prefix](https://sourceware.org/git/?p=glibc.git;a=blob_plain;f=sysdeps/posix/getaddrinfo.c;h=c67c5a955cdd2d8eb728caf77a0e39494e7aed0d;hb=HEAD)
section of glibc's `getaddrinfo` is the code that actually chooses the order of
addresses to return. The **prefixlen** variable comes from the source interface
on this system, and this code checks that the hostname's destination addresses
returned are on the same network as this system. If they are not on the same
network, the addresses are considered equal.

![]({% asset_path 2020-05-27-glibc-linux-dns-round-robin-explanation/Picture1.png %})

The following samples illustrate what this means:

- Given that the **hostname** has two addresses: **10.0.1.2** and **10.0.0.2**

- **Action**: I add an IP address with: `sudo ip addr add 10.0.1.1/24 dev lo`

  - **Result**: I only get the **10.0.1.2** address.

- **Action**: I remove the preceding IP address and add another: `sudo ip addr add 10.0.0.1/24 dev lo`

  - **Result**: I only get the **10.0.0.2** address.

- **Action**: I replace all the IPs with a different subnet that doesn't overlap: `sudo ip addr add 10.0.2.1/24 dev lo`

  - **Result**: I get both IP addresses.

- **Action**: I add a subnet that doesn't overlap, but shares everything except the last
  two bits: `sudo ip addr add 10.0.1.1/32 dev lo`

  - **Result**: I get both IP addresses.

So, glibc prefers addresses on the same LAN for IPv4, but picks IP addresses at
random otherwise.

For more information, see this relevant [Debian bug report](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=438179).

Use the Feedback tab to make any comments or ask questions. You can also
[chat now](https://www.rackspace.com/#chat) to start the conversation.

