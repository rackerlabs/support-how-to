---
permalink: getting-started-with-cloud-files-and-cdn
audit_date: '2021-03-30'
title: Getting started with Cloud Files and CDN
type: article
created_date: '2016-01-14'
created_by: Stephanie Fillmon
last_modified_date: '2021-03-30'
last_modified_by: Carlos Arriaga
product: Cloud Files
product_url: cloud-files
---

This article provides an overview of Rackspace Technology Cloud Files and its
features to help you get started quickly and serve content over the Akamai
content delivery network (CDN) service.

### What is Cloud Files?

Cloud Files is a cloud storage system rather than a traditional file system. You
use it to store data in the Rackspace infrastructure. You can perform most data
management tasks from the [Cloud Control Panel](https://login.rackspace.com/),
but the [Cloud Files API Developer Guide](https://docs.rackspace.com/docs/cloud-files/v1/)
and some third-party tools are also available.

Cloud Files has the following characteristics:

-   You create *containers* in the storage system to store data.
-   You can't create containers within other containers.
-   You can have any number of top-level containers.
-   Your data is stored in *objects* within those containers.
-   You can have any number of objects within each container.
-   Objects can vary in size from a few bytes to several gigabytes.

For more details, see the [Cloud Files Key Concepts](/support/how-to/cloud-files-key-concepts).

### What is the CDN?

When you use the Cloud Files service, you automatically get access to the Akamai Content Delivery
Network (CDN). The CDN works by distributing the content you upload to Cloud Files across a global
network of edge servers. When someone views content from your site, the CDN serves the
CDN-enabled content from the edge server that is geographically closest to the viewer's location.

Using the CDN dramatically increases the speed at which websites can load, no matter where the viewer
is located. This can be a great advantage when you are hosting content for an international audience.

### Using the Akamai CDN with Cloud Files

When a Cloud Files user marks containers for publishing to the CDN, they are instantly accessible
through the Akamai CDN. The propagation of content to the edge locations takes place automatically.

In the Cloud Control Panel, you use the CDN by creating a Cloud Files container (the storage compartment
for data), uploading objects (the files to serve over CDN), and marking the container as **public**.
The container then gets a unique URL that you can combine with object names to embed in web pages,
email messages, blog posts, and so on.

For example, a user could upload a photo to a container called **images**. When this Container is
published, it is assigned a unique URL such as **https://c0000532.cdn.cloudfiles.rackspace.com**.
The user can then share a link to the photo, such as **https://c0000532.cdn.cloudfiles.rackspace.com/IMG_3432.jpg**.
When that link is accessed, the CDN serves the photo.

### Create a container and make it public

Use the following steps to create a container and make it public:

1.  Log in to the [Cloud Control Panel](https://login.rackspace.com/).
2.  In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3.  Select **Storage > Files**.
4.  Click **Create Container**.
5.  Specify a name for the container and then click **Create Container**.
6.  Click the gear icon next to the container and select
    **Make Public (Enable CDN)**.
7.  Click **Publish to CDN**.

You can now share the files within the container.

### Upload files to a container

Use the following steps to upload files to a container:

1.  Click the name of the container to which you want to upload files.
2.  Click **Upload Files** and select the files to upload.
3.  Click **Open**.
4.  After the files upload, click **Close Window**.

    The files appear in the list of available files within the container.

5.  Click the gear icon next to a file and select **View All Links**.

    Options for sharing your file display.

To learn more about using Cloud Files through the API, see [Connecting to Cloud Files](/support/how-to/connecting-to-cloudfiles)
and the [Cloud Files API Developer Guide](https://docs.rackspace.com/docs/cloud-files/v1/).

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
