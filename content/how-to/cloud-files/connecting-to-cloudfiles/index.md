---
permalink: connecting-to-cloudfiles/
audit_date: '2021-03-30'
title: Connecting to Cloud Files
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2021-03-30'
last_modified_by: Carlos Arriaga
product: Cloud Files
product_url: cloud-files
---

Rackspace Technology Cloud Servers can connect to Cloud Files without accruing
bandwidth charges when the server and the Cloud Files account are in the
same data center. This connection uses the internal IP
address that your server comes with on the internal Rackspace network,
ServiceNet.

If you are not familiar with Cloud Files, see the [product information](https://www.rackspace.com/cloud/files).

To view or download the Cloud Files API documentation, go to the
[Cloud Files Developer Guide](https://docs.rackspace.com/docs/cloud-files/v1/).
You can also access the documentation and some code samples from the
[Cloud Files Quick Start](https://docs.rackspace.com/docs/cloud-files/quickstart/).
Code samples are available for PHP, Python, and Java.

To connect, you must use the internal network hostname. The hostname is the
Cloud Files storage URL with **snet-** prepended to it. Be
aware that even though you are not charged for bandwidth when you use
ServiceNet to connect, you are still charged for requests and
storage.

You can locate your Cloud Server data center in the following
ways:

-   **[Cloud Control Panel](https://login.rackspace.com/)**: On the
    main **Cloud Files** page in the Cloud Control Panel, locate your Cloud Files
    data center in the **Region** column.
-   **Through the API**: You can find your Cloud Files data center in
    the storage URL that is part of the reposnse when you authenticate to
    Cloud Files. For more information, see
    [Retrieving the Authentication Token](https://docs.rackspace.com/docs/cloud-files/v1/developer-guide/#document-getting-started/authenticate).

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/). 
