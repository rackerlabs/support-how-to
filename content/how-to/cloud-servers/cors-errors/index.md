---
permalink: /cors-errors/
audit_date:
title: 'Cross-Reference Origin Sharing (CORS)'
type: article
created_date: '2021-03-10'
created_by: David Fonseca
last_modified_date: '2021-08-13'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

# CORS Errors
This article provides a short description related to the Cross-Reference Origin Sharing (CORS) errors that can appear on your requests through applications.

## What is CORS?
CORS is a standard that allows interactions with resources from a different origin. Based on the same-origin-policy (security mechanism) to prevent how a document or script loaded from one origin can interact with resources from another origin.
If the CORS is not configured you can see the error on the console's browser indicating that the request was blocked: "_Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at $somesite_".

_When do I know if the requests are from the same origin?_
It is simple if the two URLs have the same protocol, host, and port.
This an example of compliance with the _same-origin-policy_
https://localhost:80/index.html request data to https://localhost:80/api/user/75214
This an example of non-compliance with the _same-origin-policy_
https://localhost:80/index.html request data to https://example.com:80/api/user/75214

## What kind of errors could appear?
When a CORS error is shown on the console, a part of the text is a _reason_ message indicating what went wrong. The following list describes the most common CORS errors:

1. ###### CORS DISABLED
    Reason: A request was attempted but CORS is disabled on your browser.
    Solution: You need to navigate into setting's browser and set the option content.cors.disable false.
2. ###### CORS request did not succeed
    Reason: An HTTP request fails for network or protocol level. In some cases is caused for a plugin or extension or because the second origin has an invalid certificate. 
    Solution: Retry the request and disable the plugins and extensions. Check if the second origin is available and has a valid certificate.
3. ###### CORS header ‘Origin’ cannot be added
    Reason: The web browser cannot add the required origin header to the HTTP request.
    Solution: Verify if the script is not running with enhanced privileges.
4. ###### CORS request external redirect not allowed
    Reason: The request redirects to another origin (not the original).
    Solution: Update the URL on your server's code.
5. ###### CORS request not HTTP
    Reason: The request is not redirected to a valid HTTP URL, for example, file:/// URL. 
    Solution: Check the URL in your server's code.
6. ###### CORS header 'Access-Control-Allow-Origin' missing
    Reason: The response is missing the _Acces-Control-Allow-Origin_ header.
    Solution: Add the origin to the header of the request. _Access-Control-Allow-Origin: https://rackspace.com_ or you can use _*_ to allow access from any site.
7. ###### CORS header 'Access-Control-Allow-Origin' does not match 'xyz'
    Reason: The response includes more than one _Access-Control-Allow-Origin_.
    Solution: Make sure the CORS request is configured to include your origin in its _Access-Control-Allow-Origin_ header and only has an _Access-Control-Allow-Origin_ header.
8. ###### Credential is not supported if the CORS header ‘Access-Control-Allow-Origin’ is ‘*’
    Reason: The CORS request was attempted with the credentials flag set, but the server is configured using the wildcard ("*") as the value of Access-Control-Allow-Origin, which doesn't allow the use of credentials.
    Solution: Ensure that the credentials flag's value is false when issuing your CORS request.
    XMLHttpRequest setting the value of withCredentials to false.
    Server-sent events make sure EventSource.withCredentials is false (it's the default value).
    If using the Fetch API, make sure Request.credentials is "omit".
9. ###### Did not find method in CORS header ‘Access-Control-Allow-Methods’
    Reason: The method of the HTTP request is not included in the list of _Access-Control-Allow-Methods_ header.  
    Solution: Configure the header with the needed methods: _Access-Control-Allow-Methods: GET,HEAD,POST_
10. ###### Expected ‘true’ in CORS header ‘Access-Control-Allow-Credentials’
    Reason: When the server's _Access-Control-Allow-Credentials_ header's value is not set to true to enable their use.
    Solution: On the client side revise the following configuration:
    XMLHttpRequest setting the value of withCredentials to false.
    Server-sent events make sure EventSource.withCredentials is false (it's the default value).
    If using the Fetch API, make sure Request.credentials is "omit".
    To eliminate this error on the server-side set _Access-Control-Allow-Credentials_ value to true.
11. ###### CORS preflight channel did not succeed
    Reason: The CORS request requires and preflight and preflighting could not be performed. A cross-site request already did a preflight. The preflight request suffered any networking error.
    Solution: Verify that your code only preflight once per connection.
12. ###### Invalid token ‘xyz’ in CORS header ‘Access-Control-Allow-Methods’
    Reason: This occurs when the response to the CORS includes _Access-Control-Allow-Methods_ and at least one is an invalid header method.
    Solution: Verify that all methods in the _Access-Control-Allow-Methods_  are valid HTTP methods. 
13. ######  invalid token ‘xyz’ in CORS header ‘Access-Control-Allow-Headers’
    Reason: This occurs when the response to the CORS includes _Access-Control-Allow-Methods_ and at least one is an invalid header name.
    Solution: Verify that all header names in _Access-Control-Allow-Headers_ are not invalid or unknown. 
14. ###### Missing token ‘xyz’ in CORS header ‘Access-Control-Allow-Headers’ from CORS preflight channel
    Reason: This error occurs when attempting to preflight a header that is not included in the list specified by the _Access-Control-Allow-Headers_ header.
    Solution: The server needs to be updated so that it allows the indicated header or avoids it.
15. ###### Multiple CORS header 'Access-Control-Allow-Origin' not allowed
    Reason: More than one _Access-Control-Allow-Origin_ header was sent by the server. 
    Solution: Verify in your server that you cannot send a list of origins because the browsers only accept a single origin or null.

## Conclusions
This article shows the different type of errors and possible solutions you can get while using CORS within your web server.
