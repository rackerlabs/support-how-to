---
permalink: configure-active-directory-performance-monitoring
audit_date: '2020-11-23'
title: Configure Active Directory performance monitoring
type: article
created_date: '2020-11-19'
created_by: Travis Cook
last_modified_date: '2020-11-23'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to set up Active Directory (AD) performance monitoring on your server.

1. On the **Start** screen, type **Performance Monitor**, and then press **Enter**.

2. In the console tree, expand **Data Collector Sets**, right-click **User Defined** > **New**,
   and then click **Data Collector Set**. The **Create New Data Collector Set** wizard appears.

3. In **Create New Data Collector Set**, for **Name**, type a name for the new data collector set (such as `AD FS performance`),
   click **Create manually (Advanced)**, and then click **Next**.

4. For the type of data to include, verify that **Create data logs** is selected, and then click the checkboxes for the following
   data types: **Performance counter, Event trace data**, and **System configuration information**.

5. For performance counters, expand **AD FS** in the **Available counters** list, and then click **Add**. The AD FS performance
   counters should appear in the **Added counters** list.

6. To add event trace providers, click **Add** > **AD FS Eventing** > **AD FS Tracing** from the list of providers. When you are
   prompted to add registry keys to the monitor, click **Next**.

7. When you are prompted to specify the location to save the performance data, you can accept the default location,
   `%systemdrive%\PerfLogs\Admin\<data_collector_set>` and click **Next.**

8. When you are prompted to create the data collector set, select **Save and close** and then **Finish**. The new data collector
   set appears in the console tree under the **User Defined** node.

9. Use the following steps to work with the AD FS performance counters:

    a. To begin performance monitoring by using AD FS-related counters, right-click the data collector set that you added
       (such as `AD FS performance`) and click **Start**.

    b. To create a report to view the performance monitoring results, right-click the data collector set that you added
       (such as `AD FS performance`) and click **Latest Report**.

    c. To end a capture of performance data so that you can view the latest report, right-click the data collector set that you added
       (such as `AD FS performance`) and click **Stop**.

The latest report is added and numbered automatically (starting at 000001) under the **Report\User Defined\<data_collector_set>** node
in the console tree.
