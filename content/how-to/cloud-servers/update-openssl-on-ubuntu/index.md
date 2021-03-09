---
permalink: update-openssl-on-ubuntu/
audit_date: '2021-03-09'
title: 'Update OpenSSL on Ubuntu'
type: article
created_date: '2020-02-16'
created_by: Alfonso Murillo
last_modified_date: '2021-03-09'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

OpenSSL is an open-source toolkit for Transport Layer Security (TLS) and
Secure Sockets Layer (SSL) protocols, as well as cryptography library. The
purpose of this article is to show how to update OpenSSL on the Ubuntu operating
system.

### Check the current OpenSSL version

To verify the OpenSSL installation and version you can execute the following
command:

    openssl version -a

### Update or install OpenSSL

In case OpenSSL is not installed on your system, this step can be used to
install or update to the newest version of the OpenSSL package.

1. Run the following instruction:

        sudo apt-get install openssl

    **Note**: If the result line is `0 packages updated` it means there are no
   available updates for the OpenSSL package.

### Update all system packages

To update all system packages not only OpenSSL, you need to update the list of
available upgrades:

    sudo apt-get update

To install all new available versions run the command:

    sudo apt-get upgrade

