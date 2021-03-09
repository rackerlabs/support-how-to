---
permalink: install-and-configure-ftp-and-sftp-using-filezilla/
audit_date: '2021-02-08'
title: Install and configure FTP and SFTP using Filezilla
type: article
created_date: '2021-02-16'
created_by: Adriana Navarro
last_modified_date: '2021-02-08'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

**Important**: Disable FTP (File Transfer Protocol) service as we are going to
use the same ports as a standard FTP.

### Filezilla installation

1. Download the latest version of FileZilla Server from
   https://filezilla-project.org/download.php?type=server.

2. Choose **Standard** under **Select the type of install** and click **Next**.
   This will install the Windows service for FileZilla and the GUI for
   administration.

3. On **Please choose the port** enter **10050**.

4. Select **Start Server after setup completes** and click **Next** then
   **Install**.

### Filezilla configuration

1. Start the **Administration** interface and fill the following fields:

   - **Host** = 127.0.0.1 which is localhost
   - **Port** = 10050
   - **Password** = Enter the server's password

2. Setup your server. Under **Edit** > **Settings** > **General Settings**
   select the following options:

   - **Listen on these ports** = 21
   - **Connections timeout** = 0
   - **No Transfer timeout** = 600
   - **Login timeout** = 60

3. Under **General Settings** > **Welcome message** you can setup your own
   customized welcome message when the users logs in. Make sure to select **Hide
   the message in log**, because this might increase the log size.

4. Under **General Settings** > **IP Bindings** use an asterisc (*) to bind all
   IP addresses on the local system. If your server has multiple IP addresses
   assigned, provide only the IP that you want to use.

5. Under **General Settings** > **IP Filter** you can set up your IP Filters. To
   have better control over security, ban all IP addresses and include the IP
   address in the exclude list that you want to connect. Separate the IP address
   with a space.

6. Under **Settings** > **Passive mode settings** set up the port range **3000**
   to **4000**.

7. Set up **Settings** > **Security settings**.

8. Under **Settings** > **Miscellaneous** select:

   - **Don’t show passwords in message log**
   - **Start minimized**

9. Under **Settings** > **Admin interface settings** set up the value `10050` in
   **Port on which the admin interface should listen**.

10. Under **Settings** > **Login** check options to see who connects to your
    server and also to reduce space consumption:

      - **Enable logging to file**
      - **Limit log file size to 100 MB**
      - **Delete old log files after 14 days**

11. Under **Settings** > **Speed limits** set the download and upload speed
    limits. These limits are global settings, they will take over individual
    user settings.

12. Under **Settings** > **FTP over TLS settings** and check the option:

      - **Enable FTP over TLS support (FTPS)**

         **Note**: A certificate, private key and key password can be configured
         here.

13. Under **Settings** >  **Autoban** select the option:

      - **Enable automatic bans**

14. Click to **OK** to save all the settings.

15. Before connecting make sure port `21`, `990` and `3000-4000` are allowed on
    your firewall.
