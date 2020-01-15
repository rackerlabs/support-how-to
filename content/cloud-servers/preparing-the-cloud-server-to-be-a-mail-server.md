---
permalink: preparing-the-cloud-server-to-be-a-mail-server/
audit_date:
title: Prepare a Cloud Server to be a mail server
type: article
created_date: '2011-03-16'
created_by: Rackspace Support
last_modified_date: '2020-01-15'
last_modified_by: William Loy
product: Cloud Servers
product_url: cloud-servers
---

**Warning:** Managing a mail server in the cloud provides no guarantee email will be delivered to recipients' Inboxes. Establishing and maintaining email deliverability is complex undertaking. See our [hosted email offerings](https://support.rackspace.com/how-to/#cloud-office) if you are in need of a managed email solution.  

To improve your email server's sending reputation, it is helpful to research and consider using the following solutions:

-   [DomainKeys Identified Mail (DKIM)](/how-to/rackspace-cloud-dns-additional-resources)
-   [Domain-based Message Authentication, Reporting & Conformance (DMARC) DNS records](http://www.dmarc.org/index.html)

It is vital that your Cloud Server has the hostname and Reverse Domain Name System (RDNS) correctly set before you configure any sort of mail service. This article reviews the hostname and RDNS settings necessary for a Cloud Server being configured for email.

### Prerequisites

The instructions in this article utilize the following technology:

-  Ubuntu Hardy operating system. (The instructions may work on other Linux&reg;
   distributions but it has not been tested and is not guaranteed).

### Configure the hostname

A hostname is the name of the Cloud Server and is used in the headers
of the email (the headers can be thought of as the address and sender
label on the email).

Setting the hostname via the command line involves the adjustment of a
couple of files.

1. Start by checking what the current hostname is:

    `hostname -f`

   On the example Cloud Server, the output is:

    `cloudserver1`

  **Note:** These instructions use the domain **mail.democloud.com**.

2. Change the hostname to match the domain:

    `sudo nano /etc/hostname`

    Replace the current hostname `cloudserver1` with your selected domain name which in this example is **mail.democloud.com**.

3. The second file to edit can be opened for editing using the following command:

    `sudo nano /etc/hosts`

    The default looks like this on our example cloud server:

    `127.0.0.1       localhost localhost.localdomain`
    `127.0.0.1       cloudserver1`

    Replace `cloudserver1` with `mail.democloud.com`.On your Cloud Server you should replace `mail.democloud.com` with your domain.

4. Verify hostname changes by rebooting the Cloud Server and checking the hostname output
   using the following sequence of commands:

    `sudo shutdown -r now`

    `hostname -f`

The output is now:

    `mail.democloud.com`

**Note:** `mail.democloud.com` is an example hostname.


### Change reverse DNS in the Control Panel

Now, you must configure the rDNS on the server.

1. Navigate to your server's DNS tab and scroll down to the Reverse DNS
section.

2. Change the relevant field to the domain name which you'd like
in the rDNS record. See [DNS - Creating a Reverse DNS Record](/how-to/create-a-reverse-dns-record-0 "DNS - Creating a Reverse DNS Record") for detailed instructions.

#### Verify reverse DNS changes

The RDNS can take 24-48 hours to propagate. We recommend that you wait until
the changes have fully propagated before configuring and testing any mail setup.

To check the RDNS, you must input the Internet Protocol (IP) address of the Cloud Server
into a `dig` command.

The `dig` function must be installed on a base Ubuntu Hardy Cloud Server by using the following command:

    `sudo aptitude install dnsutils`

Now you can begin the steps of verifying the RDNS changes are correct.

Check the RDNS output using a `dig` command:

    `dig -x 208.75.84.20`

In this case, the output includes the correct answer:

    dig -x 208.75.84.20
    ...
    ...
    ;; QUESTION SECTION:
    ;20.84.75.208.in-addr.arpa.     IN      PTR

    ;; ANSWER SECTION:
    20.84.75.208.in-addr.arpa. 3477 IN      PTR     mail.democloud.com.

### Summary

Even if only sending mail from your application to an administrator, it is critical that the Cloud Server is properly configured prior to configuring it as a mail server.
