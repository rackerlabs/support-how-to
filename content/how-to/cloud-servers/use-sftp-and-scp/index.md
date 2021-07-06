---
permalink: use-sftp-and-scp/
audit_date:
title: 'Use SFTP and SCP'
type: article
created_date: '2021-05-08'
created_by: Jorge Mijangos
last_modified_date: '2021-07-07'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

Secure File Transfer Protocol (SFTP) and Secure Copy (SCP) use Secure Shell
(SSH) to transfer files. We recommend using these protocols instead of the
FTP protocol, which transfers files in plain text.

### Install and use SCP

By default, SCP is available for all Rackspace&reg; Cloud Servers. Use the
OpenSSH package to install SCP if the **scp** command does not exist on
your Linux&reg; computer.

To install SCP on **CentOS&reg;** and **Red Hat&reg; Enterprise Linux 7**: 

    $ sudo yum install -y openssh-clients

To install SCP on **Ubuntu&reg;** and **Debian&reg;**:

    $ sudo apt install -y openssh-client

Configure a user on a remote server and use the following command to
copy files to the remote server, where `remoteserver` is the IP address or
hostname of the remote server:
 
    $ scp username@remoteserver:/path/to/remote/directory/ /path/to/local/machine/directory

Use the following command to copy a file from your local machine to the remote server:

    $ scp /path/to/filename.ext  username@remoteserver:/destination/path'
  
### SCP connection and commands
 
 You can use SCP to upload and download files and images. 
 
#### Upload and download files

The `ll` command shows the directories under the **scpuser** home directory:
              
    # ll /home/scpuser
     down
     up
  
You can download files from the **down** directory of the server and upload
files to the **up** directory of the server. 
  
To download files from the server to a local machine, use the following command:

    $ scp -r scpuser@23.253.20.165:/home/scpuser/down /home/mylocaluser/downloads

Example response:

    scpuser@23.253.20.165's password: 
    Atomos.jpg                                              100%   19KB    297.7KB/s   00:00    
    Dinero.jpg                                              100%   50KB 801.9KB/s   00:00    
    Entiendos.gif                                           100%   41KB   1.2MB/s   00:00    
    figth.jpg                                               100%  154KB   2.4MB/s   00:00    
    MoneyPounds.jpg                                         100%   37KB   1.2MB/s   00:00    
    Ordenes.gif                                             100%  191KB   3.0MB/s   00:00    
    Pastel.jpg                                              100%   23KB 715.0KB/s   00:00    
    Wee.jpg                                                 100% 9279   289.0KB/s   00:00    
    Whereis.gif                                             100%  738KB   5.1MB/s   00:00    
    whereisMy.gif                                           100%  525KB   4.9MB/s   00:00'    
    
#### List and upload images

List the images in the local machine:

    $ ls /home/mylocaluser/downloads/
        
Example response:  

    Atomos.jpg      Entiendos.gif    MoneyPounds.jpg    Pastel.jpg  Whereis.gif     Dinero.jpg       figth.jpg          Ordenes.gif      Wee.jpg         whereisMy.gif    shh.png            Eternity.jpg    HomeroNoNo.gif  si.gif           Con.jpg            Jaa.jpg 
    masake.gif      Gato.gif         maxresdefault.jpg  Puzzle.JPG      Tree.gif        GoodFellas2.gif  len.jpg            yes.gif             Nervous.gif      Husband.jpg        masa.gif             Numpleanos.jpeg  roureright.gif

To upload images from the local machine to the server, use the following command:

    $ scp -r /home/mylocaluser/memes/up  scpuser@23.253.20.165:/home/scpuser/

