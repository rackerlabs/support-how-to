---
permalink: configure-an-iis-ftp-site/
audit_date: '2020-05-20'
title: 'Configure an IIS FTP site'
type: article
created_date: '2020-05-19'
created_by: Steven Mondragon-DeVoss
last_modified_date: '2020-05-20'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how-to set up an FTP site in MIcrosoft&reg; Internet Information Services (IIS)
and how to add an FTP user to an existing FTP site. For help installing FTP, see 
[Install FTP on Windows Server 2012 (R2)](https://support.rackspace.com/how-to/installing-ftp-on-windows-server-2012-r2/).

### Verify that IIS and FTP services are installed

To check if the IIS role has been installed, open the **Server Manager** and click **Tools**
(in Windows&reg; 2012 and later) or expand **Roles** (in Windows 2008 R2). If IIS is installed, use
Powershell to simply check that the FTP service exists by running the following command:

    gsv 'FTPSVC'

If the IIS role is not already installed, install the role by using **Server Manager**. You can also install the
FTP role as part of this installation. You don't need to restart the server to install the required roles. 

### Set up an FTP Site

Use the following steps to set up the FTP site in IIS:

1. Expand the server name in IIS until you see **Sites**.

    a. Right click **Sites** and click **Add FTP Site**.
    
    b. Name the FTP Site as **IsolatedFTP**.
    
    c. Under **Physical path**, browse to **C:\inetpub\ftproot** and click **Next**.

2. Leave the **IP Address** as **All Unassigned** and on port 21.

    a. Ensure the box is checked next to **Start FTP site automatically**.
    
    b. Under **SSL**, select **No SSL**.
    
    c. Click **Next**.

3. Under **Authentication**, select **Basic**.

    a. Under **Authorization**, select **Specified roles or user groups**.
    
    b. In the text box, type **FTPUsers**.
    
    c. The permissions for this should be set to **Read**.
    
    d. Click **Finish**.

#### FTP user isolation

After the site build completes, use the following steps to set up FTP user isolation:

1. Ensure the IsolatedFTP site is selected in the left hand pane. You should see a number of options available in the **IsolatedFTP** Home page. 

2. Open **FTP User Isolation**.

3. Under **Isolate Users**, select **User name directory (disable virtual directories)**.

4. Click **Apply** in the right hand pane.

#### Configure FTP directory browsing

Use the following steps to configure FTP directory browsing. 

1. Ensure the **IsolatedFTP** site is selected in the left hand pane. You should see a number of options available in the **IsolatedFTP** Home page. 

2. Open **FTP Directory Browsing**.

3. Check the box next to **Virtual Directories** under **Directory Listing Options**.

4. Click **Apply** in the right-hand pane.

#### Create the FTPUsers group

Use the following steps to create the FTPUsers group: 

1. Open **User Management**. You can select **Server Manager > Computer Management > Local Users and Groups** or run the run command `lusrmgr.msc`. 

2. Open **Groups**, right click a blank area, and select **New Group** from the menu.

3. Name the group **FTPUsers** and click **Create**.

#### Create the Local Groups folder

Use the following steps to create the **Local Groups** folder: 

1. Go back into IIS.

2. Right click **IsolatedFTP** site and select **Add Virtual Directory**.

3. Under **Alias**, type **LocalUser**.

4. Under physical path, choose **C:\inetpub\ftproot** and click **OK**.

### Create an FTP account

Use the following steps to create an FTP account:

1. To create a user, open **User Management** on the server. 

    a. Create the new user and add the user to the group **FTPUsers**.
    
    b. Set the attribute **Password never expires**.
    
    c. Remove the flag **User must change password at next logon**.

2. Open IIS, expand **Sites**, and expand **IsolatedFTP**. 

    a. Right click **LocalUser** and click **Add Virtual Directory**.
    
    b. Under **Alias**, enter the username of the user you created in the previous step.
    
    c. Set the physical path to **C:\inetpub\ftproot** and click **OK**.

3. Ensure the username directory you just created is highlighted in IIS, and open **FTP Authorization Rules**. 

    a. In the right-hand pane, click **Add Allow Rule**. 
    
    b. When the window opens, under **Allow access to this content to:**, select **Specified users** and enter the username of        the user you have created.
    
    c. Under permissions, select **Read** and **Write**.
    
    d. Click **OK**. Now any folders you create under that user inherit the properties of their username folder.

4. To give the user the access to the directory the customer has requested, such as **MySite**, right click the username directory you previously created and select **Add Virtual Directory**. 

    a. Input an alias, such as the folder name (destination).
    
    b. Input the physical path.
    
    c. Click on **OK**.

5. To add the NTFS permissions within Windows for **C:\inetpub\wwwroot\MySite**, right click the FTP folder name you just created in the previous step, and select **Explore**.

    a. Right click an area within the folder and select **Properties**.
    
    b. In the properties Window, click on the **Security** tab.
    
    c. Click on the **Edit** button and click **Add** in the **Edit** window.
    
    d. Enter the name of the user you previously created, and click **OK**.
    
    e. In the **Permissions** window, ensure you leave the defaults, and check the box next to **Write** under **Allow**.
    
    f. Click **OK**.

### Test an FTP Account

Use the following steps to test the FTP account:

1. Open PowerShell&reg; and enter the following command to open FTP locally on the server:

        ftp ::1

2. Enter the username and password as requested. Note that Windows does not show anything when you enter the password.

3. Type the following command to check which folders you have access to:

        dir

4. Go into the folder you previously created, which displayed in the **dir** command.

        cd \<foldername>

5. Run the following command to verify that you have write permissions by creating a test folder:

        mkdir testfolder

6. Check to see if the **testfolder** was created:

        dir

7. Remove the **testfolder**:

        rmdir testfolder

8. To exit FTP:

        quit
