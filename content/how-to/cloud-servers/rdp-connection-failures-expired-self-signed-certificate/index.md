---
permalink: /rdp-connection-failures-expired-self-signed-certificate/
audit_date: '2021-05-04'
title: 'RDP Connection Failures: Expired Self-Signed Certificate'
type: article
created_date: '2021-03-12'
created_by: Steven Mondragon-DeVoss
last_modified_date: '2021-05-04'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

# Issue
Remote Desktop (RDP) connections begin to fail with no apparent cause.

# Symptoms
- Cannot RDP to the server - A return code of 50331673 "The Remote Desktop Gateway server administrator has ended the connection" is received
- Event ID 36870 is found in the System Logs each time an RDP connection is attempted

# Cause
- RDP self-signed certificate is expired or missing (Windows usually recreates the self-signed certificate upon expiration)
- Permissions issues to the following path "C:\ProgramData\Microsoft\Crypto\RSA\MachineKeys\f686aace6942fb7f7ceb231212eef4a4_" and the parent folder did not allow for the OS to delete the existing key. This needs to be done prior to recreating the self-signed certificate.


## Resolution
1. Delete the expired certificate from the Centralized Certificate Store (CCS) on the server using the Certificates snap-in within Microsoft Management Console (MMC). The path to the certificate is Certificates > Remote Desktop > Certificates.
2. Stop the RDP (Remote Desktop Services) service
3. At the path "C:\ProgramData\Microsoft\Crypto\RSA\MachineKeys", take ownership of the f686 key file referenced above and give owner user account Full Control permissions to this file. You may also need to change the Administrators group permissions for the MachineKeys folder to apply to "This folder, subfolders and files" as it is defaulted to "This folder onaly".
4. Delete file f686aace6942fb7f7ceb231212eef4a4_
5. Start the Remote Desktop Services service
6. Verify that a new certificate has been generated via Certificates snap-in in MMC
7. Verify RDP access to the server

This article describes a possible Microsoft&reg; Remote Desktop Protocol (RDP)
connection issue and the resolution.

### Issue: Connection failures

RDP connections begin to fail with no apparent cause.

#### Symptoms

This issue might have the following symptoms:

- The client can't connect to the server by using RDP. Connection attempts return
  code **50331673: The Remote Desktop Gateway server administrator has ended the connection**.
- The system logs register **Event ID 36870** for every RPD connection attempt.

#### Cause

The following events could cause this issue:

- The RDP self-signed certificate has expired or is missing (Windows&reg; usually
  recreates the self-signed certificate upon expiration.
- Permissions issues on the following path: 
  **C:\ProgramData\Microsoft\Crypto\RSA\MachineKeys\f686aace6942fb7f7ceb231212eef4a4**.
  The parent folder did not allow the OS to delete the existing key, which needs to happen
  before self-signed certificate recreation.

#### Resolution

Use the following steps to resolve this issue:

1. Delete the expired certificate from the Centralized Certificate Store (CCS) on
   the server by using the Certificates snap-in in the Microsoft Management Console (MMC).
   Select **Certificates > Remote Desktop > Certificates**.

2. Stop the RDP service.

3. Go to path  **C:\ProgramData\Microsoft\Crypto\RSA\MachineKeys**, take ownership of the
   **f686** key file, referenced previously, and give the owner of the file `Full Control`
   permission.

4. Change the **Administrators** group permission for the **MachineKeys** folder to
   `apply to "This folder, subfolders and files`.

5. Delete file: **f686aace6942fb7f7ceb231212eef4a4**.

6. Start the **Remote Desktop Services** service.

7. Verify that the system generated a new certificate by using the **Certificates**
   snap-in in MMC.

8. Verify RDP access to the server.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