Example response:

    scpuser@23.253.20.165's password: 
    GoodFellas2.gif                                           100% 1423KB   7.6MB/s   00:00    
    HomeroNoNo.gif                                            100% 8291KB  23.3MB/s   00:00    
    yes.gif                                                   100% 1384KB  30.9MB/s   00:00    
    Husband.jpg                                               100%   52KB   1.9MB/s   00:00    
    shh.png                                                   100%  102KB   3.7MB/s   00:00    
    Eternity.jpg                                              100%  188KB   5.7MB/s   00:00    
    masa.gif                                                  100%  941KB  24.8MB/s   00:00    
    Numpleanos.jpeg                                           100%   12KB 493.3KB/s   00:00    
    len.jpg                                                   100%  103KB   3.7MB/s   00:00    
    maxresdefault.jpg                                         100%  134KB   4.9MB/s   00:00    
    roureright.gif                                            100%  646KB  17.2MB/s   00:00    
    masake.gif                                                100% 1876KB  33.2MB/s   00:00    
    si.gif                                                    100% 2098KB  34.5MB/s   00:00    
    Puzzle.JPG                                                100%    0     0.0KB/s   00:00    
    Tree.gif                                                  100% 1603KB  29.3MB/s   00:00    
    Jaa.jpg                                                   100%   20KB 794.5KB/s   00:00    
    Nervous.gif                                               100%  190KB   6.6MB/s   00:00    
    Gato.gif                                                 100%  602KB   17.7MB/s   00:00'    
   
Confirm the files on the remote server:
    
    # ll /home/scpuser/up/
        -rw-------. 1 scpuser scpuser  192710 Apr 29 16:08 Eternity.jpg
        -rw-------. 1 scpuser scpuser  616277 Apr 29 16:08 Gato.gif
        -rw-------. 1 scpuser scpuser 1457416 Apr 29 16:08 GoodFellas2.gif
        -rw-------. 1 scpuser scpuser   53139 Apr 29 16:08 Husband.jpg
        -rw-------. 1 scpuser scpuser 8490279 Apr 29 16:08 HomeroNoNo.gif
        -rw-------. 1 scpuser scpuser   20333 Apr 29 16:08 Jaa.jpg
        -rw-------. 1 scpuser scpuser  105205 Apr 29 16:08 len.jpg
        -rw-------. 1 scpuser scpuser  963122 Apr 29 16:08 masa.gif
        -rw-------. 1 scpuser scpuser 1921270 Apr 29 16:08 masake.gif
        -rw-------. 1 scpuser scpuser  136948 Apr 29 16:08 maxresdefault.jpg
        -rw-------. 1 scpuser scpuser  194803 Apr 29 16:08 Nervous.gif
        -rw-------. 1 scpuser scpuser       0 Apr 29 16:08 Puzzle.JPG
        -rw-------. 1 scpuser scpuser  661552 Apr 29 16:08 roureright.gif
        -rw-------. 1 scpuser scpuser  104672 Apr 29 16:08 shh.png
        -rw-------. 1 scpuser scpuser 2148311 Apr 29 16:08 si.gif
        -rw-------. 1 scpuser scpuser 1641671 Apr 29 16:08 Tree.gif
        -rw-------. 1 scpuser scpuser 1417531 Apr 29 16:08 yes.gif

**Note:** The `-r` flag on the `scp` command copies directories recursively.

### SFTP configuration

To connect to a server with SFTP to upload or download files, use the following command,
where `remoteserver`is the IP address or hostname of the remote server:

    $ sftp username@remoteserver

To find the IP address of a server, use the `ipconfig` command. In the following
example, the server hostname is **test** has an IP address of **23.253.20.165**: 
 
    [test ~]# ifconfig
    eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
    inet 23.253.20.165

