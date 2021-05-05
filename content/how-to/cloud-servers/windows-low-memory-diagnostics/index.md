---
permalink: windows-low-memory-diagnostics
audit_date: '2020-05-08'
title: 'Windows low-memory diagnostics'
type: article
created_date: '2020-05-06'
created_by: Steven Mondragon-DeVoss
last_modified_date: '2020-05-08'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

*This article applies to the following Microsoft&reg; Windows Server&reg; versions: 2008, 2012,
2012 R2, 2016, and 2019.*

Servers have two types of memory: random access memory (RAM) and virtual memory. All programs use RAM.
But when programs don't have enough RAM to run, Windows&reg; temporarily moves information normally stored
in RAM to a file on your hard disk called a paging file. This temporary data storage in a paging file is
known as virtual memory. 

Using virtual memory to move information to and from a paging file frees up enough RAM for programs to
run correctly. Low-memory problems can occur under the following conditions:

- When the server runs out of RAM and becomes low on virtual memory.

- When you run more programs than the RAM installed on the server can support.

- When a program doesn't free up memory that it no longer needs, which is called memory overuse or a memory leak.

### Determining memory usage

You can use the following PowerShell&reg; script to determine current memory usage:

    $ln="--------------------";
    $sp="       ";
    $M="Memory";
    $os=gwmi win32_operatingsystem;
    $TPMS="TotalVisible$M`Size";
    $FPM="FreePhysical$M";
    $TVMS="TotalVirtual$M`Size";
    $FVM="FreeVirtual$M";
    $TP=[int]($os.$TPMS/1mb);
    $FP=[math]::Round($os.$FPM/1mb,2);
    $PP=[math]::Round((($os.$TPMS-$os.$FPM)/$os.$TPMS)*100,2);
    $TV=[int]($os.$TVMS/1mb);
    $FV=[math]::Round($os.$FVM/1mb,2);
    $PV=[math]::Round((($os.$TVMS-$os.$FVM)/$os.$TVMS)*100,2);
    echo "`n$ln$ln`nCurrent $M Utilization:`n$ln$ln`nPhysical $M ($TP GB)`nAvailable: $FP GB`n % in use: $PP`%`n`nVirtual $M   ($TV GB)`nAvailable: $FV GB`n % in use: $PV`%`n`n$ln$ln$ln$ln`nImage Name$sp$sp$sp`PID Session Name$sp Session#    Mem Usage`n$ln$ln$ln$ln";
    cmd /C "tasklist /NH /FI "MEMUSAGE gt 100000"|sort /R /+64";echo "$ln$ln$ln$ln";

The output should be similar to the following information found in Task Manager:

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

After you determine the top process that is using memory, you can then investigate any issues with the service.
You might need to restart the service or the server.

The following services can cause high memory usage:

- Microsoft SQL Server&reg;
- Internet Information Services (IIS) worker processes (w3wp)
- CommVault&reg;
- Sophos&reg;
