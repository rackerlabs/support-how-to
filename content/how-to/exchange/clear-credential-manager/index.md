---
permalink: clear-credential-manager
audit_date: '2020-11-24'
title: Clear Credential Manager
type: article
created_date: '2017-12-18'
created_by: William Loy
last_modified_date: '2020-11-24'
last_modified_by: Rose Morales
product: Microsoft Exchange
product_url: exchange
---

This article describes how to remove previously-stored passwords from your Outlook&reg; application so that you can update Outlook with your new password.

### Prerequisites

- **Applies to:** User or Administrator
- **Difficulty:** Easy
- **Time needed:** Approximately 10 minutes
- **Tools required:** Access to a device with stored credentials

For more information about prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

### Clear old credentials

1. Make sure that Outlook is closed.

2. Click the **Start Menu** (or press the Windows key) and then search for **Credential Manager**.

    - **Windows 10:**

       {{<image src="win10_start_menu.png" alt="" title="">}}

    - **Windows 7 (or earlier):**

       {{<image src="win7_start_menu.png" alt="" title="">}}

3. Click on **Credential Manager** to open it and then click **Windows Credentials**.

    - Under the **Generic Credentials** heading, find the credentials that have Outlook(15 or 16) and your email address.

    - For example: `MicrosoftOutlook15:example@yourdomainexample.com`
      It might not be exactly as shown, but use it as a guideline.

4. Click the arrow next to the entry to display it.

       {{<image src="CredentialManager.png" alt="" title="">}}

5. On the **Detail** page of the credential entry, click **remove** to remove the credential from the manager.

       {{<image src="CredentialManagerDetail.png" alt="" title="">}}

6. Repeat this process for all credentials matching Outlook(15 or 16) and your email address. There might be one to three entries listed.

7. Close all windows and re-open Outlook. When Outlook prompts for your credentials, enter the full email address and
   password for the mailbox. Then, check the **Remember My Credentials** checkbox.

8. If this process is successful, your Inbox should display and mail should start syncing.

**Note:** If this process fails, make sure you can log in to [apps.rackspace.com](https://apps.rackspace.com/index.php) to verify that you
are using the correct password.
