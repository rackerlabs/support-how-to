---
permalink: monitoring-differences-between-rackspace-server-users-and-non-rackspace-server-users/
audit_date: '2020-11-27'
title: 'Differences between monitoring Rackspace Server users and non-Rackspace Server users'
type: article
created_date: '2014-06-16'
created_by: Maria Abrahms
last_modified_date: '2020-11-27'
last_modified_by: Rose Morales
product: Rackspace Monitoring
product_url: rackspace-monitoring
---

You can use Rackspace Monitoring with Rackspace servers and non-Rackspace
servers. When you are using a Rackspace server, you can be at a *Managed
Operations* service level or a *Managed Infrastructure* service level. There are
some differences between what you can do in each of these circumstances. This
article describes the following options:

- Rackspace servers with a Managed Operations service level
- Rackspace servers with a Managed Infrastructure service level
- Unmanaged non-Rackspace servers

**Note:** Non-Rackspace servers are not managed.

### Rackspace servers with a Managed Operations service level

- Entities for Rackspace servers and databases are managed automatically, which
  means:
  - Monitoring entities are created automatically for new cloud servers or new
    cloud databases.
  - When you delete a cloud server or cloud database, the associated entity is
    deleted in the monitoring system.
  - When you change the cloud server name, the name is changed in monitoring
    automatically. (You cannot change instance names for cloud databases.)
- You can change the label for Rackspace Cloud Servers only dfirectly on the server.
  The change  propagates to the monitoring system quickly. You cannot change the
  instance name for a cloud database.
- These servers have the default notification plan, **npTechnicalContactsEmail**,
  and have an additional notification entry, **npManaged**.
- The agent needs the agent token to authenticate with the monitoring server.
  The system stores this value as **monitoring_token** in the agent configuration file.
  The agent can identify the server it is installed on to.
- By default, the monitoring agent is installed and turned on, and the
  monitoring is configured automatically. For details, see 
  [Managed accounts hosting](https://www.rackspace.com/dedicated-servers).
- For Cloud Databases customers, the monitoring agent is installed with monitoring configured
  automatically, by default. For details, see the
  [Cloud Databases documentation](https://docs.rackspace.com/docs/cloud-databases/v1/developer-guide/).
- You can access some monitoring features through the Cloud Control Panel and all the
  features through API. You can see more monitoring features, as well as metrics, through
  the [Rackspace Intelligence interface](https://intelligence.rackspace.com/).

### Rackspace servers with a Managed Infrastructure service level

- Entities for Rackspace servers and databases are managed automatically, which
  means:
  - Monitoring entities are created automatically for new cloud servers or new
    cloud databases.
  - When you delete a cloud server or cloud database, the associated entity is
    deleted in the monitoring system.
  - When you change the cloud server name, the name is changed in monitoring
    automatically. (You cannot change the instance name for a cloud database.)
- You can change the label for Rackspace Cloud Servers directly only on the server.
  The change propagates to the monitoring system quickly. You cannot change the instance
  name for a cloud database.
- These servers have only the default notification plan, **npTechnicalContactsEmail**.
- The agent needs the agent token to authenticate with the monitoring server.
  The system stores this value as **monitoring_token** in the agent configuration file.
  The agent can identify the server it is installed on to.
- By default, you must manually install the monitoring agent. For details, see the
  [Rackspace Monitoring documentation](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#install-and-configure-the-agent).
- For Cloud Databases customers, the monitoring agent is installed with
  monitoring configured automatically, by default. For details, see the
  [Cloud Databases documentation](https://docs.rackspace.com/docs/cloud-databases/v1/developer-guide/).
- You can access some monitoring features through the Cloud Control Panel and
  all the features through API. You can see more monitoring features, as well as
  metrics, through
  the [Rackspace Intelligence interface](https://intelligence.rackspace.com/).

### Unmanaged non-Rackspace servers

- You must manage entities for non-Rackspace servers and databases manually.
  This means:
  - You need to create monitoring entities manually for new servers. When
    configuring the default monitoring agent, you either select an entity you
    already created for it or let the setup process create one for you.
  - When you delete a server, you must delete the associated monitoring entity
    through the API or CLI.
  - When you change the server name, you must manually change the name in
    monitoring.
- You can delete monitoring entities and change the label for servers.
- These servers have only the default notification plan **npTechnicalContactsEmail**.
- The agent needs the agent token to authenticate with the monitoring server.
  The system stores this value is as **monitoring_token** in the agent configuration file.

In addition, the agent needs to know the entity on which it is installed. This
value is the **agent_id** associated with the entity on the monitoring server.
This is also a field in the agent configuration file.

Suppose you are going to create an image from a non-Rackspace server to be used to
create more servers. In this case, before you generate the image, you need to remove
the **agent_id field** in the agent configuration file that the agent setup process
generated. Otherwise, the agent is associated with the entity
from which you created the image, and the checks won't work properly.

Agent configuration files are located at the following paths:
- Ubuntu operating systems, CentOS: **/etc/rackspace-monitoring-agent.cfg**
- Windows: **c:\ProgramData\Rackspace
  Monitoring\config\rackspace-monitoring-agent.cfg**

To learn more about agent configuration, see
[Install and configure the Rackspace Monitoring Agent](/support/how-to/install-and-configure-the-rackspace-monitoring-agent).

- By default, you must manually install the monitoring agent must be manually. For details, see
  the [Cloud Monitoring documentation](https://docs.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#install-and-configure-the-agent).
- You can see monitoring features, as well as metrics, through the [Rackspace Intelligence interface](https://intelligence.rackspace.com/).
