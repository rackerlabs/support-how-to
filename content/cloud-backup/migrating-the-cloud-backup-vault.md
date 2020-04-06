---
permalink: migrating-the-cloud-backup-vault/
audit_date: '2020-04-06'
title: Migrating the Cloud Backup Vault
type: article
created_date: '2020-03-26'
created_by: Evan Benavides
last_modified_date: '2020-04-06'
last_modified_by:
product: Cloud Backup
product_url: cloud-backup
---

The Cloud Backup vault is the database that resides on the server regarding the configured Cloud Backups for that agent. If the Cloud Backup registration command is re-run on the server it can cause a duplicate system to be created.

The following article provides information on how to migrate the Cloud Backup vault from one system to another.

**NOTE:** In order to migrate the vault the two systems should be registered to the same Cloud account user and the backups should not be encrypted. Additionally, it is not possible to migrate the vault to a system which already has configured backups.

###Logging into the API tool Pitchfork

You'll need to log in to the API tool Pitchfork as shown in the following guide:
[Pitchfork - the Rackspace Cloud API web application](https://support.rackspace.com/how-to/pitchfork-the-rackspace-cloud-api-web-application/)

###Migrating the Cloud Backup vault

1. Once you're logged into Pitchfork you'll want to click the Cloud Backup section. From this page you can navigate to the 'Migrate Vault' API call and click on the 'Details' button. 

2. This will then ask for the source_agent_id, the agent ID of the vault to be migrated, and the dest_agent_id, the agent ID of the destination where the vault is being migrated to. The agent IDs can be retrieved from the Rackspace Cloud portal by clicking the Backups tab and Systems option from the drop down menu. You can then click on the system name to load the system details page. The agent ID will be included in the URL. For example in the following URL I can see the agent ID is 123456: https://clouddrive.rackspace.com/systems/detail/IAD/123456

3. After you've placed the source and destination agent IDs respectively you can then click the 'Send API Call' button to execute the migration. If successful you should receive a response "No content received. Status Code: 200".

4. You can verify in the Cloud portal that the migration was successful by clicking the new system to load the system details page that should now show the configurations from the original system. Once verified you can then delete the original Cloud Backup system which should now show as disconnected.

If you've followed this guide you are now equipped to migrate the Cloud Backup vault from one system to another. Should you experience any issues with this or need further information, please reach out to support via ticket or phone.
