---
node_id: 3395
title: Detailed Permissions Matrix for Rackspace Monitoring
type: article
created_date: '2013-04-10'
created_by: Megan Meza
last_modified_date: '2016-01-04'
last_modified_by: Constanze Kratel
product: Cloud Monitoring
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

<span>Get Account</span>

<span>GET/v1.0/account</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Returns account information.</span>

<span>Update Account</span>

<span>PUT/v1.0/account</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Updates properties on an account.</span>

<span>List Audits</span>

<span>GET/v1.0/audits</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists audits for this account.</span>

<span>Get Limits</span>

<span>GET/v1.0/limits</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Returns account resource limits.</span>

<span>Get Usage</span>

<span>GET/v1.0/usage</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Retrieves usage</span><span> information for a given period of
time. Defaults to last seven days.</span>

### AGENTS

<span>List Agents</span>

<span>GET/v1.0/agents</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists all agents that have connected in the last 30 days.</span>

<span>Fetch Agent</span>

<span>GET/v1.0/agents/:agentId</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists a single agent.</span>

<span>List Agent Connections</span>

<span>GET/v1.0/agents/:agentId/connections</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists the connections for a single agent.</span>

<span>Fetch Agent Connection</span>

<span>GET/v1.0/agents/:agentId/connections/:connId</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists a single connection.</span>

### AGENT HOST INFORMATION

<span>Get Agent CPU Information</span>

<span>GET/v1.0/agents/:agentId/host\_info/cpus</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets information on the host's CPUs.</span>

<span>Get Agent Memory Information</span>

<span>GET/v1.0/agents/:agentId/host\_info/memory</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets information on the host's memory.</span>

<span>Get Agent Disk Information</span>

<span>GET/v1.0/agents/:agentId/host\_info/disks</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets information on the host's disks.</span>

<span>Get Agent Network Information</span>

<span>GET/v1.0/agents/:agentId/host\_info/network\_interfaces</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets information on the host's network interfaces.</span>

<span>Get Agent Filesystem Information</span>

<span>GET/v1.0/agents/:agentId/host\_info/filesystems</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets information on the host's filesystems.</span>

<span>Get Agent Process Information</span>

<span>GET/v1.0/agents/:agentId/host\_info/processes</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets information on the host's processes.</span>

<span>Get Agent System Information</span>

<span>GET/v1.0/agents/:agentId/host\_info/system</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets system information for the host.</span>

<span>Get Logged-in User Information</span>

<span>GET/agents/agentId/host\_info/who</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets information on users who are logged into the host.</span>

<span>Get Agent CPU Information by Entity</span>

<span>GET/v1.0/entities/:entityId/agent/host\_info/cpus</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span><span>Gets agent CPU information by entity.</span> </span>

<span>Get Agent Memory Information by Entity</span>

<span>GET/v1.0/entities/:entityId/agent/host\_info/memory</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span><span>Gets agent memory information by entity.</span> </span>

<span>Get Agent Disk Information by Entity</span>

<span>GET/v1.0/entities/:entityId/agent/host\_info/disks</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets agent disk information by entity.</span>

<span>Get Agent Filesystem Information by Entity</span>

<span>GET/v1.0/entities/:entityId/agent/host\_info/filesystems</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span><span>Gets agent filesystem information by entity.</span> </span>

<span>Get Agent Network Information by Entity</span>

<span>GET/v1.0/entities/:entityId/agent/host\_info/network\_interfaces</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span><span>Gets agent network information by entity.</span></span>

<span>Get Agent Process Information by Entity</span>

<span>GET/v1.0/entities/:entityId/agent/host\_info/processes</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets agent process information by entity.</span>

<span>Get Agent System Information by Entity</span>

<span>GET/v1.0/entities/:entityId/agent/host\_info/system</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets agent system information by entity.</span>

### AGENT TARGETS

<span>List Agent Check Targets</span>

<span>GET/entities/entityId/agent/check\_types/*agentCheckType*/targets</span>

 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Enumerates the devices allowed for the specified agent check type
on the server where the agent is installed.</span>

### AGENT TOKENS

<span>List Agent Tokens</span>

<span>GET/v1.0/agent\_tokens</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists the agent tokens.</span>

<span>Get Agent Token</span>

<span>GET/v1.0/agent\_tokens/:tokenId</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets information for a single agent token.</span>

<span>Update Agent Token</span>

<span>PUT/v1.0/agent\_tokens/:tokenId</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Updates a token with the specified tokenId (label).</span>

<span>Delete Agent Token</span>

<span>DELETE/v1.0/agent\_tokens/:tokenId</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Deletes the specified agent token from your account.</span>

<span>Create Agent Token</span>

