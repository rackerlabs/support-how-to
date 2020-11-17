---
permalink: enable-ssh-public-key-authentication/
audit_date: '2020-10-22'
title: Enable SSH public key authentication
type: article
created_date: '2020-10-19'
created_by: James Andrade
last_modified_date: '2020-10-22'
last_modified_by: 'Rose Morales'
product: Cloud Servers
product_url: cloud-servers
---

This article describes the procedure to set up a Secure Shell (SSH) public key authentication.

1. [Log in to](/how-to/connecting-to-a-server-using-ssh-on-linux-or-mac-os/) the server.

2. Verify that the user exists:

        `getent passwd <username>`

3. Look up the value assigned to the **AuthorizedKeysFile** parameter within
   **/etc/ssh/sshd_config** to determine the file where the key is stored:

        `grep AuthorizedKeysFile /etc/ssh/sshd_config`

    **Note**: The default location is **~/.ssh/authorized_keys** within the
    user's default home directory.

4. Switch to the user's home directory:

        `cd /directory-path`

    **Note**: Substitute **directory-path** with user's home directory path.

5. [Check permission](/how-to/changing-linux-permissions/) levels for the **.ssh/** directory. It should have `0700`
   permissions and be owned by the user.

        `ls .ssh`

    a. If the directory does not exist, create it and set the permissions to `0700`:

        `mkdir -m 700 .ssh`

    b. If the directory exists, you can set ownership separately:

        `chmod 700 .ssh/`
        `chown -R username:username /path/to/home/.ssh`

6. Switch to **.ssh/** directory and  **authorized_keys** file:

        ```cd .ssh/
        vim authorized_keys
        ll```

7. Add the SSH Public Key to the end of the **authorized_keys** file:

        `vim authorized_keys`

8. Change permissions to `600` and ensure proper ownership of the file:

        `chmod 600 authorized_keys`
        `chown -R username:username authorized_keys`

### Disable password authentication

If you want all users to log in with public keys and not passwords, you can disable password authentication.

**Important**: Disabling password authentication locks users who used a password
to access the server if SSH authentication is not configured for their account.

1. Create a backup of the **sshd_config** file before making
    any changes:

    ```
    mkdir /home/username/backup
    cp /etc/ssh/sshd_config /home/username/backup/sshd_config.bak
    ```

2. Open the  **sshd_config** file:

        `vim /etc/ssh/sshd_config`

3. Find the **PubkeyAuthentication** parameter and set it to yes. If the line is commented, remove any
   comment indicators (`#`).

4. Find fthe **PasswordAuthentication** parameter within the same file and set it to `no`.

5. Save the changes to the file and exit the file.

6. Check the syntax by using `sshd -t`. If there are no errors, reload `sshd`:

        `service sshd reload`

Additional notes:

1. The private key file on your local workstation (client-side) should have permissions set to
   `600`, and the **.ssh** directory should have the permissions set to `700`. The
   authorized_keys files also work with `644` permissions, but `600` is
   more secure.
