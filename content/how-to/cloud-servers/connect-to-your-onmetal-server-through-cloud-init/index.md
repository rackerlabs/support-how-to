---
permalink: connect-to-your-onmetal-server-through-cloud-init/
audit_date: '2020-10-15'
title: Connect to your OnMetal Server through cloud-init
type: article
created_date: '2014-07-22'
created_by: Paul Querna
last_modified_date: '2020-10-15'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

`cloud-init` works out of the box with OnMetal servers. Therefore, you can
create a **cloud-config.yml** file as follows:

    #cloud-config
    write_files:
    - path: /hello-world
    permissions: 755
    content: |
    #!/bin/bash -e
    echo "hello world"

Next, run the following command in the command line, by using your Secure Shell (SSH) key name:

    supernova iad boot --flavor onmetal-general2-medium --image b59fc7a5-de35-4fd3-87f8-c5f2e390f1ad --user-data cloud-config.yml --key-name pquerna
    pq-cloud-init-test

When the server starts, you can see a */hello-world* Bash script in your OnMetal instance.


**Note:** For more examples of what `cloud-init` can do, see <https://cloudinit.readthedocs.org/en/latest/>.
