---

layout: post
title: "AWS App Mesh - A first look"
date: 2018-12-12
comments: true
author: Sri Rajan
published: true
authorIsRacker: true
categories:
  - containers
  - aws

---

AWS App Mesh is the latest addition to the AWS product potfolio. To quote AWS:
"AWS App Mesh makes it easy to monitor and control microservices running on AWS."
AWS App Mesh is in public preview as of this post, and we will take a brief look
at it.


**Why do you need a service mesh**

With increased adoption of microservices, some challenges have surfaced for
which a mesh is a solution. A microservice architecture consisting of 50
components may help agility with respect to development, rate of change and the
overall flexibility, but with it comes a lack of observability which makes
troubleshooting harder. The increased complexity with several hundred services
talking to each other also makes management harder. A Service mesh helps manage
the complexity of these deployments. It helps improve visibility of the
connections between services and, in doing so helps with troubleshooting,
management, and security. Service mesh uses network proxies to govern the flow
of traffic. By placing itself in the path for all connections in your microservices
architecture, it can apply control policies & collect metrics. Service meshes
also decouples the application logic from the operational logic by adding a layer
that is responsible for how the services connect to each other.

<!--more-->

**What is the AWS Solution**

At the core, AWS App Mesh is a solution that uses
[Envoy proxy](https://www.envoyproxy.io/). Envoy is a recently graduated Cloud
Native Computing Foundation [(CNCF)](https://www.cncf.io/) project that implements
a high performance and simple service proxy. It was created using C++ by
[Lyft](https://eng.lyft.com/announcing-envoy-c-l7-proxy-and-communication-bus-92520b6c8191)
in 2016 and then donated to the CNCF foundation. It operates at layer 3 but has
the intelligence to understand HTTP, HTTPS, GRPC, and other higher-level protocols.
It was written to do one thing, proxy, and do that well. To quote from the Lyft
blog post, it was formed with the belief that "The network should be transparent
to applications. When network and application problems do occur, it should be
easy to determine the source of the problem."

To use Envoy at scale (hundreds or thousands of connections), you need something
to manage Envoy, and that is the role App Mesh plays. In a world where you have
hundreds of microservices and several changes happening every hour, this Mesh
layer becomes the control plane for the proxies and has the intelligence to start
and stop them as your application changes. App Mesh can be used with any compute
service in AWS (ECS, EKS, EC2). In theory, any service that can talk to the Envoy
management layer can be integrated, but this depends on the integration.

If you are familiar with this space, you are probably asking is this the same
as [Istio](https://istio.io/)? For those who haven't heard about Istio, service
meshes are still very new in terms of technology and a leader is yet to emerge.
[Istio](https://istio.io/) has been a popular service mesh option in this short
time period. In terms of similarities both use Envoy and provide support for
common container platforms for Kubernetes. For large parts, both are trying to
solve for the same problem.

Istio is open source and has been adopted by
[Google Cloud](https://cloudplatform.googleblog.com/2018/07/istio-reaches-1-0-ready-for-prod.html),
and it can be used across many platforms and Clouds. Istio's security capabilities
are a bit advanced with support for mutual [TLS](https://en.wikipedia.org/wiki/Mutual_authentication),
which provides service-to-service authentication. This is done using Envoy's
functionality and not Istio, and so App Mesh will likely support it as well.

AWS App Mesh lacks a console in preview but has plans for a console in GA and
post-GA. It currently provides integration with [AWS X-ray](https://aws.amazon.com/xray/),
[Prometheus](https://prometheus.io/), and [Datadog](https://www.datadoghq.com/blog/envoy-app-mesh-monitoring/).
It also works with service discovery based on DNS.

Importantly, there is no additional charge for the management aspect of AWS App
Mesh, and this makes it an easy one to validate. There is cost associated with
the AWS resources (EC2 instances or requested Fargate CPU and memory) consumed
by the proxy that is deployed alongside your containers.

AWS App Mesh is still in preview and will continue to add more features as it
approaches GA. Some of the possibilities discussed in the
[GitHub project](https://github.com/awslabs/aws-app-mesh-examples/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3AGA+label%3ARoadmap)
and based on the [re:Invent 2018 presentation](https://www.youtube.com/watch?v=GVni3ruLSe0)
are:

 - AWS console support. App Mesh, in preview, is CLI only.
 - More regions. Currently it is available in us-west-2, us-east-1, us-east-2, and eu-west-1 regions.
 - Integration with Certificate Manager.
 - Additional routing options with respect to TCP, GRPC, and Cookie based routing.
 - Support for CloudFormation.
 - Support for [AWS Cloud Map](https://aws.amazon.com/about-aws/whats-new/2018/11/introducing-aws-cloud-map/).
 - Support for [custom filters](https://github.com/envoyproxy/envoy-filter-example) in Envoy.

In summary, AWS App Mesh is a good addition to the AWS building blocks and for
microservices architectures.

Use the Feedback tab to make any comments or ask questions.

Use the Feedback tab to make any comments or ask questions.