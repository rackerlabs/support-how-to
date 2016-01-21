---
node_id: 1435
title: Checking running services on Linux
type: article
created_date: '2012-06-21'
created_by: Rackspace Support
last_modified_date: '2015-12-31'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

<div id="concept_ntk_d53_vf" class="nested0">

### Is the program running?

<div class="body conbody">

The first step in troubleshooting a network service is to make sure the
program is running.

</div>

</div>

<div id="concept_sh5_nr3_vf" class="topic concept nested0">

### service

To check that the program is running we will start by using the command
'service'. You can use service to start, stop, and check status for an
application that has an init script installed.

<div id="concept_zbn_yr3_vf" class="topic concept nested1">

#### Service names

<div class="body conbody">

The service command references a service using its init script, stored
in the /etc/init.d directory. Check that directory if you aren't sure
what name the system uses for a service.

Some names vary depending on your distribution - apache is 'httpd' on
CentOS, for exampe, while it's 'apache2' on Ubuntu.

</div>

</div>

<div id="concept_sq3_2s3_vf" class="topic concept nested1">

#### Service status

<div class="body conbody">

The following example shows how to check the status of httpd on CentOS
using the service command.

``` {.pre .codeblock}
$ sudo service httpd status
httpd is stopped
```

</div>

</div>

<div id="concept_sbf_3s3_vf" class="topic concept nested1">

#### Service control

<div class="body conbody">

If a service isn&rsquo;t running you can use service to start it.

``` {.pre .codeblock}
$ sudo service httpd start
Starting httpd:                                            [  OK  ]
```

If the application cannot be started the service command will report the
failure and usually show a message explaining the reason.

``` {.pre .codeblock}
$ sudo service httpd start
Starting httpd: (98)Address already in use: make_sock: could not bind to address [::]:80
(98)Address already in use: make_sock: could not bind to address 0.0.0.0:80
no listening sockets available, shutting down
Unable to open logs
[FAILED]
```

</div>

</div>

</div>

<div id="concept_s3g_4s3_vf" class="topic concept nested0">

### netstat

<div class="body conbody">

In the example above httpd cannot be started because something is
already listening on the port. To find out what it is you can run
netstat.

We will cover netstat in more detail [later in this
series](/how-to/checking-listening-ports-with-netstat)
but for this example it is enough to know that it can be used to display
a list of listening programs and the ports they are using.

``` {.pre .codeblock}
# netstat -plnt
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address               Foreign Address             State       PID/Program name
tcp        0      0 10.176.77.113:3306          0.0.0.0:*                   LISTEN      28509/mysqld
tcp        0      0 0.0.0.0:80                  0.0.0.0:*                   LISTEN      2113/nc
tcp        0      0 127.0.0.1:25                0.0.0.0:*                   LISTEN      1115/master
tcp        0      0 :::22                       :::*                        LISTEN      1051/sshd
```

The output from netstat shows that nc (listed in the 'Program name'
column) is listening on port 80 (in the 'Local Address' column) and so
stopping it should allow httpd to be started.

Remember that if the service isn&rsquo;t running it may be that a
super-server, such as xinetd, is being used to launch the program when a
connection is received.

</div>

</div>

<div id="concept_jgp_ws3_vf" class="topic concept nested0">

### Checking again

<div class="body conbody">

If the service wasn&rsquo;t running, starting it may have resolved the issue.
Let's give it a test to find out.

If the program is running you should see something similar to the
following when you check it with service:

``` {.pre .codeblock}
$ sudo service xinetd status
xinetd (pid  8795) is running...
```

If you cannot start your application take a look at your logs to see if
they contain further information regarding the issue. This guide should
help with making use of your logs.

</div>

</div>

<div id="concept_35x_rt3_vf" class="topic concept nested0">

### Continuing onward

<div class="body conbody">

Once you're sure the application is running you'll want to [take a look
at the server resources it is
consuming](/how-to/checking-system-load-on-linux).

</div>

</div>

