---
permalink: using-cdn-edge-purge
audit_date: '2021-04-06'
title: Using CDN Edge Purge
type: article
created_date: '2011-11-10'
created_by: Rackspace Support
last_modified_date: '2021-04-06'
last_modified_by: Carlos Arriaga
product: Cloud Files
product_url: cloud-files
---

### What is Edge Purge&reg;?

When using the Content Delivery Network (CDN) with Cloud Files, your
files allocate across a global network of *edge servers*,
increasing the speed at which your audience can download files
from your site.

The CDN accomplishes this by automatically caching
your files to an edge server after first-time requests from a
given geographic region. Those files remain cached on the edge
server until such a time as the *Time To Live (TTL)* setting for an
individual file expires or until the node receives an edge purge request.

Caching content can cause problems. If your content is frequently updated
or modified, your audience might download older files cached on
the edge server. The edge purge function clears the cache of a given edge
server and caches a newer version of a file after the first
time a request comes in from a given geographic area.

Customers are allowed up to 25 object purges a day per account.
If you need to purge an entire container, contact our support team for
assistance.

Purging content from edge servers is a great feature to have for CDN,
especially when you're really in a pickle. However, an edge purge isn't
your only option for controlling your content on the edge. Let's review
some best practices for when to use an edge purge to control your content.

### Workflow

In general, if you have purge as a part of your basic workflow, you
probably have better options&mdash;see below. Use a purge as a
one-off method for controlling content, rather than a final step to
uploading new content.

### Updating user content

Suppose you are sending purges every time your site visitors update their
profile, pictures, or other information. In that case, you might be happier
using a time-to-live (TTL) setting to control when your content expires and
is removed from the edge servers' cache. The average purge request takes
about 20 minutes to process. However, it could take hours, depending on activity
levels. You can set the TTL as low as 15 minutes. Give it a try and see if
your site visitors experience better performance.

### Removing content

Possibly you have files hosted on the CDN with a long TTL
because you did not expect the content to be updated frequently. If
you need to remove those files from the edge node cache immediately,
this is a great time to use the edge purge feature. Also, if the TTL of your
file is nowhere near expiration but has some outdated or sensitive content
you should immediately, then purge is the right tool.

### Releasing a new version of your product

Sometimes developers want to wipe out their edge content to
start fresh with updated content after a new release comes out.
However, in that type of situation, you might
have to issue many purge requests to refresh all the data.
All purge requests are put into one centralized queue, meaning you
might be creating an unnecessarily high queue and slowing down the
purging process. Consider versioning your files instead
of using identical file names for all your releases. This means you can
instantly tell your website or application to request the new file, and
the old one gets retired to Cloud Files. This also gives you the
flexibility to launch on schedule, rather than waiting for purges
to propagate updated content.

### Not sure if purge is the right way for you to control your CDN content?

As a rule of thumb, try other plans first. If you can solve your needs
by using a low TTL or versioning your objects, these are great first
options. Of course, edge purge is always available as a last resort.
Still not sure?  Contact Rackspace Support with any questions.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact). 
