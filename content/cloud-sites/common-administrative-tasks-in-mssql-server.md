---
node_id: 1395
title: Common Administrative Tasks in MSSQL Server
type: article
created_date: '2012-05-16'
created_by: Rackspace Support
last_modified_date: '2012-05-21'
last_modified_by: Jimmy Rudley
product: Cloud Sites
product_url: cloud-sites
---

This article contains examples of a few common administrative tasks that
you an perform on your Cloud Site running a Microsoft SQL Server
database.

- First you will want to connect to your MS SQL Server database using the *myLittleAdmin* link in your Control Panel.
- Once connected, click on the *Tools* NavBar in the lower-left frame.


![](http://c15030753.r53.cf2.rackcdn.com/1_Tools.png)

- To submit a new query, click *New Query* from the Tools Menu and enter your query in the space provided in the center frame, then click *Submit*.


![](http://c15030753.r53.cf2.rackcdn.com/2_NewQuery.png)

Below are the query commands for some common administrative tasks:

**Note:** When entering your query, replace the text in the
example, <code>myDbHere</code>, with the
correct name of the database that you are working on, making sure to
keep the value within brackets. The examples in this article have other
variables that you will need to replace with actual values.  These
values have been highlighted below for your convenience.  Only the
highlighted values in the examples need to be modified.



### HOW TO ENABLE CONTAINMENT ON A DATABASE

USE \[master\]
GO
ALTER DATABASE \[myDbHere\] SET CONTAINMENT = PARTIAL WITH NO\_WAIT
GO


### HOW TO DISABLE CONTAINMENT ON A DATABASE

USE \[master\]
GO
ALTER DATABASE \[myDbHere\] SET CONTAINMENT =
NONE WITH NO\_WAIT
GO


### HOW TO CREATE A SQL USER WITH PASSWORD WHEN USING PARTIAL CONTAINMENT AND ADD TO DB OWNER ROLE

USE \[myDbHere\]
GO
CREATE USER \[sqlUserName\] WITH PASSWORD=N'ComplexPassHere'
GO
USE \[myDbHere\]

GO
ALTER ROLE \[db\_owner\] ADD MEMBER \[sqlUserName\]
GO

### HOW TO DROP SQL USER INSIDE DATABASE

**Note:** Run this for deleting a SQL user used within containment. If
you created additional logins from the control panel, please use the
control panel to delete them.

USE \[myDbHere\]

GO
DROP USER \sqlUserName\]
GO

