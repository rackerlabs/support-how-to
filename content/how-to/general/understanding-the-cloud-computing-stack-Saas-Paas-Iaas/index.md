---
permalink: understanding-the-cloud-computing-stack-saas-paas-iaas
audit_date: '2020-03-31'
title: 'Understanding the cloud computing stack: SaaS, PaaS, and IaaS'
type: article
created_date: '2012-07-23'
created_by: Rackspace Support
last_modified_date: '2020-04-01'
last_modified_by: William Loy
product: General
product_url: general
---

Cloud computing is a broad term that describes a wide range of services. As with other significant developments in technology, many vendors have seized the term _cloud_ and are using it for products that are outside of the common definition. Because the cloud is a broad collection of services, organizations can choose where, when, and how they use cloud computing.

This article explains the different types of cloud computing services commonly referred to as software as a service (SaaS), platform as a service (PaaS), and infrastructure as a service (IaaS). It also provides some guidance on situations where particular flavors of cloud computing are (or aren't) the best option for an organization.

### The cloud computing stack

Cloud computing, often described as a stack, has a broad range of services built on top of one another under the name _cloud_. The accepted definition of _cloud computing_ comes from the National Institute of Standards and Technology (NIST). The [NIST definition](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) runs to several hundred words but begins as follows:

```
   `Cloud computing` is a model for enabling ubiquitous, convenient, on-demand network
```

```
   access to a shared pool of configurable computing resources (e.g., networks, servers,
```

```
   storage, applications, and services) that can be rapidly provisioned and released with
```

```
   minimal management effort or service provider interaction.
```

This information means that end users can quickly acquire and use parts of bulk resources.

NIST also describes several characteristics as essential to consider a service to be _cloud_:

  - On-demand self-service: End users can sign up and receive services without long delays.
  - Broad network access: Users can access the services by using standard platforms such as desktop, laptop, and mobile devices.
  - Resource pooling: Can pool resources across many customers.
  - Rapid elasticity: Capability can scale to cope with demand peaks.
  - Measured service: Billing is metered and delivered as a utility service.

To maximize the benefits of cloud computing, a solution must show these particular characteristics. In recent years, some traditional software vendors have marketed solutions as cloud computing that don't fall within this definition, a practice known as _cloud-washing_.

This article describes all three cloud computing services in detail. The following list is a simplified way of differentiating them:

  - SaaS applications are designed for end-users and delivered over the web.
  - PaaS is the set of tools and services designed to make coding and deploying those applications quick and efficient.
  - IaaS is the hardware and software that powers it all, including servers, storage, networks, and operating systems.

### Software as a service

Software as a service (SaaS) is software deployed over the Internet. A provider licenses a SaaS app to customers as an on-demand service, either through a subscription or through a pay-as-you-go model. SaaS can be offered at no charge when there is an opportunity to generate revenue from streams other than the user, such as from advertisement.

SaaS has become commonplace within most organizations, so it's important that buyers and users of technology understand what SaaS is and where it's suitable.

#### Characteristics of SaaS

Following are some defining characteristics of SaaS:

  - Web access to commercial software
  - Software managed from a central location
  - Software delivered in a "one to many" model
  - Users not required to handle software upgrades and patches
  - Application Programming Interfaces (APIs) makes integration between different pieces of software possible

#### When to use SaaS

Cloud computing and SaaS, in particular, are rapidly growing methods of delivering technology. Organizations moving to the cloud need to consider which applications they need to move to SaaS.

The following are solutions that are prime candidates for an initial move to SaaS:

  - Standard offerings in which the solution is largely undifferentiated&mdash;for example, email. Competitors often use the same email software because this fundamental technology is a requirement for doing business but doesn't award a competitive advantage.
  - Applications in which there is significant interplay between the organization and the outside world&mdash;for example, email newsletter campaign software.
  - Applications that have a significant need for web or mobile access&mdash;for example, mobile sales management software.
  - Collaboration software for a specific project.
  - Software for which demand spikes significantly&mdash;for example, tax or billing software used after a month.

The Salesforce Customer Relationship Management (CRM) product was the first SaaS product made available to the business world. As one of the earliest entrants, CRM remains the most popular SaaS app area, but email, financial management, customer service, and expense management have also become popular SaaS applications.

#### When not to use SaaS

Although SaaS is a valuable tool, it's not the best option for software delivery in certain situations. The following are examples where SaaS might not be appropriate:

  - Applications in which that need fast processing of real-time data.
  - Applications which cannot host data externally because of legislation or other regulations.

### Platform as a service

Platform as a service (PaaS) brings the benefits to the software development world that SaaS brought for applications. PaaS is defined as a computing platform that enables the quick and easy creation of web applications without the necessity of buying and maintaining the software and infrastructure underneath it.

PaaS is similar to SaaS except that, rather than being software delivered over the web, it is a platform for the creation of software delivered over the web.

#### Characteristics of PaaS

Following are some basic characteristics of PaaS:

  - Services to develop, test, deploy, host, and support applications in the same integrated development environment&mdash;all the various services needed to fulfill the app development process.
  - Web-based user interface (UI) creation tools used to create, change, test, and deploy different UI scenarios.
  - Multi-tenant architecture in which many concurrent users use the same development app.
  - Built-in scalability of deployed software, including load balancing and failover.
  - Integration with web services and databases via common standards.
  - Support for development team collaboration. Some PaaS solutions include project planning and communication tools to support development team collaboration.
  - Tools to handle billing and subscription management.

PaaS, while similar in many ways to infrastructure as a service (IaaS), is different from IaaS by the addition of value-added services and comes in two distinct flavors:

  - A collaborative platform for software development that focuses on workflow management regardless of the data source for the app. For example, Heroku&reg; is a PaaS that uses the Ruby on Rails&reg; development language.

  - A platform that allows for the creation of software by using proprietary data from an app. This type of PaaS creates applications with a common data form or type. The Force.com&reg; PaaS from Salesforce.com&reg;, which develops applications that work with the Salesforce.com CRM, exemplifies PaaS.

#### When to use PaaS

PaaS is especially useful when multiple developers are working on a development project or when other external parties need to interact with the development process. PaaS is invaluable for those who have an existing data source and want to create applications that leverage that data. PaaS is also useful when developers want to automate testing and deployment services.

The popularity of agile software development is increasing the adoption of PaaS because it eases the difficulties around rapid development and iteration of software.

#### When not to use PaaS

The ability to automate processes, use predefined components and building blocks, and deploy automatically to production creates value that makes PaaS highly attractive. However, PaaS might not be ideal in the following situations:

  - The app needs to be highly portable in terms of hosting.
  - Proprietary languages or approaches would impact the development process.
  - A proprietary language would hinder later moves to another provider.
  - Application performance requires customization of the underlying hardware and software.

A PaaS development environment enables quicker creation of apps. In some examples, in the absence of PaaS, the cost of developing the app would have been prohibitive.

### Infrastructure as a service

Infrastructure as a service (IaaS) delivers cloud computing infrastructure—servers, storage, network, and operating systems as an on-demand service. Rather than purchasing servers, software, data-center space, or network equipment, clients instead buy those resources as a fully outsourced on-demand service.

You can obtain IaaS as public or private infrastructure, or a combination of the two.

  - _Public cloud_ is infrastructure that consists of shared resources, deployed on a _self-service_ basis over the Internet.
  - _Private cloud_ is infrastructure that emulates some cloud computing features, like virtualization, but does so on a private network.
  - Some hosting providers offer a _hybrid cloud_. This cloud is a combination of traditional dedicated hosting alongside public cloud networks, private cloud networks, or both.

#### Characteristics of IaaS

The following core characteristics describe IaaS:

  - Resources distributed as a service
  - Allows for dynamic scaling
  - Has a variable cost, utility pricing model
  - Allows for multiple users on a single piece of hardware

#### When to use IaaS

The following situations are particularly suitable for cloud infrastructure:

  - Any time there are significant spikes and troughs of demand on the infrastructure.
  - For new organizations without the capital to invest in hardware.
  - When the organization is growing rapidly, and scaling hardware would be problematic.
  - When there is pressure on the organization to limit capital expenditure and to move to operating expenditure.
  - For a specific line of business, trial, or temporary infrastructure needs.

#### When not to use IaaS

Although IaaS has advantages when scalability and quick provisioning are beneficial, the following is a situation in which its limitations might be problematic:

- Regulatory compliance makes the offshoring or outsourcing of data storage and processing difficult.

### Conclusion

_Cloud computing_ doesn't describe a single thing. Instead, it's a general term that describes a variety of services, from IaaS at the base, through PaaS as a development tool, to SaaS replacing on-premises applications. Understanding these differences is critical for an organization considering moving to the cloud to ensure the cost and performance align with organizational goals.
