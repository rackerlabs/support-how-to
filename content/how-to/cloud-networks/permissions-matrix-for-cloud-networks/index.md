---
permalink: permissions-matrix-for-cloud-networks
audit_date: '2017-01-18'
title: Permissions Matrix for Cloud Networks
type: article
created_date: '2013-08-20'
created_by: Renee Rendon
last_modified_date: '2017-02-06'
last_modified_by: Stephanie Fillmon
product: Cloud Networks
product_url: cloud-networks
---

The Cloud Networks permissions matrix displays specific permissions for the following role-based access control (RBAC) roles:

- **Admin** provides full access to create, read, update, and delete.
- **Creator** provides limited access to create, read, and update.
- **Observer** provides read-only access.

The matrix displays the Cloud Networks methods grouped by category, their corresponding RESTful API commands, and the roles that are supported.

### Network operations

Method | API action | Role | Description
--- | --- | --- | ---
Retrieve list of networks | `GET /v2.0/networks` |	**Observer, Creator, Admin**	| Retrieves list of networks to which the specified tenant has access.
Create network | `POST /v2.0/networks` | **Creator, Admin**	| Creates a network.
Show network | `GET /v2.0/networks/{network_id}` |	**Observer, Creator, Admin**	| Retrieves information for a specified network.
Update network | `PUT /v2.0/networks/{network_id}` | **Creator, Admin**	| Updates certain network attributes.
Delete network | `DELETE /v2.0/networks/{network_id}` | **Admin** | Deletes a specified network and its associated resources.

### Subnet operations

Method | API action | Role | Description
--- | --- | --- | ---
Retrieve list of subnets | `GET /v2.0/subnets` | **Observer, Creator, Admin** | Retrieves list of subnets to which the specified tenant has access.
Create subnet | `POST /v2.0/subnets` | **Creator, Admin** | Creates a subnet on a specified network.
Show subnet | `GET /v2.0/subnets/{subnet_id}` |	**Observer, Creator, Admin**	| Retrieves information for a specified subnet.
Update subnet | `PUT /v2.0/subnets/{subnet_id}` | **Creator, Admin** | Updates a specified subnet.
Delete subnet	| `DELETE /v2.0/subnets/{subnet_id}` | **Admin** | Deletes a specified subnet.

### Port operations

Method | API action | Role | Description
--- | --- | --- | ---
Retrieve list of ports | `GET /v2.0/ports` | **Observer, Creator, Admin** | Retrieves list of ports to which the tenant has access.
Create port |	`POST /v2.0/ports` | **Creator, Admin**	| Creates a port on a specified network.
Show port | `GET /v2.0/ports/{port_id}` | **Observer, Creator, Admin** | Retrieves information for a specified port.
Update port | `PUT /v2.0/ports/{port_id}` | **Creator, Admin**	| Updates a specified port.
Delete port | `DELETE /v2.0/ports/{port_id}` | **Admin** | Deletes a specified port.

### Security groups operations

**Note:** The Security Groups API is currently in Limited Availability. It is available only to Managed Infrastructure customers and not to RackConnect or Managed Operations customers. To use this feature, contact Rackspace Support.

Method | API action | Role | Description
--- | --- | --- | ---
List security groups | `GET /v2.0/security-groups` | **Observer, Creator, Admin** | Retrieves a list of all security groups to which the specified tenant has access.
Create security group | `POST /v2.0/security-groups` | **Creator, Admin** | Creates a security group with default security group rules for the `IPv4` and `IPv6` ether types.
Show security group | `GET /v2.0/security-groups/{security_group_id}` | **Observer, Creator, Admin** | Retrieves information about the specified security group.
Delete security group | `DELETE /v2.0/security-groups/{security_group_id}` | **Admin** | Deletes a security group and its associated security group rules. The delete operation fails if a port is associated with the security group.
List security group rules | `GET /v2.0/security-group-rules` | **Observer, Creator, Admin** | Retrieves a list of security group rules for the requestor with the unique ID for each security group rule.
Create security group rule | `POST /v2.0/security-group-rules` | **Creator, Admin** | Creates a security group rule.
Show security group rule | `GET /v2.0/security-group-rules/{rules-security-groups-id}` | **Observer, Creator, Admin** | Retrieves information about the specified security group rule.
Delete security group rule | `DELETE /v2.0/security-group-rules/{rules-security-groups-id}` | **Admin** | Deletes the specified rule from a security group.

### Shared IP address operations

**Note:** The Shared IP Addresses API is available to all customers except RackConnect customers.

Method | API action | Role | Description
--- | --- | --- | ---
Retrieve list of IP addresses | `GET /v2.0/ip_addresses` | **Observer, Creator, Admin** | Retrieves list of IP addresses for the specified tenant.
Retrieve list of IP addresses explicitly associated with a server | `GET /v2/servers/{serverID}/ip_associations` | **Observer, Creator, Admin** | Retrieves list of IP addresses that are explicitly associated with a server.
Provision IP address | `POST /v2.0/ip_addresses` | **Creator, Admin** | Provisions an IP address on a specified network.
Update ports with an IP address | `PUT /v2.0/ip_addresses/{ipAddressID}` | **Admin** | Updates the port IDs that are sharing an IP address, using the IP address ID.
Show IP address details | `GET /v2.0/ip_addresses/{ipAddressID}` | **Observer, Creator, Admin** | Retrieves information for a specified IP address, using the IP address ID.
De-allocate IP address | `DELETE /v2.0/ip_addresses/{ipAddressID}` | **Admin** | De-allocates the specified associated IP address from the tenant, using the associated IP address ID.
Explicitly associate IP address with server <br /><br />**Note:** Before using this operation, you must use the `POST ip_addresses` operation to provision the IP addresses. | `PUT /v2/servers/{serverID}/ip_associations/{IPAddressID}` | **Admin** | Explicitly associates to a server with an IP address.
Show specific IP addresses explicitly associated with server | `GET /v2/servers/{serverID}/ip_associations/{IPAddressID}` | **Observer, Creator, Admin** | Retrieves information for a specific IP address explicitly associated with a server using the `/ip_associations` operation by specifying the associated IP address ID.
Delete association between IP address and server | `DELETE /v2/servers/{serverID}/ip_associations/{IPAddressID}` | **Admin** | Deletes the association between the server and the associated IP address, using the associated IP address ID.

### Related article

[Role-based Access Control (RBAC) permissions matrix for Cloud Hosting](/support/how-to/permissions-matrix-for-role-based-access-control-rbac)
