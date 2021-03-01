---
permalink: working-with-rackspace-intelligence-notification-plans/
audit_date: '2021-03-01'
title: Work with Rackspace Intelligence notification plans
type: article
created_date: '2015-07-16'
created_by: Rose Coste
last_modified_date: '2021-03-01'
last_modified_by: Rose Morales
product: Rackspace Intelligence
product_url: rackspace-intelligence
---

Rackspace Intelligence provides an interface that you can use to create
notification plans that work with your monitoring checks and alarms. You can
define several ways to notify your team members with **Notifications** and
then assemble those notifications into **Notification Plans**.

To create a new notification plan or edit an existing notification plan:

1. Click **Notify** at the top of the Rackspace Intelligence interface.

2. Click **Notification Plans**.

You can sort the list of notification plans by name, number of notifications, or
number of alarms.

Sorting by the number of alarms can help you prioritize follow-up
investigations.

### Create a notification plan

To create a usable notification plan, create the plan and then add at
least one notification to it.

#### Create the plan

1. On the **Notification Plans** page, click **Create Notification** Plan.

2. In the dialog box, type a name for the notification plan and click **Create
   Notification Plan**.

#### Add notifications to the plan

A notification plan must include one or more notifications. You can add existing
plans or create new ones.

1. On the **Notifications** page for the plan, click **Add Notifications**.

2. To add an existing notification to the plan, click the **Select** button next
   to the notification and select at least one level for which you want to activate
   the notification: **Critical**, **Warning**, or **OK**.

3. To create a notification and add it to the plan, perform the following steps:

    1. Click **Create a new notification**.
    2. Enter a name for the notification and choose a
       notification type.
    3. Depending on the type you chose, provide notification
       details, such as an email address or a phone number.
    4. Click **Create and Select Notification**.
    5. Select at least one level for which you want the notification
       activated: **Critical**, **Warning**, or **OK**.

4. Click **Save Notification Plan**.

Your notification plan is saved and displayed on the **Notification Plans**
overview page.

### Edit a notification plan

To edit a notification plan, click the **Actions** menu on the notification plan
**Details** page.

You can perform the following modifications on notification plans:

#### Rename a notification plan

1. From the **Actions** menu on the notification plan details page, select
   **Rename Plan**.

2. In the **Rename Notification Plan** box, type the new name and click
   **Rename**.

#### Change notifications in a notification plan

1. From the **Actions** > **Add Notifications**.

2. Select one or more notifications to add, or click **Create a new
   notification** to create a new notification plan. This article describes both
   options are described under the previous *Add notifications to the plan* section.
   If you want to remove a notification, click **Deselect** beside it.

3. Click **Save Notification Plan**.

#### Delete a notification plan

1. From the **Actions** menu on the notification plan **Details** page, select
   **Delete Plan**.

2. Click **Delete** to permanently delete the plan. Rackspace Intelligence
   permanently deletes the notification plan from the database.
