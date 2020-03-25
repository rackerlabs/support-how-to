---
permalink: linux-grep-command/
audit_date:
title: Linux - Grep Command 
type: article
created_date: '2020-03-25'
created_by: John Garcia
last_modified_date:
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

This article explains introductory uses for the grep command in Linux.

# What is "grep"?

The **grep** command is used within a Linux or Unix based system to perform text searches for a defined criteria of words or strings.  **grep** stands for **G**lobally search for **R**egular **E**xpression and **P**rint Out.

## grep syntax


grep 'string' filename(s)

The basic command will search for and return any lines of text that contain the given criteria 'string' in filename(s).

**Options:** 

```
-i Prints lines with matching criteria while ignores casing (Upper/Lowecase)
-l Prints filenames only
-n Prints lines with matching criteria and line numbers
-c Prints count of lines with matching criteria
-v Prints lines not matching criteria (Inverse Search)
-w Prints whole word matches
-A n  Prints n lines After matches
-B n  Prints n lines Before matches
-C n  Prints n lines Before AND After Matches
```
**Note:** These Options can be used individually or in combination to vary your criteria.

## Sample Outputs for grep Command

**Example:  file "example.txt" contains the following 5 lines:**

hello world
Hello World
Hello Worlds
Hello Moon
321 Goodnight

**The Original Command Syntax-Will Find and Print for EXACT MATCH for "world".**  
```
[root@test ~]# grep world example.txt
hello world
```

**Using "-i" Ignores casing and will Find and Print Matches.** 
```
[root@test ~]# grep -i world example.txt
hello world
Hello World
Hello Worlds
```

**Using "-n" will Find and Print Matches along with Line Numbers.** 
```
[root@test ~]# grep -n Hello example.txt
2:Hello World
3:Hello Worlds
4:Hello Moon
```

**Using "-n" will Find and Print a Count for Matches.**
```
[root@test ~]# grep -c hello example.txt
1
[root@test ~]# grep -ci hello example.txt
4
```

**Using "-v" will Find and Print all Inverse (Non-Matching) Lines.**
```
[root@test ~]# grep -v world example.txt
Hello World
Hello Worlds
Hello Moon
321 Goodnight
```

**Using a combination of  "-i" and "-v" to further specify criteria to Find and Print Inverse.**
```
[root@test ~]# grep -iv world example.txt
Hello Moon
321 Goodnight
```

**Using "-w" will Find and Print Whole Word Matches.**
```
[root@test ~]# grep -w World example.txt
Hello World
```

**Using "-A n" will Find and Print Match along with "n" lines After Match.**
```
[root@test ~]# grep -A 2 Worlds example.txt
Hello Worlds
Hello Moon
321 Goodnight
```

**Using "-B n" will Find and Print Match along with "n" lines Before Match.**
```
[root@test ~]# grep -B 2 Goodnight  example.txt
Hello Worlds
Hello Moon
321 Goodnight
```

**Using "CA n" will Find and Print Match along with "n" lines Before AND After Match.**
```
[root@test ~]# grep -C 2 Worlds  example.txt
hello world
Hello World
Hello Worlds
Hello Moon
321 Goodnight
```
