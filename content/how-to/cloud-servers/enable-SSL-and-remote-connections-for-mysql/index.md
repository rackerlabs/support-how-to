---
permalink: enable-SSL-and-remote-connections-for-mysql/
audit_date:
title: 'Enable SSL and Remote Connections for MySQL'
type: article
created_date: '2021-04-20'
created_by: John Abercrombie
last_modified_date: '2021-04-20'
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

# Note: This article assumes that MySQL has already been installed and configured on your server.

# Enable SSL for MySQL

Before you are able to install your SSL certificate to your MySQL database, you first need to backup and remove the default certificate files. You'll need to create a backup directory for this. Please note that you can choose your own directory name for this step. We are going to use mysql-backup-certs for this example. You will also need to be the root user.

Create a new backup directory:

```sh
mkdir -p ~/mysql-backup-certs/		
```

Next, go to the /var/lib/mysql directory and move every default certificate to your newly created backup directory:

```sh
cd /var/lib/mysql
mv ca.pem ca-key.pem ~/mysql-backup-certs/
mv server-key.pem server-cert.pem ~/mysql-backup-certs/
mv client-key.pem client-cert.pem ~/mysql-backup-certs/
mv private_key.pem public_key.pem ~/mysql-backup-certs/
```

Restart MySQL.

```sh
service mysqld restart
OR
systemctl restart mysqld
```

Now, after MySQL is running again (use service mysqld status OR systemctl status mysqld to confirm), check the SSL status from inside the MySQL shell. To do this, log into MySQL as the root user.

```sh
mysql -u root -p
(Enter MySQL root password)
```

Run the following query to check the SSL status in MySQL:

```sh
SHOW GLOBAL VARIABLES LIKE '%ssl%';
STATUS;
```

Please note that in the above command, capital letters are not required. It is merely denoted as such to differentiate command syntax from what you're inquiring about.

From the above command, you want to see the SSL status as 'disabled', and it should say that the root user is connected without SSL. Now that we've verified that we've 'turned off' MySQL's default SSL certificates, we'll want to enable SSL connection with our own certificate. 

Edit the my.cnf file with your preferred command line text editor (ie, vim or nano):

```sh
vim /etc/my.cnf
OR
nano /etc/my.cnf
```

Find the [mysqld] section, and add the following configuration settings:

```sh
# You will use your own SSL certificates directory for these. The following are examples only.
ssl-ca=/etc/pki/tls/certs/ca.pem
ssl-cert=/etc/pki/tls/certs/server-cert.pem
ssl-key=/etc/pki/tls/private/server-key.pem
```

Save and exit the file. Then, restart MySQL.

```sh
service mysqld restart
OR
systemctl restart mysqld
```

After MySQL is back up (check the status to confirm this), log back into the MySQL shell.

```sh
mysql -u root -p
(Enter MySQL root password)
```

Next, run the SSL query again.

```sh
SHOW VARIABLES LIKE '%ssl%';
STATUS;
```

You are looking for the SSL section value to say 'yes', and you will see that SSL is enabled for MySQL. You will still see that the root user is not connected using SSL. This is normal. If you want to change this, you can force all localhost user connections to use SSL. You'll need to edit the my.cnf file again.

```sh
vim /etc/my.cnf
OR
nano /etc/my.cnf
```

Enter the following configuration at the end:

```sh
[client]
ssl-ca=/etc/pki/tls/certs/ca.pem
ssl-cert=/etc/pki/tls/certs/client-cert.pem
ssl-key=/etc/pki/tls/private/client-key.pem
```

Save and close the file. Restart MySQL. Once MySQL is back up, log into the MySQL shell again.

```sh
mysql -u root -p
(Enter MySQL root password)
```

Run the following query again:

```sh
SHOW VARIABLES LIKE '%ssl%';
STATUS;
```

You will see that SSL is enabled like before, but this time, you'll also see the root user is connected with SSL. If all you are wanting to do is enable SSL connections from localhost connections, then you're finished! However, if you also want to enable remote logins for MySQL, read on.


# Enabling Remote Connections for MySQL

The following instructions will be for enabling remote connections for MySQL. In addition, these remote users will need to have certificate files signed by your CA (certificate authority) to connect. 

We will also denote the setting for forcing the CA signature in case you just want to allow remote connections without the CA requirement. These will be denoted with three asterisks, like this '***'.


Use your preferred command line text editor to edit the /etc/my.cnf file again

```sh
vim /etc/my.cnf
OR
nano /etc/my.cnf
```

Include the following at the bottom of the [mysqld] section:

```sh
bind-address = *
require_secure_transport = ON 		***
```

Save and quit file. Restart MySQL. Confirm MySQL is running again. You'll need to log into the MySQL shell again.

Once you are logged in, create the user with the following:

```sh
CREATE USER 'example'@'%' IDENTIFIED BY 'password';
OR
CREATE USER 'example'@'%' IDENTIFIED BY 'password' REQUIRE X509; 	***
```

After you've granted this user the permissions to the databases you want them to have permissions to, flush the privileges (this updates MySQL permissions from within the shell).

```sh
flush privileges;
```

As you may have noticed, the '%' located after the @ symbol in the above 'create user' command is what actually denotes the user as a remote user. 

As a bonus, if you have a user that will only be accessing MySQL from a static IP, you can enter that IP address in place of the '%' to allow that user to access MySQL from their specific IP address. Please note that the user will only be able to access the database from that IP address. If their IP address changes, they'll no longer have access. That is why most utilize the general remote setting of '%' instead.

That's it! You've now enabled SSL connections as well as remote access to your MySQL database!
