---
permalink: sample-logrotate-configuration-and-troubleshooting
audit_date: '2020-10-05'
title: Sample logrotate configuration and troubleshooting
type: article
created_date: '2011-11-23'
created_by: Jered Heeschen
last_modified_date: '2020-10-05'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

### Applying knowledge

A previous article [Understanding the logrotate utility](/support/how-to/understanding-logrotate-utility) described what
logrotate does and how you can configure it. This article applies this
knowledge to creating a log-rotation solution for one or more custom virtual hosts.
It also identifies some options for testing and troubleshooting logrotate.

### Tying it all together: virtual host logs

To show how you can use logrotate for your applications, here's an
example that will come in handy for many people: rotating logs for your
custom virtual hosts. The example uses **Apache**&reg;, but you can tweak it
for other webservers like **nNinx&reg;** or **Lighttpd&reg;**, usually just by
changing the post-rotate script.

First, create a file to hold the configuration that tells
logrotate what to do with the virtual host's log files. Don't edit the main
config file or the webserver's config file because a future package upgrade might
want overwrite the configuration. Instead, make your own file with the following command:

    /etc/logrotate.d/virtualhosts

This example tosses all the virtual hosts into one file, but if you have one host
that's busier than others you may want to create separate config files to handle
the needs of your different domains. The example specifies several items that are
probably already set in your main config, just to cover all the bases.

#### The files

Say you have two virtual domains, **domain1.com** and **domain2.com**, and
that the log files for each are in **/home/demo/public\_html/(domain name)/log**.
Your config file needs to tell logrotate where to find the
log files, then start the config block for them:

    /home/demo/public_html/domain1.com/log/*log /home/demo/public_html/domain2.com/log/*log {

If you have more log directories or files to add, insert them into that list.

#### Rotate

Next, make sure logrotate only keeps as many old logs as you want:

    rotate 14

The example uses 14 files to keep two weeks' of logs, but you can
adjust that number to meet your needs.

#### Interval

Now, tell the webserver to rotate these logs daily (again, change it if
you prefer a longer interval):

    daily

#### Size (optional)

The size setting specifies a maximum size for your logs.  When the log reaches
that size, a log rotation is triggered.

    size 50M

The size setting is optional here because it overrides any time-based
rotation conditions.  You can specify both a time interval and a max size, but
if you do, logrotate ignores the time interval setting.

#### Compression

Specify whether you want to compress these logs when they're
archived. This example uses the `delaycompress` command to account for
the graceful restart of Apache, which means you also need to turn compression on:

    compress
    delaycompress

#### Sharedscripts

You might have several virtual hosts, and that would mean several logs to
rotate. To make sure the webserver only gets restarted after all the rotations
are done, add the following line:

    sharedscripts

#### Postrotate

Specify a postrotate script to restart the webserver:

    postrotate
            /usr/sbin/apachectl graceful > /dev/null
    endscript

And finally, close the config block with a curly brace:

    }

#### The whole file

Following is the complete configuration file:

    /home/demo/public_html/domain1.com/log/*log /home/demo/public_html/domain2.com/log/*log {
            rotate 14
            daily
            compress
            delaycompress
            sharedscripts
            postrotate
                    /usr/sbin/apachectl graceful > /dev/null
            endscript
    }

Test the script either by watching things when the nightly cron jobs run or by running
logrotate manually with the following command:

    /usr/sbin/logrotate /etc/logrotate.conf

If you don't get any errors back you should be okay. But if you want to be
certain you can run through some of the following tests.

### Testing logrotate

If you suspect logrotate is having some trouble, or you just want to make sure a
new config you've put in place works, you can
pass some useful flags to logrotate when you run it from the command line:

#### Verbose

The verbose flag, `-v`, tells logrotate to say each operation it executes. This helps when you want
to find out why logrotate doesn't rotate a log as expected.

#### Debug

The debug flag, `-d`, tells logrotate to go through the motions of rotating logs
but not *actually* rotate them. It can be handy if you're working on a production server
and you want to test a new config file but don't want any actual log rotation run when you run the test.

Debug also checks that the config file is formatted properly and that logrotate can
find the log files it would rotate. However, since it doesn't run the
rotations, it doesn't test some parts of the process like the post-rotate scripts.

#### Force

The force flag, `-f`, forces logrotate to rotate all logs when it runs, whether
or not they would normally need to be rotated at that time. If you want to
thoroughly test logrotate's configs, this is the flag to use. Just remember that
logrotate rotates logs and deletes old ones according to the
configuration, so don't accidentally rotate out a recent log you
need to keep.

It can also be useful if you believe that logrotate should be rotating a log,
but it isn't. Forcing the issue helps you identify:

- If the problem is that logrotate doesn't think the log needs rotation (if you run the force flag
  and the log is rotated)
- If the problem is that logrotate isn't able to affect the log file (if you run it and nothing
  happens to the log).

**Note:** If you configured logrotate to add a date to the name of an archived log, not
even using the force flag makes logrotate create a new archive on the same
day. Because the name it needs to use for a second archive is already taken in that case,
you might need to rename the most recent archive before you can force a log rotation.

#### Combining flags

You can use the testing flags together quite effectively. To have logrotate tell
you what it would do if you made it rotate everything, but not *actually* rotate
anything, you can combine all three:

    /usr/sbin/logrotate -vdf /etc/logrotate.conf

This command provides a long list of things logrotate would do, including which
log files it would rotate and what it would do during that process.

If you then want to test all the rotate configs in their entirety, including
the scripts run after rotations, you can run logrotate without the debug flag:

    /usr/sbin/logrotate -vf /etc/logrotate.conf

Logrotate rotates all the logs. Skimming the output should help you catch any
obvious problems. You should also make sure that all your services are still
running okay, that there nothing wenr wrong with the postrotate scripts, and
that all the logs got rotated.

### How logrotate remembers

If you find that a log isn't rotating even though it's old enough that it
should, manually run logrotate with the
`-f` flag. But if you want to know why something's gone
wrong, there's one more file you can check before forcing a rotation:

    /var/lib/logrotate.status

Logrotate stores information about when it last rotated each
log file in the status file. If you look inside, you see something like:

    logrotate state -- version 2
    "/var/log/acpid.log" 2010-6-18
    "/var/log/iptables.log" 2010-6-18
    "/var/log/uucp.log" 2010-6-29
    ...

It's a straightforward format, the log file location is on the left, and the
date when it was last rotated is on the right. Sometimes, the
dates on your server get confused (if you were tinkering with an NTP
service or the like), and the date when a log was last rotated winds up being a
future date. If that's happened, you see it in this status file.

If you want to check logrotate out with a particular log file but don't want to
force everything to rotate, you can delete the log's entry from the logrotate
status file. Then when you run logrotate normally it should create a new entry
for the log with today's date (even though it may not actually rotate the log -
it uses that first run as a baseline if it's just interval-based).

### Summary

For something that runs quietly in the background and only really performs one
type of task, logrotate does quite a bit. You should be able to set up new
logrotate config files for your own purposes, either creating them from scratch
or copying existing configs and modifying them appropriately. And most
importantly, you can keep your logs from getting out of control.
