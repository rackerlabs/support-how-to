---
node_id: 389
title: Migrating a Linux Server From the Command Line
type: article
created_date: '2011-03-16'
created_by: Jered Heeschen
last_modified_date: '2015-12-30'
last_modified_by: Nate Archer
product: Cloud Servers
product_url: cloud-servers
---

### Other scenarios

It&rsquo;s not always practical to perform a live sync the way we outlined it,
or you may want to migrate just a couple applications instead of the
entire system. Let&rsquo;s look at your options in those cases.

Remember that this process requires that rsync be installed on both the
origin and destination servers. The package name is usually &ldquo;rsync&rdquo;. Use
your package manager to install it if you get a &ldquo;not found&rdquo; response
from running:

    which rsync

### Syncing with the server inactive

A live sync has the advantage of minimizing downtime during the
migration but it can require multiple runs of rsync to complete if you
have a lot of files that change frequently. After a pass or two with
rsync on a live server it can be practical to perform the final sync
while your origin server is not running at all.

It&rsquo;s also possible that you may be unable to boot the source system for
reasons unrelated to the installed software. In that case you&rsquo;d also
need to be able to access your files while the server is dormant.

For real (non-virtual) servers you&rsquo;d copy files while keeping the server
down by booting the machine from a rescue disk (usually a live CD
distribution), mounting the file system, then performing the final sync
from there. Fortunately there are ways to simulate that for virtual
servers.

An approach many virtual server providers take is to provide an option
to boot your server using a temporary server instance. It acts as a
virtual rescue disk, allowing you to mount your server&rsquo;s file system
while the system isn&rsquo;t running. For Rackspace Cloud Servers it&rsquo;s called
&ldquo;rescue mode&rdquo;.

#### Rescue mode

