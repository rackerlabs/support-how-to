---
permalink: set-up-a-static-landing-page-using-rackspace-cloud
audit_date:
title: Set Up a Static Landing Page Using Rackspace Cloud Files
created_date: '2019-01-18'
created_by: Rackspace Community
last_modified_date: 
last_modified_by: 
product: Cloud Files
product_url: cloud-files
---

1. Click **Storage**

2. Click **Files**
3. Click on Create Container - **Note: You will need a separate container for each landing page**

   a. Name your container

   b. Select a region (preferably one close to you geographically)

   c. Select Static Website
4. Click on Upload Files

   a. Upload all of your files - at a minimum, you will need to include an index.html file.

   b. Make sure that all files and folders - css, javascript, etc. - are included in the upload and in their appropriate folders.
5. Set up CNAME record with DNS registrar (details below)

   a. Click on the cogwheel next to the container name

   b. Click on View Website Settings

   c. Copy the Target Domain field

   d. Set up CNAME to point to the Target Domain you just copied in step C.

How to create a CNAME at Rackspace: https://www.rackspace.com/knowledge_center/article/create-dns-records-for-cloud-servers-with-the-control-panel

At GoDaddy: https://www.godaddy.com/help/add-a-cname-record-19236

At CloudFlare: https://support.cloudflare.com/hc/en-us/articles/200168706-How-do-I-do-CNAME-setup-
