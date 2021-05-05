---
permalink: modify-the-password-policy-in-the-active-directory-group-policy-manager
audit_date: '2020-06-15'
title: 'Modify the password policy in the Windows Active Directory Group Policy Manager'
type: article
created_date: '2020-06-10'
created_by: Dave Myers
last_modified_date: '2020-06-15'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

### Active Directory Group Policy basics

The following sections describe some Microsoft&reg; Windows&reg; Active Directory&reg; concepts.

#### Active Directory Domain Services

Active Directory is a Microsoft domain management tool. It provides authentication functions and a
framework for other such services. The directory itself uses an LDAP database containing networked
objects.

#### Organizational units

An organizational unit (OU) enables you to group resources within a domain into subsets for security
and authorization purposes. An OU provides a security boundary on elevated privileges and authorization
and does not limit the replication of Active Directory objects. You should not use OUs to implement and
limit security and roles among groups, but you can use domains to control replication.

#### Objects

Everything within Active Directory is stored as an object. You can also define the class as the *type*
of an object in the schema. Active Directory contains location information on objects stored in the
database, but Active Directory uses the Domain Name System (DNS) to locate domain controllers. Its class
defines the attributes of an object.

#### Group Policy Manager

The Group Policy Manager (GPM) in Windows Server&reg; is a database of custom configured policies that
are setup as OUs. Use the GPM to assign users and group permissions and operating parameters that you 
grant for a particular resource or function. 

For more on Active Directory Groups, see
(Group Policy fundamentals in Active Directory)[/support/how-to/group-policy-fundamentals-in-active-directory/)

###  Update the password policy for user accounts

1. To create a password Group Policy, open the **Server Manager** and, under **Tools**, select the
   **Local Security Policy**.

2. In the left-hand panel, expand **Account Policy** and click **Password Policy** under the **Security Settings** section.

3. The right-hand panel displays the different choices for setting up the password complexity requirements
   for creating a new password. The choices include:

     - **Enforce Password History**
     
     - **Maximum Password Age**
     
     - **Minimum Password Age**

     - **Minimum Password Length**

     - **Password must meet complexity requirements**

     - **Store passwords by using reversible encryption**

   You can configure each of these policies for different requirements. Click the policy to display
   a window with the **Settings** and **Explain** tabs. 

### Password complexity policy

If the password complexity policy is enabled, passwords must meet the following minimum requirements:

- Don't contain the user's account name or parts of the user's full name that exceed two consecutive characters.

- Be at least six characters in length.

- Contain characters from three of the following four categories:
     
     - English uppercase characters (A through Z)
     
     - English lowercase characters (a through z)
     
     - Base 10 digits (0 through 9)
     
     - Non-alphabetic characters (for example, !, $, #, %)

When you change or create passwords, the complexity requirements are enforced.

By default, the password complexity policy is enabled on domain controllers and disabled on stand-alone servers.

**Note:** Member computers follow the configuration of their domain controllers by default.
