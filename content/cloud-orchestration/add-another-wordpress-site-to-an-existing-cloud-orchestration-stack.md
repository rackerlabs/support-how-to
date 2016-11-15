---
permalink: add-another-wordpress-site-to-an-existing-cloud-orchestration-stack/
audit_date: 2016-11-16
title: Add another WordPress site to an existing Cloud Orchestration stack
type: article
created_date: '2013-12-13'
created_by: Jered Heeschen
last_modified_date: '2016-05-12'
last_modified_by: Cat Lookabaugh
product: Cloud Orchestration
product_url: cloud-orchestration
---

This article shows how to manually add another WordPress site to an existing
WordPress Cloud Orchestration stack on a Rackpace cloud server.

In most situations, it's better to create a new WordPress stack for each site,
which allows for better performance, security, and scalability, and is much
easier to manage. Furthermore, creating a new WordPress stack is a simple
process involving just a few clicks through the Cloud Control Panel.

Adding a site to an existing stack requires changes to the configurations for
multiple services. The effort may be acceptable when the existing stack runs
well under capacity or when you're trying to minimize the number of server
instances you maintain.

### Connect to the backend (database) server

1. Log in to the [Cloud Control Panel](http://mycloud.rackspace.com).

2. In the top navigation bar, click **Orchestration > Stacks** to view the list
of existing stacks.

3. From the **Stacks** list, click on the name of the stack to which you want
to add a WordPress site.

4. From the list of servers, click the name of the backend server to view
its details page. Find the PublicNet IP address on the backend server's detail
page in the Networks section. If "backend" does not appear on your server list,
look for "database" in the server list, because the database server acts as
your backend server.

5. Use the public IP address from the server details page and the private key,
which was provided when the stack was created, to connect to the backend server
with SSH.

        ssh user@<ip_address_of_backend_server> -i /path/to/key

   If you do not have the private key, you can reset the backend server's root
   password. For help connecting to your server by using SSH, see the articles
   on using SSH with a private key in our How To center for
   [Mac and Linux](/how-to/logging-in-with-an-ssh-private-key-on-linuxmac) or
   [Windows](/how-to/logging-in-with-an-ssh-private-key-on-windows).

### Set up a database

1. After logging in to your backend server, run the following command to
connect to MySQL.

         mysql

2. Create a database for the new WordPress site with the following command in
the MySQL shell. For this example, we use the site "blogsrock.rackspace.com".

        create database blogsrock_rackspace_com;

3. Create a user and password for this site with the following command,
replacing "blogsrockuser@localhost" with the new user and "mypassword" with a
strong password.

        grant all on `blogsrock_rackspace_com`.* to blogsrockuser@localhost identified by mypassword;

4. Grant access to the database for this user.

   In the following example, we grant the user access to all `10.x.x.x` IP
   addresses. However, for additional security, replace this with the specific
   ServiceNet IP addresses of your web servers.

        grant all on `blogsrock_rackspace_com`.* to blogsrockuser'@'10.% identified by mypassword;

5. When you are finished, type `exit` to leave MySQL, and type `exit` again to
disconnect from the backend server.

### Set up WordPress

Now that the database is ready, you can install WordPress on the master node.

1. From the stack's detail page, click the link for the "master" server.

   On the master server's detail page, find the PublicNet IP address in the
   Networks section.

2. Use the following command to connect to the server with `ssh`.  Use your IP
address and private key.

        ssh user@<ip_address_of_master_server> -i /path/to/key

3. Use the following command to navigate to the web server's data directory,
which contains subdirectories for any WordPress sites that are already
configured on the server.

        cd /var/www/vhosts

4. Use the following commands to create a directory for the new site with
WordPress subdirectories and confirm the result.

        sudo mkdir -p blogsrock.rackspace.com/{conf,http_docs,.ssh}
        ls -l blogsrock.rackspace.com

        (response)

        total 20
        drwxr-xr-x 5 root root 4096 Dec  3 16:23 ./
        drwxr-xr-x 4 root root 4096 Dec  3 16:23 ../
        drwxr-xr-x 2 root root 4096 Dec  3 16:23 conf/
        drwxr-xr-x 2 root root 4096 Dec  3 16:23 http_docs/
        drwxr-xr-x 2 root root 4096 Dec  3 16:23 .ssh/

5. Use the following command to install and configure WordPress. Replace
`wordpress_db_host` with the ServiceNet IP address of the backend server.
Replace `wordpress_docroot` with the path to your site (for example,
`/var/www/vhosts/blogsrock.rackspace.com/http_docs/`).  Replace the remaining
values with the new database name, user, and password.

        wp core config --allow-root
           --dbhost='{{ wordpress_db_host }}'
           --dbname='{{ wordpress_db_name }}'
           --dbuser='{{ wordpress_db_user }}'
           --dbpass='{{ wordpress_db_pass }}'
           --path='{{ wordpress_docroot }}'

6. Use the following command to copy the **wp-config-sample.php** file to make
a new WordPress config file.

        sudo cp wp-config-sample.php wp-config.php

7. Edit the configuration file, and add some extra entries to help with file
permissions and load balancing.

   For HTTP-only sites, make the necessary changes by using the following
   command:

        sudo bash -c "echo -e "define('FS_METHOD', \"direct\");\ndefine('FS_CHMOD_DIR', (02775 & ~umask()));\ndefine('FS_CHMOD_FILE', (0664 & ~ umask()));\ndefine('FORCE_SSL_ADMIN', false);\nif ( isset(\$_SERVER['HTTP_X_PROXY_PROTO']) && \$_SERVER['HTTP_X_PROXY_PROTO'] == 'HTTPS' ) { \$_SERVER['HTTPS'] = 1; }" >> wp-config.php"

   If you are running an HTTPS site, use the following command instead:

        sudo bash -c "echo -e "define('FS_METHOD', \"direct\");\ndefine('FS_CHMOD_DIR', (02775 & ~umask()));\ndefine('FS_CHMOD_FILE', (0664 & ~ umask()));\ndefine('FORCE_SSL_ADMIN', true);\nif ( isset($_SERVER['HTTP_X_PROXY_PROTO']) && \$_SERVER['HTTP_X_PROXY_PROTO'] == 'HTTPS' ) { \$_SERVER['HTTPS'] = 1; }" >> wp-config.php"

8. Use the following command to generate new secure keys with the WordPress
API.

        curl -q https://api.wordpress.org/secret-key/1.1/salt/

   You should get output similar to the following:

        define('AUTH_KEY',         'V}zrS|PsyH3]!p!AEufS{7:Jjy);(ooKx/aG-S6VWcpd3D47zc3Xr~2=.W3|Yfw:');
        define('SECURE_AUTH_KEY',  'w1|o-0:5i};kj&V1SY}2O[2MGTwo8NhoI2+Gmj!qDgG<~1A+*,DAQ?^0xO_&g%se');
        define('LOGGED_IN_KEY',    'Ce6g>+OA$u+-H5`/ZU|f#`=J,rb!.-^ayr20jG.BF$Q7q>]G&lPG nTS^Ox*mMET');
        define('NONCE_KEY',        'G$Or)@Rp%Im#eezD{P.P[/eMv9q_wNe+.GVt| y,rN~sA;`y@UY76S|J[p7-n*s&');
        define('AUTH_SALT',        '$iPgS$t^,h!=YSW0ju*jqmk!@eLAn<JM?tG/+5c=|-#[8*G7-mnp6HG!t{J3>o4u');
        define('SECURE_AUTH_SALT', 'ciy$1-c^X-mkb<2ULD7+ua;_kjd9ku&:bZX>}B-GnI5ITu`(q)]3{p#TQ)-:`w@c');
        define('LOGGED_IN_SALT',   'VE]+84A?6Qen-p`iuthBw;Cqh:z2-9)Rdcw2AY_7?W;D`W5T7ATmJHrK~}-1`e2E');
        define('NONCE_SALT',       'XV}nFzYqXJ}jr)tD2vZ`-|!w]f>3;*`?#U8*l(C:/*)w.cf}6i{Adw@,Yj7p(F?d');

### Set up the system

Now, you should make some changes to the system to accommodate the new WordPress
site.

1. Use the following command to create a new user for the site, setting the
user's home directory to the new site's directory.

        sudo useradd -M -d /var/www/vhosts/blogsrock.rackspace.com -p mypassword -s '/bin/bash' -U -G www-data wp_user2

2. Set up a new SSH key-pair for `lsyncd` connections between the master and
back end nodes in the new user's `.ssh` directory, by using the following
commands.

        cd .ssh
        sudo ssh-keygen -f id_rsa.lsyncd
        sudo mv id_rsa.lsyncd.pub authorized_keys

3. Use the following command to change to the **conf** subdirectory of the new
site.

        cd /var/www/vhosts/blogsrock.rackspace.com/conf/

4. Use the following command to copy any configuration files for the existing
WordPress site to the new directory.

        sudo cp /var/www/vhosts/iloveblog.rackspace.com/conf/* /var/www/vhosts/blogsrock.rackspace.com/conf/

5. Use the following command to change the name of the new config file to match
the new site.

        sudo mv iloveblog.rackspace.com__http.conf blogsrock.rackspace.com__http.conf

   If your site supports HTTPS you'll also need to rename the copied HTTPS
   configuration file, by using the following command.

        sudo mv iloveblog.rackspace.com__https.conf blogsrock.rackspace.com__https.conf

6. Use the following command to edit the configuration file to use the domain
name of the new site in place of the existing site.

        sudo sed -i 's/iloveblog.rackspace.com/blogsrock.rackspace.com/g' blogsrock.rackspace.com__http.conf

   If your site supports HTTPS you'll need to make the same change to the HTTPS
   file by using the following command.

        sudo sed -i 's/iloveblog.rackspace.com/blogsrock.rackspace.com/g' blogsrock.rackspace.com__https.conf

7. If your site supports HTTPS, you should change the SSL certificate
being used in the new "https" file to point to the SSL certificate for the new
site. Specific instructions for this step are beyond the scope of this article.

8. Use the following commands to set the appropriate permissions for all of the
new site's directories and files. Replace `wp_user2` with the name of the user
you created for the site in Step 1 of this section.

        cd /var/www/vhosts/blogsrock.rackspace.com/
        sudo chown -R wp_user2:www-data http_docs
        sudo chown -R wp_user2:wp_user2 conf .ssh
        sudo chmod -R ug=rwX,o=rX http_docs
        sudo chmod u+s http_docs
        sudo find http_docs/ -type d -exec chmod u+s {} \;
        sudo chmod -R u=rwX,go= .ssh

### Set up Apache

After configuring the system for the new WordPress site, you need to create an
Apache virtual host configuration file for the new site.

1. Use the following command to change to Apache's sites-available directory.

        cd /etc/apache2/sites-available

2. Use the following command to copy the existing site's configuration file
for the new site.

        sudo cp iloveblog.rackspace.com.conf blogsrock.rackspace.com.conf

3. Use the following command to edit the new virtual host configuration file to
change any domain references for the new site.

        sudo sed -i 's/iloveblog.rackspace.com/blogsrock.rackspace.com/g' blogsrock.rackspace.com.conf

### Set up the slave node

Next, you need to create the new user on each slave node in order to prepare
for the new site. To do this, you must set up the stack's SSH key (the one you
used to log in to each node) on the master server, and use `pssh` to make the
process faster.

1. If you aren't already on the root account, switch to a root shell to execute
privileged commands and use root's SSH keys, by using the following command.

        sudo su - root

2. Use the following command to edit root's private key file to add the stack's
SSH private key. Replace `nano` in that command with your text editor of choice.

        nano ~/.ssh/id_rsa

3. Add the stack's SSH private key to the file and save the change. If the file
isn't empty, add the key on a new line at the end of the file.

4. Use the following command to change permissions on the key file so only root can access it.

        chmod 600 ~/.ssh/id_rsa

5. Use the following commands to install `pssh` on the master server.

        apt-get update
        apt-get install pssh

6. Use the following `pssh` command to add the new user to each slave server.
The `-H` flag here is only used once, but you should repeat it for each
additional slave node you have.

        parallel-ssh -P -H <ip_address_of_slave_node> -x "-o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o GlobalKnownHostsFile=/dev/null" useradd -M -d /var/www/vhosts/blogsrock.rackspace.com -p 'mypassword' -s '/bin/bash' -U -G www-data wp_user2

   You should see `pssh` report `SUCCESS` for each slave node.

7. Use the following `pssh` command to verify the user creation on each slave
node, again adding `-H` flags for each additional slave node.

        parallel-ssh -P -H <ip_address_of_slave_node> -x "-o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o GlobalKnownHostsFile=/dev/null" id wp_user2

   You should see something similar to the following from each slave node:

        uid=1001(wp_user2) gid=1001(wp_user2) groups=1001(wp_user2),33(www-data)

8. Use the following command to copy the new site's content from the master
server to each slave server using `rsync`.

        rsync -avz -e ssh /var/www/vhosts/blogsrock.rackspace.com root@<slave_node_ip>:/var/www/vhosts

   Repeat the `rsync` for each slave node in your stack.

9. Copy the Apache configuration file to the slave nodes.

   To make things easier, use a loop with the `parallel-scp` command (part of
   the `pssh` package). Add extra `-H` flags for each additional slave node.

        for file in /etc/apache2/sites-available/blogsrock.rackspace.com.conf; do parallel-scp -H <ip_address_of_slave_node> -x "-o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o GlobalKnownHostsFile=/dev/null" $file $file; done

### Final steps

Now you can finally start putting everything together and run the new site.

1. Use the following command to restart `lsyncd` on the master node to start
syncing content for the new site to the slaves.

        service lsyncd restart

2. Use the following command to enable the new site's Apache configuration on
the master server and slave nodes.

        parallel-ssh -i -H <ip_address_of_slave_node> -x "-o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o GlobalKnownHostsFile=/dev/null" /usr/sbin/a2ensite blogsrock.rackspace.com.conf; /usr/sbin/a2ensite blogsrock.rackspace.com.conf

3. Use the following command to reload Apache's configuration on the master
server and slave nodes.

        parallel-ssh -i -H <ip_address_of_slave_node> -x "-o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o GlobalKnownHostsFile=/dev/null" service apache2 reload; service apache2 reload

Your new WordPress site should now be online.
