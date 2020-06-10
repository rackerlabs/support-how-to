---
permalink: windows-local-group-policy/
audit_date:
title: ‘Windows Local Group Policy’
type: article
created_date: '2020-06-10'
created_by: Karoline Mills
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

## Windows Local Group Policy

This article walks you through the steps of accessing the Local Group Policy console and configuring Local Group Policy settings. While group policies can also be applied at the domain level, this article covers settings for a local standalone machine. Keep in mind that you need administrator permissions to change group policy settings.

#### Configuring Local Group Policy Settings

1.	Click on the Start button on the lower left side of the desktop and type in *Group Policy*
2.	Click on the search result to open the Group Policy editor
3.	Navigate to the desired settings as described below
4.	To make adjustments to a policy, right-click and select *Properties* 

#### Group Policy Settings Overview

The Local Group Policy editor allows for centralized configuration of your operating system, software, and users settings. Local Group policies are categorized as either **Computer Configuration** (settings that apply to the local machine) or **User Configuration** (settings that apply to current and future local users). Here is a brief overview of commonly used settings:

##### Software Settings

You will not see any settings here by default. This category contains settings that are specific to applications. 

##### Windows Settings

In this category, you can find Security Settings for your local machine. Some of the commonly used Security Settings include:
-	**Account Policies**
    - **Password and Account Lockout Policy**: You can make changes to password requirements such as enforcing password history, maximum password age, complexity and length requirements. You can also adjust account lockout duration and after how many failed logon attempts a user is locked out.
-	**Local Policies**
    - **Audit Policy**: This security setting determines whether and how Windows audits events such as logon attempts, policy changes and object access.
    - **User Rights Assignment**: Policies under this header are associated with various user rights, such as system shutdown authorization, Remote Desktop access and authorization to change system clock and time zone.
    - **Security Options**: You can adjust various security policies here, for example, force user log off after a certain time and authorization to format and eject removable media.
    - **Windows Firewall with Advanced Settings**: You can make changes to inbound and outbound firewall rules and connection security rules.
    - **Public Key Policies**: You find settings for data protection and encryption as well as trusted certificates here. This can be used to add trusted root certificates.

##### Administrative Templates

Here you can find  a large repository of registry-based changes. You can use Administrative Templates to make modifications to the local machine and the user account section of the registry. Administrative Templates for Windows can be downloaded from Microsoft's Download Center. You can also create custom templates for your environment. Some of the default settings in this section include:

- **Control Panel**
    - **Personalization**: Policies in this section include enforcing a default lock screen and desktop background.
    - **Regional and Language Options**: You can use this policy to enforce a specific language for users.
    - **User Accounts**: The default account picture for user accounts can be configured here.
- **Printers**: You can adjust various printer settings, such as internet printing and printer browsing here.
- **Start Menu and Taskbar**: You can define a start screen layout for users here.
- **System**: Multiple settings can be adjusted here, including logon policies, system restore and shutdown options and filesystem settings.
