---
permalink: stream-cloud-files-with-flowplayer-plugins
audit_date: '2021-05-26'
title: Stream Cloud Files with FlowPlayer Plugins
type: article
created_date: '2011-09-13'
created_by: Rackspace Support
last_modified_date: '2021-05-26'
last_modified_by: Ana Corpus
product: Cloud Files
product_url: cloud-files
---

**Disclaimer**: As of January 12, 2021, excluding the China variant of Flash, 
the Flash executable has a built-in kill switch which prevents it from playing 
Flash files. As of February 2021, all major browsers block Flash and cannot 
play it. Only IE11, niche browser forks, and some browsers built for China plan
to continue support.

This article shows you how to upload and stream videos from Cloud Files by
using the Akamai Content Delivery Network (CDN). Using FlowPlayer as the
streaming video player enables you to get the streaming technology and web
experience that customers are looking for without having to develop their own
Flash players.

You can set up your video for streaming by using the following steps:

1. Upload your file to Cloud Files through the
   [API](https://docs.rackspace.com/docs/cloud-files/v1/) or the [Cloud
   Control Panel](https://login.rackspace.com/).

    If your video file is more than 5GB, simply use our large object support.

2.  Download the [Akamai Advanced FlowPlayer Provider
    plugin](https://mediapm.edgesuite.net/flow/). This plugin is required 
    for your video to play on the Akamai network.

3.  Upload the FlowPlayer plugins to your Cloud Files account, or on a
    server where the internet can access them.

4.  Request your streaming URL by performing a `HEAD` on your object.

5.  Use your streaming URL to serve your content.

The following steps show you how to embed your video with FlowPlayer in your
website code:

1.  Upload all of the FlowPlayer components to a container.
2.  Call the **flowplayer.js** file by using a `<script>` tag to include it
    in the HTML.
3.  Link the **flowplayer.css** stylesheet to the Player frame.
4.  Make any configuration changes to the FlowPlayer object.
5.  Add in the `.swf` player object so that the player controls the `.swf`
    object and sets the source for the video.

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).
