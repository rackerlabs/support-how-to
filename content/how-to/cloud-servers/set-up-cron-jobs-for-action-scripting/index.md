---
permalink: set-up-cron-jobs-for-action-scripting
audit_date: '2022-05-12'
title: Set up cron jobs for action scripting
type: article
created_date: '2022-05-12'
created_by: Rackspace Support
last_modified_date: '2022-05-12'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to set up directories and scripts to have cron run different actions
at regular times. 

This article uses the `pico` text editor, but you can use any text editor that you want, such as
`vi`, `vim` or `nano`.

### Set up system scripts and directories

Use the following commands to set up the system scripts and directories for cron to run:

```sh
    [user@server ~]$ sudo mkdir /usr/local/sbin/continuous.active
    [user@server ~]$ sudo mkdir /usr/local/sbin/continuous.inactive
    [user@server ~]$ sudo mkdir /usr/local/sbin/hourly.active
    [user@server ~]$ sudo mkdir /usr/local/sbin/hourly.inactive
    [user@server ~]$ sudo mkdir /usr/local/sbin/daily.active
    [user@server ~]$ sudo mkdir /usr/local/sbin/daily.inactive
    [user@server ~]$ sudo mkdir /usr/local/sbin/weekly.active
    [user@server ~]$ sudo mkdir /usr/local/sbin/weekly.inactive
```

#### Set up script for continuous jobs

Run the following command to create the script file for continuous jobs and open it in a text editor:

```sh
    [user@server ~]$ sudo pico /usr/local/sbin/continuous.sh
```

Insert the following script to run each container and all scripts held inside at the specified interval:

```bash
    #!/bin/bash
    ACTIVE_SCRIPTS_DIR=/usr/local/sbin/continuous.active
    for module in `find "$ACTIVE_SCRIPTS_DIR" -maxdepth 1 -mindepth 1 -type f`; do
        if [ -x $module ]; then
            $module
        fi
    done
```

Run the following command to make the **continuous.sh** script executable:

```sh
    [user@server ~]$ sudo chmod u+x /usr/local/sbin/continuous.sh
```

#### Set up script for hourly jobs

Run the following command to create the script file for hourly jobs and open it in a text editor:

```sh
    [user@server ~]$ sudo pico /usr/local/sbin/hourly.sh
```

Insert the following script to run each container and all scripts held inside hourly:

```bash
    #!/bin/bash
    ACTIVE_SCRIPTS_DIR=/usr/local/sbin/hourly.active
    for module in `find "$ACTIVE_SCRIPTS_DIR" -maxdepth 1 -mindepth 1 -type f`; do
        if [ -x $module ]; then
            $module
        fi
    done
```

Run the following command to make the **hourly.sh** script executable:

```sh
    [user@server ~]$ sudo chmod u+x /usr/local/sbin/hourly.sh
```

#### Set up script for daily jobs

Run the following command to create the script file for daily jobs and open it in a text editor:

```sh
    [user@server ~]$ sudo pico /usr/local/sbin/daily.sh
```

Insert the following script to run each container and all scripts held inside daily:

```bash
    #!/bin/bash
    ACTIVE_SCRIPTS_DIR=/usr/local/sbin/daily.active
    for module in `find "$ACTIVE_SCRIPTS_DIR" -maxdepth 1 -mindepth 1 -type f`; do
        if [ -x $module ]; then
            $module
        fi
    done
```

Run the following command to make the **daily.sh** script executable:

```sh
    [user@server ~]$ sudo chmod u+x /usr/local/sbin/daily.sh
```

#### Set up script for weekly jobs

Run the following command to create the script file for weekly jobs and open it in a text editor:

```sh
    [user@server ~]$ sudo pico /usr/local/sbin/weekly.sh
```

Insert the following script to run each container and all scripts held inside weekly:

```sh
    #!/bin/bash
    ACTIVE_SCRIPTS_DIR=/usr/local/sbin/weekly.active
    for module in `find "$ACTIVE_SCRIPTS_DIR" -maxdepth 1 -mindepth 1 -type f`; do
       if [ -x $module ]; then
           $module
       fi
    done
```

Run the following command to make the **weekly.sh** script executable:

```sh
    [user@server ~]$ sudo chmod u+x /usr/local/sbin/weekly.sh
```

### Add scripts to the crontab file

A crontab file contains a list of commands meant to be run at specified times. Use the following
command to edit the crontab file:

```sh
    [user@server ~]$ sudo crontab -e
```
Each line in the crontab file has five date and time fields in the following format:

```text
    minute (0-59) hour (0-23) day (1-31) month (1-12) weekday (0-6)
```

If you want to run a script some number of times per time unit, you can use the format `*/n`, where `n` is the number
of times that you want the script to run.

Add the following entries to the crontab file:

```text
    MAILTO= youremail@domain.com

    */5 * * * * /usr/local/sbin/continuous.sh
    6 */1 * * * /usr/local/sbin/hourly.sh
    16 02 * * * /usr/local/sbin/daily.sh
    26 03 * * 0 /usr/local/sbin/weekly.sh
```

<br>
Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).