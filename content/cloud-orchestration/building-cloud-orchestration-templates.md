---
permalink: building-cloud-orchestration-templates/
title: Building Cloud Orchestration Templates
type: article
created_date: '2016-10-09'
created_by: Aaron Mehar
last_modified_date: '2016-10-09'
last_modified_by: Aaron Mehar
product: Cloud Orchestration
product_url: cloud-orchestration
---

- [Description](#description)
- [Parameter Groups](#parameter-groups)
- [Parameters](parameters#)
- [Resources](#resources)
  - [Single Server](#single-server)
    - [Multiple Single Servers](#multiple-servers)
  - [Boot from Volume Server](#booting-from-volumes)
    - [Multiple Boot from Volume Servers](#multiple-booting-from-volumes)
  - [Attaching Cloud Block Storage Volumes](#attaching-cloud-block-storage)
    - [Multiple Cloud Block Storage Volumes](#attaching-multiple-cloud-block-storage)
    - [Group of CBS Volumes and Servers](#group-of-cbs-volumes-and-servers)
  - [Cloud LoadBalancer](#cloud-load-balancers)
    - [Sharing IPs between Load Balancers](#sharing-ips-between-boad-balancers)
    - [Cloud Networks](#cloud-networks)
    - [Database as a Servers](#cloud-database-as-a-service)
    - [Cloud Files](#cloud-files)
    - [Cloud DNS](#cloud-dns)
    - [Cloud Queues](#cloud-queues)
    - [SSH Keys](#ssh-keys)
- [Outputs](#outputs)
- [Intrinsic Functions](#intrinsic-functions)

### What is Orchestration?
Cloud Orchestration is the product based on Openstack HEAT, this allows the creation of your infrastructure and software deployment from a single template. This is called Infrastructure as Code (IoC). We provide the resources such as Cloud Servers, Cloud Networks, Cloud Load Balancers, etc and rather than using the control panel or API to build your infrastructure, you would create a template, and this template would then define your infrastructure, link it all together and deploy in one swift motion.

### What is the Goal here
The goal of this page is to show you how to build your templates. We will cover each section separately, using lots of techniques used and explanations so you will be able to create you own templates.

### How does it work
Using what is called a Heat Orchestration Template (HOT for short - nice coincidence there). The templates are written in a [YAML](http://yaml.org/) format, which is a very human readable text format to define just about anything. If you're familiar with JSON, this is that, only simpler. Ansible have an excellent Syntax guide [here](http://docs.ansible.com/ansible/YAMLSyntax.html). The template is processed by the HEAT engine which validates the template, then sends calls to each appropriate API endpoint, in the correct order to complete the launch of your stack.

### What First?
A template is made of 5 parts, take a look at the below, each part is commented. We will go into more detail for each part in this article, as it is explained in the original Openstack Heat documentation, which can be be found [here](http://docs.openstack.org/developer/heat/template_guide/hot_spec.html).

```
heat_template_version: 2016-10-14
description:
  # a description of the template
parameter_groups:
  # a declaration of input parameter groups and order
parameters:
  # declaration of input parameters
resources:
  # declaration of template resources
outputs:
  # declaration of output parameters
conditions:
  # declaration of conditions
```

### What's Next?
I will go through each part and explain what they do, and how to use them.

# Template Version
This tells heat what version you need, as formatting and support features can change with each version. This is particularly useful you want to use a feature only in newer version, or a feature in older versions that has been removed in laster editions. Openstack documention lists features and formatting [here](http://docs.openstack.org/developer/heat/template_guide/hot_spec.html#heat-template-version). This is a key value pair defined at the very top of the template.
```
heat_template_version: 2014-10-16
```

# Description
An optional part of the template, this is used to describe what the template is doing so you do not have to read the template. Multiple-line descriptions should formated as below. Either the | should be used for literal blocks with line breaks preserved, or > can be used so line breaks are converted to spaces. The decription for the template is displayed in the template list in the Cloud Control panel, and description for parameters appear when creating the stack as a small questions mark (?) which you can hover over.

A template description
```
description: >
  A description of your template, would go here. It would
  have several lines, and include details of the template
  such 2 LBs, 2 WebServers, 1 DBaaS and Autoscale.
```
A parameter description
```
parameters:
  image:
  label: Operating System
    description: |
      Server image used for all servers that are created as a 
      part of this deployment
```

# Parameter Groups
This section is used to group together parameters. These are separated in the Cloud Control Panel into different sections. Each parameter can only be part of 1 group.
```
parameter_groups:
- label: Server Settings
  parameters:
    - srv_flavour
    - srv_image
    - srv_key

- label: Server Settings
  parameters:
    - db_flavour
    - db_ram
    - db_version
```

# Parameters
This section is used to create input parameters, these parameters are used to customise templates for each deployment, such as choosing an image, flavour, password, etc. Looking at the parameter below, you are creating the 'srv_image' parameter with a label, which is displayed in the Cloud Control Panel, along with the description. You specify the type, in this case, it is a string and you set a default value, and then you set the allow values, that description at the bottom, is shown as a small questions mark (?) which you can hover over.
```
parameters:
  srv_image:
    label: Operating System
    description: |
      Server image used for all servers that are created as a part of this
      deployment
    type: string
    default: CentOS 7 (PVHVM) (Orchestration)
    constraints:
    - allowed_values:
      - CentOS 7 (PVHVM) (Orchestration)
      - Ubuntu 14.04 LTS (Trusty Tahr) (PVHVM) (Orchestration)
      description: Must be a supported operating system
```
# Resources

### Single Server
First, open a text file and copy/paste the below, remember it's YAML, so preserve the formatting. YAML requires the indentations for it to be remain valid YAML, and therefore be usable by the HEAT infrastructure.
```
heat_template_version: 2014-10-16
 
resources:
  my_server:
    type: OS::Nova::Server
    properties:
      flavor: 2 GB General Purpose v1
      image: Ubuntu 14.04 LTS (Trusty Tahr) (PVHVM) (Orchestration)
```
If we break this down, line 1 specifies the version of the template. Line 3 states you will be creating a 'resource', line 4 is the name of the resource, and then the type of resource, in this case an 'Openstack Nova Server', then we define the properties of the server, the image, and the flavour. The 'my_server' is the name of the resource, and can be set to anything you want, for example 'web_server', the image can use the UUID of the image, or the name. The image must be usable by the account that will use the HEAT template.

### Multiple Servers
If you want to create several identical servers, this is when Resource Groups come handy. We define a group, and then specify what is in the group
```
heat_template_version: 2014-10-16

resources:
  multi-server:
    type: OS::Heat::ResourceGroup
    properties:
      count: 2
      resource_def:
        type: OS::Nova::Server
        properties:
          name: node-%index%
          flavor: 2 GB General Purpose v1
          image: Ubuntu 14.04 LTS (Trusty Tahr) (PVHVM) (Orchestration)
```
Breaking this down as well, line 3 states we are defining the resouces, the next line is the start of the group, and 'multi-server' is the name of the that group, which can be changed, you then set the properties for the group, is this case, you simply set how many to buid. Then you create a cloud server, as would if you were only building one. One key note, resource groups have a special variable, %index%, this numbers the servers, so node-1, node-2, node-3 etc. The 'node' part can be whatever you want it to be.

### Booting from Volumes
When booting from a volume, a few extra details are required. Take a look at the example below, to boot from a volume, you add the 'block_device_mapping_v2' property, and specify the volume size, and the image to use, additionally, you also define whether to delete the volume when the server is deleted, or not, and the device name, this should always be 'vda' when using boot from volume. 
```
heat_template_version: 2015-04-30

resources:
  my_server:
    type: OS::Nova::Server
    properties:
      flavor: 2 GB General Purpose v1
      block_device_mapping_v2:
        - device_name: vda
          delete_on_termination: true
          image: Ubuntu 14.04 LTS (Trusty Tahr) (PVHVM) (Orchestration)
          volume_size: 50
```

### Multiple Booting from Volumes
and if you want to create several identical servers, using the same principle as the last example, we place this resource inside a 'Resource Group'.
```
heat_template_version: 2015-04-30

resources:
  multi-bfv:
    type: OS::Heat::ResourceGroup
    properties:
      count: 2
      resource_def:
        type: OS::Nova::Server
        properties:
          name: node-%index%
          flavor: 2 GB General Purpose v1
          block_device_mapping_v2:
            - device_name: vda
              delete_on_termination: true
              image: Ubuntu 14.04 LTS (Trusty Tahr) (PVHVM) (Orchestration)
              volume_size: 50
```

### Attaching Cloud Block Storage
If you want to create a normal server, but have a Cloud Block Storage volume attached as a secondary disk, you can see the below example. The first part is creating a server, this is also seen at the beginning of this article. The next bit is creates the volume, 50G in size and SSD. Finally it introduces a feature to dynamically get information about a resource, as you won't know the UUID of the server of volume until they are actually created, you use this to send the attachment request.
```
heat_template_version: 2015-04-30

resources:
  my_server:
    type: OS::Nova::Server
    properties:
      image: Ubuntu 14.04 LTS (Trusty Tahr) (PVHVM) (Orchestration)
      flavor: 2 GB General Purpose v1

  cinder_volume:
    type: OS::Cinder::Volume
    properties:
      volume_type: SSD
      size: 50

  volume_attachment:
    type: OS::Cinder::VolumeAttachment
    properties:
      volume_id: { get_resource: cinder_volume }
      instance_uuid: { get_resource: my_server }
      mountpoint: /dev/vdb
```

### Attaching Multiple Cloud Block Storage
In the next example, you are creating several Cloud Block Storage volumes, and attaching them to 1 server using a resource group, which means you do not need to have a resource for each CBS volume you want, and you can easily change the number of volumes by changing the count value. Each volume requires its own 'volume_attachment' resource, so you need to use a child template, you can see the child template 'volume_with_attachment.yaml' being utilised under the resource definition. This file can be loaded remotely over HTTP, or HTTPS. If you are using the heat cli, then you can use a relative, or full path, eg /home/user/heat/volume_with_attachment.yaml or just simply volume_with_attachment.yaml

The property 'instance_id' is passed to the child template, the child template takes this as a parameter to use within the template. 
```
heat_template_version: 2015-04-30

resources:
  my_server:
    type: OS::Nova::Server
    properties:
      image: Ubuntu 14.04 LTS (Trusty Tahr) (PVHVM) (Orchestration)
      flavor: 2 GB General Purpose v1

  group_of_volumes:
    type: OS::Heat::ResourceGroup
    properties:
      count: 3
      resource_def:
        type: volume_with_attachment.yaml
        properties:
          instance_id: { get_resource: instance }
```

The contents of 'volume_with_attachment.yaml' can be seen below. In this child template, you create a parameters called 'instance_id', this is being passed from the parent template under properties `instance_id: { get_resource: instance }`. No value is defined in the child template, as the value (in your case, the server UUID), is passed from the parent to the child.
```
heat_template_version: 2015-04-30

parameters:
  instance_id:
    type: string
    description: Server to attach volume to

resources:
  volume:
    type: OS::Cinder::Volume
    properties:
      size: 75
      volume_type: SATA
      description: Volume for stack

  volume_attachment:
    type: OS::Cinder::VolumeAttachment
    properties:
      volume_id: { get_resource: volume }
      instance_uuid: { get_param: instance_id }
```

### Group of CBS Volumes and Servers
If you want to create 1 volume per instance, using the same principle as above, you would create a resource group and use a child template that creates a server, volume, and attaches it, this child template is then set within the resource group.
```
resources:
  my_server_cbs:
    type: OS::Heat::ResourceGroup
    properties:
      count: 5
      resource_def:
        type: servers_with_volume.yaml

```

The contents of 'servers_with_volume.yaml' can be seen below.
```
resources:
  my_volume:
    type: OS::Cinder::Volume
    properties:
      size: 75
      volume_type: SATA

  my_server:
    type: OS::Nova::Server
    properties:
      image: Ubuntu 14.04 LTS (Trusty Tahr) (PVHVM) (Orchestration)
      flavor: 2 GB General Purpose v1

  volume_attachment:
    type: OS::Cinder::VolumeAttachment
    properties:
      volume_id: { get_resource: my_volume }
      instance_uuid: { get_resource: my_server }
```

### Cloud Load Balancers
As we do not currently use the Openstack Load Balancers, we have a unique resource type called 'Rackspace::Cloud::LoadBalancer', specifically for Rackspace. The idea is the same as Cloud Servers, by settng the type, and its properties. Here you can see, the name is being set, and what 'node' is behind the Load Balancer, and other settings. The IP being assigned is 1 IPv4 Public address. 
```
heat_template_version: 2013-05-23

resources:
  load_balancer:
    type: Rackspace::Cloud::LoadBalancer
    properties:
      name: stack_Load_Balancer
      nodes:
      - addresses: [ 10.181.64.136 ]
        port: 80
        condition: ENABLED  
      port: 80
      protocol: HTTP
      algorithm: ROUND_ROBIN
      contentCaching: ENABLED
      sessionPersistence: HTTP_COOKIE
      virtualIps:
      - type: PUBLIC
        ipVersion: IPV4
```

### Sharing IPs between Load Balancers
In the control panel, you can create a Load Balancer, and share the IP with another Load Balancer, most commonly used for HTTP and HTTPS Load Balancers, so to achieve this in a template, you create your second load balancer, and pull in the IP from first one. This is achieve using the 'get_attr' parameter.
```
  load_balancer_2:
    type: Rackspace::Cloud::LoadBalancer
    properties:
      name: stack_Load_Balancer_2
      nodes:
      - addresses: [ 10.181.64.136 ]
        port: 443
        condition: ENABLED  
      port: 443
      protocol: HTTPS
      algorithm: ROUND_ROBIN
      contentCaching: ENABLED
      sessionPersistence: SOURCE_IP
      virtualIps:
      - id: { get_attr: [ load_balancer, virtualIps, 0, id ] }
```

In the above examples, you are hard coding IP address into the Load Balancer, typically you would be creating the nodes in the same template, so you would not know the IP yet, so you can improve this bit by using the `get_attr` feature, to dynamically pull in the IPs for a given resource. The `{ get_attr: [web_server, private_ip] }` will retrieve the Private IP address for all the nodes under the web_server resource, if its a resource group, it will get all the IPs.
```
  load_balancer_2:
    type: Rackspace::Cloud::LoadBalancer
    properties:
      name: stack_Load_Balancer_2
      nodes:
      - addresses: { get_attr: [web_server, private_ip] }
        port: 443
        condition: ENABLED
      port: 443
      protocol: HTTPS
      algorithm: ROUND_ROBIN
      contentCaching: ENABLED
      sessionPersistence: SOURCE_IP
      virtualIps:
      - id: { get_attr: [ load_balancer, virtualIps, 0, id ] }
```

### Cloud Networks
Moving onto Cloud Networks, this is based on Openstack Neutron and there are 3 components, the network, the subnet, and the port. Your template will need to create a network and subnet, and 1 port per server, this can be seen as below. The network is created and called 'private_net_name', then you create the subnet, this is hard coded to use 192.168.134.0/24 and dynamically pulls in the networks UUID, next your create the port, provide the network ID, and subnet. Finially, you attach the port to the server called 'my_server'.
```
heat_template_version: 2013-05-23

resources:
  my_network:
    type: OS::Neutron::Net
    properties:
      name: private_net_name

  my_subnet:
    type: OS::Neutron::Subnet
    properties:
      network_id: { get_resource: my_network }
      cidr: 192.168.100.0/24

  my_server_port:
    type: "OS::Neutron::Port"
    properties:
      network_id: { get_resource: my_network }
      fixed_ips:
        - subnet_id: { get_resource: my_subnet }

  my_server:
    type: OS::Nova::Server
    properties:
      name: node
      flavor: 2 GB General Purpose v1
      image: Ubuntu 14.04 LTS (Trusty Tahr) (PVHVM) (Orchestration)
      networks:
        - port: { get_resource: my_server_port }
```

We have a resource type that simplifies this process for you, for simply creating a network, and attaching to the server, its perfect. Using this means the template would only work in Rackspace Public Cloud. This resource type will eventually be removed, so it is not recommended to use it.
```
heat_template_version: 2013-05-23
resources:
  my_network:
    type: Rackspace::Cloud::Network
    properties:
      label: My Cloud Network
      cidr: 192.168.100.0/24

  my_server:
    type: OS::Nova::Server
    properties:
      name: node
      flavor: 2 GB General Purpose v1
      image: Ubuntu 14.04 LTS (Trusty Tahr) (PVHVM) (Orchestration)
      networks:
        - network: { get_resource: my_network }
        - network: 00000000-0000-0000-0000-000000000000
        - network: 11111111-1111-1111-1111-111111111111
```

### Cloud Database as a Service
You can create a DBaaS, a database, user and its password in one block. The database assignment for the user is a YAML list, so you can give that user access to multiple databases. The issue with this bit is a plain text password in the template, this is not good, as it would always be the same, and visible.
```
heat_template_version: 2013-05-23

  database:
    type: OS::Trove::Instance
    properties:
      name: db_instance0
      size: 15
      flavor: 2GB Instance
      databases:
      - name: db0
      users:
      - name: db_user
        password: db_password
        databases: [db0]
```

this is where 'Random Strings' can come in handy, using HEAT you can generate a random string, and use this as the password. This will generate a string of random characters of a length you decide.
```
heat_template_version: 2013-05-23

  database:
    type: OS::Trove::Instance
    properties:
      name: db_instance0
      size: 15
      flavor: 2GB Instance
      databases:
      - name: db0
      users:
      - name: db_user
        password: { get_attr: [database_password, value] }
        databases: [db0]

  database_password:
    type: OS::Heat::RandomString
    properties:
      length: 16
      sequence: lettersdigits
```

### Cloud Files
Creating a Cloud Files Container is simple, you specify the Swift resource type, and give the container a name. 
```
heat_template_version: '2016-10-14'

resources:
  SwiftContainer:
    type: OS::Swift::Container
    properties:
      name: OrchestrationContainer
```

### Cloud DNS
We have a resource to create a domain in Cloud DNS, and create records. Please note, this will not work for existing domains. 
```
heat_template_version: '2016-10-14'

resources:
  dns_record:
    type: "Rackspace::Cloud::DNS"
    properties:
      emailAddress: "admin@domain.com"
      name: domain.com
      records: [ {"name": "domain.com", "data": 123.456.78.90 , "type": "A" }, {"name": "www.domain.com", "data": domain.com , "type": "CNAME" } ]
```

### Cloud Queues
You can also create a Cloud Queue by using the 'OS::Zaqar::Queue' resource type, Cloud Queues are simple services, all you can do is create the queue with a name, and optionally add some metadata with some information about the queue.
```
heat_template_version: 2013-05-23

resources:
  ZaqarQueue:
    type: OS::Zaqar::Queue 
    properties:
      name: OrchestrationCreatedQueue
```

### SSH Keys
If you are using Linux servers, you'll likely want to use SSH Keys. We have a Nova resource that will generate an SSH Keypair and place the public key on the servers so you can access them without using passwords.
```
heat_template_version: 2013-05-23

resources:
  KeyPair:
    type: OS::Nova::KeyPair
    properties:
      name: ssh_orchestration_key
      save_private_key: True
```

# Outputs
Outputs are how you display information about the Stack you just made, for examples, generated password, SSH keys, and IP addresses. This saves you the time not having to look up each detail manually. Output values are typically resolved using intrinsic function such as the get_attr function in the example below. You will want to refer to refer to the [list of resource types](http://docs.openstack.org/developer/heat/template_guide/openstack.html) to get a list of available attributes.

This simple example is how you get obtain the IP address of a server, or Load Balancer, display the private SSH key generated in your template. 
```
outputs:
  instance_ip:
    description: The IP address of the deployed instance
    value: { get_attr: [my_server, accessIPv4] }

  lb_ip_address:
    description: The IP address of the deployed Load Balancer
    value: { get_attr: [load_balancer, PublicIp] }

  ssh_key:
    description: SSH Private Key
    value:
      get_attr: [KeyPair, private_key]
```

Outputs can also be manipulated by using string replacement, so you can contruct URLs, for example. The below output will get the IP address from the 'my_server' resource and create the URL 'https://12.34.56.78/admin' and display this once the stack has built.
```
outputs:
 site_url:
    description: Website URL
    value:
      str_replace:
        template: "http://IP/admin/"
        params:
          IP: { get_attr: [my_server, accessIPv4] }
```

### Intrinsic functions
HEAT Orchestration provides a set of functions that can be used within a template, these functions have been used this this article, and include such things like 'get_param'. There is a list of these functions in the [HOT Spsec](http://docs.openstack.org/developer/heat/template_guide/hot_spec.html#intrinsic-functions)

Heat Orchestration offers a lot more than what we have coverage in this article, but hopefully this will be enough to get you start building the your infrastructure in a more cloud like way. The Openstack documentation has lots more information, with lots of details, so if you run into issue, be sure to check that out, and always feel free to raise a ticket with your Rackspace support team.
