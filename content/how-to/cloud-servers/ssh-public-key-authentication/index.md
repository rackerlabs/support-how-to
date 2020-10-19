---
permalink: ssh-public-key-authentication/
audit_date:
title: SSH Public Key Authentication
type: article
created_date: '2020-10-19'
created_by: James Andrade
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# SSH Public Key Authentication

In this article, we will show how to setup ssh public key authentication.

1. Log in to server

2. Check if user is already created.
    ```
    getent passwd <username>
    ```
    
3. Check the sshd_config file for an authorized_keys file. 

    ```
    grep AuthorizedKeysFile /etc/ssh/sshd_config
    ```
    (In most cases, the default location for the authorized_keys file will be at .ssh/authorized_keys for the user. The sshd_config file tells the system where to check for these keys.)

4. Go to the user's home directory.
    ```
    cd /path/to/home
    ```

5. Check for the .ssh/ directory (The directory should have 0700 permissions and be owned by the user)
    ```
    ls .ssh
    ```

6. Create Directory or Change Permissions
    a. If the directory isn't created, create it and set permissions on it. This can be done with one command:
    ```
    mkdir -m 700 .ssh
    ```
    b. If the directory is created, you can also set the permissions/ownership separately:
    ```
    chmod 700 .ssh/ 
    chown -R username:username /path/to/home/.ssh
    ```

7. Change directories into the .ssh/ directory and check for an authorized_keys file. (If  it's not there, go ahead and create one.)
    ```
    cd .ssh/
    vim authorized_keys
    chmod 600 authorized_keys
    ll
    ```

8. Using your favorite text editor, add the SSH Public Key (copy/paste) to the end of the authorized_keys file.
    ```
    vim authorized_keys
    ```

9. Change permissions to 600 and ensure proper ownership of the file:
    ```
    chmod 600 authorized_keys
    chown -R username:username authorized_keys
    ```
    That's it! You have now set up ssh public key authentication! 
---

# Disabling Password Authentication

If you want all users to log in with public keys and not passwords, then you can disable password authentication.

Please note that disabling password authentication will essentially lock out users who previously used a password to access the server if they do not have an SSH key configured for their account.

1.  For best practices, create a backup of the sshd_config file before making any changes. This can be done by making a /home/username/backup directory and then copying the sshd_config to this directory. 
    ```
    mkdir /home/username/backup
    cp /etc/ssh/sshd_config /home/username/backup/sshd_config.bak
    ```

2.  Using your favorite text editor, open the  /etc/ssh/sshd_config file. 

3.  Look for "PubkeyAuthentication", set this to yes (By default it's set to yes, but it may be commented out)

4.  Look for "PasswordAuthentication" within the same file. (Setting this to no will stop password logins and only accept pub-key authentication)

5.  Save the changes to the file and exit the file. 

6.  Check the syntax using sshd -t and if there are no errors, reload sshd:
    ```
    service sshd reload
    ```
    
Additional notes:

1. The private key file on your local workstation (client side) should have the permissions: 600 and the .ssh directory should have the permissions: 700

2. The authorized_keys files will also work with 644 permissions, however 600 is more secure.
