---
permalink: using-python-novaclient-to-manage-scheduled-images
audit_date:
title: Using Python-novaclient to manage scheduled images
type: article
created_date: '2013-05-16'
created_by: Brian Rosmaita
last_modified_date: '2014-10-29'
last_modified_by: Kyle Laffoon
product: Cloud Servers
product_url: cloud-servers
---

### Introduction

While you can enable or disable scheduled images through the
Cloud Control Panel, the Control Panel does not yet let you
manage the images themselves. However, you can do this easily from
the command line by using `python-novaclient`.

This article explains scheduled images and how to use the python-novaclient
tool to manage all aspects of scheduled images, both enabling and disabling
scheduled images on a server (which you can do in the Control Panel) and
managing the images (which you can't).

### Scheduled images

The scheduled images feature of the Rackspace Open Cloud allows you to
set up automatic weekly or daily snapshots of any of your servers.
Just pick a server and enable the feature.

The feature is very simple. The only options are: (1) the day of the
week you'd like a weekly image created, and (2) a **retention** value,
which is the maximum number of scheduled snapshot images of that
particular server you want to retain in your account. After the
number of snapshots exceeds the retention value, the scheduled images
service deletes the oldest scheduled snapshot image of that server to
keep the number of scheduled images below the retention setting.
You can change the retention value at any time. You won't see the effects
of a change until the next time the system takes a scheduled image on
your account.

After you enabled scheduled images on some of your servers, you
start accumulating them in your account. The retention setting allows
you to keep the number of daily images down to a reasonable level, but
there might be circumstances where you want more control over snapshot
retention. Suppose you want a retention value of `7` but also want to
save the first scheduled image taken this month. For that, you
need to use either the API or the python-novaclient command-line
interface for the API.

### Setting up python-novaclient

First, if you haven't used python-novaclient before, take a look at one
of these How-To articles:

-   [Installing python-novaclient on Linux and Mac
    OS](/support/how-to/installing-python-novaclient-on-linux-and-mac-os)
-   [Installing python-novaclient on
    Windows](/support/how-to/installing-python-novaclient-on-windows)

These articles provide you with an overview of python-novaclient
and complete instructions for installing it on your operating system of
choice. They also suggest installing the special
**rackspace-novaclient** package that installs python-novaclient plus
all the extensions supported in the Rackspace Open Cloud.
To get the *scheduled images* extension, make sure to install
**rackspace-novaclient** version 1.3 or later. If you have already
installed python-novaclient, you can use the following `pip` command
to install only the scheduled images extension:

    sudo pip install rax_scheduled_images_python_novaclient_ext

If you previously used python-novaclient with daily scheduled
images and want to take advantage of weekly scheduled images, use the
following command to upgrade your installation to the latest version of
the scheduled images extension:

    sudo pip install --upgrade rax_scheduled_images_python_novaclient_ext

### Using the scheduled images feature

After you install the Rackspace scheduled images extension for
python-novaclient, you can manage scheduled images on your
servers. The following samples use `24ade2fe-60d9-4d3e-a02c-c9a6a1b588a6`
for the server ID and `myserver` for it's name.

#### Enable scheduled images for a server

To enable weekly scheduled images for a server, use this command:

    nova scheduled-images-enable --day-of-week {day}  {server}  {retention}

- For `{server}`, you can use either the UUID or the name of your server.
- For `{day}` use one of the following values:
  `saturday, sunday, monday, tuesday, wednesday, thursday, friday`.
- For `{retention}`, specify the number of scheduled images you want to
  retain in your account for this server. The retention must be a positive
  integral value.

For example, suppose you want to enable weekly scheduled images on your
server, and you want to keep at least a month's worth around. In that case,
run this command:

    nova scheduled-images-enable --day-of-week saturday  24ade2fe-60d9-4d3e-a02c-c9a6a1b588a6  4

To enable daily scheduled images for a server, use this command:

    nova scheduled-images-enable  {server}  {retention}

- For `{server}`, you can use either the UUID or the name of your server.
- For `{retention}`, specify the number of scheduled images you want to
  retain in your account for this server. The retention must be a positive
  integral value.

If you want to enable daily scheduled images on the example server and
keep at least a week of images, issue this command:

    nova scheduled-images-enable  24ade2fe-60d9-4d3e-a02c-c9a6a1b588a6  7

#### Disable scheduled images for a server

To turn off scheduled images for a server, use this command:

    nova scheduled-images-disable  {server}

For `{server}`, you can use either the UUID or the name of your server.

This operation does not affect any scheduled snapshots of this server currently
in your account. You can delete them by using the technique you currently
use to delete images.

### Change the day of the week for weekly scheduled images

To change the day of the week on which the system creates your weekly scheduled
images, enable scheduled images on that server again, specifying
the new day of the week and the retention value you want to use.  For
example, the following command enables weekly scheduled images on 
**myserver** where the system creates the image on Sunday and
retains four images:

    nova scheduled-images-enable  --day-of-week sunday  myserver  4

#### Change the retention value on a server

To update a server's retention value, enable scheduled images on that
server again and use the new retention value.  Note that if you're using
weekly scheduled images, you must specify the day of the week when you issue
the command. If you don't do this, novaclient thinks you want to switch
to a daily schedule.

For example, the following command sets a retention value of `8` on the
example server, and the system continues to take scheduled images weekly on
Saturday:

    nova scheduled-images-enable  --day-of-week saturday  myserver  8

If you're using daily scheduled images and you want to change the
retention value, use this command:

    nova scheduled-images-enable  myserver  31

It sets a retention value of `31` on the example server and creates
images daily because you did not specify a day of the week.

#### Checking the image schedule on a server

If you set different retention values on several servers based on their
importance, you might lose track of the retention values. If you want to
see what the current retention value is on a server, use this command:

    nova scheduled-images-show  {server}

For `{server}`, you can use either the UUID or the name of your server.

You can use this command even if you haven't enabled scheduled imaging for
the server. The output for this command tells you whether you have
weekly or daily images scheduled for this server and what your retention
value is.

For example, if you have weekly images, the response looks similar to the
following example:

    Schedule type: Weekly on: SATURDAY
    Retention: 8

If you currently set up daily scheduled images on the server, you
would see:

    Schedule type: Daily
    Retention: 31

If you haven't scheduled images on that server at all, you receive
an error message:

    ERROR (NotFound): Scheduled images not enabled for server 24ade2fe-60d9-4d3e-a02c-c9a6a1b588a6 (HTTP 404)

### Managing scheduled images

Scheduled images don't differ significantly from regular snapshot images, so if
you want to remove some of them, you can use whatever technique you currently
use (Control Panel, `novaclient`, or API requests) to delete them.

#### Prevent automatic deletion of a scheduled image

Scheduled images do have some extra information attached to them as
metadata. In particular, they have a piece of metadata that indicates
the scheduled images service created them. The scheduled images
service looks at this metadatum when it computes how many scheduled
images of a particular server are currently in your account. It compares
this result to the retention value for that server and decides how many
scheduled images to delete, starting with the oldest images.

To prevent the scheduled images service from deleting or counting an image,
you can use the novaclient to remove the **org.openstack\_\_1\_\_created\_by**
metadatum that flags it as a scheduled image. Run the following command:

    nova  image-meta  {image}  delete  org.openstack__1__created_by

For `{image}`, you can use either the UUID or the name of the image.

If this call is successful, the system does not return a response.

#### See if the system might automatically delete a scheduled image

After you start managing your images, you need a way to see which are
subject to automatic deletion and which aren't. You can determine this
by using the novaclient **image-show** command and looking for the
**created-by** metadatum:

    nova image-show {image}

For `{image}`, you can use either the UUID or the name of the image.

Here's an abbreviated response:

    +---------------------------------------+--------------------------------------+
    | Property                              | Value                                |
    +---------------------------------------+--------------------------------------+
    | status                                | ACTIVE                               |
    | updated                               | 2013-05-10T17:39:08Z                 |
    | name                                  | Daily-myserver-1368176524            |
    | metadata instance_uuid                | 24ade2fe-60d9-4d3e-a02c-c9a6a1b588a6 |
    | metadata org.openstack__1__created_by | scheduled_images_service             |
    | progress                              | 100                                  |
    | id                                    | d615a437-aaa9-4a52-a1c0-5bcb0d33038c |
    +---------------------------------------+--------------------------------------+

If the image detail response contains a row with property
**metadata org.openstack\_\_1\_\_created\_by** and value
`scheduled\_images\_service`, then the scheduled images service might remove
this image. If that property is missing, or the property's value
is something other than `scheduled\_images\_service`, then the
scheduled images service will *not* delete the image.

**Note**: You can tell which server this image snapshot came from by looking
at the value in the **metadata instance\_uuid** property.

### Conclusion

This article explained how to use python-novaclient with the
Rackspace scheduled images extension to manage scheduled images. It
described enabling and disabling weekly and daily scheduled images on a
server, which you can do with the Cloud Control Panel or
python-novaclient. It also discussed preventing a scheduled image from
being automatically deleted when the number of scheduled images in your
account exceeds the retention count for that server, which you can do only
through the API or python-novaclient.

### More information

-   [Scheduled Images
    FAQ](/support/how-to/scheduled-images-faq "Scheduled Images FAQ")
-   [Scheduled Images API Extension
    Documentation](https://docs.rackspace.com/docs/cloud-servers/v2/developer-guide/#document-extensions/ext-scheduled-images)
