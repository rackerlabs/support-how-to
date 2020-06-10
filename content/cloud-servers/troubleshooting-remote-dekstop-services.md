---
permalink: troubleshooting-remote-desktop-services/
audit_date:
title: 'Troubleshooting Remote Desktop Services'
type: article
created_date: '2020-06-10'
created_by: Paola Howard
last_modified_date:
last_modified_by:
product: Cloud Product
product_url: cloud-product
---


## Troubleshooting Remote Desktop Services

This article will highlight steps that you can take when you find yourself unable to RDP.

### Log in via the **Emergency Console**.

1. Follow the steps in the following article for additional assistance accessing the **Emergency Console**:	https://support.rackspace.com/how-to/start-a-console-session/
    1. If you are unable to log in via the **Emergency Console**, you can reset your *Administrator* user password: https://support.rackspace.com/how-to/how-to-change-your-server-rootadmin-password-from-your-account/

### Check to see if the Remote Desktop Service is running

1.	Once you have access to the server via the Emergency Console, ensure the RDP service is running.
    1. To access services, navigate to Start menu > Run > "services.msc" > click OK
    2. Look for Remote Desktop Services in the list of services and ensure the status shows **Running**.
    3. If this is in a **Stopped** state, right click the service and choose **Start** to restart the service.
 
### Check Windows Firewall with Advanced Security to ensure the connection is being allowed

1. To access the firewall, navigate to Server Manager > Tools > Windows Firewall with Advanced Security

2. This screen will show you which profiles are enabled. You will want to ask the user for their local IP address to add to the **Remote Desktop** rule.
   
### Check the authentication logs
**Note:** This step is intended for situations where a specific user is unable to log in via RDP.

1. To find the authentifcation logs, navigate to Server Manager > tools > Event Viewer > Drop down menu for “Windows Logs” > Security. Search the logs using the username of the affected user for a specific error message to help determine the best course for continuing to troubleshoot.
