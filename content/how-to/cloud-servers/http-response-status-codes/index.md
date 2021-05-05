---
permalink: http-response-status-codes
audit_date: '2020-10-03'
title: HTTP response status codes
type: article
created_date: '2020-10-03'
created_by: Matthew Brown
last_modified_date: '2020-10-03'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

HTTP (Hypertext Transfer Protocol) response status codes indicate whether a
specific request succeeded or failed. This article describes
some common HTTP error codes and what they mean.

### Types of errors

If you can't view your website, you should pay attention to the
errors (or lack of errors) that you receive. Responses are grouped in the following classes:

| Class | Error code |
|----|----|
| Informational | 100–199|
| Successful | 200–299|
| Redirects | 300–399|
| Client errors | 400–499|
| Server errors | 500–599|..

The next section covers the following common codes:

- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error
- 502 Bad Gateway
- 503 Service Unavailable

#### 401 unauthorized and 403 forbidden

With the `401` error, you are usually provided with a prompt to enter credentials. If
you refuse to enter the credentials or enter credentials that are incorrect, you
get this error. On the other hand, the `403` error does not prompt
for credentials and delivers the error immediately. This usually means the
URL is private or accessible only to selected IP addresses.

#### 404 not found

The error code appears when your browser cannot find the specific URL you
entered. Most commonly, the content was moved or deleted.

#### 500 internal server error

The error means that there is a *server-side* problem. Many reasons can cause this
from Apache&reg; or Nginx&reg; crashing to the entire server being down.

#### 502 bad gateway

A `502` error is similar to the `500` error. However, this error means that the host server
might be running fine while another server that is being used as a proxy cannot
complete the request to the host, thus generating the error.

#### 503 service unavailable

Common causes are a server that is down for maintenance or overloaded.
