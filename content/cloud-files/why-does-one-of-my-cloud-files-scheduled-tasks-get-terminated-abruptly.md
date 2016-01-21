---
node_id: 750
title: Why does one of my Cloud Files scheduled tasks get terminated abruptly?
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2014-03-25'
last_modified_by: Kyle Laffoon
product: Cloud Files
product_url: cloud-files
---

The Rackspace Cloud system restricts the maximum execution time of any
one cron job to 15 minutes. Please make sure that your script is well
tested and can complete its intended job within this time frame.

