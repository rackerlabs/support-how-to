---
permalink: how-to-resolve-mysql-service-starting-and-stopping-unexpectedly/
audit_date:
title: How to Resolve MySQL Service Starting and Stopping Unexpectedly
type: article
created_date: '2021-03-05'
created_by: Uriel Amar
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

This article describes the process of resolving the 'MySQL service on local computer started and then stopped. Some services stop automatically if they are not in use by other services or programs' error for Windows servers using MySQL services.  This is a complex error as solutions often vary with each version of MySQL.  If the below steps do not resolve this issue, 

### Restart the service

- Run the command 'mysqld --initialize' to start the service.  You will need to be logged in as root or use 'sudo -i' to run this command.
    
### Reinstall the service

- Run the command 'mysqld --install' to install the service.  Then run 'mysqld --initialize' as per the steps above.  You will need to be logged in as root or use 'sudo -i' to run this command.

### Verify the my.ini config file

- Certain versions of MySQL add invalid hex values on the beginning of the file.  Deleting the first three hex values using a hex editor should resolve this issue.  This is due to an issue with a script line which specifies that each file must have a unique ID which then appends the byte order to mark the text file.  
- If you have a backup of the original my.ini file, you can copy the contents of this file and manually paste them onto the current my.ini to resolve this issue.


### Verify Network Service permissions

1. Right-click Data folder

2. Select Properties

3. Select Security tab

4. Click Advanced

5. Click Change Permissions...

6. Click Add...

7. Type NETWORK SERVICE

8. Click Check Names

9. Click OK

10. Select Full Control


### Check for missing default files

1. Open command prompt 

2. Go to the MySQL bin\ and run the following command: 'mysqld --defaults-file="C:\Program Files\MySQL\MySQL Server 5.0\my.ini" --standalone --console'

3. If it specifies a missing default folder, create a new file.  This should resolve the issue.
