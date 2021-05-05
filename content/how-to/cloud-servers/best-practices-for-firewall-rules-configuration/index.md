---
permalink: best-practices-for-firewall-rules-configuration
audit_date: '2020-04-16'
title: Best practices for firewall rules configuration
type: article
created_date: '2014-12-03'
created_by: Rose Contreras
last_modified_date: '2020-04-16'
last_modified_by: William Loy
product: Cloud Servers
product_url: cloud-servers
---

When you change a firewall configuration, it's important to consider potential security risks to avoid future issues. Security is a complex topic and can vary from case to case, but this article describes best practices for configuring perimeter firewall rules.

### Block by default

Block all traffic by default and explicitly enable only specific traffic to known services. This strategy provides good control over the traffic and reduces the possibility of a breach because of service misconfiguration.

You achieve this behavior by configuring the last rule in an access control list to deny all traffic. You can do this explicitly or implicitly, depending on the platform.

### Allow specific traffic

The rules that you use to define network access should be as specific as possible. This strategy is  the *principle of least privilege*, and it forces control over network traffic. Specify as many parameters as possible in the rules.

A layer 4 firewall uses the following parameters for an access rule:

- Source IP address (or range of IP addresses)
- Destination IP address (or range of IP addresses)
- Destination port (or range of ports)
- Protocol of the traffic (TCP, ICMP, or UDP)

Specify as many parameters as possible in the rule used to define network access. There are limited scenarios where <code>any</code> is used in any of these fields.

### Specify source IP addresses

If the service should be accessible to everyone on the Internet, then *any* source IP address is the correct option. In all other cases, you should specify the source address.

It's acceptable to enable all source addresses to access your HTTP server. It's not acceptable to enable all source addresses to access your server management ports or database ports. The following is a list of common server management ports and database ports:

  Server management ports:

  - Linux&reg;SSH : Port 22
  - Windows&reg; RDP: Port 3389  

  Database ports:

  - SQL&reg; Server : Port 1433
  - Oracle&reg; : Port 1521
  - MySQL&reg; : Port 2206

Be specific about who can reach these ports. When it is impractical to define source IP addresses for network management, you might consider another solution like a remote access VPN as a compensating control to allow the access required and protect your network.

### Specify the destination IP address

The destination IP address is the IP address of the server that runs the service to which you want to enable access. Always specify which server or servers are accessible. Configuring a destination value of `any` could lead to a security breach or server compromise of an unused protocol that might be accessible by default. However, destination IPs with a destination value of `any` can be used if there is only one IP assigned to the firewall. The value `any` can also be used if you want both public and `servicenet` access to your configuration.

### Specify the destination port

The destination port corresponds to the accessible service. This value of this field should never be `any`. The service that runs on the server and needs to be accessed is defined, and only this port needs to be allowed. Allowing all ports affects the security of the server by allowing dictionary attacks as well as exploits of any port and protocol that is configured on the server.

Avoid using too wide a range of ports. If dynamic ports are used, firewalls sometimes offer inspection policies to securely allow them through.

### Examples of dangerous configurations

This section describes dangerous examples of firewall rules, but also shows some alternative good rules to follow when configuring firewall rules.

`permit ip any any` - Allows all traffic from any source on any port to any destination. This is the worst type of access control rule. It contradicts both of the security concepts of denying traffic by default and the principal of least privilege. The destination port should be always specified, and the destination IP address should be specified when practical. The source IP address should be specified unless the app is built to receive clients from the Internet, such as a web server. A good rule would be `permit tcp any WEB-SERVER1 http`.

`permit ip any any WEB-SERVER1`  - Allows all traffic from any source to a web server. Only specific ports should be allowed; in the case of a web server, ports 80 (HTTP) and 443 (HTTPS). Otherwise, the management of the server is vulnerable. A good rule would be `permit ip any WEB-SERVER1 http`.

`permit tcp any WEB-SERVER1 3389` - Allows RDP access from any source to the web server. It is a dangerous practice to allow everyone access to your management ports. Be specific about who can access the server management. A good rule would be `permit tcp 12.34.56.78 3389 WEB-SERVER1` (where `12.34.56.78` is the IP address of the administrator's computer on the Internet).

`permit tcp any DB-SERVER1 3306` - Allows MySQL access from any source to the database. Database servers should never be exposed to the whole Internet. If you need database queries to run across the public Internet, specify the exact source IP address. A good rule would be `permit tcp 23.45.67.89 DB-SERVER1 3306` (where `23.45.67.89` is the IP address of the host on the Internet that needs access to the database). A best practice would be to allow database traffic over a VPN and not in clear text across the public Internet.

If you need help implementing these best practices, contact your Rackspace support team.
