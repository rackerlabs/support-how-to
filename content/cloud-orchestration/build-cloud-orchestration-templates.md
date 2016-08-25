---
permalink: build-cloud-orchestration-templates/
audit_date:
title: Build Cloud Orchestration templates
type: article
created_date: '2016-10-09'
created_by: Aaron Mehar
last_modified_date: '2016-08-25'
last_modified_by: Nate Archer
product: Cloud Orchestration
product_url: cloud-orchestration
---

### What is Orchestration?

Cloud Orchestration is based on Openstack HEAT, which allows the creation of infrastructure and software deployment from a single template. This is called Infrastructure as Code (IoC). Rackspace provides resources such as Cloud Servers, Cloud Networks, Cloud Load Balancers. Instead of using the control panel or API to build your infrastructure, you create a template, and the template defines your infrastructure, links together each component of that infrastructure, and deploys.

This article explains the five parts of an Orchestration template, as well as example Orchestration templates for certain use cases.

### How does it work

Heat Orchestration Templates(HOT) are written in a [YAML](http://yaml.org/) format. Ansible provides a useful [YAML Syntax guide](http://docs.ansible.com/ansible/YAMLSyntax.html). The template is processed by the HEAT engine which validates the template, then sends calls to each appropriate API endpoint in the correct order to complete the launch of your stack.


### HEAT template format

Templates are made up of 5 parts not including the `heat_template_version`, as listed in the comments of the following example. You can find more information about the template format in the [OpenStack HEAT developer guide](http://docs.openstack.org/developer/heat/template_guide/hot_spec.html).


    heat_template_version: 2014-10-16
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


#### Template version

`heat_template_version` tells HEAT what version you need, since formatting and support features can change with each version. This is particularly useful you want to use a feature only available in  a newer version, or a feature in older versions that has been removed in laster editions. OpenStack documentation lists features and formatting [here](http://docs.openstack.org/developer/heat/template_guide/hot_spec.html#heat-template-version).


    heat_template_version: 2014-10-16


#### Description and parameters

`description` is used to describe what the template is doing. Descriptions with multiple lines should be formatted like the following example.

    description: >
      A description of your template, would go here. It would
      have several lines, and include details of the template
      such 2 LBs, 2 WebServers, 1 DBaaS and Autoscale.

A line (|) or parenthetical (>) should be used for literal blocks with line breaks preserved. The description for the template is displayed in the template list in the Cloud Control panel, and the description for parameters appear when creating the stack as a small questions mark (?) which you can hover over.

You can also use `description` within the parameters piece of the template.

    parameters:
      image:
      label: Operating System
        description: |
          Server image used for all servers that are created as a
          part of this deployment

#### Parameter groups

`parameter_groups` is used to group together parameters. Each parameter is  separated into different sections of the Cloud Control Panel . Each parameter can only be part of one group.

    parameter_groups:
      - label: Server Settings
    parameters:
      - srv_flavour
      - srv_image
      - srv_key

    label: Server Settings
    parameters:
      - db_flavour
      - db_ram
      - db_version


#### Parameters

`parameters` is used to create input parameters used to customize templates for each deployment, such as choosing an image, flavour, or password. In the following example, the `srv_image` parameter is given a label which is displayed in the Cloud Control Panel along with the description. You can also specify the type of parameter. In the following example, `srv_image` is a string parameter. You set a default value, and then you set the allow values, that description at the bottom, is shown as a small questions mark (?) which you can hover over.

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

### Example templates

The following section provides some examples of HEAT templates for different use cases. Each template can be used for your own Orchestration templates by copying the examples into a text file then saving the file as a YAML file.

**Note:** YAML requires the indentations be perserved for each example, in order for the template to be usable by the HEAT infrastructure.

#### Single server

Use the following template for a single server infrastructure.

```
heat_template_version: 2014-10-16

resources:
  my_server:
    type: OS::Nova::Server
    properties:
      flavor: 2 GB General Purpose v1
      image: Ubuntu 14.04 LTS (Trusty Tahr) (PVHVM) (Orchestration)
```

This template creates a `resource`, than specifies the name of the resource, `my_server`, and the type of `resource`, in this case an 'OpenStack Nova Server'. Then the `properties` of the server, such as the image and the flavour, are listed.

#### Multiple servers

Use the following to create several identical servers.

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

A resource group named `multi-server` allows the template to set properties for multiple servers. The `count` property indicates the number of servers  Then you create a cloud server, as would if you were only building one. Furthermore, resource groups require a special variable, `%index%`, to number the server names. The servers created in this example are `node-1` and `node-2`.

#### Booting from volumes

Use the following to boot from volumes.

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

A few extra properties are needed in order to boot from volume. The `block_device_mapping_v2` property is used to indicate a boot from volume. `device_name` is always set to `vda` when booting from volume.  `delete_on_termination` defines whether to delete the volume when the server is deleted. Lastly, the image and the volume size are specified.

#### Multiple boot from volumes

Use the following to boot multiple servers from the same volume.

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

The example combines properties from the single boot from volume template, and the multiple servers template.

#### Attach Cloud Block Storage

Use the following to create a normal server if you have a Cloud Block Storage volume attached as a secondary disk.

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

The `instance_uuid` property dynamically receives information about a resource, since the UUID of the server you created will not be readily accessible until the server is created. You can use this to send the attachment request.

### Attaching multiple cloud block storage volumes

Use the following to create several Cloud Block Storage volumes, then attach them to one server using a resource group. You do not need to have a resource for each CBS volume.

The property `instance_id` is passed to the child template, the child template takes this as a parameter to use within the template.

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

Each volume requires its own `volume_attachment` resource which requires you to use a child template, called `volume_with_attachment.yaml`, utilized under the resource definition. This file can be loaded remotely over HTTP, or HTTPS. If you are using the HEAT cli, then you can use a relative or full path, `/home/user/heat/volume_with_attachment.yaml` or `volume_with_attachment.yaml`. Use the following example for `volume_with_attachment.yaml`.

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

The parameter `instance_id`, passes from the parent template under properties `instance_id: { get_resource: instance }`. No value is defined in the child template, as the value (in this case, the server UUID), passes from the parent template to the child template.

#### Group of CBS volumes and servers

Use the following to create one volume per instance, using the same principles used to attach multiple cloud block storage volumes. In this case, you create a child template called `server_with_volume.yaml`.

```
resources:
  my_server_cbs:
    type: OS::Heat::ResourceGroup
    properties:
      count: 5
      resource_def:
        type: servers_with_volume.yaml

```

Use the following for the child template.

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

#### Cloud Load Balancers

Because OpenStack does not have load balancers, we have a unique resource type called `Rackspace::Cloud::LoadBalancer`, specifically for Rackspace.

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

`Rackspace::Cloud::LoadBalancer`, works similarly to the `my_server` resource where you set the type and its properties. The name of the load balancer is set, and what `node` is behind the load balancer. The IP assigned is a IPv4 Public address.

#### Sharing IPs between load balancers

Use the following to create a load balancer, and share that load balancer's IP with another load balancer. This is most commonly used for HTTP and HTTPS load balancers, so to achieve this in a template, you create your second load balancer, and pull in the IP from first one. This is achieve using the `get_attr` parameter.

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

In the template, you create a second load balancer and pull in an IP from the first load balancer using the `get_attr` parameter.

In the proceeding example, an IP address is hard coded into the load balancer. However, if you are creating nodes in the same template, so you would not know the IP yet for the load balancer.

You can compensate for this by using `{ get_attr: [web_server, private_ip] }` which will retrieve the Private IP address for all the nodes under the `web_server` resource:

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

#### Cloud Networks

Use the following example to orchestrate your deployment with Cloud Networks. Moving onto Cloud Networks, this is based on Openstack Neutron and there are 3 components, the network, the subnet, and the port. Your template will need to create a network and subnet, and 1 port per server, this can be seen as below. The network is created and called 'private_net_name', then you create the subnet, this is hard coded to use 192.168.134.0/24 and dynamically pulls in the networks UUID, next your create the port, provide the network ID, and subnet. Finially, you attach the port to the server called 'my_server'.

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

 This template creates a network called `private_net_name`. `network_id` creates one port per server. `subnet_id` creates a subnet that is hard coded the IP 192.168.134.0/24, and dynamically pulls in the networks UUID. Lastly, `- port: { get_resource: my_server_port }` attachs the port to the server called `my_server`.

#### Cloud Database as a service

Use this example to create a Database as a service(DBaaS) a database, a user for that database, and a database password. The database assignment for the user is a YAML list, so you can give that user access to multiple databases. The issue with this bit is a plain text password in the template, as the password will always be the same.

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

Instead of plain text password, you can use HEAT to generate a random string, and use this as the password. This will generate a string of random characters of any length:

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
Use the following to create a Cloud Files container. you specify the Swift resource type, and give the container a name.

```
heat_template_version: '2016-10-14'

resources:
  SwiftContainer:
    type: OS::Swift::Container
    properties:
      name: OrchestrationContainer
```

You specify the Swift resource type, and give the container a name.

#### Cloud DNS
Use the following to create a domain in Cloud DNS, and create records. Please note, this will not work for existing domains.

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

#### Cloud Queues

Use the following to create a Cloud Queue.

```
heat_template_version: 2013-05-23

resources:
  ZaqarQueue:
    type: OS::Zaqar::Queue
    properties:
      name: OrchestrationCreatedQueue
```

The `OS::Zaqar::Queue` resource type allows properties to name your queue and add optional metadata for the queue.

#### SSH Keys

Use the following if you are using Linux servers and want to use SSH Keys.

```
heat_template_version: 2013-05-23

resources:
  KeyPair:
    type: OS::Nova::KeyPair
    properties:
      name: ssh_orchestration_key
      save_private_key: True
```

The `OS::Nova:KeyPair` resource generates an SSH Keypair and places the public key on a server so you can access that server without using passwords.

### Outputs

Outputs are how you display information about the stack you created from your Orchestration templates. This allows you to not have to look up each detail manually. Output values are typically resolved using intrinsic function such as the `get_attr` function. Use the following example to obtain the IP address of a server, load balancer, or display the private SSH key generated in your template.

Refer to the [list of resource types](http://docs.openstack.org/developer/heat/template_guide/openstack.html) to get a list of available attributes.

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

Outputs can also be manipulated by using string replacement, so you can construct URLs. The following output will call the IP address from the `my_server` resource and create the URL `https://12.34.56.78/admin`. The URL is displayed once the stack has been built.

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

HEAT Orchestration provides a set of functions that can be used within a template. A list of these functions  can be found in the [HOT Spsec](http://docs.openstack.org/developer/heat/template_guide/hot_spec.html#intrinsic-functions)

If you have anymore questions regarding Orchestration, contact Rackspace support.
