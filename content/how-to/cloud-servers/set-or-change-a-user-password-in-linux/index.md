---
permalink: set-or-change-a-user-password-in-linux
audit_date: '2020-05-28'
title: 'Set or change a user password in Linux'
type: article
created_date: '2020-05-26'
created_by: John Abercrombie
last_modified_date: '2020-05-28'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

Whether you want to assign a password to a new user or proactively protect your environment by regularly
changing your password, you use the same command&mdash;regardless of which distribution of Linux&reg; you
use.

When you change or set a password, you need to know one detail&mdash;are you changing your password or another
user's? Depending on your answer, the `passwd` command might use an extra parameter.

### Set or change your password

Perhaps your department has a policy that requires you to change your password periodically. You just logged
in to your server and received a notification that you have had the same password for over 90 days. For this
example, your username is TestUser.

To change your password, while logged in to your server as your user, run the following command:

    passwd

When entered without other parameters, the `passwd` command defaults to the current user (the one you are
currently logged in as). The server gives you the following prompts:

    Changing password for TestUser
    (current) UNIX password:
    Enter new UNIX password:
    Retype new UNIX password:
    passwd: password updated successfully

In this example, because you already have a password, the command prompts you for your current password
first to ensure you are the person making this change. No one can change your password while you’re logged in without
your knowledge.

### Set or change another user's password

If you need to change someone else's password, you must run the command as the `root` user. Because the
`root` user is the system administrative user, it can change any user’s password at any time. To change 
the password for User2, add the username after the command as shown in the following example:

    passwd User2
    
or

    sudo passwd User2

Adding the username after the `passwd` command tells the command that you are changing a different user’s
password and not your own. The following prompts display:

    Enter new UNIX password:
    Retype new UNIX password:
    passwd: password updated successfully

After you’ve entered, and reentered, the new password successfully, the password for that user is now changed.
If you changed someone else’s password, you need to share the new password with the user.
