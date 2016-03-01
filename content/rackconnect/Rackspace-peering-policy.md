---
title: Rackspace peering policy
type: article
created_date: '2014-10-01'
created_by: Tom Kacprzynski
last_modified_date: '2016-02-26'
last_modified_by: Tom Kacprzynski
product: General
product_url: general
---

###  Rackspace peering policy

Rackspace has an open peering policy. We have a few standard technical conditions and traffic requirements for private peering. For a list of all Rackspace's peering locations, please see [http://as12200.peeringdb.com](http://as12200.peeringdb.com).

- [Rackspace Peering Policy](https://github.rackspace.com/Product-DevOps/rackspace-knowledge-center-everything/blob/2e8647a806d39c26a4460b348aa0ec9f2dd3600f/articles/undefined/rackspace-peering-policy.md#rax)
- [General Requirements](https://github.rackspace.com/Product-DevOps/rackspace-knowledge-center-everything/blob/2e8647a806d39c26a4460b348aa0ec9f2dd3600f/articles/undefined/rackspace-peering-policy.md#reqs)
- [Public Peering](https://github.rackspace.com/Product-DevOps/rackspace-knowledge-center-everything/blob/2e8647a806d39c26a4460b348aa0ec9f2dd3600f/articles/undefined/rackspace-peering-policy.md#public)
- [Private Peering](https://github.rackspace.com/Product-DevOps/rackspace-knowledge-center-everything/blob/2e8647a806d39c26a4460b348aa0ec9f2dd3600f/articles/undefined/rackspace-peering-policy.md#private)
- [Contact Information](https://github.rackspace.com/Product-DevOps/rackspace-knowledge-center-everything/blob/2e8647a806d39c26a4460b348aa0ec9f2dd3600f/articles/undefined/rackspace-peering-policy.md#contact)
- [Threshold Calculations](https://github.rackspace.com/Product-DevOps/rackspace-knowledge-center-everything/blob/2e8647a806d39c26a4460b348aa0ec9f2dd3600f/articles/undefined/rackspace-peering-policy.md#threshold)

#### General requirements

- A publicly routable autonomous system number (ASN)
- A publicly routable address space (/24 for IPv4 and /48 for IPv6)
- A 24/7 Network Operations Center (NOC) able to resolve routing issues and Distributed Denial of Service (DDoS) issues
- Account in PeeringDB with ASN information<>/li>
- Interconnection using 1 Gbps or 10 Gbps interface(s)

Additionally, peers are prohibited from pointing a default route towards Rackspace.

We reserve the right to terminate the peering agreement with a 30-day notice.

[[top](https://github.rackspace.com/Product-DevOps/rackspace-knowledge-center-everything/blob/2e8647a806d39c26a4460b348aa0ec9f2dd3600f/articles/undefined/rackspace-peering-policy.md#top)]

#### Public peering

We are open to peering over the share fabric including multilateral peering (MLP) using IXP route servers. For dedicated (BGP) sessions, we require a minimal threshold for some locations as follows:

- Europe: 50 Mbps (95th percentile)
- North America: 50 Mbps (95th percentile)
- Asia: No minimum threshold
- Australia: No minimum threshold

[[top](https://github.rackspace.com/Product-DevOps/rackspace-knowledge-center-everything/blob/2e8647a806d39c26a4460b348aa0ec9f2dd3600f/articles/undefined/rackspace-peering-policy.md#top)]

#### Private peering

We require a certain level of traffic between our ASNs to establish private peering. Our traffic requirements for private peering are different based on geographic location.

- Europe
- North America<>/li>
- Asia
- Australia

If you want to establish private peering please provide the following information:

1. Organization name and brief description
2. NOC contact information (email address and phone number)
3. BGP ASN
4. Network type (service provider, content, cable/DLS/ISP, enterprise, educational, nonprofit)
5. IPv4 and/or IPv6 BGP speaker IP address
6. Approximate number of prefixes advertised
7. Requested peering location(s)

[[top](https://github.rackspace.com/Product-DevOps/rackspace-knowledge-center-everything/blob/2e8647a806d39c26a4460b348aa0ec9f2dd3600f/articles/undefined/rackspace-peering-policy.md#top)]

#### Contact Information

NOC [noc@](mailto:noc@rackspace.com) [rackspace.com](mailto:noc@rackspace.com)

Peering [peering@rackspace.com](mailto:peering@rackspace.com)

[[top](https://github.rackspace.com/Product-DevOps/rackspace-knowledge-center-everything/blob/2e8647a806d39c26a4460b348aa0ec9f2dd3600f/articles/undefined/rackspace-peering-policy.md#top)]

#### Threshold calculations

This section explains the calculation used for private peering thresholds. These calculations are not part of the official peering policy, but should be used only for analysis.

**Note**: You might need to scroll the following text to see the full calculation.

The calculation has a number of variables that can significantly alter the thresholds. For example, does Rackspace pay of the cross connect or does the peer? If the peer pays, the minimal threshold becomes significantly lower. The next variable is how many months should the hardware be amortized? Longer terms, like 36 months, result in a lower minimal threshold, while shorter terms result in a higher minimal threshold. The hardware used to model the hardware port also varies the calculation, but not as much as the cross connect or the months per term.

- Minimal\_Bandwidth = { [(Cross\_Connect \* Months\_per\_term) + Hardware\_port] / Months\_per\_term } / Mbps\_Transit\_Cost
- Minimal\_Bandwidth: The 95th percentile of peer's traffic required to offset the cost of peering. Using this minimal value, peering thresholds are derived.
- Cross\_Connect: The monthly recurring cost (MRC) of cross connecting.
- Months\_per\_term: The number of months within a term. This term is used to amortize the hardware cost.
- Hardware\_port: The nonrecurring cost (NRC) of the hardware port, which is calculated by using the cost of line card divided by the number of ports.
- Mbps\_Transit\_Cost: The price that Rackspace IP Transit providers charge per Mbps of bursting traffic using the 95th percentile measurements.

The calculation has a number of variables that can significantly alter the thresholds. For example, does Rackspace pay of the cross connect or does the peer? If the peer pays, the minimal threshold becomes significantly lower. The next variable is how many months should the hardware be amortized? Longer terms, like 36 months, result in a lower minimal threshold, while shorter terms result in a higher minimal threshold. The hardware used to model the hardware port also varies the calculation, but not as much as the cross connect or the months per term.
