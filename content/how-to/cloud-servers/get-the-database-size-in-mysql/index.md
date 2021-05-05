---
permalink: get-the-database-size-in-mysql
audit_date: '2021-03-08'
title: Get the database size in MySQL
type: article
created_date: '2021-02-19'
created_by: Gilberto Villanueva
last_modified_date: '2021-03-08'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to find the size of a MySQL&reg; database and the amount of available free space.

### Determine the database size

Run the following query in MySQL to display the MySQL data base name and size in megabytes:

    SELECT table_schema "Data Base Name", 
    sum( data_length + index_length ) / 1024 / 1024 "Data Base Size in MB" 
    FROM information_schema.TABLES 
    GROUP BY table_schema ;

### Determine the amount of available space

Run the following query to view the available free space in megabytes for a MySQL database:

    SELECT table_schema "Data Base Name", 
    sum( data_length + index_length ) / 1024 / 1024 "Data Base Size in MB",
    sum( data_free )/ 1024 / 1024 "Free Space in MB"
    FROM information_schema.TABLES
    GROUP BY table_schema ;
