---
permalink: force-password-change-upon-next-login/
audit_date:
title: Force Password Change Upon Next Login
type: article
created_date: '2020-09-18'
created_by: James Andrade
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# How to Force Password Change Upon Next Login

In this article, we will show how to make a user change their password upon next login.

There are two ways to do this:

Using chage.

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

Using passwd.

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

As you can see, forcing the user to change their password upon next login is pretty simple! Hope this helps!
