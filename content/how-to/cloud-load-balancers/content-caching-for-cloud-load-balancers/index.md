---
permalink: content-caching-for-cloud-load-balancers/
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

Cloud Load Balancers has a Content Caching capabilities and stores
recently-accessed files for web clients to retrieve.

### Enable content caching

You can enable content caching through the [Cloud Load Balancers
API](https://docs.rackspace.com/docs/cloud-load-balancers/v1/developer-guide/)
or the [Cloud Control Panel](https://login.rackspace.com).

1. Log in to [Cloud Control Panel](https://login.rackspace.com).
2. Click on **Networking** > **Load Balancers**.
3. Select desired load balancer.
4. On **Optional Features** click the pencil icon next to **Content Caching**.

### Benefits of content caching

Content caching improves the website's performance by temporarily storing data
that was recently accessed. While cached, requests will be served by the load
balancer instead of making another query to the web server behind it.

The result is improved response times for those requests and less load on the
web server.

### What kind of files work well with content caching?

Content caching works well for files that don't change or rarely change.
Most images and static content are good candidates for content caching.

You don't want to cache files that would change regularly or would be
dynamically generated for different site visitors.

### Caching details

#### Is there a maximum file size that can be cached?

The maximum file size per cached item is 2 MB.

#### How long is content cached?

Up to 10 minutes, depending on the load and amount of traffic being handled by
the load balancer host.

If a cached file is requested before expiration the load balancer retrieves a
new copy of the file early to prevent the file from being uncached during a
period of heavy traffic.

#### Can I choose how long files will be cached?

No, not at this time. You cannot purge a file from the cache manually, but it
will be automatically removed when its cache time expires.

#### Do nodes share a cache?

No. Each node has its own cache, separate from other load-balanced nodes.

#### Does cache carry over in a failover situation?

No. If a failover occurs the load balancer will retrieve a fresh copy of a file
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

Yes. The **Cache-Control** header may be set to **no-cache** for requests for
the file types you don't want cached.

You can set this header in apache by adding a config block similar to the
following.

**Note**: Replace **ico|flv|jpg|jpeg** with the desired extensions you want to
bypass, making sure to put a **\|** character between them.

    <FilesMatch ".(ico|flv|jpg|jpeg" alt="" title="">}}$">
        Header set Cache-Control "no-cache"
    </FilesMatch>
