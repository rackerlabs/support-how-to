---
permalink: windows-local-group-policy
audit_date: '2020-06-12'
title: 'Windows Local Group Policy'
type: article
created_date: '2020-06-10'
created_by: Karoline Mills
last_modified_date: '2020-06-12'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to access the Microsoft&reg; Windows&reg; Local Group Policy console and configure
Local Group Policy settings. While you can apply group policies at the domain level, this article covers
settings for a local standalone machine. Keep in mind that you need administrator permissions to change
Group Policy settings.

### Configure Local Group Policy settings

Use the following steps to configure Local Group Policy settings:

1.	Click the **Start** button on the lower left side of the desktop and type in **Group Policy**.
2.	Click the search result to open the **Group Policy** editor.
3.	Navigate to the desired settings, as described in the following section.
4.	To make adjustments to a policy, right-click **Properties**.

### Group Policy settings overview

The **Local Group Policy** editor provides a centralized configuration of your operating system, software,
and user settings. Local Group policies are categorized as either *Computer Configuration* (settings
that apply to the local machine) or *User Configuration* (settings that apply to current and future
local users). 

The following sections show commonly used settings.

#### Software settings

Windows does not show these settings by default. This category contains settings that are specific to
applications. 

#### Windows settings

In this category, you can find security settings for your local machine, including the following commonly
used security settings:

- **Account Policies**:

    - **Password and Account Lockout Policy**: You can make changes to password requirements such as
      enforcing password history, maximum password age, complexity, and length requirements. You can also
      adjust the account lockout duration and set the failed-login-attempt threshold that causes Windows to
      lock out a user.
      
- **Local Policies**:

    - **Audit Policy**: This security setting determines whether and how Windows audits events such as
      login attempts, policy changes, and object access.    
    - **User Rights Assignment**: Policies under this header concern various user rights, such as system
      shutdown authorization, Remote Desktop access, and authorization to change system clock and time zone.      
    - **Security Options**: You can adjust various security policies, such as forcing the user to log off
      after a certain time or authorizing a user to format and eject removable media.
    - **Windows Firewall with Advanced Settings**: You can make changes to inbound and outbound firewall
      rules and connection security rules.
    - **Public Key Policies**: You can find settings for data protection, encryption, and trusted
      certificates. Use these policies to add trusted root certificates.

### Administrative templates

Administrative templates contain a large repository of registry-based changes. You can use administrative
templates to modify the local machine and the user-account section of the registry.
Download administrative templates for Windows from the Microsoft Download Center. You can also create custom
templates for your environment. Some of the default settings in this section include the following:

- **Control Panel**

    - **Personalization**: Policies in this section include enforcing a default lock screen and desktop background.
    - **Regional and Language Options**: You can use this policy to enforce a specific language for users.
    - **User Accounts**: Configure the default account picture for user accounts.
    
- **Printers**: Adjust various printer settings, such as Internet printing and printer browsing.

- **Start Menu and Taskbar**: Define a start screen layout for users.

- **System**: Adjust multiple settings, including login policies, system restore and shutdown options,
  and filesystem settings.
