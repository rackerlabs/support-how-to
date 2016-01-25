---
node_id: 3656
title: Setting Up a Pub-Sub Model in Cloud Queues
type: article
created_date: '2013-08-21'
created_by: Megan Meza
last_modified_date: '2016-01-11'
last_modified_by: Rose Contreras
product: Cloud Queues
product_url: cloud-queues
---

Characteristics of the Publish-Subscribe model in Cloud Queues are:

-   All subscribers listen to the messages on the queue.
-   Messages are not claimed.
-   Subscribers can send a marker/cursor to skip messages already seen.
-   TTL deletes messages eventually.
-   Ideal for notification of events to multiple listeners at once.

### Posting Messages to Queue

Queues support posting 10 messages at the same time, so lets try to post
two within the same request.

#### Request

        $ curl -i -X POST https://$ENDPOINT:443/v1/queues/samplequeue/messages -d '     [            {"ttl": 300, "body": {"event": "two"}},         {"ttl": 60, "body": {"event": "three"}}     ]     ' -H "Content-type: application/json" -H "Client-ID: e58668fc-26eb-11e3-8270-5b3128d43830" -H "X-Auth-Token: $TOKEN"

#### Response

        HTTP/1.1 201 Created     Content-Length: 153     Content-Type: application/json; charset=utf-8     Location: /v1/queues/samplequeue/messages?ids=51e840e71d10b2055fd565fb,51e840e71d10b2055fd565fc      {partial": false, "resources": ["/v1/queues/samplequeue/messages/51e840e71d10b2055fd565fb", "/v1/queues/samplequeue/messages/51e840e71d10b2055fd565fc"]}

Above, if you check the response, you will see that the queue returned
two ids. It is always a good practice to post messages in batches as
network latency will be a smaller factor in overall performance compared
to sending one message at a time.

### Listing Messages from Your Queue

You can generate the list of messages from your queue through your
terminal.

-   In your terminal enter the following request in your terminal to
    list your Cloud Queues:

<!-- -->

        $ curl -i -X GET https://$ENDPOINT:443/v1/queues -H "X-Auth-Token: $TOKEN"

-   Watch for your Queues to be listed in the format of the following
    response:

<!-- -->

        HTTP/1.1 200 OK     Content-Length: 140     Content-Type: application/json; charset=utf-8     Content-Location: /v1/queues  {"queues": [{"href": "/v1/queues/samplequeue", "name": "samplequeue"}], "links": [{"href": "/v1/queues?marker=samplequeue", "rel": "next"}]}

To avoid getting messages the subscriber has already read, use the
marker semantics such as: /v1/queues/{queue\_name}/messages?marker=63
(these links can be retrieved with the marker by following the links
section in the returned json for the next page).

**Please Note** : We have additional developer information available in
our API documentation. Listed under Other Products, we have a [Getting
Started
Guide](http://docs.rackspace.com/queues/api/v1.0/cq-gettingstarted/content/DB_Overview.html)
and an [API Developer
Guide](http://docs.rackspace.com/queues/api/v1.0/cq-devguide/content/overview.html)
for Cloud Queues.

