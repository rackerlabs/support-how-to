---
permalink: how-to-use-mysqltuner-in-linux/
audit_date: '2022-01-06'
title: 'How to use MySQLTuner in Linux'
type: article
created_date: '2022-01-06'
created_by: Gilberto Villanueva
last_modified_date: '2022-01-06'
last_modified_by: Jorge Garcia
product: Cloud Servers
product_url: cloud-servers
---
**Note:** This article is based on a tool hosted at the following [GitHub repository](https://github.com/major/MySQLTuner-perl)

MySQLTuner is a script written in Perl that allows you to review a MySQL installation quickly and make adjustments to increase performance and stability. The current configuration variables and status data is retrieved and presented in a brief format along with some basic performance suggestions.

### Requirements
1. Perl 5.6 or later (with perl-doc package)
2. Unix/Linux based operating system (tested on Linux, BSD variants, and Solaris variants)
3. Unrestricted read access to the MySQL server (OS root access recommended for MySQL < 5.1)

### Installation
Script direct download (for this method you will need wget installed):

```sh
wget http://mysqltuner.pl/ -O mysqltuner.pl
wget https://raw.githubusercontent.com/major/MySQLTuner-perl/master/basic_passwords.txt -O basic_passwords.txt
wget https://raw.githubusercontent.com/major/MySQLTuner-perl/master/vulnerabilities.csv -O vulnerabilities.csv
```

### Running MySQLTuner

To use MySQLTuner just run the following command:

```sh
[root@db01 ~]mysqltuner
```
**Note:** The MySQL user and password will be requested, after entering the credentials an output will be displayed.

### MySQLTuner database information:
- Rows number
- Total size
- Data size
- Percentage of data size
- Index size
- Percentage of index size

This is an example:

{{<image src="mysqltuner.png" width="800">}}


### Warning

It is extremely important for you to fully understand each change you make to a MySQL database server. If you don't understand portions of the script's output, or if you don't understand the recommendations, you should consult a knowledgeable DBA.

### MySQL Tuner Other Common Usage
**Performance tips**

Metadata statistic updates can impact strongly performance of database servers and MySQLTuner.
Be sure that innodb_stats_on_metadata is disabled.
```
set global innodb_stats_on_metadata = 0;
```
**Specific usage**

__Usage:__ Minimal usage locally
```
perl mysqltuner.pl --host 127.0.0.1
```
**Note:** You can add the execute bit (`chmod +x mysqltuner.pl`) so you can execute it without calling perl directly.

__Usage:__ Minimal usage remotely
```
perl mysqltuner.pl --host targetDNS_IP --user admin_user --pass admin_password
```
__Usage:__ Enable maximum output information around MySQL/MariaDb without debugging
```
perl mysqltuner.pl --verbose
perl mysqltuner.pl --buffers --dbstat --idxstat --sysstat --pfstat --tbstat
```
__Usage:__ Enable CVE vulnerabilities check for your MariaDB or MySQL version
```
perl mysqltuner.pl --cvefile=vulnerabilities.csv
```
__Usage:__ Write your result in a file with information displayed
```
perl mysqltuner.pl --outputfile /tmp/result_mysqltuner.txt
```
__Usage:__ Write your result in a file **without outputting information**
```
perl mysqltuner.pl --silent --outputfile /tmp/result_mysqltuner.txt
```
__Usage:__ Using template model to customize your reporting file based on [Text::Template](https://metacpan.org/pod/Text::Template) syntax.
```
perl mysqltuner.pl --silent --reportfile /tmp/result_mysqltuner.txt --template=/tmp/mymodel.tmpl
```
__Usage:__ Enable debugging information
```
perl mysqltuner.pl --debug
```
__Usage:__ Update MySQLTuner and data files (password and cve) if needed
```
perl mysqltuner.pl --checkversion --updateversion
```

  
<br> 
Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
