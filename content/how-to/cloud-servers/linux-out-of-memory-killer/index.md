---
permalink: linux-out-of-memory-killer
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

Every Linux&reg; distribution has the Out-of-Memory (OOM) Killer process included
in it, but what is it? Simply put, this is the server’s self-preservation
process. To fully understand what that means, consider how Linux allocates memory.

### Linux memory allocation

The Linux kernel allocates memory on an on-demand basis for all applications
currently running on the server. Because this generally happens upfront,
applications usually don’t use all the assigned memory. This allows the
kernel to over-commit memory, making memory more efficient. This over-commitment
allows the kernel to commit more memory than is actually physically
available. Typically, this is not an issue. The problem occurs when too many
applications start using the memory allotted to them at once. The server
runs the risk of crashing because it ran out of memory. To prevent the
server from reaching that critical state, the kernel also contains a process
known as the *OOM Killer*. The kernel uses this process to start killing
non-essential processes so the server can remain operational.

While you might think this should not be a problem, the OOM Killer
kills processes that the server has deemed non-essential, not the user. For
example, the two applications the OOM Killer usually kills first are Apache&reg; and
MySQL&reg; because they use a large amount of memory. Anyone with a website
immediately knows that is a big problem. If the OOM Killer kills either of
those, a website often crashes immediately.

### Why was a specific process killed?

When trying to find out why the OOM killer killed an application or process,
you can look for a few things that can help reveal how and why the
process was killed. The first place to look is in the **syslog** by running
the following command:

```sh
$ grep -i kill /var/log/messages*
host kernel: Out of Memory: Killed process 5123 (exampleprocess)
```

You should get output similar to the preceding example. The capital *K* in
*Killed* tells you that the process was killed with a `-9` signal, and this
typically is a good indicator that the OOM Killer is to blame.  

Additionally, you can run the following command to check the server’s high
and low memory statistics:

```sh
$ free -lh
```

The `-l` switch shows high and low memory statistics, and the `-h` switch puts
the output into gigabytes for easier human readability. You can change this
to the `-m` switch if you prefer the output in megabytes. An added benefit of
this command is it gives you the Swap memory usage information as well.
One caveat is that the `free` command provides only a snapshot of this moment,
so you need to check it multiple times to get an idea of what is happening.

Fortunately, the `vmstat` command obtains memory output over a period
of time, and it even has an option for an easy-to-read table:

```sh
$ vmstat -SM 10 20
```

The preceding command outputs system memory information twenty times at 10-second
intervals. That is what the 10 and 20 mean in the preceding example. You can change
both of these numbers to fit a frequency and total that better
suits your needs. The `-S` switch displays the output in a table
format, and the `-M` switch shows the output in megabytes. Use this command to
show what is actively going on throughout the time parameters you
specify.

Another good tool to use is, of course, the `top` command. `top` orders output by
the CPU variable by default, but if you click **shift + M** after running the `top`
command, you can get real-time updates for memory usage instead of CPU usage.

### Configure the OOM Killer

Because the OOM Killer is a process, you can configure it to fit your needs better.
In fact, the OOM Killer already has several configuration options baked in that allow
server administrators and developers to choose how they want the OOM Killer process to
behave when faced with a memory-is-getting-dangerously-low situation. Keep in
mind that these options can vary depending on factors such as environment and
running applications.

As with anything involving changing configurations, it is always
better to test proposed changes in a development or staging environment
before making those changes in a live production environment. This way,
you know how the system reacts to those changes. Finally, even if you’re
confident of your plan, always make a backup before making any changes.
For the following configuration options, you must be the `root` user.

#### Option 1: Reboot

The first option involves editing the **sysctl** configuration
(**/etc/sysctl.conf**), which allows your changes to persist between reboots:

```sh
sysctl vm.panic_on_oom=1
sysctl kernel.panic=X
echo “vm.panic_on_oom=1” >> /etc/sysctl.conf
echo “kernel.panic=X” >> /etc/sysctl.conf
```

The `X` in the preceding command is the number of seconds you want the system to
wait before it reboots.

In most situations, it's not feasible to reboot every time the
system gets critically low on memory. While this approach might be necessary
for some situations, most do not need or warrant an entire system reboot
to address the issue.

#### Option 2: Protect or sacrifice processes

This particular option requires a more fine-honed approach. You can either
(a) protect certain processes by making them less likely to be killed by
the OOM Killer or (b) set certain processes to be more likely to be
killed. You can accomplish this with the following commands:

```sh
echo -15 > /proc/(PID)/oom_adj			(less likely)
echo 10 > /proc/(PID)/oom_adj			(more likely)
```

Replace the `(PID)` placeholder in the sample command with the particular process’s
ID (or PID) you are interested in. To protect or sacrifice a process, you need to find
the parent process (the original). Use the following command to locate the PPID
(or parent process ID), where you replace the process with your process (such as Apache,
MySQL, and so on):

```sh
pstree -p | grep "process" | head -1
```

You can see that this option is a little better than the nuclear option of an
entire system reboot. However, what if you have a process that is crucial
and cannot be killed?

#### Option 3: Exempt a process

This option comes with a cautionary note. Exempting processes can, in
some circumstances, cause unintended behavior changes, which largely
depend on the system and resource configurations. If the kernel cannot
kill a process using a large amount of memory, it will start killing other
available processes. This can include processes that also might be important
operating system processes. The system could potentially go down
completely as a result. Suffice it to say, use this option with extreme
caution.

Because the valid range for OOM Killer adjustments is between `-16` and `+15`, a
setting of `-17` exempts a process entirely because it falls outside
the scope of acceptable integers for the OOM Killer’s adjustment scale. The
general rule is: the higher the numerical value, the more likely a process
is picked to be killed. Therefore, the command to completely exempt a
process is:

```sh
echo -17 > /proc/(PID)/oom_adj
```

#### Option 4: The risky option

**Warning**: Rackspace does not recommend this for production environments.

If reboots and  protecting, sacrificing, or exempting processes just aren’t good
enough, there is the final, risky option: the *disable OOM Killer completely* option.

This option can cause any of the following results:

- a serious kernel panic
- a system hang-up
- a full system crash

Why? It prevents the server from keeping itself from running out of resources.
If you disable the OOM Killer completely, then nothing protects the server from
running out of memory. Use extreme restraint and caution when considering this option.

To exercise this option, run the following command:

```sh
sysctl vm.overcommit_memory=2
echo “vm.overcommit_memory=2” >> /etc/sysctl.conf
```

Now that you've learned about the OOM Killer, you know how to
tailor the process to your individual environment and system needs. As a
general rule, exercise caution whenever you edit kernel
processes. The OOM Killer is no exception to that rule.
