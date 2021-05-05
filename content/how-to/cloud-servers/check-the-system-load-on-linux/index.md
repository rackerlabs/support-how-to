---
permalink: check-the-system-load-on-linux
audit_date: '2020-10-09'
title: Check the System Load on Linux
type: article
created_date: '2012-06-21'
created_by: Rackspace Support
last_modified_date: '2020-10-09'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

When the demands of a [running program](/support/how-to/checking-running-services-on-linux)
cause it to request excessive resources from your server, you might experience
poor performance and system instability.

### Uptime

Check the load on your server using the `uptime` command.

    $ uptime
    15:16:45 up 41 days,  2:35,  2 users,  load average: 0.01, 3.01, 2.70

The example shows the output from `uptime`. When the command ran at
15:16:45, the server had been up for `41 days 2 hours and 35 minutes`,
there were two users logged on, and the load averages were `0.01`, `3.01`, and
`2.70`.

The load average is the work the system is doing. The
three numbers show the load averages for the last minute, 5 minutes, and
15 minutes respectively. A load average of `1` reflects the
full workload of a single processor on the system. A load
of `2` on a system with two CPUs means that
those CPUs were working at maximum. On a
system with four CPUs, that `2` reflects a workload using about half of
the available processing power.

Under normal circumstances, you want the load average to be 70% of
your total CPU usage or less. You can check the number of CPUs available
to your instance by running the following command:

    $ grep processor /proc/cpuinfo | wc -l

If the load averages show that the load is increasing and is higher than the
number of CPUs, you should investigate the cause. A load greater than the number
of CPUs means that the system is queuing up processor requests, which 
reduces performance.

### top

The `top` command displays real-time information regarding the server's
resource usage. The first few lines provide a summary of the
resource utilization on your system. You can sort the list of
processes by CPU (`P`) or memory use (`M`), which allows you to quickly see
the biggest demands on your server's resources.

### free

The `free` command displays information about the server's memory usage. 
The first lines provide a summary of the memory usage on your system.  
The **free** column displays the amount of free memory, which is generally minimal
because unused memory is a wasted resource.  The  **available** column displays
how much memory is available to allocate to existing or new processes.

### vmstat

 The amount of system memory is one of the most common restraining factors. 
 The *swap* is an area of the hard drive where data is moved to free up 
 physical memory (RAM) for a process to use (not all servers have swap space configured). 
 If your system consumes most of its swap area, that might mean that the server is trying to do 
 more than its available memory permits not that it's low on memory.  

If you have configured swap space and you suspect your server is running out
of standard memory, you can use `vmstat` to show how much swapping is
occurring.

The following example displays a system's virtual memory statistics 10
times at 5-second intervals.

    $ vmstat 5 10
    procs -----------memory-------------  ---swap---- -----io---- --system--  -----cpu------
    r  b    swpd    free   buff  cache       si    so    bi    bo   in    cs us sy  id wa st
    2  3   138096   3904    140    584    14829 33632 16684 33633 1353 11562 64  9  16 11  0
    7  4   156592   3800    132    492    53570 48618 54264 48622 2762 8148  20  5  50 24  0
    2  7   258552   3040    128    668    37910 39822 39766 39826 2763 10861 43  8  23 26  0
    7  4   261608   4312    116    776    41696 30854 42171 30855 2771 8631  26  6  33 35  0
    3  4   259316   3824    112    576    44616 32316 44697 32320 2746 7087  15  4  52 28  0
    0  5   257000   3376    116    880    25895 19847 26622 19848 1673 2877   1  2  68 29  0
    4  4   263240   3384    124   1424    30018 21066 30497 21070 1732 4559   9  3  64 24  0
    2 14   264656   5740    120   1812    27685 19030 28029 19031 2194 5345  11  3  51 35  0
    6  3   338044   3764    132   1568    20087 31066 20470 31070 1798 9847  46  6  33 14  0
    2  4   325904   4048    108   1172    13251 7190  13812  7190 1193 8838  38  5  24 32  0

In the example, the **free** column shows that the amount of free memory is
only around 4MB.

The **si** and **so** columns show the amount of data transferred
between the system's swap and its memory. In this example, you can see
there is lots of data being moved. **so** shows the amount of data being
moved to the swap to free up memory. **si** shows the amount of data being
pulled from the swap back into memory. This happens when a process needs the data to run.

When a server is constantly swapping into and out of memory, that
indicates that the load on it is too great for the available
resources. Use the `top` command to identify the
processes that are consuming the most resources.

### Summary

If `top` and `vmstat` indicate that the server is using all its resources,
you need to optimize your current set up. For example, you can
run some processing jobs outside peak hours, kill any unrequired
processes, and reconfigure other processes so they use fewer resources. You might 
also want to consider increasing the size of your server to match
your requirements better.

If your application runs and looks healthy,  check that it is listening for
network connections. See if the service is listening on the correct 
socket by using the `netstat` command. Review [Checking Listening Ports with netstat](/support/how-to/checking-listening-ports-with-netstat)
for more information.
