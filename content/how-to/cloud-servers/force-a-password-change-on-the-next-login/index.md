---
permalink: force-a-password-change-on-the-next-login
audit_date: '2020-09-22'
title: Force a password change on the next login
type: article
created_date: '2020-09-18'
created_by: James Andrade
last_modified_date: '2020-09-22'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to make users change their password on their next login.

You can do this by using either the `chage` (change age) or `passwd` (password) command.

### chage

The following example demonstrates creating a user and using the `chage` command to force a password change:

```
Create user:
~]# useradd testuser1
[root@localhost ~]# passwd testuser1
Changing password for user testuser1.
New password: 
Retype new password: 
passwd: all authentication tokens updated successfully.

Set expiration:
~]# chage -d 0 testuser1

Testing:
~]$ su - testuser1
Password: 
You are required to change your password immediately (administrator enforced)
Current password: 
New password: 
Retype new password: 
[testuser1@localhost ~]$ 
```

### passwd

The following example demonstrates creating a user and using only the `passwd` command to force a password change:

```
Create user:
~]# useradd testuser2
~]# passwd testuser2
Changing password for user testuser2.
New password: 
Retype new password: 
passwd: all authentication tokens updated successfully.

Set expiration:
[root@localhost ~]# passwd -e testuser2
Expiring password for user testuser2.
passwd: Success

Testing:
~]$ su - testuser2
Password: 
You are required to change your password immediately (administrator enforced)
Current password: 
New password: 
Retype new password: 
[testuser2@localhost ~]$ 
```

Either option forcing users to change their password the next time they log in.
