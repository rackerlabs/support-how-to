---
permalink: transferring-images-between-regions-of-the-rackspace-open-cloud-with-pitchfork/
audit_date:
title: Transfer images between regions of the Rackspace open cloud with pitchfork
type: article
created_date: '2017-02-20'
created_by: Cloud Images
last_modified_date: '2017-02-20'
last_modified_by: Mo Nash
product: Cloud Images
product_url: cloud-images
---

Meet Pitchfork - It was created by a [rather cleaver fellow](https://github.com/oldarmyc@Github) who made interacting with the Rackspace Cloud API super easy!
This community article was written for folks who would like to to transfer Rackspace Cloud Server instance images between regions of the Rackspace cloud.
*NOTE: For the image download/upload steps listed below I will be using another 3rd party software called [Cyberduck](https://cyberduck.io/) - you can still use a different opensource (free) software or the API directly - However, I will only be covering the methods used here, in this article*


Before we get into the details, we already assume that you have done the following:
*SHOW-STOPPER: This cannot be done with images larger than 50GB - There's no way to transfer those... So, check the size of the image before you start!*

-   Copy your username and API key, you'll need it to log into pitchfork.
    -   If you're uncertain where to find it, check out this how-to article -> https://support.rackspace.com/how-to/view-and-reset-your-api-key/

-   Create a (Cloud Files) "Image Export Container" - In the same DC/Region where the image that you want to transfer, currently lives. (Example Containername: DFW_IMG_ExportContainer) Then copy the name of the container (as it is case sensitive)
    -   Then, create a (Cloud Files) "Image Import Container" - In the destination DC/Region, where you want to send the image to. (Example Containername: ORD_IMG_ImportContainer) Then copy the name of the container (as it is case sensitive)
    -   If you're uncertain how to create the containers, check out this how-to article -> https://support.rackspace.com/how-to/getting-started-with-cloud-files-and-cdn/
        
-   Find the image you want to send to another region, then copy that images' "UUID" alongside the .
    -   PROTIP: An easy way to get the image UUID - In the Server Images section of the MyCloud Dashboard, hover over the image name (it's a hyperlink), a little box will appear after a second or two and you can copy the UUID from there.

-   As a result, you should have 5 items copied to your notepad - Your mycloud username, that users API key, the UUID of the image you want to transfer, the IMPORT container name and the EXPORT container name.


Here are the steps on using completeing the image transfer:
-   Open a new browser tab and head to https://pitchfork.cloudapi.co/images/#export_task-images

-   Before you can actually use Pitchfork - Log into the application via the link at the top right of the page and select the region from the drop-down in the top left, that you are working in for the task.
    -   NOTE: When I say "working in" for the task, it's relative to the task you're performing
        -   Say you're EXPORTING the image for example, the region in the dropdown should match the DC/Region of where the image lives.
        -   Adversely, when you get to the IMPORT task, you must remember to change the region before sending the API request.

-   The next step after logging in, is to EXPORT the image to the EXPORT container. You'll need the following details that you copied earlier:
    -   The image UUID and the EXPORT container name

-   Once you input what you have into the correlating fields to send the API call, scroll down and you will see a "request-id" in the Response Body of the call.
    -   NOTE: You can use the "request_id" to check the "status" of the EXPORT/IMPORT from https://pitchfork.cloudapi.co/images/#get_task_details-images

-   After the image has been exported to the container, you will need to download the image. I download and upload the image using Cyberduck
    -   SIDE NOTE: As I mentioned in the preface, I use Cyberduck to perform the image download/upload as it's the easiest to use. You just plug in your username and API key, it saves it for you and will simplify everything with the image download and upload.
    
-   After you have the entire image downloaded to your localhost, you will then need to upload it to the Image IMPORT Container at the destination DC/Region.

-   The last step comes after the image has finished uploading to the IMPORT container. Head back to Pitchfork at https://pitchfork.cloudapi.co/images/#import_task-images
    -   Don't forget to change the destination DC/Region from the dropdown in the top left of the page, for the last leg of this image's journey. Once again, you'll need the those details that you copied earlier.
    -   You'll want to get the IMPORT container name and the name of the uploaded image to input into the "import_from" field, making sure there's no spaces in what you put, before sending the API call.

After the API has had some time to proccess the image from the container to the available images (Once again you can use the request_id to confirm).
    If everything went accordingly, the image will be listed and available for use in that DC/Region.

### Related information

-   [Rackspace Cloud Images Developer Guide](https://developer.rackspace.com/docs/cloud-images/v2/developer-guide/)
-   [Cloud Images FAQ](/how-to/cloud-images-faq)
-   [Transferring images between regions of the Rackspace Open Cloud](/how-to/transferring-images-between-regions-of-the-rackspace-open-cloud)
-   [Pitchfork @Github](https://github.com/oldarmyc/pitchfork)
