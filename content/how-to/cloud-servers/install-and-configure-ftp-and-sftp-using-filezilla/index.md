---
permalink: install-and-configure-ftp-and-sftp-using-filezilla/
audit_date:
title: Install and Configure ftp and sftp Using Filezilla
type: article
created_date: '2021-02-16'
created_by: Adriana Navarro
last_modified_date:
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

Make sure you don’t have IIS FTP service enabled and running. If you have it running, please disable FTP service as we are going to use the same ports as a standard FTP.

1. Download the latest version of FileZilla Server from https://filezilla-project.org/download.php?type=server

2. Choose Standard install and proceed. This will install the Windows service for FileZilla and the GUI for administration.

3. Start the Administration interface, Connect to 127.0.0.1 which is localhost on Port 10050

4. Setup your server. Have the FTP Secure to listen on port 21

5. Setup your own customised welcome message when the users logs in. Make sure you select to hide the message in log, because this might increase the log size.

6. Bind your IPs. Use * to bind all IP addresses on the local system. If your server has multiple IP addresses assigned, provide only the IP that you want to use.

7. Set up your IP Fileter. To have better control over security, ban all IP addresses and include only the IP address in the exclude list that you want to connect. Separate the IP address with a space.

8. Set up Port Range.

9. Set up Security Settings.

10. Don’t show passwords in message log and start minimized.

11. Set up interface listening port.

12. Enable logging to see who connects and also enable deletion of older log files to reduce space consumption.

13. Set the download and upload speed limits. These limits are global settings, they will take over individual user settings.

14. File transfer compression can be left as is.

15. Enable FTP over TLS

16. Enable Autoban

17. Before connecting make sure port 21, 990 and 3000-4000 are allowed on your firewall.
