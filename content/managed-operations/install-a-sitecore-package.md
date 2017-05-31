---
permalink: install-a-sitecore-package/
audit_date:
title: Install a Sitecore Package
type: article
created_date: '2017-09-02'
created_by: Juan Garza
last_modified_date: '2017-05-31'
last_modified_by: Nate Archer
product: Managed Operations
product_url: managed-operations
---

This article describes how to install a Sitecore package from a zip file. The zip file contains 3 folders; items, files, and metadata. These folders hold both content items and package configuration files.

### Prerequisites

To set up your deployment, you need the following:

- Familiarity with [Sitecore Cloud portals and account management](/how-to/sitecore-cloud-portals-and-account-management/).

- Familiarity with how to [Publish content to Sitecore](/how-to/publish-content-to-sitecore/).

- A zip file containing Sitecore package files. The zip file contains 3 folders; items, files, and metadata. These folders hold both content items and package configuration files.

### Install a package manually

The advantage of this manual approach is that the files are copied using the current FTP User, and you do not need to change any security settings.

1. Open the compressed zip package file and extract the files from the **/files** folder. Preserve the original directory structure when extracting the files.

2. Delete **/files** directory from the original zip file. <!---Does this mean the original must be compressed again??---> You should now have a set of uncompressed package files with the original three directories, and a compressed package file with only the **/items** and **/metadata**.

     <!---Lost right here. Which website, the Azure Webapp, the content management site, just the Website files--->

3. Backup databases and files from the website. Remember files that are not located under the website root, for example, files in the data folder which may have been moved to a non-public folder.

The website is now considered down for maintenance. You might want to publish an "Under Maintenance" page on your website.

### Install the package with only items and metadata.

1. Login to your Sitecore content management site.

2. Select **Control Panel**.

3. From the administration menu, select **Install a package**.

4. Click **Upload a package**, and then select **Choose files**.

5. Browse for your compressed package file, and then click **Next** > **Upload**.

6. After the files are upload click **Close**.

7. Click **Next** to continue with the package installation. When prompted, rad and accept the license agreement, and then click **Next**.

8. Review the package information and click **Install**.

9. Copy the extracted files to the website, preserving the same folder structure so that existing files are overwritten.

10. Verify that your website is running.

The website should no longer be considered down for maintenance. Ff you used an “Under Maintenance” page it should now be removed. The advantage of this manual approach is that the files are copied using the current FTP User, and you do not need to change any security settings.
