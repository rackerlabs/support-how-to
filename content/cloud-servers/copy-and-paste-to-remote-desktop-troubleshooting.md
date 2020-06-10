---
permalink: 'copy-and-paste-to-remote-desktop-troubleshooting/'
title: 'Copy and Paste to Remote Desktop error'
type: article
created_date: '2020-06-010'
created_by: Benji Ivey
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

## Copy and Paste to Remote Desktop Troubleshooting

This article serves as a guide for troubleshooting Copy and Paste errors with Remote Desktop. *This article only covers Windows 2008, 2012, and 2016.*

## Checking client settings

Before going into OS-specific troubleshooting it is a good idea to first check your own client settings.

1. Open the RDP client that you are using to connect.
2. Navigate to the Local Resources tab.
3. Make sure that the "Clipboard" option is checked as this allows copy-pasting for text.
    1. Checking the above option ensures text copy-paste and not file, so if you only need text copy-paste and not files you can stop here.
4. Click More, and check the Drives option, hit ok and then ok again.

### Windows 2008

1. Launch "Remote Desktop Host Configuration" from the server.
2. Under "Connections" right click the connection and select "Properties"
3. Click on the "Client Settings" tab.
4. Un-check Clipboard for Copy-Paste for text and for files make sure Drive is un-checked.

### Windows 2012

1. Open "Server Manager".
2. Select "Remote Desktop Services".
3. Select "Collections".
4. Select "Tasks" and then choose "Edit Properties".
5. Under the "Client Settings" Tab make sure both Clipboard and Drive are enabled.

### Windows 2016

For Windows 2016 you will need to control these settings within the Group Policy as opposed to using Server Manager.

1. Launch "gpedit.msc"
2. Navigate to "Computer Configuration" > "Administrative Templates" > "Windows Components" > "Remote Desktop Services" > "Remote Desktop Session Host".
3. Ensure "Do not allow Clipboard redirection" is set to "Not Configured" or "Disabled".

If you have attempted all the above troubleshooting, you may need to restart the server or open task manager and end the "rdpclip" process.
