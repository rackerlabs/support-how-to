---
permalink: connect-to-a-cloud-databases-instance
audit_date: '2018-12-26'
title: Connect to a Cloud Databases instance
type: article
created_date: '2012-07-24'
created_by: Rackspace Support
last_modified_date: '2018-12-26'
last_modified_by: Kate Dougherty
product: Cloud Databases
product_url: cloud-databases
---
This article describes methods for connecting to your Cloud Databases instance.

### Connect through a cloud server by using SSH and the hostname

Use the following steps to connect through a cloud server by using Secure
Shell (SSH) and the hostname:

1.  Log in to the [Cloud Control Panel](https://login.rackspace.com/).
2.  In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3.  Select **Databases > MySQL**.
4.  Click the name of the instance to which you want to connect.
5.  Copy the hostname string.
6.  From a Terminal window, use SSH to log in to a cloud server
    that's located in the same region as your cloud database instance.
    The following line of code shows an example SSH command:

        ssh user@IPaddress

6.  On your server, use the MySQL client (or a similar tool) to access
    the database. For MySQL, use the following command and paste the
    hostname string following the `-h` option:

        mysql -h hostname_string -u database_instance_username -p

### Connect to the database directly by using the hostname

This section shows you how to use a sample script to display a simple web
page. Displaying the web page helps you test your connection to your database
instance.

Your web server must be in the same region as your database instance
so that it is able to connect to the instance through the cloud private
network.

**Note**: This process assumes that your web server and PHP are
configured correctly.

#### Copy and paste the PHP script

Copy the following PHP script and paste it into a text editor:

    <html>
    <head><title>Connecting to Cloud Databases</title></head>
    <body><pre>
    <?php
        // phpinfo();
        $THE_HOST = "5c70345ad036fc112dc0a14ee1db7992f5c172db.rackspaceclouddb.com";
        $THE_USER = "fmdb_readonly";
        $THE_PWD = "fmdb_readonly";
        $THE_DB = "FEATUREMANIA";

        //
        // Get "e"
        //
        $arg_expr = trim($\_POST["e"]);
        if($arg_expr == "") {
            $arg_expr = "PI()";
        }
        else {
            if(get_magic_quotes_gpc()) {
             $arg_expr = stripslashes($arg_expr);
            }

            //
            // Connect to the database
            //
            $connection = mysql_connect($THE_HOST, $THE_USER, $THE_PWD);
            if (!$connection) {
                 die('I could not connect to the database. The error is: ' . mysql_error());
            }
            mysql_select_db($THE_DB, $connection);
            //
            // Calculation
            //
            $result = mysql_query("SELECT (" . $arg_expr . ");", $connection);
            $row = mysql_fetch_array($result, MYSQL_NUM);
            $eValue = $row[0];
            printf("The database connection worked, and MySQL says that %s = %s<BR>%s", $arg_expr, $eValue, mysql_error());
            mysql_free_result($result);
            mysql_close($connection);
        }
    ?>
        <FORM ACTION='clouddatabases.php' METHOD='POST'>
            Enter a MySQL expression:
            <INPUT TYPE="TEXT" NAME="e" VALUE="<? echo $arg_expr; ?>"/>
            <INPUT TYPE="SUBMIT">
        </FORM>
        This is a simple PHP example to test your connection to Rackspace Cloud Databases.
        It does not require your database to have any tables.
        It doubles as a handy way to calculate simple MySQL expressions from the browser.
        <BR>
        Because this sample uses string concatenation to compose SQL statements, only use this in your development environment in your password-protected site.
        <BR>
        EXAMPLES:
            PI()\*3*3
            curdate()
            3=3 AND 4>4
            MID('Rackspace',1,4)
            SIN(PI()/2)
            SHA1('Rackspace Cloud Databases')
        </pre></body>
    </html>

#### Copy the instance hostname

Use the following steps to copy the instance hostname:

1.  Log in to the [Cloud Control Panel](https://login.rackspace.com/).
2.  In the top navigation bar, click **Select a Product > Rackspace Cloud**.
2.  Select **Databases > MySQL**.
3.  Click the name for the instance to which you want to connect and
    view the details for the instance.
4.  Copy the hostname string.

#### Paste the instance hostname into a text editor

Use the following steps to paste the instance hostname into a text editor:

1.  Locate the following line of the script in your text editor:

        $THE_HOST = "5c70345ad036fc112dc0a14ee1db7992f5c172db.rackspaceclouddb.com";

2.  Paste the hostname string inside the double quotation marks,
    replacing the following value:


        5c70345ad036fc112dc0a14ee1db7992f5c172db.rackspaceclouddb.com

#### Modify the information in the script to specify your database user, password, and database instance name

Use the following steps to modify the script:

1.  Locate the following line of the script in your text editor:

        $THE_USER = "fmdb_readonly";

2.  Replace the `fmdb_readonly` value with the name of your database
    user. You can find this information in the **Users** section of the
    database instance Details page in the [Cloud Control
    Panel](https://login.rackspace.com).
3.  Locate the following line of the script in the text editor:

        $THE_PWD = "fmdb_readonly";


4.  Replace the `fmdb_readonly` value with the password for the user.
5.  Locate the following line of the script in the text editor:

        $THE_DB = "FEATUREMANIA";


6.  Replace the `FEATUREMANIA` value with the name of your database.
7.  Save the changes that you made to the script in the editor to a file name
    that ends in **.php** (for example, **clouddatabases.php**).

    **Note**: If you change the script file name to something other than
    **clouddatabases.php**, you must modify the following line in the
    script to replace the **clouddatabases.php** value with the name that you
    chose for your script:

        <FORM ACTION='clouddatabases.php' METHOD='POST'>

#### Copy the modified script and execute it on your server

Use the following steps to copy the modified script and execute it on your
server:

1.  Copy the modified script to your server (for example, to the
    website's **cgi-bin** folder).
2.  Run the script to test connectivity to your database.

    If the connection to your database succeeds, the web page runs
    and displays a message similar to the following one:
    `The database connection worked, and MySQL says that PI()*3*3 = 28.274334`

3.  Type a MySQL expression (for example, **PI()\*3\*3**) and click
    **Submit** to have it evaluated.

### Connect by using a cloud load balancer

This section describes how to connect by using a cloud load balancer.

**Note**: You should use this load balancer only to access your Cloud
Databases instance. Do not add other nodes to the load balancer.

#### Copy the instance hostname

Use the following steps to copy the instance hostname:

1.  Log in to the [Cloud Control Panel](https://login.rackspace.com/).
2.  In the top navigation bar, click **Select a Product > Rackspace Cloud**.
3.  Select **Databases > MySQL**.
4.  Click the name of the instance that you want to connect to the load
    balancer and view the details for the instance.
5.  Note the region in which this database is located. You must create the
    load balancer in the same region.
6.  Copy the hostname string.

#### Create a load balancer for the instance

Use the following steps to create a load balancer for the instance:

1.  In the top navigation bar of the Cloud Control Panel, click
    **Networking**.
2.  In the menu, under **Create Resources**, click **Load Balancer**.
3.  Enter a name for the load balancer.
4.  Specify the same region in which your database instance is located.
5.  In the **Configuration** section, select **Accessible on the Public
    Internet** for the **Virtual IP** option.
6.  Select **MySQL** for the **Protocol/Port**.
7.  In the **Add Nodes** section, click **Add External Node**.
8.  Paste the hostname string of the database instance in the **IP or
    Hostname** field.
9.  Enter the default MySQL port **3306** in the **Port** field.
10. Click **Add External Node**.
11. Click **Create Load Balancer**.

The load balancer is created and your database is accessible through
the load balancer.

**Note**: Using a load balancer to access your database instance incurs
normal load balancing and bandwidth charges. For more information, see
[Cloud Load Balancers Pricing and
Calculator](https://www.rackspace.com/cloud/cloud_hosting_products/loadbalancers/pricing/).

### Connect to a High Availability instance by using a public IP address

For information about connecting to a High Availability Cloud Databases
instance by using a public Internet Protocol (IP) address, see [High
Availability for Cloud
Databases](/support/how-to/high-availability-for-cloud-databases).
