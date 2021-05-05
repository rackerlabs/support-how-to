---
permalink: using-windows-performance-analyzer-to-troubleshoot-performance-issues
audit_date: '2020-07-16'
title: 'Using Windows Performance Analyzer to troubleshoot performance issues'
type: article
created_date: '2020-07-09'
created_by: Karoline Mills
last_modified_date: '2020-07-16'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

### Use Windows Performance Analyzer to troubleshoot performance issues

This article explains how to use Windows&reg; Performance Analyzer (WPA) to troubleshoot performance issues in Windows.
The free Windows Assessment and Deployment Kit (ADK) includes both the WPA and the Windows Performance Recorder (WPR). Use
the WPA to create tables and graphs of performance data and events that the WPR captures. You can download the ADK
directly from Microsoft.

### Create an event trace log file by using WPR

After you download the ADK, open the WPA application. The tool gathers information about the interaction of programs and
hardware running on the server. Click **Start** to start recording by using the default settings. If you want to customize
the recording, expand the options menu by clicking on **More options**. Here, you can select additional profiles for performance
recording, such as GPU activity, power usage, and pool usage. After you are satisfied with the recording's length, click
**Save** to stop recording and select a path for the event trace log to be stored. You can now directly import the file into WPA
by clicking **Open in WPA**.

### Import an event trace log file to WPA

To start the WPA application, click on the **Windows** button on your desktop and type **WPA**.  Use the following steps to open
an existing trace log file in WPA:

1. In the **File** menu, click **Open**.

2. Navigate to the file's location. By default, event trace log files are stored in your **Documents\WPR Files** folder.

3. Select the file and click **Open**.

### Analyze the event trace log file

You can use the **Graph Explorer** to see all the available performance recordings. To view different graphs in more detail, expand them
by clicking the small triangle icon. To further analyze the data, double-click or drag-and-drop the graph into the right-hand side
**Analysis** panel. You can open multiple graphs in the **Analysis** tab by using this method. Also, you can open multiple **Analysis**
tabs by clicking on the **+** icon. In the top bar, you can change the graph view and layout.

To select a specific time interval to analyze, perform the following steps:

1. Left-click on the graph and hold down the mouse.
2. Drag the cursor to highlight the desired section.
3. To view the selected time frame in more detail, right-click it and select **Zoom**.

To customize the data table view, drag-and-drop the columns to change their order and right-click to choose which columns you want to
display. You can also search the data by right-clicking on the data column and selecting **Find**. If you want to save a layout for
later use, export it by clicking **Profiles** and **Export…**. You can also select **Save Startup Profile** to make this the default
layout when you start WPA.
