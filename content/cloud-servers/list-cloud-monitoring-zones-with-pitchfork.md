---
permalink: list-cloud-monitoring-zones-with-pitchfork/
audit_date: '2020-04-28'
title: 'List Cloud Monitoring zones with Pitchfork'
type: article
created_date: '2020-05-18'
created_by: Evan Benavides
last_modified_date: 
last_modified_by:
product: Cloud Monitoring
product_url: cloud-monitoring
---

This article describes how to list the Cloud Monitoring zones and source IP addresses with the API tool, Pitchfork.

### Log in to Pitchfork

Log in to Pitchfork at: https://pitchfork.rax.io/

Refer to (https://support.rackspace.com/how-to/pitchfork-the-rackspace-cloud-api-web-application/)[Pitchfork - the Rackspace Cloud API web application] to learn how to log in to and use Pitchfork.

### List the Cloud Monitoring zones with Pitchfork

1. After you log in to Pitchfork, click on the **Cloud Monitoring** icon to pull up the Cloud Monitoring API calls.

2. Next, navigate to the **Zones** section to find the **List Monitoring Zone** API call. Then, click **Details** to expand the call.

3. Finally, click **Send API Call**. The **Response Body** output of the API call displays the Cloud Monitoring zones and source IP addresses. For example:

```        
{
            "source_ips": [
                "2001:4800:7902:0001::/64", 
                "50.56.142.128/26"
            ], 
            "id": "mzdfw", 
            "country_code": "US", 
            "label": "Dallas Fort Worth (DFW)"
        }
```

You should now be able to perform list Cloud Monitoring zone API calls.
