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

**Note**: This article assumes that MySQL is present and configured on your
server.

### Enable SSL for MySQL

Before installing your SSL certificate to your MySQL database, backup and remove
the default certificate files. Note that you can choose your own directory name
for this step. We are going to use mysql-backup-certs for this example. You will
also need to be the root user.

1. Create a new backup directory:

    ```sh
    mkdir -p ~/mysql-backup-certs/
    ```

2. Go to the `/var/lib/mysql` directory and move every default certificate to
   your newly created backup directory:

    ```sh
    cd /var/lib/mysql
    mv ca.pem ca-key.pem ~/mysql-backup-certs/
    mv server-key.pem server-cert.pem ~/mysql-backup-certs/
    mv client-key.pem client-cert.pem ~/mysql-backup-certs/
    mv private_key.pem public_key.pem ~/mysql-backup-certs/
    ```

3. Restart MySQL.

    ```sh
    service mysqld restart
    ```

    OR

    ```sh
    systemctl restart mysqld
    ```

4. Use the following commands to check `mysqld` status.

    ```sh
    service mysqld status
    ```

    OR

    ```sh
    systemctl status mysqld
    ```

5. Check the SSL status from inside the MySQL shell. To do this, log into MySQL
   as the root user.

    ```sh
    mysql -u root -p
    (Enter MySQL root password)
    ```

6. Run the following query to check the SSL status in MySQL:

    ```sh
    SHOW GLOBAL VARIABLES LIKE '%ssl%';
    STATUS;
    ```

    **Note**: Capital letters are not required and were used to differentiate
   command syntax from what you're inquiring about.

    **Note**: From the above command, you want to see the SSL status as
   **disabled**, and the root user is connected without SSL.

7. Enable SSL connection with our own certificate by edit the `my.cnf` file:

    ```sh
    vim /etc/my.cnf
    ```

    OR

    ```sh
    nano /etc/my.cnf
    ```

8. Find the [mysqld] section, and add the following configuration settings:

    ```sh
    # You will use your own SSL certificates directory for these. The following are examples only.
    ssl-ca=/etc/pki/tls/certs/ca.pem
    ssl-cert=/etc/pki/tls/certs/server-cert.pem
    ssl-key=/etc/pki/tls/private/server-key.pem
    ```

9. Save and exit the file. Then, restart MySQL.

    ```sh
    service mysqld restart
    ````

    OR

    ```sh
    systemctl restart mysqld
    ```

10. After MySQL is back up, log back into the MySQL shell.

    ```sh
    mysql -u root -p
    (Enter MySQL root password)
    ```

11. Run the SSL query again.

    ```sh
    SHOW VARIABLES LIKE '%ssl%';
    STATUS;
    ```

12. The SSL section value will show 'yes', and the SSL is enabled for MySQL. You
    will still see that the root user is not connected using SSL. This is
    normal. If you want to change this, you can force all localhost user
    connections to use SSL. You'll need to edit the `my.cnf` file again.

    ```sh
    vim /etc/my.cnf
    ```

    OR

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

14. Restart MySQL. Once MySQL is back up, log into the
MySQL shell again.

    ```sh
    mysql -u root -p
    (Enter MySQL root password)
    ```

15. Run the following query again:

    ```sh
    SHOW VARIABLES LIKE '%ssl%';
    STATUS;
    ```

If all you are wanting to do is enable SSL connections from localhost
connections, then you're finished! However, if you also want to enable remote
logins for MySQL, read on.

### Enabling Remote Connections for MySQL

The following instructions will be for enabling remote connections for MySQL. In
addition, these remote users will need to have certificate files signed by your
CA (certificate authority) to connect.

We will also denote the setting for forcing the CA signature in case you
want to allow remote connections without the CA. These will be
denoted with three asterisks, like this '***'.

1. Use your preferred command line text editor to edit the `/etc/my.cnf` file again.

    ```sh
    vim /etc/my.cnf
    ```

    OR

    ```sh
    nano /etc/my.cnf
    ```

2. Include the following at the bottom of the [mysqld] section:

    ```sh
    bind-address = *
    require_secure_transport = ON 		***
    ```

3. Save and quit the file using `:wq`.

4. Restart MySQL. Confirm MySQL is running again. You'll need to log into the
   MySQL shell again.

5. Once you are logged in, create the user with the following:

    ```sh
    CREATE USER 'example'@'%' IDENTIFIED BY 'password';
    ```

    OR

    ```sh
    CREATE USER 'example'@'%' IDENTIFIED BY 'password' REQUIRE X509; 	***
    ```

6. After you've granted this user the permissions to the databases you want them to
have permissions to, flush the privileges (this updates MySQL permissions from
within the shell).

    ```sh
    flush privileges;
    ```

As you may have noticed, the `%` located after the `@` symbol in the above
`create user` command is what actually denotes the user as a remote user.

As a bonus, if you have a user that will only be accessing MySQL from a static
IP, you can enter that IP address in place of the `%` to allow that user to
access MySQL from their specific IP address. Please note that the user will only
be able to access the database from that IP address. If their IP address
changes, they'll no longer have access. That is why most utilize the general
remote setting of `%` instead.

That's it! You've now enabled SSL connections as well as remote access to your
MySQL database!
