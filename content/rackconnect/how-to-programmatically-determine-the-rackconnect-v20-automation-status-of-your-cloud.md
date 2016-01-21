---
node_id: 3071
title: How to programmatically determine the RackConnect v2.0 Automation Status of your Cloud Servers
type: article
created_date: '2012-10-02'
created_by: Juan Perez
last_modified_date: '2016-01-21'
last_modified_by: Kelly Holcomb
product: RackConnect
product_url: rackconnect
---

**Applies to**: RackConnect v2.0

Programmatically querying the RackConnect Automation status of your
Cloud Servers can help you determine when a new Cloud Server build has
completed the RackConnect Automation process and is fully 'Deployed'
with RackConnect. RackConnect Automation status and enabled features can
be determined programmatically using the RackConnect API or the Cloud
Servers API.

### Using the RackConnect API

The RackConnect API can be used to query RackConnect Automation status
from any of your Cloud Servers. It also allows you to query the
RackConnect Gateway IP, Automation Status, Automation Status Details,
and the Automation Features. If you would like to utilize the
RackConnect API, please view the following article for further
details: [The RackConnect
API](/how-to/the-rackconnect-v20-api).

### Using the Next Generation Cloud Servers API to query your Cloud Servers' MetaData

You may also use the Cloud Servers API to query the RackConnect
Automation Status of your Cloud Servers. The benefits of using this
method are that you do not need to query the status from within the same
Cloud Server you would like the status of. To utilize this method, query
the Cloud Servers API and look for the metadata key named
&ldquo;**rackconnect\_automation\_status**&rdquo; on any of your Cloud Servers. The
value of the &ldquo;rackconnect\_automation\_status&rdquo; metadata key will be the
current automation status of your Cloud Server in RackConnect (accurate
within a few seconds after each change). The automation status is in the
form of &ldquo;DEPLOYING, DEPLOYED, FAILED, or UNPROCESSABLE.&rdquo;  The "metadata"
entries will now also show what RackConnect Automation Features are
currently enabled on your account and consist of the following keys:
"**rackconnect\_automation\_feature\_configure\_network\_stack**",
"**rackconnect\_automation\_feature\_manage\_software\_firewall**", and
"**rackconnect\_automation\_feature\_provison\_public\_ip**".

Here is an example of the metadata keys/values now available for
RackConnect:

    "metadata": {
    "rackconnect_automation_feature_configure_network_stack": "ENABLED",
    "rackconnect_automation_feature_manage_software_firewall": "ENABLED",
    "rackconnect_automation_feature_provison_public_ip": "ENABLED",
    "rackconnect_automation_status": "DEPLOYED"
    },

**Note**: The "UNPROCESSABLE" status normally occurs when you build a
cloud server in a region that does not match your RackConnect
Configuration region.

#### Obtaining the metadata information via the next-generation Cloud Servers API (Examples)

**Authenticate and obtain an Auth Token:**

You will first need to Authenticate and obtain an Auth Token. The
following curl command is one way of accomplishing this. You will need
to enter the command with your Rackspace Cloud account's password and
username credentials in the &lt;Cloud UserName&gt; and &lt;Cloud
Password&gt; fields:

    curl -s https://identity.api.rackspacecloud.com/v2.0/tokens -X 'POST' -d '{"auth":{"passwordCredentials":{"username":"<Cloud UserName>", "password":"<Cloud Password>"}}}' -H "Content-Type: application/json" | python -m json.tool

The results for running this query will display a "token" section, and
you will need to copy the "id" value.  The auth token "id" will look
similar to the following:

    "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx"



**Show details for a standard or workload-optimized Cloud Server to view
the "metadata" values:**

Using the auth token, you can query a Cloud Server's details, in order
to view the RackConnect metadata keys related to RackConnect. The
following curl command is one way of accomplishing this. You will need
to enter the command with your Cloud Account's Number, the Server ID of
the Cloud Server you'd like to query, and the Auth Token obtained in the
previous step. These values will be entered into the &lt;Cloud Account
Number&gt;, &lt;Server ID&gt;, and XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
fields.

    curl -s https://ord.servers.api.rackspacecloud.com/v2/<Cloud Account Number>/servers/<Server ID> -H "X-Auth-Token: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx" | python -m json.tool

**Note**: Do not include the &lt; &gt; brackets when entering your
values.

This is just a brief introduction to get you started on using the Cloud
Servers API to query the RackConnect statuses of your Cloud Servers; if
you require further information on the Cloud Servers API, please view
the following articles:

<http://docs.rackspace.com/api/>

<http://docs.rackspace.com/servers/api/v2/cs-gettingstarted/content/curl_summary.html>

### Using the First Generation Cloud Servers API to query your Cloud Servers' MetaData

You may also use the First Generation Cloud Servers API to query the
RackConnect Automation Status of First Generation Cloud Servers. The
benefits of using this method are that you do not need to query the
status from within the same Cloud Server you would like the status of.
To utilize this method, query the First Generation Cloud Servers API and
look for the metadata key named &ldquo;**rackconnect\_automation\_status**&rdquo; on
any of your First Generation Cloud Servers. The value of the
&ldquo;rackconnect\_automation\_status&rdquo; metadata key will be the current
automation status of your Cloud Server in RackConnect (accurate within a
few seconds after each change). The automation status is in the form of
&ldquo;DEPLOYING, DEPLOYED, or FAILED.&rdquo;  The "metadata" entries will now also
show what RackConnect Automation Features are currently enabled on your
account and consist of the following keys:
"**rackconnect\_automation\_feature\_configure\_network\_stack**",
"**rackconnect\_automation\_feature\_manage\_software\_firewall**", and
"**rackconnect\_automation\_feature\_provison\_public\_ip**".

