---
layout: post
title: "Join Rackspace in the fight against COVID-19 with BOINC"
date: 2020-03-19
comments: true
author: Antony Messerli
published: true
authorIsRacker: true
authorAvatar: 'https://www.gravatar.com/avatar/53b5341ace963caa36117f64a3353185'
bio: "Antony Messerli is a Principal Engineer at Rackspace who heads up the
Global Infrastructure Engineering team responsible for hardware development and
engineering.  He is a 17 year Racker with a background in hardware development,
software engineering, and building large scale IaaS clouds."
categories:
    - General
metaTitle: "Join Rackspace in the fight against COVID-19 with BOINC"
metaDescription: "Find out how you can personally help fight COVID-19."
ogTitle: "Join Rackspace in the fight against COVID-19 with BOINC"
ogDescription: "Find out how you can personally help fight COVID-19."
---

Wherever you live in the world, you have probably been impacted by COVID-19,
either by social distancing, quarantines, or even just trying to find groceries
at your local market. You might wonder what you can do to help in the fight
against COVID-19.

<!--more-->

A few projects currently leverage unused CPU or GPU computing power in computer
systems to enable researchers to continue in their efforts to understand the
Coronavirus, as well as other diseases.

One of these projects is the
[Berkeley Open Infrastructure for Network Computing’s (BOINC) Rosetta@home project](https://boinc.bakerlab.org/rosetta/).
The project relies on donated CPU and GPU time to help to determine 3-dimensional
shapes of proteins in research that may ultimately lead to finding cures for
some major human diseases. By running the Rosetta program on your computer when
you are not using your computer, you help them speed up and extend their
research in ways they could not take advantage of without your help.

### Get started

You can [download the client](https://boinc.bakerlab.org/rosetta/join.php) to
use the client from a user interface, but in this blog post, I show you how to
use Docker&reg; to run the client in headless mode.

Use the following steps to get started in headless mode:

1)	Create a BOINC user account by using the following URL:

[https://boinc.bakerlab.org/rosetta/create_account_form.php](https://boinc.bakerlab.org/rosetta/create_account_form.php)

2)	After you create an account and log in, save your weak account key:

[https://boinc.bakerlab.org/rosetta/weak_auth.php](https://boinc.bakerlab.org/rosetta/weak_auth.php)

3)	Load the Docker container, as described in the next section.

### Start the Docker container

We put together a BOINC Docker image based on Ubuntu 18.04, which is easy to
load and run. The system uses GitHub actions to generate and push this
[Docker image](https://github.com/antonym/docker-boinc) to Docker hub.

To load the image, run the following command. Replace *insert\_insecure\_key\_here*
with the account key that you saved previously:

    docker run -ti -d --name boinc \
    -e "boincurl=https://boinc.bakerlab.org/rosetta" \
    -e "boinckey=insert_insecure_key_here" antonym/boinc

These commands start the BOINC client. The BOINC client links the system to your
account, retrieves chunks of work, processes them, and uploads the results to
the project.

**NOTE:** This is a CPU intensive process that spins up on all available CPUs.
   You can watch the CPUs by using the htop tool. You probably should not
   run this on a production machine.

### Monitor BOINC processes

To watch the logs from the BOINC client:

    docker logs boinc -f

To stop the container:

    docker stop boinc

To restart the container and resume previous jobs:

    docker start boinc

### Join the Rackspace BOINC team

Rackspace has also set up a
[BOINC team](https://boinc.bakerlab.org/rosetta/team_display.php?teamid=19101),
so feel free to join us so we can track our team’s efforts.

You can see how we're doing [here](https://stats.foldingathome.org/team/227455).

### Other distributed compute resources

The following list shows other projects that either currently have COVID-19
programs or are working on developing them:

-	**Folding@Home**: [https://foldingathome.org/](https://foldingathome.org/)
-	**World Community Grid**: [https://www.worldcommunitygrid.org/](https://www.worldcommunitygrid.org/)
-	**GPUGRID.net**: [https://gpugrid.net/](https://gpugrid.net/)

We encourage you to check them all out, and if you have access to a lab or spare
computing, help join the effort to fight disease!

Use the Feedback tab to make any comments or ask questions.


