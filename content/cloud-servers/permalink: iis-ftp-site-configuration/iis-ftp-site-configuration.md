---
permalink: iis-ftp-site-configuration/
audit_date:
title: 'IIS FTP Site Configuration'
type: article
created_date: '2020-05-19'
created_by: Steven Mondragon-DeVoss
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# Internet Information Services FTP Site Configuration

This article is a step by step guide on setting up an FTP site in IIS and how to add an FTP user to an existing FTP site. For assistance in installing FTP, you can follow  [Install FTP on Windows Server 2012 (R2)](https://support.rackspace.com/how-to/installing-ftp-on-windows-server-2012-r2/) 

## Verify if IIS and FTP services are installed

To check if the IIS Role has been installed, you can simply go into Server Manager and click Tools (Windows 2012 onward) or expand Roles (Windows 2008 R2). If IIS is installed, you will see this. If it is installed, then you also need to check the FTP Service has also been installed. To do this, you can use Powershell to simply check the service exists by doing a 'gsv 'FTPSVC'.

If IIS is not already installed, you can install this role via Server Manager. You will also need to install the FTP Role as part of this installation. A server restart is not required to install the required roles. 

# Setting the FTP Site

The following steps guide you on setting up the FTP site in IIS.

1. Expand the server name in IIS until you see 'Sites'. Right click on 'Sites' and select 'Add FTP Site'. Name the FTP Site as 'IsolatedFTP'. Under 'Physical path' browse to C:\inetpub\ftproot and click 'Next'.

2. Under IP Address, leave this is 'All Unassigned' and on port 21. Ensure the box is checked next to 'Start FTP site automatically', then under SSL select 'No SSL' then click 'Next'.

3. Under 'Authentication' select 'Basic'. Under 'Authorization' select 'Specified roles or user groups' and in the text box type 'FTPUsers'. The permissions for this should be set to 'Read'. Click 'Finish'.

4. Once the site has been created, we now need to setup FTP User Isolation. Ensure the IsolatedFTP site is selected in the left hand pane. You should see a number of options available in the 'IsolatedFTP' Home page. Open 'FTP User Isolation'. We now need to change the options in here. Under 'Isolate Users' select 'User name directory (disable virtual directories)' then click 'Apply' in the right hand pane.

5. We now need to configure FTP Directory Browsing. Ensure the IsolatedFTP site is selected in the left hand pane. You should see a number of options available in the 'IsolatedFTP' Home page. Open 'FTP Directory Browsing'. We now need to check the box next to 'Virtual Directories' under 'Directory Listing Options' and then click on 'Apply' in the right hand pane.

6.  Now that we have configured the site in IIS, we need to create the FTPUsers group. Go into user management either through Server Manager > Computer Management > Local Users and Groups, or via the run command 'lusrmgr.msc'. Go into 'Groups', right click a blank area and select 'New Group' from the menu. Call the group 'FTPUsers' and then click 'Create'.

7.  Go back into IIS after creating the group. We need to create the Local Groups folder. Right click 'IsolatedFTP' site, and select 'Add Virtual Directory'. Under 'Alias' type 'LocalUser'. Under physical path, point this to the directory 'C:\inetpub\ftproot' and then click 'OK'.

8. Once the above steps have been followed, we can now move onto the next step 'Step 5 - Creating an FTP Account'.

# Creating an FTP Account

1. Open up User Management on the server. Create the new user and add the user to the group 'FTPUsers'. I would advise that you also set the attribute 'Password never expires'. You must also remove the flag 'User must change password at next logon' or else they will be unable to use FTP.

2. Once the user has been created, open Internet Information Services, expand 'Sites', then expand 'IsolatedFTP'. Right click 'LocalUser' and click 'Add Virtual Directory'. Under 'Alias' enter the username of the user you created in the previous step, and set the physical path to 'C:\inetpub\ftproot' and click 'OK'.

3. Ensure the username directory you just created is highlighted in IIS, and open 'FTP Authorization Rules'. In the right hand pane click 'Add Allow Rule'. When the window opens, under 'Allow access to this content to:' select 'Specified users' and enter the username of the user you have created. Under permissions, you now need to select 'Read' and 'Write' and then click 'OK'. Now any folders you create under that user will inherit the properties of their username folder.

4. We now need to give the user the access to the directory the customer has requested. In this example, I am going to use the 'MySite' directory. Right click the username directory you have created in the previous and select 'Add Virtual Directory'. Input the alias which I would recommend you use the folder name (destination) as the alias. Input the Physical Path as per the information you have gathered from the customer, and then click on 'OK'.

5. Now that we have setup FTP for the needed folder, the final step will be to add the NTFS permissions within Windows. So in my example above, I need to set the NTFS permissions for the folder C:\inetpub\wwwroot\MySite. The easiest way to browse to the folder is to right click the FTP folder name you just created in the previous step, and select 'Explore'. This should open Windows Explorer to the directory that was setup. Right click an area within the folder and select 'Properties'. In the properties Window, click on the 'Security' tab. Click on the 'Edit' button. When the edit window opens, click 'Add'. Enter the name of the user you created earlier on in this document, and click 'OK'. This will return you to the permissions window. Ensure you leave the defaults, and check the box next to 'Write' under 'Allow'. Once complete click 'OK'.

# Step 6 - Testing an FTP Account

1. Open Powershell and enter the following command to open FTP locally on the server

        "ftp ::1"

2. Enter the username and password as requested. Note when typing in the password, it will appear that nothing is happening, however Windows does not show anything when typing in the password. This is expected behaviour.

3. Type the following command to check what folders you have access to

        "dir"

4. Go into the folder you see listed under the 'dir' command. You should see the folder you created in the previous step.

        "cd \<foldername>"

5. See if you have write permissions by creating a test folder

        "mkdir testfolder"

6. Check to see if the racktest folder has been created

        "dir"

7. Remove the racktest folder

        "rmdir testfolder"

8. To exit FTP
