---
permalink: set-or-change-password-in-linux/
audit_date:
title: 'Set or Change a User Password in Linux'
type: article
created_date: '2020-05-26'
created_by: John Abercrombie
last_modified_date:
last_modified_by:
product:
product_url:
---

# How to Set or Change a User Password in Linux

Whether you are creating a new user or proactively protecting your environment by regularly changing your password, you will be utilizing the same command – regardless of the particular distribution of Linux you are using.

When changing or setting a password, there is just one detail you need to know: are you changing your own password or another user’s? Depending on your answer, there is slight difference to how you will utilize the following command:

```sh
passwd
```

# Setting/Changing Your Own Password

Let’s say you’re logging into your server, and you’ve been notified that you have had the same password for over 90 days, and your department has a policy that requires you to change your password. For the purpose of this example, we will use the username ‘TestUser.’ Your username will obviously differ.

In keeping with your department’s policy, you’ll want to log into your server as your user, and run the following command:

```sh
passwd
```

When entered by itself, the passwd command defaults to the current user (the one you are currently logged in as). This is how you change your own password. The server will give you the following prompts:

```sh
Changing password for TestUser
(current) UNIX password:
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```
If you already have a password for your user, as in the case of the above scenario, the command will prompt you for your current password first. This is to ensure that it is indeed you. This way, no one can change your password while you’re logged in without your knowledge.

The only exception to this is if the passwd command is ran as the root user. Since the root user is the system administrative user, it can change any user’s password at any time. As such, you’ll run the passwd command in this manner:

```sh
passwd TestUser
OR
sudo passwd TestUser
```

If you are changing a different user’s password, you’ll place the username after the passwd command. This tells the command that you are changing a different user’s password and not your own. You’ll see the following prompts:

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

After you’ve entered, and re-entered, the new password successfully, the password for that user is now changed. If you’ve changed someone else’s password in this manner, you’ll want to inform that person of his or her new password.

That concludes how to change a password for yourself or someone else in Linux. It is the same command and process on any Linux system.
