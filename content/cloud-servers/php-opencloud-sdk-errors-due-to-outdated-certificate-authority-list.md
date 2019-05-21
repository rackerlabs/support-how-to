---
permalink: php-opencloud-sdk-errors-due-to-outdated-certificate-authority-list
audit_date:
title: sdk Errors Due to Outdated Certificate Authority List on Open Cloud
created_date: ‘2019-5-15'
created_by: Rackspace Community
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

The Rackspace Cloud PHP software developement kit (SDK), PHP-Opencloud, is built on Guzzle, which uses its own 
certificate authority file, and the Rackspace Cloud recently rotated the Secure Socket Layer (SSL) certificate 
for `identity.api.rackspacecloud.com`.

If the certificate authority file on your server is outdated, you may see an error similar to the following:

    Fatal error: Uncaught exception 'Guzzle\Http\Exception\CurlException' with message '[curl] 60: [url] 
    https://identity.api.rackspacecloud.com/v2.0/tokens' 

To resolve this error, perform the folowing actions:

1. Find and replace Guzzle's certificate authority file. For example, it might be located 
in **/var/www/www.website.com/site/library/apis/rollbarphp/vendor/guzzle/guzzle/src/Guzzle/Http/Resources/cacert.pem**. 

2. Download the [updated certificate file](https://curl.haxx.se/ca/cacert.pem) and overwrite the Guzzle certificate. 

If this does not resolve the issue, we recommend that you open an issue on this github repo: <<add repo link>>
