---
permalink: upgrade-apache-http-server-2.2-to-2.4-in-rhel-and-centos
audit_date: '2021-05-26'
title: Upgrade Apache HTTP Server 2.2 to 2.4 in RHEL and CentOS 7
type: article
created_date: '2019-01-17'
created_by: Rackspace Community
last_modified_date: '2021-05-26'
last_modified_by: Carlos Arriaga 
product: Cloud Servers
product_url: cloud-servers
---

If you recently performed a compliance security scan, the results might look
like the following example:

    Apache HTTP Server Zero-Length Directory Name in LD_LIBRARY_PATH Vulnerability, CVE-2012-0883
    Apache HTTP Server mod_rewrite Terminal Escape Sequence Vulnerability, CVE-2013-1862
    Apache HTTP Server XSS Vulnerabilities via Hostnames, CVE-2012-3499 CVE-2012-4558

Depending on the code base, the Apache&reg; HTTP Server might have already
mitigated these security issues. The scan checks the server's Apache version
to determine if the installed version resolves the security issue.
However, some compliance security scans use only the version of Apache to
determine if the server is vulnerable to Common Vulnerabilities and Exposures
(CVE) rather than detecting vulnerabilities directly.

Such scans almost always generate a false positive. If you enable automatic updates,
the version might remain the same, even if another release patches the vulnerability.
Thus, the scan might mark the vulnerability as positive. This result might also happen
if your provider's scans show that your server is no longer vulnerable, even
if previous scans have identified vulnerabilities.

Use the following steps if your security audit reveals that your compliance security
scans only use the version of Apache to identify vulnerabilities on your Apache2 server.
Edit the configuration file for the Hypertext Transfer Protocol daemon (HTTPd).

1. Open **/etc/apache2/conf.d/httpd.conf** in an editor.

2. Add the following lines and remove the version information:

       ServerSignature Off
       ServerTokens Prod

   **Note**: Your server shouldn't provide a version signature, and your
   penetration testing company should recommend that you disable versions.

### Update from Apache 2.2 to Apache 2.4

Use the following steps to update Apache 2.2 to Apache 2.4.

1. Run the following command to stop `HTTPd` and any monitoring processes
   such as `Nimbus` to avoid alerts:

       service httpd stop

2. Run the following commands to back up your virtual host configurations,
   ensuring that you include any additional directories you added,
   such as `vhost`:

       cd /etc/httpd
       tar -cvf /tmp/apache_vhostconfig.tar conf conf.d vhosts

3. Run the following command to install the `yum-plugin-replace` package,
   which resolves package conflicts during package replacement:

        yum install yum-plugin-replace

4. Before you proceed, run the following commands to check the
   installed version and the version that you want to install:

        apachectl -V
        yum search httpd
        yum info httpd

   Your output should appear similar to the following example, which uses the
   command `yum info httpd24u.x86_64`:

       Loaded plugins: replace, rhnplugin, security
       This system is receiving updates from RHN Classic or RHN Satellite.
        Available Packages
       Name        : httpd24u
       Arch        : x86_64
       Version     : 2.4.23
       Release     : 4.ius.el6
       Size        : 1.2 M
       Repo        : rackspace-rhel-x86_64-server-6-ius
       Summary     : Apache HTTP Server
       License     : ASL 2.0
       Description : The Apache HTTP Server is a powerful, efficient, and extensible
               : web server.

5. Install HTTPd 2.4 by running the following command:

       yum replace httpd --replace-with=httpd24u

6. You must also install Lightweight Directory Access Protocol (LDAP) by
   running the following command:

       yum install mod_ldap

7. In Apache 2.4, you must use `Require` directives for Internet Protocol
   (IP) access restriction instead of `Order`, `Deny`, and `Allow`. As a
   result, you need to change the `Order`, `Deny`,
   and `Allow` statements in your **/etc/httpd/conf.d/server-status.conf** file
   to use `Require` statements. Because you might have these in the
   **.htaccess** files for other websites, ensure that you check your document
   roots carefully to avoid breaking your websites because of missing `Require`
   directives.

   Your existing **/etc/httpd/conf.d/server-status.conf** file should appear
   similar to the following example.

       <Location /server-status>
           SetHandler server-status
           Order deny,allow
           Deny from all
           Allow from 127.0.0.1
       </Location>

   Replace the `Order`, `Deny`, and `Allow` statements with the configuration in the following example.

       <Location /server-status>
           SetHandler server-status
           Require all granted
           Require host 127.0.0.1
       </Location>

   **Note**: This syntax change also applies to the virtual hosts in the
   **conf.d** and **httpd.conf** vhost configurations.

8. Change the `Order`, `Deny`, and `Allow` statements in **conf.d** to
   `Require` statements.

       #    Order deny,allow
       #    Deny from all
       Require all denied

       #    Order deny,allow
       #    Allow from all
       Require all granted

9. In the same file, change `Options -Indexes FollowSymLinks` to
   `Options -Indexes +FollowSymLinks`.

10. In **/etc/httpd/conf/httpd.conf**, change the `Order`, `Deny`, and
   `Allow` statements to `Require` statements, as shown in step 8.

11. In **/etc/httpd/conf/httpd.conf**, set as comments the
    `LoadModule` directives for modules that are no longer used.

        #2.4 upgrade LoadModule authn_alias_module modules/mod_authn_alias.so
        #2.4 upgrade LoadModule authn_default_module modules/mod_authn_default.so
        #2.4 upgrade LoadModule authz_default_module modules/mod_authz_default.so
        #2.4 upgrade LoadModule disk_cache_module modules/mod_disk_cache.so

12. Edit **/etc/httpd/conf/httpd.conf** to add the following line with
    the other `authz` modules.

        LoadModule authz_core_module modules/mod_authz_core.so

13. Add the following lines to the bottom of the block of `LoadModule`
    statements.

        LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
        LoadModule unixd_module modules/mod_unixd.so
        LoadModule slotmem_shm_module modules/mod_slotmem_shm.so
        LoadModule ssl_module modules/mod_ssl.so
        LoadModule socache_shmcb_module modules/mod_socache_shmcb.so

### *(Optional)* Download a compatible version of the Adobe Experience Manager (AEM) Dispatcher module

If the HTTPd installation uses the Adobe&reg; Experience Manager (AEM) Dispatcher
module, you must use the following steps to [download the compatible file
for Apache HTTP Server 2.4](https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/dispatcher.html?lang=en#static-web-server).

1. Run the following commands to extract the 
   **dispatcher-apache2.4-4.1.11.so** file from the Tape ARchive (TAR) file into
   **/etc/httpd/modules/**. Use only this file for this purpose.

        cd /etc/httpd/modules
        rm mod_dispatcher.so
        ln -s /etc/httpd/modules/dispatcher-apache2.4-4.1.11.so mod_dispatcher.so

2. Because SSL Mutex is deprecated, you need to edit
   **/etc/httpd/conf.d/ssl.conf** to change `SSLMutex default` to
   `Mutex default`.

For more details, see the [Apache documentation about the Mutex
Directive](https://httpd.apache.org/docs/2.4/mod/core.html#mutex).

### *Critical:* Restart the HTTPd

After you complete the steps in this article, you must restart HTTPd and
verify that it's enabled and running by using the following steps:

1. Run the following command to restart HTTPd:

        service httpd start

2. Ensure that the service is enabled and running and re-enable any
   previously enabled monitoring:

    - On CentOS&reg; 7 or Red Hat&reg; Enterprise Linux&reg; (RHEL) 7, run the following
      commands:

          systemctl enable httpd

          systemctl status httpd

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).
