---
permalink: retrieving-cdn-access-logs-on-per-customer-per-container-basis
audit_date:
title: Retrieving CDN Access Logs on Per Customer/Per Container Basis
created_date: '2019-01-22'
created_by: Rackspace Community
last_modified_date: 
last_modified_by: 
product: Cloud Files
product_url: cloud-files
---

A common issue that is raised by customers is:
Do you have any mechanism for monitoring the usage of cloud files? I need to be able to bill different clients for the amount of bandwidth used in streaming each file on my files storage.

Yes, It is possible to achieve this. It's simply a case of knowing how to achieve it with the functional limitations that exist with HTTP logs. The same restrictions for virtualhost domains on webservers, apply to Rackspace Cloud Files. As such, you should not put the same customers files within the same container, in the same way you wouldn't put different customers files within the same virtualhost.
Some Functional Limitations (TLDR)

Unless you are keeping track of specifically which files are which customer, and wish to perform additional steps, such as grepping the CDN ACCESS LOGS for the file, and outputting them to a new customer_file_requests.log. However this would be in most cases quite impractical, unless you've already setup the containers, and need that kind of granularity, and I wouldn't recommend doing it like this, as you'll have to do a lot of extra scripting. File tracking granularity goes a little beyond the scope of this tutorial, however goaccess and other log parses will separate file requests hits and bandwdith too, it's just less ideal to track, than what this guide explains how to do; generating a different log set for each container for each customer, downloading and processing those logs.

Try and embrace Cloud Files CDN ACCESS LOGS in the same way you would any customer virtualhost running on any plesk or cpanel box. It's important in those cases to keep the virtualhosts seperate, so you can bill each customer based on the log file for that virtualhost. Hence the same with the containers logs.
Step 1: Enabling the .CDN_ACCESS_LOGS for a Cloud Files Container

Before proceeding, it's important to ensure logging is enabled on your Cloud Files CDN Enabled container. Logging is not turned on by default. As shown in the images below. You can reach this part of the mycloud control panel by navigating to Storage -> Cloud Files.
You may have no containers yet. If so, add one like shown below:
Enable the CDN ACCESS Logs on that container by right clicking the cog icon next to it and selecting 'Enable Logs'

Now this has been done for customer4, do the same for all of the customers you need to log individually. All of the .CDN_ACCESS_LOGS will be stored in a Cloud Files container called .CDN_ACCESS_LOGS/containername/. As such you can now see how customers can be billed individually, since the HTTP requests logs are split by customer in this way, like any virtualhost.

Step 2: Retrieving the .CDN_ACCESS_LOGS recursively (all CDN container logs)

It's possible to download the .CDN_ACCESS_LOGS using curl, but since that is a more advanced method requiring a better understanding, in my opinion. I'm trying to keep this as simple and as automatable as possible.
Enter Swiftly - a tool for downloading and uploading to Rackspace Cloud Files easily

To use swiftly, you need to know 3 things, your mycloud username, your mycloud API KEY and your datacentre region. For UK customers this is often LON, but might be IAD (Northern Virginia), DFW (Dallas Fort Worth), SYD (Sydney), ORD (Chicago) or HKG (Hong Kong).
Swiftly requires some dependencies to be installed for it to work. Install them like so:
# CentOS Systems
yum install python-devel gcc python-pip
pip install swiftly eventlet
 
# Debian / Ubuntu or other aptitude based OS 
apt-get install python-dev gcc python-pip
pip install swiftly eventlet
Configuring Swiftly for Cloud Files

Now we need to configure swiftly. Swiftly uses a configuration file called .swiftly.conf. This file needs to be there. If it isn't swiftly won't know what username and password, or region and endpoint to use. 

Swiftly automatically looks for the .swiftly.conf file in the 'home' directory of the current logged in user. If you are logged in as root, well, that's the path /root. So you want to edit the file in place like follows.
This tutorial assumes you are the root user.
su root

touch /root/.swiftly.conf
echo "[swiftly]" > /root/.swiftly.conf
echo "auth_user = mycloudusernamehere" >> /root/.swiftly.conf
echo "auth_key = myapikeyhere" >> /root/.swiftly.conf
echo "auth_url = https://identity.api.rackspacecloud.com/v2.0" >> /root/.swiftly.conf
echo "region = LON" >> /root/.swiftly.conf

