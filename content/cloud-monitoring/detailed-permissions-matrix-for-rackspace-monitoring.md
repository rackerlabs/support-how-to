---
node_id: 3395
title: Detailed Permissions Matrix for Rackspace Monitoring
type: article
created_date: '2013-04-10'
created_by: Megan Meza
last_modified_date: '2016-01-22'
last_modified_by: Constanze Kratel
product: Rackspace Monitoring
product_url: cloud-monitoring
---

The following permissions matrix displays specific permissions for the
roles in Rackspace Monitoring. The matrix displays the method names,
their corresponding RESTful API commands, and the roles that are
supported.

**[Rackspace Monitoring Developer
Guide](https://developer.rackspace.com/docs/cloud-monitoring/v1/developer-guide/)**

**[Related Knowledge Center
Articles](/how-to/)**

**[Rackspace Monitoring Terminology](#monitoring)**

### **As of October 8, 2013       **

CAPABILITY

ROLE

DESCRIPTION

Method Name

API Action

Observer

Creator

Admin



### ACCOUNT

###Get Account

GET/v1.0/account

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Returns account information.

###Update Account

PUT/v1.0/account

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Updates properties on an account.

###List Audits

GET/v1.0/audits

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists audits for this account.

###Get Limits

GET/v1.0/limits

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Returns account resource limits.

###Get Usage

GET/v1.0/usage

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Retrieves usage information for a given period of
time. Defaults to last seven days.

### AGENTS

###List Agents

GET/v1.0/agents

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists all agents that have connected in the last 30 days.

###Fetch Agent

GET/v1.0/agents/:agentId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists a single agent.

###List Agent Connections

GET/v1.0/agents/:agentId/connections

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists the connections for a single agent.

###Fetch Agent Connection

GET/v1.0/agents/:agentId/connections/:connId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists a single connection.

### AGENT HOST INFORMATION

###Get Agent CPU Information

GET/v1.0/agents/:agentId/host\_info/cpus

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets information on the host's CPUs.

###Get Agent Memory Information

GET/v1.0/agents/:agentId/host\_info/memory<

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets information on the host's memory.

Get Agent Disk Information

GET/v1.0/agents/:agentId/host\_info/disks

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets information on the host's disks.

###Get Agent Network Information

GET/v1.0/agents/:agentId/host\_info/network\_interfaces

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets information on the host's network interfaces.

###Get Agent Filesystem Information

GET/v1.0/agents/:agentId/host\_info/filesystems

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets information on the host's filesystems.

Get Agent Process Information

GET/v1.0/agents/:agentId/host\_info/processes

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets information on the host's processes.

###Get Agent System Information

GET/v1.0/agents/:agentId/host\_info/system

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets system information for the host.

###Get Logged-in User Information

GET/agents/agentId/host\_info/who

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets information on users who are logged into the host.

Get Agent CPU Information by Entity

GET/v1.0/entities/:entityId/agent/host\_info/cpus

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets agent CPU information by entity.

###Get Agent Memory Information by Entity

GET/v1.0/entities/:entityId/agent/host\_info/memory

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets agent memory information by entity.

###Get Agent Disk Information by Entity

GET/v1.0/entities/:entityId/agent/host\_info/disks

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets agent disk information by entity.

###Get Agent Filesystem Information by Entity

GET/v1.0/entities/:entityId/agent/host\_info/filesystems

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets agent filesystem information by entity.

###Get Agent Network Information by Entity

GET/v1.0/entities/:entityId/agent/host\_info/network\_interfaces

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets agent network information by entity.

Get Agent Process Information by Entity

GET/v1.0/entities/:entityId/agent/host\_info/processes

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets agent process information by entity.

###Get Agent System Information by Entity

GET/v1.0/entities/:entityId/agent/host\_info/system

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets agent system information by entity.

### AGENT TARGETS

###List Agent Check Targets

GET/entities/entityId/agent/check\_types/*agentCheckType*/targets

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Enumerates the devices allowed for the specified agent check type
on the server where the agent is installed.

### AGENT TOKENS

###List Agent Tokens

GET/v1.0/agent\_tokens

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists the agent tokens.

###Get Agent Token

GET/v1.0/agent\_tokens/:tokenId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets information for a single agent token.

###Update Agent Token

PUT/v1.0/agent\_tokens/:tokenId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Updates a token with the specified tokenId (label).

###Delete Agent Token

DELETE/v1.0/agent\_tokens/:tokenId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Deletes the specified agent token from your account.

###Create Agent Token

POST/v1.0/agent\_tokens

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Creates a new agent token.

### MONITORING ZONES

###List Monitoring Zones

GET/v1.0/monitoring\_zones

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists the monitoring zones.

###Get Monitoring Zone

GET/v1.0/monitoring\_zones/:monitoringZoneId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets information for a single monitoring zone.

###Execute Traceroute

POST/v1.0/monitoring\_zones/:monitoringZoneId/traceroute

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Performs a traceroute from a collector in the specified monitoring
zones.

### CHANGELOGS

###List Alarm Changelogs

GET/v1.0/changelogs/alarms

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists alarm changelogs for this account.

### ENTITIES

###List Entities

GET/v1.0/entities

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists the entities for this particular account.

###Get Entity

GET/v1.0/entities/:entityId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Retrieves the current state of an entity.

###Update Entity

PUT/v1.0/entities/:entityId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Updates an entity specified by the entityId.

###Delete Entity

DELETE/v1.0/entities/:entityId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Deletes an entity from your account. Also deletes any checks and
alarms defined for that entity.

###Create Entity

POST/v1.0/entities

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Creates a new entity.

### CHECKS

###List Checks

GET/v1.0/entities/:entityId/checks

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists the checks associated with a given entityId.

###Get Check

GET/v1.0/entities/:entityId/checks/:checkId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Returns the specified check.

###Update Check

PUT/v1.0/entities/:entityId/checks/:checkId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Updates a check with the specified checkId.

###Delete Check

DELETE/v1.0/entities/:entityId/checks/:checkId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Deletes a check from your account.

###Create Check

POST/v1.0/entities/:entityId/checks

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Creates a new check and associates it with an entity using the
parameters listed
in [Attributes.](https://developer.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#attributes "Table 4.3. Attributes")

###Test Existing Check

POST/v1.0/entities/:entityId/checks/:checkId/test

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Tests a check inline.

###Test New Check

POST/v1.0/entities/:entityId/test-check

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Tests a check before creating it.

### ALARMS

###List Alarms

GET/v1.0/entities/:entityId/alarms

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists the alarms on the specified entity.

###Get Alarm

GET/v1.0/entities/:entityId/alarms/:alarmId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets information for a single alarm.

###Update Alarm

PUT/v1.0/entities/:entityId/alarms/:alarmId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Updates an alarm with the specified alarmId. Partial updates to an
alarm are acceptable. You may specify only the parameters you would like
to update.

###Delete Alarm

DELETE/v1.0/entities/:entityId/alarms/:alarmId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Deletes an alarm from your account.

###Create Alarm

POST/v1.0/entities/:entityId/alarms

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Creates a new alarm for the specified entity. Specify the alarm's
characteristics using a valid set of parameters from the table shown in
the [Attributes](https://developer.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#alarms "Table 4.10. Attributes").

###Test New Alarm

POST/v1.0/entities/:entityId/test-alarm

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Tests runs an alarm. 

### ALARM NOTIFICATION HISTORY

###List Check IDs for Alarm

GET/v1.0/entities/:entityId/alarms/:alarmId/notification\_history

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

List checks for which alarm notification history is
available. 

###List Alarm Notification History

GET/v1.0/entities/:entityId/alarms/:alarmId/notification\_history/:checkId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists alarm notification history for a given entity, alarm and
check.

###Get Alarm Notification History

GET/v1.0/entities/:entityId/alarms/:alarmId/notification\_history/:checkId/:uuid

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Retrieves a single alarm notification history item. 

### CHECK TYPES

###List Check Types

GET/v1.0/check\_types

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists all the available check types.

###Get Check Type

GET/v1.0/check\_types/:checkTypeId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Retrieves information for a single check type. 

### NOTIFICATION TYPES

###List Notification Types

GET/v1.0/notification\_types

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists available notification types.

### NOTIFICATION

###Get Notification Type

GET/v1.0/notification\_types/:notificationTypeId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets information for a single notification type.

###List Notifications

GET/v1.0/notifications

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists the notifications for this particular account.

###Get Notification

GET/v1.0/notifications/:notificationId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets information for a single notification.

###Update Notification

PUT/v1.0/notifications/:notificationId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Updates a notification with the specified notificationId.

###Delete Notification

DELETE/v1.0/notifications/:notificationId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Deletes a notification from your account.

###Create Notification

POST/v1.0/notifications

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Creates a notification. 

###Test Existing Notification

POST/v1.0/notifications/:notificationId/test

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Tests an existing notification. 

###Test New Notification

POST/v1.0/test-notification

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Tests a notification. 

### NOTIFICATION PLANS

###List Notification Plan

GET/v1.0/notification\_plans

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists the notification plans for this particular account. 

###Get Notification Plan

GET/v1.0/notification\_plans/:notificationPlanId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets information for a single notification plan.

###Update Notification Plans

PUT/v1.0/notification\_plans/:notificationPlanId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Updates a notification plan with the specified notificationPlanId.
Partial updates to a notification plan are acceptable. You may specify
only the parameters you would like to update. 

###Delete Notification Plan

DELETE/v1.0/notification\_plans/:notificationPlanId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Deletes a notification plan. 

###Create Notification Plan

POST/v1.0/notification\_plans

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Creates a notification plan. 

### METRICS

###List Metrics

GET/entities/entityId/checks/checkId/metrics

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Lists the metrics associated with the specified check.

###Get Data Points for Plot

GET/v1.0/entities/:entityId/checks/:checkId/metrics/:metricName/plot

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Queries for all data points of *`metricName`* between
two points in time.

### ALARM EXAMPLES

###List Alarm Examples

GET/v1.0/alarm\_examples

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Returns a list of alarm examples. 

###Get Alarm Example

GET/v1.0/alarm\_examples/:alarmExampleId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets a specific alarm example. 

###Bind Alarm Example

POST/v1.0/alarm\_examples/:alarmExampleId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Evaluates a specific alarm example. 

### VIEWS

###List Overview

GET/v1.0/views/overview

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Returns the overview view for this account.

### SUPPRESSIONS

###Get Suppression

GET/v1.0/suppressions/:suppressionId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Gets details for a specific suppression.

###List Suppressions

GET/v1.0/suppressions

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Returns a list of suppressions.

###Create Suppression

POST/v1.0/suppressions

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Creates a suppression.

###Update Suppression

PUT/v1.0/suppressions/:suppressionId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Updates a specific suppression.

###Delete Suppression

DELETE/v1.0/suppressions/:suppressionId

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

Deletes a specific suppression.



###Cloud Monitoring Terminology


### Agent

A monitoring daemon that resides on the server being monitored.
The agent gathers metrics based on agent checks and pushes them to Cloud
Monitoring.

### Agent Token

An authentication token used to identify the agent when it
communicates with Cloud Monitoring.

### Alarm

An alarm contains a set of rules that determine when a
notification is triggered.

### Check

Checks explicitly specify how you want to monitor an
entity.

### Entity

An entity is a resource that you want to monitor. Some examples
are a server, a website, or a service.

### Notification

A notification is an informational message sent to one or more
addresses when an alarm is triggered.

### RESTful

A type of web service API that uses Representational State
Transfer. REST is the architectural style for hypermedia systems used
for the World Wide Web.



[Permission Matrices for RBAC](/how-to/permissions-matrix-for-role-based-access-control-rbac)
