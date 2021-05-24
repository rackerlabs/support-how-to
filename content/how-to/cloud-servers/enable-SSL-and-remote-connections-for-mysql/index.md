---
permalink: enable-SSL-and-remote-connections-for-mysql/
audit_date: '2021-05-21'
title: 'Enable SSL and Remote Connections for MySQL'
type: article
created_date: '2021-04-20'
created_by: John Abercrombie
last_modified_date: '2021-05-21'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

**Note**: This article assumes that you have installed and configured MySQL&reg;
on your server.

### Enable SSL for MySQL

Before installing your SSL certificate on your MySQL database, backup and remove
the default certificate files. You can choose your own directory name
for this step. This example uses the **mysql-backup-certs** directory. To perform
the following steps, switch to the root user.

1. Create a new backup directory:

    ```sh
    mkdir -p ~/mysql-backup-certs/
    ```

2. Go to the **/var/lib/mysql** directory and move every default certificate to
   your newly created backup directory:

    ```sh
    cd /var/lib/mysql
    mv ca.pem ca-key.pem ~/mysql-backup-certs/
    mv server-key.pem server-cert.pem ~/mysql-backup-certs/
    mv client-key.pem client-cert.pem ~/mysql-backup-certs/
    mv private_key.pem public_key.pem ~/mysql-backup-certs/
    ```

3. Restart MySQL by running one of the following commands:

    ```sh
    service mysqld restart
    ```

    or

    ```sh
    systemctl restart mysqld
    ```

4. Use one of the following commands to check the `mysqld` status:

    ```sh
    service mysqld status
    ```

    or

    ```sh
    systemctl status mysqld
    ```

5. Check the SSL status from inside the MySQL shell. To do this, log into MySQL
   as the root user:

    ```sh
    mysql -u root -p
    (Enter MySQL root password)
    ```

6. Run the following query to check the SSL status in MySQL:

    ```sh
    SHOW GLOBAL VARIABLES LIKE '%ssl%';
    STATUS;
    ```

    **Note**: You do not need to use capital letters.  The example uses them
    to differentiate command syntax from what you're querying.

    In the preceding command, you want to see the SSL status as
    **disabled**, and the root user is connected without SSL.

7. To enable SSL connection with our own certificate by editing the 
   **my.cnf** file, run one of the following commands:

    ```sh
    vim /etc/my.cnf
    ```

    or

    ```sh
    nano /etc/my.cnf
    ```

8. Find the **[mysqld]** section and add the following configuration settings:

    ```sh
    # You will use your own SSL certificates directory for these. The following are examples only.
    ssl-ca=/etc/pki/tls/certs/ca.pem
    ssl-cert=/etc/pki/tls/certs/server-cert.pem
    ssl-key=/etc/pki/tls/private/server-key.pem
    ```

9. Save and exit the file. Then, restart MySQL by running one of the following commands:

    ```sh
    service mysqld restart
    ````

    or

    ```sh
    systemctl restart mysqld
    ```

10. After MySQL is back up, log back into the MySQL shell:

    ```sh
    mysql -u root -p
    (Enter MySQL root password)
    ```

11. Run the SSL query again:

    ```sh
    SHOW VARIABLES LIKE '%ssl%';
    STATUS;
    ```

12. If the SSL section value shows **yes**, the SSL is enabled for MySQL. However,
    you still see that the root user is not connected by using SSL. This is
    normal. If you want to change this, you can force all localhost user
    connections to use SSL. You need to edit the **my.cnf** file again by
    running one of the following commands:

    ```sh
    vim /etc/my.cnf
    ```

    or

    ```sh
    nano /etc/my.cnf
    ```

13. Enter the following configuration at the end:

    ```sh
    [client]
    ssl-ca=/etc/pki/tls/certs/ca.pem
    ssl-cert=/etc/pki/tls/certs/client-cert.pem
    ssl-key=/etc/pki/tls/private/client-key.pem
    ```

14. Restart MySQL. After MySQL is back up, log into the
    MySQL shell again:

    ```sh
    mysql -u root -p
    (Enter MySQL root password)
    ```

15. Run the following query again:

    ```sh
    SHOW VARIABLES LIKE '%ssl%';
    STATUS;
    ```

If you just want to enable SSL connections from localhost connections,
then you're finished. However, if you also want to enable remote
logins for MySQL, read on.

### Enable remote Ccnnections for MySQL

The following instructions enable remote connections for MySQL. In
addition, these remote users need to have certificate files signed by your
certificate authority (CA) to connect.

This example denotes (by using three asterisks: `***`) the setting for
forcing the CA signature if you want to allow remote connections without
the CA. 

1. Use your preferred command line text editor to edit the **/etc/my.cnf** file again:

    ```sh
    vim /etc/my.cnf
    ```

    or

    ```sh
    nano /etc/my.cnf
    ```

2. Include the following at the bottom of the **[mysqld]** section:

    ```sh
    bind-address = *
    require_secure_transport = ON 		***
    ```

3. Save and quit the file using `:wq`.

4. Restart MySQL. Confirm MySQL is running again. You need to log into the
   MySQL shell again.
   
5. AFter you log in, create the user by running one of the following commands:

    ```sh
    CREATE USER 'example'@'%' IDENTIFIED BY 'password';
    ```

    or

    ```sh
    CREATE USER 'example'@'%' IDENTIFIED BY 'password' REQUIRE X509; 	***
    ```

6. After you grant this user the permissions to the databases you want them to
have permissions to, flush the privileges to update MySQL permissions from
within the shell:

    ```sh
    flush privileges;
    ```

You might have noticed that the `%` located after the `@` symbol in the preceding
`create user` command is what actually denotes the user as a remote user.

As a bonus, if you have a user that accesses MySQL from only a static
IP address, you can enter that IP address in place of the `%` to allow that user to
access MySQL from their specific IP address. However, note that the user can
access the database from only that IP address. If their IP address
changes, they no longer have access. That is why most admins use the general
remote setting of `%` instead.

You've now enabled SSL connections as well as remote access to your
MySQL database.
