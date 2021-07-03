---
permalink: /request-for-additional-ips/
audit_date:
title: Request for additional IP's
type: article
created_date: 2021-04-15
created_by: Alexandra Soares
last_modified_date: 
last_modified_by: 
product: Dedicated Hosting
product_url: dedicated-hosting
---

This article describes step-by-step how to request for additional IP's if a justification form is needed.


### Create a ticket in the MyRackspace portal

1. Log in to the [MyRackspace Portal](https://login.rackspace.com/login) with your username and
   password.

2. In the top navigation bar, choose **Select a Product** > **Dedicated Hosting**.

3. Select **Tickets** > **Create Ticket**. The Create New Ticket page displays. 

4. Select the Subject field.

5. In the ticket subject add "Additional IP Request" and hit Enter.

	{{<image src="Subject.png" alt="" title="">}}

6. Complete the form below and place it in the ticket:

```
===== BEGIN IP Space Request =====
E-Mail Address.................:
Server number..................:

Number of IP addresses being Requested:
Your Fully Qualified Domain Name (FQDN) Justification List:
---------- Start FQDN List ----------

---------- End FQDN List ------------

Reason for additional IP use (including reason that Name Based Hosting can not be used):

NOTE: Please provide a copy of the SSL Cert for HTTPS/SSL justification purposes.
===== END IP Space Request =====
```

7. Select **Create Ticket**.

Support will generate the CSR for you and you'll be updated via ticket.
