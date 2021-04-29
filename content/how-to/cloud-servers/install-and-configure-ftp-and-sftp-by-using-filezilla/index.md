---
permalink: install-and-configure-ftp-and-sftp-by-using-filezilla/
audit_date: '2021-02-08'
title: Install and configure FTP and SFTP by using Filezilla
type: article
created_date: '2021-02-16'
created_by: Adriana Navarro
last_modified_date: '2021-02-08'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

**Important**: Disable the File Transfer Protocol (FTP) service because this article
uses the same ports as standard FTP.

### Filezilla installation

1. Download the latest version of `FileZilla&reg; Server` from
   https://filezilla-project.org/download.php?type=server.

2. Under **Select the type of install**, choose **Standard** and click **Next**.
   This installs the Windows&reg; service for FileZilla and the GUI for
   administration.

3. In **Please choose the port**, enter **10050**.

4. Select **Start Server after setup completes**. Then click **Next** and
   **Install**.

### Filezilla configuration

1. Start the **Administration** interface and fill in the following fields:

   - **Host**: Enter `127.0.0.1`, which is localhost.
   - **Port**: Enter `10050`.
   - **Password**: Enter the server password.

2. To set up your server, go to **Edit** > **Settings** > **General Settings** and
   select the following options:

   - **Listen on these ports**: `21`
   - **Connections timeout**: `0`
   - **No Transfer timeout**: `600`
   - **Login timeout**: `60`

3. Under **General Settings** > **Welcome message**, you can set your own
   customized welcome message when the users log in. Make sure to select **Hide
   the message in log** because this might increase the log size.

4. Under **General Settings** > **IP Bindings**, use an asterisk (\*) to bind all
   IP addresses on the local system. If your server has multiple IP addresses
   assigned, provide only the IP that you want to use.

5. Under **General Settings** > **IP Filter**, you can set up your IP Filters. To
   have better control over security, ban all IP addresses and include the IP
   address in the exclude list that you want to connect. Put a space between
   each IP address.

6. Under **Settings** > **Passive mode settings**, set up the port range `3000`
   to `4000`.

7. Set up **Settings** > **Security settings**.

8. Under **Settings** > **Miscellaneous**, select:

   - **Don’t show passwords in message log**
   - **Start minimized**

9. Under **Settings** > **Admin interface settings**, enter `10050` in
   **Port on which the admin interface should listen**.

10. Under **Settings** > **Login**, check the following options to see who connects to your
    server and also to reduce space consumption:

      - **Enable logging to file**
      - **Limit log file size to 100 MB**
      - **Delete old log files after 14 days**

11. Under **Settings** > **Speed limits**, set the download and upload speed
    limits. These limits are global settings, so they take over individual
    user settings.

12. Under **Settings** > **FTP over TLS settings** and check the option:

      - **Enable FTP over TLS support (FTPS)**

         **Note**: You can configure a certificate, private key, and key password here.

13. Under **Settings** >  **Autoban**, select the following option:

      - **Enable automatic bans**

14. Click **OK** to save all the settings.

15. Before connecting, make sure ports `21`, `990`, and `3000-4000` are allowed on
    your firewall.