Here is an example of the metadata keys/values now available for
RackConnect:

    "metadata":{"rackconnect_automation_feature_configure_network_stack":"ENABLED","rackconnect_automation_status":"DEPLOYED","rackconnect_automation_feature_provison_public_ip":"ENABLED","rackconnect_automation_feature_manage_software_firewall":"ENABLED"

#### Obtaining the metadata information via the First Generation Cloud Servers API (Examples)

**Authenticate and obtain an X-Auth-Token:**

You will first need to Authenticate and obtain a X-Auth-Token. The
following curl command is one way of accomplishing this. You will need
to enter the command with your Rackspace Cloud account's API Key and
Username credentials in the &lt;Cloud Account's API Key&gt; and
&lt;Cloud Account Username&gt; fields:

    curl -D - -k -H "X-Auth-Key: <Cloud Account's API Key>" -H "X-Auth-User: <Cloud Account Username>" https://auth.api.rackspacecloud.com/v1.0

The results from running this query will display a "X-Auth-Token:"
entry, and you will need to copy the value associated with this entry.
The "X-Auth-Token:" entry will look similar to the following:

    X-Auth-Token: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX

For information about how to find your API key, see [View and reset your
API
key](/how-to/view-and-reset-your-api-key).

**Show details for a Cloud Server to view the "metadata" values:**

Using the X-Auth-Token, you can now query a Cloud Server's details, in
order to view the metadata keys/values associated with RackConnect. The
following curl command is one way of accomplishing this. You will need
to enter the command with your Cloud Account's Number, the Server ID of
the Cloud Server you'd like to query, and the Auth Token obtained in the
previous step. These values will be entered into the X-Auth-Token
XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX, &lt;Cloud Account Number&gt;, and
&lt;Server ID&gt; fields.

    curl -k -X GET -D - -H "X-Auth-Token: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" https://servers.api.rackspacecloud.com/v1.0/<Cloud Account Number>/servers/<Server ID>

**Note**: Do not include the &lt; &gt; brackets when entering your Cloud
Account's values.

This is just a brief introduction to get you started on using the First
Generation Cloud Servers API to query the RackConnect statuses of your
Cloud Servers; if you require further information on the Cloud Servers
API, please view the following articles:

<http://docs.rackspace.com/api/>

<http://docs.rackspace.com/servers/api/v1.0/cs-devguide/content/API_Operations-d1e1720.html>

### Determining when the Managed Operations Post-Build Automation Process is Complete

As part of an effort to improve your experience with RackConnect, we
made an automation change that affects RackConnect customers with the
Managed Operations service level. This change is transparent for the
majority of customers -- including those using the MyRackspace Portal or
the Cloud Control Panel to provision servers -- but may require changes
for any customers who performed automated processes or configuration on
their servers immediately after the RackConnect automation completed.

**When is this change going to take place?**
This change has already been implemented.

**What was changed?**
For RackConnect customers with the Managed Operations service level,
there are two distinct automation routines that run after a Cloud Server
is built. Previously, automation for Managed Operations ran first,
followed by RackConnect automation. We reversed the order of automation
so that RackConnect runs first.

**Why was this change made?**
We determined that we can reduce post-build automation failures and
improve your RackConnect experience by making this change. By allowing
RackConnect automation to run first, we can more quickly and more
reliably deliver a RackConnect Cloud Server to you.

**Who does this affect?**
This change affected all RackConnect customers with the Managed
Operations service level.
For the limited set of customers who leverage their own configuration
management scripts, please note that RackConnect automation runs first,
followed by Managed Operations automation. We highly recommend that you
adjust your post-build configuration management to note when Managed
Operations automation is complete; this will be the new trigger to start
any post-build configuration tasks you wish to run.

**How can I tell when Managed Operations post-build automation is
complete?**

For Windows Cloud Servers:
Upon successful completion, the following file will be created:

    C:\windows\temp\rs_managed_cloud_automation_complete.txt

For Linux Cloud Servers:
Upon successful completion, the following file will be created:

    /tmp/rs_managed_cloud_automation_complete

**Obtaining the Managed Operations post-build automation status via the
Cloud Servers API:**

For standard and workload-optimized Cloud Servers only, you may also
obtain the Managed Operations post-build automation status via the Cloud
Servers API.  To accomplish this, you would follow the same process
described above in the "Obtaining the metadata information via the Cloud
Servers API (Examples)" section, but this time, you would be looking for
the metadata key value "**rax\_service\_level\_automation**".  The
"**rax\_service\_level\_automation**" metadata key will have a value of
"Pending", "In Progress", "Complete", "Build Error" or "Authentication
Error", depending on the current status of the Managed Cloud post-build
automation process.

**Who can I contact if I have any questions?**
Should you have any questions about RackConnect, Managed Operations, or
this change, please don't hesitate to contact your Rackspace Support
team.

