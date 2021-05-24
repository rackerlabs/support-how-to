---
permalink: rackspace-cloud-essentials-checking-a-server-s-ssh-host-fingerprint-with-the-web-console
audit_date: '2021-05-24'
title: Rackspace Cloud Essentials - Checking the SSH host fingerprint of a server with the web console
type: article
created_date: '2011-05-31'
created_by: Jered Heeschen
last_modified_date: '2021-05-04'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

[Secure Shell (SSH)](/support/how-to/connecting-to-linux-from-windows-by-using-putty) uses a _fingerprint_ that is generated with the unique _host key_ of the server so that a client can identify the server. Whenever the host fingerprint changes, SSH issues a warning stating that _"the host fingerprint can't be verified or it has changed"_.

When you configure the SSH server, the host key generates randomly. The host key identifies the server that you're connecting to, and it is central to the security that SSH provides. If someone sets up a program to intercept a connection and steals the login credentials (a *man in the middle* attack), the SSH client only gives a _"the host key has changed"_ warning.
###  Why the host key might change

Explanations for a changed host key include:

- Recompiling or upgrading SSH. 
- Rebuilding the server.
- Using a different address for the same host.  

**Note:** When your system stores the host key, it records it by address, so even if **localhost** and **127.0.0.1** point to the same server, an SSH client assumes it is a different entry.

However, do not discard the possibility of a **man-in-the-middle** attack, and check the host fingerprint by using the web console of the server without using an SSH connection.
###  Warning: Remote host identification has changed

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

###  Check the SSH fingerprint of your server

It is recommended to write the SSH fingerprint of the server to a file to ensure that you are connecting to the right server, especially when connecting from multiple machines or from unfamiliar computers, such as the desktop or server from a client.

If you don't have the host fingerprint then you can use the web console in the [Cloud Control Panel](https://login.rackspace.com).

The web console lets you connect to your server as if you were connecting from the serial console. Anything that prevents you from connecting with SSH does not interfere with the serial console connection. If you need assistance opening the web console, [see this article](/support/how-to/start-a-console-session).

If you don't have a username and password to use, (if you've disabled
passwords for all accounts, for example) you can use the **Cloud Control
Panel** to reset the root password of the server. Then you can use the new
credentials to log in. 

####  Use ssh-keygen

Once logged into the server, you can obtain the host key fingerprint. Run the **ssh-keygen** command against the public key of the server.


    ssh-keygen -l -f /etc/ssh/ssh_host_rsa_key.pub

The `-l` option lists the fingerprint, and the `-f /etc/ssh/ssh_host_rsa_key.pub` option is the location of the public key file of the host. That location is the default for Linux servers, but you may need to find it in a different location.

The output is similar to the fingerprint your SSH client.

    2048 xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx /etc/ssh/ssh_host_rsa_key.pub (RSA)

The first number indicates the strength of the key (in this case, 2048
bits). The fingerprint follows, along with the location of the key and the type of key (usually RSA).

####  Connect to localhost with SSH

Another way to obtain the public key is to connect to the SSH server by using the SSH client from within the server. Log into the web console and then use the **ssh** command.

    ssh localhost

If you're connecting with SSH to localhost for the first time, you will see a warning. The warning displays the RSA key fingerprint. 

    The authenticity of host 'localhost (::1)' can't be established.
    RSA key fingerprint is xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx.
    Are you sure you want to continue connecting (yes/no)?

If you are not connecting to localhost for the first time, clear the stored key. Go into the **.ssh** directory in your account.

    cd ~/.ssh

Edit the **known_hosts** file:

- Find the line that starts with **localhost**. 
- Delete the line.
- Save the file.

Try the connection again. You should see the fingerprint this time.

**Note**: Write the fingerprint down to keep a record and use it for the remainder of the article.
###  Complete the connection

Compare the obtained fingerprint with the one displaying when you connect remotely to the server. If they are the same, the connection is valid, if not, then disconnect from the network and try the connection from another place or contact your next level of support.
###  Host key has changed

If you got the warning stating that _"the fingerprint didn't match what the client was expecting"_, edit the list of known hosts in the client computer before connecting to the server.
####  Linux&reg; and Mac OS X&reg;

On Linux, Mac OS X, and other Unix&reg;-based operating systems you use the **ssh** command to connect to a server via SSH, and a file named **known_hosts** resides in a directory named **.ssh**. This file contains the known SSH host keys.


    ~/.ssh/known_hosts

You may see a **known_hosts2** file in place of or in addition to **known_hosts**. If both files are there then **known_hosts2** is the file used when you make a connection.

Once you have the file identified:
- Open the file.
- Find the line that starts with the IP address or the domain name of the server. The entry for IP address **1.2.3.4** appears as in the following example.

        1.2.3.4 ssh-rsa AAAAB3NzaC1yc2EAAAABIwGAAQEA2Km5iIlopDndzSTbiaQZq8ynh8RPrvzBJ7dICnvAZWuH/YeNO+9DPnngzsOiYazwRD/CRSGEGRY6tS3GLclFO3Ae370aafbcq...

- Delete the line.
- Save the file.

Next time that you make a connection, check the host fingerprint before completing the connection.
####  Windows&reg; and PuTTY

If you use another program then check your user documentation to find where the client stores its known host keys.

**Note:** You need Administrator rights on the client computer to edit the registry.

**Note:** Edit the registry with caution.

- PuTTY stores its host keys in the Windows registry. To find the known host keys, go to the Windows menu, then enter **regedit** in the **Search** or **Run** box.

- The registry is arranged as a hierarchy of folders. Find the folder:

      HKEY_CURRENT_USER\Software\SimonTatham\PuTTY\SshHostKeys

- There, find one or more entries with names similar to:

       rsa2@22:1.2.3.4

   That key entry is for an RSA version 2 encrypted key at port 22, IP address **1.2.3.4**. With that format in mind, find the entry of the IP address that you're connecting to.

- Right-click the entry and select **Delete** from the contextual menu.  You get a warning that _"Editing the registry can cause problems"_, then confirm the action.

- Exit the registry editor.

- Try the SSH connection. You should get the warning that states that _"The server's host key is unknown"_ along with the fingerprint.

- Ensure that this fingerprint and the one obtained from the web console match before you accept the connection.
###  Summary

This article allows you to obtain the host key fingerprint of a server. Consider to keep the host key fingerprints of the servers that you connect to in a safe place so that you can refer to those keys anytime that you need to rule out a *man-in-the-middle* attack, especially when using multiple clients. See [Basics of security in a Linux system](/support/how-to/basic-cloud-server-security) for further reference.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).

