---
permalink: content-caching-for-cloud-load-balancers
audit_date: '2020-09-30'
title: Content caching for Cloud Load Balancers
type: article
created_date: '2012-05-21'
created_by: Rackspace Support
last_modified_date: '2020-09-30'
last_modified_by: Rose Morales
product: Cloud Load Balancers
product_url: cloud-load-balancers
---

Cloud Load Balancers have content caching capabilities and store
recently-accessed files for web clients to retrieve.

### Enable content caching

You can enable content caching through the [Cloud Load Balancers
API](https://docs.rackspace.com/docs/cloud-load-balancers/v1/developer-guide/)
or the [Cloud Control Panel](https://login.rackspace.com).

1. Log in to [Cloud Control Panel](https://login.rackspace.com).
2. Click on **Networking** > **Load Balancers**.
3. Select a load balancer.
4. In **Optional Features**, click the pencil icon next to **Content Caching**.

### Benefits of content caching

Content caching improves the web site's performance by temporarily storing data
that was recently accessed. The load balancer serves cached requests instead of
making another query to the webserver behind it.

This caching results in improved response times for those requests and less load on the
webserver.

### What kinds of files work well with content caching?

Content caching works well for files that don't change or rarely change.
Most images and static content are good candidates for content caching.

You don't want to cache files that change regularly or that the system
generates dynamically for different site visitors.

### Caching details

#### Is there a maximum file size that can be cached?

The maximum file size per cached item is 2 MB.

#### How long is content cached?

The system caches content for up to 10 minutes, depending on the load and amount of traffic handled by
the load balancer host.

If a cached file is requested before expiration, the load balancer retrieves a
new copy of the file earlier than usual to prevent the file from being uncached during a
period of heavy traffic.

#### Can I choose how long to cache files?

No, not at this time. You cannot purge a file from the cache manually, but it
the system automatically removes it when its cache time expires.

#### Do nodes share a cache?

No. Each node has its own cache, separate from other load-balanced nodes.

#### Does cache carry over in a failover situation?

No. If a failover occurs, the load balancer retrieves a fresh copy of a file
from the failover host.

### File types

#### What file types are supported for content caching?

The following file extensions are cached:

- \.png
- \.gif
- \.jpg
- \.jpeg
- \.ico
- \.wav
- \.mp3
- \.flv
- \.mpeg
- \.js
- \.css
- \.mp4
- \.swf

#### Can I exclude specific file types?

Yes. You can set the **Cache-Control** header to `no-cache` for requests for
the file types you don't want cached.

Set this header in Apache&reg; by adding a configuration block similar to the
following example:

**Note**: Replace **ico|flv|jpg|jpeg** with the desired extensions you want to
bypass, making sure to put a **\|** character between them.

    <FilesMatch ".(ico|flv|jpg|jpeg" alt="" title="">}}$">
        Header set Cache-Control "no-cache"
    </FilesMatch>
