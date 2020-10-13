---
permalink: http-response-status-codes/
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
specific request has been completed. In this article, we will go
over some common http error codes and what they mean.

## Types of Errors

If you are not able to view your website, you will want to pay attention to the
errors (or lack of) that you receive. Responses are grouped in classes:

| Class | Error code |
|----|----|
| Informational | 100–199|
| Successful | 200–299|
| Redirects | 300–399|
| Client errors | 400–499|
| Server errors | 500–599|..

We will be covering the following common codes:

- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error
- 502 Bad Gateway
- 503 Service Unavailable

### 401 Unauthorized & 403 Forbidden

The 401 error, you are usually provided with a prompt to enter credentials, if
you refuse to enter the credentials or enter credentials that are incorrect, you
will be provided with this error. On the other hand, 403 error, will not prompt
for credentials and will deliver the error immediately. This usually means the
URL is meant to be private or only accessible to selected IP addresses.

### 404 Not Found

The error code will appear when your browser cannot find the specific URL you
are trying to reach. The most common reason is when the content was moved or
deleted.

### 500 Internal Server Error

The error means that there is a *server-side* problem, this can be a number of
different reasons from Apache or Nginx crashing to the entire server being down.

### 502 Bad Gateway

A 502 error is similar to a error 500, however this means that the host server
may be running fine while another server that is being used as a proxy is not able
to complete the request to the host, thus generating the error.

### 503 Service Unavailable

Common causes are a server that is down for maintenance or that is overloaded.
