---
permalink: simple-cron-setup-for-easy-action-scripting
audit_date:
title: Simple Cron Setup for Easy Action Scripting
created_date: '2019-01-18'
created_by: Rackspace Community
last_modified_date: 
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

This is a quick and simple guide to set up some directories and simple scripts to have CRON run different actions at regular times.  If you do not like pico, feel free to use vi, vim, nano, or whatever you like!

Set up system scripts and directories:

sudo mkdir /usr/local/sbin/continuous.active

sudo mkdir /usr/local/sbin/continuous.inactive

sudo mkdir /usr/local/sbin/hourly.active

sudo mkdir /usr/local/sbin/hourly.inactive

sudo mkdir /usr/local/sbin/daily.active

sudo mkdir /usr/local/sbin/daily.inactive

sudo mkdir /usr/local/sbin/weekly.active

sudo mkdir /usr/local/sbin/weekly.inactive

sudo pico /usr/local/sbin/continuous.sh


The following should be created as a text file php script to run each container and all scripts held inside at the specified interval.
    #!/bin/bash

    ACTIVE_SCRIPTS_DIR=/usr/local/sbin/continuous.active

    for module in `find "$ACTIVE_SCRIPTS_DIR" -maxdepth 1 -mindepth 1 -type f`; do

        if [ -x $module ]; then

            $module

        fi

    done

sudo chmod u+x /usr/local/sbin/continuous.sh

sudo pico /usr/local/sbin/hourly.sh

The following should be created as a text file php script to run each container and all scripts held inside hourly.
    #!/bin/bash

    ACTIVE_SCRIPTS_DIR=/usr/local/sbin/hourly.active

    for module in `find "$ACTIVE_SCRIPTS_DIR" -maxdepth 1 -mindepth 1 -type f`; do

        if [ -x $module ]; then

            $module

        fi

    done

sudo chmod u+x /usr/local/sbin/hourly.sh

sudo pico /usr/local/sbin/daily.sh

The following should be created as a text file php script to run each container and all scripts held inside daily.

    #!/bin/bash

    ACTIVE_SCRIPTS_DIR=/usr/local/sbin/daily.active

    for module in `find "$ACTIVE_SCRIPTS_DIR" -maxdepth 1 -mindepth 1 -type f`; do

        if [ -x $module ]; then

            $module

        fi

    done

sudo chmod u+x /usr/local/sbin/daily.sh

sudo pico /usr/local/sbin/weekly.sh

The following should be created as a text file php script to run each container and all scripts held inside weekly.

    #!/bin/bash

    ACTIVE_SCRIPTS_DIR=/usr/local/sbin/weekly.active

    for module in `find "$ACTIVE_SCRIPTS_DIR" -maxdepth 1 -mindepth 1 -type f`; do

       if [ -x $module ]; then

           $module

       fi

    done

sudo chmod u+x /usr/local/sbin/weekly.sh
sudo crontab -e
Add the folowing entries

    MAILTO= youremail@domain.com

    */5 * * * * /usr/local/sbin/continuous.sh

    6 */1 * * * /usr/local/sbin/hourly.sh

    16 02 * * * /usr/local/sbin/daily.sh
    26 03 * * sun /usr/local/sbin/weekly.sh
