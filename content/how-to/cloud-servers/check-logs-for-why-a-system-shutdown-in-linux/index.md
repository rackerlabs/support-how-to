---
permalink: check-logs-for-why-a-system-shutdown-in-linux
audit_date:
title: 'Check Logs for why a System Shutdown in Linux'
type: article
created_date: '2021-04-06'
created_by: Daniel Perez
last_modified_date: '2021-26-11'
last_modified_by: Carlos Alzaga
product: Cloud Product
product_url: cloud-Product
---

# Linux System shutdown logs.

There are different ways to determine the causes of a system shut down in Linux; was it run from console? or someone just simply hit the power button? 

**Note:** We must consider when a system shuts down in a normal way meaning: a user with root provileges or an acpi script; either way we can find out by checking the logs.

### Advanced Configuration and Power Interface

An Advanced Configuration and Power Interface (ACPI) shutdown is a signal sent to the OS by an ACPI compliant chipset, example: when you push the power button. There are other reasons the system may have a shutdown like overheating or even low battery. 

Next you will find a list of commands that might help us to determine the user and causes of a System Shutdown: 

### The who command

The command `who -b` will print the time of the last system boot.

```sh
[root@rackspace ~]# who -b
         system boot  2018-11-21 10:13
[root@rackspace ~]#    
```

### The last command
    
The command `last` is used to display a listing of last logged in users.

```sh
[root@rackspace ~]# last
rack   pts/0        :0               Thu Dec  2 07:45   still logged in
reboot   system boot  5.8.0-63-generic Thu Dec  2 07:45   still running
rack   pts/0        :0               Wed Dec  1 08:13 - down   (08:52)

wtmp begins Thursday Dec 2 08:15:00 2021

[root@rackspace ~]$ 
```

To show the last reboot time and date.

```sh
[root@rackspace ~]# last reboot | head
reboot   system boot  3.10.0-862.14.4. Wed Nov 21 10:13 - 13:10 (1107+02:57)
reboot   system boot  3.10.0-862.14.4. Wed Nov 21 10:10 - 13:10 (1107+02:59)
reboot   system boot  3.10.0-862.14.4. Wed Nov 21 10:06 - 13:10 (1107+03:03)
reboot   system boot  3.10.0-862.14.4. Wed Nov 21 03:46 - 13:10 (1107+09:24)
reboot   system boot  3.10.0-862.14.4. Tue Nov 20 06:25 - 13:10 (1108+06:44)
reboot   system boot  3.10.0-862.14.4. Tue Nov 20 06:23 - 13:10 (1108+06:46)
reboot   system boot  3.10.0-862.14.4. Tue Nov 20 05:16 - 13:10 (1108+07:54)
reboot   system boot  3.10.0-862.14.4. Tue Nov 20 04:15 - 13:10 (1108+08:54)
reboot   system boot  3.10.0-862.14.4. Tue Nov 20 04:09 - 13:10 (1108+09:00)
reboot   system boot  3.10.0-862.14.4. Tue Nov 20 04:02 - 13:10 (1108+09:08)
[root@rackspace~]# 
```

We will also want to find the systems last shutdown date and time and we will use the following:

```sh
[root@rackspace~]# last -x | grep -C1 'shutdown\|reboot' | head
runlevel (to lvl 3)   3.10.0-862.14.4. Wed Nov 21 10:14 - 13:13 (1107+02:58)
reboot   system boot  3.10.0-862.14.4. Wed Nov 21 10:13 - 13:13 (1107+02:59)
root     pts/1        134.213.179.10   Wed Nov 21 10:11 - crash  (00:01)    
reboot   system boot  3.10.0-862.14.4. Wed Nov 21 10:10 - 13:13 (1107+03:02)
root     pts/1        134.213.179.10   Wed Nov 21 10:07 - crash  (00:03)    
reboot   system boot  3.10.0-862.14.4. Wed Nov 21 10:06 - 13:13 (1107+03:06)
root     pts/1        10.191.200.5     Wed Nov 21 03:47 - crash  (06:19)    
--
root     pts/1        10.191.200.5     Wed Nov 21 03:47 - 03:47  (00:00)    
reboot   system boot  3.10.0-862.14.4. Wed Nov 21 03:46 - 13:13 (1107+09:26)
[root@rackspace~]# 
```

Where:
- `-x` displays the system shutdown entries and run level changes.`

### The uptime command

To find out for how long the Linux system has been up we will use the following command `uptime`

[root@rackspace~]# uptime -s
2020-11-21 10:13:26

[root@rackspace~] uptime -p
up 1 years, 2 weeks, 1 day, 3 hours, 1 minute
[root@rackspace~]# 

### Conclusion
In conclusion, there are ways to determine the reasons of a system shutdown and the users that might have done a system shutdown.

### Related articles
- [How to monitor system authentication logs in Ubuntu](https://docs.rackspace.com/support/how-to/how-to-monitor-system-authentication-logs-in-ubuntu/)
