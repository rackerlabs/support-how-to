---
permalink: permissions-matrix-for-next-generation-cloud-servers/
audit_date: '2016-11-30'
title: Permissions Matrix for Cloud Servers
type: article
created_date: '2013-04-10'
created_by: Renee Rendon
last_modified_date: '2016-11-30'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

The Cloud Servers permissions matrix displays specific permissions for the
following roles:

- **Admin** - provides full access to create, read, update, and delete.
- **Creator** - provides access to create, read, and update.
- **Observer** - provides read-only access.

The matrix displays the method names, their corresponding RESTful API commands,
and the roles that are supported.

Method Name | API Action | Role | Description
--- | --- | --- | ---
List Servers | `GET /servers` | **Observer Creator Admin** | Lists IDs, names, and links for all servers.
List All Details for All Servers | `GET /servers/detail` | **Observer Creator Admin** |	Lists all details for all servers.
Create Server | `POST /servers` | **Creator Admin** | Creates a server.
Get Server Details | `GET /servers/{id}` | **Observer Creator Admin**	| Lists details for a specified server.
Update Server	| `PUT /servers/{id}` |	**Admin only** | Updates one or more editable attributes for a specified server.
Delete Server<br /><br /> **Note:** The user must also have a Cloud Block Storage Admin role. | `DELETE /servers/{id}` | **Admin only**	| Deletes a specified server.
Create or Upload a New Keypair | `POST /os-keypairs` } |  **Creator Admin** | Generates or uploads a keypair consisting of private key/public key.
List Keypairs	| `GET /os-keypairs` |  **Creator Admin**	| Lists a keypair consisting of private key/public key.
Delete Server Keypair | `DELETE /os-keypairs/{keypair name}` | **Admin only**	| Deletes a keypair of a specified name.
List Addresses | `GET /servers/{id}/ips` | **Observer Creator Admin** |	Lists all networks and server addresses associated with a specified server.
List Addresses by Network	| `GET /servers/{id}/ips/{networkLabel}` | **Observer Creator Admin** | Lists addresses associated with a specified server and network.
Change Administrator password, Reboot Server, Rebuild Server, Resize Server, Confirm Resized Server, Revert Resized Server, Enter Rescue Mode, Exit Rescue Mode, or Create Image | `POST /servers/{id}/action` | **Admin only** |	Performs the requested action.
Attach Volume to Server | **Note:** The user must also have a Cloud Block Storage Admin or Creator role. | `POST /servers/{id}/os-volume_attachments` | **Creator Admin**	| Attaches a volume to the specified server.
List Volume Attachments	| `GET /servers/{id}/os-volume_attachments` | **Observer Creator Admin** | Lists the volume attachments for the specified server.
Get Volume Attachment Details |	`GET /servers/{id}/os-volume_attachments/{attachment_id}` | **Observer Creator Admin** | Lists volume details for the specified volume attachment ID.
Delete Volume Attachment | `DELETE /servers/{id}/os-volume_attachments/{attachment_id}`  | **Admin only**	| Deletes a specified volume attachment from a specified server instance.
List Flavors | `GET /flavors` | **Observer Creator Admin** | Lists IDs, names, and links for all available flavors.
Get All Flavors Details | `GET /flavors/detail` | **Observer Creator Admin** | Lists all details for all available flavors.
Get Flavor Details | `GET /flavors/{id}` | **Observer Creator Admin** | Lists details of the specified flavor.
Create Images	| `POST /servers/{id}/action` | **Admin only** | Creates an image.
List Images |	`GET /images` | **Observer Creator Admin** | Lists IDs, names, and links for all available images.
Get All Image Details	| `GET /images/detail` | **Observer Creator Admin**	| List all details for all available images.
Get Image Details	| `GET /images/{id}` | **Observer Creator Admin** |	Lists details of the specified image
Delete Image | `DELETE /images/{id}` | **Admin only** | Deletes the specified image.
List Metadata Associated with a Server | `GET /servers/{id}/metadata` | **Observer Creator Admin** | Lists all metadata associated with a server.
List Metadata Associated with an Image | `GET /images/{id}/metadata` | **Observer Creator Admin**	| Lists all metadata associated with an image.
Set Metadata for a Specified Server | `PUT /servers/{id}/metadata` | **Admin only**	| Sets metadata for the specified server.
Set Metadata for a Specified Image | `PUT /images/{id}/metadata` | **Admin only** | Sets metadata for the specified image.
Update Metadata Items for a Specified Server | `POST /servers/{id}/metadata` | **Admin only**	| Updates metadata items for the specified server.
Update Metadata Items for a Specified Image | `POST /images/{id}/metadata` | **Admin only**	| Updates metadata items for the specified image.
Get a Metadata Item Associated with a Server | `GET /servers/{id}/metadata/key` | **Observer Creator Admin** | Retrieves a single metadata item associated with a server.
Get a Metadata Item Associated with an Image | `GET /images/{id}/metadata/key` | **Observer Creator Admin**	| Retrieves a single metadata item associated with an image.
Set a Metadata Item for a Specified Server | `PUT /servers/{id}/metadata/{key}` | **Admin only** | Sets a metadata item for a specified server.
Set a Metadata Item for a Specified Image	| `PUT /images/{id}/metadata/{key}` | **Admin only** | Sets a metadata item for a specified image.
Delete a Metadata Item for a Specified Server | `DELETE /servers/{id}/metadata/{key}` | **Admin only** | Deletes a metadata item for the specified server.
Delete a Metadata Item for a Specified Image | `DELETE /images/{id}/metadata/{key}` | **Admin only** | Deletes a metadata item for the specified image.
Used Limits Extension | `GET v2/{tenant_id}/limits` | **Observer Creator Admin** | Extends limits to include information about the absolute limits that are currently used.
Enable Scheduled Images | `POST /servers/{serverId}/rax-si-image-schedule` | **Observer Creator Admin**	| Enables scheduled images on a server, by creating an image_schedule resource.
Show Scheduled Images	| `GET /servers/{serverId}/rax-si-image-schedule` | **Observer Creator Admin** |	Shows scheduled images setting.
Disable Scheduled Images | `DELETE /servers/{serverId}/rax-si-image-schedule` |	**Admin only** | Disables scheduled images by deleting the image_schedule resource that indicates the scheduled image service should create snapshots of this server.
List Networks |	`GET /os-networksv2` | **Observer Creator Admin**	| Lists the networks configured for a specified tenant ID.
Create Network | `POST /os-networksv2` | **Creator Admin** | Creates a network for a specified tenant ID.
Provision Server and Attach Networks | `POST /os-networksv2` | **Creator Admin** | Provisions a new server with specified networks.
Shows Network	| `GET /os-networksv2/{id}` | **Observer Creator Admin** | Shows information for a specified network ID.
Delete Network | `DELETE /os-networksv2/{id}` |	**Admin only** | Deletes a specified network.
List Virtual Interfaces | `GET /servers/{instance_id}/os-virtual-interfacesv2` | **Observer Creator Admin** |	Lists all virtual interfaces configured for a server instance.
Create Virtual Interface | `POST /servers/{instance_id}/os-virtual-interfacesv2` | **Creator Admin** | Creates a virtual interface for a network and attaches the network to a server instance.
Delete Virtual Interface | `DELETE /servers/{instance_id}/os-virtual-interfacesv2/interface_id` |	**Admin only** | Deletes a virtual interface from a server instance.

### Related articles

[Permission Matrices for RBAC](/how-to/permissions-matrix-for-role-based-access-control-rbac)
