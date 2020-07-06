---
layout: post
title: "Activating the SAP Security Audit Log Feature"
date: 2018-10-31 
comments: false
author: Nithin Katpalli
authorIsRacker: true
published: true
categories:
  - Security
---

Beginning with SAP&reg; version 4.0, you can use the Security Audit Log
feature to record security-related system information, such as changes to user
master records or unsuccessful logon attempts. This log is designed for
auditors who need detailed information about what occurs in an SAP system.
By activating the audit log, you keep a record of all of the activities that
you consider relevant for an audit. You can then access this information in
the form of an audit analysis report. This blog helps you activate your SAP
Security Audit Log.

<!--more-->

SAP's Security Audit Log feature is designed for long-term data access. The
data is stored in the control block, which is located in the application
server's shared memory. The system retains the audit files until you
explicitly delete them.

While you currently can't automatically archive the log files, you can
manually archive them at any time. The tables that are accessed for the audit
information are from the cluster tables and cannot be viewed by
the SE16 or SE16N transaction code. They must be accessed through these
transaction codes or the ST03N transaction code.

You can record the following information in the Security Audit Log:

- Successful and unsuccessful dialog logon attempts
- Successful and unsuccessful Remote Function Call (RFC) logon attempts
- RFC calls to function modules
- Changes to user master records
- Successful and unsuccessful transaction starts
- Changes to the audit configuration

The following image shows the architecture of the Security Audit Log:

![Security Audit Log
architecture](picture1.png)

**Image source**: SAP, [The Design of the Security Audit
Log](https://help.sap.com/saphelp_nwmobile711/helpdata/en/4d/41bf80aa601c86e10000000a42189b/frameset.htm).

### Filters and profiles

You specify the information that you want to audit in filters that you create.
The filters are permanently saved in the SAP NetWeaver Application Server (AS)
Advanced Business Application Programming (ABAP®) database in static profiles.

All of the nodes in a cluster use identical filters to determine which events
to record in the audit log. However, you want to create profiles for
different auditing scenarios.

Once activated, the AS ABAP loads the profile when the AS ABAP starts. The AS
ABAP uses the filters that you define in the profiles to write events to the
Security Audit Log.

You can change the filter settings that are currently in use without having to
restart the AS ABAP. The system distributes these changes to all active
application servers.

### Prerequisites for activating the Security Audit Log

This procedure requires you to restart the AS ABAP. Plan for the
required downtime while the AS ABAP restarts.

Before you can configure the Security Audit Log, you also have to use the
following steps to set the number of parameters:

1. To configure the type of security audit that you want to run, create a
   filter and specify the information that you want to audit.

2. Configure the directory and file name that you want to use for the Security
   Audit Log. Use the maintain profile parameter (transaction RZ11) and the
   following parameters:

    **DIR\_AUDIT**: The directory where you want to save the security
    audit files.

    **FN\_AUDIT**: The name of the security audit file.

3. On the **Security Audit Log: Display Kernel Parameters** screen (transaction
   **SM19** on the **Kernel Parameters** tab), set the kernel parameters
   that appear in the following table:

    | **Kernel parameter** &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;                     | **Profile parameter** |
    |---------------------------------     |-----------------------------|
    | Security Audit Active | rsau/enable |
    | Generic User Selection | rsau/user\_selection |
    | Number of Selection Filters | rsau/selection\_slots |
    | One Audit File per Day | NONE |
    | Maximum Size of Audit File | rsau/max\_diskspace/local |
    | Multiple Audit Files per Day | NONE |
    | Maximum Size of an Audit File | rsau/max\_diskspace/per\_file |
    | Maximum Size of All Audit Files &nbsp; &nbsp;  &nbsp; | rsau/max\_diskspace/per\_day |
    <br />

    **Note**: You can set these parameters as profile parameters in the
    application server's instance profile. However, we recommend that you set
    the parameters dynamically as kernel parameters in the Security Audit Log
    configuration (transaction **SM19** in the **Kernel Parameters** tab).
    After the kernel parameters are set, the system ignores the profile
    parameters in the profile of the application server, with the exception of
    **DIR_AUDIT** and **FN_AUDIT**.

4. To enable the profile parameters, delete the kernel parameters by clicking
   the trash can icon. (If you want to check your entries, select the icon
   that has one orange box and one green box.)

5. If you want to transport the kernel parameters to other systems in your
   landscape, select the icon that looks like a red vehicle.

6.	Restart the AS ABAP.

### Activate the Security Audit Log

Use the following steps to activate the Security Audit Log:

1. Go to transaction **SM19**.

2. Select the tab for the **Filter** that you want to use and check the
   **Events** and **Audit Classes** that you want to generate the audit logs
   for, as shown in the following image:

    ![Activate the Security Audit
    Logs](picture2.png)

3. On the **Dynamic Configuration** tab, activate the **Status**, as shown in
   the following image:

    ![Activate the Security Audit
    Logs](picture3.png)

The **Status** should now be active.

**Note**: The generated logs require enough resource space to run.

### Conclusion

The Security Audit Log is a tool designed to help auditors and SAP security
professionals review what occurs in an SAP system. The audit files are stored
on an application server that needs enough space to run on daily basis. You
can access the log information in the form of an audit analysis report.

Use the Feedback tab to make any comments or ask questions.

To learn more about Rackspace SAP ERP services, see [Managed Services for SAP
ERP Applications](https://www.rackspace.com/sap/erp).

### References

- [SAP Documentation: The Security Audit
  Log](https://help.sap.com/saphelp_nw70/helpdata/en/c7/69bcb7f36611d3a6510000e835363f/frameset.htm)
