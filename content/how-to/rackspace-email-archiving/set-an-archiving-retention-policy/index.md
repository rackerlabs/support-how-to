---
permalink: set-an-archiving-retention-policy
audit_date: '2020-07-14'
title: Set an Archiving Retention Policy
type: article
created_date: '2019-11-11'
created_by: Joe Brooks
last_modified_date: '2020-11-09'
last_modified_by: Stephanie Fillmon
product: Rackspace Email Archiving
product_url: rackspace-email-archiving
---

This article describes how to set a retention policy in your email archive. You can use this feature to enact policies
that allow the system to retain email records for a certain duration.

**Note**: New archives created after June 24, 2020, have a default retention policy of 7 years. You can modify
this policy through the **Archive Portal**.


### Prerequisites

- **Applies to:** Administrator
- **Difficulty:** Easy
- **Time needed:** Approximately 5 minutes
- **Tools required:** Archive Portal access

For more information about prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).


### Set an archive retention policy

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/) by using your Rackspace Cloud Office admin ID and password.

2. Scroll down to the **Domains** section. In the far-right column of this section, click **Email Archiving**.

   {{<image src="domains_archive.png" alt="" title="">}}

3. Select the domain for which you want to enable a retention policy, and then click **Manage My Archive**.

   The dashboard for the domain's archive displays.

   {{<image src="manage_archive.png" alt="" title="">}}

4. In the top-right corner, click the **Gear** icon.


5. In the top navigation bar, click **Policies**.

   {{<image src="Set-an-Archiving-Retention-Policy-1.png" alt="" title="">}}

6. After you set the policy, click **Update**.

    **Warning:** Items older than the set retention duration are immediately purged from the archive and are unrecoverable.
    Items that later exceed the retention duration are also permanently deleted.

    {{<image src="Set-an-Archiving-Retention-Policy-2.png" alt="" title="">}}

    **Note:** To remove a retention policy, uncheck the **Enable retention policy** box and then click **Update**.
