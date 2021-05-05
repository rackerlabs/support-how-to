---
permalink: public-and-private-access-for-cloud-databases
audit_date: '2020-09-21'
title: Public and private access for Cloud Databases
type: article
created_date: '2012-07-24'
created_by: Rackspace Support
last_modified_date: '2020-09-21'
last_modified_by: Rose Morales
product: Cloud Databases
product_url: cloud-databases
---

Cloud Databases provides several options for connecting to your database, giving
you complete flexibility in how you access your database. For increased
security, the Rackspace private network makes your database available by
default. However, you can connect to your Cloud Database using any of the
following methods:

### Connect by using the database Hostname string (private access within the same Rackspace region)

If you have additional Rackspace cloud resources, such as Cloud Servers and
Cloud Load Balancers, you can use the database Hostname string to create a private connection
from these resources to your database. To use this connection
method, you must locate the resources in the same region. This connection method
does not incur bandwidth charges. Consider this when choosing a region for
Cloud Servers, Cloud Load Balancers, and Cloud Databases.

### Connect using an ssh tunnel (public access)

You can create a secure connection to a Cloud Server by using an [SSH
tunnel](/support/how-to/connecting-to-a-server-using-ssh-on-linux-or-mac-os). 
After you connect to your server, you can use the MySQL&reg; client, or
a similar tool, to manage your database. This method lets you connect external,
non-Rackspace resources to your Cloud Database.

### Connect using a Cloud Load Balancer (public access)

This connection method places a Cloud Load Balancer in front of your database
and provides public access to your database. If the load balancer and database
are in the same region, no bandwidth charges incur for this connection.
Any data sent outside of the data center incurs normal bandwidth charges.

Here's a visual representation of how you connect to your Cloud Database. Choose
the connection method that works best for your implementation.

{{<image src="cloud-databases-network-illustration-rev2.png" title="Accessing a Cloud Database">}}

### Related Information

[Connecting to Your Cloud
Database](/support/how-to/connect-to-a-cloud-databases-instance "Connecting to
Your Cloud Database")
