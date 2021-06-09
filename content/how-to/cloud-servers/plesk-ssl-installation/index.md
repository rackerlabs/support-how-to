---
permalink: plesk-ssl-installation
audit_date: '2021-02-11'
title: 'Plesk: SSL Installation'
type: article
created_date: '2021-02-10'
created_by: Robert Kane
last_modified_date: '2021-02-11'
last_modified_by: Carlos Arriaga
product: Cloud Servers
product_url: cloud-servers
---

The following instructions detail installing a Secure Sockets Layer (SSL) certificate to a domain or an IP 
address by using the Plesk panel.


### Prerequisites 

 - Dedicated server or virtual machine running Red Hat&reg; Enterprise Linux&reg; or CentOS&reg;
 - Plesk Obsidian or later
 - An SSL certificate (**\*.crt**), private key (**\*.key**), and a CA certificate file (**/*-.ca.crt**)


### Add an SSL to a domain name 

1. Log in to Plesk. See [Plesk: Introduction](/support/how-to/plesk-introduction) for these steps.

2. Navigate to **Domains** on the left-hand panel and select the domain to which you want to 
   add the SSL.

3. From the new options presented, select **SSL/TLS Certificates**.

4. Fill in the requisite information:

    - **Certificate name** (For example, **2021-domain.com**)
    - **Private key** (`*.key`)
    - **Certificate** (`*.crt`)
    - **CA certificate** (`*-ca.crt`)

5. After you complete it, click **Upload Certificate**.

### Add an SSL to an IP Address

1. Log in to Plesk. See [Plesk: Introduction](support/how-to/plesk-introduction) for these steps.

2. Navigate to **Tools & Settings** on the left-hand panel.

3. Select **SSL/TLS Certificates** under **Security**.

4. Fill in the requisite information:

    - **Certificate name** (For example, **2021-domain.com**)
    - **Private key** (`*.key`)
    - **Certificate** (`*.crt`)
    - **CA certificate** (`*-ca.crt`)
    
5. After you complete it, click **Upload Certificate**.

6. Navigate to **Tools & Settings**, under **Tools & Resources**, and click **IP Addresses**.

7. Select the IP address to which you want to add the SSL certificate and select the SSL you uploaded from 
   the **SSL/TLS Certificate** drop-down menu.

8. After you finish, click **OK**.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact). 
