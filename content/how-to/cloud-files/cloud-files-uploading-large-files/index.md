---
permalink: cloud-files-uploading-large-files/
audit_date: '2021-04-16'
title: Cloud Files: Uploading large files
type: article
created_date: '2012-03-06'
created_by: Rackspace Support
last_modified_date: '2021-04-16'
last_modified_by: Ana Corpus
product: Cloud Files
product_url: cloud-files
---

For large file support, Cloud Files allows you to upload multiple file
segments and a manifest file to map the segments together.

Following are a few limitations:

-   The Content Delivery Network (CDN) cannot serve files larger than 10 GB.
-   You must first segment files larger than 5 GB into smaller files.
-   We do not recommend that you use file segments smaller than 100-200 MB.

There are two options for uploading large files.

### Automatically segment and upload

The Swift Tool segments a large file, creates a manifest
file, and uploads them accordingly. The Swift tool manages the file segments
by deleting and updating segments as necessary. The following code shows sample output:

    $ st -A https://auth.api.rackspacecloud.com/v1.0 -U glh -K 3a25c2dc74f24c3122407a26566093c8 upload -S 1048576 test_container largefile.iso
    largefile.iso segment 1
    largefile.iso segment 6
    largefile.iso segment 9
    largefile.iso segment 4
    largefile.iso segment 5
    largefile.iso segment 3
    largefile.iso segment 7
    largefile.iso segment 8
    largefile.iso segment 2
    largefile.iso segment 0
    largefile.iso

### Use the API with your application

Use the Cloud Files API to incorporate large file support
directly with your application. The following example shows
API cURL commands:

    # First, upload the segments
    curl -X PUT -H 'X-Auth-Token: <token>' \     https://<storage_url>/container/myobject/1 --data-binary '1'
    curl -X PUT -H 'X-Auth-Token: <token>' \     https://<storage_url>/container/myobject/2 --data-binary '2'
    curl -X PUT -H 'X-Auth-Token: <token>' \     https://<storage_url>/container/myobject/3 --data-binary '3'

    # Next, create the manifest file
    curl -X PUT -H 'X-Auth-Token: <token>' \
    -H 'X-Object-Manifest: container/myobject/' \     https://<storage_url>/container/myobject --data-binary ''

    # Then you can download the segments as a single object
    curl -H 'X-Auth-Token: <token>' \
    https://<storage_url>/container/myobject

For more information, see the
[Creating large objects](https://docs.rackspace.com/docs/cloud-files/v1/use-cases/additional-object-services-information#creating-large-objects)
section in the Cloud Files Developer Guide.

Use the Feedback tab to make any comments or ask questions. You can also click **Let's Talk** to [start the conversation](https://www.rackspace.com/.
