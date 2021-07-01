---
permalink: add-a-cloud-network-interface-to-a-cloud-server
audit_date: '2020-09-28'
title: Add a Cloud Network interface to a Cloud Server
type: article
created_date: '2019-01-21'
created_by: Rackspace Community
last_modified_date: '2020-09-28'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

This article shows you how to use the Cloud Servers Application Program 
Interface (API) and the `rackspace-novaclient` (`nova`) to add a cloud 
network to a cloud server.  

Use the following steps to install `nova` and the Cloud Networks extension 
on Mac&reg; OS X&reg; and use `nova` to add a virtual interface to a running 
cloud server that connects to your cloud network. 

**Note:** `nova` is also available for Linux&reg; and Windows&reg;.

1. Run the following command on the command line:

       $ sudo easy_install pip
       
2. Install `nova` and the Cloud Networks virtual interface extension by  running the following commands on the command line:

       $ sudo pip install rackspace-novaclient
       $ sudo pip install os_virtual_interfacesv2_python_novaclient_ext

3. Go to your local **.profile** file and set up the following environment variables in your local file
   by replacing the values inside the angle brackets (\< \>) with your account information:

       $ export OS_AUTH_URL=https://identity.api.rackspacecloud.com/v2.0/
       $ export OS_AUTH_SYSTEM=rackspace
       $ export OS_REGION_NAME=DFW
       $ export OS_USERNAME=<account_username>
       $ export OS_TENANT_NAME=<account_#>
       $ export NOVA_RAX_AUTH=1
       $ export OS_PASSWORD=<api_key>
       $ export OS_PROJECT_ID=<account_#>
       $ export OS_NO_CACHE=1

4. Load the environment variables by running the following command:

        $ source .profile

5. Use your credentials to display your cloud server information. Note the ID of the
   cloud server to which you want to add the network.

       $ nova credentials

       $ nova list

6. Display the network information. Note the ID of your cloud network.
       
       $ nova network-list

7. Add the interface by running the following command on the command line (syntax: `nova virtual-interface-create <networkID> <cloudserverID>`):

       $ nova virtual-interface-create 30714e92-40d3-4259-bd73-2ed8b03abcf5 e74780b5-d180-4faa-bfc0-87802b20aaf4
       

The interface takes a few minutes to load. You can now log in to the cloud server
and check interfaces by running the `ip a` command. You should see the added interface in the output from this command.

**Note**: You can also run `nova virtual-interface-list cloudserverID`.

If you need to add Cloud Networks to your account, submit a ticket in the Control Panel.

### Additional resources

You might find the following additional resources helpful:

- [Install CLI client and Cloud Servers Virtual Interface
  extension](https://docs.rackspace.com/docs/cloud-servers/v2/getting-started/send-request-ovw/#id2)
  
