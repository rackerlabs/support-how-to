---
permalink: mounting-cloud-files-with-cloudfuse/
audit_date:
title: 'Mounting Cloud Files with Cloudfuse'
type: article
created_date: '2021-02-09'
created_by: David Fonseca
last_modified_date:
last_modified_by:
product: Cloud Files
product_url: cloud-files
---
​
# Mount Cloud Files with Cloudfuse
​
In this article we will see how to install and use Cloudfuse which is a tool to provide access to Rackspace’s Cloud files on CentOS and Ubuntu. Cloud Files at Rackspace is a storage service to provide a safe, secure, automatically resizing and network accessible way to store data.
​
### Prerequisites
1. Download the source code https://github.com/redbo/cloudfuse/archive/master.zip and unzip.
2. Install dependecies with the following command: 
    CentOS: `$ yum install gcc make fuse-devel curl-devel libxml2-devel openssl-devel json-c-devel json-c json_simple json_diff`
    Ubuntu: `$ apt-get install build-essential libcurl4-openssl-dev libxml2-dev libssl-dev libfuse-dev libjson-c-dev`
​
​
### Procedure
Now, we are on the folder where we made the unzip and we going to compiling and install the application. We type the following commands
​
 1. `$ ./configure`
 2. `$ make`
 3. `$ sudo make install`
 4. You'll need to install fuse to use this application. It may have already been installed as a dependency.
`$ sudo yum install fuse`
​
Finished the previous commands Cloudfuse it will be on our system and ready to launch, but we going to configure it first.
​
### Configuring Cloudfuse
To configure Cloudfuse, we going to create the file ~/.cloudfuse:
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
For authenticating with Rackspace's cloud, at minimum "username" and "api_key" must be set.
​
For authenticating with Keystone, "username", "password", "tenant", and
- "authurl" should probably be defined.
​
These settings can also be specified as mount options on the command line:
- cloudfuse -o username=redbo,api_key=713aa... mountpoint/
​
Or as mount options in /etc/fstab:
- cloudfuse /mnt/cloudfiles fuse username=redbo,api_key=713aa...,user 0 0
​
It also inherits a number of command-line arguments and mount options from the Fuse framework.  The "-h" argument should provide a summary.
​
### Next steps
Right now you will be able to upload files to your Rackspace's Cloud Files  
