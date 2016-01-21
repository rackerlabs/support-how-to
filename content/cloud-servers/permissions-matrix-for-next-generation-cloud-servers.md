---
node_id: 3386
title: Permissions Matrix for Next Generation Cloud Servers
type: article
created_date: '2013-04-10'
created_by: Renee Rendon
last_modified_date: '2016-01-18'
last_modified_by: Rose Contreras
product: Cloud Servers
product_url: cloud-servers
---

The following permissions matrix displays specific permissions for the
roles in Next Gen Cloud Servers. The matrix displays the method names,
their corresponding RESTful API commands, and the roles that are
supported.

**[API Documentation](http://docs.rackspace.com/)**

**[Related Knowledge Center
Articles](/how-to/)**

**[Next Generation Cloud Servers
Terminology](#Next%20Generation%20Cloud%20Servers%20Terminology)**

### <span>**As of April 21, 2014**</span>

CAPABILITY

ROLE

DESCRIPTION

Method Name

API Action

Observer

Creator

Admin



### Servers

<div>

<span>List Servers</span>

</div>

<div>

<span>GET /servers</span>

</div>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists IDs, names, and links for all servers.</span>

<span>List All Details for All Servers</span>

<span>GET /servers/detail</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists all details for all servers.</span>

Create Server

<span>POST /servers</span>



<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Creates a server</span>.

Get Server Details

<span>GET /servers/{id}</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists details for a specified server.</span>

Update Server

<span>PUT /servers/{id}</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Updates one or more editable attributes for a specified
server.</span>

Delete Server

<span>\*Note: The user must also have a Cloud Block Storage Admin
role.</span><span> </span>

<span>DELETE /servers/{id}</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Deletes a specified server.</span>

### Server Key Pairs

<span>Create or Upload a New Keypair</span>

<span>POST /os-keypairs</span>



 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Generates or uploads a keypair consisting of private key/public
key.</span>

<span>List Keypairs</span>

<span>GET /os-keypairs</span>



 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists </span><span>a keypair consisting of private key/public
key.</span>

<span>Delete Server Keypair</span>

<span>DELETE /os-keypairs/{keypair name}</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Deletes a keypair of a specified name.</span>

### Server Addresses

List Addresses

<span>GET /servers/{id}/ips</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists all networks and server addresses associated with a
specified server.</span>

<span>List Addresses by Network</span>

<span>GET /servers/{id}/ips/{networkLabel}</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists addresses associated with a specified server and
network.</span>

### Server Actions

<span>Change Administrator password, Reboot Server, Rebuild Server,
Resize Server, Confirm Resized Server, Revert Resized Server, Enter
Resuce Mode, Exit Rescue Mode, or Create Image</span>

<span>POST /servers/{id}/action</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Performs the requested action.</span>

### Volume Attachment Actions

<span>Attach Volume to Server</span>

<span><span>\*Note: The user must also have a Cloud Block Storage Admin
or Creator role.</span><span> </span></span>

<span>POST /servers/{id}/os-volume\_attachments</span>



<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Attaches a volume to the specified server.</span>

<span>List Volume Attachments</span>

<span>GET /servers/{id}/os-volume\_attachments</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists the volume attachments for the specified server.</span>

<span>Get Volume Attachment Details</span>

<span>GET /servers/{id}/os-volume\_attachments/{attachment\_id}</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists volume details for the specified volume attachment
ID.</span>

<span>Delete Volume Attachment</span>

<span>DELETE
/servers/{id}/os-volume\_attachments/{attachment\_id}</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Deletes a specified volume attachment from a specified server
instance.</span>

### Flavors

<span>List Flavors</span>

<span>GET /flavors</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists IDs, names, and links for all available flavors.</span>

<span>Get All Flavors Details</span>

<span>GET /flavors/detail</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists all details for all available flavors.</span>

<span>Get Flavor Details</span>

<span>GET /flavors/{id}</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists details of the specified flavor.</span>

### Images

Create Images

POST /servers/{id}/action





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Creates an image.</span>

List Images

<span>GET /images</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists IDs, names, and links for all available images.</span>

<span>Get All Image Details</span>

<span>GET /images/detail</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>List all details for all available images.</span>

<span>Get Image Details</span>

<span>GET /images/{id}</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists details of the specified image</span>

<span>Delete Image</span>

<span>DELETE /images/{id}</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Deletes the specified image.</span>

### Metadata

<span>List Metadata </span><span>Associated with a Server</span>

<span>GET /servers/{id}/metadata</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists all metadata associated with a server.</span>

<span>List Metadata Associated with an Image</span>

<span>GET /images/{id}/metadata</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists all metadata associated with an image.</span>

<span>Set Metadata for a Specified Server</span>

<span>PUT /servers/{id}/metadata</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Sets metadata for the specified server.</span>

<span>Set Metadata for a Specified Image</span>

<span>PUT /images/{id}/metadata</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Sets metadata for the specified image.</span>

<span>Update Metadata Items for a Specified Server</span>

<span>POST /servers/{id}/metadata</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Updates metadata items for the specified server.</span>

<span>Update Metadata Items for a Specified Image</span>

<span>POST /images/{id}/metadata</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Updates metadata items for the specified image.</span>

<span>Get a Metadata Item Associated with a Server</span>

<span>GET /servers/{id}/metadata/key</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Retrieves a single metadata item associated with a server.</span>

<span>Get a Metadata Item Associated with an Image</span>

<span>GET /images/{id}/metadata/key</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Retrieves a single metadata item associated with an image.</span>

<span>Set a Metadata Item for a Specified Server</span>

<span>PUT /servers/{id}/metadata/{key}</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Sets a metadata item for a specified server.</span>

<span>Set a Metadata Item for a Specified Image</span>

<span>PUT /images/{id}/metadata/{key}</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Sets a metadata item for a specified image.</span>

<span>Delete a Metadata Item for a Specified Server</span>

<span>DELETE /servers/{id}/metadata/{key}</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Deletes a metadata item for the specified server.</span>

<span>Delete a Metadata Item for a Specified Image</span>

<span>DELETE /images/{id}/metadata/{key}</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Deletes a metadata item for the specified image.</span>

### RACKSPACE EXTENSIONS

**<span>Used Limits Extension</span>**

<span>Used Limits Extension</span>

<span>GET v2/{tenant\_id}/limits</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Extends limits to include information about the absolute limits
that are currently used.</span>

**<span>Scheduled Images Extension</span>**

<span>Enable Scheduled Images</span>

<span>POST /servers/{serverId}/rax-si-image-schedule</span>



 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Enables scheduled images on a server, by creating an
image\_schedule resource.</span>

<span>Show Scheduled Images</span>

<span>GET /servers/{serverId}/rax-si-image-schedule</span>

 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Shows scheduled images setting.</span>

<span>Disable Scheduled Images</span>

<span>DELETE /servers/{serverId}/rax-si-image-schedule</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Disables scheduled images by deleting the image\_schedule resource
that indicates the scheduled image service should create snapshots of
this server.</span>

### CLOUD NETWORKS

**<span>Networks</span>**

<span>List Networks</span>

<span>GET /os-networksv2</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists the networks configured for a specified tenant ID.</span>

<span>Create Network</span>

<span>POST /os-networksv2</span>



<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Creates a network for a specified tenant ID.</span>

<span>Provision Server and Attach Networks</span>

<span>POST /</span><span>os-networksv2</span>



<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Provisions a new server with specified networks.</span>

<span>Shows Network</span>

<span>GET /os-networksv2/{id}</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Shows information for a specified network ID.</span>

<span>Delete Network</span>

<span>DELETE /os-networksv2/{id}</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Deletes a specified network.</span>

**<span>Virtual Interfaces</span>**

<span>List Virtual Interfaces </span>

<span>GET /servers/{instance\_id}/os-virtual-interfacesv2</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Lists all virtual interfaces configured for a server
instance</span>.

<span>Create Virtual Interface </span>

<span>POST /servers/{instance\_id}/os-virtual-interfacesv2</span>



<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Creates a virtual interface for a network and attaches the network
to a server instance</span>.

<span>Delete Virtual Interface</span>

<span>DELETE
/servers/{instance\_id}/os-virtual-interfacesv2/interface\_id</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_1.png" alt="check" width="41" height="39" />

<span>Deletes a virtual interface from a server instance</span>.


-

Next Generation Cloud Servers Terminology
---------------------------------------------

### <span>Flavor</span>

<span>A resource configuration for a server. Each flavor is a unique
combination of disk, memory, vCPUs, and network bandwidth.</span>

### <span>Image</span>

<span>A collection of files for a specific operating system (OS) that
you use to create or rebuild a server. Rackspace provides pre-built
images. You can also create custom images from servers that you have
launched. Custom images can be used for data backups or as "gold" images
for additional servers.</span>

### <span>Key Pair</span>

<span>A cryptographic combination of public and private keys used for
asymmetric encryption.</span>

### Server

<span>A virtual machine (VM) instance in the Cloud Servers environment.
To create a server, you must specify a name, flavor reference, and image
reference.</span>

<span> </span>

[&lt; Permission Matrices for RBAC](/how-to/permissions-matrix-for-role-based-access-control-rbac)
--------------------------------------------------------------------------------------------------------------------------------------------



