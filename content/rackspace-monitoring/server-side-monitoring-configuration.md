---
permalink: server-side-monitoring-configuration/
audit_date:
title: Server-side monitoring configuration
type: article
created_date: '2017-01-03'
created_by: Nate Archer
last_modified_date:
last_modified_by:
product: Rackspace Monitoring
product_url: rackspace-monitoring
---

Monitoring configurations can be applied across an entire environment with a server-side configuration. Server-side configurations allow you to update and share your preferred configuration quickly, and can also be used with automation tools. This article describes how to create a server-side configuration.

### Set up the Rackspace monitoring agent

Before creating a server side configuration file, make sure the latest version of the Rackspace monitoring agent is connected to the server you want to target for configuration. See [Install and configure the Rackspace Monitoring Agent](/how-to/install-and-configure-the-rackspace-monitoring-agent/) to learn how to connect the monitoring agent.

### Create a server-side configuration file

A configuration file written in YAML is needed in order for the servier-side configuration to work.

1. Create a YAML configuration file with one monitoring check and one monitoring or more monitoring alarms. The following `main_disk_check.yaml` file can be used as a template for creating your configuration file.

       type        : agent.filesystem
       label       : Check for Main Disk
       disabled    : false
       period      : 60
       timeout     : 30
       details     :
         target  : /
       alarms      :
         alarm1  :
            label                 : disk used alarm
            notification_plan_id  : npTechnicalContactsEmail
            criteria              : |
                if (percentage(metric['used'], metric['total']) > 90) {
                    return new AlarmStatus(CRITICAL, 'Less than 10% free space left - #{used} used out of #{total}');
                }
                if (percentage(metric['used'], metric['total']) > 80) {
                   return new AlarmStatus(WARNING, 'Less than 20% free space left - #{used} used out of #{total}');
                }

2. Save the file to the `rackspace-monitoring-agent.conf.d` directory on your target server. The location of the conf.d directory will depend on your server's operating system.

   - For linux:

         /etc/rackspace-monitoring-agent.conf.d/main_disk_check.yaml

   - For windows:

         "C:ProgramDataRackspace Monitoringconfigrackspace-monitoring-agent.conf.dmain_disk_check.yaml"

   **Note:** Saving the configuration file to the `conf.d` directory might require administrative access.

3. After the YAML file is saved in the correct directory, restart the Rackspace Monitoring agent.

   - For linux, use the following command:

         sudo service rackspace-monitoring-agent restart 

   - For Windows, use the Windows service manager.

   The agent will upload the file to the Rackspace Monitoring service and set up your new configuration on the target server.

### Update or delete your server-side configuration

If you want to change your server-side configuration file in the future, update and save your YAML file, then restart the agent. The agent will update the target server with your updated checks and alarms.

If you want to delete your server-side configuration file, simply delete the file and restart the agent. The agent will delete any checks and alarms you included in the file.
