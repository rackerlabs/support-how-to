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

Rackspace Cloud recently rotated the SSL certificate for identity.api.rackspacecloud.com . The Rackspace Cloud PHP SDK (PHP-Opencloud) is built on Guzzle, which uses its own certificate authority file. 

If the certificate authority file is outdated, you may see an error similar to 

Fatal error: Uncaught exception 'Guzzle\Http\Exception\CurlException' with message '[curl] 60: [url] 
https://identity.api.rackspacecloud.com/v2.0/tokens' 

Solution: Find and replace Guzzle's certificate authority file. For example, it might be located at: /var/www/www.website.com/site/library/apis/rollbarphp/vendor/guzzle/guzzle/src/Guzzle/Http/Resources/cacert.pem. 

If you download the updated file here: https://curl.haxx.se/ca/cacert.pem and overwrite, it should resolve this issue. If not, we recommend opening an issue on the github repo.
