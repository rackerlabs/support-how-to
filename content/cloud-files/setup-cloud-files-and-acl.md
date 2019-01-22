---
permalink: setup-cloud-files-and-acl
audit_date:
title: Setup Cloud Files and ACL (Access Control List)
created_date: '2019-01-22'
created_by: Rackspace Community
last_modified_date: 
last_modified_by: 
product: Cloud Files
product_url: cloud-files
---

This is a walk-through on how to use ACLs (Access Control Lists) with Cloud Files. Rackspace Cloud Files Access Control List is a Cloud Files feature that allows account owners to specify read or write access to a particular container and for a particular user with RBAC (Role Based Access Control).
You can find all of the documentation at http://docs.rackspace.com/
This post will show you how to setup a new RBAC user and then setup ACLs via REST API with cURL and the python-swiftclient as the Primary Account Owner for the created RBAC user.
First thing you will want to do is create a RBAC user from the control panel(mycloud.rackspace.com). After you have logged in, you should see your username at the top right-hand corner of the screen. Click on the username and then click on User Management. From the User Management page you will want to create a new user. You will want to define your users roles but will want to leave the Cloud Files role set to No Access. Complete the user information and then click on Create User. The new user should have generated a new APIKEY. 
You can pass the following headers to enable container level access using cURL.
X-Container-Read – This container header can contain a comma-delimited list of users that can read the container (allows the GET method for all objects in the container).
X-Container-Write – This container header can contain a comma-delimited list of users that can write to the container (allows PUT, POST, COPY and DELETE methods for all objects in the container).
You can set these special headers only on containers, and they apply to all objects within the container. The values for these container headers can have zero to many users.
For example, let’s suppose that you have a container ACL_Container within Cloud Files. Let’s also suppose that you created a user RBAC_USER. You can provide this user with read access to ACL_Container by setting its X-Container-Read header to RBAC_USER. Likewise, you can provide this user with write access to ACL_Container by setting its X-Container-Write header to RBAC_USER.
The account owner does not need to be included in either ACL because the account owner always has read and write access to everything in their Cloud Files account. If you created additional users, you can set the header values to RBAC_USER, RBAC_USER2, RBAC_USER3, where space before or after a comma is acceptable.
As the Primary Account Owner you will want to perform the following action. You will need to authenticate with your username and APIKey to retrieve your Auth-Token. The token will be used to pass calls using cURL. 'X-Auth-Token'
curl -s -XPOST https://identity.api.rackspacecloud.com/v2.0/tokens -d '{ "auth":{ "RAX-KSKEY:apiKeyCredentials":{ "username":"USERNAME_HERE", "apiKey":"API_KEY_HERE" } } }' -H "Content-type: application/json" |python -m json.tool
The Above should output data and and provide you the 'token'
"token": {
"RAX-AUTH:authenticatedBy": [
"APIKEY"
],
"expires": "2014-09-12T03:02:40.024Z",
"id": "TOKEN_HERE",
"tenant": {
"id": "ACCOUNT_ID",
"name": "ACCOUNT_ID"
}
},
Next you will want to create a container using the token retrieved by authenticating with the username and APIKey. You will also need the correct storage endpoint followed by the container name you are creating. In this example we will create the container 'ACL_Container' using cURL: 
curl -XPUT -H 'X-Auth-Token: $token' https://storage101.iad3.clouddrive.com/v1/MossoCloudFS_0a0a000a-000a-000a-000a-00a00000a00a/ACL_Container
Creating a container with swiftclient:
swift -A https://auth.api.rackspacecloud.com/v1.0 -U USERNAME_HERE -K API_KEY_HERE post ACL_Container
Once the container has been successfully added, we can proceed to adding ACLs to the container using cURL:
curl -XPOST -H 'X-Auth-Token: $token' https://storage101.iad3.clouddrive.com/v1/MossoCloudFS_0a0a000a-000a-000a-000a-00a00000a00a/ACL_Container -H 'x-container-read: RBAC_USER' -H 'x-container-write: RBAC_USER'
Adding ACLs to the container using swiftclient:
swift -A https://auth.api.rackspacecloud.com/v1.0 -U ACCOUNT_USERNAME -K ACCOUNT_APIKEY post -r RBAC_USER ACL_Container
swift -A https://auth.api.rackspacecloud.com/v1.0 -U ACCOUNT_USERNAME -K ACCOUNT_APIKEY post -w RBAC_USER ACL_Container
After adding the ACLs, you can check the container headers to verify ACLs using cURL:
cURL:
curl -i -XHEAD -H 'X-Auth-Token: $token' https://storage101.iad3.clouddrive.com/v1/MossoCloudFS_0a0a000a-000a-000a-000a-00a00000a00a/ACL_Container
HTTP/1.1 204 No Content
Content-Length: 0
X-Container-Object-Count: 0
X-Container-Write: RBAC_USER
Accept-Ranges: bytes
X-Storage-Policy: Policy-0
X-Container-Read: RBAC_USER
X-Container-Bytes-Used: 0
X-Timestamp: 1410426988.44932
Content-Type: text/plain; charset=utf-8
X-Trans-Id: tx898647c0f1d5410aa4168-00541168bdord1
Date: Thu, 11 Sep 2014 09:17:49 GMT
Checking the headers with Swiftclient
swiftclient:
swift -A https://auth.api.rackspacecloud.com/v1.0 -U ACCOUNT_USERNAME -K ACCOUNT_APIKEY stat ACL_Container
Account: MossoCloudFS_0a0a000a-000a-000a-000a-00a00000a00a
Container: ACL_Container
Objects: 0
Bytes: 0
Read ACL: RBAC_USER
Write ACL: RBAC_USER
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: Policy-0
X-Timestamp: 1410425120.72477
X-Trans-Id: txc8a18e53f6d24796b5cd7-0054116635ord1
Content-Type: text/plain; charset=utf-8
ACL issue with swiftclient.
Although swiftclient is a great tool, there are some limitations. The biggest issue I see is with the RBAC_USER having no access to Cloud Files and only Read/Write access to a container which is specified, any time you attempt to upload a file ie:
swift -A https://auth.api.rackspacecloud.com/v1.0 -U RBAC_USER -K $API_KEY upload ACL_Container testfile
The above will firstly attempt to create the container ACL_Container, however since the restricted user does not have access to Cloud Files, this will simply return a 403 Forbidden and then attempt to upload the file 'testfile' without issue. You can use another tool for swiftclient, swiftly. You can pass additional parameters with swiftly which will allow your restricted user to upload the file directly without attempting to create the container. ie:
swiftly -A https://identity.api.rackspacecloud.com/v2.0/ -U RBAC_USER -K $API_KEY put --input=testfile ACL_Container/testfile
The above should return a simple 201 Created and upload the file without any issues.
Conclusion
Since 'No Access' was given to the user 'RBAC_USER' when the account owner created the user, the new user cannot access the container from the control panel. The user RBAC_USER now has read and write access to the container ACL_Container and can only access the container and its objects using the API. Now as a Primary Account Owner you can provide fine-grained access control for your Cloud Files containers. Together, they allow you to specify read and write access for your users. 
Links:
Overview of role based access control(RBAC) - http://www.rackspace.com/knowledge_center/article/overview-role-based-access-control-rbac
Cloud Files Documentation - http://docs.rackspace.com/files/api/v1/cf-devguide/content/Overview-d1e70.html
Another great write up about RBAC and ACLs - http://www.rackspace.com/blog/create-cloud-files-container-level-access-control-policies/
