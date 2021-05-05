---
permalink: cloud-files-curl-cookbook
audit_date: '2021-04-20'
title: Cloud Files cURL cookbook
type: article
created_date: '2012-06-25'
created_by: Rackspace Support
last_modified_date: '2021-04-20'
last_modified_by: Ana Corpus
product: Cloud Files
product_url: cloud-files
---

Rackspace offers Cloud Files service with a RESTful API interface that you can use to integrate
with existing applications. You can use the interface to directly interact with the API to
perform ad hoc tasks or troubleshoot Cloud Files. Alternatively, you can use cURL to perform
these actions from the command line. cURL is a generic client that supports several protocols,
including HTTP. This article describes how to install cURL, its basic functions, and how to use
it with Cloud Files.

### Install cURL

All the major distributions have packages for installing cURL. Use the following
command to install cURL on Debian&reg; and the Ubuntu&reg; operating system:

    $ sudo apt-get install curl

Similarly, use the following command to install cURL on Fedora&reg;, CentOS&reg;, and
Red Hat&reg; Enterprise Linux&reg;:

    $ yum install curl

After you install cURL, use the following command to verify that it is
ready to use:

    $ curl --version
    curl 7.21.3 (i686-pc-linux-gnu) libcurl/7.21.3 OpenSSL/0.9.8o zlib/1.2.3.4 libidn/1.18
    Protocols: dict file ftp ftps gopher http https imap imaps ldap ldaps pop3 pop3s rtsp smtp smtps telnet tftp
    Features: GSS-Negotiate IDN IPv6 Largefile NTLM SSL libz

