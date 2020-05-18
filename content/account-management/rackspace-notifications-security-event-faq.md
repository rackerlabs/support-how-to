---
permalink: rackspace-notifications-security-event-faq/
audit_date: '2020-05-14'
title: Rackspace notifications security event FAQ
type: article
created_date: '2020-05-14'
created_by: Cat Lookabaugh
last_modified_date:
last_modified_by:
product: Account Management
product_url: account-management
---

### Notifications

#### What are these notifications?

If you have a next-generation firewall (NGFW) or another security device, it might
push log events from the security technology's actions to the notification portal.

For example, if you have enabled a threat license on a Cisco&reg; Firepower Threat
Defense (FTD)-enabled appliance, the device sends notification of events that
match a policy and signature in the intrusion prevention system (IPS) threat
engine. This notification relays the disposition of the event.

#### What events do I see in the notification portal?

You see high and medium-level events, as defined by the Cisco Talos Intelligence
Group (Talos), in the Rackspace Notification Service (RNS). Low-level events are
typically false positives or unremarkable events that might flood your RNS-service
queue.

#### What should I do if I feel an event is a false positive?

If you suspect an alert is a false positive, open a ticket with Netsec support,
and ask them to investigate the event. If this is a known-source IP address,
you can optionally trust the source by adding it to an allow-list. This action
disables the IPS rule for that host or network.

