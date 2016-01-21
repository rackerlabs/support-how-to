---
node_id: 1430
title: Cloud Sites Technology Option Changes
type: article
created_date: '2012-06-12'
created_by: Rackspace Support
last_modified_date: '2014-01-02'
last_modified_by: Jered Heeschen
product: Cloud Sites
product_url: cloud-sites
---

<span style="line-height: 1.538em;">The Rackspace Cloud Sites product
used to give customers the ability to set up a hosting environment in
which customers serve Windows/IIS applications from a Linux/PHP based
site and vice versa. Cloud Sites removed this ability to host disparate
technologies due to changes in our technology options. The hybrid
technology option removal allows us to release new changes more
quickly.</span>

<span style="line-height: 1.538em;">Please refer to the scenarios below
for rewrite help for sites that need to be adapted to account for the
single-technology requirement.</span>

### SCENARIO 1

Running a single CMS or application on your site, but this application
is running on an inappropriate <span
id="GRmark_40b6f724ba115af41edb32011701e57f760d86f3_sites:0"
class="GRcorrect">sites</span> technology. (<span
id="GRmark_93c9a7b50face9d578ba4e7ea9d0af2e6f8e232c_example:0"
class="GRcorrect">example</span>: Wordpress, which is intended for
Linux, running on a .NET site technology).

**Solution.** Simply change your technology selection in the Classic
Cloud Control panel.  On the website features tab, change your site to
the appropriate technology selection to match your application.

Please ensure that you are only running a single application on this
site and ensure that the application is running on the appropriate
technology.

### SCENARIO 2

Running more than one, disparate CMS/Application on your site, and these
applications have different default technologies, one that is an IIS and
one that is PHP/Perl/Python.

**Solutions:**

### IIS files running on PHP

If you are currently running IIS files (<span
id="GRmark_51fbe8c60526f0395c362513cf23c7ee059f0038_.:0"
class="GRcorrect">.</span>asp, .<span
id="GRmark_51fbe8c60526f0395c362513cf23c7ee059f0038_aspx:1"
class="GRcorrect">aspx</span>, <span
id="GRmark_51fbe8c60526f0395c362513cf23c7ee059f0038_etc:2"
class="GRcorrect">etc</span>) on your PHP site, you will need to create
a new site (either a new domain or a subdomain) with Windows/IIS as the
default technology. You will then need to move the IIS files over to
this new domain or subdomain. Once this is finished, you will need to
<span id="GRmark_5ae7a0c33d51b8b612251db0fb77b47c14fec57f_setup:0"
class="GRcorrect">setup</span> a rewrite on the main PHP site via an
.<span id="GRmark_5ae7a0c33d51b8b612251db0fb77b47c14fec57f_htaccess:1"
class="GRcorrect">htaccess</span> file to redirect any IIS files to the
new site. An example is given below:

``` {.MsoNormal}
RewriteRule ^(.+)\.asp$ http://www.iisexample.com/$1.asp [R=301,NC]
```

### PHP files running on IIS

If you are currently running PHP files (<span
id="GRmark_d46f4a1fe06d41e83cf919bac3ba0877a59b6138_.:0"
class="GRcorrect">.</span><span
id="GRmark_d46f4a1fe06d41e83cf919bac3ba0877a59b6138_php:1"
class="GRcorrect">php</span>, <span
id="GRmark_d46f4a1fe06d41e83cf919bac3ba0877a59b6138_etc:2"
class="GRcorrect">etc</span>) on your IIS site, you will need to create
a new site (either a new domain or a subdomain) with Linux/PHP as the
default technology. You will then need to move the PHP files over to
this new domain or subdomain. Once this is finished, you will need to
<span id="GRmark_9b5ca449a9945ffd818c8816473efddbf5032151_setup:0"
class="GRcorrect">setup</span> a rewrite on the main IIS site via a
web<span id="GRmark_9b5ca449a9945ffd818c8816473efddbf5032151_.:1"
class="GRcorrect">.</span>config file to redirect any PHP files to the
new site. An example is given below:

``` {.MsoNormal}
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="Redirect PHP Request" stopProcessing="true">
                    <match url=".*\.php" />
                    <action type="Redirect" url="http://phpexample.com/{R:0}" appendQueryString="true" />
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>
```

### PHP based blog running on IIS

If you are currently running a PHP based blog on your IIS based website
(Drupal, Magento, <span
id="GRmark_4fa5c3491724484fe5cc5248262d67c51441bd4b_etc:0"
class="GRcorrect">etc</span>) within a blog directory, you can use the
following redirect to redirect any requests to
www.domain.com/blog/\*.php to your new domain (<span
id="GRmark_4fa5c3491724484fe5cc5248262d67c51441bd4b_ie:1"
class="GRcorrect">ie</span> blog.domain.com):

``` {.MsoNormal}
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="Redirect Blog" stopProcessing="true">
                    <match url="^blog(.*)\.php" />
                    <action type="Redirect" url="http://blog.testingphpstuff.com{R:1}.php" appendQueryString="true" />
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>
```

