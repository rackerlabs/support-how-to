---
node_id: 2165
title: Manage email administrators with the Cloud Office control panel
type: article
created_date: '2012-09-17'
created_by: Rae D. Cabello
last_modified_date: '2016-01-15'
last_modified_by: Kyle Laffoon
product: Rackspace Email
product_url: rackspace-email
---

This article explains how to add, disable, and delete an administrator
through the Cloud Office control panel. An email administrator can
contact support, add mailboxes, and unlock accounts. You can also set
limitations for administrators to see only certain information.

**Note:** Managed and Dedicated customers access contacts and
permissions via the MyRackspace Portal.

-   [Add an administrator](#add)
-   [Delete an admistrator](#delete)
-   [Disable an administrator](#disable)


-

Add an administrator
--------------------

1.  Log into the [Cloud Office control
    panel](https://cp.rackspace.com/ "Email & Apps Control Panel").
2.  In the **My Account** section of the right side of the screen, click
    **Manage Administrators**.
    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/Manage%20email%20administrators%20with%20the%20Cloud%20Office%20control%20panel.jpg" width="138" height="133" />
3.  Click **Add Administrator**.
    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/2_5.png" width="402" height="142" />

4.  Enter the following information for **Admin Settings**:
    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/3_5.png" width="252" height="158" />

-   **Admin ID** - Enter a unique name for the account. If the ID that
    you enter is used elsewhere on the email hosting system, you are
    prompted to enter a new ID.
-   **Type** - Select the level of security for the administrator:
    -   **Super** - Allows full access to the control panel, and
        includes the ability to create and manage
        administrator accounts.
    -   **Standard** - Allows full access to the control panel, but
        restricts the administrator from certain areas of the **My
        Account** section of the control panel. Specifically, standard
        administrators cannot access the [General
        Information](/how-to/general-information-cloud-office-control-panel), [Contacts](/how-to/manage-company-contacts-in-the-cloud-office-control-panel "Company Contacts"),
        [Invoice
        History,](/how-to/view-invoice-history-cloud-office-control-panel "Invoice History")
        Current Admins, or Add Administrator *areas.*They can, however,
        access Administrator Activity and all Support resources.
    -   **Limited** - Allows access to only the control panel areas
        you specify. (You can select the specific areas at the bottom of
        the screen after selecting **Limited**.)
        -   **Password** - Enter a password for this
            administrator account.
        -   **Confirm** - Retype the password.

5.  Enter the following information for **Additional Information:
    **<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/5_4.png" width="248" height="148" />****
    -   **First Name** - Enter the administrator&rsquo;s first name.
    -   **Last Name** - Enter the administrator&rsquo;s last name.
    -   **Email** - Enter the administrator's email address.


6.  Enter in the following information for **Security:**
    -   **Security Question** - Select a security question from the list
        provided
    -   **Security Answer** - Enter the answer to the security
        question.


7.  Enter in the following information for** **Options:****
    <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/7_0.png" width="311" height="180" />
    -   Specify whether the password never expires or expires in a
        specified number of days.
    -   **Allow simultaneous logins using this Administrative ID**
        allows multiple people on different machines to log in using the
        same account.
    -   Selecting **Login restricted to IP address(es)** allows access
        only from certain IP addresses, such as the office or home
        network.


8.  If you selected **Limited** as the type for your newly created
    administrator, perform the following actions at the bottom of the
    tab:
    a.  On the Permission tab, select the check box for each area to
        which this limited administrator should have access. By default,
        limited administrators have access to all domains in the
        account.
    b.  To specify which domains the administrator can access, click
        the **Domain Access** tab.
    c.  Use the **Filter** and **Search** tools to locate the domains
        associated with the account.
    d.  In the **Current Domain**s box, select the domain or domains
        that you want to allow the administrator to access. To select
        multiple domains, hold the Ctrl key as you click each domain.
        Then, click **Add**.
    e.  To select multiple domains, hold the **Ctrl** key as you click
        each domain.
    f.  To remove a domain from the **Access - Allowed** box, click the
        domain and then click **Remove**.


9.  Click Save.

You can email your newly created administrator with the credentials to
log in.



Delete an administrator
---------------------------

Deleting an administrator completely removes the admin user from the
control panel.  If access needs to be granted again, a different Super
Administrator must re-create the user.

To delete an administrator, [log in to the control
panel](https://cp.rackspace.com/), and perform the following steps:

1.  Log in to the [Cloud Office control
    panel](https://cp.rackspace.com/).
2.  At the top of the page, click **My Account**.
3.  In the **Administrators** section, click **Administrators**.
4.  Select the check box next to each administrator that you want
    to delete. If you delete the logged in administrator, you will be
    logged out upon deletion. The account must have at least
    one administrator.
5.  Click **Delete**.
6.  In the confirmation box, click **OK**.

Disable Administrator
-------------------------

Disabling administrators removes their ability to log in to the control
panel, but it keeps their information visible so that they can be
re-enabled in the future.

To disable an administrator, [log in to the control
panel](https://cp.rackspace.com/), and perform the following steps:

1.  Log in to the [Cloud Office control
    panel](https://cp.rackspace.com/),
2.  At the top of the page, click **My Account.**
3.  In the **Administrators** section, click **Administrators**.
4.  In the **Action** column for the administrator, click
    **Disable**.
    **Note**: You can reverse this action by clicking **Enable.**
5.  In the confirmation pop-up box, click **Delete \# Administrator**.
    (The **\#** corresponds to the number of administrators that you
    have selected for deletion.)



