---
permalink: modify-group-in-active-directory-group-policy-manager/
audit_date:
title: 'Modify Policy in Windows Active Directory Group Policy Manager'
type: article
created_date: '2020-06-10'
created_by: Dave Myers
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# Active Directory Group Policy Basics

**Active Directory Domain Services**
Active Directory is a Microsoft Domain Management tool. It provides authentication functions and a framework for other such services. The directory itself uses an LDAP database containing networked objects.

**Organizational units (OUs)** 
An organizational unit provides for the grouping of authority over a subset of resources within a domain. An OU provides a security boundary on elevated privileges and authorization and does not limit the replication of AD objects.
OUs should be used to implement and limit security and roles among groups, while domains should be used to control replication.

**Objects**
Everything within Active Directory is stored as an object. The class could also be defined as the “type” of an object in the schema. Active Directory contains location information on objects stored in the database, however Active Directory uses Domain Name System (DNS) to locate domain controllers. The attributes of an object are defined by its class.

The Group Policy Manager (GPM) in Windows Server is the database to custom configured policies for assinging users and groups permissions and operating parameters granted for a particular resource or function that are setup as Operational Units (OU). 

*For more on Active Directory Groups: https://support.rackspace.com/how-to/group-policy-fundamentals-in-active-directory/*

In this example, we will update the **Password Policy** for user accounts.

To create a Group Policy, first open the Server Manager and under **Tools** select the **Local Security Policy**

In the left-hand panel, expand **Account Policy** and click **Password Policy** under **Security Settings** section.

The right-hand panel will display the different choices for setting up the password complexity requirements for creating a new password. The choices includes:
- Enforce Password History
- Maximum Password Age
- Minimum Password Age
- Minimum Password Length
- **Password must meet complexity requirements**
- Store passwords using reversible encryption

Each of these policies are configurable for different requirements. Clicking the policy will display a window with the **Settings** and **Explain** tabs. In our example, the default for the **"Password must meet complexity requirements"** is enabled. The **Explain** tab describes the setting:

This security setting determines whether passwords must meet complexity requirements.

If this policy is enabled, passwords must meet the following minimum requirements:
**Not contain the user's account name or parts of the user's full name that exceed two consecutive characters
Be at least six characters in length
Contain characters from three of the following four categories:
English uppercase characters (A through Z)
English lowercase characters (a through z)
Base 10 digits (0 through 9)
Non-alphabetic characters (for example, !, $, #, %)
Complexity requirements are enforced when passwords are changed or created.**
***Default:***
*Enabled on domain controllers.
Disabled on stand-alone servers.*
Note: By default, member computers follow the configuration of their domain controllers."
