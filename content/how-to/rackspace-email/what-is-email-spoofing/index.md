---
permalink: what-is-email-spoofing
audit_date: '2022-05-13'
title: 'What is Email Spoofing?'
type: article
created_date: '2022-05-13'
created_by: Ivan Espejel
last_modified_date: '2022-05-13'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

### Prerequisites
 - Difficulty: Moderate
 - Time needed: 15 minutes
 - Tools required: Email access
 - Applies to: Administrator and User

### What is email spoofing?
Email spoofing use spam and phishing as a way to fool people into thinking a message came from someone or company they know and can trust. The attacker forges email headers in spoofing attacks so that client software shows the false sender address, which most users believe to be a legitimate source. Users will not notice the counterfeit sender in a message until they examine the sender more carefully. They are more likely to trust a name, or a company name they are familiar with and as a result, they'll click on fraudulent sites, open virus attachments, send personal information, and even wire money. Antimalware software and recipient servers can help detect and filter fraudulent messages.

### What to look for in a suspected fraudulent email: 
- Fake or uncommon senders for example: 
    - “Billy Smith” bsmith89@hotmail.com (real address) 
    - “Billy Smith” BillySmith.cmu.edu@scammersite.net (fake address)
- Identify that the 'From' email address matches the display name.
    - If the reply-to address does not match the sender or the site that they claim to be representing, most likely the email is fraudulent.
### Things to keep in mind when you receive a suspicious email: 
- Ask yourself: 
    - Was I expecting this message?
    - Does this email make sense?
    - Am I being pushed to acty quickly?  
- Examine the email and look for: 
    - Sense of urgency
    - Unsolicited request of personal information
    - Generic greeting/signature
    - Unfamiliar links or attachments  
- Contact the sender of the message through a trusted channel 
    - If the email appears legitimate, but still seems suspicious, it is best to contact the supposed sender through a trusted phone number or open a new outgoing email message using their real email address found in the address book. Do not reply to the message in question.

### How Email Spoofing Works
Many consumers do not check headers before connecting with an email sender, despite the fact that they reveal the genuine route and sender.
The three major components of an email are:
- The sender address
- The recipient address
- The body of the email
- The Reply-To field is another component that is frequently exploited in phishing. This field can potentially be customized by the sender and utilized in phishing attacks. The Reply-To address, which can differ from the sender's address, instructs the client email software where to send a reply. Email servers and the SMTP protocol, once again, do not verify if this email is genuine or counterfeit. It is up to the user to notice that the reply is being sent to the incorrect person.
An example of a falsified email is as follows:

### Recognize a spoof message
Scammers change different parts of an email to make it appear as if the communication was sent by someone other than the intended recipient. You must read the email headers of a suspected faked message to see the attributes listed below. Some instances of faked properties are as follows:

- **FROM boss@companyexample.com:** This appears to come from a legitimate source on a spoofed message.
- **REPLY-TO:** This can also be spoofed, but a lazy scammer might leave the actual REPLY-TO address. If you see a different sending address here, it might be a spoofed email.
- **RETURN-PATH:** This can also be spoofed, but a lazy scammer might leave the actual RETURN-PATH address. If you see a different sending address here, it might be a spoofed email.
- **SOURCE IP address or "X-ORIGIN" address:** This is typically more difficult to alter, but it is possible.

The first three attributes can be changed by a spoofer using settings in Microsoft Outlook, Gmail, Hotmail, or other email applications. They can also change the fourth characteristic, the IP address, although a phony IP address takes more extensive user knowledge to be believable.

CEO fraud, also known as corporate email compromise, is a frequent email spoofing attack (BEC). In BEC, the attacker impersonates a corporate executive or owner by spoofing the sender's email address. An employee in the financial, accounting, or accounts payable departments is frequently the target of this attack.
When a request comes from someone they trust, especially an authority figure, even the most intelligent and well-intentioned employees might be duped into sending money.

### How to Protect from Email Spoofing
Even with email protection in place, some harmful email messages manage to make their way into users' inboxes. There are numerous actions you may take to avoid becoming a victim of email fraud, whether you're a financial decision-maker or someone who uses personal email at work:
- Never click a link to go to a website that requires authentication. Always enter the official domain into your browser and authenticate there.
- Because the steps for viewing email headers varies depending on the email client, seek up how to view email headers for your mailbox program first. Then, open email headers and check for a PASS or FAIL response in the Received-SPF part of the headers.
- Use a search engine to copy and paste the contents of an email message. The text used in a typical phishing assault has almost certainly already been disclosed and published on the Internet.
- Emails purporting to be from an official source but with poor spelling or language should be avoided.
- Don't open attachments from unfamiliar or dubious senders.
- Emails offering huge sums of money or anything else that sounds too good to be true are almost always a scam.
- Be wary of emails that convey a sense of impending doom or peril. Phishing and BEC attempts to bypass receivers' inherent skepticism by implying that something horrible will happen if they do not act promptly. If the alert warns of upcoming account closures, scheduled payment failures, or questionable behavior on one of your financial accounts, proceed with caution. Instead of clicking on the link in the email, go to the website directly through your browser.

### Combat spoofing
The primary line of protection against these types of attacks is user education. If you receive a faked communication, you should follow these steps:
- Blocklist any fake email addresses or IP addresses listed in the REPLY-TO, RETURN-PATH, or SOURCE IP fields. Blocklist addresses, domains, and IP addresses in Rackspace Email has instructions.
- If you or your users gave that information at any stage, change your email account's password right away.
- Inform the rest of your company about the circumstance.
Because you can't stop spoofing, it's perhaps the most aggravating form of abuse to deal with. Spoofing is akin to drafting a bunch of letters and signing them with someone else's name. You can image how tough it would be to track down that information.

Implementing SPF, DKIM, and DMARC records in that order is the most important move you can make as an administrator. These are DNS records that offer extra levels of protection to your domain name to prevent fraudulent email from being sent out.
- **Sender Policy Framework (SPF)** records assist recipient mail servers in detecting illegitimate domain use, such as forgeries (spoofing). First, create an SPF record policy.
Note: If you send email on behalf of your domain from other providers, be sure to include their sending servers in the same SPF record. Make no more than one SPF record.
- **DomainKeys Identified Mail (DKIM)** records give mail sent from your domain a digital signature, indicating that it is allowed mail. See Enable DKIM in the Cloud Office Control Panel for details on how to enable DKIM for your Rackspace Cloud Office email. The process continues with the creation of a DKIM record.
- **DMARC (Domain Message Authentication Reporting and Compliance)** records inform recipient mail servers that messages transmitted from that domain follow DKIM and SPF standards. Your DKIM and SPF policies are then used by the recipient mail server to validate the message you sent. You can enforce DKIM and SPF records by creating a DMARC record policy. This is the final stage of the procedure.
Using record policies safeguards the integrity of internal emails as well as your domain's outward reputation. You must carefully follow a multi-step approach to implement this protection. Create a DMARC policy for more details.
<br>

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).