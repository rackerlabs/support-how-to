---
permalink: use-swift-to-manage-large-files/
audit_date: '2021-04-05'
title: Use Swift to manage large files
type: article
created_date: '2016-02-10'
created_by: Stephanie Fillmon
last_modified_date: '2021-04-05'
last_modified_by: Carlos Arriaga
product: Cloud Files
product_url: cloud-files
---

If you want to upload large files but don't want to incorporate our
code into an application, you might find it easier to use the [Swift&reg; tool](https://swiftstack.com/docs/integration/python-swiftclient.html) for
your uploads and management.

**Note:** If you prefer to use the API to manage large files, see [Use the API to manage large files](/support/how-to/use-the-api-to-manage-large-files),
and if you prefer Swiftly, see [Use Swiftly to upload an image](/support/how-to/use-swiftly-to-upload-an-image).

This article describes the upload process if you are using the tool.

The following command uploads **large_file** to **test_container** in 10
MB segments and then creates the manifest file so the system can download
the segments as one:

    swift upload test_container -S 10485760 large_file

You can change the size of the segments are by changing the value
following the `-S` option.

The following command downloads the large file as a single object:

    swift download test_container large_file

In the above example, Swift&reg; uploads all the segments into a second
container named **test_container_segments**. These segments will have
names using the format of
**<name>/<timestamp>/<size>/<segment>**. For example:

    large_file/1290206778.25/21474836480/00000000
    large_file/1290206778.25/21474836480/00000001


The main benefit for using a separate container is so the main container
isn't polluted with all the segment names. The naming format is so

that an upload of a new file with the same name won't overwrite the
contents of the first until the end when the process updates the manifest file.


For more information on using the Swift tool, see the [OpenStack Swift documentation](https://docs.openstack.org/developer/swift/).

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 

