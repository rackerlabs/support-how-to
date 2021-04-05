---
permalink: cloud-files-key-concepts/
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

Cloud Files&trade; is not a *file system* in the traditional sense. You will not be able to *map* or *mount* virtual disk drives like you can with other forms of storage such as a SAN or NAS. Since Cloud Files is a different way of thinking when it comes to storage, following is a review of key concepts.

#### Accounts

The Cloud Files system is designed to be used by many different customers. Your user account is your slice of the Cloud Files system. A user must identify themselves with a valid Rackspace Cloud account username and their API Key. Once authenticated, that user has full read/write access to the Objects &mdash;files, stored under that user account.

####  Containers

A Container is a *storage compartment* for your data and provides a way for you to organize that data. You can think of a Container as a folder in Windows&reg; or a directory in UNIX&reg;. The primary difference between a container and these other *file system* concepts is that containers cannot be nested. You can, however, create up to 500,000 containers under your account.

#### Objects

An *Object* is the basic storage entity and its metadata that represents the *files* you store in Cloud Files. When you upload data to Cloud Files the data is stored as-is &mdash;no compression or encryption, and consists of a location &mdash;Container, its name, and optional metadata consisting of *key/value* pairs. For instance, you may chose to store a backup of your digital photos and add a metadata *key/value* pair of *PhotoAlbum-CaribbeanCruise*. Objects are grouped into containers and you can have any number of Objects within a ©ontainer.

####  Operations

Operations are the actions you perform against your account in Cloud Files. Creating or deleting Containers, uploading or downloading Objects, etc. You can find the full list of operations under the ReST API section of the Developer Guide. Operations are performed via the ReST web service API or a language-specific API &mdash;currently we support Python, PHP, Java, and C#/.NET.

####  Permissions

There are no permissions or access-controls around containers or objects other than being split into separate accounts. Users must authenticate with a valid API Access Key, but once authenticated they can create/delete containers and objects only within that account. At this time, there is no way to make a storage object publicly accessible.

####  CDN-enabled Containers

To publish your data so that it can be served by Akamai's Content Distribution Network &mdash;CDN, you need to *publish to CDN* the Container that houses that data. When a Container is published any files will be publicly accessible and not require an authentication token for read access. Uploading content into a CDN-enabled container is a secure operation and will require a valid authentication token. Each published container has a unique Uniform Resource Locator (URL) that can be combined with its object names and openly distributed in web pages, emails, or other applications. For example, a published Container named "photos" can be referenced as " <code>https://c0344252.cdn.cloudfiles.rackspace.com</code> ". If that Container houses an image called "cute_kids.jpg", then that image can be served by Akamai's CDN with the full URL of "<code>https://c0344252.cdn.cloudfiles.rackspace.com/cute_kids.jpg"</code>. This URL can be embedded in HTML pages, email messages, blog posts, etc. When that URL is accessed, a copy of that image is fetched from the Cloud Files storage system and cached in Akamai's CDN and served from there for all subsequent requests.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 