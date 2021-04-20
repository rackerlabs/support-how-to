---
permalink: add-a-new-wordpress-user
audit_date:
title: 'Add a new WordPress user'
type: article
created_date: '2021-04-06'
created_by: Alfonso Murillo
last_modified_date: '2021-04-20'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article explains how to add a new user to your WordPress site, as well as
the different user roles available.

**Important**: Rackspace Support does not support WordPress configuration. This
article provides steps as a best-effort solution, but your developers should
review them thoroughly before implementing them to prevent unexpected downtime.

### Adding a new user

1. Log into your WordPress administrator page.
2. In the left sidebar, click on the **Users** option.
3. Look for the **Add new** button at the left top part of the page and click on
   it.
4. Write down the username, email, and password for your new user. You can also
   add their first name, last name, and website.
5. If you check the **Send the new user an email about their account** checkbox,
   the new user will receive its login information through email.
6. On the **Role** section you can select the permissions the new user will have.
   Below we explain the different roles.
7. Click the **Add New User** button.

### User Roles

When you create a new user, the given role will define the permissions the user
will have on the website. The default role is *Administrator*. Here are the
characteristics of the different roles:

- **Super Admin:** this role grants access to the site network administration
  and all other features.
- **Administrator:** grants access to all the administration features within a
  single site.
- **Editor:** allows the user to publish and manage posts, even if the posts
  belong to other users.
- **Author:** this role allows the user to publish and manage its own posts.
- **Contributor:** allows the user to manage their own posts, without the
  capability of publishing them.
- **Subscriber:** this role allows the user only to manage their profile.

As mentioned before, the *Administrator* role is the default for new users. If
you want to change this, go through *Administration Screens -> Settings ->
General*.

### Conclusion

It is important to manage carefully the roles given to new users to keep the
integrity and security of the website, by allowing people to do only what they
are supposed to and avoid mistakes that can generate errors on the contents or
the website itself.