As you can see from the above, you need to fill in the username, apikey, and region. (Note region can be one of LON,IAD,DFW,HKG,SYD,ORD. In this example we're using LON.
But where do I find the API key?

Click 'show' next to the API Key to display it.
Once you've set your username , API KEY and region in the .swiftly.conf file, verify that it looks right.
# cat .swiftly.conf
[swiftly]
auth_user = mycloudusernameshouldbeherenow
auth_key =  yourapikeyshouldbeherenow
auth_url = https://identity.api.rackspacecloud.com/v2.0
region = LON
Now you've verified you've configured swiftly correctly. Let's double check it works
$ swiftly get
.CDN_ACCESS_LOGS
customer1
customer2
customer3
customer4
Retrieving the CDN ACCESS LOGS with Swiftly

We are now ready to proceed. After testing and making sure everything works OK.

mkdir /root/.CDN_ACCESS_LOGS

cd /root/.CDN_ACCESS_LOGS

swiftly --verbose --eventlet --concurrency=100 get .CDN_ACCESS_LOGS --all-objects -o ./
Processing the CDN ACCESS LOGS

Swiftly has downloaded all of the access logs to folder /root/.CDN_ACCESS_LOGS. They are now ready for processing.
I wrote a small parser in BASH to demonstrate one possible way to achieve processing the CDN ACCESS LOGS, however any NCSA or CLF (Common Log Format) parser, such as awstats, piwik, or goaccess will work. In this instance I use goaccess, because it's Linux commandline, is simple, and generates really superb html outputs. This script is an example of parsing .CDN_ACCESS_LOGS enmasse, so for thousands of different containers, with a one to one relationship, 

One customer per container.

#!/bin/bash

# Author : Adam Bull
# Title: Rackspace CDN Log Parser
# Date: November 7th 2016

echo "Deleting previous jobs"
rm -rf parsed;
rm -rf parsed-combined

ls -ld */ | awk '{print $9}' | grep -v parsed > alldirs.txt


# Create Location for Combined File Listing for CDN LOGS
mkdir parsed

# Create Location for combined CDN or ACCESS LOGS
mkdir parsed-combined

# This just builds a list of the CDN Access Logs
echo "Building list of Downloaded .CDN_ACCESS_LOG Files"
sleep 3
while read m; do
folder=$(echo "$m" | sed 's@/@@g')
echo $folder
        echo "$m" | xargs -i find ./{} -type f -print > "parsed/$folder.log"
done < alldirs.txt

# This part cats the files and uses xargs to produce all the Log oiutput, before cut processing and redirecting to parsed-combined/$folder
echo "Combining .CDN_ACCESS_LOG Files for bulk processing and converting into NCSA format"
sleep 3
while read m; do
folder=$(echo "$m" | sed 's@/@@g')
cat "parsed/$folder.log" | xargs -i zcat {} | cut -d' ' -f1-10  > "parsed-combined/$folder"
done < alldirs.txt

# This part processes the Log files with Goaccess, generating HTML reports
echo "Generating Goaccess HTML Logs"
sleep 3
while read m; do
folder=$(echo "$m" | sed 's@/@@g')
goaccess -f "parsed-combined/$folder" -a -o "/var/www/html/$folder.html"
done < alldirs.txt
Here is the results of the goaccess CDN ACCESS LOGS!
Installing httpd for CDN LOG Server
yum install httpd awstats

Sure that, goes a little bit beyond the scope of this tutorial, but not by much. Essentially you have all the important things to start automating this, and making life a lot easier tracking things.

If anyone has issues with the Log Format, please let me know, since as you can see, I'm trimming the log format down to try and accomodate the simplest log parsing routine.

I have parsed CDN ACCESS LOGS without thousands of containers, so, if there really are that many, you might want to generate an index of them, so you can browse thru each of them. You can achieve that something like this (provided each container name is the hostname of the CDN *very important*). So this might vary from case to case.

[root@cdn-log-parser-mother html]# pwd
/var/www/html
[root@cdn-log-parser-mother html]# ls -al | awk '{print $9}' | xargs -i echo " {}
" > index.html
I hope that this is of some assistance, of course if you have additional questions, comments or concerns please don't hesitate to reach out to us, we are here to help!
