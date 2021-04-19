---
permalink: linux-server-security-best-practices/
audit_date: '2020-03-26'
title: Linux server security best practices
type: article
created_date: '2014-07-16'
created_by: Christoph Champ and Reese McJunkin
last_modified_date: '2021-04-16'
last_modified_by: Chris Silva
product: Cloud Servers
product_url: cloud-servers
---

The first step after you create a Linux&reg; Cloud Server is to set the security
on it. You should perform this crucial step on every server to prevent bad actors
from obtaining unwanted access. This action results in a more secure environment that
helps prevent you and your business from being compromised. Performing these basic
steps and hardening the security on your server discourages bad actors
and makes them move on to a new target.

### User management

By default, the root user is created as the first user on every Linux system.
You should disable it via Secure Shell (SSH). Disabling this root user via SSH
makes it harder for a bad actor to gain access to the system. Because the root user
is created by default on every Linux server, bad actors already have half the
information they need to log in to your server if the root user is enabled via
SSH. This situation allows for brute-force SSH attacks until the password hash breaks.

To avoid this situation, you should create a secondary user for when you need
to log in and administer the system. Each end user on the system should have
their own login credentials for logging purposes. Depending on the actions that
the end user needs to perform, they might need `sudo` permission to complete
administrative actions. This section provides examples about how to add a user with
sudo permission on both Debian&reg; and Red Hat&reg; Enterprise Linux-based systems.

#### Password strength guidelines

Before you create any users, ensure that you use strong passwords that require a
minimum character length (and maybe even include expiration dates). Here are common
guidelines advocated by proponents of software system security:

-   Use a minimum password length of 12 to 14 characters, if permitted.
-   Include lowercase and uppercase letters, numbers, and symbols,
    if permitted.
-   Generate passwords randomly, where feasible.
-   Avoid using the same password for multiple users, accounts, or software systems.
-   Avoid character repetition, keyboard patterns, dictionary words, letter or
    number sequences, user names, relative or pet names, romantic links (current
    or past), or personal information (for example, ID numbers, ancestors'
    names, or dates).
-   Avoid using information that is or might become publicly associated with the
    user or the account.
-   Avoid using information that the user's colleagues or acquaintances might
    know to be associated with the user.
-   Do not use passwords that consist of weak components.

#### Add a user (Debian and Ubuntu operating system)

For Debian and Ubuntu&reg; operating systems, add a user by following these steps:

1.   Create a new user and set their password:

        useradd {username}
        passwd {username}

