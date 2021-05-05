---
permalink: rackspace-pdr-imaging
title: Rackspace PDR imaging hosts
type: article
audit_date: '2021-01-28'
created_date: '2018-11-12'
created_by: Nick Shobe
last_modified_date: '2021-01-28'
last_modified_by: Rob Lee
product: Rackspace Proactive Detection & Response
product_url: rackspace-pdr
---

If you need to take an image for future deployments of a host with Rackspace Proactive Detection & Response (PDR) agents
installed, you must remove the agents.

### Remove agents

According to our standard method for preparing *golden* images, we remove the vendor agents. This process supports our normal
auto-deploy tooling and usually works similarly to building off a new base Operating System (OS) image. 

### Take an image for a system backup

If you are just backing up a host, it is not necessary to prepare the image for Rackspace PDR deployment. However, if you
later decide to use a backup image to deploy new hosts rather than for restoration, you must prepare that image for Rackspace
PDR agent deployment before deploying new hosts. For more information, see the preceding *Remove agents* section.
