---
node_id: 3791
title: Migrating Public Folder Data
type: article
created_date: '2013-11-21'
created_by: Milton Prado
last_modified_date: '2016-01-18'
last_modified_by: Kyle Laffoon
product: Microsoft Exchange
product_url: exchange
---

This article will provide you with instructions on migrating Public
Foder data via Outlook 2010.  The process is grouped into two sections:


1\) Export Public Folder items to .pst

2\) Importing .pst into Public Folder

Public Folder data from your previous Exchange mailbox should be
exported to .pst format.  In order to do this, Outlook must be connected
to your source environment with appropriate permissions for the Public
Folder that you will be migrating.

**Outlook 2010**
----------------

### **Export Public Folder Data to .pst**

1.Open Outlook 2010 while connected to your previous email environment.

2.Click **File &gt; Open &gt; Import**

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Outlook_2010_-_export_pic1.png" width="625" height="451" />



3\. The first dialog of the Import and Export wizard will appear.  Select
**Export to a file &gt; Next**.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Outlook_2010_-_export_pic2.png" width="436" height="329" />



4\. In the next wizard dialog, Select **Outlook Data File (pst) &gt;
Next.**

**<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Outlook_2010_-_export_pic3.png" width="439" height="327" />**



5\. The Export Outlook Data File box will appear.  *Note: To export
Public Folders, scroll down to select the public folders from the list
(see the example below)*.  Select **Include Subfolders &gt; Next**.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Outlook_2010_-_export_pic4png.jpg" width="438" height="315" />



6\. Browse to the location where you would like to save the file **&gt;**
Click **Finish**.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Outlook_2010_-_export_pic5png.png" width="435" height="316" />



7\. A password is not required and may be left blank.  Click **OK.**

**<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Outlook_2010_-_export_pic6png.png" width="301" height="156" />**





### Import .pst into Public Folder

8. Open Outlook 2010 while connected to your previous email environment.

9\. Click** File &gt; Open &gt; Open Outlook Data File**

 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Outlook_2010_-_import_pic7png.png" width="569" height="404" />



10\. You will not see the file listed in the Outlook folder tree.  Please
expand it and select the folder in question.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Outlook_2010_-_import_pic8png.jpg" width="205" height="482" />



*Note: If you don't see it make sure that Folder View is enabled.*

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Outlook_2010_-_import_pic9.png" width="231" height="170" />



12\. Expand the current public folders **&gt; All Public Folders &gt;
Root \#\#\# &gt; Domain.com.**

 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Outlook_2010_-_import_pic10_0.jpg" width="212" height="367" />



13\. Right-click on the domain.com public folder and select **New
Folder.**

 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Outlook_2010_-_import_pic11.jpg" width="268" height="486" />



14\. Enter the name of the folder and select the **Folder Contains** drop
down to select the folder type.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Outlook_2010_-_import_pic13.jpg" width="316" height="354" />



15. Select all items from the .pst file (simultaneously hold CTRL and
A), drag and drop them to the Public Folder. You may also copy and paste
them if you like.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Outlook_2010_-_import_pic12.jpg" width="582" height="479" />



16\. Allow some time for the newly imported emails to upload to the
server.  At this point the migration is complete.  Note: Based on the
way Public Folders replicate across the environment, we recommend
waiting 15-20 minutes before verifying all other users can see the data.


