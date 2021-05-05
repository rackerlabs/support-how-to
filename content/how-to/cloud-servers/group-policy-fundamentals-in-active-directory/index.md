---
permalink: group-policy-fundamentals-in-active-directory
audit_date: '2020-05-13'
title: 'Group Policy fundamentals in Active Directory'
type: article
created_date: '2020-05-12'
created_by: Dave Myers
last_modified_date: '2020-05-13'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article discusses the Microsoft&reg; Active Directory&reg; (AD) Group Policy feature.

### AD Group Policy

Group Policy provides centralized management of computer settings and networks so that you don't
need to select and configure each computer individually. You can configure the following AD
services as a Group Policy:

- **Domain Services:** Domain Services enables you to manage your AD domains. They provide
authentication functions and a framework for other such services. AD uses a Lightweight
Directory Access Protocol (LDAP) database containing networked objects.

- **Certificate Services:** Certificate Services is a Microsoft tool for managing digital certifications,
and it supports public key infrastructure (PKI). Certificate Services can store, validate,
create, and revoke public key credentials, rather than generating keys externally or locally.

- **Federation Services:** Federation Services provides a web-based, single sign-on
authentication for use across multiple organizations. It enables contractors both to log on to their own
network and be authorized to access resources on the client’s network in a centralized system.

- **Lightweight Directory Services:** Lightweight Directory Services removes some complexity and advanced
functionality to offer just the basic directory service functionality. Lightweight Directory Services doesn't need to use
domain controllers, forests, or domains for scaled-down environments.

- **Rights Management Services:** Rights Management Services breaks down authorization beyond a user's
permissions. The rights and restrictions are attached to the document rather than the user. AD commonly
uses these rights to prevent printing, copying, or taking a screenshot of a document.

### AD structure

AD contains the following components:

- **Forest:** The forest is the highest level of the organization hierarchy. The forest enables you to
  segregate delegation authority within a single environment. This segregation gives an administrator
  full access and permissions to only a specific set of resources. AD stores forest information
  on all domain controllers, in all domains, within the forest.

- **Tree:** A tree is a group of domains. The domains within a tree share the same root namespace. While
  a tree shares a namespace, trees are not limits on security or replication.

- **Domains:** Each forest contains a root domain. You can use additional domains to create further partitions
  within a forest. Domains break the directory into smaller pieces to control replication. A domain limits
  AD replication to only the other domain controllers within the same domain.

  Each domain controller in a domain has an identical copy of that domain’s AD database. Replication keeps
  the copies up to date.

- **Organizational units (OUs):** An organizational unit provides for the grouping of authority over a subset
  of resources within a domain. An OU provides a security boundary on elevated privileges and authorization and
  does not limit the replication of AD objects.

  Use OUs to implement and limit security and roles among groups, and use domains to control replication.

- **Domain controllers:** Domain controllers are Windows&reg; servers that contain the AD database and perform
  AD-related functions, including authentication and authorization.

  Each domain controller stores a copy of the AD database containing information for objects within the same
  domain. In addition, each domain controller stores the schema for the entire forest, as well as all information
  about the forest.

  A domain controller does not store a copy of any schema or forest information from a different forest, even
  if they are on the same network.

- **Specialized domain controller roles:** Use specialized domain controller roles to perform specific functions
  that are not normally available on standard domain controllers. AD assigns these master roles to the first
  domain controller created in each forest or domain, but you can reassign the roles manually.

- **Schema master:** Only one schema master exists per forest. It contains the master copy of the schema used
   by all other domain controllers. A master copy ensures that all objects are defined the same.

- **Domain name master:** Only one domain name master exists per forest. The domain master ensures that all
  objects' names are unique and might cross-reference objects stored in other directories.

- **Infrastructure master:** There is one infrastructure master per domain. The infrastructure master keeps
  the list of deleted objects and tracks references for objects on other domains.

- **Relative identifier master:** There is one relative identifier master per domain. It tracks the creation
  and assignment of unique Security Identifiers (SIDs) across the entire domain.

- **Primary Domain Controller Emulator:** There is only one Primary Domain Controller (PDC) Emulator per domain.
  It provides backward compatibility from the older Windows NT-based domain systems.

- **Data store:** The data store handles the storage and retrieval of data on any domain controller. The data
  store has three layers:
      - the database and service components (the Directory System Agent (DSA) and the Extensible Storage Engine (ESE))
      - the directory store services (LDAP) 
      - the replication interface, the Messaging API (MAPI), and the Security Accounts Manager (SAM)

### Domain Name System

AD contains location information on objects stored in the database. However, AD uses the Domain Name System (DNS)
to locate domain controllers.

Within AD, every domain has a DNS domain name, and every joined computer has a DNS name within that same domain.

### Objects

AD stores everything as an object and contains location information on objects stored in the database.
However, AD uses Domain Name System (DNS) to locate domain controllers. An object's class defines the object's
attributes.

The schema must contain the object definition before you can store data in the directory. Once defined, AD stores
the data as individual objects. Every object must be unique and represent a single thing, such as a user, computer,
or a unique group of elements (for example, a user group).

Objects have the following primary types of objects:

- Security principals, which have SIDs

- Resources, which do not have SIDs

### Replication

AD uses multiple domain controllers for many reasons, including load balancing and fault tolerance. For this
to work, each domain controller must have a complete copy of its domain’s own AD database. Replication ensures
that each controller has a current copy of the database.

The domain limits replication. Domain controllers on different domains do not replicate between one another,
even within the same forest. Every domain controller is equal. Although previous versions of Windows had Primary
and Secondary domain controllers, AD has none such thing. The confusion stems from the continuation of the name 
*domain controller* from the old trust-based system to AD.

Replication works on a pull system. This means that a domain controller requests or pulls the information
from another domain controller rather than each domain controller sending or pushing data to others. By default,
domain controllers request replication data every 15 seconds. Certain high-security events trigger an immediate
replication event, such as an account lockout.

Only changes are replicated. To ensure fidelity across a multi-master system, each domain controller keeps track
of changes and requests only the updates since the last replication. Changes are replicated throughout the domain
by using a store-and-forward mechanism so that any change is replicated when requested, even if the change did not
originate on the domain controller answering the replication request.

This process prevents excess traffic, and you can configure AD to ensure that each domain controller requests
its replication data from the most desirable server. For example, a remote location with one fast connection and
one slow connection to other sites with domain controllers can set a cost on each connection. In doing so, AD
makes the replication request across the faster connection.

Delegated authorization and efficient replication are the keys to the AD structure.
