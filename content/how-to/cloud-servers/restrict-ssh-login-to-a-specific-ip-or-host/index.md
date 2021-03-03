---
permalink: restrict-ssh-login-to-a-specific-ip-or-host/
audit_date: '2021-03-03'
title: 'Restrict SSH login to a specific IP or host'
type: article
created_date: '2021-02-12'
created_by: Pablo Moreno
last_modified_date: '2021-03-03'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to configure a restricted Secure Shell (SSH) login to a server from a particular IP address or hostname.

To achieve this we will use TCP Wrappers since they provide basic traffic filtering of incoming network traffic. Although more complex on the surface, TCP Wrappers essentially use of two files: **/etc/hosts.allow** and **/etc/hosts.deny**.

If the files do not yet exist, they can be created using the following command:

    sudo touch /etc/hosts.{allow,deny}

### Deny all hosts

It is considered best practice to deny all incoming SSH connections. To do that we need to:

1. Open file **/etc/hosts.deny** using a text editor.

        vi /etc/hosts.deny

2. Add the following line to deny all incoming SSH connections to the server.

        sshd: ALL

3. Save and close the file.

That’s it. This will block all ssh access to the host

### Allow IP's

Now, we will configure the IP's with authorization to login using SSH. For that we need to: 

1. Open the file **/etc/hosts.allow** file using a text editor.

        vi /etc/hosts.allow

2. Add the following line to allow the IP of your choice to connect using public SSH. For example to allow network ``172.168.0.21``:

        sshd: 172.168.0.21

3. Save and close the file.

The TCP Wrapper files accept comma-separated list of entries, so you can append addresses to the first entry above.

    sshd: 172.168.0.21, 10.83.33.77, 10.63.152.9, 10.12.100.11, 10.82.192.28

They also accept partial IP addresses as subnets, so you could allow the entire ``172.168.0.0/24`` as:

    sshd: 172.168.0.

Or like so:

    sshd : localhost
    sshd : 192.168.0.
    sshd : 99.151.250.7

You can allow or deny based on IP address, subnet, or hostname. List rules in order of most to least specific.

One thing to keep in mind is that servers based on Linux&reg; Operating Systems will first look at the **hosts.allow** file starting from top to bottom, followed by the **hosts.deny** file. For example, an SSH connection attempt from an IP address in **hosts.allow** will be allowed, even though **hosts.deny** blocks all connections.

With this configuration, any client listed in the **hosts.allow** file will be allowed via SSH and any client not listed will be blocked.

**Note**: SSH daemon does not need to be restarted for changes to take effect.
