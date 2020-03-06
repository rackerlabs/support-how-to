---
permalink: using-the-apache-2-buddy-script-for-performance-and-stability/
audit_date: '2020-03-05'
title: Using the Apache2Buddy script for performance and stability
type: article
created_date: '2020-02-27'
created_by: Evan Benavides
last_modified_date: '2020-03-05'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

## What is Apache2Buddy?

The Apache2Buddy script is used to make recommendations for changes to the Apache webserver configuration to assist with performance and stability. It has no impact on the server itself and makes no changes. After the script runs, it suggests Apache fixes that you can examine and consider applying. Apache2Buddy checks at least the following areas of concern:

•	PHP memory limits
•	Memcache
•	MaxClients
•	Memory usage
•	Max potential memory usage
•	Percentage of total RAM allocated to Apache
•	MaxRequestWorkers

## Run Apache2Buddy

Run the following command to launch the script from a Linux command line:

```
curl -sL https://raw.githubusercontent.com/richardforth/apache2buddy/master/apache2buddy.pl | perl
```

After the Apache2Buddy script completes, it returns output similar to the following:


    Apache Tuning with Respect to RAM Footprint of Web Applications
    --------------------------------------------------------------

    The MaxClients setting in your Apache configuration allows your web application child processes to consume more RAM than    is available on the server.
    ---
    [ -- ] Distro: CentOS
    [ -- ] Version: 6.9
    [ -- ] Codename: Final
    [ OK ] This distro is supported by apache2buddy.pl.
    [ -- ] Hostname: Server-01
    [ -- ] Primary IP: 123.45.67.890
    [ -- ] Apache is using prefork model.
    [ OK ] Memory usage of parent PID is less than 50MB: 8368 Kilobytes.
    [ -- ] Apache has been running 21d 06h 49m 32s.
    [ -- ] Your server has 5834 MB of PHYSICAL memory.
    [ -- ] Your ServerLimit setting is 60.
    [ -- ] Your MaxClients setting is 60.
    [ OK ] Current Apache Process Count is 22, including the parent PID.
    [ -- ] Number of vhosts detected: 17.
    [ -- ]             |________ of which 13 are HTTP (specifically, port 80).
    [ -- ]             |________ of which 4 are HTTPS (specifically, port 443).
    [ OK ] Current Apache vHost Count is less than maxclients.
    [ -- ] Your MaxRequestsPerChild setting is 2000.
    [ -- ] Your PHP Memory Limit (Per-Process) is 128 MB.
    [ -- ] MySQL Detected => Using 134.74 MB of memory.
    [ OK ] No large logs files were found in /var/log/httpd.
    [ OK ] MaxClients has not been hit recently.
    [ !! ] PHP Fatal errors were found, see summaries below.
    [ @@ ] Check the logs manually.
    [ @@ ]  - /var/log/httpd/example.com-error.log-20200203: 3
    [ @@ ]  - /var/log/httpd/example.com-error.log: 5
    [ @@ ]  - /var/log/httpd/example2.com-error.log-20200203: 1
    [ -- ] httpd is currently using 2384.92 MB of memory.
    [ -- ] The smallest apache process is using 83.18 MB of memory
    [ -- ] The average apache process is using 107.48 MB of memory
    [ -- ] The largest apache process is using 133.83 MB of memory
    [ !! ] Going by the average Apache process, Apache can potentially use 6448.81 MB RAM: Without considering services: 
    110.54 % of total installed RAM Considering extra services: 113.16 % of remaining RAM [ !! ] Going by the largest Apache       process, Apache can potentially use 8029.81 MB RAM: Without considering services: 137.64 % of total installed RAM 
    Considering extra services: 140.90 % of remaining RAM

    --------------------------------------------------------------------------------
    ### GENERAL FINDINGS & RECOMMENDATIONS ###
    --------------------------------------------------------------------------------

    Apache2buddy.pl report for server: Server-01 (123.45.67.890):
    Settings considered for this report:
      Your server's physical RAM:                                   5834 MB
      Remaining Memory after other services considered:             5699 MB
      Apache's MaxClients directive:                                60       <--------- Current Setting    
      Apache MPM Model:                                             prefork
      Largest Apache process (by memory):                           133 MB
    [ !! ]  Your MaxClients setting is too high.
    Your recommended MaxClients setting is between 37 and 42.              <------- Acceptable Range (10% of MAX)
    Max potential memory usage:                                   8029 MB
    Percentage of TOTAL RAM allocated to Apache:                  137.64  %
    Percentage of REMAINING RAM allocated to Apache:              140.90  %
    --------------------------------------------------------------------------------

# Review the results

You might also see output from the Apache2Buddy script that is similar to the following example:


    [ !! ] Going by the average Apache process, Apache can potentially use 6448.81 MB RAM: Without considering services:           110.54 % of total installed RAM Considering extra services: 113.16 % of remaining RAM [ !! ] Going by the largest Apache       process, Apache can potentially use 8029.81 MB RAM: Without considering services: 137.64 % of total installed RAM             Considering extra services: 140.90 % of remaining RAM

    It is important to understand that this statement is made with the following assumptions:

    •   Going by the average Apache process -- Not all Apache processes will be average sized, some processes may be larger,       others will be smaller.
    •   Without considering services – Apache Buddy attempts to calculate the possible memory usage of the Apache webserver,       it makes no effort to take into consideration that available memory will also be used for other applications such as PHP,     MariaDB and the operating system itself.
    •   Considering extra services – Apache Buddy attempts to calculate the 'possible' memory usage of the Apache webserver       while making assumptions of the memory usage of other available applications which may or may not be correct.

    **This statement provided by Apache2Buddy should be considered to be informational regarding the worst case scenario and       that further investigation may be required to obtain clarity. For more information please see the following link:**
    https://richardforth.github.io/apache2buddy_ag/
