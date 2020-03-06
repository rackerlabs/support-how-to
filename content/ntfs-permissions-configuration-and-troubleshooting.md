---
permalink: ntfs-permissions-configuration-and-troubleshooting/
audit_date:
title: NTFS permissions configuration and troubleshooting
type: article
created_date: '2020-03-06'
created_by: Derek Benson
last_modified_date: 
last_modified_by: 
product: Dedicated Hosting
product_url: dedicated-hosting
---

*This article is applicable to the following Windows Server versions: 2008, 2008 R2, 2012, 2012 R2, 2016, 2019*

This article addresses how to configure and troubleshoot NTFS file and folder permissions on Windows Servers.

## NTFS permissions overview

Basic file/folder permission levels are built in that allow easy configuration. The following chart lays out built in permission levels and the access they provide:

| Permissions                      | Full Control | Modify  | Read & Execute | List Folder Contents | Read    | Write   |
| -------------------------------- | ------------ | ------- | -------------- | -------------------- | ------- | ------- |
| *Traverse Folder/Execute File*   | **Yes**      | **Yes** | **Yes**        | **Yes**              | **No**  | **No**  |
| *List Folder/ Read Data*	       | **Yes**      | **Yes** | **Yes**        | **Yes**              | **Yes** | **No**  |
| *Read Attributes*                | **Yes**      | **Yes** | **Yes**        | **Yes**              | **Yes** | **No**  |
| *Read Extended Attributes*       | **Yes**      | **Yes** | **Yes**        | **Yes**              | **Yes** | **No**  |
| *Create Files/Write Data*	       | **Yes**      | **Yes** | **No**         | **No**               | **No**  | **Yes** |
| *Create Folders/Append Data*     | **Yes**      | **Yes** | **No**         | **No**               | **No**  | **Yes** |
| *Write Attributes*	             | **Yes**      | **Yes** | **No**         | **No**               | **No**  | **Yes** |
| *Write Extended Attributes*      | **Yes**      | **Yes** | **No**         | **No**               | **No**  | **Yes** |
| *Delete Subfolders and Files*    | **Yes**      | **No**  | **No**         | **No**               | **No**  | **No**  |
| *Delete*                         | **Yes**      | **Yes** | **No**         | **No**               | **No**  | **No**  |
| *Read Permissions*	             | **Yes**      | **Yes** | **Yes**        | **Yes**              | **Yes** | **Yes** |
| *Change Permissions*	           | **Yes**      | **No**  | **No**         | **No**               | **No**  | **No**  |
| *Take Ownership*	               | **Yes**      | **No**  | **No**         | **No**               | **No**  | **No**  |
| *Synchronize*                    | **Yes**      | **Yes** | **Yes**        | **Yes**              | **Yes** | **Yes** |

## Configuring permissions for a file or folder

**Note:** When configuring permissions for a file or a folder, log into the server with a user that has at least **Full Control** permissions for the object you want to modify. The easiest way to make sure you will have appropriate permissions to make the change is to log in with a user account that has administrator privileges on the device. Administrator accounts can typically override permissions for most files and folders.

1. Navigate to the parent directory of the desired file/folder for which you wish to set permissions.
2. **Right-click** the file/folder and choose **Properties**.
3. Click the **Security** tab.
4. You should see the path and name of the file/folder at the top of the window under **Object name**. Ensure this is correct before proceeding.
5. Click the **Edit** button to proceed.
6. Look for the user for which the permissions will apply in the box labeled **Group or user names**. *If the user is listed, move to step 7. If not, follow the instructions in the next section to add the user to the list*.
    1. To add an additional user, click the **Add** button.
    2. Type in the username in the box marked **Enter the object names to select** and click the **Check Names** button. 
    3. If no user is found, ensure the correct location is listed in the field **From this location** and if necessary, click **Advanced** to search for the user manually.
    4. When the user is found, and underlined, click **Ok**.
7. Click the desired user in the **Group or user names** field.
8. Once selected, check the box under **Allow** in the **Permissions for (username)** section, and click **Ok** to save.

## Troubleshooting permissions issues

**Note:** Permissions apply to users in the most restrictive way possible. If there are permissions set in multiple places *(ex. Permissions for a user group and also specific to the user)*, the most restrictive permissions set for that user will apply to any given file or folder. Keep this in mind when troubleshooting.

1. Navigate to the parent directory of the problematic file/folder.
2. **Right-click** the file/folder and choose **Properties**.
3. Click the **Security** tab.
4. You should see the path and name of the file/folder at the top of the window under **Object name**. Ensure this is correct before proceeding.
5. Click the **Advanced** button to proceed.
6. Click the **Effective Access** tab.
7. Click the link labeled **Select a user**.
8. Type in the username in the box marked **Enter the object names to select** and click the **Check Names** button. 
9. If no user is found, ensure the correct location is listed in the field **From this location** and if necessary, click **Advanced** to search for the user manually.
10. When the user is found, and underlined, click **Ok**.
11. You will now see the user listed next to **User/Group**.
12. Click the button **View effective access**, and a list of the users permissions will be listed. The final column will indicate the policy/group limiting that permission type to show you where to make changes to solve the problem.
