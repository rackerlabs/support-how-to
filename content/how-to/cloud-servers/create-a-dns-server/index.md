---
permalink: create-a-dns-server
audit_date: '2021-03-03'
title: Create a DNS Server
type: article
created_date: '2021-02-25'
created_by: Cris Hugo
last_modified_date: '2021-03-03'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to perform the following tasks:

- Create a caching DNS Server.
- Create a forwarding DNS server.
- Install and configure the Bind DNS server as a caching or forwarding DNS server.

### Create a caching DNS server

This type of server is also known as a *resolver* because it handles recursive queries and
can handle the grunt work of tracking down DNS data from other servers.

#### 1. Install the software

The first step in implementing a Bind DNS server is to install the actual software.

```sh
sudo apt-get update
sudo apt-get install bind9 bind9utils bind9-doc
```

#### 2. Configure a caching DNS server 

For a caching DNS server, modify only the **named.conf.options** file. 

Run the following command to open this file in your text editor with `sudo` privileges:

```sh
sudo nano named.conf.options
```

The file looks similar to the following example:

```sh
options {
        directory "/var/cache/bind";

        dnssec-validation auto;

        auth-nxdomain no;    # conform to RFC1035
        listen-on-v6 { any; };
};
```

#### 3. Configure a list of trusted IP addresses or network ranges

Above the **options** block in the file, create a new block called **acl**. Create a label for
the ACL group that you are configuring. The following example calls the ACL group *rackspace*:

```sh
acl rackspace {
};

options {
    . . .
```

Then, list all IP addresses and networks allowed to use this DNS server within the **acl** block.

```sh
acl rackspace {
    192.0.2.0/24;
    localhost;
    localnets;
};

options {
    . . .
```

Finally, configure the capabilities in the **options** block. Within this block, add the following lines:

```sh
options {
    directory "/var/cache/bind";

    recursion yes;
    allow-query { rackspace; };
    . . .
```

When you finish making these changes, save and close the file.

You have now created a caching DNS server. If this is the server type you want to use,
skip ahead to check your configuration files and restart the service.

### Create a forwarding server

Use the following steps to forward the DNS server:

#### 1. Configure a forwarding DNS Server

For your forwarding server, start with the configuration of the caching server in the previous section.
The **named.conf.options** file should look something similar to the following example:

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

**Note:** The forwarding server is still providing recursive services by answering queries for
zones it is not authoritative for, so we need to set up a list of caching servers to forward our requests to.
Use the ACL to restrict your DNS server to a specific list of clients.

#### 2. Configure forwarders

Create a block called **forwarders**, within the **options** block. Add the IP addresses of the
recursive name servers to which you want to forward requests. The following example uses the Google
public DNS servers (`8.8.8.8` and `8.8.4.4`):

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

Then set the **forward** directive to `only` because this server needs to forward all requests and should not
attempt to resolve requests on its own.


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

Change the **dnssec-validation** and **dnssec-enable** settings to `yes`:

```sh
. . .
forward only;

dnssec-enable yes;
dnssec-validation yes;

auth-nxdomain no;    # conform to RFC1035
. . .
```

Now you have a forwarding DNS server in place. Save and close the file.


### Check your configuration files and restart the service

Use the following instructions to check your configuration files and restart the service:

#### 1. Check the configuration files

Use the Bind tools to check the syntax of your configuration files:

```sh
sudo named-checkconf
```

If the review process finds no syntax errors, no output appears.

If configuration file has syntax errors, the output shows the
error and line number. Edit the file and correct the errors.

Save and close the file when you are finished. Recheck the syntax.

#### 2. Restart the service

Use the following command to restart the Bind daemon to implement your changes:

```sh
sudo service bind9 restart
```

### Conclusion

You should now have either a caching or forwarding DNS server configured to serve your clients.
This can be a great way to speed up DNS queries for the machines you are managing.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 

