---
layout: post
title: Using message queues in cloud applications
date: '2013-04-09T08:00:06.000Z'
comments: true
author: Hart Hoover
published: true
categories:
    - General
---
{% img right 2013-04-09-using-message-queues-in-cloud-applications/pillar.png 160 160 %}

You can consider message queues as a way to achieve parallel computing in an
application. In this post, we dive into the different message queues out there
and how to implement a message queue in an application.

<!-- more -->

### Which queue do I use?

There are several queues to choose from, each with benefits and drawbacks.

#### RabbitMQ

The most popular is [RabbitMQ](http://www.rabbitmq.com/), due to multiple
operating system support (even Windows!) and a plethora of
[clients and tools](http://www.rabbitmq.com/devtools.html) that support RabbitMQ.
RabbitMQ is written in Erlang and implements a common standard: the Advanced
Message Queuing Protocol (AMQP). RabbitMQ queues messages on a central server,
making it easy to deploy but a bit more interesting to scale.

#### ActiveMQ

Apache [ActiveMQ](http://activemq.apache.org/) is a message broker written in
Java together with a full JMS client. However Apache ActiveMQ is designed to
communicate over a number of protocols such as AMQP, [Stomp](http://stomp.github.io/)
and [OpenWire](http://activemq.apache.org/openwire-version-2-specification.html)
together with supporting a number of different
[language specific clients](http://activemq.apache.org/cross-language-clients.html).

#### ZeroMQ

[ZeroMQ](http://www.zeromq.org/) is typically deployed for clustered systems or
supercomputing. It is a sockets library for messaging and is extremely fast. It
gives you sockets that carry atomic messages across various transports like
in-process, inter-process, TCP, and multicast. You can connect sockets N-to-N
with patterns like fanout, pub-sub, task distribution, and request-reply. ZeroMQ
does not follow a broker pattern like RabbitMQ or ActiveMQ, meaning ZeroMQ does
not run on a single server or cluster of servers. A wealth of information about
ZeroMQ is available in
["Code Connected Volume 1 - Professional Edition" by Pieter Hinjens](http://zguide.zeromq.org/page:all),
the CEO of iMatrix.

#### Marconi

[Marconi](https://wiki.openstack.org/wiki/Marconi) is a new OpenStack project
to create a multi-tenant cloud queuing service. The aim is to create an open
alternative to Amazon's SQS (producer-consumer) and SNS (pub-sub) services, for
use in applications that run on OpenStack clouds. Marconi is currently in
development.

#### IronMQ

[IronMQ](http://www.iron.io/mq) is an easy-to-use highly available message
queuing service. IronMQ is for the person that doesn't want to manage their own
queue servers. They provide an endpoint where you create queues and messages
with a highly available backend. IronMQ uses HTTPS to transport messages
instead of AMQP.

### Get Started with a message queue and workers

Integrating a message queue makes your application more scalable, almost by
default. With a message queue in place, you can scale worker servers as needed
to perform tasks. Let's look at getting started with a message queue system.
For this example, I am using RabbitMQ on Ubuntu 12.04. Since we also need a
worker, let's install [Celery](http://celeryproject.org/) as well.

### Install RabbitMQ and Celery

You need to add the APT repository for RabbitMQ and then install the package
itself:

```
##RabbitMQ
echo "deb http://www.rabbitmq.com/debian/ testing main" >> /etc/apt/sources.list
wget http://www.rabbitmq.com/rabbitmq-signing-key-public.asc
sudo apt-key add rabbitmq-signing-key-public.asc
apt-get update
sudo apt-get install rabbitmq-server

##Celery
pip install celery
```

RabbitMQ should be running and ready to handle messages to our worker, Celery.
Now, run the following command to set up a Celery application to perform some
work by creating a file called **tasks.py**:

```python
from celery import Celery

celery = Celery('tasks', broker='amqp://guest@localhost//')

@celery.task
def add(x, y):
    return x + y
```

In this file, we define a message broker (RabbitMQ) as well as defining a worker
task that adds two numbers together. Next, we need to make sure Celery is
running and try to run our task by running the following commands:

```bash
celery -A tasks worker --loglevel=info
```

```python
>>> from tasks import add
>>> add.delay(4, 4)
```

Celery can store results in a database (or other
[backend systems](http://docs.celeryproject.org/en/latest/userguide/tasks.html#task-result-backends))
for lookup later. If you have multiple servers running workers looking for work
from a message queue, you can truly see some scalability in your applications.
