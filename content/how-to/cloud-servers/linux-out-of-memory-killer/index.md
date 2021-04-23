---
permalink: linux-out-of-memory-killer/
audit_date: '2021-04-23'
title: Linux Out-of-Memory Killer
type: article
created_date: '2021-01-11'
created_by: John Abercrombie
last_modified_date: '2021-04-23'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

### About the Out-of-Memory (OOM) Killer

Every Linux distribution has this process included in it. What is it
though? To put it simply, this is the server’s self-preservation
process. To fully understand what that means, we have to first look at
how Linux allocates memory.

The Linux kernel allocates memory on a on-demand basis for all applications
currently running on the server. Since this is generally done up front,
applications usually don’t use all the memory assigned. This allows the
kernel to over-commit memory in order to make memory more efficient. This
allows the kernel to commit more memory than is actually physically
available. Typically, this is not an issue. The problem occurs when too many
applications start utilizing the memory allotted to them at once. The server
runs the risk of crashing due to running out of memory. To prevent the
server from reaching that critical state, the kernel also contains a process
known as the OOM Killer. This is the process the kernel uses to start killing
non-essential processes in order to the server to remain operational.

While one may mistakenly think this should not be a problem, the OOM Killer
kills processes that the server has deemed non-essential, not the user. As an
example, the two applications that are usually killed first are Apache and
MySQL since they use a large amount of memory. Anyone with a website
immediately knows that is a big problem. If the OOM Killer kills either of
those, a website is almost immediately down.


### Why Was X Process Killed?

When trying to find out why an application or process was killed by the OOM
killer, there are a few things to look for that can help reveal how and why the
process was killed. The first place to look is in the syslog with the following
command:

```sh
$ grep -i kill /var/log/messages*
host kernel: Out of Memory: Killed process 5123 (exampleprocess)
```

The output you receive will look similar to the above. The capital K in
‘Killed’ tells you that the process was killed with a `-9` signal, and this
typically is a good indicator that the OOM Killer is to blame.  

Additionally, we are able to check the server’s high and low memory
statistics. We can do that with the following command:

```sh
$ free -lh
```

The `-l` switch shows high and low memory statistics, and the `-h` switch puts
the output into gigabytes for easier human readability. You can change this
to the `-m` switch if you prefer the output in megabytes. An added benefit of
this command is it also gives you the Swap memory usage information as
well. One caveat to this is that the free command is only a snapshot of what
is happening now, so this does need to be checked multiple times to get an
idea of what is happening.

Fortunately, there is an option for obtaining memory output over a period
of time, and it even has an option for an easy-to-read table. For this, we
will utilize the `vmstat` command like so:

```sh
$ vmstat -SM 10 20
```

The above command outputs system memory information every 10 seconds twenty
times. That is what the 10 and 20 mean in the above command example. Both
of these numbers can be changed to fit a frequency and total that better
suits your needed information. The -S switch displays the output in a table
format, and the -M switch shows the output in megabytes. This can be used to
show what is actively going on over the course of the time parameters you
predetermine.

Another good tool to use is, of course, the top command, which can give you
real time updates for memory by hitting ***shift + M*** once you’ve entered the
top command. The default variable that top orders its output by is CPU, but
hitting the **shift + M** afterward shifts the variable to memory instead.

### Configuring the OOM Killer

Now for the main event. Since the OOM Killer is a process, it can be configured
to better fit your needs. In fact, the OOM Killer already has several
configuration options baked in that allow server administrators and
developers choices as to how they want the OOM Killer process to behave when
faced with a memory-is-getting-dangerously-low situation. Please keep in
mind that these options can vary depending on factors like environment and
running applications.

As with anything involving changing configurations, it is always
better to test proposed changes in a development/staging environment
before attempting to make those changes in a live production environment, so
you know how the system will react to those changes. Finally, even if you’re
confident in what you’re doing, always make a backup before
you make any changes. For the following options, you must be the root user.

#### Option 1: Reboot

The first option involves editing the sysctl configuration
(**/etc/sysctl.conf**) which allows your changes to remain between reboots.

```sh
sysctl vm.panic_on_oom=1
sysctl kernel.panic=X
echo “vm.panic_on_oom=1” >> /etc/sysctl.conf
echo “kernel.panic=X” >> /etc/sysctl.conf
```

The `X` in the above command is how many seconds you want the system to
wait before it reboots.

Now, in most situations, a reboot is not feasible each and every time the
system gets critically low on memory. While this approach may be necessary
in some situations, it is doubtful that every situation will need or
warrant an entire system reboot to address the issue.

Option 2: Protect/Sacrifice Processes

In this particular option, we take a more fine honed approach. We can either
(a) protect certain processes by making them less likely to be killed by
the OOM Killer, or (b) set certain processes to be more likely to be
killed. You can accomplish this with the following:

```sh
echo -15 > /proc/(PID)/oom_adj			(less likely)
echo 10 > /proc/(PID)/oom_adj			(more likely)
```

The `(PID)` above must be replaced by the particular process’s ID (or PID). In
order to protect or sacrifice a process, you’ll want to find the parent
process (ie, the original). You can locate the PPID (parent process ID) with
the following command where process is replaced with the process you are
wanting to find the PPID of (ie, Apache, MySQL, etc.):

```sh
pstree -p | grep "process" | head -1
```

You can see that this option is a little better than the nuclear option of an
entire system reboot. However, what if you have a process that is crucial
and cannot be killed?

#### Option 3: Exempt a Process

Before we show this command, this option comes with a cautionary note. This
can, in some circumstances, cause unintended behavior changes which will
largely depend on the system and resource configurations. If the kernel is
unable to kill a process utilizing a large amount of memory, it will start
killing other available processes. This can include processes that might be
important operating system processes. The system could potentially go down
completely as a result. Suffice it to say, use this option with extreme
caution.

Since the valid ranges for OOM Killer Adjustments is between -16 and +15, a
setting of -17 will exempt a process entirely since it will fall outside
the scope of acceptable integers for the OOM Killer’s adjustment scale. The
general rule is: the higher the numerical value, the more likely a process
is picked to be killed. Therefore, the command to completely exempt a
process is:

```sh
echo -17 > /proc/(PID)/oom_adj
```

#### Option 4: The Risky One

**Warning**: This is not recommended for production environments.

If reboots, protective/sacrificial, or exemptions just aren’t good
enough, there is the final, and most risky, option. This is the
“disable the OOM Killer completely” option.

This option can cause any of the following: a serious kernel panic; a system
hang; or a full system crash. Why? It removes the protective element of the
server keeping itself from running out of resources. If the OOM Killer is
disabled completely, then there is nothing protecting the server from
running out of memory completely. Please utilize extreme restraint and
caution when considering this option.

The command for this option looks like this:

```sh
sysctl vm.overcommit_memory=2
echo “vm.overcommit_memory=2” >> /etc/sysctl.conf
```

Hopefully, you understand the OOM Killer more, and you now are equipped to
tailor the process to your individual environment and system needs. As a
general rule, please exercise caution whenever you edit kernel
processes, and the OOM Killer is no exception to that rule.
