---
permalink: address-cloud-computing-security-concerns-with-private-cloud
audit_date: '2020-10-12'
title: 'Address Cloud Computing Security Concerns with Private Cloud'
type: article
created_date: '2011-03-27' 
created_by: Rackspace Support
last_modified_date: '2020-10-12'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

Cloud computing in the [public cloud](https://www.rackspace.com/cloud) 
has raised security questions for businesses that have regulatory
compliance requirements. Many regulatory agencies have been slow to align
security requirements with public cloud computing. This creates barriers
to adopting public cloud for security-sensitive applications.
To meet some of these security needs, businesses use a [private cloud](https://www.rackspace.com/managed_hosting/private_cloud/index.php)
to achieve the benefits of cloud computing while maintaining
the security and privacy that dedicated hardware provides. Private cloud computing also 
offers users a path for future migration to the public cloud.
This article describes security concerns in the public cloud
and strategies for employing private cloud to address these issues.

### Protection against hackers

The first security concern in any computing environment is the threat from hackers. 
Cloud computing in a shared environment creates new opportunities for hackers seeking
to discover vulnerabilities that might allow them to deny service or gain unauthorized access.
Additionally, security experts have detailed methods for attacking cloud infrastructure
from the inside by running hacker tools in the cloud.

When a hacker has access to a public cloud node, the hacker gains 
greater visibility inside the cloud. The hacker then uses this inside 
information to probe the system and plan attacks more effectively. 
To combat this vulnerability, a private cloud 
restricts access to its resources to authorized users and administrators only.
By preventing potential hackers from gaining an inside view, private cloud
allows businesses to tightly control access to the entire environment.

### Protection against resource contention

Another concern of public cloud is resource contention. A security issue can
arise when resource contention results from a *Denial of Service* (DoS) attack
on another tenant of the shared infrastructure. The public cloud
is a shared resource that can potentially expose all tenants in the cloud
to security risks when any tenant becomes the target of a DoS attack. 
However, private cloud provides businesses with inherent protection from DoS attacks
directed at other businesses by avoiding shared infrastructure.

Many regulatory compliance specifications, including the Health Insurance Portability and
Accountability Act of 1996 (HIPAA) and Payment Card Industry Data Security Standard 
(PCI DSS), specifically require data segregation (although not all public
clouds use virtualization technology). These standards have not been updated to address
data protection and segregation in the public cloud. Rather, they align with the private
cloud. Because a private cloud uses dedicated hardware, it is comparatively
simple to segregate the data on separate servers and virtual machines (VM). 
This allows businesses to maintain regulatory compliance while benefiting from cloud computing.

The preceding example includes the following components:

-   **Hypervisors**: Physical servers that run the various
    virtual machines under hypervisor control.
-   **Firewall**:The first line of defense against attacks.
-   **IDS**: Intrusion Detection System.
-   **DMZ segment**: The demilitarized zone (DMZ) network segment has
    tightly controlled access to the public Internet.
-   **Private segment**: This network segment has no access from the
    public Internet.

This custom configuration includes both a public 
and a private segment, a firewall, and IDS hardware. 
In this example, the two network segments enable the publication of 
applications in a compliant manner regardless of whether you need a public or 
private network. Private network segments prohibit access 
from the public Internet and are a necessary component of many 
regulatory compliance specifications such as PCI DSS. The IDS device 
proactively detects any incoming attacks and send alerts prompting 
the security staff to investigate and respond.

### Conclusion

Cloud computing is constantly evolving and is likely to address these security concerns 
as technology advances. Technology will soon allow virtual machines to move from private
clouds to public clouds and back again. Businesses that choose to deploy a private cloud
today can benefit immediately by making the best use of their available resources. 
In addition, the businesses using private cloud to optimize their environments are better
positioned for a future transition to public cloud as their needs evolve and new technologies emerge.
