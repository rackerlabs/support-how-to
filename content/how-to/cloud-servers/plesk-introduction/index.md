---
permalink: plesk-introduction
audit_date: '2021-02-11'
title: 'Plesk: Introduction'
type: article
created_date: '2021-02-10'
created_by: Robert Kane
last_modified_date: '2021-02-11'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

Plesk&reg; is a licensed GUI-based hosting solution for use on Rackspace Dedicated servers and virtual machines
running Red Hat&reg; Enterprise Linux&reg; (RHEL) or CentOS&reg;. 

It provides customers with a convenient way to manage their websites and website content while requiring minimal 
Linux&reg; command-line experience. Plesk fully controls the server's web server operations and reverts most changes made outside of 
the Plesk panel directly related to the webserver. 

As such, there are specific guidelines and methods for working with Plesk. Through the Plesk panel,  
you can add or remove websites, add or remove SSL certificates, and modify hosting settings with a few clicks.


### Prerequisites

   - Dedicated server or virtual machine running RHEL or CentOS
   - Plesk Obsidian or later

### Accessing the Plesk interface

You can use a connection string or a single-use link to access the interface.

#### Connection-string method

Enter a connection string similar to the following examples in a browser: 

**Note:** replace `123.4.567.8` or `example.com` in the following examples with your server IP address or hostname.

    https://123.4.567.8:8443

    https://example.com:8443`
    
#### Single-use link method

You can also generate a single-use login link. You must generate a new login link each time.

1. Connect to the server through SecureShell (SSH). For help connecting, see 
   [the Mac OS X article](https://docs.rackspace.com/support/how-to/connecting-to-linux-from-mac-os-x-by-using-terminal)
   or [the Windows article](https://docs.rackspace.com/support/how-to/connecting-to-linux-from-windows-by-using-putty).
2. Run the following command to create a single-use login link, substituting your IP address or hostname:

        # plesk login
        
        https://example.com:8443/login?secret=dEdJc3GJWkK%2FmPWrMvCPfAd1CWzQQY0oVkwzJze
        https://123.4.567.8:8443/login?secret=dEdJc3GJWkK%2FmPWrMvCPfAd1CWzQQY0oVkwzJze 

3. Input the login link to the browser. This automatically logs in to the Plesk interface.
4. Because of some network configurations, the system might generate the login link for the device's private IP address.
   If this occurs, replace the private IP with the public IP for your login link.

### Related articles (optional)

- [Create an image from a server and restore a server from a saved image](/how-to/create-an-image-from-a-server-and-restore-a-server-from-a-saved-image)
- [About Cloud Server images](/how-to/about-cloud-server-images)


Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact). 
