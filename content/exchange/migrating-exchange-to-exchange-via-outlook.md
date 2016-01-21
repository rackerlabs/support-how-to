---
node_id: 1417
title: Migrating Exchange To Exchange via Outlook
type: article
created_date: '2012-05-27'
created_by: Rae D. Cabello
last_modified_date: '2013-12-12'
last_modified_by: Kyle Laffoon
product: Microsoft Exchange
product_url: exchange
---

The following article will demonstrate how to transfer your current
Microsoft Exchange data (Email, Calendar Data, Contacts, Tasks, and
Notes) into your new Rackspace Microsoft Exchange account. Let's take at
look at the procedure:

*Note: If your office/network has bandwidth limitations, you may want to
turn off cached Exchange mode before your users begin migrating their
.pst files.*

-   [Export Your Data Into A .PST File](#Export)

<!-- -->

-   [Import Your .PST File](#PSTImport)

###

###

### Exporting Your Data Into a .PST File

1\. First thing you'll want to do is open Outlook and log into your
previous Microsoft Exchange mailbox and select **File / Import and
Export**.

![](http://c15047547.r47.cf2.rackcdn.com/1.png)

2\. Next you'll select the **Export to a file** option, and then select
the **Next** button.

![](http://c15047547.r47.cf2.rackcdn.com/2.png)

3\. On the next screen select **Personal Folder File (.pst)** then click
the **Next** button. Next perform one of the following and select the
**Next **button:

-   To export an entire mailbox, including calendar, contacts, tasks,
    and notes, click once on the topmost folder (Mailbox &ndash; Your Name)
    then select the **Include subfolders** check box.

<!-- -->

-   To export a public folder click once on the topmost folder (or the
    Public Folders folder to export all public folders) then select the
    **Include subfolders** check box.

<!-- -->

-   To export individual **Calendars, Contacts, or Tasks**, highlight
    the individual folder then select the **Include subfolders**
    check box.

4\. You will now save this .PST file. The default save location
is **C:\\Documents and Settings\\(user name)\\Local
Settings\\Application Data\\Microsoft\\Outlook\\backup.pst.** Select
the **Browse** button to select a different location.

![](http://c15047547.r47.cf2.rackcdn.com/3.png)

*Note: It may be easier to locate the file later if you save it to your
desktop. You will need to know the location of the file to import it
into your new account.*

5\. Next select the root folder of your mailbox as pictured below, check
the option to **Include subfolders**, and select **Next**. Be sure to
leave the option **Replace duplicates with items exported** selected
then select the **Finish** button to begin your Export

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/ExportPersonalFolders.png" alt="Export personal folders" width="451" height="336" />

![](http://c15047547.r47.cf2.rackcdn.com/5.png)

*Note: Since this file is only being used for temporary export/import we
recommend you use **No Encryption** by leaving the password blank for
speed and compatibility purposes.*

*

                 *

### Importing Your .PST File

Once you've exported your .PST File you'll need to add your new
Rackspace Microsoft Exchange email account to your email client. Once
you have your account set up perform the following steps:

1\. First thing you'll want to do is open Outlook, log into your
Microsoft Exchange mailbox, and select **File / Import and Export**.

![](http://c15047547.r47.cf2.rackcdn.com/1.png)

2\. Next you'll select the **Import from another program or file **option
then select the **Next** button.

![](http://c15047547.r47.cf2.rackcdn.com/6.png)

3\. Select **Personal Folder File (.pst)**, select **Next**, then
select the **Browse** button and locate the **.PST File** you exported.

![](http://c15047547.r47.cf2.rackcdn.com/7.png)

4\. Select the **Open** button and leave the option **Replace duplicates
with items imported** selected, and select the **Next** button.

![](http://c15047547.r47.cf2.rackcdn.com/8.png)

5\. Select **Personal Folders** then select the **Include
subfolders** check box. Next select the **Import items into the same
folder** button. In the drop-down box select the Exchange mailbox
(Mailbox &ndash; Your Name) into which you would like to import your data to
and then select **Finish** to begin your import.

![](http://c15047547.r47.cf2.rackcdn.com/10.png)

*Note: Your import may take some time to finish depending on the size of
the .PST File.*

