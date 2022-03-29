---
permalink: how-to-use-journalctl-to-view-and-manipulate-systemd-logs
audit_date: '2022-03-29'
title: How To Use journalctl to View and Manipulate Systemd Logs 
type: article
created_date: '2022-03-29'
created_by: Marco Estrada
last_modified_date: '2022-03-29'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

Perhaps one of the most useful things in linux is the logs systems, that give us a lot of useful information that we can use to troubleshoot, configure etc. 

One of the most used tools when we're talking about logs is the use of **journalctl**  that can be found in almost any distribution of GNU/Linux. This powerful tool allow us to get information about the state of the system,daemons, units, or even the kernel, and as we previous mention all of this information can help us check if something in the system is not working as expected.

### Basic log checking with journalctl.

journalctl can be used in a lot of interesting ways, but one of the most used ones is to check the logs of the whole system. To do this we just simply need to issue the **"journalctl"** command in a terminal. as we usually get a lot of information we can navigate the console with the keys <kbd>Shift</kbd> + <kbd>pageup</kbd>, or <kbd>shift</kbd> + <kbd>pagedown</kbd>.

The output that we get is the logs of all the deamons, services, units etc that we have in our system as represented in the image below.

{{<image src="journanlctl-1.png" width="800">}}

This can be a lot of information that we don't really need, so a more simple way to view the logs that we really need is to use some filters.

### Filters in journalctl.

We can use filters to get more clear and prescise information that we later can use to solve some problems that we can face in our servers as we can decide to just use one filter to get information about one service/deamon, or take advantage of the fact that we can use multiple filters to get more detailed and perhaps more useful information for example to get information about a specific unit in a specific time frame, filtering with journalctl is a good way to help us manage our devices.

One of the most used filter is to filter by date. With the filters *--since* and --until, we can filter by date the information of the logs in our server.

Example:
```sh 
journalctl --since yesterday
```

The previous command would show the logs that were generated in our server the previous day.

We can also filter the logs by an specific date the format in that we need to issue the date is YYYY-MM-DD HH:MM:SS for example.

```sh
journalctl --since "2022-02-28  18:00:00"
```
The output will look as follows:

{{<image src="journanlctl-2.png" width="800">}}

We can also use, two dates to filter in a range style for example.
```sh 
journalctl --since "2022-02-28 00:00:00" --until "2022-02-28 23:00:00"
```

The output will look as follows:

{{<image src="journanlctl-3.png" width="800">}}

With the previous command we could filter the logs that were captured by the system in between 12:00 AM and 11:00 PM on the 28th of february.

We can also use the option -n to get the most recent logs in the system, this command give us the last 10 entries that were stored in the **systemd-journald** service.

### Filtering logs of specific units/daemons/services.

Another common thing is to filter based on the unit that we need information on, to do this, we just simply need to use the journalctl -u plus the unit that we need information on

For example  with the cronie service.

```sh 
journalctl -u cronie.service
```

The output will look as follows:

{{<image src="journanlctl-4.png" width="800">}}

After we issue this command we will get the output with the logs of that particular unit.

We can also combine this with date filtering to get more specific information.
```sh 
journalctl -u cronie.service --since yesterday
```
The output will look as follows:

{{<image src="journanlctl-5.png" width="800">}}

### Getting kernel logs.

Sometimes we need to check if the kernel is working properly or if something went wrong obtain information that help us solve the problem.

Getting kernel logs is very straight forward, we would use journalctl plus the -k option.

The output will look as follows:

{{<image src="journanlctl-6.png" width="800">}}

We can also use the -b option  to get only information about the most recent start of the kernel, or we can get information of previous starts with: journalctl -b -1,-2,-3 etc.

The output will look as follows:

{{<image src="journanlctl-7.png" width="800">}}

### Notes:

The service that stores the log information is systemd-journal, and we can see how much space is used by this information with the disk usage option.

The output will look as follows:

{{<image src="journanlctl-8.png" width="800">}}

## Conclusions: 
As we can see, journalctl is a must know command that can come in handy to solve problems or just get information on the system that we are working on.

## Related articles

<br>
Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
