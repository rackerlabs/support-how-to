---
permalink: updating-openssl-on-ubuntu/
audit_date:
title: 'Updating OpenSSL on Ubuntu'
type: article
created_date: '2020-02-16'
created_by: Alfonso Murillo
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# Update OpenSSL on Ubuntu

OpenSSL is an open-source toolkit for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols, as well as cryptography library. 
The purpose of this article is to show how to update OpenSSL on the Ubuntu operating system.

### Check the current OpenSSL version

To verify that you have OpenSSL installed and its version you can execute the following command:
`openssl version -a`

### Update or install OpenSSL

In case you do not have installed OpenSSL on your system, this step is the same for installing it and for updating to the newest version of the OpenSSL package.
Run the following instruction:
`sudo apt-get install openssl`
If the result of executing this line is **0 packages updated** it means that there were no available updates for the OpenSSL package.

### Update all system packages

You can also use the commands on this section to update all the packages that are currently in your system, instead of only updating the OpenSSL one, as in the previous section.
Some packages depend on others, so if not all of them are updated it can cause compatibility issues.
For this process, you need to update the list of available packages an their versions first with the instruction: 
`sudo apt-get update`
This instruction does not install nor upgrade any package, only the list of available ones for upgrading. To install this new avilable versions you should run the command:
`sudo apt-get upgrade`


Either if you installed only the OpenSSL package or updated all system packages, you should have the latest version of the package.

If you want to know which are the latest published versions for Open SSL 
