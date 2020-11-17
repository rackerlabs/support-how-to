---
permalink: php-memory-limit/
audit_date:
title: PHP Memory Limit
type: article
created_date: '2020-11-06'
created_by: James Andrade
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# PHP Memory limit - memory_limit

The PHP memory_limit is the maximum amount of server memory each individual PHP script is allowed to consume. 

Per php docs:
```
This sets the maximum amount of memory in bytes that a script is allowed to allocate. This helps prevent poorly written scripts for eating up all available memory on a server. 
```
The default value is "128M". Often times, this will be raised depending on the amount of memory needed for the web application.

When the PHP scripts are exceeding the limit, you will get an error like shown below:
```
Fatal error: Allowed memory size of x bytes exhausted (tried to allocate x bytes) in /example/php/script
PHP Fatal error: Out of memory (allocated x) (tried to allocate x bytes) in /example/php/script
```
You can increase the memory_limit by editing the php.ini file. You should look for a line called "memory_limit":
```
memory_limit = 256M
```
Please be aware that the server only has so much memory, and you should also look to optimize your code in the event that the memory_limit is already set too high.
