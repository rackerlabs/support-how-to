---
permalink: apache-cannot-be-started-after-reinstall
audit_date:
title: 'Apache Cannot be Started After Reinstall'
type: article
created_date: '2022-06-9'
created_by: Ivan Espejel
last_modified_date: '2022-06-9'
last_modified_by: Ivan Espejel
product: Cloud Servers
product_url: cloud-servers
---
As depicted below, there is the case in which an original install of Apache 2.4 on Ubuntu is not starting even after removing or purging the files in /etc/apache2 as well as reinstalling apache. 

**NOTE:** Ubuntu 14.04 and Ubuntu 16.04 have both gone End Of Life, this article is no longer maintained and you should update to a supported version.

```text
apache2: Syntax error on line 140 of /etc/apache2/apache2.conf: 
Syntax error on line 2 of /etc/apache2/mods-enabled/access_compat.load: 
Cannot load /usr/lib/apache2/modules/mod_access_compat.so into server: 
/usr/lib/apache2/modules/mod_access_compat.so: cannot open shared object file: No such file or directory
Action 'configtest' failed.
```

This is due to a configuration file that's trying to load a library trying to load a library (`mod_access_compat.so`) that it cannot find.

The file appears to be part of the [apache2-bin package](http://packages.ubuntu.com/search?searchon=contents&keywords=mod_access_compat.so&mode=exactfilename&suite=trusty&arch=any), therefore all its files must be present (installed) with:

```sh
$ sudo apt-get --reinstall install apache2-bin
```
</br>

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).