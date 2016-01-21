---
node_id: 465
title: Ubuntu - mod rails installation
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2015-12-29'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

[Phusion's
Passenger](http://www.modrails.com/ "http://www.modrails.com/")
(mod\_rails) is an exciting development in serving your Ruby on Rails
application with the Apache web server.

Incredibly simple to install and use, you can have a rails application
up and running in no time. You don't have to worry about ports or
setting up a proxy to another server.

------------------------------------------------------------------------



<span class="mw-headline">Prerequisites </span>
-----------------------------------------------

-   Install Apache
-   Install Ruby and Rubygems



<span class="mw-headline">mod\_rails installation </span>
---------------------------------------------------------

Passenger (mod\_rails) is a rubygem.

We need to update the rubygems install:


    sudo gem update

and then install passenger:


    sudo gem install passenger

Once completed, we need to install the Apache2 module:


    sudo passenger-install-apache2-module

A dialogue opens in the terminal and starts with:

As suggested, press 'Enter/Return':

I deliberately left the Apache headers off the installation until this
point as I want to demonstrate how easy the installation is.

The passenger (mod\_rails) install has found a missing dependency &mdash;
let's press 'Enter/Return':

How cool is that? It tells us what to do.

Well, let's go ahead and install the headers (we'll use aptitude
though):


    sudo aptitude install apache2-prefork-dev

Once done, we can try the install again:


    sudo passenger-install-apache2-module

All being well, the install will complete with instructions at the end
letting us know we need to add some lines to the main Apache2 config
file.

No problem:


    sudo nano /etc/apache2/apache2.conf

Note: Passenger is an active gem and is being updated all the time.
Rather than copy and paste the following output, please ensure you copy
and paste the output from the install itself.

At the time of writing the article (well, updating it actually) I
installed passenger v2.0.6 &mdash; you may have installed a later version.

So, for my v2.0.6 install, I added the following lines to my
apache2.conf:


    LoadModule passenger_module /usr/lib/ruby/gems/1.8/gems/passenger-2.0.6/ext/apache2/mod_passenger.so
       PassengerRoot /usr/lib/ruby/gems/1.8/gems/passenger-2.0.6
       PassengerRuby /usr/bin/ruby1.8



<span class="mw-headline">Apache restart </span>
------------------------------------------------

Now all we need to do is restart Apache:


    sudo /etc/init.d/apache2 restart

Done

That's all we need to do to install mod\_rails onto our Cloud Server.

The next article will show how to create a Ruby on Rails application and
serve it using passenger &mdash; an incredibly easy process.

