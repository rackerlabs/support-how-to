---
permalink: set-an-archiving-retention-policy/
audit_date: '2018-03-28'
title: Set an Archiving Retention Policy
type: article
created_date: '2018-03-01'
created_by: William Loy
last_modified_date: '2018-03-28'
last_modified_by: William Loy
product: Rackspace Email Archiving
product_url: rackspace-email-archiving
---

This article describes how to set a retention policy in your email archive. This feature can be useful for companies that enact polices that only allow the retention of email records for a certain duration of time.


### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Easy
- **Time needed:** Approximately 10 minutes
- **Tools required:** Cloud Office Control Panel access

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology).


### Set an archive retention policy

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/) by using your Rackspace Cloud Office admin ID and password.
2. Scroll down to the **Domains** section. In the far right column of this section, click **Email Archiving**.

   {{<image src="domains_archive.png" alt="" title="">}}

3. Select the domain for which you want to enable a retention policy, and then click **Manage My Archive**. 

   The dashboard for the domain's archive displays.

   {{<image src="manage_archive.png" alt="" title="">}}

4. In the top right corner, click **Admin**.

   {{<image src="admin_tab.png" alt="" title="">}}

5. In the top navigation bar, click **Policies**.

   {{<image src="policies.png" alt="" title="">}}

6. Check the box to the right of **Enable Retention Policy**. Set the duration that you want items to be retained in the email archive.

    **Warning:** Any items older than the set retention duration will be immediately purged from the archive and be unrecoverable. Items that later exceed the retention duration will also be permanently deleted.

    {{<image src="enable_retention.png" alt="" title="">}}

7. Click **OK** to confirm that you want to implement the retention policy.

    {{<image src="warning.png" alt="" title="">}}

Archive retention polices should be created only for specific reasons. There is no need to keep your archive under a certain data limit should you choose to not have a retention policy.