<span>POST/v1.0/agent\_tokens</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Creates a new agent token.</span>

### MONITORING ZONES

<span>List Monitoring Zones</span>

<span>GET/v1.0/monitoring\_zones</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists the monitoring zones.</span>

<span>Get Monitoring Zone</span>

<span>GET/v1.0/monitoring\_zones/:monitoringZoneId</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets information for a single monitoring zone.</span>

<span>Execute Traceroute</span>

<span>POST/v1.0/monitoring\_zones/:monitoringZoneId/traceroute</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Performs a traceroute from a collector in the specified monitoring
zones.</span>

### CHANGELOGS

<span>List Alarm Changelogs</span>

<span>GET/v1.0/changelogs/alarms</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists alarm changelogs for this account.</span>

### ENTITIES

<span>List Entities</span>

<span>GET/v1.0/entities</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists the entities for this particular account.</span>

<span>Get Entity</span>

<span>GET/v1.0/entities/:entityId</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Retrieves the current state of an entity.</span>

<span>Update Entity</span>

<span>PUT/v1.0/entities/:entityId</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Updates an entity specified by the entityId.</span>

<span>Delete Entity</span>

<span>DELETE/v1.0/entities/:entityId</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Deletes an entity from your account. Also deletes any checks and
alarms defined for that entity.</span>

<span>Create Entity</span>

<span>POST/v1.0/entities</span>



<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Creates a new entity.</span>

### CHECKS

<span>List Checks</span>

<span>GET/v1.0/entities/:entityId/checks</span>



<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists the checks associated with a given entityId.</span>

<span>Get Check</span>

<span>GET/v1.0/entities/:entityId/checks/:checkId</span>



<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Returns the specified check.</span>

<span>Update Check</span>

<span>PUT/v1.0/entities/:entityId/checks/:checkId</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Updates a check with the specified checkId.</span>

<span>Delete Check</span>

<span>DELETE/v1.0/entities/:entityId/checks/:checkId</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Deletes a check from your account.</span>

<span>Create Check</span>

<span>POST/v1.0/entities/:entityId/checks</span>



