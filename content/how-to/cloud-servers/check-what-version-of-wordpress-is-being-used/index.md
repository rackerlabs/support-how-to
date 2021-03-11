---
permalink: check-what-version-of-wordpress-is-being-used/
audit_date: '2021-03-11'
title: Check What Version of Wordpress is Being Used
type: article
created_date: ‘2020-03-04’
created_by: Roberto Sanchez
last_modified_date: '2021-03-11'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

### Check what version of Wordpress is being used

Checking WordPress&reg; version is very important to ensure your site is up to date at all times. Outdated versions of WordPress pose a security threat because of their vulnerability.

You should also check for incompatibilities. Some plugins won’t work with the latest release of WordPress, while others break if your version is outdated. As WordPress updates, its developers add and remove features and functions that plugins rely on. 

When installing a plugin, check what core version your site is running on to ensure smooth operations.

If something malfunctions on your site and it ends up not loading, displays a strange error, or the white screen of death, diagnosing the error might require knowing what version you were running &mdash;something you likely don’t know off the top of your head.

Occassionally, you want to find what WordPress version someone else is running. For instance, if you’re working with a client, you might want to see if their site is out of date to fix this security issue right away.

WordPress self-updates, but if you haven’t checked in a while, it’s a good idea to do so.

### Method 1: Check the Admin Area

If you’re able to log in to your website’s backend, this is probably the easiest and most accurate method for determining what version of WordPress you’re running. Several areas in the admin dashboard display the currently installed version or will tell you if your site is out of date.

#### Step 1. Lower Right Corner

Whenever you’re logged into WordPress, you can find the version number on any page of the backend. Just look at the bottom right corner and you should see it there. If you don’t, try going to the dashboard homepage. In case you can’t find it, there are other places to check what version of WordPress you’re running.

#### Step 2. **At a Glance** Box

As soon as you log in, you should be taken to the Home page on the admin dashboard, where you find the **At a Glance** box that shows information like posts, pages, comments, and currently installed theme. You’ll also see your WordPress version listed there at the bottom.

If you don’t have the **At a Glance** box, you might have removed it &mdash;or downloaded a plugin that removes it. Installed a custom admin theme, or using an outdated version of WordPress.

#### Step 3. **Updates** Screen

You can also head to **Dashboard > Updates**, which prompts you to update if running an older version or inform you that you already installed the most recent version of WordPress. If you do have an outdated version installed, it won’t give you the version number. It only prompts you to update.

#### Step 4. **About WordPress** Screen

Last, there’s the **About WordPress** screen you can find by hovering the WordPress logo in the top left corner and click the first dropdown option. Even if you don't have the most recent version of WordPress, you’ll see the version number displayed prominently at the top as well as information about that update.

Those are all the ways to find the WordPress version number in the dashboard, but it’s also worth noting that you’ll see a nag at the top of every backend screen prompting you to update to the newest version if you haven’t done so. If all you’re worried about is staying up to date, look for that message, or go to **Dashboard > Updates** to check for new versions.

### Method 2: Through Your Website’s Frontend

What if you can’t log into your admin area and need to get the version information for troubleshooting, or you want to know what another WordPress website is running on? Within a site’s source code and on certain hidden pages, you might be able to find the version number.

Note that many webmasters take steps to make this information private, so this won’t work on all sites, only on those that have left the default settings intact. If you’ve already taken security measures to protect yourself, you might have to try a different method.

#### Step 1. Page Source

The first step is to go to any page on the site you’re checking &mdash;but it’s best to just use the homepage, then right-click **View page source** or **View Source** in your browser. It will open a new tab showing the page’s HTML and CSS. Press **ctrl+F** to bring up the search feature.

From here you have a few options. Usually, you can find the *generator* tag which will explicitly tell you what version of WordPress the site is running, but some newer themes might disable this.

Instead, search for **?ver=** and look under the **link rel=’stylesheet’** sections. You should see a line ending with **?ver=x.x.x**. The numbers are the WordPress version.


This method isn’t always reliable since themes and plugins can store their version information here too and throw you off. Make sure you’re looking in the right part of the code.

#### Step 2. Website Readme

Another method that only works on older WordPress versions is adding **/readme.html** to the end of the web address. This displays the currently installed version prominently, but again, it only works on websites that are already outdated.

If the website is new enough, the page will still load and show the usual information, but the version number won’t be there.


#### Step 3. RSS Feed

The last and most reliable method is to access the RSS feed. Just add **/feed** to the end of the site’s URL. Press **ctrl+F** to bring up page search, and type in *generator*. You can find it near the top of the page. We grew our traffic 1,187% with WordPress. We’ll show you how.

Here you’ll see something like `<generator>https://wordpress.org/?v=x.x.x</generator>`. And there’s your version number!


#### Method 3: Access the version.php File

The most reliable and accurate way to check your WordPress version is to directly access **version.php** within your site’s files. To do this, your website will need to be live with a web hosting account so you can get your FTP login credentials.

#### Step 1. Install FileZilla&reg;

To start, you’ll need to download an FTP client. Programs like these enable you to access the files stored on your website and upload new ones. FileZilla is by far, the most popular solution since it’s completely free and fairly easy to use. It’s also available for Windows, Linux, and Mac.

#### Step 2. Connect to Your Website

The next step is to connect to your website using FTP. Launch FileZilla and you should see a screen asking for various credentials: the host, username, password, and port.

In the Host box, put in your website’s domain, preceded by **sftp://** &mdash;just like the **http://** you use to connect to websites through your browser. If you get an error, try using **ftps://** or just your domain name alone.

The username, password, and port are all information you need to get from your web host. Most hosts will keep this somewhere in their dashboard, so try logging in on the host’s website, or reach out, and ask for your FTP credentials.

Once you have all the info, place it in and click **Quickconnect**. Your site’s files and directories should appear below the info.

#### Step 3. Check the version.php File

Once you are in your website, look for the **wp-includes** folder. Click it to see the files and folders inside. The file you’re looking for is called **version.php**. When you find it, double click it to open it. Be careful not to edit anything; you’re just looking for a certain line of code.


That code contains the variable `$wp-version`. Scroll down until you see it, or press **ctrl+F** to search the file for that line. Once you find it, it will look similar to `$wp-version = ‘x.x.x;`, where the number on the right is your WordPress version. With that done, you can close the connection and exit FileZilla.

External Link	URLs
WordPress	https://wordpress.org
Filezilla	https://filezilla-project.org

Use the Feedback tab to make any comments or ask questions. You can also click **Let's Talk** to [start the conversation](https://www.rackspace.com/). 
