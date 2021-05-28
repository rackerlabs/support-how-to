---
permalink: rackspace-cloud-essentials-check-the-ssh-host-fingerprint-of-a-server-with-the-web-console
audit_date: '2021-05-24'
title: 'Rackspace Cloud essentials: Check the SSH host fingerprint of a server with the web console'
type: article
created_date: '2011-05-31'
created_by: Jered Heeschen
last_modified_date: '2021-05-04'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

[Secure Shell (SSH)](/support/how-to/connecting-to-linux-from-windows-by-using-putty)
uses a *fingerprint* generated with the unique server host key so that a client can
identify the server. Whenever the host fingerprint changes, SSH issues the following
warning: *The host fingerprint can't be verified or it has changed*.

When you configure the SSH server, the host key generates randomly. The host key
identifies the server you're connecting to, and it is central to the security that
SSH provides. If someone sets up a program to intercept a connection and steals the
login credentials (a *man in the middle* attack), the SSH client gives only a
*the host key has changed* warning.

### Why the host key might change

Explanations for a changed host key include:

- Recompiling or upgrading SSH. 
- Rebuilding the server.
- Using a different address for the same host.  

**Note:** When your system stores the host key, it records it by address, so even
if **localhost** and **127.0.0.1** point to the same server, an SSH client assumes
it is a different entry.

However, do not discard the possibility of a **man-in-the-middle** attack, and check
the host fingerprint by using the server web console without using an SSH connection.

### Warning: Remote host identification has changed

Consider this error message:

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
    Someone could be eavesdropping on you right now (man-in-the-middle attack)!
    It is also possible that the RSA host key has just been changed.
    The fingerprint for the RSA key sent by the remote host is
    xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx.
    Please contact your system administrator.
    Add correct host key in /home/demo/.ssh/known_hosts to get rid of this message.
    Offending key in /home/demo/.ssh/known_hosts:15
    RSA host key for 1.2.3.4 has changed and you have requested strict checking.
    Host key verification failed.

The warning means the following: The fingerprint that identifies the SSH
server is different from the last time that you connected to it.

### Check the SSH fingerprint of your server

You should write the SSH fingerprint of the server to a file to ensure that you are
connecting to the right server, especially when connecting from multiple machines or
unfamiliar computers, such as the desktop or server from a client.

If you don't have the host fingerprint, you can use the web console in the
[Cloud Control Panel](https://login.rackspace.com).

The web console lets you connect to your server as if you were connecting from the
serial console. Something that prevents you from connecting with SSH does not
interfere with the serial console connection. If you need assistance opening the web
console, review this [console session article](/support/how-to/start-a-console-session).

If you don't have a username and password to use (if you've disabled passwords for
all accounts, for example), you can use the **Cloud Control Panel** to reset the
root password of the server. Then, you can log in with the new credentials. 

#### Use ssh-keygen

After you log in to the server, you can obtain the host key fingerprint. Run the
following `ssh-keygen` command against the public key of the server:

    ssh-keygen -l -f /etc/ssh/ssh_host_rsa_key.pub

The `-l` option lists the fingerprint, and the `-f /etc/ssh/ssh_host_rsa_key.pub` option
gives the location of the public key file of the host. That location is the default for
Linux&reg; servers, but you might need to find it in a different location.

The output is similar to the fingerprint of your SSH client, as shown in
the following example:

    2048 xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx /etc/ssh/ssh_host_rsa_key.pub (RSA)

The first number indicates the strength of the key (in this case, 2048 bits). The
fingerprint follows, along with the location of the key and the type of key (usually RSA).

#### Connect to localhost with SSH

Another way to obtain the public key is to connect to the SSH server by using the SSH
client from within the server. Log in to the web console and then use the `ssh` command:

    ssh localhost

If you're connecting with SSH to localhost for the first time, you see a warning. The
warning displays the RSA key fingerprint: 

    The authenticity of host 'localhost (::1)' can't be established.
    RSA key fingerprint is xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx.
    Are you sure you want to continue connecting (yes/no)?

If you are not connecting to localhost for the first time, use the following steps to
clear the stored key:

1. Go to the **.ssh** directory in your account:

       cd ~/.ssh

2. Edit the **known_hosts** file, deleting the line that starts with **localhost**. 

3. Save the file.

Try the connection again. You should see the fingerprint this time.

**Note**: Write the fingerprint down to keep a record and use it for the remainder of this article.

### Complete the connection

Compare the obtained fingerprint with the one displaying when you connect remotely to the server.
If they are the same, the connection is valid. If not, then disconnect from the network and try the
connection from another place. If they still differ, contact support.

### Host key has changed

If you get a *the fingerprint didn't match what the client was expecting* warning, use the
following instructions to edit the list of known hosts in the client computer before
connecting to the server.

#### Linux and macOS X

On Linux, macOS&reg; X, and other Unix&reg;-based operating systems, you use the `ssh` command
to connect to a server through SSH. The ` ~/.ssh/known_hosts` file contains the known SSH host keys.

You might see a **known_hosts2** file in place of or in addition to **known_hosts**. If both
files exist, then the system uses **known_hosts2** when you make a connection.

Perform the following steps after you identify the file:

1. Open the file.
2. Find the line that starts with the IP address or the domain name of the server.
   The entry for IP address **1.2.3.4** appears as in the following example:

        1.2.3.4 ssh-rsa AAAAB3NzaC1yc2EAAAABIwGAAQEA2Km5iIlopDndzSTbiaQZq8ynh8RPrvzBJ7dICnvAZWuH/YeNO+9DPnngzsOiYazwRD/CRSGEGRY6tS3GLclFO3Ae370aafbcq...

3. Delete the line.
4. Save the file.

The next time that you make a connection, check the host fingerprint before completing
the connection.

####  Windows and PuTTY

For Windows&reg; servers, consider using PuTTY&reg;. If you use another program,
check your user documentation to find where the client stores its known host keys.

**Note:** You need Administrator rights on the client computer to edit the registry.

**Note:** Edit the registry with caution.

PuTTY stores its host keys in the Windows registry. Perform the following steps
to find the known host keys:

1. Go to the **Windows** menu and enter `regedit` in the **Search** or **Run** box.

2. Windows arranges the registry as a hierarchy of folders, so find the following folder:

       HKEY_CURRENT_USER\Software\SimonTatham\PuTTY\SshHostKeys

3. In the folder, find one or more entries with the IP address of the server you are
   connecting to. The following example shows an RSA version 2 encrypted key at port 22,
   IP address **1.2.3.4**:

       rsa2@22:1.2.3.4

3. Right-click the entry and select **Delete** from the contextual menu. After you get an
   *Editing the registry can cause problems* warning, confirm the action.

4. Exit the registry editor.

When you try the SSH connection, you should get a *The server's host key is unknown* warning
along with the fingerprint. Ensure that this fingerprint and the one obtained from the web
console match before you accept the connection.

###  Summary

This article describes how to obtain the host key fingerprint of a server. Consider keeping
the host key fingerprints of the servers you connect to in a safe place. You can refer to
those keys anytime you need to rule out a *man-in-the-middle* attack, especially when
using multiple clients. See [Basics of security in a Linux system](/support/how-to/basic-cloud-server-security)
for further reference.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).
