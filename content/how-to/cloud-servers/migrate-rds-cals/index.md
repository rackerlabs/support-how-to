---
permalink: migrate-rds-cals
audit_date: '2021-01-13'
title: 'Migrate Remote Desktop Services CALs'
type: article
created_date: '2021-01-11'
created_by: Karoline Mills
last_modified_date: '2021-01-13'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article describes the steps to migrate your Remote Desktop
Services (RDS) Client Access Licenses (CAL's) to another server. Keep in
mind that you need administrator permissions to complete this task.

#### Confirm RDS CAL connection method

1. Log in to your new **Remote Desktop License Server**.
2. Navigate to **Administrative Tools** > **Remote Desktop Licensing Manager**.
3. Expand **All Servers** and right-click on the origin server.
4. Select **Properties** and look for the **Connection method**.
5. Choose the connection method in the drop-down menu or proceed to the
   migration. Choose from the following three connection methods:
    - **Automatic connection (recommended)**. To perform the migration, the RDS
      License Server communicates directly with the **Microsoft Clearinghouse** over
      outbound TCP port `443`.
    - **Web browser**. Use this method when the RDS License Server does
      not have internet connectivity. An administrstor completes the migration process
      by using a browser on a separate device.
    - **Telephone**. Use this method when you don't have internet access or you prefer
      communication over the phone. You can complete the migration process over the
      phone by talking to a Microsoft representative.

#### Migrate RDS CALs

After you have identified the Remote Desktop License Server connection method, complete
the migration using the following instructions:

1. Under **Remote Desktop Licensing Manager**, right-click on the origin server
   and select **Manage Licenses**. If the option is greyed out, you might still
   need to activate the new License Server.
2. Select **Migrate RDS CALs from another license server to this license
   server** and one of the options below:
    - **This license server is replacing the source license server.**. If
      you choose this option, you see a prompt for the source server’s IP
      address or hostname. If the server is not available on the network, you
      need to confirm the Operating System and the license server ID of the
      source server.
    - **The source license server is no longer functioning**. To choose this
      option, you need to specify an Operating System and the license server ID
      of the source server.

        **Note**: If the source server cannot be contacted, you need to confirm
        that you will remove the RDS CALs manually from the source license
        server after the wizard has completed.

3. After completion, you are directed to **Obtain Client License Key Pack** page.
4. Complete the migration according to the connection method:

- **Automatic connection method**
  - On the **License Program Page**, select the program used to purchase the RDS
    license.
  - Fill out the agreement number, license code, or license number.
  - Follow the wizard, and the server automatically connects to the Microsoft
    Clearinghouse to complete your request.

- **Web browser method**
  - Follow the link on the **Obtain Client License Key Pack** page. You can use the
      link on any device with internet connectivity.
  - On the website, navigate to **Select Option** > **Manage CALs**.
  - Fill in the required information, such as license program, reason for
      migration, and your company information.
  - Provide the agreement number, license code, or license number provided after purchase.
  - When you receive a **license key pack ID**, enter it on your new RDS license server to complete
      the migration.

- **Telephone method**
  - Call the number listed on the **Obtain Client License Key Pack** page.
  - Provide the information regarding your license program to the Microsoft
    Representative.
  - Upon completion, the representative gives you a **license key pack ID**.
  - Enter the ID on the new RDS license server to complete the migration.
