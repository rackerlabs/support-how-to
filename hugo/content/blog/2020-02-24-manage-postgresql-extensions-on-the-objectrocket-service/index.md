---
layout: post
title: "Manage PostgreSQL extensions on the ObjectRocket service"
date: 2020-02-24
comments: true
author: Steve Croce
published: true
authorIsRacker: true
authorAvatar: 'https://gravatar.com/avatar/56d03e2d0f853cff39c129cab3761d49'
bio: "As Senior Product Manager for the ObjectRocket Database-as-a-Service
offering and Head of User Experience for ObjectRocket, Steve oversees the
day-to-day planning, development, and optimization of ObjectRocket-supported
database technologies, clouds, and features. A product manager by day, he still
likes to embrace his engineer roots by night and develop with Elasticsearch,
SQL, Kubernetes, and web application stacks. He's spoken at
KubeCon + CloudNativeCon, OpenStack summit, Percona Live, and various Rackspace
events."
categories:
    - Database
canonical: https://www.objectrocket.com/blog/postgresql/managing-postgresql-extensions-on-the-objectrocket-service/
metaTitle: "Manage PostgreSQL extensions on the ObjectRocket service"
metaDescription: "The PostgreSQL (Postgres) extensions ecosystem is extremely robust and provides a wide array of additional capabilities to Postgres."
ogTitle: "Manage PostgreSQL extensions on the ObjectRocket service"
ogDescription: "The PostgreSQL (Postgres) extensions ecosystem is extremely robust and provides a wide array of additional capabilities to Postgres."
---

*Originally published February 13, 2020 at ObjectRocket.com/blog.*

The PostgreSQL&reg; (Postgres&reg;) extensions ecosystem is extremely robust and provides
a wide array of additional capabilities to Postgres.

<!--more-->

![]({% asset_path 2020-02-24-manage-postgresql-extensions-on-the-objectrocket-service/Picture1.png %})

We want to provide you with all of the tools you need to operate production
databases on the ObjectRocket platform, so we’ve recently added the ability to
use extensions. The extensions act as plug-ins and provide extra functionality
and features.

### View the available extensions

We include several extensions for our Postgres instances, and we’ve covered the
most common and requested plug-ins available. To see the list of our supported
plug-ins, connect to an instance running on our service and use the following
queries:

- ``SELECT * FROM pg_available_extensions;``: Shows a super list of all of the
  extensions in the **postgres** extensions directory.

- ``SHOW extwlist.extensions;``: Shows the allowed extensions on our service.

Because Postgres packages include some extensions by default to which we
provide no user access, the two lists differ slightly. If you need an
extension that’s not in the whitelist or not available at all, you can work
with our Support team to get it added to our platform.

Because we regularly add extensions, running the query always provides the most
up-to-date list. Following is the current list of both the available and allowed
extensions on the ObjectRocket service:

![]({% asset_path 2020-02-24-manage-postgresql-extensions-on-the-objectrocket-service/Picture2.png %})

![]({% asset_path 2020-02-24-manage-postgresql-extensions-on-the-objectrocket-service/Picture3.png %})

### Loading extensions

Loading extensions on the service works the same it usually does in Postgres.
You issue the ``CREATE EXTENSION`` command in the database to which you want to
add the functionality.

Here's a straightforward example. The
**[uuid-ossp](https://www.postgresql.org/docs/current/uuid-ossp.html)**
extension provides utilities to manage UUIDs. The following example graphic
shows an attempt to use the ``uuid_generate_v1()`` function:

<a href="https://gyazo.com/19fc91c4582462e9296ada60b4a546fb"><img src="https://i.gyazo.com/19fc91c4582462e9296ada60b4a546fb.gif" alt="Image from Gyazo" width="908" /></a>

As you can see, the function fails initially because we had not yet loaded
the extension. However, after loading the **uuid-ossp** extension and retrying
the same function, we see that it now returns a UUID for us.

Again, this is a very simple example. Extensions can do much more,
but you can see the basic mechanics.

Be aware that extensions are only active or usable in the databases into which
you load them. In other words, every time you create a new database, you need
to run ``CREATE EXTENSION`` in that database. If you’d like an extension to be
available in new databases automatically, you need to either create a new database
template and use that when creating new databases, or update the **template1**
database to include that extension. By default, all new databases are a copy
**template1**.

Enjoy the new extensions, and let us know if you'd like us to add specific
functionality.

<a class="cta purple" id="cta" href="https://www.rackspace.com/data/dba-services">Learn more about Rackspace DBA Services</a>

Visit [www.rackspace.com](https://www.rackspace.com) and click **Sales Chat**
to get started.

Use the Feedback tab to make any comments or ask questions.
