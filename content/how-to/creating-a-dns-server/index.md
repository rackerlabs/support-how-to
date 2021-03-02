---
permalink: creating-a-dns-server/
audit_date:
title: Creating a DNS Server
type: article
created_date: '2021-02-25'
created_by: Cris Hugo
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

*This article describes the process of Creating a DNS Server
This article discuss how to install and configure the Bind9 DNS server as a caching or forwarding DNS server.*

## Caching DNS Server

This type of server is also known as a resolver because it handles recursive queries and generally can handle the grunt work of tracking down DNS data from other servers.

### 1. The first step in implementing a Bind DNS server is to install the actual software.

```sh
sudo apt-get update
sudo apt-get install bind9 bind9utils bind9-doc
```

Now, the Bind components are installed, we will begin to configure the server. 

### 2. Configure a Caching DNS Server 

  For a caching DNS server, we will only be modifying the named.conf.options file. Open this in your text editor with sudo privileges:

```sh
sudo nano named.conf.options
```

the file looks like this:

```sh
options {
        directory "/var/cache/bind";

        dnssec-validation auto;

        auth-nxdomain no;    # conform to RFC1035
        listen-on-v6 { any; };
};
```

### 3.Configure a list of IP addresses or network ranges that we trust.

Above the options block, we will create a new block called "acl". Create a label for the ACL group that you are configuring. In this example we will call the group "rackspace".

```sh
acl rackspace {
};

options {
    . . .
```

Then, list all IP addresses and networks allowed to use this DNS server wihting the acl block.

```sh
acl rackspace {
    192.0.2.0/24;
    localhost;
    localnets;
};

options {
    . . .
```

Then configure the capabilities in the options block. Within this block, add the following lines:

```sh
options {
    directory "/var/cache/bind";

    recursion yes;
    allow-query { rackspace; };
    . . .
```

When you are finished making these changes, save and close the file.

This is all for creating a caching DNS server. If this is the server type you want to use, skip ahead to how to check your configuration files and  restart the service.


## Forwarding DNS Server

### 1.Set up a caching DNS Server
Start with the configuration of the caching server in the previous section. The named.conf.options file should look like this:


```sh
acl rackspace {
        192.0.2.0/24;
        localhost;
        localnets;
};

options {
        directory "/var/cache/bind";

        recursion yes;
        allow-query { rackspace; };

        dnssec-validation auto;

        auth-nxdomain no;    # conform to RFC1035
        listen-on-v6 { any; };
};
```

*The forwarding server is still providing recursive services by answering queries for zones it is not authoritative for, so we need to set up a list of caching servers to forward our requests to.*
Use the ACL to restrict your DNS server to a specific list of clients.

### 2. Configure Forwarders
Create a block inside called "forwarders", within the options {} block.
Place the IP addresses of the recursive name servers that you want to forward requests to. In this example we use Google’s public DNS servers (8.8.8.8 and 8.8.4.4):

```sh
. . .
options {
        directory "/var/cache/bind";

        recursion yes;
        allow-query { rackspace; };

        forwarders {
                8.8.8.8;
                8.8.4.4;
        };
        . . .
```

Then set the forward directive to “only” since this server will forward all requests and should not attempt to resolve requests on its own.


```sh
acl racksapce {
        192.0.2.0/24;
        localhost;
        localnets;
};

options {
        directory "/var/cache/bind";

        recursion yes;
        allow-query { rackspace; };

        forwarders {
                8.8.8.8;
                8.8.4.4;
        };
        forward only;

        dnssec-validation auto;

        auth-nxdomain no;    # conform to RFC1035
        listen-on-v6 { any; };
};
```

Change the dnssec-validation setting to “yes” and explicitly enable dnssec:

```sh
. . .
forward only;

dnssec-enable yes;
dnssec-validation yes;

auth-nxdomain no;    # conform to RFC1035
. . .
```

Now you have a forwarding DNS server in place.


## Check your configuration files and restart the service

### 1.Use Bind’s tools to check the syntax of your configuration files:

```sh
sudo named-checkconf
```

When no syntax errors were find in the configuration, no output will be displayed.

If syntax errors show in your configuration files, you will be notified to the error and line number, go back and correct the errors.

### 2.Restart the Bind daemon to implement your changes:

```sh
sudo service bind9 restart
```

Save and close the file when you are finished.

## Conclusion


You should now have either a caching or forwarding DNS server configured to serve your clients. This can be a great way to speed up DNS queries for the machines you are managing.
