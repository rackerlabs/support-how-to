---
permalink: using-sftp-and-scp/
audit_date:
title: 'Using SFTP and SCP'
type: article
created_date: '2021-05-08'
created_by: Jorge Mijangos
last_modified_date: '2021-05-10'
last_modified_by: Jorge Mijangos
product: Cloud Servers
product_url: cloud-servers
---

# Using SFTP and SCP instead of FTP

Per security reasons we do not recommend use ftp due it transfer files in plain text, this means
that some  sniffer can get your data.

In the other hand you can safely use SFTP or SCP
  **SFTP** - Secure File Transfer Protocol
  **SCP**  - Secure copy
Bout use, as per 'secure' name refers, SSH.

By default SCP is available in all Rackspace cloud servers. but you have the scp command available in both places.
OpenSSH package is the one that contents the scp command, to install it on your local machine please do this:

#### **CentOS/RHEL 7** 

 '$ sudo yum install -y openssh-clients'

#### **Ubuntu/Debian**

 '$ sudo apt install -y openssh-client'

To copy files from a remote server, you already have to had an user configured on the server, the syntax is:
 
  'scp user@IPAddress:/path/to/remote/file/  /your/local/machine/path'
  'scp user@hostname:/path/to/remote/file/  /your/local/machine/path'
  
In case you want to copy a file from your local machine to a remote server;

  'scp /path/to/nameOfFile.ext  username@IPAddress:/desire/path'
  'scp /path/to/nameOfFile.ext  username@Hostname:/desire/path' 

Now is the turn for sftp, if you want to configure your server to allow sftp connection, please refers to this link: 
 [Set up SFTP user]
  (https://docs.rackspace.com/support/how-to/set-up-sftp-users-in-linux-based-systems/)

In particular with sftp, you have to be logged in order to upload and download files.
The syntax to log into is as follows:

 'sftp username@IPAddress'
 'sftp username@Hostaname'
 

*Example*
 
 I have a server *"test"* with this IP *"23.253.20.165"*
  
  'test ~]# ifconfig
  eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 23.253.20.165' 
        
 ### **SCP**
   I decided to create these folders:
    '# ll /home/scpuser
       down
       up'
   "down" where are all the images that we can download from the server
   "up"   location were we can upload all of we want.
  
   Now we are going to download the memes from my server to my local machine
    '$ scp -r scpuser@23.253.20.165:/home/scpuser/down /home/mylocaluser/downloads
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
    
   Confirming that there are the images
    '$ ls /home/mylocaluser/downloads/
      Atomos.jpg  Entiendos.gif  MoneyPounds.jpg  Pastel.jpg  Whereis.gif
      Dinero.jpg  figth.jpg      Ordenes.gif      Wee.jpg     whereisMy.gif'
    
   Now I'm going to upload some images to the remote folder *"/home/scpuser/up"* from my local folder *"/home/mylocaluser/memes/up"*
   The content of this folder is:
    
    'shh.png             Eternity.jpg    HomeroNoNo.gif      si.gif Con.jpg  Jaa.jpg 
    masake.gif          Gato.gif        maxresdefault.jpg   Puzzle.JPG      Tree.gif
    GoodFellas2.gif     len.jpg         yes.gif             Nervous.gif     HenpeckedHusband.jpg 
    masa.gif            Numpleanos.jpeg roureright.gif'

    '$ scp -r /home/mylocaluser/memes/up  scpuser@23.253.20.165:/home/scpuser/
      scpuser@23.253.20.165's password: 
      GoodFellas2.gif                                           100% 1423KB   7.6MB/s   00:00    
      HomeroNoNo.gif                                            100% 8291KB  23.3MB/s   00:00    
      yes.gif                                                   100% 1384KB  30.9MB/s   00:00    
      HenpeckedHusband.jpg                                      100%   52KB   1.9MB/s   00:00    
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
   
   Confirm on remote server:
    '# ll /home/scpuser/up/
        -rw-------. 1 scpuser scpuser  192710 Apr 29 16:08 Eternity.jpg
        -rw-------. 1 scpuser scpuser  616277 Apr 29 16:08 Gato.gif
        -rw-------. 1 scpuser scpuser 1457416 Apr 29 16:08 GoodFellas2.gif
        -rw-------. 1 scpuser scpuser   53139 Apr 29 16:08 HenpeckedHusband.jpg
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
        -rw-------. 1 scpuser scpuser 1417531 Apr 29 16:08 yes.gif'

 ### **SFTP**
  I've configured an sftp user on the remote host, it has been jailed at *"/var/www/html/test"*.
  The way to upload and download files to and from the server, respectively, is being inside of the server, Also this process will store it in the local path and download from there too; this means that you have to run sftp connection located on the folder from you are trying to upload files and where you desire to downloaded be stored.
  
  On my local machine I'm on this path
   */home/mylocaluser/sftp*
  
  This path contains  bellow documents:
    '$ ls /home/jorg0782/sftp
      LocalComp.gif  test1.txt  themes.tar.gz 
    
  I'm going to upload all the sftp's content
            
    'sftp]$ sftp sftpuser@23.253.20.165
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
    -rw-r--r--    1 sftpuser sftpuser  4368244 Apr 29 22:21 themes.tar.gz'
  
  Now is the turn to download content from remote server:
    
    'sftp> get Avis.gif
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
    sftp> quit'
   
  FileZilla is used to transfer files between devices with sftp using ssh access.
  In case you want this option please user next link to download the client.
  #### **[FileZilla]**
    (https://filezilla-project.org/download.php?type=client)
  #### **[Install and configure FTP and SFTP by using FileZilla]**
    (https://docs.rackspace.com/support/how-to/install-and-configure-ftp-and-sftp-by-using-filezilla/)
   
We can finish with this, the -r flag on "scp" command is to tell him that do their things recursively.

 
