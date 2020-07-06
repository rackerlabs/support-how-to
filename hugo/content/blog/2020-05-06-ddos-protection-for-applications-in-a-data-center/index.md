---
layout: post
title: "DDoS protection for applications in a data center"
date: 2020-05-06
comments: true
author: Will Parsons
authorAvatar: 'https://gravatar.com/avatar/7e23218fb3986389a7eb5a7d488d6cc1'
bio: "Will Parsons is a Solutions Architect who has worked in technical and customer-facing
roles at Rackspace since 2008. Will helps businesses of all sizes design both dedicated and
cloud environments for websites and applications, with an emphasis on performance and security."
published: true
authorIsRacker: true
categories:
    - Security
metaTitle: "DDoS protection for applications in a data center"
metaDescription: "Rackspace partners with Akamai&reg;, Cloudflare&reg;, and Imperva&reg; to provide best-in-class edge
functionality, typically including a performance-boosting Content Delivery Network (CDN) and caching
capability, as well as a web application firewall (WAF) for enhanced security and protection from Distributed
Denial of Service (DDoS) attacks."
ogTitle: "DDoS protection for applications in a data center"
ogDescription: "Rackspace partners with Akamai&reg;, Cloudflare&reg;, and Imperva&reg; to provide best-in-class edge
functionality, typically including a performance-boosting Content Delivery Network (CDN) and caching
capability, as well as a web application firewall (WAF) for enhanced security and protection from Distributed
Denial of Service (DDoS) attacks."
---
 
Rackspace partners with Akamai&reg;, Cloudflare&reg;, and Imperva&reg; to provide best-in-class edge
functionality, typically including a performance-boosting Content Delivery Network (CDN) and caching
capability, as well as a web application firewall (WAF) for enhanced security and protection from Distributed
Denial of Service (DDoS) attacks.

<!--more-->

### Attackers target the origin

To protect the *origin* infrastructure, the edge provider handles Domain Name System (DNS) resolution,
so that requests to your domains do not reveal the origin IP addresses. This process mitigates attacks
against public-facing resources or websites and absorbs them on the edge. Edge providers can distribute
attacks among hundreds of locations around the world before getting anywhere near your servers.

But what if an attacker does know your origin IP address or related blocks?  Can they attempt to launch
a DDoS attack directly? In a word, yes.

There are plenty of ways an attacker might come to learn your origin IP address, including by exploring
the following avenues:

- Historic DNS records, perhaps from before you implemented the edge security.  It’s a good idea to
  request new IP ranges after such an implementation.
- Similar or generic subdomains, for example, **dev.example.com**, which might point back to your origin.
- Leaks from the application level, perhaps in HTTP headers.
- Secure Sockets Layer (SSL) Virtual Private Network (VPN) endpoints, which might expose a company domain
  name during the SSL handshake.
- Bad actors with inside knowledge, such as a disgruntled ex-employee.
- Compromise of a development environment or configuration management database.
- Malware on a company laptop.
- Social engineering or another sophisticated attack.

You can mitigate each of those avenues individually, but a persistent attacker might find a way to get
through. Let’s assume that they have done so.

### First line of defense: Firewalls

Within a data center environment or Private Cloud, perimeter firewalls are the first line of defense. Most people
configure firewalls to allow incoming connections only via the edge provider, controlling access from Layer 4 or
higher and preventing attempts to bypass a Layer 7 WAF.

But perimeter firewalls have a finite capacity for packet filtering and are connected to the public Internet with
finite bandwidth. For many setups, this might be a 1 Gbps switch port or perhaps a 10 Gbps uplink. DDoS attacks,
especially reflection attacks, can easily be in the tens or hundreds of Gbps.  If bad actors launch an attack
against the origin, then the firewall&mdash;and everything behind it&mdash;is offline. You need another line
of defense.

### Next line of defense: Monitoring and mitigation

[Rackspace DDoS Mitigation Services](https://www.rackspace.com/en-gb/security/tools/ddos-mitigation) offer
comprehensive traffic monitoring, multilayered anomaly detection technologies, and immediate DDoS attack
mitigation to help keep your data secure and your business online. Our highly skilled team of DDoS specialists
augment the hardware capability with human intuition to fend off attacks in real time.

Also, consider reducing the attack surface or eliminating it. Tools such as
[Akamai Enterprise Application Access](https://www.akamai.com/uk/en/products/security/enterprise-application-access.jsp)
and [Cloudflare Argo Tunnel](https://www.cloudflare.com/en-gb/products/argo-tunnel/ ) work by deploying agents and
connectors within your origin infrastructure that make secure *outgoing* connections to the CDN edge.  These tools then
send legitimate or authenticated requests back through those connections, with no need to expose your website or
application to the Internet. These techniques result in no incoming firewall filtering and no access control lists.
This powerful solution works exceptionally well with containerized workloads, eliminating the need to manage ingress
controllers.

### Conclusion

In summary, WAF and DDoS protection are essential for business-critical workloads and websites. Edge providers like Akamai, Cloudflare, and Imperva offer great solutions for performance and security. Despite these options, a sophisticated, persistent attacker can still attempt to attack the origin directly. Rackspace security experts can help with that.

<a class="cta red" id="cta" href="https://www.rackspace.com/en-gb/security/tools/ddos-mitigation">Learn more about our DDoS detection and mitigation services.</a>

Use the Feedback tab to make any comments or ask questions. You can also
[chat now](https://www.rackspace.com/#chat) to start the conversation.
