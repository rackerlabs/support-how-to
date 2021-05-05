---
permalink: mounting-cloud-files-with-cloudfuse
audit_date: '2021-02-11'
title: 'Mounting Cloud Files with Cloudfuse'
type: article
created_date: '2021-02-09'
created_by: David Fonseca
last_modified_date: '2021-02-11'
last_modified_by: Carlos Arriaga
product: Cloud Files
product_url: cloud-files
---

### Mount Cloud Files with Cloudfuse

This article shows you how to install and use Cloudfuse&reg;, a tool to access Rackspace Cloud Files on CentOS&reg; and the
Ubuntu&reg; operating system. Cloud Files is a storage service to provide a safe, secure, automatically-resizing, and
and network-accessible way to store data.

#### Prerequisites

1. Download the source code, https://github.com/redbo/cloudfuse/archive/master.zip, and unzip.
2. Use the following command to install any dependencies: 

    CentOS: `$ yum install gcc make fuse-devel curl-devel libxml2-devel openssl-devel json-c-devel json-c json_simple json_diff`
    Ubuntu: `$ apt-get install build-essential libcurl4-openssl-dev libxml2-dev libssl-dev libfuse-dev libjson-c-dev`

#### Procedure

To compile and install the application, go to the folder where you unzipped it and run the following commands:

    $ ./configure
    $ make
    $ sudo make install
    
Run the following command to install `fuse` to use this application. (Note: It might have been installed as a dependency.)

    $ sudo yum install fuse

After you run the preceding commands, Cloudfuse is installed and ready to launch. However, you need to configure it.

### Configure Cloudfuse

To configure Cloudfuse, create the file **~/.cloudfuse**:

- username=[Account username for authentication, required]
- api_key=[API key for authentication with Rackspace]
- tenant=[Tenant name for authentication with Openstack]
- password=[Authentication password with Openstack]
- authurl=[Authentication URL, defaults to the Rackspace cloud]
- region=[Regional endpoint to use]
- use_snet=[True to use Rackspace ServiceNet for connections]
- cache_timeout=[Seconds for directory caching, default 600]
- verify_ssl=[False to disable SSL cert verification]

For authenticating with the Rackspace cloud, set at least the **username** and **api_key**.

For authenticating with Keystone, define **username**, **password**, **tenant**, and **authurl**.

You can also specify these settings as mount options by using the following command:

    cloudfuse -o username=redbo,api_key=713aa... mountpoint/

Or as mount options in **/etc/fstab**:

    cloudfuse /mnt/cloudfiles fuse username=redbo,api_key=713aa...,user 0 0

It also inherits several command-line arguments and mount options from the Fuse framework. The `-h` argument should provide a summary.

#### Next steps

Now you can upload files to Rackspace Cloud Files.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
