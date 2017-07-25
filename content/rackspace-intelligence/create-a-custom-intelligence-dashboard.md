---
permalink: Create-a-custom-intelligence-dashboard/
audit_date:
title: Create a custom intelligence dashboard
type: article
created_date: '2017-07-25'
created_by: Nate Archer
last_modified_date: '2017-07-25'
last_modified_by: Nate Archer
product: Rackspace Intelligence
product_url: rackspace-intelligence
---

Rackspace Intelligence custom dashboards enable user's to create to get a better view of their infrastructure through customized graphs and alerts.

Custom dashboards use the same checks and metrics that are used by Rackspace Monitoring. Create multiple dashboards to address different needs. If you to understand how servers in an application are performing, create a dashboard with graphs and alerting information for the servers in that application. Alternatively, create a dashboard to monitor specific metrics for database and production servers.

The following article provides instructions on how to create, access, and edit a custom dashboard.

### Create a custom dashboard

1. In the Cloud Control Panel, click **Servers** and select **Rackspace Intelligence** from the drop-down menu.
2. From the Rackspace Intelligence page, click **Dashboard**.
3. On the dashboard page, select **Custom**.
4. Click **New Dashboard** to create a new custom dashboard name.
5. Enter information for the following fields:

   - **Dashboard Name**: A descriptive name for your dashboard
   - **Description**: A brief description of your dashboard

6. In the **Start From** dropdown menu, chose if you would like your dashboard to include any monitoring widgets by default.
7. Click **Next step: Add widgets**.

### Add widgets to custom dashboard

A widget is a component of the custom dashboard that is customized to show the monitoring metrics for the check types or entities (instance or device) you select. Two categories of widgets are available, Performance Graphs and Monitoring Alerts.

#### Performance Graphs

Performance graphs show the relation between various check types and metrics for specific entities. For more information about check types, see [Check types reference](https://developer.rackspace.com/docs/rackspace-monitoring/v1/tech-ref-info/check-type-reference/). For more information about metrics, see [Rackspace Monitoring API reference - Metrics](https://developer.rackspace.com/docs/rackspace-monitoring/v1/api-reference/metrics-operations/).

Use the following process to add a performance graph to your custom dashboard:

1. Click **Performance Graphs** under **Categories**.

    Check types and metrics are based off of the same check types and metrics in Rackspace Monitoring. Each check type contains it's own set of metrics.

    For more information about check types, see [Check types reference](https://developer.rackspace.com/docs/rackspace-monitoring/v1/tech-ref-info/check-type-reference/).

    For more information about metrics, see [Rackspace Monitoring API reference - Metrics](https://developer.rackspace.com/docs/rackspace-monitoring/v1/api-reference/metrics-operations/).

2. In the add widget screen, select one of the following tabs:

   1. **Explore a Metric**: Creates a performance graph that focuses one check type and one metric. The graph compares that metric across multiple entities (or device such as server or database).
   2. **Explore an Entity**: Creates a performance graph with one entity and one check type. The graph examines multiple metrics for the selected entity.

3. Select the values for your graph(s) from the list of options:

   1. If you selected the **Explore a Metric** tab, select one **Check**, one **Metric**, and the **Entities** for which you want to monitor.

       Every entity that you select is placed on a single graph by default. If you want to create individual graphs for each entity, uncheck the **Single graph for all Entities (Recommended)** box.

   2. If you selected the **Explore an Entity** tab, select one **Entity**, one **Check**, and the **Metrics** for which want measure.

   **Note:** All check types excluding Remote checks require the Rackspace Monitoring agent to be installed on the chosen Entity before metrics are measured.

4. Click **Generate Graphs**. A preview of your graph appears under the value selection table.

5. Set your graph(s) x-axis to visualize metrics for either a preset amount of time or a custom amount of time.

   For a preset amount of time, select **Presets** and then the amount of preset time you want to visualize. You can chose any of the following time spans: 1 hour (**1 hr**) , 8 hours (**8 hr**), one day (**day**), one week (**wk**), or one month (**mo**).

   For a custom amount of time, select **Custom**, and then the specific date and time for which you want to visualize your metrics. After you have selected the desired time span, click **Apply**.

6. Enter a name for your widget.
7. Select either **Add Graph** to add the widget to your custom dashboard, or **Add and View Graph** to immediately view your created widget on the custom dashboard.

#### Monitoring alerts

Monitoring alerts show alerts generated by Rackspace Monitoring. The monitoring alert widget for custom dashboards displays more information about an alert than the default dashboard.

Use the following process to add a monitoring alert widget to your custom dashboard:

1. Under **Categories**, click **Monitoring Alerts**.
2. Select one of the following options:

   - **Open Alerts Shows a list of alerts that are open right now and need to be addressed urgently**.
   - **All Alerts (Last 7 Days) Shows a list of all alerts that triggered in the last 7 days**

3. After you have selected the type of alerts you want the widget to show, click **Preview**. A preview of the widget appears under the selection table.
4. Enter a name for your widget.
5. Select either **Add Graph** to add the widget to your custom dashboard, or **Add and View Graph** to immediately view your created widget on the custom dashboard.

### Access and edit a custom dashboard

After you have created your custom dashboard, you can access your dashboard using the following instructions:

1. In the Cloud Control Panel, click **Servers** and select **Rackspace Intelligence** from the drop-down menu.
2. From the Rackspace Intelligence page, click **Dashboard**.
3. On the dashboard page, select **Custom**.
4. Select the custom dashboard you want to view in the drop-down menu.

You can make changes to a custom dashboard by clicking the **Actions** button at the top right corner of the screen. You can make the following changes to your dashboard:

- **Rename dashboard**: Change the name of the dashboard.
- **Add Widgets to Dashboard**: Add a new performance graph or monitoring alert you the dashboard.
- **Delete Dashboard**: Deletes the selected dashboard. There is no way to recover a dashboard after it is deleted.
- **Delete Dashboard's Widgets**: Deletes a widget from your custom dashboard.

### Export a graph as a CSV file

You can export any individual graph inside the widget of you custom dashboard as a CSV file. The CSV file contains the exact times and metrics visualized by the graph, allowing for a more comprehensive analysis of your infrastructure.

1. Click the gear icon on the right hand corner of the graph you wish to export.
2. Select **Export as CSV**. The CSV file is saved onto your local machine.
