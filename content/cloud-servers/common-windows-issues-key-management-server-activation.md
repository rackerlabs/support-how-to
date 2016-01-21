---
node_id: 1181
title: 'Common Windows Issues: Key Management Server Activation'
type: article
created_date: '2011-08-15'
created_by: Rackspace Support
last_modified_date: '2015-12-31'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

**Problem:**  Periodic activation requests to the KMS are rejected and
the operating system is seen as unlicensed.

**Cause:  **Windows cannot locate the Key Management Server (KMS) after
changing the time zone of the Cloud Server.  Now your Cloud Server's
system clock does not sync with the KMS.

**Resolution:**  You will need to resynch your Cloud Server with the KMS
server:

1\.  Log in to your Cloud Server as Administrator (Start, All Programs,
Accessories, right-click Command Prompt and select Run as
Administrator).

2.  Choose the data center in the following table that corresponds to
the location of your server and run the applicable command from the
command prompt.

| Data Center | Command                                            |
|-------------|----------------------------------------------------|
| ORD
 (Chicago)    | `ping winactivate.ord1.servers.rackspacecloud.com` |
| DFW
 (Dallas)     | `ping winactivate.dfw1.servers.rackspacecloud.com` |
| IAD
 (Ashburn)    | `ping winactivate.iad3.servers.rackspacecloud.com` |
| LON
 (London)     | `ping winactivate.lon3.servers.rackspacecloud.com` |
| HKG
 (Hong Kong)  | `ping winactivate.hkg1.servers.rackspacecloud.com` |
| SYD
 (Sydney)     | `ping winactivate.syd2.servers.rackspacecloud.com` |

\*\*if there is a reply, move on to step 3.  No reply means that there
is an interface, hardware, or routing issue\*\*

3\.  Set the KMS manually within the registry.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Data Center</th>
<th align="left">Command</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">ORD<br />
(Chicago)</td>
<td align="left"><code>slmgr.vbs /skms winactivate.ord1.servers.rackspacecloud.com:1688</code></td>
</tr>
<tr class="even">
<td align="left">DFW<br />
(Dallas)</td>
<td align="left"><div>
<code>slmgr.vbs /skms winactivate.dfw1.servers.rackspacecloud.com:1688</code>
</div></td>
</tr>
<tr class="odd">
<td align="left">IAD<br />
(Ashburn)</td>
<td align="left"><code>slmgr.vbs /skms winactivate.iad3.servers.rackspacecloud.com:1688</code></td>
</tr>
<tr class="even">
<td align="left">LON<br />
(London)</td>
<td align="left"><code>slmgr.vbs /skms winactivate.lon3.servers.rackspacecloud.com:1688</code></td>
</tr>
<tr class="odd">
<td align="left">HKG<br />
(Hong Kong)</td>
<td align="left"><code>slmgr.vbs /skms winactivate.hkg1.servers.rackspacecloud.com:1688</code></td>
</tr>
<tr class="even">
<td align="left">SYD<br />
(Sydney)</td>
<td align="left"><code>slmgr.vbs /skms winactivate.syd2.servers.rackspacecloud.com:1688</code></td>
</tr>
</tbody>
</table>

4\.     Request activation from the KMS:

    slmgr.vbs /ato

5\.     If step 4 returns an error reading EXACTLY &ldquo;0xC004F074 The Key
Management Server (KMS) is unavailable&rdquo;, run the following:

    w32tm /resync

6\.     If the time on the Cloud Server is drastically different than
what is on the KMS the resync will fail.  At this point you will need to
either set the time manually or configure the server to use an NTP
instance over the internet.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Data Center</th>
<th align="left">Command</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">ORD<br />
(Chicago)</td>
<td align="left"><pre><code>net stop w32time
w32tm /config /manualpeerlist:time.ord1.rackspace.com /syncfromflags:MANUAL
net start w32time</code></pre></td>
</tr>
<tr class="even">
<td align="left">DFW<br />
(Dallas)</td>
<td align="left"><div>
<pre><code>net stop w32time
w32tm /config /manualpeerlist:time.dfw1.rackspace.com /syncfromflags:MANUAL
net start w32time</code></pre>
</div></td>
</tr>
<tr class="odd">
<td align="left">IAD<br />
(Ashburn)</td>
<td align="left"><pre><code>net stop w32time
w32tm /config /manualpeerlist:time.iad3.rackspace.com /syncfromflags:MANUAL
net start w32time</code></pre></td>
</tr>
<tr class="even">
<td align="left">LON<br />
(London)</td>
<td align="left"><pre><code>net stop w32time
w32tm /config /manualpeerlist:time.lon3.rackspace.com /syncfromflags:MANUAL
net start w32time</code></pre></td>
</tr>
<tr class="odd">
<td align="left">HKG<br />
(Hong Kong)</td>
<td align="left"><pre><code>net stop w32time
w32tm /config /manualpeerlist:time.hkg1.rackspace.com /syncfromflags:MANUAL
net start w32time</code></pre></td>
</tr>
<tr class="even">
<td align="left">SYD<br />
(Sydney)</td>
<td align="left"><pre><code>net stop w32time
w32tm /config /manualpeerlist:time.syd2.rackspace.com /syncfromflags:MANUAL
net start w32time</code></pre></td>
</tr>
</tbody>
</table>

7\.  Once the time is synced up, attempt the following:

    w32tm /resync
    slmgr.vbs /ato

8.  You will also need to open UDP port 123 to allow the sync.

9\.  Make sure your firewall allows outbound connections to TCP port
1688.

