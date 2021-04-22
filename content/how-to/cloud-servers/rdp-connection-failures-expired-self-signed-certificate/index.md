---
permalink: /rdp-connection-failures-expired-self-signed-certificate/
audit_date:
title: 'RDP Connection Failures: Expired Self-Signed Certificate'
type: article
created_date: '2021-03-12'
created_by: Steven Mondragon-DeVoss
last_modified_date: '2021-04-14'
last_modified_by: Karoline Mills
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
