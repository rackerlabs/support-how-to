---
permalink: how-to-change-the-mysql-timeout-on-a-server
audit_date: '2020-07-13'
title: Change the MySQL timeout on a server
type: article
created_date: '2013-07-24'
created_by: Rose Contreras
last_modified_date: '2020-07-13'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---


When an application fails to close an unused connection, a low `wait_timeout` value helps you avoid
exceeding the permitted number of connections. Use the following instructions to set this vakue:

1. Log in to your server by using Secure Shell&reg; (SSH).

2. Use the sudo command to edit `my.cnf`, the MySQL&reg; configuration file.

        $ sudo vi /etc/my.cnf

3. Locate the timeout configuration and make the adjustments that fit your server.

        wait_timeout = 28800
        interactive_timeout = 28800

    - The `interactive_timeout` value does not affect any web application connections. A low
        `wait_timeout` is a normal best practice.

    - Stateless PHP environments do well with a 60-second timeout or less. Applications that use a
        connection pool (Java&reg;, .NET&reg;, and so on) need to adjust the `wait_timeout` value 
        to match their connection pool settings. The default `8 hours = 28800` seconds works well with
        properly-configured connection pools.

    - Configure the `wait_timeout` to be slightly longer than the application connection pool's
        expected connection lifetime as a safety check. Consider changing the value online because that
        does not require a MySQL restart, and you can adjusted it while the server runs without
        incurring downtime. Change the value to `set global wait_timeout=60`, and any newly created
        sessions inherit it. Be sure to preserve the setting in `my.cnf`. Any existing
        connections need to hit the old value of `wait_timeout` if the application abandoned
        the connection. If you do have reporting jobs that do longer local processing while in
        a transaction, you might consider having such jobs issue `set session wait_timeout=3600`
        upon connecting.

4. Save the changes and exit the editor.

5. Use the following command to restart MySQL and apply the changes, if required:

        $ sudo /etc/init.d/mysql restart