<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Creates a new check and associates it with an entity using the
parameters listed
in [Attributes.](https://developer.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#attributes "Table 4.3. Attributes")</span>

<span>Test Existing Check</span>

<span>POST/v1.0/entities/:entityId/checks/:checkId/test</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Tests a check inline.</span>

<span>Test New Check</span>

<span>POST/v1.0/entities/:entityId/test-check</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Tests a check before creating it.</span>

### ALARMS

<span>List Alarms</span>

<span>GET/v1.0/entities/:entityId/alarms</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists the alarms on the specified entity.</span>

<span>Get Alarm</span>

<span>GET/v1.0/entities/:entityId/alarms/:alarmId</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets information for a single alarm.</span>

<span>Update Alarm</span>

<span>PUT/v1.0/entities/:entityId/alarms/:alarmId</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Updates an alarm with the specified alarmId. Partial updates to an
alarm are acceptable. You may specify only the parameters you would like
to update.</span>

<span>Delete Alarm</span>

<span>DELETE/v1.0/entities/:entityId/alarms/:alarmId</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Deletes an alarm from your account.</span>

<span>Create Alarm</span>

<span>POST/v1.0/entities/:entityId/alarms</span>



<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Creates a new alarm for the specified entity. Specify the alarm's
characteristics using a valid set of parameters from the table shown in
the [Attributes](https://developer.rackspace.com/docs/cloud-monitoring/v1/developer-guide/#alarms "Table 4.10. Attributes").</span>

<span>Test New Alarm</span>

<span>POST/v1.0/entities/:entityId/test-alarm</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Tests runs an alarm. </span>

### ALARM NOTIFICATION HISTORY

<span>List Check IDs for Alarm</span>

<span>GET/v1.0/entities/:entityId/alarms/:alarmId/notification\_history</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>List checks for which alarm notification history is
available. </span>

<span>List Alarm Notification History</span>

<span>GET/v1.0/entities/:entityId/alarms/:alarmId/notification\_history/:checkId</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists alarm notification history for a given entity, alarm and
check.</span>

<span>Get Alarm Notification History</span>

<span>GET/v1.0/entities/:entityId/alarms/:alarmId/notification\_history/:checkId/:uuid</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Retrieves a single alarm notification history item. </span>

### CHECK TYPES

<span>List Check Types</span>

<span>GET/v1.0/check\_types</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists all the available check types.</span>

<span>Get Check Type</span>

<span>GET/v1.0/check\_types/:checkTypeId</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Retrieves information for a single check type. </span>

### NOTIFICATION TYPES

<span>List Notification Types</span>

<span>GET/v1.0/notification\_types</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists available notification types.</span>

### NOTIFICATION

<span>Get Notification Type</span>

<span>GET/v1.0/notification\_types/:notificationTypeId</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets information for a single notification type.</span>

<span>List Notifications</span>

<span>GET/v1.0/notifications</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists the notifications for this particular account.</span>

<span>Get Notification</span>

<span>GET/v1.0/notifications/:notificationId</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets information for a single notification.</span>

<span>Update Notification</span>

<span>PUT/v1.0/notifications/:notificationId</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Updates a notification with the specified notificationId.</span>

<span>Delete Notification</span>

<span>DELETE/v1.0/notifications/:notificationId</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Deletes a notification from your account.</span>

<span>Create Notification</span>

<span>POST/v1.0/notifications</span>



<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Creates a notification. </span>

<span>Test Existing Notification</span>

<span>POST/v1.0/notifications/:notificationId/test</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Tests an existing notification. </span>

<span>Test New Notification</span>

<span>POST/v1.0/test-notification</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Tests a notification. </span>

### NOTIFICATION PLANS

<span>List Notification Plan</span>

<span>GET/v1.0/notification\_plans</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists the notification plans for this particular account. </span>

<span>Get Notification Plan</span>

<span>GET/v1.0/notification\_plans/:notificationPlanId</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets information for a single notification plan.</span>

<span>Update Notification Plans</span>

<span>PUT/v1.0/notification\_plans/:notificationPlanId</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Updates a notification plan with the specified notificationPlanId.
Partial updates to a notification plan are acceptable. You may specify
only the parameters you would like to update. </span>

<span>Delete Notification Plan</span>

<span>DELETE/v1.0/notification\_plans/:notificationPlanId</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Deletes a notification plan. </span>

<span>Create Notification Plan</span>

<span>POST/v1.0/notification\_plans</span>



<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Creates a notification plan. </span>

### METRICS

<span>List Metrics</span>

<span>GET/entities/entityId/checks/checkId/metrics</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Lists the metrics associated with the specified check.</span>

<span>Get Data Points for Plot</span>

<span>GET/v1.0/entities/:entityId/checks/:checkId/metrics/:metricName/plot</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Queries for all data points of </span>*`metricName`*<span> between
two points in time.</span>

### ALARM EXAMPLES

<span>List Alarm Examples</span>

<span>GET/v1.0/alarm\_examples</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Returns a list of alarm examples. </span>

<span>Get Alarm Example</span>

<span>GET/v1.0/alarm\_examples/:alarmExampleId</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets a specific alarm example. </span>

<span>Bind Alarm Example</span>

<span>POST/v1.0/alarm\_examples/:alarmExampleId</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Evaluates a specific alarm example. </span>

### VIEWS

<span>List Overview</span>

<span>GET/v1.0/views/overview</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Returns the overview</span><span> view for this account.</span>

### SUPPRESSIONS

<span>Get Suppression</span>

<span>GET/v1.0/suppressions/:suppressionId</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Gets details for a specific suppression.</span>

<span>List Suppressions</span>

<span>GET/v1.0/suppressions</span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Returns a list of suppressions.</span>

<span>Create Suppression</span>

<span>POST/v1.0/suppressions</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Creates a suppression.</span>

<span>Update Suppression</span>

<span>PUT/v1.0/suppressions/:suppressionId</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Updates a specific suppression.</span>

<span>Delete Suppression</span>

<span>DELETE/v1.0/suppressions/:suppressionId</span>





<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/green%20checkmark_6.png" width="43" height="41" />

<span>Deletes a specific suppression.</span>



Cloud Monitoring Terminology
--------------------------------

### Agent

<span>A monitoring daemon that resides on the server being monitored.
The agent gathers metrics based on agent checks and pushes them to Cloud
Monitoring.</span>

### <span>Agent Token</span>

<span>An authentication token used to identify the agent when it
communicates with Cloud Monitoring.</span>

### <span>Alarm</span>

<span>An alarm contains a set of rules that determine when a
notification is triggered.</span>

### <span>Check</span>

<span>Checks explicitly specify how you want to monitor an
entity.</span>

### <span>Entity</span>

<span>An entity is a resource that you want to monitor. Some examples
are a server, a website, or a service.</span>

### <span>Notification</span>

<span>A notification is an informational message sent to one or more
addresses when an alarm is triggered.</span>

### <span>RESTful</span>

<span>A type of web service API that uses Representational State
Transfer. REST is the architectural style for hypermedia systems used
for the World Wide Web.</span>



[&lt; Permission Matrices for RBAC](/how-to/permissions-matrix-for-role-based-access-control-rbac)
--------------------------------------------------------------------------------------------------------------------------------------------

<span> </span>

