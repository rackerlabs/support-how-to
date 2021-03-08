---
permalink: get-the-database-size-in-mysql/
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

#### Determine MySQL size

Run the following query in MySQL to display **Data Base Name** and **Data Base Size in MB**:

    SELECT table_schema "Data Base Name", 
    sum( data_length + index_length ) / 1024 / 1024 "Data Base Size in MB" 
    FROM information_schema.TABLES 
    GROUP BY table_schema ;

#### Determine MySQL available space

Run the next query to view the **Free Space in MB** available for a database in MySQL.

    SELECT table_schema "Data Base Name", 
    sum( data_length + index_length ) / 1024 / 1024 "Data Base Size in MB",
    sum( data_free )/ 1024 / 1024 "Free Space in MB"
    FROM information_schema.TABLES
    GROUP BY table_schema ;
