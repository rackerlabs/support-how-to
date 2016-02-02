---
node_id: 532
title: Creating a PHP Site for a Cloud Sites main account
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2015-12-29'
last_modified_by: Stephanie Fillmon
product: Cloud Sites
product_url: cloud-sites
---

This article is written for our [Cloud Sites Control Panel](https://manage.rackspacecloud.com/). You can get to it from the [Cloud Control Panel](https://mycloud.rackspace.com) by clicking **Rackspace Cloud** in the upper-left corner and selecting **Cloud Sites**. You can also navigate directly to <https://manage.rackspacecloud.com/>.

**Prerequisites**

-   User has administration access to the website

### Procedure

-   Login to the [Cloud Sites Control Panel](http://manage.rackspacecloud.com/pages/Login.jsp%7C)
-   If you are new to The Rackspace Cloud, please refer to [Adding a new website](/how-to/getting-started-with-cloud-sites-how-to-add-a-new-website)
    and add the website.
-   Navigate to **Hosting > Cloud Sites**. This will list all the
    domains/websites owned by the account, now click on the php website
    hyperlink

  ![](https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Screenshot_5_20_13_12_11_PM.png)

-   Verify that logging is turned on if needed. Refer to [Enable logging for a website](/how-to/enabling-raw-logging-for-a-cloud-sites-website)
-   Upload a sample index.php file (like the one shown below) to the
    main directory for the website using FTP - Refer to [Upload content to a website using FTP](/how-to/getting-started-with-cloud-sites-uploading-your-content)

       <html>
        <head>
         <title>Sample Page</title>
        </head>
        <body>
         <?php echo '<p>Hello World</p>'; ?>
        </body>
       </html

-   Navigate to index.php using the Test URL if necessary. Refer to
    [Using a Staging URL](/how-to/using-a-staging-url "/how-to/using-a-staging-url").
    Ensure that is served by Cloud Sites.
