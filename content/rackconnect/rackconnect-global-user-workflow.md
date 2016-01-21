---
node_id: 4859
title: RackConnect Global user workflow
type: article
created_date: '2015-10-16'
created_by: Sameer Satyam
last_modified_date: '2016-01-21'
last_modified_by: Kelly Holcomb
product: RackConnect
product_url: rackconnect
---

RackConnect Global provides highly available, secure, private network
connectivity between Rackspace and your off-premises data centers or
your infrastructure at other cloud hosting providers, such as Microsoft
Azure. It allows you to share application workloads and data across
environments. See
<http://www.rackspace.com/cloud/hybrid/rackconnect/global> for more
details about the product.

This document shows the steps needed to establish a RackConnect Global
virtual circuit with Rackspace.

### Establishing a RackConnect Global (RCG) dedicated connection

Use this procedure only if you are colocated in the same facility as
Rackspace.

**Note**: If you are part of the Equinix Cloud exchange or a Microsoft
Azure customer and need to establish a RackConnect Global connection
with Rackspace, please see below.

1.  You can order RackConnect Global service using the dedicated
    connection method via our sales account team or appropriate
    Rackspace representative.

2.  You are repsonsible for the physical cross-connection to Rackspace's
    RCG Edge devices. Rackspace generates and provides a Letter of
    Authority (LOA) which identifies the physical port and cage location
    for the RackConnect Global edge device.

3.  Customer submits the LOA and orders the cross connect via the
    colocation provider's portal. Currently, the only supported
    colocation provider is Equinix.

4.  The colocation provider makes the physical connection between
    customer and RackConnect Global edge devices.

5.  Rackspace configures the RackConnect Global edge devices while
    customer configures their side to establish the Virtual Connection.
    The virtual circuit is established.


### Establishing a RackConnect Global connection via Equinix Cloud Exchange

<span class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">Use
this procedure if you are an Equinix Cloud </span><span
class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">E</span><span
class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">xchange
</span><span
class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">customer</span><span
class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">. </span>

**Note**: If you need to connect your on-premise infrastructure to
Rackspace via a dedicated connection or a<span
class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z i"> Microsoft
Azure customer needing to establish RackConnect Global connectivity with
Rackspace, please see the section above/below </span>

1.  <div id="magicdomid33">

    </div>

    <span class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">You
    can order RackConnect Global (RCG) </span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">service
    </span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">using
    </span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">a cloud
    exchange connection </span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">method
    via your sales account team or appropriate
    Rackspace representative.</span>

2.  <span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">R</span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">ackspace
    </span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">generates
    a </span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">S</span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">ervice
    </span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">K</span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">ey and
    provides </span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">it
    </span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">to
    the customer.</span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z"> The service
    key will be used when requesting a new VC. </span></span>

3.  <span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z"><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">C</span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">ustomer
    orders a VC via the Equinix Cloud Exchange portal and initiates the
    virtual circuit using the service key.</span></span></span>

4.  <span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z"><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">R</span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">ackspace
    </span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">completes
    the </span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">R</span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">ack</span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">C</span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">onnect
    </span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">G</span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">lobal</span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z"> Edge
    </span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">configuration</span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">.</span></span></span></span>
    <span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z"><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z"> </span></span></span></span>
5.  <span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z"><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z"><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">R</span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">ackspace
    </span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">accepts
    the virtual circuit </span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">request from
    the customer within the Cloud
    Exchange. </span></span></span></span></span>


### Establishing a RackConnect Global connection if you use Microsoft Azure (via Microsoft ExpressRoute)

<span class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">This
procedure applies if you are Microsoft Azure customer requiring a
private connection to your infrastructure at Rackspace.</span>

**Note**: If you need to connect your on-premise infrastructure to
Rackspace via a dedicated connection or if you need to establish
RackConnect Global connectivity with Rackspace via Equinix Cloud
Exchange, please see the relevant sections above.

1.  <div id="magicdomid56">

    </div>

    <span class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">You
    can order RackConnect Global service to connect to Microsoft Azure
    via your sales account team or appropriate Rackspace representative.
    If you are a fanatical Azure customer please contact your
    appropriate Rackspace support representative.</span>

2.  <span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">Customer
    </span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">configures
    Azure's dedicated virtual circuit and </span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">and
    provides </span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">the Azure
    Service Key </span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">to
    R</span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">ackspace</span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"> for
    provisioning the V</span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">irtual
    Connection. </span></span>

3.  <span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z"><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">Rackspace
    orders a VC</span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z"> on behalf
    of the customer</span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"> via the
    Equinix Cloud Exchange portal and initiates the virtual circuit
    </span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">provisioning
    </span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">using the
    service key.</span></span></span>

4.  <span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z"><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">Customer
    completes the configuration on the cloud to establish the VC and
    BGP connection.</span></span></span></span>

5.  <span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z"><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo"><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">Rackspace
    completes the configuration on the </span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">RCG Edges
    </span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">and
    backbone devices to establish the </span><span
    class="author-a-6z68z17wrz74zz86zz122zvz69zunz87zuz72z">VC
    </span><span
    class="author-a-z85zz86zz86zgz85zfz81zfz86z418z74ziz122zo">connection.</span></span></span></span></span>

<div id="magicdomid66">



</div>

<div id="magicdomid67">



</div>

