---
permalink: detect-email-spoofing-for-exchange-users
audit_date: '2019-04-01'
title: Detect email spoofing for Exchange users
type: article
created_date: '2017-12-22'
created_by: William Loy
last_modified_date: '2019-04-01'
last_modified_by: William Loy
product: Microsoft Exchange
product_url: exchange
---

This article explains email spoofing and describes the steps that you can take to combat it.

### Prerequisites

- **Applies to:** Administrator and User
- **Difficulty:** Moderate
- **Time needed:** Approximately 5 minutes
- **Tools required:**  Email access

For more information on prerequisite terminology, see [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology).

If you prefer a video tutorial, see [Exchange - Spoofing: How to identify and protect your organization](https://emailhelp.rackspace.com/l/support/how-to-prevent-email-spoofing).

### What is email spoofing?

The word *spoof* means *falsified*. A spoofed email is one in which the sender purposefully alters parts of the email to make the message appear as though it was authored by someone else. Commonly, the sender’s name and email address, and the body of the message, are formatted to appear to be from a legitimate source. Sometimes the spoofer makes the email appear to come from a private citizen.

A spoofed message can appear to come from a coworker, a bank, a family member, or any number of seemingly trustworthy sources. A good spoof message looks like any other email that you normally receive.

**Warning:** If you suspect that you have received a fraudulent message, *do not* click any link in the message or enter any information that is requested.

### Why do people spoof email?

In many cases, the spoofed email is part of a *phishing* (scam) attack. In other cases, a spoofed email is used to dishonestly market an online service or sell you a bogus product. The intent is to trick the recipient into making a damaging statement or releasing sensitive information, such as passwords. If you receive bounced (returned) emails for messages that you never sent, you are experiencing a symptom of a case of spoofing.

### Identify a spoofed message

Scammers alter different sections of an email to disguise the sender of the message. To view the message properties that indicate a message has been spoofed, you must view the email headers of that message. The following examples are spoofed email header properties:

- **FROM** (for example, boss@companyexample.com): This property appears to come from a legitimate source on a spoofed message.

- **REPLY-TO**: This property can also be spoofed, but a lazy scammer might leave the actual **REPLY-TO** address. If you see a different sending address here, the email might be spoofed.

- **RETURN-PATH**: This property can also be spoofed, but a lazy scammer might leave the actual **RETURN-PATH** address. If you see a different sending address here, the email might be spoofed.

- **SOURCE IP address or “X-ORIGIN” address**: This property is typically more difficult to alter, but it is possible that this property is spoofed.

The first three properties can be easily altered by using settings in your Microsoft&reg; Outlook&reg;, Gmail&reg;, Hotmail&reg;, or other email software. The fourth property, SOURCE Internet Protocol (IP) address, can also be altered, but it usually requires more sophistication to make a false IP address convincing.

In the following example, the recipient appears to have received a message from their office assistant requesting money:

{{<image src="from_assistant.png" alt="" title="">}}

The subject line (Send $$$) should alert you immediately. The recipient should contact their assistant through another form of communication to confirm that they did not send this message. Next, discover who actually sent the message by opening the message headers. They should look similar to the following example:

{{<image src="reply_to.png" alt="" title="">}}

In the message header snippet shown above, the **From:** field shows the message being sent from **"Assistant"\<assistant@yourdomainexample.com\>**. However, the **REPLY-TO:** field lists **spoofer@scam.com**, which is a clear example of a spoofed message.

You should Blocklist any address that you find in the **REPLY-TO**, **RETURN-PATH**, and **SOURCE IP** field that is not an email address or IP address from which you normally receive mail.

For more information on viewing and understanding email headers, see [View and read email headers in the Outlook Web App](/support/how-to/view-and-read-email-headers-in-owa).

### Combat spoofing

User education is the first line of defense against these types of attacks. If a user receives a spoofed message, they should perform the following tasks:

 - Blocklist any email address or IP address listed in the **REPLY-TO**, **RETURN-PATH**, or **SOURCE IP** field that you have determined to be fraudulent. For instructions, see [Block senders in Outlook Web App](/support/how-to/block-senders-in-owa).
 - Immediately [change your email account password](/support/how-to/change-a-microsoft-exchange-mailbox-password) if you or your users provided that information at any point.
 - Alert all of your users to the situation.

Spoofing is a frustrating issue to deal with because you cannot totally stop it with any single method. Spoofing is similar to writing paper letters and signing someone else's name to them. You can imagine how difficult that would be to trace.

The most impactful change you can make as an administrator is to implement **Sender Policy Framework (SPF)**, **DomainKeys Identified Mail (DKIM)**, and **DomainKeys Identified Mail (DKIM)** records, in that order. These DNS records add extra layers of protection to prevent malicious email from being sent out using your domain name.

   - **SPF** records help recipient mail servers identify unauthorized use of your domain in the form of forgeries (spoofing). The first step in the process is to [Create an SPF record policy](/support/how-to/create-an-spf-policy).

       **Note:** If you send email from external providers on behalf of your domain, you must include their sending servers in the same SPF record entry. Do not create multiple SPF records.

   - **DKIM** records assign a digital signature to mail sent from your domain, marking it as authorized mail sent from your domain. If you require instructions to enable DKIM for your Rackspace Cloud Office email, see [Enable DKIM in the Cloud Office Control Panel](/support/how-to/enable-dkim-in-the-cloud-office-control-panel). Creating a DKIM record is the second step in the process.

   - **DMARC** records indicate to recipient mail servers that messages sent from that domain are employing DKIM and SPF sending policies. The recipient mail server then validates the message that you sent by using your DKIM and SPF policies. [Creating a DMARC policy](/support/how-to/create-a-dmarc-policy) enables you to enforce DKIM and SPF records, which is the last step in the process.

Record policies protect the integrity of internal emails, as well as the external reputation of your domain. Implementing this protection is a multistep process that you must carefully follow. For more information, see [Create a DMARC policy](/support/how-to/create-a-dmarc-policy).


### References

- [Change a Microsoft Exchange mailbox password](/support/how-to/change-a-microsoft-exchange-mailbox-password)
- [Cloud Office support terminology](/support/how-to/cloud-office-support-terminology)
- [Exchange - Spoofing: How to identify and protect your organization](https://emailhelp.rackspace.com/l/support/how-to-prevent-email-spoofing)
- [Create an SPF record policy](/support/how-to/create-an-spf-policy)
- [Enable DKIM in the Cloud Office Control Panel](/support/how-to/enable-dkim-in-the-cloud-office-control-panel)
- [Create a DMARC policy](/support/how-to/create-a-dmarc-policy)
- [View and read email headers in the Outlook Web App](/support/how-to/view-and-read-email-headers-in-owa)
- [Block senders in Outlook Web App](/support/how-to/block-senders-in-owa)
- [Change a Microsoft Exchange email mailbox password](/support/how-to/change-a-microsoft-exchange-mailbox-password)
