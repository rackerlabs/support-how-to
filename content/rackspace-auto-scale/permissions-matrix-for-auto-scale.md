---
permalink: permissions-matrix-for-auto-scale/
audit_date:
title: Permissions Matrix for Rackspace Auto Scale
type: article
created_date: '2013-09-04'
created_by: Renee Rendon
last_modified_date: '2016-11-21'
last_modified_by: Stephanie Fillmon
product: Rackspace Autoscale
product_url: rackspace-auto-scale
---

The Rackspace Auto Scale permissions matrix displays specific permissions for the following roles:

- **Admin** provides full access to create, read, update, and delete.
- **Observer** provides read-only access.

The matrix displays the Rackspace Auto Scale methods, their corresponding RESTful API commands, and the roles that are supported.

| Method | API action | Role | Description |
| ------ | ---------- | ---- | ----------- |
| Create scaling group | `POST /v1.0/{tenantId}/groups` | **Admin** | Creates an scaling group. |
| List scaling group | `GET /v1.0/{tenantId}/groups` | **Admin, Observer** | Lists the scaling groups available for a specified tenant. |
| Show scaling group details | `GET /v1.0/{tenantID}/groups/{groupID}` | **Admin, Observer** | Shows configuration details for a specified scaling group. |
| Delete scaling group | `DELETE /v1.0/{tenantID}/groups/{groupID}` | **Admin** | Deletes a specified scaling group. |
| Get scaling group state | `GET /v1.0/{tenantID}/groups/{groupId}/state` | **Admin, Observer** | Shows the current state of a scaling group. |
| Show scaling group configuration | `GET /v1.0/{tenantId}/groups/{groupID}/config` | **Admin, Observer** | Shows the configuration for a scaling group. |
| Update scaling group configuration | `PUT /v1.0/{tenantID}/groups/{groupID}/config` | **Admin**  | Updates the configuration for a scaling group. |
| Show launch configuration  | `GET /v1.0/{tenantID}/groups/{groupId}/launch` | **Admin, Observer** | Shows launch configuration details for a specified scaling group. |
| Update launch configuration | `PUT /v1.0/{tenantID}/groups/{groupId}/launch`  | **Admin**  | Updates an existing launch configuration for the specified scaling group. |
| Pause group | `POST /v1.0/{tenantID}/groups/{groupId}/pause` | **Admin** | Pauses the specified scaling group. |
| Resume group | `POST /v1.0/{tenantID}/groups/{groupId}/resume` | **Admin**  | Resumes the specified scaling group.  |
| List policies | `GET /v1.0/{tenantID}/groups/{groupId}/policies/` | **Admin, Observer** | Lists scaling policies that are available to a specified scaling group. |
| Show policy details | `GET /v1.0/{tenantID}/groups/{groupId}/policies/{policyId}`  | **Admin, Observer** | Shows scaling policy details. |
| Create scaling policy | `POST /v1.0/{tenantID}/groups/{groupId}/policies/` | **Admin** | Creates one or more scaling policies for a specified scaling group. |
| Delete scaling policy | `DELETE /v1.0/{tenantID}/groups/{groupId}/policies/{policyId}` | **Admin** | Deletes a specified scaling policy from the specified tenant. |
| Update a scaling policy | `PUT /v1.0/{tenantID}/groups/{groupId}/policies/{policyId}` | **Admin** | Updates an existing scaling policy for the specified tenant. |
| Execute policy | `POST /v1.0/{tenantID}/groups/{groupId}/policies/{policyId}/execute` | **Admin** | Runs a specified scaling policy. |
| List webhooks for a policy | `GET /v1.0/{tenantID}/groups/{groupId}/policies/{policyId}/webhook` | **Admin** | Lists webhooks and their IDs for a specified scaling policy. |
| Create webhook | `POST /v1.0/{tenantID}/groups/{groupId}/policies/{policyId}/webhook` | **Admin**  | Creates one or more webhooks for a specified scaling policy. |
| Update webhook | `PUT /v1.0/{tenantID}/groups/{groupId}/policies/{policyId}/webhook/{webhookId}` | **Admin** | Updates a webhook for a specified tenant and scaling policy.  |
| Delete webhook | `DELETE /v1.0/{tenantID}/groups/{groupId}/policies/{policyId}/webhook/{webhookId}` | **Admin** | Deletes a webhook for a specified scaling policy. |
| Show webhook details | `GET /v1.0/{tenantID}/groups/{groupId}/policies/{policyId}/webhook/{webhookId}` | **Admin** | Shows webhook details for a specified scaling policy. |

### Related article

[Role-Based Access Control (RBAC) permissions matrix for Cloud Hosting](/how-to/permissions-matrix-for-role-based-access-control-rbac)
