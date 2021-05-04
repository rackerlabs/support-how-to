---
permalink: add-and-remove-roles-and-features-on-windows-server
audit_date: '2020-03-10'
title: 'Add and remove roles and features on Windows Server'
type: article
created_date: '2020-03-10'
created_by: Derek Benson
last_modified_date: '2020-03-12'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

*This article applies to the following Microsoft&reg; Windows&reg; Server versions: 2012, 2012 R2, 2016, 2019*

This article shows how to install and remove Windows Server roles and features by using Server Manager.

### Add Windows roles and features

Use the following steps to add  Windows roles and features:

1. To open Server Manager, click the **Server Manager** icon in the taskbar or select
   **Server Manager** in the **Start Menu**.

2. Click **Manage** in the upper right portion of the screen and click **Add Roles and Features** to 
   open a wizard.

**Note:** You cannot add roles and features until Server Manager finishes loading. Wait until
Server Manager loads before you add roles and features.

3. On the **Before you begin** page, click **Next** to begin. You can skip this page in the future by
   checking **Skip this page by default** box.

4. On the **Select installation type** page, choose **Role-based or feature-based installation** and
   click **Next**.

5. On the **Server Selection** page, choose the server to which you want to add the role or feature.
   In most cases, this choice is the server you are logged in to. Click **Next**.

6. Select all desired roles on the **Server Roles** page. When you add roles, the wizard prompts you to add
   prerequisite roles and features, if any. After you have selected the desired roles, click **Next**.

7. Select all desired features on the **Features** page and click **Next**.

8. Complete the configuration of the selected roles and features and click **Next** on each screen.

9. After you complete the initial configuration of the chosen features, the **Confirmation** page displays
   and lists a summary of the changes. Verify the changes before proceeding. If you want the server to
   restart automatically after installation completes, check the box labeled 
   **Restart the destination server automatically if required**.

10. Click **Install** to add the chosen roles and features.

### Removing Windows roles and features

1. To open Server Manager, click the **Server Manager** icon in the taskbar or select
   **Server Manager** in the **Start Menu**.

2. Click on **Manager** in the upper right portion of the screen and click **Remove Roles and Features**
   to open a wizard.

**Note:** You cannot add roles and features until Server Manager finishes loading. Wait until
Server Manager loads before you add roles and features.

3. On the **Before you begin** page, click **Next** to begin. You can skip this page in the future by
   checking **Skip this page by default** box.

4. On the **Select Destination Server** page, choose the server from which you want to remove the role or
   feature. In most cases, this is the server you are logged in to. Click **Next**.

5. Select roles for removal on the **Server Roles** page. When you remove roles, the wizard prompts you to
   remove any roles and features that depend on the role you selected for removal. After you have selected
   the desired roles, click **Next**.

6. Select any features for removal on the **Features** page and click **Next**.

7. On the **Confirmation** page, verify the changes before proceeding. If you want the server to
   restart automatically after installation completes, check the box labeled 
   **Restart the destination server automatically if required**.
   
8. Click **Remove** to remove the chosen roles and features.
