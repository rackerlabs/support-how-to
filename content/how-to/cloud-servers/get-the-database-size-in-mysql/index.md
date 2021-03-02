---
permalink: get-the-database-size-in-mysql/
audit_date:
title: Get the Database Size in MySQL
type: article
created_date: '2021-02-19'
created_by: Gilberto Villanueva
last_modified_date:
last_modified_by: 
product: Cloud Servers
product_url: cloud-servers
---

#  Get the Data Base Size in MySQL

Running the below query you can get the Data Base Size in MySQL.

### Prerequisites

MySQL

### Procedure

Run the next query in MySQL, you will get the two columns first will display the Data Base Name and the second will display the Data Base Size in MB:

>SELECT table_schema "Data Base Name", sum( data_length + index_length ) / 1024 / 1024 "Data Base Size in MB"
FROM information_schema.TABLES GROUP BY table_schema ;

If you run the next query you will view the free space available for a Data Base in MySQL
>SELECT table_schema "Data Base Name",
sum( data_length + index_length ) / 1024 /
1024 "Data Base Size in MB",
sum( data_free )/ 1024 / 1024 "Free Space in MB"
FROM information_schema.TABLES
GROUP BY table_schema ;
