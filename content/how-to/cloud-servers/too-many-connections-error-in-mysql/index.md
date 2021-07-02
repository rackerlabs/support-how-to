---
permalink: too-many-connections-error-in-mysql/ 
audit_date: '2021-07-01'
title: 'Too many connections error in MySQL'
type: article
created_date: '2021-05-08'
created_by: Ivan Arteaga
last_modified_date: '2021-07-01'
last_modified_by: Ivan Arteaga
product: Cloud Servers
product_url: cloud-servers
---

The **too many connections** error appears when attempting to connect to a
server and the available connections, set to 100 by default, are in use
already.

Keep in mind that MySQL&reg; has a variable **max_connections +1** for client connections,
the **+1** is dedicated for accounts with **CONNECTION_ADMIN** privileges.

### Solution

Perform the following steps to fix this issue:

1. Identify the **max_connections** variable value:

    `mysql --user="root" --password="PASSWORD" --execute='SHOW VARIABLES LIKE "max_connections";`

    The output looks like this:

    | Variable_name   | Value |
    | --------------- | ----- |
    | max_connections | 100   |

2. Use your favorite text editor to change **/etc/mysql/my.cnf** and set
   the following values:

    ``max_connections = 500``

    ``max_user_connections = 500``

    **Note:** Increasing the amount of possible connections directly affects the
              amount of RAM consumed.

    The command `mysql --help` can help locate the **my.cnf** file because it displays
    default options on the following files:

    - **/etc/my.cnf**
    - **/etc/mysql/my.cnf**
    - **/usr/local/etc/my.cnf**
    - **~/.my.cnf**

3. Restart the MySQL service and to apply the changes.
