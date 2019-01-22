---
permalink: 3-2-1-backup-rule-for-the-cloud
audit_date:
title: 3-2-1 Backup Rule for the Cloud
created_date: '2019-01-22'
created_by: Rackspace Community
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

Backups are one of those things that you know you need. However, you sometimes find out either you were backing up the wrong thing or worse yet the backup failed or is corrupted and you did not know about it until it was too late. This is why when I am on the phone with customers and the topic comes up, I explain the classic 3-2-1 backup rule.

* Three backups
* Two in different formats
* One offsite

When we ran servers in or local offices, 'offsite' meant keeping a tape copy in a vault somewhere usually. This was sometimes at a bank or in a storage facility. Since we are moving more data to the cloud, the 'offsite' should probably mean your local office but doesn't have to. I'll explain more as we go along.

### Three Backups

This means three copies of your backup should exist somewhere. Jack Schofield coined the three laws of computing. His second law states "Data doesn’t really exist unless you have at least two copies of it." So, you need at least two backups in some way shape or form. One tool we rely on is our Cloud Backup product. I will spare all the technical details about it. You can read about that in many different places. I will say it does a file-by-file backup on a schedule of your choosing. That's one backup. Where is the other?
Another built-in tool some may think is server snapshots. This tool works for SOME servers in the Rackspace cloud. But, it should not be considered a backup solution. If you are running a Compute Instance, for example, your server will be booting from a Cloud Block Storage (CBS) volume. Server snapshots will not capture a CBS volume since they are done on the host machine. For the servers that it will work on, Performance instances, for example, you could still run the risk of possible corruption. If a database table is in the middle of being written to you may have a corrupt DB if your snapshot happens at that point in time. So what do you do?

### Two in different formats

I recommend making backups into smaller chunks that can be easily backed up by Cloud Backup and synced somewhere else. For me personally, my database backup is first saved locally. I'll compress my site files into a .zip or .tar and save those into a folder as well. The next part is to get it off that machine. Then I will have another job that runs at a certain time and sends those files somewhere else. You could, for example, have it be copied to another server every day, every 4 hours. So with Cloud Backup grabbing not only your site files as a whole, you are also getting a copy in a compressed archived format saved somewhere else in two different formats.

### One offsite

Like I said at the beginning of the article when servers were all in-house the common option for taking a backup offsite would be to have it stored at some safe location that was available 24/7. It was important that the location was not somebody’s home because what do you do then if they go on vacation or worse yet leave the company. Even a bank safe deposit box was not the best idea. What happens if you need that backup and the bank is closed!
Therefore, inverting the process where the 'offsite' copy should be a local copy in your office. It should be something available to your team that if they needed to access it, they could get the latest backup and build a new server. I have seen in some cases it is the shortest path to recovery if the other backups are unavailable or unreliable. Task an internal server, if available, to reach out and pull the file(s) down. Another suggestion is to have a server in a separate data center from where your primary sources are located grab the files.

### Conclusion

A total of three backups, two in different formats and one locally is a tried and true rule-of-thumb for keeping your data safe. Remember to test the backups. That is one of the advantages of the cloud is the ability to spin up infrastructure, test & verify and then delete.

### Additional Thoughts

Replication: I gave this some consideration. It is useful in a multi-tier cloud in that should a server fail, a replica server is in place to keep your site up and running. However, if a corrupted file is uploaded, the sync mechanism is going replicate that corrupted data. That's not helpful if you need to restore to a previous version. It could be used on scheduled task or cron basis. Still, I would want to be able to look at my backups within the past X days to see when things went wrong.
Cloud Block Storage Snapshots: At the time of this writing there isn't a way to schedule the snapshot and then delete the ones that are older than X days. Somebody probably has a script. And, because it is a snapshot, it falls victim to the same corruption issues server snapshots have as mentioned above.

### Conclusion

Perhaps tomorrow we will read something that makes replication and snapshots THE tool to use for backups. Technology is always adapting and changing to new environments. That reminds me of one more thing. Your backup solution will need to adapt and change with those new environments as well.
