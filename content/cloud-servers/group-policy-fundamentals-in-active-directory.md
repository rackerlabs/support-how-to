---
permalink: group-policy-fundamentals-in-active-directory/
audit_date:
title: 'Group Policy Fundamentals in Active Directory'
type: article
created_date: '2020-05-12'
created_by: Dave Myers
last_modified_date: 
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# Active Directory Group Policy:

**Group Policy allows for centralize management of computers settings and networks without having to physically go to and configure each computer individually. Below are examples of some things that can be configured as a Group Policy.**

***Active Directory Domain Services:*** Active Directory is a Microsoft Domain Management tool. It provides authentication functions and a framework for other such services. The directory itself uses an LDAP database containing networked objects.

***Active Directory Certificate Services:*** Certificate Services is a Microsoft tool for managing digital certifications and supports public key infrastructure (PKI). This service can store, validate, create and revoke public key credentials, rather than generating keys externally or locally.

***Active Directory Federation Services:*** It provides a web-based, single sign-on authentication for use across multiple organizations. It allows for a contractor to log on to his own network and be authorized for his/her access on the client’s network as well in a centralized system.

***Active Directory Lightweight Directory Services:*** Lightweight Directory Services removes some complexity and advanced functionality to offer just the basic directory service functionality, without the use of domain controllers, forests or domains for scaled down environments.

***Active Directory Rights Management Services:*** This is a rights management service that breaks down authorization beyond a user's permissions. The rights and restrictions are attached to the document rather than the user. These rights are commonly used to prevent printing, copying or taking a screenshot of a document.

## Active Directory Structure

***Forest:*** The forest is the highest level of the organization hierarchy. A forest allows for delegation of authority to be segregated within a single environment. This provides an administrator with full-access and permissions, but only to a specific set of resources. Forest information is stored on all domain controllers, in all domains, within the forest.

***Tree:*** A tree is a group of domains. The domains within a tree share the same root name space. While a tree shares a name space, trees are not limits on security or replication.*

***Domains:*** Each forest contains a root domain. Additional domains can be used to create further partitions within a forest. The purpose of a domain is to break the directory into smaller pieces to control replication. A domain limits Active Directory replication to only the other domain controllers within the same domain.

Each domain controller in a domain has an identical copy of that domain’s Active Directory database. This is kept up to date via replication.

***Organizational Units (OUs):*** An organizational unit provides for the grouping of authority over a subset of resources within a domain. An OU provides a security boundary on elevated privileges and authorization and does not limit the replication of AD objects.

OUs should be used to implement and limit security and roles among groups, while domains should be used to control replication.

***Domain Controllers:*** Domain controllers are Windows Servers, which contain the Active Directory database and perform Active Directory related functions, including authentication and authorization.

Each domain controller stores a copy of the AD database containing information for objects within the same domain. In addition, each domain controller stores the schema for the entire forest, as well as all information about the forest.

A domain controller does not store a copy of any schema or forest information from a different forest even if they are on the same network.

***Specialized domain controller roles:*** Specialized domain controller roles are used to perform specific functions that are not normally available on standard domain controllers. These master roles are assigned to the first domain controller created in each forest or domain, however may manually reassign the roles.

***Schema Master:*** Only one schema master exists per forest. It contains the master copy of the schema used by all other domain controllers. A master copy ensures that all objects are defined the same.

***Domain Name Master:*** Only one domain name master exists per forest. The domain master ensures that all objects names are unique and may cross-reference objects stored in other directories.

***Infrastructure Master:*** There is one infrastructure master per domain. The infrastructure master keeps the list of deleted objects and tracks references for objects on other domains.

***Relative Identifier Master:*** There is one relative identifier master per domain. It tracks creation and assignment of unique Security Identifiers (SIDs) across the entire domain.

***Primary Domain Controller Emulator:*** There is only one Primary Domain Controller (PDC) Emulator per domain provding backward compatibility from the older Windows NT-based domain systems.

***Data Store:*** Storage and retrieval of data on any domain controller is handled by the data store. The data store is composed of three layers, the database itself and service components (the Directory System Agent (DSA) and the Extensible Storage Engine (ESE), the directory store services, LDAP (Lightweight Directory Access Protocol), the replication interface, the Messaging API (MAPI), and the Security Accounts Manager (SAM)).

# Domain Name System

Active Directory contains location information on objects stored in the database, however Active Directory uses Domain Name System (DNS) to locate domain controllers.

Within active directory, every domain has a DNS domain name and every joined computer has a DNS name within that same domain.

***Objects***

Everything within Active Directory is stored as an object. The class could also be defined as the “type” of an object in the schema. Active Directory contains location information on objects stored in the database, however Active Directory uses Domain Name System (DNS) to locate domain controllers. The attributes of an object are defined by its class.

Objects must be defined within the schema before data can be stored in the directory. Once defined, data is stored within active directory as individual objects. Every object must be unique and represent a single thing, such as a user, computer, or a unique group of things (e.g. user group).

The two primary types of objects are resources and security principals. Security principals are assigned Security Identifiers (SIDs), but resources are not.

# Replication

Active Directory uses multiple domain controllers for many reasons including load balancing and fault tolerance. For this to work, each domain controller must have a complete copy of its domain’s own Active Directory database. Ensuring that each controller has a current copy of the database occurs through replication.

Replication is limited by the domain. Domain controllers on different domains do not replicate between one another, even within the same forest. Every domain controller is equal. Although previous versions of Windows had Primary and Secondary domain controllers, there is no such thing in Active Directory. There is occasionally some confusion due to the continuation of the name ‘domain controller’ from the old trust-based system to Active Directory.

Replication works on a pull system, meaning that a domain controller requests or “pulls” the information from other domain controller rather than each domain controller sending or “pushing” data to others. By default, domain controllers request replication data every 15 seconds. Certain high-security events trigger an immediate replication event, such as an account lockout.

Only changes are replicated. To ensure fidelity across a multi-master system, each domain controller keeps track of changes and requests only the updates since the last replication. Changes are replicated throughout the domain using a store-and-forward mechanism such that any change is replicated when requested, even if the change did not originate on the domain controller answering the replication request.

This prevents excess traffic and can be configured to ensure that each domain controller requests its replication data from the most desirable server. For example, a remote location with one fast connection and one slow connection to other sites with domain controllers can set a “cost” on each connection. In doing so, the replication request will be made across the faster connection.

***Key to Active Directory structure is delegated authorization and efficient replication.***
