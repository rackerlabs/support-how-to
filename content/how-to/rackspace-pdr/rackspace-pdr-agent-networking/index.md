---
permalink: rackspace-pdr-agent-networking/
title: Rackspace PDR Agent networking requirements
type: article
audit_date: '2021-04-01'
created_date: '2018-10-09'
created_by: Nick Shobe
last_modified_date: '2021-01-27'
last_modified_by: Rob Lee
product: Rackspace Proactive Detection & Response
product_url: rackspace-pdr
---

This article includes the networking requirements for the Rackspace Proactive Detection & Response (PDRv2) Agent.

### Armor Egress Requirements

| Source | Destination | Protocol | Port | 
| ------ | ----------- | -------- | ---- | 
| Armor Agent | 99.83.175.90, 75.2.84.73 | TCP | 443 |
| AV, FIM, IDS | 44.233.170.94, 100.20.145.224, 34.215.243.248  | TCP | 443, 4120, 4122 |
| Qualys | 64.39.96.0/20 | TCP | 443 | 
| Log Management | 52.38.171.243, 52.26.92.237, 35.155.168.100 | TCP | 5516 |

### Crowd Strike Egress Requirements

| Source | Destination | Protocol | Port | Description |
| ------ | ----------- | -------- | ---- | ----------- |
| Agent | Endpoint IPs Below | TCP | 443 | Crowd Strike agent endpoint |

### Crowd-Strike Agent Endpoint IPs

|             |               |
|-------------|---------------|
|ts01-b.cloudsink.net | lfodown01-b.cloudsink.net |

