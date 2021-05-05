---
permalink: vyatta-eol-faq
audit_date: '2020-06-16'
title: Vyatta vRouter End of Support FAQ
type: article
created_date: '2020-06-16'
created_by: Brian King
last_modified_date: '2021-01-29'
last_modified_by: Rose Morales
---

The Vyatta&reg; vRouter has been discontinued by its vendor AT&T, and as a result, 
Rackspace no longer offers support for this platform. We recommend switching
your virtual firewall to our new offering, the [Fortinet&reg; Fortigate&reg;-VM](https://docs.rackspace.com/blog/introducing-fortigate-vm-for-rackspace-openstack-public-cloud/).

### Frequently Asked Questions
{{<accordion title="Are you removing my current Vyatta vRouter server(s)?" col="in" href="accordion1">}}


There are no current plans to remove your current Vyatta vRouter servers. 
However, for best performance and security, we highly recommend using a 
supported product.
{{</accordion>}}
{{<accordion title="Will I be able to build new Vyatta vRouters?" col="in" href="accordion2">}}

We are no longer offering Vyatta as a buildable image. However, you can 
still image your current Vyatta or build from an existing custom image of your Vyatta.
{{</accordion>}}
{{<accordion title="What are the benefits of migrating to the Fortinet Fortigate-VM?" col="in" href="accordion3">}}

| Fortigate-VM  | Vyatta                   |
|---------------|----------------------------------|
| Supported product with regular security updates      | End-of-Life (EOL) product with no updates  |
| True next-generation firewall (NGFW) and unified threat management (UTM) platform | Basic firewall and routing capabilities |
| Web-based GUI, CLI, and API | 	CLI only |
| Cloud-init support | Not applicable |
{{</accordion>}}
{{<accordion title="Can I move to a supported product without losing my IP?" col="in" href="accordion4">}}

Yes. If you want to keep your current public IPs, you can [rebuild a cloud server](/support/how-to/rebuild-a-cloud-server/) on top of your current Vyatta server. Note that all data is lost on the current Vyatta server. 

{{</accordion>}}
{{<accordion title="Can I migrate my existing Vyatta configuration?" col="in" href="accordion5">}}

Unfortunately, it is not possible to directly migrate your Vyatta configuration. However, the Fortigate-VM has a simple, intuitive web GUI that makes recreating
the configuration easy.
{{</accordion>}}
{{<accordion title="How much does the Fortigate-VM cost compared to the Vyatta?" col="in" href="accordion6">}}

The Fortigate-VM is slightly more expensive (starting at $0.24/hr versus $0.22/hr for Vyatta). This price reflects the superior feature set and usability of the Fortigate-VM.
{{</accordion>}}
{{<accordion title="Where can I find out more about the Fortigate-VM?" col="in" href="accordion7">}}

See [this article](https://docs.fortinet.com/vm/rackspace/fortigate/6.0/rackspace-cookbook/6.0.4/123172/about-fortigate-for-rackspace) for more information about how to use the Fortigate-VM in the Rackspace Public Cloud.
{{</accordion>}}
{{<accordion title="I am a Managed Operations customer, does Netsec have access to my Fortigate-VM?" col="in" href="accordion8">}}

If you are a Managed Operations customer, you are accustomed to having Rackspace Network Security admins log in to your network devices. This feature is not available for the Fortigate-VM at launch, but it is planned and should be available in the coming months.
{{</accordion>}}
{{<accordion title="Pricing" col="in" href="accordion9">}}

Prices are estimates. Check the [Rackspace Customer Portal](https://login.rackspace.com/login) for actual prices.
{{</accordion>}}
