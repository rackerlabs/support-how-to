---
permalink: WordPress-refusing-FTP-connection/
audit_date:
title: 'WordPress refusing FTP connection'
type: article
created_date: '2021-02-24'
created_by: Daniel Lopez
last_modified_date: 'yyyy-mm-dd'
last_modified_by: First Last
product: Cloud Servers
product_url: cloud-servers
---


<!---
I'm creating this section as a placeholder since I'm not certain how to go about letting customers know
that this is an unsupported task at Rackspace. Can we please add a section that lets readers know that 
this is a best effort article and is not supported by Rackspace
--->


### WordPress refusing FTP connection whilst using correct login information

**Error is displayed:**
`ERROR: There was an error connecting to the server, Please verify the settings are correct`



### Prerequisites (optional)


Include any prerequisites or required system setups. You can use bullets to describe a list of items:
   - **WordPress**
  


### Limitations (optional)


This article applies only to **Linux** systems.


### Procedure


If this were a folder permission error you would be able to connect but receive a permissions error. Determine the cause of the login error, then proceed with folder permissions.



1. First enable **WP_DEBUG** in wp-config
    The following code, inserted in your **wp-config.php file**, will log all errors, notices, and warnings to a file called debug.log in the wp-content directory. It will also hide the errors so they do not interrupt page generation.

        // Enable WP_DEBUG mode
        define( 'WP_DEBUG', true );

        // Enable Debug logging to the /wp-content/debug.log file
        define( 'WP_DEBUG_LOG', true );

        // Disable display of errors and warnings
        define( 'WP_DEBUG_DISPLAY', false );
        @ini_set( 'display_errors', 0 );
    
        // Use dev versions of core JS and CSS files (only needed if you are modifying these core files)
        define( 'SCRIPT_DEBUG', true );
        
**NOTE**: You must insert this BEFORE /* That's all, stop editing! Happy blogging. */ in the **wp-config.php** file.        

2. If you have root access, check your php error log, and syslog in **/var/log**
3. From a shell, try connecting via FTP to a localhost, can you read & write to your plugins folder? From a remote machine attempt the FTP connection to a local host & again checking your read/write permissions.
4. Add your FTP details in in the **wp-config.php file**

        define( 'FS_METHOD', 'ftpext' );
        define( 'FTP_BASE', '/path/to/wordpress/' );
        define( 'FTP_CONTENT_DIR', '/path/to/wordpress/wp-content/' );
        define( 'FTP_PLUGIN_DIR ', '/path/to/wordpress/wp-content/plugins/' );
        define( 'FTP_PUBKEY', '/home/username/.ssh/id_rsa.pub' );
        define( 'FTP_PRIKEY', '/home/username/.ssh/id_rsa' );
        define( 'FTP_USER', 'username' );
        define( 'FTP_PASS', 'password' );
        define( 'FTP_HOST', 'ftp.example.org' );
        define( 'FTP_SSL', false );
**NOTE**: You must insert this BEFORE /* That’s all, stop editing! Happy blogging. */ in the wp-config.php file.


**If you continue to experience this error install this plugin http:**//wordpress.org/plugins/ssh-sftp-updater-support/


*After installing this plugin the option for SFTP is added & you can select **SSH2** when prompted for your FTP login information.*
*Choose SSH2 at the bottom; the private key box should remain empty.*

### Related articles (optional)
**Upgrade Constants**
https://wordpress.org/support/article/editing-wp-config-php/


