---
permalink: too-many-connections-in-mysql/ 
audit_date:
title: 'MySQL too many connections'
type: article
created_date: '2021-05-08'
created_by: Ivan Arteaga
last_modified_date: '2021-05-08'
last_modified_by: Ivan Arteaga
product: Managed
product_url: Managed
---
## MySQL too many connections
The **`too many connections`** error is received when we attempt to connect to the server but the  maximum available connections which is set to 100 by default has been reached or are in use already.

Keep in mind MySQL permits a **`max_connections +1`** client connections, this **`+1`** is reserver for accounts with **CONNECTION_ADMIN** privileges.

## How do we fix this issue? 


First, in order to identify our maximum connections value, we enter the following command"
**`'mysql --user="root" --password="PASSWORD" --execute='SHOW VARIABLES LIKE "max_connections";'`**


The output will look like this:
| Variable_name      | Value |
| ----------- | ----------- |
| max_connections      | 100       |

Once identified our current value we enter the following command to change the maximum allowed connections in our mysql configuration file,

Use your prefered text editor to change **/etc/mysql/my.cnf** to change to the new desired value:

**`max_connections = 500`**
**`max_user_connections = 500`**

**Remember that increasing the amout of possible connections also affects the amout of RAM consumed.**

Also please note that this is one of the default locations for our configuration file and that you can run  **`mysql --help`** and you will see Default options are read from the following files in the given order:**`/etc/my.cnf /etc/mysql/my.cnf /usr/local/etc/my.cnf ~/.my.cnf`**

Now you only need to **restart** MySQL and the changes will be applied!



