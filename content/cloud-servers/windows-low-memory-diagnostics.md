---
permalink: windows-low-memory-diagnostics/
audit_date:
title: 'Windows Low Memory Diagnostica'
type: article
created_date: '2020-05-06'
created_by: Steven Mondragon-DeVoss
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

*This article is applicable to the following Windows Server versions: 2008, 2012, 2012 R2, 2016, 2019*

Servers have two types of memory, random access memory (RAM) and virtual memory. All programs use RAM, but when there isn't enough RAM for the program you are trying to run, Windows temporarily moves information that would normally be stored in RAM to a file on your hard disk called a paging file. The amount of information temporarily stored in a paging file is also referred to as virtual memory. 

Virtual memory is the moving of information to and from the paging file, which then frees up enough RAM for programs to run correctly. Low memory problems occur when the server runs out of RAM and becomes low on virtual memory. This can happen when you run more programs than the RAM installed on the server is designed to support. Low memory problems can also occur when a program doesn't free up memory that it no longer needs. This problem is called memory overuse or a memory leak.

# Determining Memory Usage

## The following PowerShell script can be used to determine current memory usage.

> $ln="--------------------";$sp="       ";$M="Memory";$os=gwmi win32_operatingsystem;$TPMS="TotalVisible$M`Size";$FPM="FreePhysical$M";$TVMS="TotalVirtual$M`Size";$FVM="FreeVirtual$M";$TP=[int]($os.$TPMS/1mb);$FP=[math]::Round($os.$FPM/1mb,2);$PP=[math]::Round((($os.$TPMS-$os.$FPM)/$os.$TPMS)*100,2);$TV=[int]($os.$TVMS/1mb);$FV=[math]::Round($os.$FVM/1mb,2);$PV=[math]::Round((($os.$TVMS-$os.$FVM)/$os.$TVMS)*100,2);echo "`n$ln$ln`nCurrent $M Utilization:`n$ln$ln`nPhysical $M ($TP GB)`nAvailable: $FP GB`n % in use: $PP`%`n`nVirtual $M ($TV GB)`nAvailable: $FV GB`n % in use: $PV`%`n`n$ln$ln$ln$ln`nImage Name$sp$sp$sp`PID Session Name$sp Session#    Mem Usage`n$ln$ln$ln$ln";cmd /C "tasklist /NH /FI "MEMUSAGE gt 100000"|sort /R /+64";echo "$ln$ln$ln$ln";

The output will be similar to the information found in Task Manager:
~~~
----------------------------------------
Current Memory Utilization:
----------------------------------------
Physical Memory ("amount" GB)
Available: "amount" GB
 % in use: "amount" %

Virtual Memory ("amount" GB)
Available: "amount" GB
 % in use: "amount" %

-----------------------------------------------------------------
Image Name|     PID| Session Name|        Session#|    Mem Usage
-----------------------------------------------------------------
"service1"      1280 Console                    2      707,216 K
"service2"      1124 Console                    2      390,380 K
"service3"      6904 Console                    2      362,920 K
"service3"      1300 Console                    2      250,928 K
"service4"      7604 Console                    2      243,760 K
"service5"     12928 Console                    2      228,096 K
-----------------------------------------------------------------
~~~

Once you determine the top process using memory, you can then investigate for any issues with the service which may require a restart of the service or the server.

Some of the more common services that can cause high memory usage are:
1. MSSQL
2. IIS worker processes (w3wp)
3. CommVault
4. Sophos
