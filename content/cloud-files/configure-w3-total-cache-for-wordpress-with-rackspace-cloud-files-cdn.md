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
set up the W3 Total Cache plugin to work with Rackspace Cloud Files /
CDN.

This article assumes that you have already completed the installation of
your WordPress website and database. If you have not completed this,
please read the following article: [Install and Use
WordPress](/how-to/installing-wordpress-on-cloud-sites "/how-to/installing-wordpress-on-cloud-sites")

You can speed up your WordPress blog by using Cloud Files with CDN
Technology to display content to users faster and more efficiently. You
can distribute common files or content such as css, javascript, images,
videos and much more through a CDN, which serves the content from the
closest edge server to the end-user.

First you must login as admin on your Wordpress blog and add new
plugin:
<img src="/knowledge_center/sites/default/files/styles/full_width/public/field/image/01.png" class="image-full_width" width="700" height="368" />



Search for "w3 total cache":
<img src="/knowledge_center/sites/default/files/styles/full_width/public/field/image/02.png" class="image-full_width" width="700" height="366" />



It should be the 1st to show, so click install now:
<img src="/knowledge_center/sites/default/files/styles/full_width/public/field/image/03.png" class="image-full_width" width="700" height="368" />



Now we must activate:
<img src="/knowledge_center/sites/default/files/styles/full_width/public/field/image/04.png" class="image-full_width" width="700" height="368" />



Next step we will enable the CDN function and pick Rackspace Cloud
Files, to do so go to General Setting as you see on the image:
<img src="/knowledge_center/sites/default/files/styles/full_width/public/field/image/05.png" class="image-full_width" width="700" height="366" />

Scroll down until you find CDN and mark enable. Also select Rackspace
Cloud Files:
<img src="/knowledge_center/sites/default/files/styles/full_width/public/field/image/06.png" class="image-full_width" width="700" height="368" />



An error message will appear, as we have not set up the plugin yet:
<img src="/knowledge_center/sites/default/files/styles/full_width/public/field/image/07.png" class="image-full_width" width="700" height="368" />



We are going to need the Rackspace API key and you can easily find on
our Cloud Panel. Go to the panel, click on your username and select
Account Settings. Now you will find the API as demonstrated below. (For
more information about viewing your API key, see [View and reset your
API
key](/how-to/view-and-reset-your-api-key).)
<img src="/knowledge_center/sites/default/files/styles/full_width/public/field/image/08.5.png" class="image-full_width" width="700" height="366" />



Now back to the admin page on your Wordpress blog, click on CDN:
<img src="/knowledge_center/sites/default/files/styles/full_width/public/field/image/08.png" class="image-full_width" width="700" height="568" />



You will need to inform the account username, API Key, location and
container. Location is only US or UK, so no worries here.
The container was somehow a problem some people were having and I was
able to re create. If you create the container first and add here, it
might give you an error. This will happen if your Cloud Server and Cloud
Files are not on the same region, for example ORD and DFW. Even if you
have both on DFW for example and your account is set to use ORD as
default, you will get an error. It seems like this is some configuration
on the plugin.

On my personal account I was able to create the container on the Cloud
Panel and everything worked fine, that's because I always use my default
region. I tried to use a Cloud File on a different region and I got an
error. Here I decided to type the name of the container and click on
create container and let the plugin create the container, you will be
able to see on the Cloud Panel the region it was created.

Be very careful with this, if your Cloud Server and Cloud Files are not
on the same region, you could get charged for the bandwidth between
regions. If needed you can check your default region using nova:
Install on
Windows: [/how-to/installing-python-novaclient-on-windows
I](/how-to/installing-python-novaclient-on-windows)nstall
on Linux and Mac
OS: </how-to/installing-python-novaclient-on-linux-and-mac-os>

After all this was said, here is how it will look like:
<img src="/knowledge_center/sites/default/files/styles/full_width/public/field/image/09.png" class="image-full_width" width="700" height="368" />



Here is a basic configuration, just click on Upload Included Files (or
other) to upload all the files:
<img src="/knowledge_center/sites/default/files/styles/full_width/public/field/image/10_3.png" class="image-full_width" width="700" height="368" />



This page will pop up, just click Start:
<img src="/knowledge_center/sites/default/files/styles/full_width/public/field/image/11_0.png" class="image-full_width" width="700" height="567" />



The plugin will start loading all images to the Cloud Files, it will
take some time, but you can see the progress:
<img src="/knowledge_center/sites/default/files/styles/full_width/public/field/image/12_0.png" class="image-full_width" width="700" height="566" />



To make all links look nice, let's use a CNAME so all the links will not
look huge (this is optional). Go to the Cloud Panel and open your domain
on the DNS, create a CNAME record:
<img src="/knowledge_center/sites/default/files/styles/full_width/public/field/image/13_1.png" class="image-full_width" width="700" height="329" />



Now when you create a new post and upload some image, it will be sent to
the Cloud Files automatically and you can confirm checking the page
source of your page, here is an example:
<img src="/knowledge_center/sites/default/files/styles/full_width/public/field/image/14%20-%20Copy.png" class="image-full_width" width="700" height="394" />

Also if you have re-sized any images using wordpress's built in image
editor, the w3 total cache plugin may fail to upload any image that was
modified using this process.
In order to solve this problem, you can upload your 'uploads' file
manually. Just upload it directly to your container so that it replaces
your current uploads file.