For a Cloud Server you can put the instance into rescue mode via
the [Cloud Control
Panel](https://mycloud.rackspace.com "Next-Gen Cloud Control Panel").
For more information on rescue mode see [this
article](/how-to/rescue-mode "How to use rescue mode").

Once the server is in rescue mode remember that the SSH key for the host
will have changed, so you&rsquo;ll probably need to delete the server&rsquo;s key
from your &ldquo;\~/.ssh/known\_hosts&rdquo; file or equivalent.

Once you&rsquo;re logged into the instance in rescue mode you should be able
to mount your server&rsquo;s file system and then proceed with the sync.

Determine your file system&rsquo;s device by running:

    fdisk -l

Look for the device that matches the size of your disk. It should be the
second disk listed, either &ldquo;/dev/sda1&rdquo;, &ldquo;/dev/sdb1&rdquo;, or &ldquo;/dev/xvdb1&rdquo;.

We&rsquo;ll use /dev/xvdb1 for our example. To mount that filesystem onto the
/mnt/origin directory, run:

    mkdir /mnt/origin
    mount /dev/xvdb1 /mnt/origin

Note that rescue mode has a time limit of 90 minutes, after which your
server will reboot in normal mode. If your final sync takes longer than
that you may need to put the instance back into rescue mode then run the
rsync command again to pick up where things left off. If you still run
into trouble with the time limit talk to our support staff and they can
assist you.

### Rsyncing from a mount point

After booting your server into a rescue mode and mounting your server&rsquo;s
file system to a mount point like &ldquo;/mnt/origin&rdquo; you will need to adjust
your rsync command accordingly.

First make sure you create an exclude file and make any changes
necessary for your environment. Create the list without mentioning the
mount point stuff, just list them as they would appear in your regular
file system.

An example exclude file would look just like one used for a live
migration:

    /boot
    /proc
    /sys
    /tmp
    /dev
    /var/lock
    /etc/fstab
    /etc/mtab
    /etc/resolv.conf
    /etc/conf.d/net
    /etc/network/interfaces
    /etc/networks
    /etc/sysconfig/network*
    /etc/sysconfig/hwconf
    /etc/sysconfig/ip6tables-config
    /etc/sysconfig/kernel
    /etc/hostname
    /etc/HOSTNAME
    /etc/hosts
    /etc/modprobe*
    /etc/modules
    /net
    /lib/modules
    /etc/rc.conf
    /usr/share/nova-agent*
    /usr/sbin/nova-agent*
    /etc/init.d/nova-agent*

Next we&rsquo;ll set up our rsync command so it takes the mount points of the
file systems on both servers into account. The rsync command with the
origin server in a rescue mode would be:

    sudo rsync -e 'ssh -p 30000' -azPx --delete-after --exclude-from="/mnt/origin/home/demo/exclude.txt" /mnt/origin/ root@1.2.3.4:/

Note the trailing &ldquo;/&rdquo; on the origin directory. Including the slash at
the end makes sure rsync treats the origin and destination directories
as the same relative locations, so don&rsquo;t leave that part out. Otherwise
you might end up with your files getting copied into a new subdirectory
on the destination instead of sending the files to their proper
locations.

As a bonus, with that trailing slash on the directories rsync will treat
the exclude file list as relative to the source directory. That&rsquo;s why we
don&rsquo;t need to change the exclude file to account for the mount point.

#### Both servers in rescue mode

If you&rsquo;re being extra careful and have both the origin and the
destination in a rescue mode you would change the destination directory
too. With the destination server mounted at &ldquo;/mnt/destination&rdquo; the rsync
command would look like:

    sudo rsync -e 'ssh -p 30000' -azPx --delete-after --exclude-from="/mnt/origin/home/demo/exclude.txt" /mnt/origin/ root@1.2.3.4:/mnt/destination/

Once the final sync is done you can boot up the destination server and
run your tests.

### Per-package approaches

It may be impractical to migrate your entire server, or you may only
have a couple services you need to bring over. In that case you can
migrate the system on a per-package basis. It might be a little more
work than running a full sync but it could be faster overall.

In general this approach would require installing the requisite package
on the destination server then copying its configuration and data files
from the origin server to the appropriate place on the destination. Once
you&rsquo;re done start or restart the service on the destination and test to
make sure everything is in its place.

You may need to tweak any aspects of the system you had changed on the
origin server once you&rsquo;ve completed the copies. If you created a
logrotate config for the service (or changed it) you&rsquo;ll need to copy
that over. If you had a cron job set up for the service that would also
need to be migrated.

A couple examples follow to illustrate the approach.

#### Web servers

If you&rsquo;re migrating a web server you&rsquo;ll need to make sure you bring over
your configuration files (including virtual host definitions) as well as
the files used by your website.

If you&rsquo;ve been keeping your web files in a user&rsquo;s home directory make
sure you have that user created on the destination server. If the user
name is &ldquo;demo&rdquo; and the web files are all in the directory &ldquo;public\_html&rdquo;
you can run an rsync command similar to the following:

    sudo rsync -e 'ssh -p 30000' -azPx --delete-after ~demo/public_html root@1.2.3.4:/~demo/public_html

We left out the &ldquo;exclude-from&rdquo; flag because we wouldn&rsquo;t usually need to
exclude any files from this sync.

The configuration directory for your web server may vary by
distribution, particularly for apache. Ubuntu and Debian use
&ldquo;/etc/apache2&rdquo;, CentOS and other Red Hat-based distributions use
&ldquo;/etc/httpd&rdquo;, and so on. So first, find your config directory.

Once you have the configuration directory identified run an rsync
command similar to the above but copying the configuration directory
instead. If you&rsquo;re running nginx this might look like:

    sudo rsync -e 'ssh -p 30000' -azPx --delete-after /etc/nginx root@1.2.3.4:/etc/nginx

If you&rsquo;re using PHP you may also need to bring over any changes you made
to your php.ini.

After that restart your web server and run it through some tests.

#### Databases

A similar approach works with a database service. Install the database
on the destination server, making sure you get as close to the version
running on the origin as you can.

Bring the database service down and identify where its configuration and
data files are kept. For mysql the configuration files are usually in
/etc/mysql and the databases themselves are in /var/lib/mysql.

It&rsquo;s easier to do this with two rsync commands, one for the config and
one for the databases. For a mysql installation the commands might look
like this:

    sudo rsync -e 'ssh -p 30000' -azPx --delete-after /etc/mysql root@1.2.3.4:/etc/mysql
    sudo rsync -e 'ssh -p 30000' -azPx --delete-after /var/lib/mysql root@1.2.3.4:/var/lib/mysql

Next check to make sure there aren&rsquo;t other changes you made on the
origin server related to the database (like cron jobs or logrotate
configuration). Then start or restart the database service on the
destination and get to testing.

### Summary

Now you should have your system migrated to another server and are
enjoying the results. Congratulations! But do remember to test
thoroughly before going into production with the new server. Surprises
are bad (on a server, anyway).

