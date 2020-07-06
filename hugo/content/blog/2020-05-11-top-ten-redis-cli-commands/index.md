---
layout: post
title: "Top ten Redis CLI commands"
date: 2020-05-11
comments: true
author: Conrad Weidenkeller
published: true
authorIsRacker: false
categories:
    - Database
canonical: https://www.objectrocket.com/blog/how-to/top-10-redis-cli-commands/
metaTitle: "Top ten Redis CLI commands"
metaDescription: "Redis uses a very straightforward command line interface. Though it’s relatively simple, it does provide some interesting features that one might not expect. Let’s go over some of the basics and work our way around most of the client’s functionality and features."
ogTitle: "Top ten Redis CLI commands"
ogDescription: "Redis uses a very straightforward command line interface. Though it’s relatively simple, it does provide some interesting features that one might not expect. Let’s go over some of the basics and work our way around most of the client’s functionality and features."
---

*Originally published on April 14, 2015, at ObjectRocket.com/blog.*

Redis&reg; uses a straightforward command-line interface (CLI). Though it’s relatively simple, it does provide
some interesting features that you might not expect. Let’s go over some of the basics and work our way
around most of the client’s functionality and features.

<!--more-->

![]({% asset_path 2020-05-11-top-ten-redis-cli-commands/Picture1.png %})

Here are the top ten Redis commands:

### 1: Connect and authenticate in one step

To start, you have a simple connection:

    cweid@strange:~$ redis-cli -h 127.0.0.1 -p 6379 -a mysupersecretpassword
    127.0.0.1:6379> PING
    PONG

Alright! You connected to your very own Redis server and authenticated by using your password.

### 2: Connect and authenticate in two steps

Alternatively, you can omit the `-a` option and authenticate after you connect:

    cweid@strange:~$ redis-cli -h 127.0.0.1 -p 6379
    127.0.0.1:6379> AUTH mysupersecretpassword
    OK
    127.0.0.1:6379> PING
    PONG

### 3: Connect and authenticate via a UNIX socket

If your Redis server and client run on the same machine, you might choose to connect via a UNIX&reg; socket.

**Note**: If you provide a hostname and port as well as a socket, `redis-cli` connects via the UNIX socket.

    cweid@strange:~$ redis-cli -s /tmp/redis.sock
    127.0.0.1:6379> AUTH mysupersecretpassword
    OK
    127.0.0.1:6379> PING
    PONG

Okay, now that you understand how to connect and authenticate to your Redis instance via the command line,
let’s see some examples of useful things you can do with it.

### 4: Run a command and send the output to standard out

Let’s say you want to execute a command via the command line and send only the output to standard out:

    cweid@strange:~$ redis-cli -h 127.0.0.1 -p 6379 -a mysupersecretpassword PING
    PONG

### 5: Execute the same command several times

Perhaps you’d like to execute the same command *n* number of times

    cweid@strange:~$ redis-cli -h 127.0.0.1 -p 6379 -a mysupersecretpassword -r 4 PING
    PONG
    PONG
    PONG
    PONG

Notice that you added a `-r` to your command to supply the *repeat* option.

### 6: Execute the same command several times with a one-second delay

Alternatively, you can add a delay by using `-i` in conjunction with `-r`.

    cweid@strange:~$ redis-cli -h 127.0.0.1 -p 6379 -a mysupersecretpassword -i 1 -r 4 PING
    PONG
    PONG
    PONG
    PONG

This command adds a one-second sleep between each `PING` command.

### 7: Change the repeated execution delay to sub-second

You can also supply sub-seconds to the `-i` option by using a floating number:

    cweid@strange:~$ redis-cli -h 127.0.0.1 -p 6379 -a mysupersecretpassword -i 0.1 -r 4 PING
    PONG
    PONG
    PONG
    PONG

This command runs the `PING` command every 10th of a second.

### 8: Get diagnostic information about your Redis instance

To generate some simple diagnostic information about the Redis instance that you connected to, simply run
`redis-cli` with the `–stat` option.

    cweid@strange:~$ redis-cli -h 127.0.0.1 -p 6379 -a mysupersecretpassword --stat
    ------- data ------ --------------------- load -------------------- - child -
    keys       mem      clients blocked requests            connections          
    0          790.80K  1       0       122 (+0)            16          
    0          790.80K  1       0       123 (+1)            16          
    0          790.80K  1       0       124 (+1)            16          
    0          790.80K  1       0       125 (+1)            16          
    0          790.80K  1       0       126 (+1)            16          

This command provides the following information:

- The number of keys set on the server
- The server’s total memory usage
- The total number of clients connected or blocked
- The total number of requests the server has served
- The total current number of connections

Use this command to get an overview of the Redis server as a whole. Think of it as stating a file.

### 9: Check the Redis command latency

Now that you know how to generate some simple stats about a Redis server, let’s check the latency of Redis
commands coming in. You can do this from the command line:

    cweid@strange:~$ redis-cli -h 127.0.0.1 -p 6379 -a mysupersecretpassword --latency
    min: 0, max: 1, avg: 0.13 (763 samples)

Here you see the minimum, maximum, and average request time, as well as the number of samples taken.

**Note**: The information displays in microseconds. For more info about Redis latency, take a look at the
          documentation for [latency monitoring](https://redis.io/topics/latency-monitor).

### 10: Analyze your keyspace

To analyze your keyspace in search of large strings or other data structures, run the `–bigkeys` option.
This command helps you to find large keys in our keyspace. It also shows a count of the overall distribution
of key types.

    cweid@strange:~$ redis-cli -h 127.0.0.1 -p 6379 -a mysupersecretpassword --bigkeys
    # Scanning the entire keyspace to find biggest keys as well as
    # average sizes per key type.  You can use -i 0.1 to sleep 0.1 sec
    # per 100 SCAN commands (not usually needed).

    [00.00%] Biggest string found so far 'user:paul' with 4 bytes
    [00.00%] Biggest string found so far 'barrrr' with 19612 bytes

    -------- summary -------

    Sampled 4 keys in the keyspace!
    Total key length in bytes is 29 (avg len 7.25)

    Biggest string found 'barrrr' has 19612 bytes

    4 strings with 19624 bytes (100.00% of keys, avg size 4906.00)
    0 lists with 0 items (00.00% of keys, avg size 0.00)
    0 sets with 0 members (00.00% of keys, avg size 0.00)
    0 hashs with 0 fields (00.00% of keys, avg size 0.00)
    0 zsets with 0 members (00.00% of keys, avg size 0.00)

This output gives you a lot of useful information back about different keys, including their types and sizes.

### Conclusion

Overall, the Redis CLI is a powerful tool to help you manage your Redis instance. The ability to use its built-in
options really helps you analyze a problematic Redis server.

<a class="cta blue" id="cta" href="https://www.rackspace.com/data/dba-services">Learn more about Rackspace DBA Services.</a>

Visit [www.rackspace.com](https://www.rackspace.com) and click **Sales Chat**
to get started.

Use the Feedback tab to make any comments or ask questions.
