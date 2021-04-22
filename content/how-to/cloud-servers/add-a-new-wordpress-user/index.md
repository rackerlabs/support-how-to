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

This article explains how to add a new user to your WordPress&reg; site and
describes the different user roles available.

**Important**: Rackspace Support does not support WordPress configuration. This
article provides steps as a best-effort solution, but your developers should
review them thoroughly before implementing them to prevent unexpected downtime.

### Add a new user

1. Log in to your WordPress administrator page.
2. In the left sidebar, click on the **Users** option.
3. Click the **Add new** button in the page's upper-left corner.
4. Write down the username, email, and password for your new user. You can also
   add their first name, last name, and website.
5. If you check the **Send the new user an email about their account** checkbox,
   the new user receives an email with login information.
6. In the **Role** section, you can select the permissions for the new user.
   See the following section for the different role explanations.
7. Click the **Add New User** button.

### User Roles

When you create a new user, the role you assign defines the website permissions the user
has. The default role is *Administrator*. Here are the characteristics of the different roles:

- **Super Admin:** Grants access to the site network administration
  and all other features.
- **Administrator:** Grants access to all the administration features within a
  single site.
- **Editor:** Allows users to publish and manage posts, even if the posts
  belong to other users.
- **Author:** Allows users to publish and manage their own posts.
- **Contributor:** Allows users to manage their own posts but not to publish them.
- **Subscriber:** Allows users to manage only their profile.

Remember, the *Administrator* role is the default for new users. If
you want to change this, navigate to **Administration Screens -> Settings ->
General**.

### Conclusion

It is important to manage carefully the roles given to new users. Keep the website's
integrity and security by allowing people to do only what they are supposed to and
avoid mistakes that can generate errors with the content or the website itself.
