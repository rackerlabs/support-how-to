---
permalink: use-ssl-with-your-cloud-database-instance
audit_date: '2018-11-06'
title: Use SSL with your Cloud Databases instance
type: article
created_date: '2014-10-02'
created_by: Neha Verma
last_modified_date: '2021-06-09'
last_modified_by: Ana Corpus
product: Cloud Databases
product_url: cloud-databases
---

Secure Sockets Layer (SSL), a security protocol that uses encryption
technology to protect sensitive information on the Internet, enables 
users of a website to divulge personal information, such as credit 
card numbers, Social Security numbers, user names, and passwords. By 
making an SSL connection to your database, customers can trust that 
their data is encrypted when the system sends it to and from your web
application.

**Note:** Using SSL encryption is resource-intensive and might impact
the latency of your database connection.

### Download the CA certificate

Cloud Databases configures your database instance to support the use of
SSL when you provision the instance. To encrypt data in transit by using
SSL, your database connections need to use an SSL certificate
associated with Cloud Databases.

Follow this [link](https://docs.rackspace.com/docs/cloud-databases/v1/general-api-info/using-ssl)
to download the latest SSL certificate.

Your applications should use the downloaded certificate as the Certificate
Authority (CA) certificate for SSL connections to your database.

### Use the certificate with a MySQL client

To make SSL connections by using the `mysql` command-line client, execute the following
command to specify the location of the certificate when you start the client:

    mysql --ssl-ca=/path/to/ca-cert.pem

You can find more information about using SSL with MySQL&reg; in the [MySQL
8.0 documentation](https://dev.mysql.com/doc/refman/8.0/en/group-replication-secure-socket-layer-support-ssl.html).

### Require SSL connections

You can restrict a user to require SSL when
communicating with the database. MySQL supports the `GRANT` statement
modifier `REQUIRE SSL`. For example, to restrict `database_user` to have
read, write, and delete permissions for `prod_database` only when
connected with an SSL connection, log in to MySQL as root and then issue
the following command:

    GRANT SELECT, INSERT, UPDATE, DELETE ON prod_database.* TO 'database_user'@'%' REQUIRE SSL;

**Note:** If the user already exists, you must revoke all existing
privileges for the user and then use the preceding `GRANT` statement to
give the appropriate privileges to the user.

Remember to run a `FLUSH PRIVILEGES` for the database to make the
privilege change take effect.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
