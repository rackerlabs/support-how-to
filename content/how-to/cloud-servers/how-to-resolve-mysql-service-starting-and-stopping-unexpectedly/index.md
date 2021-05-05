---
permalink: how-to-resolve-mysql-service-starting-and-stopping-unexpectedly
audit_date: '2021-03-11'
title: How to resolve MySQL service starting and stopping unexpectedly
type: article
created_date: '2021-03-11'
created_by: Uriel Amar
last_modified_date: '2021-03-11'
last_modified_by: William Loy
product: Cloud Servers
product_url: cloud-servers
---

This article describes the process of resolving the following MySQL&reg; for Windows&reg; error:

    MySQL service on local computer started and then stopped. Some services stop automatically if they are not in use by other services or programs.

The solution varies depending on your version of MySQL. Attempt the solutions in the order of the following sections.

### Restart the service

Restart the MySQL service by running the following command: 

    mysqld --initialize
  
You need to log in as `root` or use `sudo -i` to run this command.
    
### Reinstall the service

Log in as `root` and reinstall the MySQL service by running the following commands: 

    mysqld --install
    mysqld --initialize 

### Verify the my.ini config file

Certain versions of MySQL add invalid hex values at the beginning of the **my.ini** configuration file.
Deleting the first three hex values using a hex editor should resolve this issue. This occurs because of an
issue with a script line. The line specifies that each file must have a unique ID, which then appends the
byte order to mark the text file.  

If you have a backup of the original **my.ini** file, you can copy the contents of this file and manually
paste them onto the current **my.ini** to resolve this issue.

### Verify the Network Service permissions

You might need to verify that the Network Service has the proper permissions. Use the steps in this section
to verify these permissions are correct:

1. Right-click the **Data** folder.

2. Select **Properties**.

3. Select the **Security** tab.

4. Click **Advanced**.

5. Click **Change Permissions...**.

6. Click **Add...**.

7. Enter `NETWORK SERVICE`.

8. Click **Check Names**.

9. Click **OK**.

10. Select **Full Control**.

### Check for missing default files

It's possible that default files are missing. Use the steps in this section to check for this missing default files:

1. Open the command prompt.

2. Go to the MySQL **bin\** and run the following command:

       mysqld --defaults-file="C:\Program Files\MySQL\MySQL Server 5.0\my.ini" --standalone --console

3. If it specifies a missing default folder, you should create a new default file.
