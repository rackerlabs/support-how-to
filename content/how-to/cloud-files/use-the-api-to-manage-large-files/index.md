---
permalink: use-the-api-to-manage-large-files
audit_date: '2021-04-08'
title: Use the API to manage large files
type: article
created_date: '2016-02-10'
created_by: Stephanie Fillmon
last_modified_date: '2021-04-08'
last_modified_by: Carlos Arriaga
product: Cloud Files
product_url: cloud-files
---

If you are interested in developing by using the Rackspace Large File
Support code to incorporate into your application, you should work
directly with the Cloud Files API.

**Note:** If you prefer to use the Swift tool, see [Use Swift to manage large files](/support/how-to/use-swift-to-manage-large-files),
and if you prefer Swiftly, see [Use Swiftly to upload an image](/support/how-to/use-swiftly-to-upload-an-image).

Use the following steps:

1.  Upload the segments:

        curl -X PUT -H 'X-Auth-Token: <token>' \
        https://<storage_url>/container/myobject/1 --data-binary '1'

        curl -X PUT -H 'X-Auth-Token: <token>' \
        https://<storage_url>/container/myobject/2 --data-binary '2'

        curl -X PUT -H 'X-Auth-Token: <token>' \
        https://<storage_url>/container/myobject/3 --data-binary '3'

2.  Create the manifest file:

        curl -X PUT -H 'X-Auth-Token: <token>' \

        -H 'X-Object-Manifest: container/myobject/' \
        https://<storage_url>/container/myobject --data-binary ''

3.  Download the segments as a single object:

        curl -H 'X-Auth-Token: <token>' \

        https://<storage_url>/container/myobject

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