Refer to our [configure an SFTP user](https://docs.rackspace.com/support/how-to/set-up-sftp-users-in-linux-based-systems/)
article for more guidance.

### SFTP connection
  
Perform the following steps to set up an SFTP connection:

1. Configure an SFTP user on the remote host.

2. *Jail* the user in a directory, such as **/var/www/html/test**.

3. Change to the directory in the local machine where you plan to upload or download files.

4. Log in to the remote SFTP server.

For example:

1. Change to the directory on the local machine:
  
       $ cd /home/mylocaluser/sftp
       
2. List the files in the directory:

       $ ls /home/jorg1234/sftp
          LocalComp.gif  test1.txt  themes.tar.gz 
    
3. Upload the contents of the local directory to the remote server:
            
       [sftp]$ sftp sftpuser@23.253.20.165
       sftpuser@23.253.20.165's password: 
       Connected to 23.253.20.165.
       sftp> ls
       public  
       sftp> cd public/
       sftp> ls
       Avis.gif Boock.jpg  Good.png   Sleep.jpg   test                   
       sftp> put LocalComp.gif
       Uploading LocalComp.gif to /public/LocalComp.gif
       LocalComp.gif                                               100%   92KB      650.1KB/s   00:00    
       sftp> put test1.txt
       Uploading test1.txt to /public/test1.txt
       test1.txt                                                        100%    8     0.2KB/s   00:00    
       sftp> put themes.tar.gz
       Uploading themes.tar.gz to /public/themes.tar.gz
       themes.tar.gz                                                    100% 4266KB   9.7MB/s   00:00    
       sftp> ls -al
       drwxr-xr-x    3 sftpuser root          250 Apr 29 22:21 .
       drwxr-xr-x    3 root     root           20 Apr 28 01:40 ..
       -rw-r--r--    1 sftpuser sftpuser    93816 Apr 28 02:09 Avis.gif
       -rw-r--r--    1 sftpuser sftpuser    34834 Apr 28 02:09 Boock.jpg
       -rw-r--r--    1 sftpuser sftpuser   113722 Apr 28 02:09 Good.png
       -rw-------    1 sftpuser sftpuser    16662 Apr 28 02:22 Sleep.jpg
       -rw-------    1 sftpuser sftpuser    93816 Apr 29 22:15 LocalComp.gif
       -drwxr-xr-x    2 sftpuser sftpuser        6 Apr 28 02:13 test
       -rw-------    1 sftpuser sftpuser        8 Apr 29 22:21 test1.txt
       -rw-r--r--    1 sftpuser sftpuser  4368244 Apr 29 22:21 themes.tar.gz
  
4. Download the content from the remote server to the local directory:
    
       sftp> get Avis.gif
       Fetching /public/Avis.gif to Avis.gif
       /public/Avis.gif                                          100%   92KB 518.3KB/s   00:00    
       sftp> get Boock.jpg
       Fetching /public/Boock.jpg to Boock.jpg
       /public/Boock.jpg                                              100%   34KB 241.2KB/s   00:00    
       sftp> get Good.png
       Fetching /public/Good.jpg to Good.jpg
       /public/Good.jpg                                              100%  111KB 520.6KB/s   00:00    
       sftp> get Sleep.jpg
       Fetching /public/Sleep.jpg to Sleep.jpg
       /public/Sleep.jpg                                             100%   16KB 153.3KB/s   00:00    
       sftp> get -r test
       Fetching /public/test/ to test
       Retrieving /public/test
       sftp> ls -al
       drwxr-xr-x    3 sftpuser root          250 Apr 29 22:21 .
       drwxr-xr-x    3 root     root           20 Apr 28 01:40 ..
       -rw-r--r--    1 sftpuser sftpuser    93816 Apr 28 02:09 Avis.gif
       -rw-r--r--    1 sftpuser sftpuser    34834 Apr 28 02:09 Boock.jpg
       -rw-r--r--    1 sftpuser sftpuser   113722 Apr 28 02:09 Good.png
       -rw-------    1 sftpuser sftpuser    16662 Apr 28 02:22 Sleep.jpg
       -rw-------    1 sftpuser sftpuser    93816 Apr 29 22:15 LocalComp.gif
       drwxr-xr-x    2 sftpuser sftpuser        6 Apr 28 02:13 test
       -rw-------    1 sftpuser sftpuser        8 Apr 29 22:21 test1.txt
       -rw-r--r--    1 sftpuser sftpuser  4368244 Apr 29 22:21 themes.tar.gz
       sftp> quit

### FileZilla
   
You can use FileZilla&reg; to transfer files between machines with SFTP by using SSH access.

You can use the following docuemnts to download and use FileZilla:

- [FileZilla](https://filezilla-project.org/download.php?type=client)
  
- [Install and configure FTP and SFTP by using FileZilla](support/how-to/install-and-configure-ftp-and-sftp-by-using-filezilla)
   

 Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
