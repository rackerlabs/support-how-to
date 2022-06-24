---
permalink: cloud-load-balancer-session-persistence
audit_date: '2022-06-20'
title: 'Cloud Load Balancer - Session Persistence'
type: article
created_date: '2022-06-20'
created_by: Morgan Marion
last_modified_date: '2022-06-20'
last_modified_by: Miguel Salgado
product: Cloud Load Balancers
product_url: cloud-load-balancers
---
Session Persistence is an additional configuration option on a Cloud Load Balancer where subsequent requests from clients are directed to the same node in your load balancer pool.

### Enable/Disable Session Persistence in the Cloud Control Panel
Here are three different ways to edit the Session Persistence option in the Cloud Control Panel.
- Networking > Load Balancers > Cog wheel next to Load Balancer name > Edit Session Persistence > Enable/Disable Session Persistence.
- Networking > Load Balancers > Select Load Balancer name > Actions button > Edit Session Persistence > Enable/Disable Session Persistence.
- Networking > Load Balancers > Select Load Balancer name > Scroll down to Optional Features > Session Persistence > Pencil icon > Enable/Disable Session Persistence.

### Enable/Disable Session Persistence through Pitchfork API web application
Pitchfork is an interactive web application that allows a user to work with APIs in order to make configuration changes.
For more information on Pitchfork, please refer to the article below:
- [Pitchfork - the Rackspace Cloud API web application](https://docs.rackspace.com/support/how-to/pitchfork-the-rackspace-cloud-api-web-application)

### Check For Session Persistence
Send this [API call](https://pitchfork.rax.io/load_balancers/#check_for_session_persistence-load_balancers) with the Load Balancer ID and it will return the current Session Persistence setting.

### Enable Session Persistence
Send this [API call](https://pitchfork.rax.io/load_balancers/#enable_session_persistence-load_balancers) with the Load Balancer ID and also select the persistence type.
- **HTTP_COOKIE** - A session persistence mechanism that inserts an HTTP cookie and is used to determine the destination back-end node. This is supported for HTTP load balancing only.
- **SOURCE_IP** - A session persistence mechanism that keeps track of the source IP address that is mapped and is able to determine the destination back-end node. This is supported for HTTPS pass-through and HTTP load balancing only.

### Disable Session Persistence
Send this [API call](https://pitchfork.rax.io/load_balancers/#disable_session_persistence-load_balancers) with the Load Balancer ID and it will disable Session Persistence.

### Related Articles
For more a more detailed look at Session Persistence, please see our Developer Documentation.

- [Cloud Load BalancersSession persistence](https://docs.rackspace.com/docs/cloud-load-balancers/v1/api-reference/sessions)

- [Pitchfork - the Rackspace Cloud API web application](https://docs.rackspace.com/support/how-to/pitchfork-the-rackspace-cloud-api-web-application)
</br>

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).