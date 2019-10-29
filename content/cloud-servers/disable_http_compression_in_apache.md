---
permalink: disable-http-compression-in-apache/ 
audit_date:
title: Disable HTTP Compression in Apache 
type: article
created_date: '2019-10-30'
created_by: Chadwick Sterling
last_modified_date: '2019-10-30'
last_modified_by: Chadwick Sterling
product: Cloud Product
product_url: cloud-product
---

This article outlies the process of checking if HTTP is being compressed on your Apache server as well how to disable the HTTP compression. 

### Testing your server for HTTP compression 

1. Connect to the server using openssl

2. Use the following request to check for HTTP compression:

       Accept-Encoding:compress,gzip

If compression is enabled, the server will respond by compressing the page. If the serber does not support compression, it will display the page in plain text. 

### Disabling HTTP compression using Ubuntu or Debian operating system

1. Disable the module mod_deflate using the following command :

   $ sudo a2dismod deflate

2. Restart the server using the following command:

   $ sudo /etc/init.d/apache2 restart

### Disabling HTTP compression using Ubuntu or Debian operating system

Provide a descriptive heading for this section that begins with an imperative verb. For example: Create a new server.

List steps in numbered order and limit each step to a single action. You can add additional information related to a step in an indented paragraph. For example:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3. At the top of the panel, select **Databases > MySQL Instance**.
4. In the **Identity** section, provide a name for the instance and specify the region in which you want to launch the HA instances that you create.

   The name that you specify and an index (such as -01, -02) are used to create all the instances names, starting with the master index.

5. Create more steps as needed.

       To display code in a block, indent code samples by four spaces in regular text and increase the indent as necessary in lists (as shown here).

Conclude with a brief description of the end state. You can create as many procedure sections as needed to accomplish the task described in the introduction of the article. Be sure to use a descriptive title for each section.

For guidance on when to use diagrams and screenshots, see the [Screenshot and diagram guidelines](http://rackerlabs.github.io/docs-rackspace/style-guide/screenshot-diagram-guidelines.html).

#### Procedure subtopic (repeat as necessary)

Any subtopics related to a procedure should use the next level heading. Follow the preceding guidelines for subtopics.

### Troubleshooting (optional)

Include any troubleshooting information that pertains only to this task. If it might apply to more than one article, create a new article for it and link to that article from here.

### Next steps (optional)

Include any links to articles that your audience should read next.

### Related articles (optional)

Include any links to related content. Use a bulleted list if you have more than one link. For example:

- [Create an image from a server and restore a server from a saved image](/how-to/create-an-image-from-a-server-and-restore-a-server-from-a-saved-image)
- [About Cloud Server images](/how-to/about-cloud-server-images)
