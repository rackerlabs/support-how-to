---
permalink: manage-ssh-key-pairs-for-cloud-servers-with-python-novaclient
audit_date: '2021-06-28'
title: Manage SSH Key Pairs for cloud servers with python-novaclient
type: article
created_date: '2014-01-29'
created_by: Trey Hoehne
last_modified_date: '2021-06-28'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

The SSH protocol for remotely connecting to servers supports using key
pairs in place of password-based logins. The private key exists on the machine
initiating the connection (usually a workstation), and the public key exists
in a user account on the remote server. When you attempt a connection, the
public and private keys work together to authenticate the user.

Key-pair authentication is more secure than password-based authentication. If
you regularly connect from the same machines, disabling password-based
authentication through SSH and allowing only key-pair authentication protects your
server from brute-force login attempts.

For more information about using SSH to connect to servers, see the following
articles:

 - For information on connecting and generating keys on the Linux&reg; command line
   or macOS&reg; X Terminal, see: [Connecting to a server using SSH on Linux or Mac OS](/support/how-to/connecting-to-a-server-using-ssh-on-linux-or-mac-os).
 - For information on using PuTTY&reg; on Microsoft&reg; Windows&reg; to make SSH connections,
   see: [Connecting to Linux from Windows by using PuTTY](/support/how-to/connecting-to-linux-from-windows-by-using-putty).
 - For information on using PuTTYgen&reg; on Windows to generate key pairs, see:
   [Generating RSA Keys With SSH - PuTTYgen](/support/how-to/generating-rsa-keys-with-ssh-puttygen)

This article discusses using the python-novaclient command-line tool to
generate a key pair and assign its public key to a Linux&reg; server when you
create the server.

You can also manage key pairs directly by using the
[Cloud Servers API](https://docs.rackspace.com/docs/cloud-servers/v2/api-reference/svr-basic-operations#create-a-server-key-pair).

### Prerequisites

Install **python-nova client** on the client computer. To find detailed instructions to configure the client, see
[Using python-novaclient with the Rackspace Cloud](/support/how-to/using-python-novaclient-with-the-rackspace-cloud).

### Create a key pair

The `keypair` command in **python-novaclient** creates or uploads an
existing key pair and associates it with a name that you can then reference 
in build operations.

You can create a new key pair by using the `keypair-add` command for `nova` by
passing a name for the key pair as an argument. The API operation stores the
public key in your user profile. The output of the command is the private key.

For example, to create a key pair named `mykey` and output it to a file in 
the **.ssh** directory of the current user, you can run the following command:

    nova keypair-add mykey > ~/.ssh/webserver_rsa

**Note**: Name the key file any name and put it in a location you can later.
If you generate multiple keys for different servers, it's helpful to name the
key files after the servers.

Only the public key exists in your profile. If you lose the private key, you
must generate a new key pair.

### Upload an existing key

If you already have a generated key pair, you can add the public key to your
profile by using the `keypair-add` command for `nova` with the `--pub-key`
option, as shown in the following example:

    nova keypair-add --pub-key id_rsa.pub mykey

### List keys

To list the keys associated with your profile, use the `keypair-list` command
for `nova`, as shown in the following example:

    nova keypair-list

### Show key details

To see details about a particular public key in your list, use the `keypair-show`
command for `nova`  and reference the name you assigned the key pair, as shown
in the following example:

    nova keypair-show mykey

You can use this command to retrieve your public key for use with another server.

### Delete key

To remove a public key from your profile, use the `keypair-delete` command for
`nova` and reference the name you assigned the key pair, as shown in the
following example:

    nova keypair-delete mykey

### Create a server with an injected key

To create a server the includes a stored public key for the root user, use the
following boot server creation command with the `--key-name` argument:

    nova boot --flavor performance1-1 --image <image-id> --key-name mykey Test_Server

The command response shows your server information, including a
`key_name: mykey` field showing the key associated with that
server.

### Connect to a server with a key pair

After the server you created with a key pair is up and running, you can log in by
using that key pair.

On Linux and macOS, you can add your private key to the your user account **.ssh**
directory, and name your server in the **~/.ssh/config** file, as shown in the
following example:

    Host myservername
    User myuser
    HostName myServerDnsOrIp
    IdentityFile /path/to/appropriate/ssh/rsa/private/key

Or, you can use the `-i` option for `ssh` to identify the private key for a
connection.  For example:

    ssh -i ~/.ssh/webserver_rsa root@server.example.com

### Key pairs and role-based access control (RBAC)

Key pairs are stored for users and not for accounts. Therefore, a user configured on an
account cannot see or manipulate the keys of other users on the account,
regardless of the role assigned to that user.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
