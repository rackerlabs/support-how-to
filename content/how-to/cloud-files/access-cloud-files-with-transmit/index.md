---
permalink: /access-cloud-files-with-transmit/
audit_date:
title: 'Accessing Cloud Files with Transmit 5'
type: article
created_date: '2021-05-13'
created_by: Brian A
last_modified_date: '2021-05-13'
last_modified_by: Brian A
product: Cloud Files
product_url: cloud-files
---

Transmit 5© is a macOS file transfer app which allows you to upload, download, and manage files with an easy, familiar, and powerful UI. Transmit 5 is not free, but it does offer a 7 day Free-Trial before it requires you to purchase a license to continue using it. This means you can use Transmit 5© to manage your Rackspace Cloud Files storage, move files between your Cloud Accounts, and to configure the Akamai® content delivery network (CDN). This article shows you how to configure the Transmit 5© client to help you manage Cloud Files.

### Prerequisites


In order to use Transmit 5 with Cloud Files, you'll need to have the following:
   - MacOS
   - Transmit 5, which can be downloaded and installed from [here](https://panic.com/transmit/)
   - Rackspace Cloud Account
   - Rackspace Cloud Account Username
   - Rackspace Cloud Account API Key
 
If you are unsure on how to find your API Key, follow [these instructions](https://docs.rackspace.com/support/how-to/view-and-reset-your-api-key/).

### Connection Procedure


The following steps will guide you through the basic connection process and some of the common actions you might take within Transmit 5. Be sure you've confirmed you've met the prerequisites above.
1. Open the Transmit5 application.
2. Set the Protocol to **Rackspace Cloud Files**.
3. Enter your Rackspace Cloud Account username in the field provided.
4. Enter your Rackspace Cloud Account API Key in the field provided.
5. Click **Connect**.
6. You should now see a list of buckets showing the available Rackspace Cloud Files regions. (ORD, IAD, DFW, SYD, HKG, LON)

#### Creating Containers
Containers are the storage locations you create on Cloud Files. Within these, you can place folders, files, and other data. Transmit5 will allow you to create containers from within it's interface.
1. You can create new containers by right clicking on a region from the list and choosing **New Container** from the option provided. 
2. You will be given a popup which allows you to name the container.
3. When you have input the name of the container, click **Create**
4. If you do not see your new container, be sure you click the arrow next to the region in the list to expand it's contents.

#### Uploading Files
Transmit5 presents the user with two side-by-side panes to work with. By default one pane is your local machine, and the other is where you connect to Cloud Files. The process of upload or downloading files is made very easy by Transmit5. The following steps will illustrate the process:
1. To upload a file or folder, simply navigate to where the it exists on your local machine using the pane provided.
2. Once you have found the file or folder, you simply drag it across the pane to the pane which is connected to Cloud Files and drop it into the container of choice.
3. The file or folder should now show up on both your local machine and in your Cloud Files container.

The process for downloading a file or folder is the same, but you are instead dragging the chosen item from the Cloud Files pane onto your local machine.

### Connecting to multiple Rackspace Cloud Accounts
One of the biggest benefits in using Transmit5 is that it allows the user to connect to two Rackspace Cloud Accounts simultaneously. This is useful for if you need to share large amounts of data quickly, or are moving from one account to another for any number of reasons. The following steps will show you how to connect to multiple accounts:
1. You should already be familiar with connecting to a single account from the steps given previously.
2. With the Local Machine pane selected, click **View** from the toolbar on your Mac, and select **Remote Browser**.
3. You should now see that your local machine pane has switched to a new pane that offers you the ability to connect to a remote service. Following the same steps provided previously, choose **Rackspace Cloud Files** for the protocol, and enter your other account's username and API key before clicking **Connect**
4. Once the connection is complete, you should now see the Cloud Files stored in the other account you've connected to.

Moving files, folders, and containers between accounts is as simple as moving them between your local device and Cloud Files - you simply drag and drop them across.


Include any troubleshooting information that pertains only to this task. If it might apply to more than one article, create a new article for it and link to that article from here.


### Limitations

* You cannot create a container by dragging a container over to another Rackspace Account. You must first create a blank container, or drag the container of choice into an existing one.
