---
permalink: use-cloud-databases-with-your-cloud-site/
node_id: 1869
title: Use Cloud Databases with your Cloud Site
type: article
created_date: '2012-08-01'
created_by: Chris Farmer
last_modified_date: '2016-05-17'
last_modified_by: Kyle Laffoon
product: Cloud Sites
product_url: cloud-sites
---

Cloud Databases is part of the Cloud Control Panel. One of the
advantages of Cloud Databases is that it makes it easier to provision
your MySQL instance, add databases, and effectively manage your users.
This also includes the security and performance benefits of having your
own dedicated database instance. Another big plus is how easy it is to
connect to your Cloud Database from Cloud Sites.

### Creating A Cloud Database

1. Log in to the [Cloud Control Panel](https://mycloud.rackspace.com) 
and select **Databases > MySQL** at the top.
   
   <img src="{% asset_path cloud-sites/using-cloud-databases-with-your-cloud-site/select-databases-mysql.png%}" alt="" />

2. Select the **Create Single Instance** option. 
    
3. On the The **Create Instance** screen, complete the fields with
your desired specifications to create your Database and then select
**Create Single Instance** when finished.

   **Note**: We recommend creating your Database in the same region as your
   Cloud Site. You can find out the location of your Cloud Site by looking
   for **ORD** or **DFW** in the testing link for your Cloud Site.

4. When your status changes green, indicating it's active, select your instance to display all
information relating to that particular Instance.

### Work with your MySQL instance

There are a different ways to work with and manage your
MySQL instance. If you happen to have a Cloud Server in the same region
as your Cloud Database, you can connect to it using an SSH session on a
Linux box, installing your favorite database management software, or by
installing a phpMyAdmin on your Cloud Site and use that to connect and
manage your database instance. The steps below will focus on using a
database management interface on your local machine (MySQL Workbench).

1. In order to access your instance from your local workstation, you must
create a Load Balancer. This will allow you to have a public IP address
against your instance. Log in to the [Cloud Control Panel](https://mycloud.rackspace.com) and select **Networking > Load
Balancers** at the top.

  <img src="{% asset_path cloud-sites/using-cloud-databases-with-your-cloud-site/13.png %}" alt="" />

2. Select **Create A Load Balancer** and fill out the fields with
the desired specifications. In the **Nodes**
section, select **Add External Node** and in the **IP or
Hostname** field, enter the Hostname of the Cloud Database Instance
just created. Then select **Create Load Balancer**.

    **Note:** You can copy the hostname of your Instance by selecting the
Instance name in the Databases section.

3. Once your Load Balancer is created (Active), select the Load Balancer
and you may then grab the public IP address to create a new connection.
Plug the IP address into the Hostname field in MySQL Workbench, your
database credentials, and also the standard port (**3306**) in the port
field.

  <img src="{% asset_path cloud-sites/using-cloud-databases-with-your-cloud-site/14.png %}" alt="" />

4. Select **OK** to connect your MySQL workbench and then import
your database, edit user permissions, etc.

### Use your MySQL instance on your Cloud Site

In this last section, Wordpress is used as an example;
however, the same concept applies to any CMS or application on your
website. All you need to do is plug in your database name, user name,
and your database host (this will be your MySQL instance hostname, not
your load balancer IP address, you do not need a load balancer to
connect to your database from your website) and you're good to go!

<img src="{% asset_path cloud-sites/using-cloud-databases-with-your-cloud-site/8.png %}" alt="" />

There you have it! You've created a MySQL instance and database using
Cloud Databases, a Load Balancer to connect and manage your database,
and have connected that dedicated database to your Cloud Sites
application.

**Note:** Cloud Sites will continue to offer the current shared MySQL
databases for you to consume, so you are not required to use Cloud
Databases. However, should you find that you need more dedicated
performance, security, and database management features, we highly
recommend using Cloud Databases to meet your DB needs. You can feel free
to consume both shared Cloud Sites databases as well as Cloud databases
as your hosting needs change. Please remember that all management and
updates to your Cloud Databases must be done via the Cloud Control Panel,
and will not be integrated into the Cloud Sites Control Panel. This is
intentional, so you have access to the latest features when they go live
in the Cloud Control Panel.
