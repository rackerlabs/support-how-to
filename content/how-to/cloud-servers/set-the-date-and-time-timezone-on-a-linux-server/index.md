---
permalink: set-the-date-and-time-timezone-on-a-linux-server
audit_date: '2020-04-23'
title: 'Set the date, time, and timezone on a Linux server'
type: article
created_date: '2020-04-23'
created_by: Morgan Marion
last_modified_date: '2020-04-27'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

Keeping the correct time for all servers across an environment aids in accuracy, authentication,
and troubleshooting. This article provides information about the basic commands of the
`timedatectl` utility, which can help you do this.

### Prerequisites

You need to meet the following prerequisites to use `timedatectl`:

- Have a basic understanding of Secure Shell (SSH).
- Have sudo or administrative access to your server.
- Have a server running Red Hat&reg; Enterprise Linux&reg; 7 or 8, or Ubuntu&reg; 16 or 18.

### Check the current time date settings

To check current time and date, run the following command:

    $ timedatectl
    Local time: Wed 2020-04-22 09:09:19 EDT
    Universal time: Wed 2020-04-22 13:09:19 UTC
    RTC time: Wed 2020-04-22 13:09:20
    Time zone: America/New_York (EDT, -0400)
    System clock synchronized: yes
    systemd-timesyncd.service active: yes
    RTC in local TZ: no

### Set the date or time

To set the date or time, use the `YYYY-MM-DD hh:mm:ss` format with the command.
Omit the date or time as needed.

To set the date or time, run a command similar to the following:

    $ timedatectl set-time <YYYY-MM-DD> <hh:mm:ss>

Example: Date and time:

    $ timedatectl set-time 2020-04-22 16:32:05

Example: Date only:

    $ timedatectl set-time 2020-10-03

Example: Time only:

    $ timedatectl set-time 7:00:00

### Choose a time zone from a list

To set a time zone, you need to know the correct format. You can display a multipage listing of time
zones, based on the public Internet Assigned Numbers Authority (IANA&reg;) time zone database. You can
then enter your preferred time zone with the `timedatectl set-timezone` command.

To list time zones, run the following command:

    $ timedatectl list-timezones
    Africa/Abidjan
    Africa/Accra
    Africa/Addis_Ababa
    Africa/Algiers
    Africa/Asmara
    Africa/Bamako
    Africa/Bangui
    Africa/Banjul
    Africa/Bissau
    Africa/Blantyre
    lines 1-47
    ...
 
Use the space bar to advance to the next page. When you reach the end, you can exit with **Ctrl-C**.

### Choose a time zone interactively

You can also use an interactive question-and-answer tool to look at the available time zone choices.
This action doesn't make the change, so you still need to enter your preferred time zone with the
`timedatectl set-timezone` command.

To use the interactive tool, run the following command:

    $ tzselect
    Please identify a location so that time zone rules can be set correctly.
    Please select a continent, ocean, "coord", or "TZ".
    1) Africa
    2) Americas
    3) Antarctica
    4) Asia
    5) Atlantic Ocean
    6) Australia
    7) Europe
    8) Indian Ocean
    9) Pacific Ocean
    10) coord - I want to use geographical coordinates.
    11) TZ - I want to specify the time zone using the Posix TZ format.
    #?

### Set the time zone

If your region observes daylight savings time, make sure that you select the appropriate
time zone to ensure your server time is accurate.

To set the timezone, run a command similar to the following one:

    $ timedatectl set-timezone <timezone>

Example: Change to the central time zone:

    timedatectl set-timezone America/Chicago

Check the status with the `timedatectl` command to see the time zone change:

    $ timedatectl
    Local time: Wed 2020-04-22 08:38:49 CDT
    Universal time: Wed 2020-04-22 13:38:49 UTC
    RTC time: Wed 2020-04-22 13:38:51
    Time zone: America/Chicago (CDT, -0500)
    System clock synchronized: yes
    systemd-timesyncd.service active: yes
    RTC in local TZ: no

### Enable or disable NTP synchronization

You can add Network Time Protocol (NTP) synchronization to maintain the correct time automatically.
Run the `timedatectl set-ntp` command with a `true` or `false` argument as shown in the following
example:

    $ timedatectl set-ntp true

Here is the NTP status before:

    $ timedatectl
    Local time: Wed 2020-04-22 09:09:19 EDT
    Universal time: Wed 2020-04-22 13:09:19 UTC
    RTC time: Wed 2020-04-22 13:09:20
    Time zone: America/New_York (EDT, -0400)
    System clock synchronized: yes
    systemd-timesyncd.service active: no
    RTC in local TZ: no

Here is the NTP status after:

    $ timedatectl
    Local time: Wed 2020-04-22 09:09:19 EDT
    Universal time: Wed 2020-04-22 13:09:19 UTC
    RTC time: Wed 2020-04-22 13:09:20
    Time zone: America/New_York (EDT, -0400)
    System clock synchronized: yes
    systemd-timesyncd.service active: yes
    RTC in local TZ: no
