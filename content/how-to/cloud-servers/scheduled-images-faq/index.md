---
permalink: scheduled-images-faq
audit_date: '2021-05-21'
title: Scheduled images FAQ
type: article
created_date: '2013-05-22'
created_by: Brian Rosmaita
last_modified_date: '2021-05-21'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

### Scheduled images

{{<accordion title="What are scheduled images?" col="in" href="accordion1">}}

Cloud Servers users can create two different kinds of images from their
running servers: *manual* or *scheduled*. The user inititates manual images
and runs only one time. A scheduled image, captured automatically either
daily or weekly, retains up to the number of images specified by the user.
{{</accordion>}}
{{<accordion title="Why would I use scheduled images?" col="in" href="accordion2">}}

By capturing images automatically versus manually triggering them
each time, you create an image history. You can use that history to
recover your server to the point of the image in the case of
emergency or server failure.

In the following cases, scheduled images might not be the best choice:

-   Images are useful for recovery in many scenarios, but you should never
    use them as your sole source of recovery. We recommend that you use
    Cloud Backup or your preferred backup method in conjunction with
    server images.
-   Some application servers are not good candidates for
    scheduled images. In particular, some database management systems
    need to be in a particular state before taking an image if you want
    a working DBMS when you boot a server from the image. Consult your
    DBMS vendor for more information. If you have such a DBMS and
    want to create an image of the server, read [Using task states with
    server imaging](/support/how-to/using-task-states-with-server-imaging).
-   Both manual and scheduled images are images of the system disk only.
{{</accordion>}}
{{<accordion title="How do I use scheduled images?" col="in" href="accordion3">}}

Initiating scheduled images is easy and available to both Cloud Control Panel
and API users:

-   **Cloud Control Panel**: Click the cog (gear wheel) next to your server
    name, and select **Schedule Image**. From the drop-down menu, select whether
    you want to create an image every **Day** or **Week**. If you
    select **Week**, you can also specify on which **Day of Week** for
    the image creatation. Finally, specify the number of images you
    want to retain and then click **Create Schedule**. To learn more about
    the Cloud Control Panel, see
    [Introducing the Rackspace Cloud Control Panel](/support/how-to/introducing-the-rackspace-cloud-control-panel).
