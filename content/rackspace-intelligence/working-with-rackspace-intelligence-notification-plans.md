---
node_id: 4745
title: Working with Rackspace Intelligence notification plans
type: article
created_date: '2015-07-16'
created_by: Rose Coste
last_modified_date: '2016-01-21'
last_modified_by: Rose Contreras
product: Rackspace Intelligence
product_url: rackspace-intelligence
---

Rackspace Intelligence provides an interface that you can use to create
notification plans that work with your monitoring checks and alarms. You
can define several ways to notify members of your team (notifications)
and then assemble those notifications into notification plans.

To [create a new notification plan](#createnotificationplan) or [edit an
existing notification plan](#editnotificationplan), click **Notify** at
the top of the Rackspace Intelligence interface and then click
**Notification Plans**.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/4745.1a_0.png" width="704" height="276" />

You can sort the list of notification plans by name, number of
notifications, or number of alarms.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/4745.2_0.png" width="93" height="197" />

Sorting by the number of alarms can help you prioritize follow-up
investigations.

### Create a notification plan

1.  On the **Notification Plans** page, click **Create
    Notification** Plan.
2.  In the dialog box, type a name for the notification plan and
    click **Create Notification Plan**.
3.  On the **Notifications** page for the plan, click **Add
    Notifications**.
    To create a notification plan, you need to add one or
    more notifications. You can add existing ones, or create new ones.
4.  To add an existing notification, click the **Select** button next to
    the notification, and then select at least one level for which the
    notification will be activated (Critical, Warning, or OK).
5.  To add a new notification, perform the following steps:
    1.  Click **Create a new notification**.
    2.  Enter a name for the notification and choose a
        notification type.
    3.  Depending on the type that you chose, provide notification
        details, such as an email address or a phone number.
    4.  Click **Create and Select Notification**.
    5.  Select at least one level for which the notification will be
        activated (Critical, Warning, or OK).

6.  Click **Save Notification Plan**.

Your notification plan is saved and displayed on the **Notification
Plans** overview page.

### Edit a notification plan

To edit a notification plan, click the **Actions** menu on the
notification plan details page.

You can perform the following modifications on notification plans:

-   [Rename a notification plan](#renamenotificationplan)
-   [Change notifications to a notification
    plan](#addnotificationstonotificationplan)
-   [Delete a notification plan](#deletenotificationplan)

### Rename a notification plan

1.  From the **Actions** menu on the notification plan details page,
    select **Rename Plan**.
2.  In the **Rename Notification Plan** box, type the new name, and then
    click **Rename**.

### Change the notifications in a notification plan

1.  From the **Actions** menu on the notification plan details page,
    select **Add Notifications**.
2.  In the dialog box, select one or more notifications to add, or
    click **Create a new notification** and follow the instructions in
    step 5 of [Cr]()[reate a new notification
    plan](#createnotificationplan). If you want to remove a
    notification, click **Deselect** beside it.
3.  Click **Save Notification Plan**.

### Delete a notification plan

1.  From the **Actions** menu on the notification plan details page,
    select **Delete Plan**.
2.  Click **Delete** to permanently delete the plan.
    Rackspace Intelligence permanently deletes the notification plan
    from the database.



