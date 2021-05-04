---
permalink: troubleshoot-wordpress-refusing-an-ftp-connection
audit_date: '2021-03-12'
title: "Troubleshoot WordPress refusing an FTP connection"
type: article
created_date: '2021-02-24'
created_by: Daniel Lopez
last_modified_date: '2021-03-12'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article explains what to do if WordPress refuses an FTP connection despite having
the correct login information on Linux&reg; operating systems. Perform the steps
in this article if you get the following error:

    ERROR: There was an error connecting to the server, Please verify the settings are correct

1. Enable `WP_DEBUG` in the **wp-config.php** file. When you insert the following code in
    **wp-config.php**, the system logs all errors, notices, and warnings to
    **wp-content/debug.log**. It also hides the errors so that they do not interrupt page generation.
    
    a. Open **wp-config.php** in an editor.
    
    b. Insert a new line above the line: **That's all, stop editing! Happy blogging.**
    
    c. Insert the following lines where you added the new line and save the file:

        // Enable WP_DEBUG mode
        define( 'WP_DEBUG', true );

        // Enable Debug logging to the /wp-content/debug.log file
        define( 'WP_DEBUG_LOG', true );

        // Disable display of errors and warnings
        define( 'WP_DEBUG_DISPLAY', false );
        @ini_set( 'display_errors', 0 );
    
        // Use dev versions of core JS and CSS files (only needed if you are modifying these core files)
        define( 'SCRIPT_DEBUG', true );

2. If you have root access, check your PHP error log and the **syslog** in **/var/log**.
3. From a shell prompt, try connecting to localhost through FTP. Can you read and write to your plugins folder?
   From a remote machine, attempt the FTP connection to localhost and check your read and write permissions.
5. Add your FTP details in **wp-config.php**.

    a. Open **wp-config.php** in an editor.
    
    b. Insert a new line above the line: **That's all, stop editing! Happy blogging.**
    
    c. Insert the following lines where you added the new line and save the file:

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

### Updater support plugin

If you continue to experience this error, install this plugin:
http://wordpress.org/plugins/ssh-sftp-updater-support/.

Installing the plugin adds the option for SFTP. After you install it, you can select **SSH2** when prompted for
your FTP login information by choosing **SSH2** at the bottom of the page. Leave the **private key** box empty.
