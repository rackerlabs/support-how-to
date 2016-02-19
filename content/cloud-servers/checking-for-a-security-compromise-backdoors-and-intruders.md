---
node_id: 3432
title: 'Checking for a Security Compromise: Backdoors and Intruders'
type: article
created_date: '2013-04-25'
created_by: Rose Contreras
last_modified_date: '2015-05-27'
last_modified_by: Kyle Laffoon
product: Cloud Servers
product_url: cloud-servers
---

In our imperfect world it is all too possible for a cloud server to get
hacked. We can, however, find the culprit and make sure our cloud server
security prevents a future security breach. In this article we will
learn some techniques and tools useful for investigating our cloud
servers if we suspect they've been compromised.

### Introduction

Cloud servers can be compromised as a result of various factors.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/SecChecks-5_1.png" width="396" height="119" />

If your cloud server has been compromised, don't panic. Panic leads to
poor decisions, and then the situation could become worse. Instead, try
to understand what happened and make sure your cloud server does not get
compromised again in the same manner. This article's objective is
simple: Learn from your mistakes and don't make the same mistakes twice.

In this article we will cover the tools we can use before going into
rescue mode (to be covered in the next article [Checking for a Security
Compromise: Rescue Mode
Investigation](/how-to/checking-for-a-security-compromise-rescue-mode-investigation)).
The cloud server used for this article series was running Ubuntu 8.10;
however, the steps demonstrated will be similar for other Linux
distributions.

### Important Warning

Before proceeding any further, you must make an important decision: Do
you plan to involve law enforcement and prosecute the attacker? If you
do, then leave the compromised system alone and make no changes to it.
Any changes you make post-attack could complicate and taint the
evidence. Because of that, a common policy is to power off a system once
a compromise is detected and leave it off until law enforcement is ready
to investigate.

### Checking Network Connections

Let's begin our investigation by checking our cloud server's network
connections.

#### Usage

    netstat -an

This command helps you check for any backdoors which have been opened on
your cloud server.

    netstat -an
    Active Internet connections (servers and established)
    Proto Recv-Q Send-Q             Local Address                     Foreign Address            State
    tcp        0               0                         0.0.0.0:22                               0.0.0.0:*                  LISTEN
    tcp        0               0                         0.0.0.0:80                               0.0.0.0:*                  LISTEN
    tcp        0               0                         0.0.0.0:25                               0.0.0.0:*                  LISTEN
    tcp        0             284                      1.2.3.4:6697                           5.6.7.8:34506              ESTABLISHED

In this case we see **port 6697** is open. This is a port commonly used
by IRC servers. This is not a good sign, unless we're running our own
chat server. We can sniff any connections to that port using
**tcpdump**. 

    tcpdump src port 6697

This will capture all the packets with **destination port 6697**.

### Using lsof

lsof is a command line utility which stands for **list open files**. It
is used in many Unix-like systems to report a list of all open files and
the processes that opened them. By default Linux treats everything,
including devices, as a file. This makes lsof a very powerful tool. For
example, we can use lsof to see what user has a particular file open:

    sudo lsof /etc/passwd

If we discover the username under the intruder's control, lsof can be
used to display all his running processes:

    sudo lsof -u hisUserName

lsof also helps us check our network connections. Investigating various
aspects of our cloud server with multiple tools is important because if
we suspect the system is compromised, we can't be sure which commands
will provide reliable results. Also, lsof provides some options which
netstat does not.

To list all the open IP sockets associated with your cloud server's SSH
server, run the following command:

    sudo lsof -i:22

### Summary

We have now learned some techniques that can be used to discover
backdoors and track intruders on our slice. This will help us avoid a
repeat of whatever situation or mistake led up to the compromise, so
we're less likely to get hacked again in the same way. In the next
article, [Checking for a Security Compromise: Rescue Mode
Investigation](/how-to/checking-for-a-security-compromise-rescue-mode-investigation),
we will learn how to investigate our cloud server in rescue mode.
