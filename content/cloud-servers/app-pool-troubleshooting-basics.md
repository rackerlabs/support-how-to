---
permalink: app-pool-troubleshooting-basics/
audit_date:
title: ‘Application Pool Troubleshooting Basics’
type: article
created_date: '2020-06-10'
created_by: Travis Cook
last_modified_date: 
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

## Application Pool Troublshooting Basics

This article will go over some basic steps you can take if you are having issues with Application Pools within IIS.

### How to Recycle Application Pools
This troublshooting steps is usually taken when there a general application pool error or the site itself is showing poor performance and is a good first step to take in your troublshooting process.

By default, recycling an application pool will have no ill effect on the site in question and is a step you can take without fear of your site going down. With that being said, If you have any third party software that integrates with IIS please reach out to the provider of that software to make sure recycling the Application Pool will not cause any detrimental effects or downtime to your site.

1. Open the **IIS Manager** by going to the **Start menu** and searching for **IIS** or typing **inetmgr**.
2. Next, select **Application Pools**.
3. To the right you will see a **Actions** tab. Click **Recycle**. You can also **right-click** and select **Recycle**.

### How to change Applcation Pool Recyling settings

This would be done if you are having conflicts in performance or with a software on the server at certain times. All Application Pools have a default time they recycle and if this conflicts with anything or you are seeing a particular error at a certain time of day that coincides with the recycle you can change it by performing the following steps:

1. Open **IIS Manager**, expand **Application Pools** folder and select the one you want to edit.
2. To the right on the **Actions** panel select **Recycling...**
3. This should open up the **Edit Application Pool Recycling Settings**.
4. Select one of the options within the **Fixed Intervals** section, type the values you need, and click **Next**.
5. This next step is optional. The next page is labeled **Recycling Events to Log**. This will allow you to select the configurable recycling events and run time events that you want **IIS** to send to the **Event Log** when they occur.
6. Once you are done click **Finish**.

### How to change application pool queue length limit

This option usually is helpful when connection issues with a **Client Request 503 error** occur. This error is created when there is too many queued requests that have exceed the current queue length limit. You can check the **Event Viewer** logs to see if this error is generated.

1. In **IIS Manager** expand the **Application Pools** folder and **right-click** the Application Pool in question. Click **Properties**.
2. Click the **Performance** tab.
3. There will be a **Request Queue Limit** section and you can select **Limit the Kernel request queue**
4. Click **Ok**.

### How to configure rapid-fail protection

This step piggy-backs off the above in that the 503 error was detected and IIS initiated rapid-fail protection due to too many worker processes assigned to an application pool that have become unhealthy in a certain period of time. The below will assist in increasing the number of failures or the time period before rapid-fail protection intiates which can assist in clearing this error.

1. Open **IIS Manager**, expand **Local Computer** then expand **Application Pools**.
2. Right-click **Application Pools** then click **Properties**.
3. Click the **Health** tab.
4. Within the **Failures** box, type the number of failures you want before disabling the worker process.
5. Witin the **Time period** box, type the number of minutes during which failure totals are gathered.
6. Click **Ok**.
