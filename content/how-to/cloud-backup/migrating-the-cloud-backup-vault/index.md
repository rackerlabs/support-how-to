---
permalink: migrating-the-cloud-backup-vault/
audit_date: '2020-04-15'
title: Migrating the Cloud Backup Vault
type: article
created_date: '2020-03-26'
created_by: Evan Benavides
last_modified_date: '2021-02-25'
last_modified_by: Chris Silva
product: Cloud Backup
product_url: cloud-backup
---

The Cloud Backup Vault is a directory on your server that allows the Cloud Backup Agent to manage your backups in your Customer Portal. This directory contains the data necessary to allow functionality of Cloud Backup. If the Cloud Backup registration command is re-run on the server it can cause a duplicate system creation.

The following article provides information about how to migrate the Cloud Backup vault from one system to another.

**NOTE:** To migrate the vault, you should register the two systems to the same Cloud account user and don't encrypt the backups. Additionally, it's impossible to migrate the vault to a system which already has configured backups.


### Migrating the Cloud Backup vault

1. Log in to the API tool Pitchfork as shown in the following guide:
[Pitchfork - the Rackspace Cloud API web app](/support/how-to/pitchfork-the-rackspace-cloud-api-web-application/) 

2. Click the **Cloud Backup** section. From this page navigate to the **Migrate Vault** API call and click on the **Details** button. 

3. Next, enter the `source_agent_id` which is the agent ID of the migrating vault. Then enter the `dest_agent_id` which is the agent ID of the migration destination of the vault. 

    **Note:** The agent IDs are retrievable from the Rackspace Cloud portal by clicking the **Backups** tab and **Systems option** from the drop down menu. You can then click on the system name to load the system details page. The agent ID is included in the URL. For example in the following URL I can see the agent ID is 123456: https://clouddrive.rackspace.com/systems/detail/IAD/123456

4. After placing the source and destination agent IDs respectively, you can then click the **Send API Call** button to execute the migration. If successful you should receive the response `"No content received. Status Code: 200"`.

5. You can verify in the Cloud portal that the migration was successful by clicking the new system to load the system details page that should now show the configurations from the original system. Once verified you can then delete the original Cloud Backup system which should now show as disconnected.

If you've followed this guide you are now equipped to migrate the Cloud Backup vault from one system to another. Should you experience any issues with this or need further information, please reach out to support via ticket or phone.
