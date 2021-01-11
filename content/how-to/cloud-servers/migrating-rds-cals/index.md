---
permalink: migrating-rds-cals/
audit_date:
title: ‘Migrating RDS CALs’
type: article
created_date: '2020-01-11’
created_by: Karoline Mills
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

### Migrating RDS CALs

This article walks you through the steps of migrating your Remote Desktop Services (RDS) Client Access Licenses (CALs) to another server. Please keep in mind that you will need administrator permissions to complete this task.

#### Confirm RDS CAL connection method

-	Log in to your new Remote Desktop License Server and navigate to *Administrative Tools* -> *Remote Desktop Licensing Manager*
-	In the left-hand panel, expand *All Servers* and right-click on the server you are currently logged in to
-	Select *Properties* and look for the *Connection method*
-	You will find one of the following three connection methods:

    o	**Automatic connection (recommended)**
To perform the migration, the RDS License Server communicates directly with the Microsoft Clearinghouse over outbound TCP port 443.

    o	**Web browser**
This method can be used if the RDS License Server does not have internet connectivity. The migration process can be completed by an administrator via a browser on a separate device.

    o	**Telephone**
This method can be used if internet access is not available or communication over the phone is preferred. The migration process can be completed over the phone by talking to a Microsoft representative.
-	You can change the connection method in the drop-down menu or proceed to the migration

#### Migrate RDS CALs

After you have identified the Remote Desktop License Server connection method in the previous step, complete the migration using the following instructions:

-	In *Remote Desktop Licensing Manager*, right-click on the server you want to migrate the RDS CALs to and select *Manage Licenses* 
(if this option is greyed out, you may still need to active the new License Server)
-	Follow the migration wizard and select *Migrate RDS CALs from another license server to this license server*
-	You will be prompted with the following two choices:

    o	**The source license server is being replaced by this license server**
	If you choose this option, you will be asked for the source server’s IP address or hostname. If the server is not available on the network, you will need to confirm the Operating System and the license server ID of the source server.
	
    o	**The source license server is no longer functioning**
If you choose this option, you will need to confirm the Operating System and the license server ID of the source server.

>Note: If the source server cannot be contacted, you need to confirm that you will remove the RDS CALs manually from the source license server after the wizard has completed.

-	After completion, you will be directed to the *Obtain Client License Key Pack* page

-	Complete the migration according to your connection method:

-	**Automatic connection method**
1.	On the *License Program Page*, select the program through which you purchased your RDS licenses
2.	Fill out the agreement number, license code or license number as provided when you bought the RDS CALs
3.	Follow the wizard and the server will automatically connect to Microsoft Clearinghouse to complete your request

-	**Web browser method**
1.	Follow the link on the *Obtain Client License Key Pack* page (this link can be used on any device that has internet connectivity)
2.	On the website, navigate to *Select Option* -> *Manage CALs*
3.	Fill in the required information, such as license program, reason for migration and your company information
4.	On the next page, provide the agreement number, license code or license number as provided when you bought the RDS CALs
5.	After you request has been processed, you will be provided with a *license key pack ID*
6.	Enter the *license key pack ID* on your new RDS license server to complete the migration

-	**Telephone method**
1.	Call the number listed on the *Obtain Client License Key Pack* page
2.	Provide the information regarding your license program to the Microsoft Representative
3.	Upon completion, the representative will give you a *license key pack ID*
4.	Enter this ID on the new RDS license server to complete the migration
