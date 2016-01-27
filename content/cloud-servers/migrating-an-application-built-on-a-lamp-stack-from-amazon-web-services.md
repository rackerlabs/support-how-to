---
node_id: 3586
title: Migrating an Application Built on a LAMP Stack from Amazon Web Services
type: article
created_date: '2013-07-02'
created_by: Rackspace Support
last_modified_date: '2016-01-14'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

This article describes the migration of WordPress or other LAMP stack
(Linux, Apache, MySQL, PHP) applications from Amazon Web Services (AWS)
to the Rackspace Cloud. It takes an estimated 15 minutes to complete, if
you follow the instructions step by step.

### Previous section

[Provisioning cloud resources when migrating from Amazon Web Services](/how-to/provisioning-cloud-resources-when-migrating-from-amazon-web-services)

The topology of the application in this scenario is presented in
the following figure:

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/4.1-1a.jpg" width="650" />

### Prerequisites

-   LAMP stack on AWS with root access or appropriate privileges
-   Valid and enabled account on Rackspace Cloud

### Preparation

-   Identify the resources to migrate, including application and
    database resources.
-   Create a list of all the necessary software packages that are
    installed on your EC2 instance other than the LAMP stack.
-   Create a list of all additional Amazon services that are being used
    in the application - for example, Simple Email Service (SES) for email
    or Relational Database Service (RDS) for database.
-   If you have not already, [create a Cloud Server instance](/how-to/provisioning-cloud-resources-when-migrating-from-amazon-web-services)
    and any supporting Rackspace Cloud services.

### Install software packages

After your [Cloud Server is set up](/how-to/provisioning-cloud-resources-when-migrating-from-amazon-web-services),
install your LAMP stack and application. In this scenario, WordPress is
the target application.

1.  Log on to your server.
2.  In a terminal, enter the following command:

        sudo tasksel

3.  To install the application stack, select **LAMP server**.

    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/4.1-5.png" width="650" />

4.  After the LAMP stack is installed, download and configure WordPress.

        sudo apt-get update
        sudo apt-get install wordpress
        sudo ln -s /usr/share/wordpress /var/www/wordpress
        sudo bash /usr/share/doc/wordpress/examples/setup-mysql -n wordpress localhost
        sudo chown -R www-data /usr/share/wordpress

5.  (Optional) Install OpenStack Swift. If you will use Cloud Files to
    transfer your data, install the swift client to enable access from
    your server.

        sudo apt-get install python-novaclient glance-client swift

    A.  Set the necessary environment variables by running the following commands, substituting your Rackspace Cloud account username and API key:

        export ST_USER=<your-login-username>
        export ST_KEY=<your-API-key>
        export ST_AUTH=https://identity.api.rackspacecloud.com/v1.0/

    You might want to define these variables in **.bashrc** or **.bash_profile**, then reload the file with the "source" command.

        source .bashrc

    B.  Type **swift list** and ensure that you can see the container you've created to hold your data.

### Back up data from AWS to Rackspace Cloud Files

Retrieve your data from EC2. You can transfer the data directly via
rsync or sftp, or you can use the OpenStack Swift client to transfer
your data to Cloud Files, and from there transfer to the Cloud Server.

To use Cloud Files, follow these preparatory steps (for this example
we'll use an existing container named "WordPress"):

1.  Using SSH, connect to your EC2 instance.

        ssh -i your_private_key.pem user@ec2-xxx-xxx-xxx-xxx.compute-1.amazonaws.com

2.  Perform a database dump and back up your application and any other
    resources needed by the application (including logs and other
    directories of interest).

        mysqldump -u<dbusername> -p --triggers --routines --databases wordpress | gzip > ~/staging/db/wordpress.sql.gz
        sudo tar cvzf ~/staging/app/wordpress.tar.gz /usr/share/wordpress/*
        sudo tar cvzf ~/staging/app/apachelogs.tar.gz /var/log/apache2/*

3.  If you are using Cloud Files to transfer your files, use one of the
    following methods to perform the transfer. If you will transfer
    directly via rsync or sftp, skip to the final section of this
    article after the transfer.

    -   Upload your archives to the Cloud Files container via the swift client.

            swift upload WordPress wordpress.sql.gz
            swift upload WordPress wordpress.tar.gz
            swift upload WordPress apachelogs.tar.gz

    -   Upload your data into Cloud Files through the Cloud Control Panel.

        A.  Open your container (**Cloud Control Panel > Files > containerName**).

        B.  Click **Upload Files**.

        C.  Click **Browse** and select the files to upload.

          **Note:** When you click the **Browse** button, you can select multiple files.

        D.  After you have selected the file or files, click **Open** or **Select** (depending on the browser and system).

        E.  Click **Upload File**.

### Restore data from Cloud Files to Cloud Servers

If you uploaded your data to Cloud Files, transfer it to your Cloud
Server with the following steps.

1.  Using SSH, connect to the Cloud Servers instance by using the
    PublicNet URL and the root password.
2.  Install and configure the Swift CLI as described in the "Install
    software packages" section.
3.  Ensure that you can execute swift list and see the new container
    that you created in the results.
4.  Download the database dump from the backup that you took in the
    "Back up data from AWS to Rackspace Cloud Files" section and restore
    it locally.

        swift download WordPress wordpress.sql.gz
        gunzip < wordpress.sql.gz | mysql -u <dbusername> -p

5.  Download the applications and data, and restore them.

        sudo service apache2 stop #stop apache server
        swift download WordPress wordpress.tar.gz
        # make a backup of your existing wordpress directory
        sudo tar cvzf wordpress-bak.tar.gz /usr/share/wordpress/*
        # restore downloaded WordPress archive
        sudo tar xvzf wordpress.tar.gz /usr/share/wordpress

### Test your application

Access your newly migrated WordPress instance by opening a browser and
typing:

    http://cloudServerIPAddress/wp-admin

### Next steps

[Post-migration considerations when migrating from Amazon Web Services](/how-to/post-migration-considerations-when-migrating-from-amazon-web-services)

For other migration scenarios, see the following articles:

-   [Migrating a .NET application from Amazon Web Services](/how-to/migrating-a-net-application-from-amazon-web-services)
-   [Migrating a Java web application from Amazon Web Services](/how-to/migrating-a-java-web-application-from-amazon-web-services)
-   [Migrating an application based on Backbone.js, Node.js, and MongoDB from Amazon Web Services](/how-to/migrating-an-application-based-on-backbonejs-nodejs-and-mongodb-from-amazon-web-services)
