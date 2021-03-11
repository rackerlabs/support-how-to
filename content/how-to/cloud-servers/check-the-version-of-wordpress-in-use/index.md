---
permalink: check-the-version-of-wordpress-in-use/
audit_date: '2021-03-11'
title: Check the version of Wordpress in use
type: article
created_date: ‘2020-03-04’
created_by: Roberto Sanchez
last_modified_date: '2021-03-11'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

Checking the WordPress&reg; version is very important to ensure your site is up to date at all times.
Outdated versions of WordPress pose a security threat because of their vulnerability.

You should also check for incompatibilities. Some plugins won’t work with the latest release of WordPress,
while others break if your version is outdated. As WordPress updates, its developers add and remove
features and functions that plugins rely on. 

When installing a plugin, check what core version your site is running on to ensure smooth operations.

If something malfunctions on your site and it ends up not loading, displays a strange error, or the white
screen of death, diagnosing the error might require knowing what version you were running&mdash;something
you likely don’t know off the top of your head.

Occasionally, you want to determine which WordPress version someone else is running. For instance, if you’re
working with a client, you might want to see if their site is out-of-date to fix a security issue right away.

WordPress self-updates, but it's a good idea to do so if you haven't checked in a while.

### Method 1: Check the admin area

If you can log in to your website’s backend, this is probably the easiest and most accurate method for
determining which version of WordPress you have. Several areas in the admin dashboard display the currently
installed version or tell you if your site is out-of-date.

The following methods are all the ways to find the WordPress version number in the dashboard, but it’s also
worth noting that you see a nag at the top of every backend screen prompting you to update to the newest
version if you haven’t done so. If all you’re worried about is staying up to date, look for that message
or go to **Dashboard > Updates** to check for new versions.

#### Check the bottom-right corner

Whenever you log into WordPress, you can find the version number on any page of the backend. Just look at
the bottom-right corner, and you should see it there.

#### Check the *At a Glance* box

As soon as you log in, you should see the Home page on the admin dashboard. Here, you find the **At a Glance**
box that shows information like posts, pages, comments, and currently installed theme. You also see your WordPress
version listed there at the bottom.

If you don’t have the **At a Glance** box, you might have removed it&mdash;or downloaded a plugin that removes it&mdash;,
installed a custom admin theme, or have an outdated version of WordPress.

#### Check the **Updates** screen

You can also head to **Dashboard > Updates**, which prompts you to update if you have an older version or informs you
that you already installed the most recent version of WordPress. If you do have an outdated version installed, it
won’t display the version number. Instead, it only prompts you to update.

#### Check the **About WordPress** screen

You can find the **About WordPress** screen by hovering the WordPress logo in the top left corner and clicking the first
dropdown option. Even if you don't have the most recent version of WordPress, you see the version number displayed
prominently at the top, as well as information about that update.

### Method 2: Use your website frontend

What if you can’t log into your admin area and need to get the version information for troubleshooting? Or you want to know
what version of WordPress another website is running? Within a site’s source code and on certain hidden pages, you might be
able to find the version number.

Note that many webmasters take steps to make this information private, so this works only on those sites that have left the
default settings intact. If you’ve already taken security measures to protect yourself, you might have to try a different method.

Try the following options to check the website frontend:

#### Check the page source

Go to any page on the site you’re checking, but it’s best just to use the homepage. Then right-click **View page source**
or **View Source** in your browser. It opens a new tab showing the page’s HTML and CSS. Press **ctrl+F** to bring up the
search feature.

From here, you have a few options. Usually, you can find the *generator* tag, which explicitly tells you which version of
WordPress the site is running. However, some newer themes might disable this.

Instead, search for `?ver=` and look under the **link rel=’stylesheet’** sections. You should see a line ending with
**?ver=x.x.x**. The numbers are the WordPress version.

This method isn’t always reliable because themes and plugins can store their version information here, throwing you off.
Make sure you’re looking at the right part of the code.

#### Check the website readme file

Another method that only works on older WordPress versions is to add **/readme.html** to the end of the web address.
This displays the currently installed version prominently, but again, it only works on websites that are already outdated.

If the website is new enough, the page still loads and shows the usual information, but the version number won’t be there.

#### Check the RSS feed

The last and most reliable option is to access the RSS feed. Just add **/feed** to the end of the site’s URL. Press
**ctrl+F** to bring up page search and type `generator`. You can find the search box near the top of the page.

The response something similar to `<generator>https://wordpress.org/?v=x.x.x</generator>`. That’s your version number.

#### Method 3: Access the *version.php* file

The most reliable and accurate way to check your WordPress version is to access **version.php** directly in
your site files. For this to work, your website needs to be live with a web-hosting account so you can get your
FTP login credentials.

Perform the following steps to access this file:

#### Step 1: Install FileZilla

To install FileZilla&reg;, you need to download an FTP client. Programs like these enable you to access the files
stored on your website and upload new ones. FileZilla is by far the most popular solution because it’s completely
free and easy to use. It’s also available for Windows&reg;, Linux&reg;, and macOS&reg;.

#### Step 2: Connect to your website

The next step is to connect to your website by using FTP. Launch FileZilla, and you should see a screen asking for
various credentials: the host, username, password, and port.

In the **Host** box, enter your website’s domain, preceded by **sftp://**.  This prefix is similar to the **http://**
you use to connect to websites through your browser. If you get an error, try using **ftps://** or just your domain
name without a prefix.

You need to get the username, password, and port from your web host. Most hosts keep this somewhere in their dashboard,
so try logging in on the host’s website or reach out to your host support team and ask for your FTP credentials.

After you have all the info, enter it and click **Quickconnect**. Your site’s files and directories should appear under
the info.

#### Step 3. Check the version.php file

After you are in your website, look for the **wp-includes** folder. Click it to see the files and folders inside. Look
for a file called **version.php**. When you find it, double click it to open it. Be careful not to edit anything&mdash;you’re
just looking for a certain line of code.

That code contains the variable `$wp-version`. Scroll down until you see it, or press **ctrl+F** to search the file for that
text. When you find it, it should look similar to `$wp-version = ‘x.x.x;`, where the number on the right is your WordPress
version. Now that you have the version, you can close the connection and exit FileZilla.

### External refernces

See the folloiwng sites for more information:

[WordPress](https://wordpress.org)
[Filezilla](https://filezilla-project.org)

Use the Feedback tab to make any comments or ask questions. You can also click **Let's Talk** to [start the conversation](https://www.rackspace.com/). 
