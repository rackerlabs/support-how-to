---
permalink: cloud-images-faq
audit_date: '2018-04-09'
title: Cloud Images FAQ
type: article
created_date: '2014-01-14'
created_by: Cloud Images
last_modified_date: '2019-04-10'
last_modified_by: Brian King
product: Cloud Images
product_url: cloud-images
---

### Getting started

{{< accordion title="Where is the documentation?" col="in" href="accordion1" >}}

The following types of documentation are available:

-   The [Cloud Images 2.0 Getting started guide](https://docs.rackspace.com/docs/cloud-images/v2/getting-started/)
    walks you through the basics of using the Images API for all of your
    image-related needs.
-   The [Rackspace Cloud Images Developer guide](https://docs.rackspace.com/docs/cloud-images/v2/developer-guide/)
    provides detailed information about the Cloud Images v2 API.
-   At the appropriate places in this article, there are links to Rackspace
    How-To articles that provide step-by-step instructions for using Cloud Images operations.
{{< /accordion >}}
{{< accordion title="What is Cloud Images and how does it relate to Glance?" col="in" href="accordion2" >}}

Glance is the OpenStack image registry and storage service. Cloud Images
is the product name for the initiative in which we expose the Glance image
service endpoints in the Rackspace open cloud.
{{< /accordion >}}

{{< accordion title="What does Cloud Images expose?" col="in" href="accordion3" >}}

Cloud Images exposes the Rackspace open cloud deployment of the
OpenStack Images v2 API that's powered by OpenStack Glance.
{{< /accordion >}}

{{< accordion title="Why are the Glance operations being exposed?" col="in" href="accordion4" >}}

Glance features that aren't available in the Compute API or the [Cloud
Control Panel](https://login.rackspace.com/) can be accessed directly through
the [Cloud Images API](https://docs.rackspace.com/docs/cloud-images/v2/).
You already use Glance behind the scenes whenever you boot a cloud server,
make an image from a server, view a list of images, or view
detailed information for a particular image. The Cloud Images API
enables direct access to these operations.

Exposing Glance functions in the API also enables us to add new image
functionality more quickly and transparently in the future.
{{< /accordion >}}

{{< accordion title="What new functionality can I access with the Cloud Images API?" col="in" href="accordion5" >}}

The Cloud Images API enables you to access the following functionality:

-   Image sharing
-   Image tags
-   More flexible image list filtering
-   Role-based access control (RBAC)
-   Image import
-   Image export
{{< /accordion >}}

{{< accordion title="Can the API return responses in XML format?" col="in" href="accordion6" >}}

The Images API returns JSON exclusively. There is no option to receive
responses in XML.
{{< /accordion >}}

------------------------------------------------------------------------

### Image sharing

{{< accordion title="Can I share or accept images in the Cloud Control Panel?" col="in" href="accordion7" >}}

Yes, image sharing is available in the Cloud Control Panel. For detailed instructions, see [Sharing images in the Cloud Control Panel](/support/how-to/sharing-images-in-the-cloud-control-panel).
{{< /accordion >}}

{{< accordion title="" col="in" href="accordion8" >}}
 Where can I read a quick summary about image sharing?

For a brief overview of this functionality, see _[Image sharing](https://docs.rackspace.com/docs/cloud-images/v2/developer-guide/#image-sharing)_ in the Cloud Images API documentation.
{{< /accordion >}}

{{< accordion title="Does it cost anything to share images?" col="in" href="accordion9" >}}

There is no charge for sharing images. Sharing an image merely
makes the image visible to the person with whom it is shared.
For example, the other party can see the image in an API response, a
client `image-list` call, or in the Cloud Control Panel. Because the original
image isn't copied, the cost of storage is handled by the image producer, who
is charged at the normal rates for Cloud Files.
{{< /accordion >}}

{{< accordion title="Is there a limit on the number or kinds of images that I can share, or have shared with me?" col="in" href="accordion10" >}}

There is no limit on the number of images that can be shared. Image producers
can share as many images as they like with other users, and image consumers
can consume any number of shared images.

If you're acting as an image producer, it is your responsibility to
ensure that any images that you share contain properly licensed software for
which the vendor allows sharing. As a consumer, you should only use
images that contain properly licensed software. You are expected to follow
the Rackspace [Acceptable Use
Policy](https://www.rackspace.com/information/legal/aup) with regard to
the type of software that is included on images.
{{< /accordion >}}

{{< accordion title="Am I charged extra for images that are shared with me?" col="in" href="accordion11" >}}

No. Image charges are the responsibility of the person sharing the
image. However, if you create an image of a server that was built from an image
that was shared with you, that image is stored in your account and
charged at normal Cloud Files rates.
{{< /accordion >}}

{{< accordion title="What information is required to share an image from one account to another?" col="in" href="accordion12" >}}

To share an image to a different account, you need to know the account number
of the customer with whom you want to share the image. When the customer is
logged in to the Cloud Control Panel, their account number is displayed under
the **Account** menu in the upper-right corner.
{{< /accordion >}}

{{< accordion title="Someone shared an image with me. Why don't I see it in my image list?" col="in" href="accordion13" >}}
 Someone shared an image with me. Why don't I see it in my image list?

The process of image sharing requires you to accept the share request
before you can see the image. To do this, you need to
know the universally unique identifier (UUID) of the image that was shared
with you. For instructions for accepting an image, consult the [Cloud Images
v2 API
documentation](https://docs.rackspace.com/docs/cloud-images/v2/developer-guide/#image-sharing).
{{< /accordion >}}

{{< accordion title="What if someone shares an image with me that I don't want, or if I don't know the person?" col="in" href="accordion14" >}}

The process of image sharing requires you to accept the share request
before you can see the image in your image list. This requirement prevents
other customers from spamming you with images you're not interested in. If you
don't know or trust the person who is sharing the image, we advise against
using the image. Only create servers from images that you trust.
{{< /accordion >}}

{{< accordion title="What if I accepted an image but have decided that I don't want it?" col="in" href="accordion15" >}}

You can reject the image so that it no longer appears in your
image list. For instructions on how to reject an image, see the [Cloud Images
v2 API
documentation](https://docs.rackspace.com/docs/cloud-images/v2/developer-guide/#image-sharing).
{{< /accordion >}}

{{< accordion title="What happens if someone accidentally (or intentionally) shares an image with malware, root kits, backdoors, or other vulnerabilities? Who is liable?" col="in" href="accordion16" >}}

Customers are liable for any activities resulting from the use of Cloud
Images. For your protection, only use images shared by people that you know.
If you encounter fraudulent activities, contact Rackspace Support.
{{< /accordion >}}

{{< accordion title="What happens if an image with malware is shared with me? How can I report it?" col="in" href="accordion17" >}}

You can report suspicious activities to Rackspace Support and to the [Cloud
Images team](mailto:cloudimageshelp@rackspace.com).
{{< /accordion >}}

{{< accordion title="What happens if I build a server from a shared image and then have to rebuild the server?" col="in" href="accordion18" >}}

Information that is necessary for a server rebuild is stored in the server
record in our infrastructure. You should be able to rebuild a server
even if the image has been un-shared with you or if the image owner has
deleted the image. You can also create your own image from a server that was
built by using a shared image.
{{< /accordion >}}

{{< accordion title="What happens if an image is un-shared with me or if the image owner deletes the image?" col="in" href="accordion19" >}}

If an image is un-shared with you or the owner deletes the image,
you no longer have access to the image. If access to a particular
image is important to you, create your own image of a server you've
built from that image. You are the owner of the image that you create
and can create new servers from that image.
{{< /accordion >}}

{{< accordion title="Can I share an image across regions?" col="in" href="accordion20" >}}

Image sharing can only occur within a single region of the Rackspace
open cloud. For example, you cannot share an image in the Chicago region (ORD)
in a way that enables it to be used in the Sydney region (SYD). If your image
is in North Virginia (IAD) and you share it with someone else, they are only
able to build servers from the image in the IAD region.
{{< /accordion >}}

------------------------------------------------------------------------

### Image tags

{{< accordion title="What are image tags?" col="in" href="accordion21" >}}

Image tags are a set of strings that you can associate with an image.
{{< /accordion >}}

{{< accordion title="What are the restrictions on image tag strings?" col="in" href="accordion22" >}}

Tag strings may include up to 255 unicode characters. Because you might need
to create, delete, or filter tags in a URL, it is best to use ASCII-range
alphanumeric characters with an underscore ("\_") replacing any spaces. This
approach ensures that tags are properly formatted for inclusion in URLs.
{{< /accordion >}}

{{< accordion title="What are the benefits of using image tags?" col="in" href="accordion23" >}}

Image tags make it easy to group images into functional units. For example,
you can retrieve a particular group of images by using the `tag=<tag_value>`
filter on an `image-list` call.
{{< /accordion >}}

------------------------------------------------------------------------

### RBAC

{{< accordion title="What roles are available for Cloud Images?" col="in" href="accordion24" >}}

The standard **identity:user-admin**, cross-product **admin**, and
cross-product **observer** roles are included in Cloud Images.

The following product-specific roles are also available:

-   **cloudImages:admin**
-   **cloudImages:creator**
-   **cloudImages:observer**
{{< /accordion >}}

{{< accordion title="What are the capabilities of these roles?" col="in" href="accordion25" >}}

For details on Cloud Image roles, see the [Permission matrix for Cloud
Images](/support/how-to/detailed-permissions-matrix-for-cloud-images).
{{< /accordion >}}

------------------------------------------------------------------------

### Image tasks

{{< accordion title="What are image tasks?" col="in" href="accordion26" >}}

The OpenStack Images v2 API introduces tasks as a way for users to
request image operations. This functionality provides a common task interface
across all Glance installations. At the same time, because the infrastructures
of OpenStack clouds can vary greatly, tasks can be customized for each
particular cloud.
{{< /accordion >}}

{{< accordion title="What can I do with tasks?" col="in" href="accordion27" >}}

Tasks enable you to import and export images. For more information, see the "Image import and export" section of this FAQ.
{{< /accordion >}}

{{< accordion title="What RBAC roles can create tasks?" col="in" href="accordion28" >}}

You must have an **Admin** role to create tasks.
{{< /accordion >}}

{{< accordion title="Where can I find out more about tasks?" col="in" href="accordion29" >}}

For more information about tasks, see the [Rackspace Cloud Images Developer
Guide](https://docs.rackspace.com/docs/cloud-images/v2/developer-guide/).
{{< /accordion >}}

------------------------------------------------------------------------

### Image import and export

{{< accordion title="What are the import and export functionalities?" col="in" href="accordion30" >}}

Import functionality enables you to upload images to your Cloud Servers
account. Export functionality enables you to download images from your Cloud
Servers account. The images can be saved server images or custom server images
created by you or third parties.
{{< /accordion >}}

{{< accordion title="Are the import and export functionalities proprietary to Rackspace?" col="in" href="accordion31" >}}

No. The functionality to import and export is provided by the Glance
OpenStack project API (Icehouse release). We're simply making it
available to our customers.
{{< /accordion >}}

{{< accordion title="Does it cost extra to import or export images? What charges should I expect?" col="in" href="accordion32" >}}

The costs for importing, storing, and exporting images follow the same
conventions as standard bandwidth and storage:

-   **Uploading an image**: There is no charge for inbound bandwidth.
    Standard rates for Cloud Files storage apply.
-   **Downloading an image**: Exported images are stored in your Cloud Files
    account and charged at normal Cloud Files rates. If you download the
    image from Cloud Files, you are charged for outgoing bandwidth at
    standard Cloud Files rates.
{{< /accordion >}}

{{< accordion title="What formats are supported for image imports?" col="in" href="accordion33" >}}

In order to be imported into the Rackspace open cloud, images must be in the
[Virtual Hard Disk (VHD)
format](https://en.wikipedia.org/wiki/VHD_(file_format)). The image
must also follow Rackspace open cloud bootstrapping practices. For
details about these practices, see [Preparing an image for import into the
Rackspace open
cloud](/support/how-to/preparing-an-image-for-import-into-the-rackspace-opencloud).
{{< /accordion >}}

{{< accordion title="Are there any limitations on the operating system that is installed on an image?" col="in" href="accordion34" >}}

Microsoft product use rights do not allow the use of License Mobility
for Windows licenses. Given the limitations related to this software
platform, image import is not available for Windows images. You may
import other operating systems as long as you do not violate any
licensing restrictions. For more information, contact the vendor of the
operating system that you want to import.
{{< /accordion >}}

{{< accordion title="Are there any limitations on the software that I can import on an image?" col="in" href="accordion35" >}}

It is your responsibility to ensure that any software that you place on an
image to be imported is properly licensed for use in the cloud. Be aware
that Microsoft licensing in particular is extremely restrictive. If
you are in doubt, do not import any software until you have checked with
the vendor.
{{< /accordion >}}

{{< accordion title="Is Rackspace responsible for the content of imported images?" col="in" href="accordion36" >}}

No. As stipulated in the [Rackspace Cloud Terms of Service](https://www.rackspace.com/information/legal/cloud/tos), Rackspace cannot take responsibility for content or application licensing that is uploaded by the customer.
{{< /accordion >}}

{{< accordion title="Are all images available for export?" col="in" href="accordion37" >}}

Certain images may not be available for export if they are using
licenses or licensing schemes for which Rackspace is responsible, or for which
Rackspace has an agreement with the provider. The export task goes into an
error state with a message indicating that the image cannot be exported.

**Note**: When you export an image using Cloud Images,
your image does not leave the Rackspace open cloud. It is deposited in
your Cloud Files account so that you have a personal copy of the
image. This process enables you to have a copy of your
image without in any way distributing the image or any software
contained within it outside of the Rackspace open cloud. This is an
important distinction for some licensing agreements.

As described in the [Rackspace Cloud Terms of
Service](https://www.rackspace.com/information/legal/cloud/tos), you are
responsible for understanding the licensing terms for all of the software that
is contained in the images that you export. Do not distribute your image
outside of the Rackspace open cloud unless you're certain that all relevant
licenses allow you to do so. Depending on the software licenses involved, you
might need to obtain and apply your own licenses in order to use an image
outside of the Rackspace open cloud. If you have questions about licensing
terms, contact the appropriate software vendor.

{{< /accordion >}}
{{< accordion title="How can I tell if an image can be exported?" col="in" href="accordion38" >}}

Only the image owner can export an image. You cannot export a
Rackspace public image and you cannot export an image that has been
shared with you.

**Note:** If you have a use case that involves exporting a public image or an image that has been shared with you, you can obtain your own copy of the original image by creating a server from that image and then making an image of the new server.

Some images are not available for export due to licensing or
billing issues. These images currently include all Windows and Red Hat images.
To determine whether you may export an image, check the value in the
`com.rackspace__1__options` property. If the value is zero, then you may
export the image.

{{< /accordion >}}
{{< accordion title="" col="in" href="accordion39" >}}
 Can you give me step-by-step instructions for exporting an image?

Detailed instructions for exporting an image are available in the example at
[Transfer images between regions of the Rackspace open
cloud](/support/how-to/transferring-images-between-regions-of-the-rackspace-open-cloud).

{{< /accordion >}}
{{< accordion title="Where is my exported image?" col="in" href="accordion40" >}}

Your image is exported into a container that you specify in your Cloud Files
account. It is stored as a _Dynamic Large Object_ (DLO) in Cloud Files. A DLO
is a series of _segments_, along with a _manifest object_. In order to
download the image, you download the manifest object. (The filename for this
object follows the format `{image_uuid}.vhd`.) Cloud Files streams all of the
segments in the correct order. The following image shows what displays in the
Cloud Control Panel when you download an image:

<img class="fig-img" src="/support/how-to/cloud-images-faq/file-listing_0.png" alt="">

In the image, the manifest objects are contained in red boxes.
Note that each object is zero bytes in size and has a filename that follows
the pattern `{image_uuid}.vhd`. The other objects in the screenshot (that
have names ending in numbers such as `-00001`) are the segments.

**Warning**: It is important that you do not delete any of the segments unless
you also intend to delete the entire image. If you delete a segment and then
download the manifest object, the download succeeds, but the image is corrupt.
The corruption occurs because part of the image is missing.

{{< /accordion >}}
{{< accordion title="Can you recommend a way for me to download my exported image from Cloud Files?" col="in" href="accordion41" >}}

We recommend using the **Swiftly** Cloud Files client to download your
exported image. For more information, see [Use Swiftly to download an exported
image](/support/how-to/use-swiftly-to-download-an-exported-image).

{{< /accordion >}}
{{< accordion title="If I have cloud servers in multiple regions, is the image that I import available in all regions?" col="in" href="accordion60" >}}

An imported image is only available in the region into which it has been
imported. To make the image available in multiple regions, you must
transfer it from your Cloud Files account in region A to your Cloud
Files account in region B, and then use the Cloud Images API endpoint for
region B to import the image into region B.

{{< /accordion >}}
{{< accordion title="How do I transfer an image to another region?" col="in" href="accordion42" >}}

For instructions on transferring an image to another region, see [Transfer
images between regions of the Rackspace Open
Cloud](/support/how-to/transferring-images-between-regions-of-the-rackspace-open-cloud).

{{< /accordion >}}
{{< accordion title="Can I use image export and import to move between Infrastructure and Managed accounts?" col="in" href="accordion43" >}}

Yes. It is possible to move images between Infrastructure and
Managed accounts by following the steps in the article [Transfer images
between regions of the Rackspace Open
Cloud](/support/how-to/transferring-images-between-regions-of-the-rackspace-open-cloud)
to export the required image, then import it into the account that the
customer requires. Any images that are shared, imported, or exported are
deemed to be non-standard. Therefore the *Infrastructure* service level
is applied regardless of the type of account that the image is being
shared with or imported into. Because backup configurations and monitoring
checks are applied uniquely to each cloud instance, they must be recreated
upon successful import or share.

{{< /accordion >}}
{{< accordion title="How do I prepare an image for import?" col="in" href="accordion44" >}}

To learn how to prepare an image for import, see [Preparing an image for
import into the Rackspace open
cloud](/support/how-to/preparing-an-image-for-import-into-the-rackspace-opencloud).

{{< /accordion >}}
{{< accordion title="Can you recommend a way to upload my image to Cloud Files so that I can import it?" col="in" href="accordion45" >}}

We recommend using the **Swiftly** Cloud Files client to upload your image to
Cloud Files. For more information on using Swiftly, see [Use Swiftly to upload
an image](/support/how-to/use-swiftly-to-upload-an-image).

{{< /accordion >}}
{{< accordion title="Can you give me step-by-step instructions for importing an image?" col="in" href="accordion46" >}}

Detailed instructions for importing an image are available in the example at
[Transfer images between regions of the Rackspace Open
Cloud](/support/how-to/transferring-images-between-regions-of-the-rackspace-open-cloud).

{{< /accordion >}}
{{< accordion title=" Why is the checksum on my imported or exported image different from the one that the API shows?" col="in" href="accordion47" >}}

An image that you import or export has a different checksum when you view it
in the Images API versus the Compute API. This difference occurs because images
are stored internally in the public cloud in a different format than the
format they are in when they are transferred.

When you import an image in VHD format, it is compressed using the Gzip data
compression program and packaged as an Open Virtualization Appliance (OVA)
file so that it's in the format that the hypervisor expects to see. Therefore,
the checksum is different.

When you export an image, the hypervisor stores a server snapshot as an OVA
file containing multiple VHD files in order to speed the creation of server
images. These files are then merged into a single VHD file. For this reason,
the checksums for the image in the cloud and the exported image are different.

In addition, during the coalesce operation that happens on export,
some information is updated in the headers and footers of the VHD file. This
process means that the checksum is different even if you import an image
and then immediately export it, even though the content portion of the VHD is
identical.

{{< /accordion >}}
{{< accordion title="Where can I find my imported image in the Cloud Control Panel?" col="in" href="accordion48" >}}

The **Create Server** page of the Cloud Control Panel sorts images by the
servers for which they provide snapshots. However, because an imported image
isn't a snapshot of any existing server in the cloud, the Cloud Control Panel
considers it a snapshot of a deleted server. For this reason, imported images
are listed under the **Deleted Servers** category.

------------------------------------------------------------------------

### Image metadata and property protection

{{< accordion title="What's the difference between _image metadata_ and _image properties_?" col="in" href="accordion49" >}}

The Compute API uses the terminology _image metadata_, while the Images v2 API
uses the term _image properties_. These terms refer to the same concept.

{{< /accordion >}}
{{< accordion title="Why are some image properties protected?" col="in" href="accordion50" >}}

Rackspace places some properties on images in order to determine licensing,
billing, and virtual machine (VM) configuration. These properties are
inherited by snapshots of the servers that are booted from these images and
may not be modified by customers.

{{< /accordion >}}
{{< accordion title="Does image property protection affect the image metadata calls in the Compute v2 API?" col="in" href="accordion51" >}}

Because the Compute (nova) API acts as a proxy for Glance, property
protections apply to all of the image metadata operations that are performed through the Compute v2 API.

{{< /accordion >}}
{{< accordion title="What happens if I try to modify a protected property?" col="in" href="accordion52" >}}

The API sends a `403 (Forbidden)` response to your request. The response
contains an error message indicating that you are attempting to modify
a property that you don't have permission to modify.

{{< /accordion >}}
{{< accordion title="How do I know which properties are protected?" col="in" href="accordion53" >}}

Most of the properties that appear on an image by default are protected. One
exception is the `name` property, which you may change at any time. However,
because we use the `com.rackspace` prefix to indicate Rackspace properties,
you are unable to create any new properties with that prefix. The simplest
way to determine if you can modify a property is to attempt to change it. If
you cannot modify it, a `403 (Forbidden)` response is sent.

{{< /accordion >}}
{{< accordion title="Which RBAC roles can modify image properties?" col="in" href="accordion54" >}}

Users with customer-admin roles are able to modify image properties. These
roles include **identity:user-admin**, **admin**, and **cloudImages:admin**.

{{< /accordion >}}
{{< accordion title="Which RBAC roles can create image properties?" col="in" href="accordion55" >}}

A user must have a customer-admin role in order to create image properties. We
restrict image property creation to users with customer-admin roles because,
due to the way the Images v2 API works, any user who can create image
properties can also modify and delete image properties.  
{{< /accordion >}}

------------------------------------------------------------------------

### Image support

{{< accordion title="Where can I find the Rackspace Cloud Terms of Service?" col="in" href="accordion56" >}}

The following Rackspace Cloud Terms of Service are available:

-   [Rackspace Cloud Terms of Service for the United Kingdom
    cloud](https://www.rackspace.co.uk/legal/cloud-terms-of-service)

-   [Rackspace Cloud Terms of Service for the United States
    cloud](https://www.rackspace.com/information/legal/cloud/tos)

The Terms of Service incorporate the Rackspace Acceptable Use Policy (AUP).
You can find a link to the appropriate AUP document for your region from
the pages linked above.

{{< /accordion >}}
{{< accordion title="What support can I expect for imported and shared images?" col="in" href="accordion57" >}}

Imported and shared images are considered non-standard images. Learn more
about [Rackspace standard and non-standard
images](/support/how-to/rackspace-standard-and-non-standard-images).

For servers booted from non-standard images, we ensure that the host servers
are functioning properly and that API availability meets the Service Level
Agreement (SLA). We also provide advice about sharing, importing, and exporting
images.

{{< /accordion >}}
{{< accordion title="I'm a Managed Cloud customer. Do I only get infrastructure-level support for servers that are built from non-standard images?" col="in" href="accordion58" >}}

Our Managed Cloud support team wants to create amazing customer
outcomes. When you build a server from a non-standard image, your
support representative does what he or she can to troubleshoot and
provide guidance. However, because the technologies that are contained in a
non-standard image are not always popular or well-documented, technical
support for those technologies is not guaranteed and might vary by support
representative. Any assistance that is provided in response to a support
request for a server that is built from a non-standard image is not an
agreement of continuing support, and future requests are handled on a
case-by-case basis. When you consider deploying a server built from a
non-standard image as part of your infrastructure, keep in mind
that if you incur downtime or a degraded state due to problems with the
image or any technology contained therein, it is not covered by the
standard Cloud Servers SLA.

{{< /accordion >}}

{{< accordion title="I have a question that isn't listed here. How can I get help?" col="in" href="accordion59" >}}

For additional questions, contact Support or send an email to
[cloudimageshelp@rackspace.com](mailto:cloudimageshelp@rackspace.com).
{{< /accordion >}}