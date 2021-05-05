---
permalink: high-level-steps-for-migrating-from-amazon-web-services
audit_date: '2020-09-25'
title: High-level steps for migrating from Amazon Web Services
type: article
created_date: '2013-07-01'
created_by: Rackspace Support
last_modified_date: '2020-09-25'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

**Previous section:** [Mapping of Amazon Web Services resources to Rackspace resources](/support/how-to/mapping-of-amazon-web-services-resources-to-rackspace-resources)

This article provides a high-level overview of the steps to perform to
migrate your applications to Rackspace Cloud from Amazon Web Services
(AWS).

### Preparation

Based on your existing AWS instance size and configuration, select an
equivalent size and scope for the Rackspace Cloud Servers instance to
provision. Also, list the resources that you want to migrate, including
application and database resources.

### Provision and configure the Cloud Servers instance

Depending on the size of your existing AWS instance and OS, select an
equivalent instance type and follow the steps to provision a new
instance on Rackspace Cloud Servers. You can find a list of equivalent
instances in the
[equivalent instance types list.](/support/how-to/mapping-of-amazon-web-services-resources-to-rackspace-resources)

### Install software packages

Install the required applications on your newly provisioned Rackspace
Cloud Servers instance.

### Migrate data

After you back up your data on your AWS instance, use one of the
following methods to transfer your data from AWS to your cloud server.
You can do this in a number of ways:

-  **AWS CLI S3**

    Use AWS CLI S3 to copy https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html.

    `aws s3 cp s3://my-bucket/`

    This method is the recommended method for migrating your data to your
    cloud server. Using this method, you install Swift on your AWS
    instance and directly copy your data from AWS to Cloud Files,
    without downloading it locally.

-   **rsync**

    You can use
    [rsync](/support/how-to/backing-up-your-files-with-rsync)
    to tunnel between your two instances and transfer your data. The
    other methods listed here, however, have you create backups in Cloud
    Files so that you can always return to them.

-   **Install a GUI tool on your local computer**

    In certain cases, you need to install a GUI tool,
    such as a File Transfer Protocol (FTP) client application,
    to upload the data on Cloud Files. An example is if your cloud server is
    Windows&reg;-based. Several open-source and free
    tools exist, and they are described in detail within each migration
    scenario in this document.

-   **Use the Cloud Control Panel to upload files**

    The Cloud Control Panel enables you to upload data from your local
    computer to the server instance. This method is useful for
    situations in which you do not want to install additional software
    for data transfer. However, we do not recommend downloading your
    data locally because it is not the most secure option.

After you upload data to Cloud Files, download and restore the
data on your cloud server.

### Configure

Make any necessary configuration changes for your application and
database.

### Test after migration

-   Implement monitoring and backup solutions and focus on enhancing security.
-   Thoroughly test the applications deployed on your cloud server.

### Next step

[Provision cloud resources when migrating from Amazon Web Services](/support/how-to/provisioning-cloud-resources-when-migrating-from-amazon-web-services).
