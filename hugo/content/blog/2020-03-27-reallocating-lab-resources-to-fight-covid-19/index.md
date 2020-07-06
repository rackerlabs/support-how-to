---
layout: post
title: "Reallocating lab systems to fight COVID-19"
date: 2020-03-27
comments: true
author: Jason Mick
published: true
authorIsRacker: true
bio: "I have been with Rackspace Global Infrastructure Engineering for 9 years. During my tenure I have focused on the design and development of compute platforms that optimize scale and cost for Rackspace customers. Leveraging strong partner relationships, I also lead the majority of our future hardware technology investigations."
categories:
    - General
metaTitle: "Reallocating lab systems to fight COVID-19"
metaDescription: "The events over the last few days concerning the Coronavirus has left us wondering what we could do to make this horrible turn of events a little better."
ogTitle: "Reallocating lab systems to fight COVID-19"
ogDescription: "The events over the last few days concerning the Coronavirus has left us wondering what we could do to make this horrible turn of events a little better."
---

The events over the last few days concerning the Coronavirus has left us
wondering what we could do to make this horrible turn of events a little better.

<!--more-->

### Who We Are

Global Infrastructure Engineering (GIE) at Rackspace is a team of engineers who
focus on building partnerships with the largest technology providers in the
business. We leverage those partnerships to provide Rackspace with the best
technology to deliver our customers' workloads.

In our quest to test, validate, and support Rackspace, we run a lab of about
150 servers, which at any given point in time are testing and validating various
workloads. That changed when we got a hold of David Anderson at the University
of Berkeley. He directed us to a distributed computing project called BOINC
(Rosetta@home) that is working on developing protein structures to cure human
diseases. GIE decided to make a quick change and to offer our infrastructure to
support this community of scientists.  As of today, every machine we can spare
in our labs is now crunching numbers for scientific research to advance the
ongoing research to help end the current COVID-19 crisis.

### Making the Pivot

Luckily, our lab had recently gone through a change from our long-standing boot
and build system, Cobbler, to a more modern system made available by Canonical.
In January, after a few weeks of rework, we were up and running with a brand
new IaaS platform based on Metal as a Service (MaaS).  MaaS enabled us to
easily rebuild all the systems in our lab within a few minutes with full
orchestration and user separation and control.  We could do this before but in
a much more manual process.

Now it just takes a few commands to get it done. Ubuntu&reg; `maas` has been a
great tool to enable us to quickly rebuild our lab into systems that are
compatible with BOINC infrastructure needs.  In a matter of minutes, we can take
a system that was shut down and bring it online. After we packaged that with a
few Docker&reg; commands, we have something that can deploy quickly and in an
automated fashion.  Functionally, it is only a single command to take a shut-down
server in our lab and have it running rosetta@home within five minutes or so.

By using the `maas` client, you can start a machine and kick off the BOINC
client with the following command:

    $ maas <user> machine deploy <machine_id>  user_data=$(base64 \
    -w 0 /home/racker/BOINC_runner.sh) distro_series=bionicBOINC

The script installs Docker and builds a container running rosetta@home. The
BOINC script runner looks like this:

    #!/bin/bash
    sudo apt-get install -y docker.io
    docker run -ti -d --name boinc -e “boincurl=https://boinc.bakerlab.org/rosetta” \
    -e “boinckey=<our_BOINC_key> antonym/boinc

By using this capability, we easily reallocated the available portions of our
lab to start running Rosetta@home jobs. [See how we're doing](https://boinc.bakerlab.org/rosetta/show_user.php?userid=2096756).
We can also do further work to allocate resources on the weekends or when the
systems are not in use.

### How can we help you?

Very few of us in this world have the knowledge and understanding of virology
and epidemiology to make a real change in this epidemic. The best thing we can
do at this point is to give the people who have the knowledge the tools they
need to find solutions.  With that in mind, Rackspace is now offering resources
and several programs to help fight against COVID-19.  You can check them out
[here](https://www.rackspace.com/lp/covid-19).

Whether you are spinning up resources to help fight diseases, or need resources
to scale your business, we are here to help!

Use the Feedback tab to make any comments or ask questions.
