---
permalink: fix-outlook-synchronization-errors/
audit_date: '2021-02-03'
title: Fix Outlook synchronization errors
type: article
created_date: '2015-06-12'
created_by: Rackspace Support
last_modified_date: '2021-02-03'
last_modified_by: Carlos Arriaga

---

If you recently migrated to Exchange 2010 or have been using Outlook
2010, you might see synchronization errors that appear as unread emails
and continue to increase. Microsoft is currently working to resolve this
issue, but in the interim you can use the following workaround.

### Customize the search folders

1.  In the navigation pane of your Outlook email view, expand
    the **Search Folders** folder.

2.  Right-click the **Unread Mail** folder and select **Customize This
    Search Folder**.

    {{<image src="1_55.png" alt="" title="">}}

3.  Click **Browse**.

    {{<image src="2_52.png" alt="" title="">}}

4.  Clear the **Search subfolders** check box at the bottom of the
    dialog box.

    {{<image src="3a.png" alt="" title="">}}

5.  In the Select Folder(s) window, uncheck all folders except for
    the Inbox. If there are any rules that move new emails into any
    other folder, you will want to include those also.

6.  Click **OK** and then click **OK** again to confirm.
