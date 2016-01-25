---
node_id: 4553
title: Deploying Rackspace Metrics
type: article
created_date: '2015-02-05'
created_by: Constanze Kratel
last_modified_date: '2016-01-22'
last_modified_by: Constanze Kratel
product: Rackspace Monitoring
product_url: cloud-monitoring
---

To deploy the Rackspace Metrics service, you first need to complete the
following steps:

-   [Install the Blueflood Statsd backend engine](#blueflood)
-   [Integrate with Rackspace Metrics](#integrate)

### Install the Blueflood Statsd backend engine

Clone the statsd repository by typing the following at a command-line
interface:

    git clone https://github.com/etsy/statsd.git

In a separate directory clone the blueflood statsd backend

    git clone git@github.com:tilogaat/blueflood-statsd-backend.git

Install nodejs.

    sudo apt-get install nodejs

If you are on Ubuntu, there may be another program called node. Make
sure you purge it and then install nodejs

Install the node package manager program npm.

    sudo apt-get install npm

Now navigate to the statsd directory

    cd /path/to/statsd

Let's install the statsd backend using npm now.

    npm install /path/to/blueflood-statsd-backend

If all goes well, you should see the module under node\_modules

    ls node_modules

Let us create a statsd config file called local.config and put the
following into it. Assuming blueflood ingestion is running on 127.0.0.1
and port 19000 (Example config here:
<https://github.com/etsy/statsd/blob/master/exampleConfig.js>) Also,
please set the deleteIdleStats flag to true, since the way Statsd sends
us the 0d out values, is unexpected in some cases.

    {
        backends: ["statsd-blueflood-backend"],
        port: 8125,
        flushInterval: 10000,
        dumpMessages: true,
        deleteIdleStats: true,
        "blueflood": {
            "tenantId": "333333",
            "endpoint": "http://127.0.0.1:19000",
            "authModule": "./auth",
            "authClass": "RaxAuth",
            "authParams": {
                    "raxusername": "my_cloud_user_name",
                    "raxapikey": "my_rax_api_key"
            }
        }
    }

### Integrate with Rackspace Metrics

Add your Rackspace Username and Api Key to the config. If the keys are
present, the metrics will be sent to the Rackspace Metrics endpoint. If
not, they will be sent to the endpoint in the configuration.

    "blueflood": {
      "tenantId": "333333",
      "endpoint": "http://iad.metrics-ingest.api.rackspacecloud.com:80",
      "authModule": "./auth",
      "authClass": "RaxAuth",
      "authParams": {
        "raxusername": "my_cloud_user_name",
        "raxapikey": "my_rax_api_key"
      }
    }

Now, let us run statsd with the given config.

    nodejs stats.js local.config

Troubleshooting tip: If you see an error that the server cannot find the
module "statsd-blueflood-backend", then do ls node\_modules and see if
that module

If all goes well, the nodejs statsd server should be up and running now.

    12 Sep 15:25:40 - reading config file: local.config
    12 Sep 15:25:41 - server is up

To test: Statsd keeps generating stats about iself. These stats should
be sent to Blueflood if the configuration is right

    { counters: { 'statsd.bad_lines_seen': 0, 'statsd.packets_received': 0 },
      gauges: {},
      timers: {},
      timer_counters: {},
      sets: {},
      counter_rates: { 'statsd.bad_lines_seen': 0, 'statsd.packets_received': 0 },
      timer_data: {},
      pctThreshold: [ 90 ],
      histogram: undefined,
      statsd_metrics: { processing_time: 0 } }

You can also send statsd timers, counters, gauges as shown in the
following link
<https://www.digitalocean.com/community/tutorials/how-to-configure-statsd-to-collect-arbitrary-stats-for-graphite-on-ubuntu-14-04>
All these will be sent to Blueflood.

    echo "sample.gauge:10|g" | nc -u -w0 127.0.0.1 8125
    echo "glork:320|ms" | nc -u -w0 127.0.0.1 8125

