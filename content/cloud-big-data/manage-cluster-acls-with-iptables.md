---
title: Manage cluster ACLs with iptables
type: product
created_date: '2016-03-01'
created_by: Greg Hill
last_modified_date: '2016-03-01'
last_modified_by: Greg Hill
product: Cloud Big Data
product_url: cloud-big-data
---

<p class="lead" markdown="1">Rackspace Cloud Big Data mostly limits access to intracluster traffic, 
but with some work you can modify the access control lists (ACLs) to give selective public access
to parts of your cluster.</p>

###  iptables

This article describes how iptables are used within your cluster and how you can add your own 
rules to manage access to your cluster.

Note: This article is not a tutorial on iptables

###  Add iptables rules

The most effective way to manage iptables rules in your cluster is to provide a Post-Install 
script that generates the rules you want to add.  

Your nodes are preconfigured with two iptables chains by default:

    $ sudo iptables -L
    Chain INPUT (policy DROP)
    target     prot opt source               destination
    ACCEPT     all  --  anywhere             anywhere
    ACCEPT     all  --  anywhere             anywhere             state RELATED,ESTABLISHED
    ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:ssh
    ACCEPT     icmp --  anywhere             anywhere             icmp echo-request
    CLUSTER    all  --  anywhere             anywhere
    
    Chain FORWARD (policy DROP)
    target     prot opt source               destination
    
    Chain OUTPUT (policy ACCEPT)
    target     prot opt source               destination

    Chain CLUSTER (1 references)
    target     prot opt source               destination
    ACCEPT     all  --  secondary-1.local    anywhere
    ACCEPT     all  --  slave-1.local        anywhere
    ACCEPT     all  --  slave-3.local        anywhere
    ACCEPT     all  --  gateway-1.local      anywhere
    ACCEPT     all  --  master-1.local       anywhere
    ACCEPT     all  --  slave-2.local        anywhere
    ACCEPT     all  --  ambari.local         anywhere
    USER       all  --  anywhere             anywhere
    
    Chain USER (1 references)
    target     prot opt source               destination


By default, the CLUSTER chain should by default allow local traffic from all the nodes in your 
network over the private network interface.  You might additionally see some public ports on 
certain nodes for things like ``hdfs-scp``, but for the most part, the public IP is locked down. 
Many Hadoop tools have unprotected web pages with logs and status information, but we don't want 
those to be available to the public internet by default.

You should never modify the rules in the CLUSTER chain. Those rules are managed by the product and 
will be replaced if you add or remove nodes from your cluster. Anything you add to the USER 
chain, however, will be left intact, as will any additional chains that you add.  

This article focuses on the USER chain.  Following are some steps for a common use case to get 
you started:

1. Open access on a specific port (8080 in this case):

    $ sudo iptables -A USER -p tcp --dport 8080 -j ACCEPT

2. Save your rules to disk so that they survive a restart:

    $ sudo service iptables save

3. Verify that the rules took effect:

    $ sudo iptables -n -L USER
    Chain USER (1 references)
    target     prot opt source               destination
    ACCEPT     tcp  --  0.0.0.0/0            0.0.0.0/0            tcp dpt:8080

Alternatively, to restrict access to traffic coming from a specific IP, the original command 
would be slightly different but the remaining steps remain the same:

    $ sudo iptables -A USER -p tcp -s 8.8.8.8 --dport 8080 -j ACCEPT
    $ sudo service iptables save
    $ sudo iptables -n -L USER
    Chain USER (1 references)
    target     prot opt source               destination
    ACCEPT     tcp  --  8.8.8.8              0.0.0.0/0            tcp dpt:8080

Bundle all the rules you want into a Bash script, and then upload that script somewhere like 
Github or Cloud Files.  Give the URL to that script as your Post-Install Script when you create 
a cluster.  The script will be run on every node in the cluster as it's created.

###  Limiting which hosts to add rules to

Currently there isn't a great way to decide which hosts to add the rules to.  You could try to 
detect from the system if the service for which you want to open access for is running on that 
particular node:

    if ps aux | grep -qi 'kafka'; then
        sudo iptables -A USER -p tcp --dport 6667 -j ACCEPT
    fi
    
Alternatively, you can tell which node group the host belongs to by parsing the hostname, which 
should always be ``<nodeGroup>-<nodeNumber>.local``:

    if [[ $(hostname) =~ 'slave' ]]; then
        sudo iptables -A USER -p tcp --dport 6667 -j ACCEPT
    fi

