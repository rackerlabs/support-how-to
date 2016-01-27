---
node_id: 5208
title: Migrate to Rackspace from another hosting provider
type: article
created_date: '2016-01-21'
created_by: Nate Archer
last_modified_date: '2016-01-21'
last_modified_by: Nate Archer
product: Cloud Servers
product_url: cloud-servers
---

This article provides instructions for developers who are migrating from
another hosting provider, such as Azure or Linode, to the Rackspace
Cloud. These instructions are meant as a high-level overview and are not
specific to any particular hosting provider. If you need further
assistance for complex infrastructures, you can use [Rackspace Migration Services](https://www.rackspace.com/migration/cloud).

### Prerequisites

-   A Rackspace cloud services account
-   Access to your account with your current hosting provider

### Preparation

Select an equivalent size and scope for the Rackspace Cloud Servers
instance to provision based on your existing cloud instance size
and configuration. Remember to list any resources you want to
migrate from your current hosting provider, including application and
database resources.

For a tour of Rackspace Cloud products, you can read the [Rackspace Core Infrastructure Guide](https://developer.rackspace.com/docs/user-guides/infrastructure/cloud-intro/cloud-tour/).

### Provision and configure the Cloud Servers instance

Depending on the size of your current server and operating system,
select an equivalent instance type and provision a new instance on
[Rackspace Cloud Servers](/how-to/create-a-cloud-server).

### Migrate data

After you back up the data on your old server, use one of the following
methods to transfer your data from your old hosting provider to your
Rackspace Cloud Server.

**Note:** There is no complete method of migrating data from another
hosting provider. The migration method you use depends on the nature of
your data.

#### rsync

You can use rsync to tunnel between your two servers and transfer your
data. The steps below show you how to allow both your old server
instance and Rackspace server instance to communicate.

1.  Log in as root to your old server.
2.  Be sure that you have rsync installed on your old server. You can do
    this by running this command:

        rsync -version

    If necessary, install rsync:

        apt-get install rsync

3.  Use SSH to log into your Rackspace server from your old server.
    Generate an SSH key from your old server if you have no done so
    already:

        ssh-keygen -t rsa -b 4096 -v

4.  Transfer your SSH key to your Rackspace server. Substitute your new
    Rackspace server's IP Address in the command below.

        ssh-copy-id 111.344.65.781

5.  Copy your old server files using rsync. Replace the IP address after
    `root@` with the IP address of your Rackspace cloud server.

        rsync --exclude="/sys/*" --exclude="/proc/*" -aHSKDvz -e ssh / root@111.344.65.781:/media/xvda/

#### Other methods

Besides rsync, you can transfer data from an old server to Rackspace in
a number of different ways. The methods below use Rackspace Cloud Files
to copy data from your old servers, than using that data to provision
new servers with Rackspace.

-   **Use OpenStack Swift, a command-line interface, to transfer data
    from your old sever to Rackspace Cloud Files.**

    Using this method, you install Swift on your old server and directly
    copy your data from your old server to Cloud Files, without
    downloading the files locally.

-   **Install a GUI tool on your local computer**

    In certain cases, like if your old server is Windows based, you need
    to install a GUI tool (such as
    [Cyberduck](https://cyberduck.io/?l=en)) to upload data onto Cloud
    Files.

-   **Use the Cloud Control Panel to upload files**

    The Cloud Control Panel enables you to upload data from your local
    computer to your new server. This method is useful when you do not
    want to install additional software to transfer your data. However,
    we do not recommend downloading your data locally because it is not
    as secure as using the other methods above.

After your data is uploaded to Cloud Files, download and restore the
data on your server.

### Configure

Once your data from your old server is stored on your Rackspace server,
make any necessary configuration changes for your application and
database.

### Test after migration

Remember that hosting providers have their own configurations, syntax,
and services. This is why it is important to test your new Rackspace
configuration. You can get the most out of testing your configuration
through these techniques:

-   Implement monitoring and backup solutions. Focus on [enhancing security](/how-to/configuring-basic-security-0).
-   Thoroughly [test the applications](/how-to/application-and-load-testing-guidelines)
    deployed on your Rackspace Cloud Server.
-   Make any changes to your configuration files as necessary. This
    could include any reference hostnames, IP addresses, and file paths.
