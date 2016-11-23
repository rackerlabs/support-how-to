---
permalink: detailed-permissions-matrix-for-cloud-images/
audit_date: '2016-11-29'
title: Permissions Matrix for Cloud Images
type: article
created_date: '2013-10-28'
created_by: Renee Rendon
last_modified_date: '2016-11-29'
last_modified_by: Cat Lookabaugh
product: Cloud Images
product_url: cloud-images
---

The Cloud Images permissions matrix displays specific permissions for the
following roles:

- **Admin** - provides full access to create, read, update, and delete.
- **Creator** - provides full access to create, read, and update.
- **Observer** - provides read-only access.

The matrix displays the method names, their corresponding RESTful API commands, and the roles that are supported.

| Method | API Action | Role | Description |
| ------ | ---------- | ---- | ----------- |
List All Images | `GET /v2/images` | **Observer & Creator & Admin** | Lists public virtual machine (VM) images.
Get an Image | `GET /v2/images/{image_id}` | **Observer & Creator & Admin** | Gets the details for the specified image.
Update an Image	| `PATCH /v2/images/{image_id}` | **Admin only** | Updates the specified image.
Delete an Image | `DELETE /v2/images/{image_id}` | **Admin only** | Deletes the specified image.
Create Image Member | `POST /v2/images/{image_id}/members` | **Creator & Admin** | Adds the specified tenant ID as an image member (user).
List Image Members | `GET /v2/images/{image_id}/members` | **Observer & Creator & Admin** | Returns a collection of members (user) with whom the image has been shared.
Show Image Member | `GET /v2/images/{image_id}/members/{member_id}` | **Observer & Creator & Admin** | Gets details for a specified image member.
Update Member Status | `PUT /v2/images/{image_id}/members/{member_id}` | **Admin only** | Sets the specified status for the specified member (user) of the specified image.
Delete Image Member | `DELETE /v2/images/{image_id}/members/{member_id}` | **Admin only** | Deletes the specified tenant ID from the member list of the specified image.
Add an Image Tag | `PUT /v2/images/{image_id}/tags/{tag}` | **Admin only** | Adds the specified tag to the specified image.
Delete an Image Tag	| `DELETE /v2/images/{image_id}/tags/{tag}` | **Admin only** | Deletes the specified tag from the specified image.
Get Images Schema | `GET /v2/schemas/images` | **Observer & Creator & Admin** | Gets a json-schema document that represents an images entity, which is a container of image entities.
Get Image Schema | `GET /v2/schemas/image` | **Observer & Creator & Admin** | Gets a json-schema document that represents a single image entity.
Get Image Members Schema | `GET /v2/schemas/members` | **Observer & Creator & Admin** | Gets a json-schema document that represents an image members entity.
Get Task Schema	| `GET /v2/schemas/task` | **Observer & Creator & Admin** | Gets a json-schema document that represents a specified task entity.
Get Tasks Schema | `GET /v2/schemas/tasks` | **Observer & Creator & Admin** | Gets a json-schema document that represents a tasks entity.
List Tasks | `GET /v2/tasks` | **Observer & Creator & Admin** | Returns a collection of tasks.
Create a Task | `POST /v2/tasks` | **Admin only** | Creates a task.
Get a Task | `GET /v2/tasks/{task_id}` | **Observer & Creator & Admin** | Gets the details for a specified task.

### Related article

[Role-Based Access Control (RBAC) permissions matrix for Cloud Hosting](/how-to/permissions-matrix-for-role-based-access-control-rbac)
