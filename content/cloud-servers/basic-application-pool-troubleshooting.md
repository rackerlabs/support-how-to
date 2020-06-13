---
permalink: basic-application-pool-troubleshooting/
audit_date:  '2020-06-11'
title: 'Basic Application Pool troubleshooting'
type: article
created_date: '2020-06-10'
created_by: Travis Cook
last_modified_date: '2020-06-11'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

This article covers some basic steps to troubleshoot issues with Application Pools within Microsoft&reg;
Internet Information Services (IIS).

### Recycle Application Pools

Take this troublshooting step when there is a general application pool error or the site itself shows poor
performance.

By default, recycling an application pool has no ill effect on the website and won't bring the site down.
However, if you have any third-party software that integrates with IIS, reach out to the provider of that
software to make sure recycling the Application Pool will not cause any detrimental effects or downtime to
your site.

Use the follwing steps to recycle the Application Pools:

1. Open the **IIS Manager** by going to the **Start menu** and searching for **IIS** or typing **inetmgr**.
2. Select **Application Pools**.
3. In the **Actions** tab, click **Recycle**. You can also right-click **Actions** and select **Recycle**.

### Change the Applcation Pool recyle settings

Do this step if you have conflicts in performance or with a software on the server at certain times. All
Application Pools have a default time they recycle. If this conflicts with anything or you see a particular
error at a certain time of day that coincides with the recycle, you can change it by performing the following steps:

1. Open **IIS Manager**, expand **Application Pools** folder, and select the one you want to edit.
2. On the **Actions** panel, select **Recycling**.
3. In **Edit Application Pool Recycling Settings**, select one of the options within the **Fixed Intervals**
   section, type the values you need, and click **Next**.
4. Optionally, go to the next page is labeled **Recycling Events to Log**. This page allows you to select the
   configurable recycling events and runtime events that you want **IIS** to send to the **Event Log** when they occur.
5. Click **Finish**.

### Change the Application Pool queue-length limit

Use this option when connection issues with a **Client Request 503 error** occur. This error occurs when there the
number of queued requests exceeds the current queue-length limit. You can check the **Event Viewer** logs to see if this error occurred.

1. In the **IIS Manager**, expand the **Application Pools** folder and **right-click** the Application Pool.
   Click **Properties**.
2. Click the **Performance** tab.
3. In the **Request Queue Limit** section, select **Limit the Kernel request queue**.
4. Click **Ok**.

### Configure rapid-fail protection

IIS might generate a 503 error and initiate rapid-fail protection because the Application Pool has too many worker processes assigned to the Pool that have become unhealthy in a certain period of time. The following steps help to increase the number of failures or the time period before rapid-fail protection intiates, which can help you to clear this error.

1. Open **IIS Manager**, expand **Local Computer** then expand **Application Pools**.
2. Right-click **Application Pools** then click **Properties**.
3. Click the **Health** tab.
4. Within the **Failures** box, type the number of failures you want before disabling the worker process.
5. Witin the **Time period** box, type the number of minutes during which failure totals are gathered.
6. Click **Ok**.
