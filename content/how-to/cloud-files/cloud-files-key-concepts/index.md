---
permalink: cloud-files-key-concepts
audit_date: '2021-04-05'
title: Cloud Files Key Concepts
type: article
created_date: '2016-01-20'
created_by: Rose Contreras
last_modified_date: '2021-04-05'
last_modified_by: Carlos Arriaga
product: Cloud Files
product_url: cloud-files
---

Rackspace Technology Cloud Files is not a *file system* in the traditional sense. You cannot *map*
or *mount* virtual disk drives like you can with other forms of storage such as a SAN or NAS. Because
Cloud Files is a different way of thinking regarding storage, this article provides a review of
key concepts.

### Accounts

We designed the Cloud Files system to be used by many different customers. Your user account is your
slice of the Cloud Files system. A user must identify themselves with a valid Rackspace Cloud account
username and API Key. After they authenticate, users have full read and write access to the objects,
which are files stored under that user account.

### Containers

A container is a *storage compartment* for your data and provides a way for you to organize that data.
You can think of a container as a folder in Windows&reg; or a directory in UNIX&reg;. The primary
difference between containers and these other file system concepts is that you can't nest containers.
You can, however, create up to 500,000 containers under your account.

### Objects

An object is the combination of a basic storage entity and its metadata representing the files you
store in Cloud Files. When you upload data to Cloud Files, the data is stored as-is&mdash;no compression
or encryption. The data includes a location, name, and optional metadata consisting of key/value pairs.

For instance, you might choose to store a backup of your digital photos and add a metadata *key/value*
pair of *PhotoAlbum-CaribbeanCruise*. You can group objects into containers and have any number of
objects within a container.

### Operations

Operations are the actions you perform against your account in Cloud Files. Creating or deleting
containers, uploading or downloading objects, and so on. You can find the full list of operations
under the ReST API section of the [Developer Guide](https://docs.rackspace.com/docs/cloud-files/v1/getting-started).
You can perform operations by using the ReST web service API or a language-specific API, such as a software
development kit (SDK).

### Permissions

There are no permissions or access controls around containers or objects other than splitting them into separate
accounts. Users must authenticate with a valid API Access Key, and after they authenticate, they can create or
delete containers and objects only within that account. They can't make a storage object publicly accessible.

### CDN-enabled Containers

To publish your data so that the Akamai&reg; Content Distribution Network (CDN) can serve it, you need the container
that houses that data to publish to CDN. After you publish a container, all files are publicly accessible and do not
require an authentication token for read access. However, uploading content into a CDN-enabled container is a secure
operation and requires a valid authentication token. Each published container has a unique Uniform Resource Locator (URL),
which you can combine with its object names and openly distribute in web pages, emails, or other applications.

For example, you can reference a published Container named **photo** as <code>https://c0344252.cdn.cloudfiles.rackspace.com</code>.
If that container houses an image called **cute_kids.jpg**, then that image can be served by Akamai's CDN with the
full URL: <code>https://c0344252.cdn.cloudfiles.rackspace.com/cute_kids.jpg</code>. You can embed this URL in
HTML pages, email messages, blog posts, and so on. When something accesses the URL, the system fetches a copy of that image
from the Cloud Files storage system, caches it in the Akamai CDN, and serves it from there for all subsequent requests.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact). 