2.  Give the new user `sudo` permissions for privileged operations on the system.
    This user is the primary user for logging in remotely and making changes to the server. 
    
    Use one of the following methods to implement `sudo` permissions for the user.

    a. Run the following command to add the user to the `admin` user group.

        usermod -aG admin {username}

    Alternatively, you can modify the **sudoers** file to give the user `sudo` permissions.

    a. Run the following command as root to edit the list of user permissions:

        visudo

       **Note:** On some distributions, systems use the `vi` text editor for 
       `visudo`. Because `vi` is not a user-friendly editor, you might need to
       consult a [vi tutorial](https://bignosebird.com/docs/vi.shtml) for help.       

    b. Add the following line directly after the line containing `root ALL=(ALL:ALL) ALL`:

        {username}     ALL=(ALL:ALL) ALL

    c. Save and quit.

3.  Switch to the new user and test their permissions by using `sudo` to run a
    command that requires root access, such as the following command:

        su {username}
        sudo systemctl status sshd

    A prompt asks you to enter the new user's password for verification before
    executing the command.

4. You can also verify that your user can elevate to the `root` account by running the following
   command:

        sudo -i

If you perform these steps correctly, your user now has `sudo` access and can elevate permissions. 
If not executed properly, you get a message indicating that the user is not in the **sudoers** file
when you attempt to authenticate.


#### Add a user (Red Hat and CentOS)

For Red Hat and CentOS&reg; operating systems, add a user by following these steps:

1.  Create a new user with `adduser` and set the user’s password with `passwd`:

        useradd {username}
        passwd {username}

2.  Give the new user `sudo` permissions for privileged operations on the system.
    This user is the primary user for logging in remotely and making changes to the server. 
    
    Use one of the following methods to implement `sudo` permissions for the user.

    a. Run the following command to add the user to the `wheel` group

        usermod -aG wheel {username}

    Alternatively, you can modify the **sudoers** file to give the user `sudo` permissions.

    a. Run the following command:

        visudo

       **Note:** On some distributions, the text editor that the system uses for
       `visudo` is `vi`. Because `vi` is not a user-friendly editor, you might need to
       consult a [vi tutorial](https://bignosebird.com/docs/vi.shtml) for help. 

    b. Add the following line directly after the line containing
       `root ALL=(ALL:ALL) ALL`:

        {username}     ALL=(ALL)       ALL

    c. Save and quit.

3.  Switch to the new user and test their permissions by using `sudo` to run a
    command that requires root access:

        su {username}
        sudo systemctl status sshd

    A prompt asks you to enter the new user's password for verification before
    executing the command.

4. You can also verify that your user can elevate to the `root` account by running the following
   command:

        sudo -i

If you performed these steps correctly, your user now has `sudo` access and can elevate permissions. 
If not executed properly, you get a message indicating that the user is not in the **sudoers** file
when you attempt to authenticate.

### Generate an SSH key pair

For a login method that is more secure than using a password, create an SSH key pair to
use with the user that you previously created. These instructions work with any Linux
distribution.

**Note:** These instructions are for Linux and macOS&reg; desktops. If you are
connecting from a Windows&reg; desktop, follow the instructions in
[Generate RSA keys with SSH PUTTYgen](/support/how-to/generating-rsa-keys-with-ssh-puttygen/)
and
[Log in with a SSH private key on Windows](/support/how-to/logging-in-with-an-ssh-private-key-on-windows)
to generate and add the SSH key pair.

1.  Run the following command to generate a key pair on your *local* Linux or
    Mac&reg; computer:

        ssh-keygen -b 4096 -t rsa

    When asked where to save the key, use the default location. Adding a password is optional
    and is more secure, but can be inconvenient.

    This operation creates two files. The default names are `id_rsa` for your private
    key and `id_rsa.pub` for your public key.

2.  After you have created the key pair on your local computer, upload the
    public key to your remote server for the user that you created previously.

    **Warning:** Be sure to upload the *public* key, and *not* the private
    key.

        ssh-copy-id -i ~/.ssh/id_rsa.pub {username}@{remotePublicIPAddress}

3.  Connect to the remote server by using
    `ssh {username}@{remotePublicIPAddress}` and run the following command to
    verify that no extra keys were added that you do not expect:

        cat .ssh/authorized_keys

At this point, you have added `ssh-key` and password authentication for the user. The next
section goes over optional steps on how to disable password authentication. 

### Linux SSH daemon configuration

Now that you have a new user with `sudo` permissions and an SSH key
pair, you can work with the SSH daemon (server) configuration to improve security.

**Note:** **For Managed Operations and RackConnect customers only:** To ensure that our automated systems have access to your server when needed, we request that you do not change the SSH configuration and that you skip to the next section. When connecting to your server, the Rackspace Support team logs in as the user `rack` and uses password authentication on port 22. In addition, rebuilding existing servers or building a new server from a snapshot requires that you enable root logins by setting the `PermitRootLogin` option to `yes`. If you need to change these values, speak with a member of your Rackspace Support team so that the change is made in a way that does not impact our ability to provide you with a Fanatical Experience&trade;.

The example commands for the rest of the article assume that you're are logged in as
your new user, using `sudo` to perform privileged operations.

#### SSH configuration options

This section covers common options in the SSH configuration file that help improve
security. This information is used to configure your firewall later.

This section outlines only a few options to change and describes what they do. For details
on other configuration options, see the
[OpenSSH documentation](https://www.openssh.com/cgi-bin/man.cgi/OpenBSD-current/man5/sshd_config.5).

This section focuses on the following options:

-   `Port XX`: This option is the port on which the SSH daemon listens (port 22 by
    default).
-   `PermitRootLogin`: This flag enables (yes) or disables (no) root login via
    SSH. By default, this line is commented and allows root login. 
-   `PubkeyAuthentication`: This flag enables (yes) or disables (no) SSH keys
    for authentication. By default, this line is commented and allows  `ssh-key`
    access.
-   `PasswordAuthentication`: This flag enables (yes) or disables (no) password
    authentication. By default, this option is enabled. 

SSH uses port 22 by default for communication. Bad actors try port 22 with the
username `root` on every server that they attack. For this reason,
disabling the root user via SSH and changing SSH to listen on a nonstandard port
helps prevent a breach.

Changing the port won't stop a determined intruder, but it does cause most
superficial scans for SSH connection opportunities to overlook your server.
Similarly, removing SSH access for the root user interferes with casual
brute-force attacks via SSH.

You should also consider which authentication method to use when logging in.
By default, all Linux systems use password authentication. Multiple ways exists
to perform authentication on the server, but the main two are by using a password
and SSH keys.

SSH keys are generated in pairs, one public and the other private, and you can use them
only in combination with each other. You should store the private key in a safe
location on the computer from which you connect, and you should never give it out. You
can give out the public key, and it is the key that you place on the server to which you
are connecting. The private key on your local computer runs through an algorithm
when you make a connection, granting access if the key pair hash matches up with the
public key.

#### Modify sshd_config

By this point, you have added a new user with `sudo` permissions, created an SSH
key pair, and uploaded your public SSH key. You can now change your SSH configuration
file to improve your security. To do this, you can change SSH to listen on a
custom port, restrict root login via SSH, enable public key authentication, 
and disable password authentication by using the following steps:

1.  Open the SSH daemon configuration file for editing:

        sudo vim /etc/ssh/sshd_config

2.  Change the following lines:

    **Note**: By default, the `Port` and `PermitRootLogin` lines are commented out
    as indicated by the `#` symbol. When commented out, these lines are read as default
    options, even if changes are made to the line. To implement these changes, you need
    to uncomment the associated lines by removing the `#` symbol at the beginning of the
    associated line. Additionally, before disabling `PasswordAuthentication` ensure that
    you have configured an SSH key or you cannot connect to the server.  

    Change:

        #Port 22
        #PermitRootLogin yes
        PasswordAuthentication yes     

    To:

        Port 2222
        PermitRootLogin no
        PasswordAuthentication no

    Replace **2222** with the port you want to use. Ensure the new port isn't already in use by another 
    program by using [netstat](/support/how-to/checking-listening-ports-with-netstat).

    **Important:** As mentioned previously, you should not make this change to the
    `sshd_config` file if your server has a Managed Operations service level.
    These changes could deny Rackspace access to your server.

3.  Test the altered SSH configuration for errors by running the following command:

        sshd -t

If you receive no errors, SSH is now configured to run on a custom port and accept only non-root users that pass a valid SSH key. For these settings to apply and persist, you must restart the SSH service.
However, do not restart the service yet. Restarting SSH now might lock you out of the server, requiring you to use [rescue mode](/support/how-to/rescue-mode) or the [web console](/support/how-to/start-a-console-session) to restore the configuration. You must configure the firewall before restarting the server. We discuss the firewall in the next section.

#### Amend software firewall and restart SSH

**Note:** **RackConnect customers:** To manage firewall rules, use the RackConnect management instead of `iptables` on the server. You shouldn't change the SSH port if you use RackConnect. For more information about firewalls and RackConnect, see
[Managing RackConnect v2.0 network policies](/support/how-to/managing-rackconnect-v20-network-policies).

Each Linux distribution uses a different software firewall solution. In Red Hat Enterprise Linux (RHEL) and CentOS 7, the default firewall is `firewalld`. On Debian and Ubuntu-based distributions, the default firewall solution is Uncomplicated Firewall (UFW). For RHEL and CentOS 6, the default solution is `iptables`. Refer to the following section for your server's OS.

##### RHEL, CentOS 7, and firewalld

1. Open the new SSH port by running the following commands:

        sudo firewall-cmd --permanent --remove-service=ssh
        sudo firewall-cmd --permanent --add-port=2222/tcp
        sudo firewall-cmd --reload

    Replace `2222` with the port that you used for the SSH daemon.

2. Restart the `sshd` service by running the following command:

        sudo systemctl restart sshd

3. Verify that the your custom SSH port opened on the server:

        netstat -plnt | grep ssh

If you followed these steps, you should see something similar to the following output:

        tcp        0      0 0.0.0.0:2222            0.0.0.0:*               LISTEN      1341/sshd           
        tcp6       0      0 :::2222                 :::*                    LISTEN      1341/sshd 


##### Ubuntu, Debian, and UFW

1. Open the new SSH port by running the following commands:

        sudo ufw allow 2222

    Replace `2222` with the port that you used for the SSH daemon.

2. Restart the `sshd` service by running the following command:

        sudo systemctl restart sshd

3. Verify that your custom SSH port opened on the server by running the following command:

        netstat -plnt | grep ssh

If you followed these steps, you should see something similar to the following output:

        tcp        0      0 0.0.0.0:2222            0.0.0.0:*               LISTEN      1341/sshd           
        tcp6       0      0 :::2222                 :::*                    LISTEN      1341/sshd 


##### CentOS 6 and iptables

**Note**: RHEL and CentOS 6 will be marked End of Life in November 2020. For best security practices, we strongly advise that you consider a newer OS version to host your application or website. 

1.  Open the new SSH port by running the following command:

        sudo iptables -I INPUT -m state --state NEW -m tcp -p tcp --dport 2222 -j ACCEPT
        sudo service iptables-save

    Replace `2222` with the port that you used for the SSH daemon.

2.  Run the following command to restart the SSH daemon so that the daemon
    applies the new configuration you set up:

        sudo service sshd restart

3. Verify that your custom SSH port opened on the server by running the following command:

        netstat -plnt | grep ssh

If you followed these steps, you should see something similar to the following output:

        tcp        0      0 0.0.0.0:2222            0.0.0.0:*               LISTEN      1341/sshd           
        tcp6       0      0 :::2222                 :::*                    LISTEN      1341/sshd 



After you make the changes for your OS, open another terminal window on your local machine and log in to the server as the user that you created previously. Remember to specify the newly changed port. Keep your original connection active in case you need to troubleshoot the configuration.

To connect to SSH with the new configuration, you might need to specify the port number and key to use. For example:

        ssh -p 2222 -i ~/.ssh/id_rsa {username}@{remotePublicIPAddress}

The `-p` option specifies the port, and the `-i` option specifies the private key to use for the connection.

If you're connecting from a Windows desktop, when you create the connection in [PuTTY](/support/how-to/connecting-to-linux-from-windows-by-using-putty), you can specify the port number and a private key.

### Simple intrusion prevention

Most would-be intruders run multiple attacks against the same port to try to
find something that they can exploit in the software running on that port.
Fortunately, you can set up an intrusion prevention tool like
[fail2ban](https://www.fail2ban.org/wiki/index.php/Main_Page) on your server to
block repeated attacks on a port.

**Note:** Managed Operations servers have `fail2Ban` installed and configured
by default to watch over SSH login attempts. Contact your Support team if you
have any questions or concerns.

`fail2ban` monitors logs and automatically blocks connections if it sees too many
from the same host in a short period of time. To set up and configure `fail2ban`
on your server, use the following steps:


1.  To install `fail2ban` on your server, run one of the following commands.

    RHEL and CentOS:

        sudo yum install fail2ban

    Debian and Ubuntu:

        sudo apt-get install fail2ban

2.  Use the following command to copy your default `fail2ban` config. The newly created file overrides
    the default config and allows you to modify the file safely.

        sudo cp -pf /etc/fail2ban/jail.conf /etc/fail2ban/jail.local

3.  Modify your file to customize your security level in `fail2ban`.

        vim /etc/fail2ban/jail.local

    In this file, you can set the following options:
    
    -   `ignoreip`: This parameter allows you to specify any IP address that should not be banned. 
    -   `bantime`: This parameter allows you to specify the number of seconds to ban an IP address. 
    -   `findtime`: This parameter checks for indications of `maxretry` triggers in the specified time.
    -   `maxretry`: This parameter sets the number of retries allows before the IP address is banned.

4.  Create a jail file for SSH login attempts.

        vim /etc/fail2ban/jail.d/sshd.local

5.  In the file created, copy and paste the following text:

        [sshd]
        enabled = true
        port = ssh
        #action = firewallcmd-ipset
        logpath = %(sshd_log)s
        maxretry = 3
        bantime = 86400

    These options ban an IP address after three failed attempts to connect via SSH for 24 hours.
    If you know your local IP address, we strongly recommended that you add this IP address in
    the preceding section as an `ignoreip` parameter.

6. Start and enable `fail2ban` on your server by using the following commands: 

    RHEL and CentOS 7 or Debian and Ubuntu:

        sudo systemctl start fail2ban
        sudo systemctl enable fail2ban

    RHEL and CentOS 6:

        sudo service fail2ban start
        sudo chkconfig fail2ban on


### Intrusion detection

An intrusion detection system (IDS) can help an administrator monitor systems
for suspicious activity and possible exploits.  An IDS is more robust than a
prevention tool like `fail2ban` but can be more complicated to set up and
maintain.

A popular open-source IDS is [OSSEC](https://www.ossec.net/). OSSEC maintains
agents on multiple systems that report back to the main server, allowing
investigation of logs and alerts from a potentially compromised server even if
that server is shut down.

If you suspect that a system is already compromised, you can investigate with
procedures such as [checking for backdoors and intruders](/support/how-to/check-for-a-security-compromise-back-doors-and-intruders)
and [rescue mode investigation](/support/how-to/check-for-a-security-compromise-rescue-mode-investigation).

### Keep your OS up to date (patching)

Keeping your kernel, packages, and dependencies up-to-date is very important, especially for security-related modules and packages. Some updates, such as kernel updates, require you to reboot your server. You should schedule maintenances to take place during times that are least disruptive to users because these maintenances cause a short period of downtime. 

**Important**: While keeping your system up to date is of vital importance, ensure that the updates you're applying do not negatively impact your production environment. 

To check for and install updates on Ubuntu operating systems and Debian, run the following commands:

    sudo apt-get update
    sudo apt-get upgrade

To check for and install updates on CentOS, Red Hat, and Fedora systems, run the following command:

    sudo yum update

### Operating system end-of-life

Find out when the Linux distribution release that you are running on
your servers reaches its end-of-life (EOL). When a release reaches its EOL, the
distribution's maintainers no longer support it or supply package updates
through their official repositories. You should plan your migration to a newer
release well before your current release reaches its EOL.

Use the following links to find out when your Linux distribution release is
set to reach its EOL:

-   Ubuntu operating systems: [https://wiki.ubuntu.com/Releases](https://wiki.ubuntu.com/Releases)
-   Red Hat Enterprise Linux (RHEL): [https://access.redhat.com/support/policy/updates/errata/](https://access.redhat.com/support/policy/updates/errata/)
-   CentOS: Same as Red Hat
-   Fedora: [https://fedoraproject.org/wiki/End_of_life](https://fedoraproject.org/wiki/End_of_life)
-   Debian: [https://wiki.debian.org/DebianReleases](https://wiki.debian.org/DebianReleases)


### Account-level security

Although securing your servers is an essential part of operations on the Internet,
securing your account is also necessary. Your account name, password, and API
keys are essential parts of how you interact with the Rackspace Cloud
offerings. Just like any other password or access credentials, you want to keep
them secure. However, you also need to allow your team to take action and perform
necessary tasks.

By using
[Role Based Access Control (RBAC)](/support/how-to/overview-role-based-access-control-rbac),
you can create users and grant permissions to individuals or applications that
are responsible for using various Rackspace services. By leveraging RBAC, you
can give your team and contractors access to only the utilities that they need
and revoke the access if necessary.

Following are some usage scenarios:

-   Give contractors access to set up the environment that you have hired them
    to create, but limit their ability to view or change any credit card
    information or delete your account.
-   Allow your accountant to see the bill but not to delete your servers.
-   Hire a Database administrator (DBA) and give the DBA access to your DBaaS instances.
-   Allow a client to upload files directly to your Cloud Files account.
-   Configure your servers to register and use specific users for your
    monitoring and backup agents that are separate from your admin account.

For more information about RBAC, see the [Role-Based Access Control (RBAC) FAQ](/support/how-to/faq-role-based-access-control-rbac/).
