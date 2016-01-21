---
node_id: 1550
title: What is a Container in Cloud Files?
type: frequently_asked_question
created_date: '2012-07-24'
created_by: Rackspace Support
last_modified_date: '2014-05-22'
last_modified_by: Rose Contreras
product: Cloud Files
product_url: cloud-files
---

A Container is a &ldquo;storage compartment&rdquo; for your data and provides a way
for you to organize that data. You can think of a Container as analogous
to a folder in Windows&reg; or a directory in UNIX&reg;. The primary difference
between a Container and these other &ldquo;file system&rdquo; constructs is that
Containers cannot be nested. You can have up to 500,000 Containers in
your account, but they only exist at the &ldquo;top level&rdquo; of your account and
Containers cannot reside within other Containers.

![](http://c15156697.r97.cf2.rackcdn.com/1.png)

Note:  Containers scale to about one million objects before peformance
degrades. Containers can only be removed from Cloud Files if they do NOT
contain any storage Objects. In other words, make sure the Container is
empty before attempting to delete it.

