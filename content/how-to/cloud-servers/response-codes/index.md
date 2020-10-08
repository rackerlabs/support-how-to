---
permalink: response-codes/
audit_date:
title: Response Codes
type: article
created_date: '2020-10-03'
created_by: Matthew Brown
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

In this article, we will go over some common http error codes and what they mean.

## Differnt Types of Errors

If you are not able to view your website, you will want to pay attention to the errors (or lack of) that you receive. There are quite a bit of status codes but we will be covering the following common codes:

401 unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable


### 401 & 403

At face value, these errors look the same but are actually different on what they actually mean. For the 401 error, you are usually provided with a prompt to enter credentials. If you refuse to enter the credentials or enter credentials that are incorrect, you will be provided with this error. With the 403 error, this will not provide any credentials and will be prompted immediately with the error. This error usually shows up for URL's that are meant to be private or only accessible to select IP addresses.

### 404

This error code will appear when your browser cannot find the specific URL you are trying to reach. This usually occurs due to a number of reasons but the most common one is when the content of said URL was moved or deleted. So when you try and look for that specific content, the browser cannot find it.

### 500

This error is pretty self explanatory meaning that something went wrong on the server side. This can be a number of different reasons from Apache or Nginx crashing to the entire server being down.

### 502

A 502 error is similar to a 500 error however where this one is different is that instead of receiving the error from the host itself, it can originate somewhere upstream. What this means is that the host server may be running fine and another server that is being used as a proxy is not able to complete the request to the host, thus generating the error.

### 503

A 503 error is similar to a 500 error however where this one is different is that the problem will be with the actual web server itself (i.e. Apache or Nginx). This error states that while the actual server is up and running and able to receive the requests, the web server is temporarily unavailable and not able to handle the request. One of the main reasons this error appears is that the server is receiving a large amount of requests and cannot handle all of them. Therefor it prioritizes its existing requests and any new requests that come in will be greeted with the 503 error. Another cause for this error is that the website could be undergoing a maintenance and is only accepting certain connections while any other connections will be greeted with a 503 error.
