---
permalink: plesk-introduction/
audit_date:
title: 'Plesk: Introduction'
type: article
created_date: '2021-02-10'
created_by: Robert Kane
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

Plesk is a Licensed GUI based hosting solution for use on Rackspace Dedicated servers/Virtual Machines running RHEL or CentOS. It allows customers to have a convenient way to manage their websites and website content while requiring minimal Linux command line experience. Plesk fully controls the server's web server operations so most changes made outside of the Plesk panel directly related to the web server will be reverted by Plesk. As such, there are specific guidelines and methods for working with Plesk. Through the Plesk panel,  you can add/remove websites, add/remove SSL certificates, and modify hosting settings with a few clicks.


### Prerequisites



   - Dedicated server/Virtual Machine running RHEL or CentOS
   - Plesk Obsidian or later
   


### Accessing the Plesk interface
Note: replace "123.4.567.8" or "example.com" in the URLs below to your server IP address or hostname.

```
https://123.4.567.8:8443
```
```
https://example.com:8443
```

It is also possible to generate a single use login link. It will be necessary to generate a new login link each time.

1. Connect to the server via SSH. [Mac OS X](https://docs.rackspace.com/support/how-to/connecting-to-linux-from-mac-os-x-by-using-terminal) [Windows](https://docs.rackspace.com/support/how-to/connecting-to-linux-from-windows-by-using-putty)
2. Run the following command to create a single use login link
   ``` 
        # plesk login
        
        https://example.com:8443/login?secret=dEdJc3GJWkK%2FmPWrMvCPfAd1CWzQQY0oVkwzJze
        https://123.4.567.8:8443/login?secret=dEdJc3GJWkK%2FmPWrMvCPfAd1CWzQQY0oVkwzJze 
    ```
3. Input the login link to the browser. This will automatically log into the Plesk interface.
4. Due to some network configurations, the login link may be generated for the private IP of the device. If this occurs, replace the private IP with the public IP for your login link.



### Related articles (optional)

Add other plesk articles as they are created.
Include any links to related content. Use a bulleted list if you have more than one link. For example:
- [Create an image from a server and restore a server from a saved image](/how-to/create-an-image-from-a-server-and-restore-a-server-from-a-saved-image)
- [About Cloud Server images](/how-to/about-cloud-server-images)
