---
permalink: check-what-version-of-wordpress-is-being-used/
title: Check What Version of Wordpress is Being Used
type: article
created_date: ‘2020-03-04’
created_by: Roberto Sanchez
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

Check what version of wordpress is being used

Checking what version of Wordpress is very important to make sure tyour site is up to date at all times. Outaded versions of Wordpress can be easily hacked.

There are also incompatibilities to worry about. Some plugins won’t work with the latest release of WordPress, while others will break if your version is too old. As WordPress updates, they add and remove features and functions that plugins may rely on.

When installing a plugin, you’ll need to check what core version your site is running on to make sure everything will work smoothly.

If something goes wrong on your site and it ends up not loading, displays a strange error, or throws the white screen of death, diagnosing the error may require knowing what version you were running — something you likely don’t know off the top of your head.

Lastly, there may be cases when you want to find what WordPress version someone else is running. For instance, if you’re working with a client, you may want to see if their site is out of date so you can help them fix this security issue right away.

These problems are less pressing now that WordPress auto-updates, but if you haven’t checked in a long time, it’s a good idea to do so.

Method 1: Check the Admin Area
If you’re able to log in to your website’s backend, this is probably the easiest and most accurate method for determining what version of WordPress you’re running.

There are several areas in the admin dashboard that display the currently installed version, or will tell you if your site is out of date.

Step 1. Lower Right Corner

Whenever you’re logged into WordPress, you can find the version number on any page of the backend. Just look at the bottom right corner and you should see it there. If you don’t, try going to the dashboard homepage.

In case you can’t find it, there are ample other places to check what version of WordPress you’re running.

Step 2. “At a Glance” Box

As soon as you log in, you should be taken to the Home page on the admin dashboard, where you’ll find the “At a Glance” box that shows information like posts, pages, comments, and currently installed theme. You’ll also see your WordPress version listed there at the bottom.

If you don’t have the “At a Glance” box, you may have removed it (or downloaded a plugin that removes it), installed a custom admin theme, or are using a very old version of WordPress.

Step 3. “Updates” Screen

You can also head to Dashboard > Updates, which will prompt you to update if you’re running an older version or inform you that you already installed the most recent version of WordPress.

The downside here is that, if you do have an outdated version installed, it won’t give you the version number. It only prompts you to update.

Step 4. “About WordPress” Screen

Last, there’s the “About WordPress” screen you can find by hovering the WordPress logo in the top left corner and clicking the first dropdown option. Even if you’re not updated to the most recent version of WordPress, you’ll see the version number displayed prominently at the top as well as information about that update.

That’s all the ways to find the WordPress version number in the dashboard, but it’s also worth noting that you’ll see a nag at the top of every backend screen prompting you to update to the newest version if you haven’t done so.

If all you’re worried about is staying up to date, look for that message, or go to Dashboard > Updates to check for new versions.

Method 2: Through Your Website’s Frontend
What if you can’t log into your admin area and need to get the version information for troubleshooting, or you want to know what another WordPress website is running on? Within a site’s source code and on certain hidden pages, you may be able to find the version number.

Note that many webmasters take steps to make this information private, so this won’t work on all sites, only on those that have left the default settings intact. If you’ve already taken security measures to protect yourself, you might have to try a different method.

Step 1. Page Source

The first step is to go to any page on the site you’re checking (but it’s best to just use the homepage), then right-click and tap “View page source” or “View Source” in your browser. It will open a new tab showing the page’s HTML and CSS. Press ctrl+F to bring up the search feature.

From here you have a few options. Usually, you can find the “generator” tag which will explicitly tell you what version of WordPress the site is running, but some newer themes might disable this.

Instead, search for “?ver=” and look under the “link rel=’stylesheet’” sections. You should see a line ending with “?ver=x.x.x”. The numbers are the WordPress version.


This method isn’t always reliable since themes and plugins can store their version information here too and throw you off. Make sure you’re looking in the right part of the code.

Step 2. Website Readme

Another method that only works on older WordPress versions is adding “/readme.html” to the end of the web address. This will display the currently installed version prominently, but again, it only works on websites that are already outdated.

If the website is new enough, the page will still load and show the usual information, but the version number won’t be there.


Step 3. RSS Feed

The last and most reliable method is to access the RSS feed. Just add /feed to the end of the site’s URL. Press ctrl+F to bring up page search, and type in “generator”. You can find it near the top of the page.
We grew our traffic 1,187% with WordPress. We’ll show you how.

Here you’ll see something like “<generator>https://wordpress.org/?v=x.x.x</generator>”. And there’s your version number!


Method 3: Access the version.php File
The most reliable and accurate way to check your WordPress version is to directly access version.php within your site’s files. To do this, your website will need to be live with a web hosting account so you can get your FTP login credentials.

Step 1. Install FileZilla

To start, you’ll need to download an FTP client. Programs like these enable you to get at the files stored on your website and even upload new ones. FileZilla is by far the most popular solution since it’s completely free and fairly easy to use. It’s also available for Windows, Linux, and Mac.

Step 2. Connect to Your Website

The next step is to connect to your website using FTP. Launch FileZilla and you should see a screen asking for various credentials: the host, username, password, and port.

In the Host box, put in your website’s domain, preceded by “sftp://” (just like the “http://” you use to connect to websites through your browser). If you get an error, try using “ftps://” or just your domain name alone.


The username, password, and port are all information you’ll need to get from your web host. Most hosts will keep this somewhere in their dashboard, so try logging in on the host’s website, or reach out to them and ask them for your FTP credentials.

Once you have all the info, place it in and click Quickconnect. In a moment, your site’s files and directories should appear in the areas below.

Step 3. Check the version.php File

Once you’ve made it into your website, look for the wp-includes folder. Click it to see the files and folders inside.

The file you’re looking for is called version.php. When you find it, double click it to open it. Be careful not to edit anything; you’re just looking for a certain line of code.


That code contains the variable $wp-version. Scroll down until you see it, or press ctrl+F to search the file for that line. Once you find it, it will look like “$wp-version = ‘x.x.x;”, where the number on the right is your WordPress version.With that done, you can close the connection and exit out of FileZilla.

External Link	URLs
WordPress	https://wordpress.org
Filezilla	https://filezilla-project.org
