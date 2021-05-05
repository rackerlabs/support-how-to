---
permalink: troubleshoot-a-downed-linux-cloud-server
audit_date: '2018-08-16'
title: Troubleshoot a downed Linux cloud server
type: article
created_date: '2018-08-03'
created_by: Shaun Crumpler
last_modified_date: '2019-04-18'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

If the site on your server is not loading, you can’t log in to your server, or
you receive connection-related alerts for your server, your server is down.

If you are a Managed Infrastructure customer, you can use these troubleshooting
steps to diagnose whether you can solve the issue, or escalate the issue to
Rackspace support. This article also specifies helpful information to include
when you create a support ticket in order to expedite Rackspace’s response.


### Check Rackspace system status

Before diagnosing a downed Linux cloud server yourself, visit the
[Rackspace System Status](https://rackspace.service-now.com/system_status/) page
and check for open issues that might
be impacting the service.

### Check support tickets

Check your open support tickets for information about any incidents that might
be affecting the service. To check your open support tickets, log in to the
[Cloud Control Panel](https://login.rackspace.com/) and click
**Tickets > Ticket List** in the top navigation bar.

### Check the console of the downed cloud server

Use the following steps the check the downed server's console:

1. Connect to your cloud server and check the console. For steps on how to connect
   to the cloud server, see [Connect to a cloud server](/support/how-to/connect-to-a-cloud-server).

   - If you are able to successfully connect using the command line application,
     such as terminal or powershell, then skip to step 5.

   - If you can not connect using a command line application, use the Emergency
     console in [Cloud Control Panel](https://login.rackspace.com/). Directions
     for finding the emergency console are found in steps 2 - 6.

2. Log in to the [Cloud Control Panel](https://login.rackspace.com).

3. In the top navigation bar, click **Select a Product > Rackspace Cloud**.

4. Select**Servers** > **Cloud Servers**.

5. Find the downed server in question and click the gear icon to the left of its name.

6. Select **Emergency Console**. This starts a browser based command line application.

7. Test the responsiveness of your server by clicking into the command line and pressing **Enter**.

  - If you see a response, the server is responsive. Skip to the **Ping/Nmap IP Address** section.

  - If the console is not responding or displays errors such as being out of system
    resources, go to the **Attempt Reboot** section.


### Attempt Reboot

If your server is not responding through the command line, a hard reboot might
make the server responsive again.

1. Return to the server list in the Cloud Control panel and click the gear icon
   next to the downed server’s name. From the drop-down, select **Reboot Server**.
2. Review the message on the screen. After you're reviewed the message, click **Reboot Server**.
3. Repeat the steps in the **Check the console** section.

   - If the server is responsive, move on to the **Ping/Nmap IP Address** troubleshooting step.

   - If the console is still not responsive, check for either the status page
     or any open support tickets about an incident that impacts the server in
     question. If you can't find any information regarding the status of your
     server, create a support ticket. Give a brief description of the
     troubleshooting steps you performed to expedite response time.

### Ping/Nmap IP Address

1. From your cloud server's **Details** page, go to the **Networks and Security Groups**
   section and then copy the Public IPv4 address.

2. In your command line application or console, enter `ping <ipv4-address>`.
   Take note if a response is received or not.

3. In a terminal window, run the command `nmap -sV -Pn` followed by the copied
   IP address.

   **Note:** The nmap state can be misleading. `closed` means that the port is
   open but the service is not running. `filtered` means that the port is closed
   in the firewall. `open` means that the port is open and the service is running
   on the instance.

If these commands return a response, then the server is healthy and the issues
are at the operating system level. Rackspace support will not be able to diagnose
the problem further on Managed Infrastructure accounts. If the account is on the
Managed Operations service level, create a support ticket and provide the
troubleshooting that has been completed.

If your server is not returning responses for any of the commands in the previous
troubleshooting steps, open a support ticket and include all of the steps that you
have attempted to expedite the issue.




<script type="application/ld+json">
{
"@context": "https://schema.org/",
"@type": "HowTo",
"name": "Troubleshoot a downed Linux cloud server",
"description": "You can use these troubleshooting steps to diagnose whether you can solve the issue, or escalate the issue to Rackspace support.",
"step": [{
	"@type": "HowToSection",
	"name": "Check Rackspace system status",
	"itemListElement": [{
		"@type": "HowToStep",
		"name": "Check Rackspace system status",
		"text": "Before diagnosing a downed Linux cloud server yourself, visit the Rackspace System Status page and check for open issues that might be impacting the service."
	}]},{
	"@type": "HowToSection",
	"name": "Check support tickets",
	"itemListElement": [{
		"@type": "HowToStep",
		"name": "Check Support Tickets",
		"text": "Check your open support tickets for information about any incidents that might be affecting the service. To check your open support tickets, log in to the Cloud Control Panel and click Tickets > Ticket List in the top navigation bar."
	}]},{
	"@type": "HowToSection",
	"name": "Check the console of the downed cloud server",
	"description": "Use the following steps the check the downed server’s console:",
	"itemListElement": [{
		"@type": "HowToStep",
		"text": "Connect to your cloud server and check the console. For steps on how to connect to the cloud server, see Connect to a cloud server.",
		"itemListElement": [{
			"@type": "HowToDirection",
			"text": "If you are able to successfully connect using the command line application, such as terminal or powershell, then skip to step 5."
			},{
			"@type": "HowToDirection",
			"text": "If you can not connect using a command line application, use the Emergency console in Cloud Control Panel. Directions for finding the emergency console are found in steps 2 - 6."
		}]},{
		"@type": "HowToStep",
		"text": "Log in to the Cloud Control Panel."
		},{
		"@type": "HowToStep",
		"text": "In the top navigation bar, click Select a Product > Rackspace Cloud."
		},{
		"@type": "HowToStep",
		"text": "Select Servers > Cloud Servers."
		},{
		"@type": "HowToStep",
		"text": "Find the downed server in question and click the gear icon to the left of its name."
		},{
		"@type": "HowToStep",
		"text": "Select Emergency Console. This starts a browser based command line application."
		},{
		"@type": "HowToStep",
		"text": "Test the responsiveness of your server by clicking into the command line and pressing Enter.",
		"itemListElement": [{
			"@type": "HowToDirection",
			"text": "If you see a response, the server is responsive. Skip to the Ping/Nmap IP Address section."
			},{
			"@type": "HowToDirection",
			"text": "If the console is not responding or displays errors such as being out of system resources, go to the Attempt Reboot section."
	}]}]},{
	"@type": "HowToSection",
	"name": "Attempt Reboot",
	"description": "If your server is not responding through the command line, a hard reboot might make the server responsive again.",
	"itemListElement": [{
		"@type": "HowToStep",
		"text": "Return to the server list in the Cloud Control panel and click the gear icon next to the downed server’s name. From the drop-down, select Reboot Server."
		},{
		"@type": "HowToStep",
		"text": "Review the message on the screen. After you’re reviewed the message, click Reboot Server."
		},{
		"@type": "HowToStep",
		"text": "Repeat the steps in the Check the console section.",
		"itemListElement": [{
			"@type": "HowToDirection",
			"text": "If the server is responsive, move on to the Ping/Nmap IP Address troubleshooting step."
			},{
			"@type": "HowToDirection",
			"text": "If the console is still not responsive, check for either the status page or any open support tickets about an incident that impacts the server in question. If you can’t find any information regarding the status of your server, create a support ticket. Give a brief description of the troubleshooting steps you performed to expedite response time."
	}]}]},{
	"@type": "HowToSection",
	"name": "Ping/Nmap IP Address",
	"itemListElement": [{
		"@type": "HowToStep",
		"text": "From your cloud server’s Details page, go to the Networks and Security Groups section and then copy the Public IPv4 address."
		},{
		"@type": "HowToStep",
		"text": "In your command line application or console, enter ping <ipv4-address>. Take note if a response is received or not."
		},{
		"@type": "HowToStep",
		"text": "In a terminal window, run the command nmap -sV -Pn followed by the copied IP address.",
		"itemListElement": [{
			"@type": "HowToTip",
			"text": "The nmap state can be misleading. closed means that the port is open but the service is not running. filtered means that the port is closed in the firewall. open means that the port is open and the service is running on the instance."
			},{
			"@type": "HowToDirection",
			"text": "If these commands return a response, then the server is healthy and the issues are at the operating system level."
			},{
			"@type": "HowToDirection",
			"text": "If your server is not returning responses for any of the commands in the previous troubleshooting steps, open a support ticket and include all of the steps that you have attempted to expedite the issue."
}]}]}]}
</script>
