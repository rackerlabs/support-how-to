---
permalink: use-cloud-backup-to-recover-from-a-bad-actor-attack
audit_date: '2019-09-09'
title: 'Use Cloud Backup to recover from a Bad Actor attack'
type: article
created_date: '2019-09-09'
created_by: Brett Johnson
last_modified_date: '2019-09-11'
last_modified_by: Brett Johnson
product: Cloud Backup
product_url: cloud-backup
---

The article shows you how to recover backups from partial deletion of
your assets at Rackspace. The **Related comments** section at the end of this
article discusses how to recover from complete asset deletion.

Occasionally, bad actors attempt to destroy your cloud assets, such as files,
websites, databases, and so on. The bad actor might be a foreign attacker who stole
cloud account authentication info, or it might be a disgruntled employee with
access to company assets or any similar bad actor. Attacks like this might
cripple or kill a company, and the ability to recover backups makes
the difference between whether the company survives the attack or not.

**Note:** It should go without saying that you are responsible for protecting
the credentials that allow access to your cloud assets. This article outlines
how to recover if your credentials were compromised.

### Symptoms of an attack

Company assets, such as servers, backups, or cloud files, suddenly begin
disappearing as fast as the bad actor can destroy them.

### Solution

**Note**: This article addresses the recovery of only those assets related to
Cloud Backup (CBU).

For each intact backup configuration (config) container in Cloud Files, you
can recover backups for that backup config.

The following steps provide a summary of the solution:

1. Save or recover as much from associated Cloud Files
   containers as possible.
2. The Rackspace CBU support team must revert any machine agents and backup
   configs that have been deleted for this account.
3. Do a cross-site restore from the recovered backups to new servers.

The following sections describe the preceding steps in detail.

#### Step 1

Time is of the essence in this step. You need to stop the damage before it
becomes total. Most importantly, stop the bad actor from deleting any
more Cloud Files assets. These should be protected first.

After you discover that assets are being destroyed, contact support to
immediately halt access to the account and reset credentials. If you have
monitoring and alerts in place to immediately notify stakeholders of
malfunctioning assets, you have an advantage in detecting these attacks.

One advantage of Cloud Files in this scenario is that there is not an easy way
to do bulk deletes through the web interface without some high-powered
utilities that aren't available through our web interface. So deleting
these files can be slow enough that you can interrupt the attacker before he
finishes.

The more Cloud Files assets that can be saved or restored before recovery starts,
the more backups you can salvage.

#### Step 2

Revert any valid machine agents and/or backup configs that have been deleted.

**Note**: The Rackspace CBU Operations Engineering (OpsEng) or support teams
must perform this step.

If you have any offsite backups of the Cloud Files containers for the backup
configs in question (see **Related comments** at the end of this article), you
should restore them to their original locations at this time. For this step to
be successful, you must have at least one undeleted (or restored) Cloud Files
container for at least one backup configuration.

When you request help for this step, reference the Cloud Backup support wiki article,
**Cloud Backup - Bad Actor Attack**, in your comments on the ticket. The public
can't view the article, but Cloud Backup support can access it. Only Rackspace Support
can perform the steps described in that wiki article. They must revert the
deleted assets (machine agents and backup configurations) in your account.

#### Step 3

For any machine agent and backup config that Support successfully restored, use
Cloud Backup to do a cross-site restore to a new server.

### Related comments

As mentioned earlier, it should go without saying that you are responsible for
protecting the credentials that allow access to your cloud assets. But sometimes
the good guys become the bad guys, or in spite of your best efforts, attackers
manage to defeat your protective measures.

The instructions in this article describe a strategy to recover from the scenario
where a bad actor compromised those credentials and destroyed some, or all, of
the assets in your account. The recovery process isn't easy, but losing all your
data is worse.

To significantly increase the chance of recovering assets deleted by a bad actor, you
can choose to have an offsite copy of one Cloud Files container for each backup
configuration that you want to protect. (Some hints for how to find these
containers are detailed below.) In this context, *offsite* refers to a
copy of Cloud Files containers on media which is not on Rackspace infrastructure
(which would, of course, be accessible via the stolen credentials). You can
restore these files to their original locations in Cloud Files and then use
them to create cross-site restores to new servers.

**Important:** For this solution to provide meaningful protection, you must
have separation of access. Because we assume bad actors in this scenario have
full access to your Rackspace assets through the stolen credentials, you must
make sure that those with access (stolen or otherwise) to the Rackspace asset
credentials do not have access to the offsite copies of the containers, and
vice versa. You can do this with policies like physically locking up the offsite
copies and giving the person who performs the offsite backups read-only access
to Cloud Files. So, for instance, your system administrator should not have
access to the offsite backup flash drive, and your secretary should have
read-only access to Cloud Files.

It is not an easy process to identify the containers in Cloud Files that hold
the artifacts necessary to restore backups. Open each machine agent in the
Cloud Backup Systems list. View the Agent Configuration for each agent. This
Agent Configuration is a large JSON document. The JSON has a section named
"BackupConfigurations". In that section there is an array of records that contain
backup configuration details. In each record is an item named "VolumeUri". This is
the private address which the API uses to store the artifacts necessary to restore
a backup. There is one such record for each backup configured for each agent,
and there may be multiple backups configured for a given agent. This means there
might be multiple VolumeUri addresses for any one agent. At the end of each address
is a section that starts with "z_DO_NOT_DELETE_CloudBackup_v2_0_" and which has a
GUID-formatted number appended to it. Search Cloud Files for a container name that
matches this z-name. This is the container that holds the artifacts that Cloud
Backup uses to restore files for this backup configuration. Save this entire
container in your off-site copy.

The Rackspace CBU team currently does not have a tool that can bulk-copy Cloud
Files containers, but there are third-party tools (such as swiftly or rclone)
that might be used for this. If we create a tool specifically for this purpose
in the future, we'll update this article.
