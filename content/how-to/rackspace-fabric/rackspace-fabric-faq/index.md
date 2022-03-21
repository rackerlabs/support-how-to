---
permalink: "rackspace-fabric-faq"
audit_date: '2022-03-17'
type: article
title: "Rackspace Fabric FAQ"
created_date: '2022-03-17'
created_by: Asmita Nakwa
last_modified_date: '2022-03-17'
last_modified_by: Asmita
product: Rackspace Fabric
product_url: rackspace-fabric
---
### General

{{<accordion title="How can I reset the password of my Email?" col="in" href="accordion1">}}

If this is cloud account admin, they can review the following link (https://account.rackspace.com/event-history). It should help them understand any recent changes/access to their account.
{{</accordion>}}

{{<accordion title="How can I return back to my previous ticketing application?" col="in" href="accordion2">}}

The customer needs to add the firewall as a device and the **Add VPN User** template will be visible in common requests.
{{</accordion>}}

{{<accordion title="I am not able to login to MyRack portal. I have been asked for MFA verification though I have not configured MFA yet." col="in" href="accordion3">}}

MFA is mandatory for all customers but should allow customer to configure it. In case to remove the MFA please contact identity team.
{{</accordion>}}

{{<accordion title="I am not getting email notification via My Rackportal for incidents pertaining to Alert Logic." col="in" href="accordion4">}}

The customer will get notification only if the device in question is opted in.{{</accordion>}}

{{<accordion title="I am unable to login to MyRack Portal. While login it is showing no primary contact exists." col="in" href="accordion5">}}

There is no primary contact on the account. That is required for the account to work. I believe it can be set from Core.
{{</accordion>}}

### Permission

{{<accordion title="I am unable to upload documents and tried multiple times on multiple tickets." col="in" href="accordion1">}}

Opt in to the ticketing beta using the ticketing drop down in the global navigation.
{{</accordion>}}

{{<accordion title="I have raised ticket using Rackspace BETA version of ticketing system, but unable to edit the ticket. I am getting the notification as I don't have permission to update." col="in" href="accordion2">}}

User need to have either Edit or Admin permission on the device that is attached to a ticket in order to update the ticket.
{{</accordion>}}

{{<accordion title="I need to access the Managed Backup option in the portal."" col="in" href="accordion3">}}

As per documentation on below link, access to **View Reports** is required. To access the Managed Backup option. https://one.rackspace.com/display/myrackspace/Managed+Backup?searchId=OLV66F2LT
{{</accordion>}}

{{<accordion title="I am having issue in loading MAR report in the portal." col="in" href="accordion4">}}

MAR is generated at Global Data Operations side monthly which is then reported to MyRack. 
Below is a documentation with more details:
[MAR Process](https://one.rackspace.com/display/SMBHAMS/MAR+Processes)
{{</accordion>}}

{{<accordion title="How can I update device name in Vcenter by removing Devices IDs?" col="in" href="accordion5">}}

The naming convention for vm should be <CoreDeviceId>-<device name>, for these vms seems this pattern is not followed so we observed that deviceid is null in our database.
{{</accordion>}}

{{<accordion title="How can I update device name in Vcenter by removing Devices IDs?" col="in" href="accordion6">}}

The customer should be able to unlock the PIN from the portal, according to the directions posted here: [Support Pin Management](https://docs.rackspace.com/support/how-to/support-pin-management/) if they cannot, I would advise contacting the customer identity team, as that is where the PIN is stored. Be advised though: This is a security measure.  No action should be taken to subvert it without a suitable verification of the customers identity.
{{</accordion>}}