---
permalink: /access-cloud-files-with-transmit/
audit_date: '2021-05-14'
title: 'Access Cloud Files with Transmit 5'
type: article
created_date: '2021-05-13'
created_by: Brian A.
last_modified_date: '2021-05-14'
last_modified_by: Carlos Arriaga
product: Cloud Files
product_url: cloud-files
---

Transmit 5&reg; is a macOS&reg; file transfer application that enables you to upload,
download, and manage files with an easy, familiar, and powerful UI. Transmit 5 is
not free, but it does offer a seven-day free trial before you have to purchase a
license to continue using it. This means you can use Transmit 5 to manage your
Rackspace Cloud Files storage, move files between your cloud accounts, and
configure the Akamai&reg; content delivery network (CDN). This article shows you
how to configure the Transmit 5 client to help you manage Cloud Files.

### Prerequisites


To use Transmit 5 with Cloud Files, you need to have the following items:

   - macOS
   - Transmit 5, which you can download and install from [Panic.com](https://panic.com/transmit/)
   - Rackspace Cloud account
   - Rackspace Cloud account username
   - Rackspace Cloud account application programmer interface (API) key
 
If you are unsure how to find your API key, follow
[these instructions](https://docs.rackspace.com/support/how-to/view-and-reset-your-api-key/).

### Connection procedure

The following steps guide you through the basic connection process and some of the common
actions you might take in Transmit 5. After you meet the preceding prerequisites, perform
these steps:

1. Open the Transmit5 application.
2. Set the **protocol** to **Rackspace Cloud Files**.
3. Enter your Rackspace Cloud account username in the field provided.
4. Enter your Rackspace Cloud account API Key in the field provided.
5. Click **Connect**.
6. You should now see a list of buckets showing the available Rackspace Cloud Files regions,
   such as ORD, IAD, DFW, SYD, HKG, and LON.

#### Create a container

Containers are the storage locations you create on Cloud Files. Within these, you can place
folders, files, and other data. Transmit5 enables you to create containers from within its
interface.

1. To create a new container, right-click on a region from the list and choose
   **New Container**. 
2. In the pop-up dialogue, name the container.
3. Click **Create**.
4. If you do not see your new container, click the arrow next to the region in
   the list to expand its contents.

#### Upload files

Transmit5 presents the user with two side-by-side panes. By default, one pane is your
local machine, and the other is where you connect to Cloud Files. Transmit5 simplifies
the process of uploading and downloading files. The following steps illustrate the process:

1. To upload a file or folder, navigate to its location on your local machine by using the. 
   provided pane.
2. After you find the file or folder, drag it across the pane to the Cloud Files pane and
   drop it into the container of choice.
3. The file or folder should now show up on both the local machine and Cloud Files container.

The process for downloading a file or folder is the same. Drag the chosen item from the Cloud
Files pane onto the local machine pane.

### Connect to multiple Rackspace Cloud accounts

One of the biggest benefits of using Transmit5 is that it allows the user to connect to two
Rackspace Cloud accounts simultaneously. This is useful if you need to share large amounts
of data quickly or move from one account to another. The following steps show you how to
connect to multiple accounts:

1. Connect to one of your accounts by using the preceding steps.
2. Select the **Local Machine** pane, click **View** from the toolbar on your Mac, and select
   **Remote Browser**.
3. Your local machine pane switches to a new pane that offers you the ability to connect to
   a remote service. Following the preceding steps, choose **Rackspace Cloud Files** for the
   protocol and enter your other account's username and API key before clicking **Connect**
4. After the connection completes, you should see the Cloud Files stored in the other account
   you've connected to.

Moving files, folders, and containers between accounts is as simple as moving them between
your local device and Cloud Files&mdash;you simply drag and drop them between panes.

### Limitations

You cannot create a container by dragging an existing container to another Rackspace Account.
You must first create a blank container or drag the chosen container into an existing one.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).