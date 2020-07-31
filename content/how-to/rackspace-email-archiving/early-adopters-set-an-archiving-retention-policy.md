---
permalink: early-adopters-set-an-archiving-retention-policy/
audit_date: '2020-07-14'
title: Early Adopters&mdash;Set an Archiving Retention Policy
type: article
created_date: '2019-11-11'
created_by: Joe Brooks
last_modified_date: '2020-07-14'
last_modified_by: Joe Brooks
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

For more information about prerequisite terminology, see [Cloud Office support terminology](/how-to/cloud-office-support-terminology).


### Set an archive retention policy

1. Log in to the [Cloud Office Control Panel](https://cp.rackspace.com/) by using your Rackspace Cloud Office admin ID and password.

2. Scroll down to the **Domains** section. In the far-right column of this section, click **Email Archiving**.

   <img src="{% asset_path rackspace-email-archiving/set-an-archiving-retention-policy/domains_archive.png %}" />

3. Select the domain for which you want to enable a retention policy, and then click **Manage My Archive**.

   The dashboard for the domain's archive displays.

   <img src="{% asset_path rackspace-email-archiving/set-an-archiving-retention-policy/manage_archive.png %}" />

4. In the top-right corner, click the **Gear** icon.


5. In the top navigation bar, click **Policies**.

   <img src="{% asset_path rackspace-email-archiving/set-an-archiving-retention-policy/Set-an-Archiving-Retention-Policy-1.png %}" />

6. After you set the policy, click **Update**.

    **Warning:** Items older than the set retention duration are immediately purged from the archive and are unrecoverable.
    Items that later exceed the retention duration are also permanently deleted.

    <img src="{% asset_path rackspace-email-archiving/set-an-archiving-retention-policy/Set-an-Archiving-Retention-Policy-2.png %}" />

    **Note:** To remove a retention policy, uncheck the **Enable retention policy** box and then click **Update**.
