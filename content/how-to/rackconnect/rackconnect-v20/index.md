---
permalink: rackconnect-v20
audit_date: '2019-12-16'
title: RackConnect v2.0
type: article
created_date: '2012-08-21'
created_by: Juan Perez
last_modified_date: '2019-12-16'
last_modified_by: Stephanie Fillmon
product: RackConnect
product_url: rackconnect
---

**Previous section:** [Getting RackConnect support](/support/how-to/getting-rackconnect-support)

**Applies to:** RackConnect v2.0

To build a hybrid hosting solution that leverages the security of
dedicated servers with the flexibility and service offerings of the
Rackspace Cloud, you need to use RackConnect to allow the two types of
resources to communicate and work together. Contact your Dedicated
Account Team to get your RackConnect deployment set up. If you are
new to Rackspace, call us at 1 800 961 2888 to open a new dedicated hosting
account and learn more about the capabilities of a hybrid
implementation.

We are no longer deploying new RackConnect v2.0 environments. If you are
interested in using RackConnect, contact your account manager for information
about deploying RackConnect v3.0.

For a collection of recommendations for using RackConnect, see
[RackConnect best practices](/support/how-to/rackconnect-v20-best-practices).

### Associating your Cloud account with your RackConnect configuration

Use the following steps to associate your Cloud account with your
RackConnect configuration:

1.  Ensure that your cloud account is linked to your dedicated account.

    Log in to the [MyRackspace Portal](https://login.rackspace.com/), and
    in the top navigation bar, click **Select a Product > Dedicated Hosting**.
    Then click **Products > Rackspace Cloud > Cloud
    Accounts**. From that screen, you can either link an existing
    account or sign up for a new account.

    {{<image src="MyRack_Link_Cloud_Account.png" alt="" title="">}}

2.  After you have linked an account, you can click the plus
    sign (+) at the right of the account's row to associate the
    account with one of your RackConnect configurations. In most
    cases, you have only one RackConnect configuration.

    {{<image src="MyRack_Associate_with_RC.png" alt="" title="">}}

3.  After establishing the association, Rackspace begins the process of
    validating the provisioning region for both Cloud Servers and Cloud
    Files, checking that it matches the region (or data center location)
    of your dedicated environment. If there are any discrepancies, a
    RackConnect engineer works with you to resolve them. You can track
    the status of these steps by selecting the newly associated Cloud
    account in the RackConnect Management Interface (**Network >
    RackConnect > *yourCloudAccount***) and selecting the
    **Tasks** tab.

4.  Set up your network policies to define the access that you want to
    allow between your cloud servers, your dedicated environment, and
    the Internet. You can do this by selecting the Cloud account under
    the RackConnect Management Interface and selecting the **Network
    Polices** tab (**Network > RackConnect > *yourCloudAccount* >
    Network Policies** tab). You can also use one of the available
    network policy templates to get started.

**Important:** Do not create any servers in your Cloud account until you
receive confirmation that your Cloud account is set up in our automation
system and that your RackConnect configuration implementation is
complete (if this is a new configuration). Any cloud servers created
before these steps are complete will not be able to participate in your
RackConnect configuration unless you save an image of them and rebuild
them after the implementation process is complete. You should also
verify that you have network policies in place to allow traffic to and
from your cloud servers before creating new cloud servers.

### Next step

[Access the RackConnect Management
Interface](/support/how-to/access-the-rackconnect-management-interface)