You can also install cURL on Microsoft&reg; Windows&reg;. To do so, visit
the [cURL homepage](https://www.curl.com/) and download the executable
from the [Downloads page](https://www.curl.com/download/). The Windows
binary requires you to install some Microsoft Visual C++&reg; libraries
to work correctly.

### cURL basics

cURL is a command-line tool that lets you communicate with
various services at a protocol level. In particular, cURL supports
HTTP(S) communication, which means that you can use it to query the
HTTP-based API service endpoints and issue API operations with a fine
level of detail.

#### Perform an HTTP GET operation

Browsers typically perform **HTTP GET** operations to download web
pages and images when you go to a website. In the same manner, you
can use cURL to issue an HTTP GET operation on a URL to retrieve the web
page data.

Running the following command with your favorite website URL returns the
HTML markup:

    $ curl https://www.example.com

By default, cURL sends the response body the server returns directly
to the terminal. You can also capture the output and send it directly to
a file, effectively downloading the file or page. You can do
this either by using the `-o` flag to specify an output file or by using
the Linux redirection operator to capture the output, as shown in the
following example:

    $ curl -o index.html https://www.example.com
    $ curl https://www.example.com > index.html

#### Perform an HTTP POST operation

You can also use cURL to perform an **HTTP POST** operation, which
most HTML-based forms use to send data to a remote server. There are a
few ways to tell cURL what data to send when doing a POST operation.
This article describes how to use the file-based method because many of
the Rackspace Cloud API POST operations involve sending JSON or
XML documents. To post an XML or JSON file, you need to specify the
`Content-Type` appropriately so that the receiving server knows what to
expect, as shown in the following examples:

    $ curl -X POST -d @mydocument.xml -H "Content-Type: application/xml" https://www.example.com/form
    $ curl -X POST -d @mydocument.json -H "Content-Type: application/json" https://www.example.com/form

You can also specify the data as a quoted string, but this can be
unwieldy when done from the command line.

#### Perform an HTTP PUT operation

The HTTP PUT operation is similar to the HTTP POST operation, except PUT
operations normally imply a storage request. For example,
uploading an object to a container is done by using a PUT operation. When
performing a PUT operation, you should specify the HTTP
`Content-Type` header of the uploaded object so that the
receiving server knows what kind of file it is. cURL automatically
passes through the required `Content-Length` headers to ensure that the
file uploads in a standard fashion. Use the following syntax:

    $ curl -X PUT -T myobject.jpg -H "Content-Type: image/jpeg" https://www.example.com/upload

#### View the HTTP headers

Many operations do not return a response body, just response headers.
These headers contain useful information, such as the HTTP response code. To view the
HTTP response headers, use the `-I` option, as shown in the following
example. This option is the equivalent of an **HTTP HEAD** request (X HEAD):

    $ curl -I https://www.example.com
    HTTP/1.0 302 Found
    Location: https://www.iana.org/domains/example/
    Server: BigIP
    Connection: Keep-Alive
    Content-Length: 0

#### View more HTTP debug information

At times, you might need to view the full HTTP request and response
transaction. You can do this by using the verbose (`-v`) flag, which prints out
practically all the HTTP data sent back and forth, including the
request headers. This flag helps with debugging.

    $ curl -v https://www.example.com
    * About to connect() to www.example.com port 80 (#0)
    * Trying 192.0.43.10... connected
    * Connected to www.example.com (192.0.43.10) port 80 (#0)
    > GET / HTTP/1.1
    ...

#### Send HTTP Headers

When sending an HTTP request, you sometimes need to specify
additional headers to give the server more information about the request
you are making. For example, specify the `Accept` header to
indicate the type of response you want back, either JSON or XML.

    $ curl -v -H "Accept: application/xml" www.example.com
    * About to connect() to www.example.com port 80 (#0)
    * Trying 192.0.43.10... connected
    * Connected to www.example.com (192.0.43.10) port 80 (#0)
    > GET / HTTP/1.1
    > User-Agent: curl/7.21.3 (i686-pc-linux-gnu) libcurl/7.21.3 OpenSSL/0.9.8o zlib/1.2.3.4 libidn/1.18
    > Host: www.example.com
    > Accept: application/xml
    >
    ...

### Authenticate with the API

Before you can use any of the Rackspace Cloud APIs, you must first
authenticate yourself and receive an authentication token. The token is
an ID string that various Rackspace Cloud APIs require when you make calls.
The typical lifetime of a token is 24 hours, and repeated authentication
requests always return the same token while it is still valid.

**Note:** Your token is crucial to your cloud service security, so keep it
secret. If another user gets your token, that user might get full access
to your cloud-based services.

To authenticate, you need to query the **Identity** API. The following example
uses Version 1.1 of the Identity API service. To query the
service, you need your Rackspace Cloud account username and API key.
For instructions on locating these credentials, see [View and Reset your API Key](/support/how-to/view-and-reset-your-api-key).

Authenticating requires sending a POST request to the Identity service
with a document that contains your Cloud credentials. You can submit XML
or JSON documents to the Rackspace Cloud APIs, but the remainder of the
examples in this article use XML documents because they are more
descriptive. Following is an example XML document saved as **auth.xml**:

    <?xml version="1.0" encoding="UTF-8"?>
    <credentials xmlns="https://docs.rackspacecloud.com/auth/api/v1.1"
    username="johndoe"
    key="4e229b2e0789d9070e8411c9beee1c13"/>

After you create the XML document, you can use cURL to send a POST request
with the document to the API endpoint. The service endpoint that you use
depends on whether you have a US-based or UK-based Cloud account:

-   US customers: https://auth.api.rackspacecloud.com/v1.1/auth
-   UK customers: https://lon.auth.api.rackspacecloud.com/v1.1/auth

User `johndoe`, who is a US-based customer, might use the following request:

    $ curl -X POST -d @auth.xml -H "Content-Type: application/xml" -H "Accept: application/xml"     https://auth.api.rackspacecloud.com/v1.1/auth

The following example shows the response to the authentication request:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <auth xmlns="https://docs.rackspacecloud.com/auth/api/v1.1">
    <token expires="2012-01-17T03:52:09.000-06:00" id="3c5c8187-2569-47e0-8a11-edadd384e12b"/>
    <serviceCatalog>
    <service name="cloudFilesCDN">
    <endpoint publicURL="https://cdn2.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b" v1Default="true" region="ORD"/>
    </service>
     <service name="cloudServers">
    <endpoint publicURL="https://servers.api.rackspacecloud.com/v1.0/123456" v1Default="true"/>
    </service>
    <service name="cloudFiles">
    <endpoint internalURL="https://snet-storage101.ord1.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b" publicURL="https://storage101.ord1.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b" v1Default="true" region="ORD"/>
    </service>
    </serviceCatalog>
    </auth>

In the preceding response, note the following information that you
need when using the Cloud Files API:

-   API token
-   Cloud Files public endpoint URL
-   Cloud Files CDN (internal) endpoint URL

If you intend to access Cloud Files from a Cloud Server in the same
data center, use the Cloud Files internal endpoint URL instead of the
public one. Using this URL allows the API calls to go directly to the
Cloud Files servers over the data center's ServiceNet private network.
The benefits of using ServiceNet are that the Cloud Server does not incur
bandwidth costs and that the throughput rates to and from the Cloud Files
storage servers are better.

### Cloud Files cURL recipes

This section contains cURL-based recipes that you can use with Cloud
Files API to quickly and easily do various Cloud Files-related
operations. The following recipes cover container and object storage operations
and the CDN-specific operations. To make any of the following
API calls, you need to pass the authentication token along with the
request. The example recipes use the authentication token,
`3c5c8187-2569-47e0-8a11-edadd384e12b`, and submit and receive
only XML documents.

The storage recipes require you to use the Cloud Files service endpoint
URL returned when you got your authentication token. The
following recipes use this example URL:

    https://storage101.ord1.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b

When you use the recipes, be sure to substitute your own endpoint URL.

#### Container storage recipes

This section has container recipes.

##### List containers

Querying the Cloud Files storage endpoint returns a simple list of
available containers, each on a new line.

    $ curl -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12b" https://storage101.ord1.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b/
    backup
    cloudservers
    images
    static

You can also list the containers with more details, including
information such as the container, size and the number of objects within
the container by passing the format parameter:

    $ curl -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12b" https://storage101.ord1.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b/?format=xml
    <?xml version="1.0" encoding="UTF-8"?>
    <account name="MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b">
    <container>
    <name>backup</name>
    <count>1</count>
    <bytes>54770176</bytes>
    </container>
    <container>
    <name>cloudservers</name>
    ...

##### Create a container

Creating a container requires sending a **PUT** request to the storage URL
and including a name for the container as part of the URL. The following
example shows the request to create a new container called `newcontainer`:

    $ curl -X PUT -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12b" https://storage101.ord1.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b/newcontainer
    202 Accepted

The response indicates that the system accepted the request for processing.

##### Delete a container

You can delete a container by issuing a **DELETE** request, but remember
that you can delete only empty containers. If a container currently has
objects within it, then delete those objects first. This request does not
return a content body, so consider including the verbose flag to verify
that the request returns an HTTP 204 response indicating success.

    $ curl -v -X DELETE -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12b" https://storage101.ord1.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b/newcontainer
    ...
    < HTTP/1.1 204 No Content
    < Content-Length: 0
    < Content-Type: text/html; charset=UTF-8
    < X-Trans-Id: tx6eeb58f3dfa44f2e892505b711e8aefa
    < Date: Wed, 01 Feb 2012 13:05:00 GMT

#### Object storage recipes

This section has object recipes.

##### List objects

Querying a container returns a simple list of objects within that
container. By default, list requests return only the first 10,000 objects. The
following example lists the objects of a container called **images**:

    $ curl -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12b" https://storage101.ord1.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b/images
    banner.jpg
    cloud.png
    rackspace.jpg

You can also use the format parameter to get more detailed information
about objects, such as size and content type:

    $ curl -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12b" https://storage101.ord1.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b/images?format=xml
    <?xml version="1.0" encoding="UTF-8"?>
    <container name="images">
    <object>
    <name>banner.jpg</name>
    <hash>9ed61f72b1f3777ff01b7ce128a67244</hash>
    <bytes>26326</bytes>
    ...

You can list more than 10,000 objects or filter by specific objects
by passing some additional URL parameter options. For more detailed
information about the available parameters and how they work, see the
[Cloud Files Developer Guide](https://docs.rackspace.com/docs/cloud-files/v1/).

##### Download an object

Sending a **GET** request on the full path to an object causes cURL to
download the content effectively. By default, the content goes straight
to the terminal. It is possible to pipe the data printed to the terminal
for processing or redirect the data to a file to save the contents. The
following example downloads the **cloud.png** object
from the **images** container to a local file of the same name by using the
cURL `-o` option to save the HTTP response body to a file:

    $ curl -o cloud.png -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12b" https://storage101.ord1.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b/images/cloud.png

##### Upload an object

To upload a new object to a container, perform a **PUT** request. Include
the file you want to upload along with any additional options you want,
such as file content-type headers. The following example uploads a file
called **style.css** to a container called **static** with a content-type of
**text/css**.

**Note:** Setting the correct content-type is important depending on where
you plan to use the object. In CSS files, for example, having
an improper content type could cause web browsers not to parse the CSS
when the system serves it from the CDN, resulting in an unstyled web page.

    $ curl -X PUT -T style.css -H "Content-Type: text/css" -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12b" https://storage101.ord1.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b/static/style.css
    <html>
    <head>
    <title>201 Created</title>
    </head>
    <body>
    <h1>201 Created</h1>
    <br /><br />
    </body>
    </html>

You can also to upload an object to make it appear as if the object is
part of a directory structure. You do this by naming the object with the
full path including the directory components. This is useful when
publishing containers to the CDN because a resulting CDN URL that appears as
if it was part of a directory structure is generally more organized.
The following example is the same as the preceding example except it names the
**style.css** object so that it becomes **css/style.css**:

    $ curl -X PUT -T style.css -H "Content-Type: text/css" -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12b" https://storage101.ord1.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b/static/css/style.css
    <html>
    <head>
    <title>201 Created</title>
    </head>
    <body>
    <h1>201 Created</h1>
    <br /><br />
    </body>
    </html>

##### Delete an object

To delete an object requires sending a DELETE request to the object to
be deleted. Providing the verbose (`-v`) flag helps because the call
does not return anything by default. An `HTTP 204 No Content` response
code indicates a successful deletion.

    $ curl -v -X DELETE -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12b" https://storage101.ord1.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b/static/style.css ...
    < HTTP/1.1 204 No Content
    < Content-Length: 0
    < Content-Type: text/html; charset=UTF-8
    < X-Trans-Id: tx08e07264230f46cea4bdbaf998e301c0
    < Date: Wed, 08 Feb 2012 19:24:17 GMT
    <
    * Connection #0 to host storage101.ord1.clouddrive.com left intact
    * Closing connection #0 * SSLv3, TLS alert, Client hello (1):

##### Perform a server-side copy

Use server-side copies to copy an existing object to a new storage location
without incurring the expense of performing the data upload from the client side
particularly for very large files. By combining server-side copies with
object deletion, you can perform object moves and rename operations by
first copying the object to the new location or name and then performing
a deletion of the original. Copying is not restricted to a single
container. The following example copies the **rackspace.jpg** file to a new
name of **rackspace.jpeg** as named in the Destination header:

    $ curl -X COPY -H "Destination: images/rackspace.jpeg" -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12b" https://storage101.ord1.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b/images/rackspace.jpg
    <html>
    <head>
    <title>201 Created</title>
    </head>
    <body>
    <h1>201 Created</h1>
    <br /><br />
    </body>
    </html>

##### Update object headers

You can update certain HTTP headers that correspond to an object by
performing a **POST** operation to the object path with the updated
header. This function is most useful for correcting an incorrectly set
`Content-Type` header. Other headers that you can set include the `CORS` and
`Content-Disposition` headers.

**Note:** You can also update the headers by performing a server-side copy
and passing in the new header. To do this requires you to set the
destination of the copy to be the same as the source.

Following is an example of how to update the `Content-Type` of an image to
**image/jpeg** by using the **POST** operation:

    $ curl -X POST -H "Content-Type: image/jpeg" -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12b" https://storage101.ord1.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b/images/rackspace.jpg
    <html>
    <head>
    <title>202 Accepted</title>
    </head>
    <body>
    <h1>202 Accepted</h1> The request is accepted for processing.<br /><br />
    </body>
    </html>

#### CDN-specific recipes

Cloud Files maintains a separate CDN API web service endpoint
specifically for CDN-related operations. The authentication process returns
this URL. The following recipes use this endpoint URL:

    https://cdn2.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b.

When you use the recipes, be sure to substitute your own endpoint URL.

##### List CDN-enabled containers

Performing a **GET** request on the CDN API URL returns a list of containers
that have been CDN-enabled at some point. Containers that have never
been CDN-enabled do not appear on this list. The following request lists
all CDN-enabled containers:

    $ curl -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12" https://cdn2.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b
    files
    static

##### CDN-enable a container

Before you can perform CDN operations on a container, you need to set it
to be CDN-enabled. You do this operation by performing a
**PUT** to the CDN URL and naming the container in question. You can
pass along additional CDN-related headers to initialize the content to
certain CDN attributes such as container time-to-live (TTL) and whether it
should have CDN logging enabled. If you don't pass along any additional CDN
headers, the system enables the container with the default values.

**Note:** Making a container CDN-enabled is not the same as publishing a
container. CDN-enabling a container simply makes it CDN-aware so that you
can use it with the CDN. By default, making a container CDN-enabled also
publishes it.

The following request enables and publishes the images container:

    $ curl -X PUT -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12b" https://cdn2.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b/images
    ...
    HTTP/1.1 204 No Content Date: Wed, 15 Feb 2012 20:28:29 GMT
    Server: Apache
    X-CDN-URI: https://c12345.r49.cf2.rackcdn.com
    X-CDN-SSL-URI: https://c12345.ssl.cf2.rackcdn.com X-CDN-STREAMING-URI: https://c12345.r49.stream.cf2.rackcdn.com
    X-CDN-Enabled: True
    X-TTL: 259200
    X-Log-Retention: False
    Connection: close
    Content-Type: text/plain; charset=UTF-8

##### View a container's CDN details

To view a container's CDN properties requires you to send a **HEAD**
request to the API CDN URL. Viewable information includes the following details:

- Whether the container is CDN-enabled
- If CDN logging is turned on
- The currently TTL setting
- The various CDN domain names that you can use to reference content within the container.

The following request lists the CDN details of the images container:

    $ curl -I -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12" https://cdn2.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b/images
    HTTP/1.1 204 No
    Content Date: Mon, 20 Feb 2012 19:39:41 GMT
    Server: Apache
    X-CDN-URI: https://c4965949.r49.cf2.rackcdn.com
    X-CDN-SSL-URI: https://c4965949.ssl.cf2.rackcdn.com
    X-CDN-STREAMING-URI: https://c4965949.r49.stream.cf2.rackcdn.com
    X-CDN-Enabled: True
    X-TTL: 259200
    X-Log-Retention: False
    Connection: close
    Content-Type: text/plain; charset=UTF-8

##### Update a container's CDN attributes

You can update the CDN attributes of a CDN-enabled container by sending
a **POST** request to the API CDN URL naming the container to be
updated and passing along one or more of the attribute headers. Trying
to update a container that has never been CDN-enabled
results in an `HTTP 404` error. Because the response does not return a
response body, use the verbose option to determine the operation status.

You can update the following CDN attributes:

-   **X-CDN-Enabled**: Indicates whether the system should publish the
    container. An unpublished container is not publicly visible. Note
    that you can still access any existing content cached within the network
    by using the CDN URL until the content's TTL expires and the system removes
    it from the network. It accepts a value of `True` or `False`.
-   **X-TTL**: Indicates the container's TTL value in seconds. This setting
    applies to the container itself and all objects within. It also
    controls how long the system caches content within the CDN. You cannot
    have per-object TTL values. There is a minimum limit of
    15 minutes and a maximum limit of 50 years.
-   **X-Log-Retention**: Indicates whether the container has CDN
    logging enabled. These are *W3C*-style HTTP logs for all CDN content
    requests for the particular container. It accepts a value of `True`
    or `False`.

The following example request unpublishes a container called **images**:

    $ curl -v -X POST -H "X-CDN-Enabled: False" -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12" https://cdn2.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b/images ...
    < HTTP/1.1 202 Accepted
    < Date: Mon, 20 Feb 2012 19:33:33 GMT
    < Server: Apache
    < X-CDN-URI: https://c4965949.r49.cf2.rackcdn.com
    < X-CDN-SSL-URI: https://c4965949.ssl.cf2.rackcdn.com
    < X-CDN-STREAMING-URI: https://c4965949.r49.stream.cf2.rackcdn.com
    < Content-Length: 0
    < Connection: close
    < Content-Type: text/plain; charset=UTF-8
    <

##### Purge an object

You can force the removal of content from the CDN by issuing a CDN purge
request with a **DELETE** operation. You can make a purge request on only a
per-object basis. The purge request schedules a job with Akamai to remove
the indicated content from all member nodes of the CDN, which can take some time
to complete. You can pass through the `X-Purge-Email` header together with a
comma-separated list of email addresses so that the system sends a notification
when the purge completes. Currently, you can perform only 25 purges
per account per day.

If you need to perform a container-level purge, contact support through a
ticket and name the container you want to purge. Support can perform this
purge for you. If you want a notification email,  provide the email addresses
to use in the ticket.

**Note:** Attempting to perform multiple purges on the same content while a
previous purge is still running results in an `HTTP 400` error.

The following operation performs a CDN purge of the **rackspace.png** file
from the **images** container with a notification email sent to
**user@example.com**. (Use the verbose (`-v`) option because the operation
does not return a response body.)

    $ curl -v -X DELETE -H "X-Purge-Email: user@example.com" -H "X-Auth-Token: 3c5c8187-2569-47e0-8a11-edadd384e12" https://cdn2.clouddrive.com/v1/MossoCloudFS_c4f83243-7537-4600-a94d-ab7065f0a27b/images/rackspace.png
    ...
    >
    < HTTP/1.1 204 No Content
    < Date: Mon, 20 Feb 2012 20:10:18 GMT
    < Server: Apache
    < Content-Length: 0
    < Connection: close
    < Content-Type: text/plain; charset=UTF-8
    <
    * Closing connection #0
    * SSLv3, TLS alert, Client hello (1):

### Summary

This article serves as a quick reference to the more common
Cloud Files API requests and how to use them with cURL. For more
information about other features that the Cloud Files API offers, see
the [Cloud Files API documentation](https://docs.rackspace.com/docs/user-guides/infrastructure/).
You can use the cURL techniques discussed in this article with other Rackspace Cloud-based APIs
and, more generally, for debugging HTTP- and HTTPS-based applications and web servers.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).
