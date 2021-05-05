---
permalink: php-memory-limit
audit_date: '2020-10-18'
title: PHP memory limit
type: article
created_date: '2020-11-06'
created_by: James Andrade
last_modified_date: '2020-10-18'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

The PHP memory_limit is the maximum amount of server memory that each PHP script is
allowed to consume.

Per the [PHP documentation](https://www.php.net/manual/en/ini.core.php#ini.memory-limit):

"This sets the maximum amount of memory in bytes that a script is allowed to allocate. This helps prevent poorly
written scripts from eating up all available memory on a server."

The default value is `128MB`. Often, this is raised depending on the amount of memory needed for the web application.

When the PHP script exceeds the limit, you will receive an error similar to the following example:

    Fatal error: Allowed memory size of x bytes exhausted (tried to allocate x bytes) in /example/php/script
    PHP Fatal error: Out of memory (allocated x) (tried to allocate x bytes) in /example/php/script

You can increase the memory_limit by editing the php.ini file. You should look for a line cthat starts with **memory_limit**:

    memory_limit = 256M

Be aware that the server has a physical memory limit. You should optimize your code if the **memory_limit** parameter
is already set too high.
