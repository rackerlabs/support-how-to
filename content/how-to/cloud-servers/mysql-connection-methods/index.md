---
permalink: mysql-connection-methods
audit_date: '2021-02-11'
title: 'MySQL connection methods'
type: article
created_date: '2021-02-09'
created_by: Alfonso Murillo
last_modified_date: '2021-02-11'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

To connect to a MySQL&reg; server through **MySQL Workbench&reg;**, you can use the
following methods: standard TCP/IP connection, local socket or pipe, and
standard TCP/IP over SecureShell (SSH).

### Start a new connection in MySQL Workbench

To start the connection through MySQL Workbench, perform the following steps:

1. Go to **Database > Connect to Database...**
2. Enter the **Connection Name**.
3. Select the desired connection method from the dropdown list. See the following 
   sections to learn more about these methods.

### Standard TCP/IP connection method

**Note**: The `skip_networking` system variable affects this method. When
this variable is off, use *named pipes* or *shaped memory* for Windows&reg; or Unix&reg;
socket files in Unix.

This method has the following tabs: Parameter, SSL, and Advanced.

#### Parameter

The **Parameter** tab has the following options:

- **Hostname:** The MySQL server's hostname or IP address.
- **Port:** The default TCP/IP port is `3306`, but the MySQL server listen on another
  port for this protocol.
- **Username:** The user for the connection.
- **Password:** If not specified, you need to enter the user's password when
  MySQL Workbench tries to connect. You can also use a vault to store passwords.
- **Default Schema:** The default schema used when connecting.

#### SSL

The **SSL** tab has the following options:

- **Use SSL:** To disable SSL ecnryption, select **No**. To use the
  encryption only option (if the client library supports it), select **If available**.
  To make it mandatory to use SSL encryption for the connection, select **Require**.
- **SSL Key File:** Specify the path on your local computer to the SSL key file.
- **SSL CERT File:** Specify the path on your local computer to the SSL certificate file.
- **SSL CA File:** Specify the path on your local computer to the SSL
  Certification Authority (CA) file.
- **SSL Cipher:** Select which cipher you want to use for the SSL encryption if
  you want a specific one. This tab has the following buttons:
   - **SSL Wizard:** This tool needs access to OpenSSL binary files in the system's PATH to
     generate SSL certificates for the MySQL server and client.
   - **Files:** Shows the location of the SSL files that the SSL Wizard generated.

#### Advanced

The **Advanced** tab has the following options:

- **Use compression protocol:** Check this option to compress the communication
    between MySQL Workbench and the MySQL server. This option increases the
    transfer rates.
- **Use ANSI quotes to quote identifiers:** Use double quotes (") to quote
    identifiers instead of literal strings. This overrides the server setting.
- **Enable Cleartext Authentication Plugin:** Use this if your authentication method
    requires the user's password in clear text instead of encrypted
- **Use the old authentication protocol:** Selcet this to disable the Connector/C++
    **secure_auth option**. This helps users that use the old `mysql_old_password`
    authentication plugin to connect to the server.
- **Timeout:** Specify the time to attempt the connection.
- **SQL_MODE:** Specify an **SQL_MODE** to override the server's default.

### Local socket or pipe connection method

This connection method has the same tabs as the Standard TCP/IP one:

#### Parameters

The **Parameter** tab has the following options:

- **Socket/Pipe Path:** Specify the path on your local computer to the local
    socket or pipe file. If this is empty, it uses the default location.
- The **username**, **password** and **default schema** options are as in the Standard
    TCP/IP connection method.

#### SSL

The **SSL** tab has the following options:

- All the options in this tab are the same as in the Standard TCP/IP connection method.

#### Advanced

The **Advanced** tab has the following options:

- Most of the options in this tab are the same as in the Standard TCP/IP
    connection method.
- The **Use compression protocol** and **Timeout** options do not apply for this
    method.

### Standard TCP/IP over SSH connection method

This connection method has the same tabs as the Standard TCP/IP one:

#### Parameters

The **Parameters** tab has the following options:

- This tab includes some common parameters with the Standard TCP/IP connection
    method and includes some other features.
- **SSH Hostname:** Specifies the hostname for the SSH server, where you can
    provide an optional port number after a semicolon.
- **SSH Username:** Specifies the user used to make the SSH connection.
- **SSH Password:** Specifies the password for the SSH connection. You can 
    also use a vault.
- **SSH Key File:** Specifies the path to the SSH key file on your local computer.

If there is an error due to different host fingerprints, you can
find the SSH host fingerprints in **~/.ssh/known_hosts** for Linux&reg; and macOS&reg;
systems and on **C:\Users\username\.ssh\known_hosts** for Windows&reg;.

#### SSL

The **SSL** tab has the following options:

- All the tab options are the same as in the Standard TCP/IP
    connection method.

### Advanced

The **Advanced** tab has the following options:

- Most of the tab options are the same as in the Standard TCP/IP
    connection method.
- The **Timeout** option does not apply to this method.

### Conclusion

Choose the method that suits your requirements better to a connection between the
MySQL Workbench app and your MySQL server.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact). 
