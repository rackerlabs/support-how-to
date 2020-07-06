---
layout: post
title: "Announcing the launch of Rackspace Managed VMware Cloud on AWS Disaster Recovery Services"
date: 2020-04-20
comments: true
author: Andy Smith
published: true
authorIsRacker: true
bio: "Andy Smith has been with Rackspace since 2018 and is currently the Senior
Product Manager for Rackspace’s Managed VMware Cloud on AWS solutions. Andy
brings more than 20 years’ experience working in IT and for IT solutions
companies, and has spent the last decade helping customers deploy and get the
most out of private and hybrid cloud solutions. When not working, Andy enjoys
hiking, skiing, and playing and watching hockey."
categories:
    - general
metaTitle: "Announcing the launch of Rackspace Managed VMWare Cloud on AWS Disaster Recovery Services"
metaDescription: "Rackspace announces the general availability of Rackspace Managed VMware Cloud&trade; on Amazon&reg; Web Services (AWS) Disaster Recovery Services powered by VMware Site Recovery."
ogTitle: "Announcing the launch of Rackspace Managed VMWare Cloud on AWS Disaster Recovery Services"
ogDescription: "Rackspace announces the general availability of Rackspace Managed VMware Cloud&trade; on Amazon&reg; Web Services (AWS) Disaster Recovery Services powered by VMware Site Recovery."
---

Rackspace announces the general availability of Rackspace Managed VMware Cloud&trade;
(VMC) on Amazon&reg; Web Services (AWS) Disaster Recovery Services powered by
VMware Site Recovery.

<!--more-->

### Challenges

More than ever, we're reminded that sometimes bad things happen that nobody saw
coming and that are out of our control. You can't plan for every situation, but
having a service continuity plan can help mitigate the risk and business impact
of a disaster or significant data center outage. Part of that service continuity
plan could include a disaster recovery (DR) solution with a target site. You can
replicate your critical applications and data on the target site. Then, if
anything happens to your primary site, you can bring applications online from
the target site.

The following factors can affect how you stand up a DR solution:

- Do you have security, compliance, or performance requirements that might
  necessitate having a dedicated private cloud DR site?
- Do you have requirements on where your data (including DR data) resides?
- Do you have the expertise and desire to manage a DR site and DR software?
- Do you have the budget to maintain a DR site? And the related question, what
  is your cost of being down in the event of a major outage?

### Our solution

Rackspace Managed VMware Cloud on AWS Disaster Recovery Services provide a
solution that can help you quickly, easily, and cost-effectively get a DR site
up and running to protect your VMware applications and data. With Rackspace,
VMC on AWS and VMware Site Recovery, you get:

- A dedicated, single-tenant VMware Software-Defined Data Center (SDDC) using
  VMC on AWS as a target site
- Support for customer-managed and Rackspace-managed source VMware environments
- Replication and failover orchestration using VMware Site Recovery,
  consisting of familiar and proven VMware vSphere Replication and Site Recovery
  Manager
- A choice of 16 AWS regional data centers around the globe for your DR target
  location
- A choice of the following Rackspace service levels:
  - Essential: You know what you're doing with vSphere Replication and Storage
    Resource Management (SRM). You want Rackspace to set it up, and you'll take
    it from there.
  - Managed: You'd rather Rackspace manage it for you.
- A choice of standard or pilot-light configuration by using Rackspace Managed
  NetApp&reg; Cloud Volumes external storage

Wait, what is that last bullet about? One of the challenges of using VMC on
AWS as a DR target site is the storage configuration. As you may know, with
hyper-converged infrastructure, the only way to add more storage in a VMC on AWS
SDDC is to add more hosts. For DR configurations, especially, this can mean
paying for more hosts than you need, which sit idle most of the time. Don't
worry, Rackspace has you covered.

[Rackspace is one of a very exclusive set of VMware Cloud on AWS Managed Service
Providers that can connect external Network File System (NFS) storage as a datastore](https://www.rackspace.com/blog/reduce-costs-of-vmware-cloud-on-aws-for-storage-heavy-workloads)
and the only provider that can do so globally. We've partnered with NetApp and
their Cloud Volumes Service for AWS to deliver the best performing external
storage solution available for VMC on AWS. It's not in every region
but is available in multiple AWS regions in the US, Europe, and the Asia Pacific.
What does this mean for DR? It makes it much more cost-effective. Rackspace can
create your target site with a small "pilot-light" host footprint. In a pilot-light
configuration, we can keep fewer hosts running all the time, currently as few as
three hosts, and replicate your data to the attached Managed NetApp Cloud Volumes
storage. When you need to scale up for a DR failover or do testing, we can add
hosts quickly to your SDDC by using the rapid deployment capabilities of VMC on AWS.

So you get the benefits of the rapid Recovery Time Objective (RTO) of a fully
deployed DR target site with the benefits of lower monthly costs and only paying
for full DR site capacity when you genuinely need it. Of course, there are pros
and cons with every approach, so the Rackspace team can discuss your requirements
and tradeoffs to decide what solution is best for you.

### Need a plan?

Sounds great, right? Perhaps this sounds like something you need, but you don't
have a service continuity plan today, and you're not sure where to start.
Rackspace has you covered there, too. Rackspace Professional Services can work
with you to assess your situation and requirements and develop a plan. Rackspace
experts use 20+ years of managed cloud experience, deep relationships with cloud
providers, and Information Technology Infrastructure Library (ITIL) expertise to
establish an end-to-end service-continuity
framework and governance policies. These tools build organizational resilience
and help safeguard your organization's assets, brand, and productivity.

### Conclusion

If you've been thinking about a service continuity strategy or implementing a
disaster recovery solution for your VMware environment, Rackspace has the solutions
and expertise to get you there quickly and cost-effectively.

<a class="cta teal" id="cta" href="https://www.rackspace.com/vmware/vmc-on-aws">Learn more about Managed VMware Cloud on AWS.</a>

Use the Feedback tab to make any comments or ask questions.

Visit [www.rackspace.com](https://www.rackspace.com) and click **Sales Chat**
to get started.
