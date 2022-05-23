---
permalink: "rackspace-fabric-faq"
audit_date: '2022-05-20'
type: article
title: "Rackspace Fabric FAQ"
created_date: '2022-03-17'
created_by: Asmita Nakwa
last_modified_date: '2022-05-20'
last_modified_by: Asmita
product: Rackspace Fabric
product_url: rackspace-fabric
---

### General
{{<accordion title="How can I reset the password of my Email?" col="in" href="accordion1">}}

If you're a cloud account administrator, go to https://account.rackspace.com/event-history. It should support users in knowing any recent modifications or account access.
{{</accordion>}}

{{<accordion title="How can I return back to my previous ticketing application?" col="in" href="accordion2">}}
Rackspace is deactivating the former ticketing component and migrating clients to Fabric Ticketing, which has been utilized by multi-cloud users for some time. New features and customer feedback enhancements are gradually being integrated in the new Fabric Ticketing application.
{{</accordion>}}

{{<accordion title="I am not able to login to MyRack portal. I have been asked for MFA verification though I have not configured MFA yet." col="in" href="accordion3">}}
MFA is mandatory for all customers but should allow customer to configure it. In case to remove the MFA please contact identity team. To configure MFA, refer to [Multi-Factor Authentication](/support/how-to/multi-factor-authentication)
{{</accordion>}}

{{<accordion title="I am not getting email notification via My Rackportal for incidents pertaining to Alert Logic." col="in" href="accordion4">}}
You will receive the notification if the device in question is enabled in the **Notification Preference** option. To check the preference option, refer to [Notification-Preference](/support/how-to/notification-preference).
 {{</accordion>}}

{{<accordion title="I am unable to login to MyRack Portal. While login it is showing no primary contact exists." col="in" href="accordion5">}}
Create a new ticket in the fabric ticketing app under the category **Account** and select **User Management** as the account type. Contact your Admin or follow up with the support team or Account Manager if you are unable to log into the portal.
{{</accordion>}}

### Permission

{{<accordion title="I am unable to upload documents and tried multiple times on multiple tickets." col="in" href="accordion1">}}
Opt in to the ticketing beta using the ticketing drop down in the global navigation.
{{</accordion>}}

{{<accordion title="I am unable to edit a ticket. I am getting the notification as I don't have permission to update." col="in" href="accordion2">}}
Contact an admin (customer side) or contact the Customer Success Manager or Support Team.
{{</accordion>}}

{{<accordion title="I need to access the Managed Backup option in the portal." col="in" href="accordion3">}}
To access **View Reports**, you can see documentation linked below. To have access to the Managed Backup feature. https://one.rackspace.com/display/myrackspace/Managed+Backup?searchId=OLV66F2LT
{{</accordion>}}

{{<accordion title="I am having issue in loading MAR report in the portal." col="in" href="accordion4">}}
MAR is generated at Global Data Operations side monthly which is then reported to MyRack. 
Below is a documentation with more details:
[MAR Process](https://one.rackspace.com/display/SMBHAMS/MAR+Processes)
{{</accordion>}}

{{<accordion title="How can I update device name in Vcenter by removing Devices IDs?" col="in" href="accordion5">}}
The naming convention for vm should be <CoreDeviceId>-<device name>, for these vms seems this pattern is not followed so we observed that deviceid is null in our database.
{{</accordion>}}

{{<accordion title="I am not able to generate PIN via Rackspace portal." col="in" href="accordion6">}}

The customer should be able to unlock the PIN from the portal, according to the directions posted here: [Support Pin Management](https://docs.rackspace.com/support/how-to/support-pin-management/) if they cannot, then it is advised to contact the customer identity team, as that is where the PIN is stored. Be advised though: This is a security measure.  No action should be taken to subvert it without a suitable verification of the customers identity.
{{</accordion>}}
