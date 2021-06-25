---
permalink: secure-configuration-baseline/
audit_date: '2021-06-25'
title: Rackspace Government Cloud Secure Configuration Baseline
type: article
created_date: '2021-06-25'
created_by: Stephanie Fillmon
last_modified_date: '2021-06-25'
last_modified_by: Stephanie Fillmon
product: AWS Marketplace
product_url: aws-marketplace
---

In the Amazon&reg; Web Services&reg; (AWS) Marketplace, you can subscribe to
the Rackspace Government Cloud Secure Configuration Baseline as an Amazon
Machine Image (AMI). The Secure Configuration Baseline is designed to support
government cloud workloads. The Red Hat&reg; Enterprise Linux&reg; (RHEL) 7.9
operating system is hardened to a Secure Configuration Baseline and Rackspace
provides updated AMIs and compliance scan results on a monthly basis.

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

- Image was built from an RHEL 7.5 base image utilizing AWS'
  "EC2 Image Builder". Yum/package updates were applied, bringing its version
  to RHEL 7.9. Image should still be updated with the latest packages upon
  build using the 'sudo yum -y update' command.
- The 'ec2-user' account will need to be re-aged during build via User
  data - 'chage -M -1 -E -1 ec2-user'.
- The image does not have a separate "/boot" partition. The '/boot' directory
  is located on the '/' directory.

### Image builder notes

- The image was STIGGED utilizing the
  [Red Hat Enterprise Linux 7 STIG for Ansible - Ver 3, Rel 2](https://dl.dod.cyber.mil/wp-content/uploads/stigs/zip/U_RHEL_7_V3R2_STIG_Ansible.zip) STIG
- Image is FIPS 140-2 compliant.
- SELinux is enabled.
- Elastic Network Adapter (ENA) support enabled.

### Related articles

- [Secure Configuration Baseline Launch instructions](/support/how-to/aws-marketplace-secure-configuration-baseline-launch-instructions)
