---
permalink: mounting-cloud-files-with-cloudfuse/
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
​
### Mount Cloud Files with Cloudfuse
​
This article shows you how to install and use Cloudfuse&reg; which is a tool to provide access to Rackspace’s Cloud files on CentOS&reg; and 
Ubuntu. Cloud Files at Rackspace is a storage service to provide a safe, secure, automatically resizing, and network-accessible way 
to store data.
​
#### Prerequisites

1. Download the source code https://github.com/redbo/cloudfuse/archive/master.zip and unzip.
2. Use the following command to install dependencies: 

    CentOS: `$ yum install gcc make fuse-devel curl-devel libxml2-devel openssl-devel json-c-devel json-c json_simple json_diff`
    Ubuntu: `$ apt-get install build-essential libcurl4-openssl-dev libxml2-dev libssl-dev libfuse-dev libjson-c-dev`
​
#### Procedure

Now, we are on the folder where we unzipped and we will compile and install the application. Type the following commands
in the command line:
​
 1. `$ ./configure`
 2. `$ make`
 3. `$ sudo make install`
 4. Use the following command to install fuse to use this application. It might have already been installed as a dependency.
`$ sudo yum install fuse`
​
After you run the previous commands, Cloudfuse will be on your system and ready to launch. First, you need to configure it.
​
### Configure Cloudfuse

To configure Cloudfuse, create the file **~/.cloudfuse**:

- username=[Account username for authentication, required]
- api_key=[API key for authentication with Rackspace]
- tenant=[Tenant name for authentication with Openstack]
- password=[Authentication password with Openstack]
- authurl=[Authentication url, defaults to Rackspace's cloud]
- region=[Regional endpoint to use]
- use_snet=[True to use Rackspace ServiceNet for connections]
- cache_timeout=[Seconds for directory caching, default 600]
- verify_ssl=[False to disable SSL cert verification]
​
For authenticating with Rackspace's cloud, at minimum, set the **username** and **api_key**.
​
For authenticating with Keystone, define **username**, **password**, **tenant**, and **authurl**.
​
You can also specify these settings as mount options using the command line:
`cloudfuse -o username=redbo,api_key=713aa... mountpoint/`
​
Or as mount options in `/etc/fstab`:
`cloudfuse /mnt/cloudfiles fuse username=redbo,api_key=713aa...,user 0 0`
​
It also inherits several command-line arguments and mount options from the Fuse framework. The `-h` argument should provide a summary.
​
#### Next steps

Right now you will be able to upload files to your Rackspace's Cloud Files.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