-   **API users**: See the Cloud Servers [API documentation for the Scheduled Images
    extension](https://docs.rackspace.com/docs/cloud-servers/v2/api-reference/svr-images-operations#enable-scheduled-images).

We charge you for images, stored in **Cloud Images**, as if we stored them
in your Cloud Files account. Thus, we charge your normal Cloud
Files rate, including any applicable tiering or volume discounts.
{{</accordion>}}

### Scheduling

{{<accordion title="How can I tell scheduled images from snapshots I took myself when I look at my image list?" col="in" href="accordion4">}}

The system creates scheduled images with a name based on the following scheme:

-   **daily-{server-name}-{10-digit-number}** (for daily
    scheduled images)
-   **weekly-{server-name}-{10-digit-number}** (for weekly
    scheduled images)

 **Note**: An image name is limited to 255 characters, so if you have a server
           name longer than 238 characters, the system truncates it to fit.

The best way to tell is to look at the image metadata, but
unfortunately, you can't see it in the Cloud Control Panel. By using
the API, you can see that an image created by the scheduled images service
has the following metadatum:

    org.openstack__1__created_by: scheduled_images_service

{{</accordion>}}
{{<accordion title="Is there a minimum or maximum time between scheduled images?" col="in" href="accordion5">}}

No (see next answer), but daily scheduled images are roughly 24
hours apart and occur on different dates UTC.

For weekly images, you specify the day of the week (determined by UTC)
when you'd like your server image created. Because some days of the week are
much more popular than others for scheduling images, in rare
circumstances we might create your weekly scheduled image in a window
beginning 12:00 UTC the day before the day of the week you specify and
ending at 12:00 UTC the day after the day of the week you specify.
{{</accordion>}}
{{<accordion title="Will they occur on the same time each day?" col="in" href="accordion6">}}

To operate the scheduled images service with minimal impact on
on-demand snapshots and other network-intensive data transfers, we might
change the time a snapshot occurs at any time to optimize load.  We
reserve the right to modify your image's scjheduled time to
balance the number of image creations in flight across the cloud
and throughout the day.
{{</accordion>}}
{{<accordion title="Does the image created\_at parameter reflect the completion or start time?" col="in" href="accordion7">}}

The implementation uses the normal OpenStack snapshot process, so
the created\_at timestamp is when the call occurred at
the start of the snapshot.  The image's availability time
(when its status is ACTIVE) depends on factors such as the size
of the image and overall network congestion in the cloud.
{{</accordion>}}
{{<accordion title="Can I miss a day?" col="in" href="accordion8">}}

You can't tell the service to skip a day. We
do not recommend trying to do this manually by disabling scheduled
images on a server and then re-enabling them because of the dynamic
nature of the scheduling system. It is better just to delete any
scheduled images you don't want in your account.

However, the service might miss capturing a scheduled image on a
particular day for a server. This could happen if your server is
in a state that does not allow the system to make snapshots (for example,
if you are doing a server resize at that time).
    
The service attempts to create a snapshot of your server three times,
with the re-tries approximately one hour apart. (**Note**: We are constantly monitoring
the service faults and might change the number or frequency depending
on how the service is performing.)

If you notice two or more consecutively skipped days, contact Rackspace
support.
{{</accordion>}}

### Retention

{{<accordion title=`What is the "retention" value?` col="in" href="accordion9">}}

The retention value is the maximum number of scheduled images for that
particular server that your account retains. After the
number of scheduled images for this server reaches the retention value,
the system deletes the oldest scheduled images so that the total number
of scheduled images for this server does not exceed the retention value.

Becasue you set the retention value on a per-server basis, you can
specify a different retention value for each server.
{{</accordion>}}
{{<accordion title="What is the maximum retention value?" col="in" href="accordion10">}}

The maximum retention value in the Rackspace Open Cloud is 65535.
That's about 179 years of daily images.
{{</accordion>}}
{{<accordion title="When does automatic deletion occur?" col="in" href="accordion11">}}

When a scheduled image of a server has successfully completed, the
scheduled images service creates a list of all that server's scheduled
images and, if necessary, deletes the oldest images until it reaches the
retention value for that server.
{{</accordion>}}
{{<accordion title="What if I don't want certain images automatically deleted?" col="in" href="accordion12">}}

Let's suppose that we're talking about the scheduled images for server
`d615a437-aaa9-4a52-a1c0-5bcb0d33038c`. To determine how many
scheduled images are in your account for this server, the scheduled
images service looks only at images that meet the following two
constraints:

-   The image has the metadatum **org.openstack\_\_1\_\_created\_by**
    with the value `scheduled_images_service`.
-   The image property **instance_uuid** has the value
    `d615a437-aaa9-4a52-a1c0-5bcb0d33038c`.

So, if you remove the metadatum **org.openstack\_\_1\_\_created\_by** from
the scheduled image that you want to save, the system does not perform
retention culling on the snapshot.

You cannot modify image metadata by using the Cloud
Control Panel. Instead, you can use API calls.
{{</accordion>}}
{{<accordion title="How can I change the retention value on my server?" col="in" href="accordion13">}}

You can change the retention value by using the following tools:

-   Cloud Control Panel
-   API

Just specify the new value you want to use for the retention.
{{</accordion>}}
{{<accordion title="What happens to the scheduled images in my account when I change the retention value?" col="in" href="accordion14">}}

Nothing at first, but when your next scheduled image finishes, the
scheduled images service uses the new retention value when it
calculates whether to delete any images from your account.
{{</accordion>}}
{{<accordion title="What if I want to delete a scheduled image right away?" col="in" href="accordion15">}}

A scheduled image is just a normal snapshot. You can do what you like
with it just as you can with your other snapshots. You can delete a
scheduled image at any time by using your normal workflow, such as the Cloud
Control Panel, direct API calls, and so on.
{{</accordion>}}

### Miscellaneous

{{<accordion title="Can I schedule when my image starts or completes?" col="in" href="accordion16">}}

You cannot specify a particular time for your server snapshot, and we can't
guarantee what time your scheduled image becomes active. We've placed these
restrictions because we spread out the scheduled times for snapshots to
avoid interfering with each other or with on-demand snapshots. The
time before an image becomes active depends on the current network
traffic load, among other things. We guarantee that all users
receive the same best effort service.

In using scheduled images, keep the following in mind:

-  Smaller snapshots tend to finish more quickly.
-  A very large snapshot might take so long to finish that it could block
   the next day's scheduled snapshot from occurring.
-  If you have a large amount of data to save, you can explore
   other backup options
{{</accordion>}}
{{<accordion title="A service similar to scheduled images exists in the Classic Rackspace Cloud. Will the Classic service stay the same change to work like scheduled images in the Rackspace Open Cloud?" col="in" href="accordion17">}}

There are no plans to change the Classic service.
{{</accordion>}}
{{<accordion title="Where can I get more information about scheduled images?" col="in" href="accordion18">}}

For more information, see the [Scheduled Images API Extension
    Documentation](https://docs.rackspace.com/docs/cloud-servers/v2/api-reference/svr-images-operations#enable-scheduled-images).
{{</accordion>}}
