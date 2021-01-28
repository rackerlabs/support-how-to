---
permalink: rackspace-pdr-imaging/
title: Rackspace PDR imaging hosts
type: article
audit_date: '2021-05-01'
created_date: '2018-11-12'
created_by: Nick Shobe
last_modified_date: '2021-01-28'
last_modified_by: Rob Lee
product: Rackspace Proactive Detection & Response
product_url: rackspace-pdr
---

If you need to take an image for future deployments of a host that has Rackspace Proactive Detection & Response (PDR) agents installed, the agents must be removed.

### Remove agents

According to our standard method to prepare Golden images, we remove the vendor agents. It supports our normal auto-deploy tooling and usually works similarly to building off a new base Operating System (OS) image. 

### Take an image for a system backup

If you are just backing up a host, then it is not nessessary to prepare the image for Rackspace PDR deployment. However, if you later decide to use that backup image to deploy new hosts other then restoration, then you must prepare that image for Rackspace PDR agent deployment before deploying new hosts. For more information, see the *Remove agents* section above.
