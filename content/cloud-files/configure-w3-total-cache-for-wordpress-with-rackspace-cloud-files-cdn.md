---
node_id: 3724
title: Configure W3 Total Cache for Wordpress with Rackspace Cloud Files / CDN
type: article
created_date: '2013-10-10'
created_by: Eric Cavalcanti
last_modified_date: '2016-01-21'
last_modified_by: Catherine Richardson
product: Cloud Files
product_url: cloud-files
---

This tutorial has a lot of images and it will show basic steps on how
set up the W3 Total Cache plugin to work with Rackspace Cloud Files/CDN.

This article assumes that you have already completed the installation of
your WordPress website and database. If you have not completed this,
please read the following article: [Install and Use WordPress](/how-to/installing-wordpress-on-cloud-sites "/how-to/installing-wordpress-on-cloud-sites")

You can speed up your WordPress blog by using Cloud Files with CDN
Technology to display content to users faster and more efficiently. You
can distribute common files or content such as css, javascript, images,
videos and much more through a CDN, which serves the content from the
closest edge server to the end-user.

1. Log in as admin on your Wordpress blog and click **Plugins > Add New** in the left hand menu:

  ![](https://b9002618969a676fa5e9-329656694c46da9401f89a96a819e8df.ssl.cf5.rackcdn.com/cloud%20files/files-configure-w3-total-1.png)

2. Enter "w3 total cache" in the plugin search bar:

  ![](https://b9002618969a676fa5e9-329656694c46da9401f89a96a819e8df.ssl.cf5.rackcdn.com/cloud%20files/files-configure-w3-total-2.png)

3. Under W3 Total Cache, click **Install Now**:

  ![](https://b9002618969a676fa5e9-329656694c46da9401f89a96a819e8df.ssl.cf5.rackcdn.com/cloud%20files/files-configure-w3-total-3.png)

4. To activate, click **Activate Plugin**:

  ![](https://b9002618969a676fa5e9-329656694c46da9401f89a96a819e8df.ssl.cf5.rackcdn.com/cloud%20files/files-configure-w3-total-4.png)

5. In the left hand menu, click **Performance > General Settings**.

6. Scroll down until you find CDN and mark **Enable** and select **Rackspace Cloud Files** as the CDN Type.

  ![](https://b9002618969a676fa5e9-329656694c46da9401f89a96a819e8df.ssl.cf5.rackcdn.com/cloud%20files/files-configure-w3-total-6.png)

  An error message will appear, as we have not set up the plugin yet:

  ![](https://b9002618969a676fa5e9-329656694c46da9401f89a96a819e8df.ssl.cf5.rackcdn.com/cloud%20files/files-configure-w3-total-7.png)

  We are going to need your API key. You can easily find this in the Cloud Control Panel. After logging in, click on your username in the upper right corner and select **Account Settings**. For more information about viewing your API key, see [View and reset your API key](/how-to/view-and-reset-your-api-key).

7. With your API key, return to the the admin page on your Wordpress blog and click on **CDN**.

  You will need to inform the account username, API Key, location and container. Location is only US or UK, so no worries here.

  The container was somehow a problem some people were having and I was able to recreate. If you create the container first and add here, it might give you an error. This will happen if your Cloud Server and Cloud Files are not on the same region, for example ORD and DFW. Even if you have both on DFW for example and your account is set to use ORD as default, you will get an error. It seems like this is some configuration on the plugin.

  On my personal account I was able to create the container on the Cloud Control Panel and everything worked fine, that's because I always use my default region. I tried to use a Cloud File on a different region and I got an error. Here I decided to type the name of the container and click on create container and let the plugin create the container, you will be able to see on the Cloud Panel the region it was created.

  Be very careful with this, if your Cloud Server and Cloud Files are not on the same region, you could get charged for the bandwidth between regions. If needed you can check your default region using nova:

  -  [Install python-novaclient on Windows](/how-to/installing-python-novaclient-on-windows)
  -  [Install python-novaclient on Linux and Mac OS](/how-to/installing-python-novaclient-on-linux-and-mac-os)

  Your configuration should look similar to the following:

  ![](https://b9002618969a676fa5e9-329656694c46da9401f89a96a819e8df.ssl.cf5.rackcdn.com/cloud%20files/files-configure-w3-total-9.png)

8. After saving your configuration settings, click on **Upload includes files** in the **General** section:

  ![](https://b9002618969a676fa5e9-329656694c46da9401f89a96a819e8df.ssl.cf5.rackcdn.com/cloud%20files/files-configure-w3-total-10.png)

9. In the **Media Library export** window, click **Start**:

  ![](https://b9002618969a676fa5e9-329656694c46da9401f89a96a819e8df.ssl.cf5.rackcdn.com/cloud%20files/files-configure-w3-total-11.png)

  The plugin will start loading all images to the Cloud Files. This can take several minutes to complete, but you can see the progress:

  ![](https://b9002618969a676fa5e9-329656694c46da9401f89a96a819e8df.ssl.cf5.rackcdn.com/cloud%20files/files-configure-w3-total-12.png)

10. (*Optional*) To give your links a human readable name, use a CNAME by logging in to the Cloud Control Panel and click on **Networking > Cloud DNS**.

  - Select your domain, and click **Add Record**.
  - Select **CNAME Record** as the **Record Type**.

     ![](https://b9002618969a676fa5e9-329656694c46da9401f89a96a819e8df.ssl.cf5.rackcdn.com/cloud%20files/files-configure-w3-total-13.png)

Now when you create a new post on your WordPress site and upload an image, it will automatically be uploaded to your Cloud Files container. You can confirm this by checking the source of your page. It should look similar to the following:

![](https://b9002618969a676fa5e9-329656694c46da9401f89a96a819e8df.ssl.cf5.rackcdn.com/cloud%20files/files-configure-w3-total-14.png)

**Note:** If you re-size images using WordPress's built-in image editor, the W3 Total Cache plugin may fail to upload any image that was modified using this process. In order to solve this problem, you can upload your **uploads** file manually. Just upload it directly to your Cloud Files container so that it replaces your current **uploads** file.
