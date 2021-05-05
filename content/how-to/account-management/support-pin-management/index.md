---
permalink: support-pin-management
audit_date: '2019-07-09'
title: Support PIN management
type: article
created_date: '2019-07-09'
created_by: Rackspace Support
last_modified_date: '2019-09-05'
last_modified_by: William Loy
product: Account Management
product_url: account-management
---


This article provides instructions for using and updating an account user or contact Support PIN. To review frequently asked questions regarding the new Support PIN system, see [Support PIN FAQ](/support/how-to/support-pin-faq).

**Warning:** Rackspace does not contact customers and ask for their Support PIN under any circumstance. Customers are only required to provide their Support PIN when they initiate the contact with Rackspace.

### Using your Support PIN

The following sections discuss how you can verify your identity with Support, as well as how to view, update, and unlock your Support PIN.

#### Verify your identity with Support

1. Contact the Support team.

2. The Support team requests your Support PIN to verify that you are an account user or contact.

3. After you correctly recite your Support PIN, the Support team proceeds with troubleshooting.

If you do not recall your Support PIN, proceed to [View or edit an account user or contact Support PIN](#view-or-edit-an-account-user-or-contact-support-pin).

If your Support PIN is locked, proceed to [View or edit an account user or contact Support PIN](#view-or-edit-an-account-user-or-contact-support-pin).

#### View or edit an account user or contact Support PIN

1. Log in to [login.rackspace.com](https://login.rackspace.com).

2. Click the **Support** icon in the upper right-hand corner of the home page. This icon is located to the left of your username in the upper right-hand corner.

3. Select **Support PIN** from the drop-down menu.

4. You are now on the user profile page. Scroll to the section labeled **Support PIN**.

    **Note:** You are only able to view or edit the Support PIN of the user or contact you are logged in to the control panel as. You are not able to view or edit the Support PIN of other users or contacts. You can use the [Rackspace API]( https://docs.rackspace.com/docs/cloud-identity/v2/api-reference/phone-pin-operations/#reset-the-phone-pin) to change the Support PIN of another user if you have API access.

5. Click **Show** to view your existing PIN or delete the existing PIN from the PIN field and enter a new one.

A Support PIN must meet the following requirements:

  - It uses the numeric digits 0-9.	 

  - It must be a 6-digit PIN.

  - It cannot have repeating digits within three spaces of each other, as explained in the following examples:	 

    - It can have no more than three repeating numbers. For example, 111 and 121212 are acceptable, but 1111 is not.

    - It can have no more than three sequential numbers. For example, 345 is acceptable, but 3456 is not.

#### Unlock a Support PIN

1. Log in to [login.rackspace.com](https://login.rackspace.com).

2. Click the **Support** icon in the upper right-hand corner of the home page. This icon is located to the left of your username in the upper right-hand corner.

3. Select **Support PIN** from the drop-down menu.

4. You are now on the user profile page. Scroll to the section labeled **Support PIN**.

    **Note:** You are only able to view or edit the Support PIN of the user or contact you are logged in to the control panel as. You are not able to view or edit the Support PIN of other users or contacts. You can use the [Rackspace API]( https://docs.rackspace.com/docs/cloud-identity/v2/api-reference/phone-pin-operations/#reset-the-phone-pin) to change the Support PIN of another user if you have API access.

6. If your Support PIN is locked, you see the message **Support PIN Locked**. Click the **Unlock** link and then click the **Unlock** button on the popup that appears to unlock your Support PIN.

   Note: If you do not have the permissions to unlock the Support PIN, a banner appears telling you which account user or contact is permitted to unlock it.

7. The following success message displays: **Support PIN Unlocked!**

The account user or contact is now able to verify their identity and receive support.
