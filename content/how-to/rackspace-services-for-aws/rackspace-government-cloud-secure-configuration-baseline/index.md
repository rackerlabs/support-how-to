---
permalink: rackspace-government-cloud-secure-configuration-baseline/
audit_date: '2021-06-25'
title: Rackspace Government Cloud Secure Configuration Baseline
type: article
created_date: '2021-06-25'
created_by: Stephanie Fillmon
last_modified_date: '2021-06-25'
last_modified_by: Stephanie Fillmon
product: Rackspace Services for AWS
product_url: rackspace-services-for-aws
---

In the Amazon&reg; Web Services&reg; (AWS) Marketplace, you can subscribe to
the Rackspace Government Cloud Secure Configuration Baseline as an Amazon
Machine Image (AMI). The Secure Configuration Baseline supports government cloud
workloads by design. The Red Hat&reg; Enterprise Linux&reg; (RHEL) 7.9
operating system is hardened to a Secure Configuration Baseline, and Rackspace
provides updated AMIs and compliance scan results every month.

For more information on the Secure Configuration Baseline, see the
[AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-pplvdfmwhfqvc).

### Product information

The Secure Configuration Baseline AMI includes the following specifications:

- **Product Name**: Red Hat Enterprise Linux 7
- **OS Version**: RHEL 7.9
- **AMI Name**: RHEL7-STIG-MAR2021
- **AMI ID**: ami-04c396ba3ce29450b
- **Date Published**: March 17, 2021

### Image release notes

- Rackspace built the image from a Red Hat&reg; Enterprise Linux&reg; (RHEL) 7.5 base
  image by using the AWS EC2 Image Builder and applied Yum&reg; package updates,
  bringing its version to RHEL 7.9. The image should update with the latest packages
  when you build by using the `sudo yum -y update` command.
- You should re-age the **ec2-user** account during the build by using User data:
  `chage -M -1 -E -1 ec2-user`.
- The image does not have a separate **/boot** partition. The **/boot** directory
  is in the **/** directory.

### Image builder notes

- We made sure the image conformed to Security Technical Implementation Guide (STIG) guidelines by using the
  [Red Hat Enterprise Linux 7 STIG for Ansible - Ver 3, Rel 2](https://dl.dod.cyber.mil/wp-content/uploads/stigs/zip/U_RHEL_7_V3R2_STIG_Ansible.zip) STIG
- The mage is FIPS 140-2 compliant.
- SELinux is enabled.
- Elastic Network Adapter (ENA) support enabled.

### Related articles

- [Secure Configuration Baseline Launch instructions](/support/how-to/secure-configuration-baseline-launch-instructions/)
