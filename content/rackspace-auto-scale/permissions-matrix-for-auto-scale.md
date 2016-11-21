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

- **Admin** - provides full access to create, read, update, and delete.
- **Observer** - provides read-only access.

The matrix displays the method names, their corresponding RESTful API commands, and the roles that are supported.

| Method | API Action | Role | Description |
| ------ | ---------- | ---- | ----------- |
| Create Group | `POST /groups/` | **Admin only** | Creates an autoscaling group. |
| List Groups | `GET /groups/` | **Admin & Observer** | Lists the autoscaling groups available to the specified tenant. |
| List Group Details | `GET /groups/{groupId}` | **Admin & Observer** | Lists detailed autoscaling group configuration. |
| Delete Group | `DELETE /groups/{groupId}` | **Admin Only** | Deletes autoscaling group. |
| Get Group State | `GET /groups/{groupId}/state` | **Admin & Observer** | Reports autoscaling group state.  |
| Get Group Configuration | `GET /groups/{groupId}/config` | **Admin & Observer** | Lists autoscaling group configuration. |
| Replace Group Configuration | `PUT /groups/{groupId}/config` | **Admin Only**  | Updates autoscaling group configuration. |
| Get Launch Configuration  | `GET /groups/{groupId}/launch` | **Admin & Observer** | Lists launch configuration. |
| Replace Launch Configuration  | `PUT /groups/{groupId}/launch`  | **Admin Only**  | Update launch group configuration.  |
| Pause Group Policy Execution | `POST /groups/{groupId}/pause`  | **Admin Only** | Pauses policy execution. |
| Resume Group Policy Execution | `POST /groups/{groupId}/resume` | **Admin Only**  | Resumes policy execution.  |
| Get a List of Policies | `GET /groups/{groupId}/policies/`  | **Admin & Observer** | Lists scaling policies in the autoscaling group. |
| Get Details of a Policy  | `GET /groups/{groupId}/policies/{policyId}`  | **Admin & Observer** | Describes one policy.  |
| Create a New Policy  | `POST /groups/{groupId}/policies/` | **Admin Only** | Creates autoscaling policy. |
| Delete a Policy | `DELETE /groups/{groupId}/policies/{policyId}` | **Admin Only** | Deletes a policy.  |
| Replace a Policy | `PUT /groups/{groupId}/policies/{policyId}` | **Admin Only** | Updates policy. |
| Execute a Policy | `POST /groups/{groupId}/policies/{policyId}/execute` | **Admin Only** | Executes a policy. |
| Get a List of Webhooks | `GET /groups/{groupId}/policies/{policyId}/webhook` | **Admin Only** | Lists webhooks in the autoscaling group.  |
| Create a Webhook | `POST /groups/{groupId}/policies/{policyId}/webhook` | **Admin Only**  | Creates a webhook. |
| Replace a Webhook | `PUT /groups/{groupId}/policies/{policyId}/webhook/{webhookId}` | **Admin Only** | Updates a webhook.  |
| Delete a Webhook | `DELETE /groups/{groupId}/policies/{policyId}/webhook/{webhookId}` | **Admin Only** | Deletes a webhook. |
| View Webhook Info | `GET /groups/{groupId}/policies/{policyId}/webhook/{webhookId}` | **Admin Only** | Describes one webhook. |

### Related article

[Role-Based Access Control (RBAC) permissions matrix for Cloud Hosting](/how-to/permissions-matrix-for-role-based-access-control-rbac)
