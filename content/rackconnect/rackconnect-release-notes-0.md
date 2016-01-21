---
node_id: 2160
title: RackConnect Release Notes
type: article
created_date: '2012-09-14'
created_by: Jonathan Hogue
last_modified_date: '2016-01-14'
last_modified_by: Stephanie Fillmon
product: RackConnect
product_url: rackconnect
---

Below is a summary of features, updates, and changes in regards to
RackConnect. Keep this page bookmarked for updates made periodically to
RackConnect.

### July 15, 2014

-   Added support for OnMetal servers
-   RackConnect user passwords are now periodicaly changed

### March 25, 2014

-   Added support for metadata value updates to move servers between
    load balancer pools

### October 7, 2013

-   Support for HKG region

### August 20, 2013

-   Support for F5 version 11

### <span data-mce-mark="1">July 30, 2013</span>

-   Support for IAD region

### April 9, 2013

-   Support for ASA software versions greater than 8.3
-   Support for ASA X series firewalls

### January 15, 2013

-   Support for Cloud Networks
-   Automated quality control for each new RackConnect
    customer configuration. RackConnect will automatically create two
    cloud servers (via a test account which the customer will NOT be
    billed for) and perform several quality assurance checks before
    removing the servers and marking the configuration complete.
-   The
    [AutoNAT](/how-to/rackconnect-auto-nat-feature)
    feature is now available

### November 19, 2012

-   Support for Windows Server 2012

### November 13, 2012

-   Changed the order of operations for cloud server builds for
    customers at the Managed Operations level so that the server builds,
    RackConnect automation runs, and then managed cloud automation runs.
    Managed cloud customers who run their own post-build automation
    should trigger their automation to start based on the completion of
    the managed cloud automation rather than RackConnect.

### October 9, 2012

-   Network device configuration save and sync performance improvements

### October 3, 2012

-   Customers will be notified when a cloud server is unprocessable due
    to being built in a region that does not match the region in which
    their dedicated environment is deployed.

-   You may now use the Cloud Servers API to query the RackConnect
    Automation Status of your Cloud Servers.

### August 13, 2012

-   Performance improvements for F5 packet filter changes

### August 1, 2012

-   Support for next generation Cloud Servers

### July 02, 2012

-   Customer API call to retrieve automation status

<!-- -->

-   Customer API call to retrieve automation status details

<!-- -->

-   Customer API call to retrieve gateway IP

### May 08, 2012

-   Add Network Policies which allow communication between Cloud
    accounts belonging to the same RackConnect Configuration

<!-- -->

-   Improve overall automation performance

### Known Issues

**Pre-9/6 Windows Managed Operations Cloud Server Snapshots Failing
RackConnect**

Description: Windows Managed Operations Cloud Server Snapshots fail
RackConnect automation

Cause: The agent is not able to correctly set the private IP when IPv6
is disabled, leading to an instance that does not have proper
connectivity and thus fails RackConnect automation.

Affects: Snapshots created from next generation Managed Operations
Windows Servers where the Cloud Server from which the image is based was
spun up before 9/6/12

Workaround: Re-enable IPv6 on the base image before creating snapshots.
See http://support.microsoft.com/kb/929852 for instructions.

