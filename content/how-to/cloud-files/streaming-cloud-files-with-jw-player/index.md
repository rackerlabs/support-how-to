---
permalink: streaming-cloud-files-with-jw-player
audit_date: '2021-05-26'
title: Stream Cloud Files with JW Player
type: article
created_date: '2012-12-05'
created_by: David Hendler
last_modified_date: '2022-03-24'
last_modified_by: Maeve Goetz
product: Cloud Files
product_url: cloud-files
---
## Streaming with Cloud Files will be Decommissioned on May 31, 2022.

**Disclaimer**: As of January 12, 2021, excluding the China variant 
of Flash, the Flash executable has a built-in kill switch that 
prevents it from playing Flash files. As of February 2021, all major 
browsers block Flash and cannot play it. Only IE11, niche browser forks, 
and some browsers built for China plan to continue support.

Cloud Files supports the JW Player for streaming video files. It also
supports [FlowPlayer](/support/how-to/cloud-files-streaming-with-flowplayer-plugins)
and [OSMF](/support/how-to/cloud-files-streaming-with-osmf-plugins).

The JW Player has a commercial license, which means you must purchase it
from [Longtail Video](https://www.longtailvideo.com/order).

Supported media formats for JW Player:

- **Audio**:

   - Streaming with ability to jump around: MP4, AAC, and FLV
   - Progressive Download: MP3

- **Video**:

   - Streaming with ability to jump around: MP4, MOV, and FLV

### Upload JW Player 6 to Cloud Files

1. [Download the JW Player](https://www.longtailvideo.com/jw-player/).

2. Unzip the file and upload it to a Cloud Files container.

  **Note:** You can upload the player to the container that holds your 
  media or to another container.

3. Download the [Akamai&reg; Advanced JW Player Provider plugin files](http://mediapm.edgesuite.net/jw/) for JW Player 6.

4. Unzip the plugin files and upload them to the same container as the
   JW Player.

5. Confirm that the container that holds your player and plugin are
   CDN-Enabled. If they are not, you can enable them through the Cloud Control
   Panel or the API.

   From the Cloud Control Panel:

   1. Click the gear icon next to the container's name.
   2. Select **Make Public (Enable CDN)**.
   3. Click **Publish to CDN** to confirm.

  From *the API*, see the API Dev Guide section:
  [CDN-Enable a Container](https://docs.rackspace.com/docs/cloud-files/v1/cdn-api-reference/cdn-container-services-operations).

### Add JW Player 6 to your web page

Add the following HTML elements to your web page:

  - A `script` element that points to the player
  - A `div` that positions the player
  - A `script` that calls the player and the media

Use the following steps to add these elements:

#### A. Add a script element to point to the player

Add a `script` element to the head of your HTML that points to 
the **jwplayer.js** file.

For this step, you need the link to the **jwplayer.js** file that you 
uploaded to the Cloud Files container. Get the link from the Cloud 
Control Panel.

1. Open the container where you uploaded the plugin.
2. Locate the **jwplayer.js** file in the Object List.
3. Click the gear icon next to the plugin file.
4. Click **View All Links**.
5. Copy the HTTP link.
6. Replace **/path/to/jwplayer.js** in the following text with the link
   that you copied.

  Use the following `script` element, substituting in the link to 
  your **jwplayer.js** file:

    <script type="text/javascript" src="/path/to/jwplayer.js"></script>

#### B. Add a div element to position player

Add a `div` element to your HTML page with a unique ID attribute value,
such as **player**.

You can change the **Loading the player...*** text to the message you want
to be displayed while the player loads.

    <div id="player">Loading the player...</div>

#### C. Add a script elememnt to call the player

Add the following `script` element right below the `div` element. This
adds the JW Player and your media to your page.

       <script type="text/javascript">
            jwplayer('player').setup({
                playlist: [{
                   file: '/path/to/media/file.mp4',
                   image: '/path/to/image.jpg',
                   provider: '/path/to/AkamaiAdvancedJWStreamProvider.swf'
               }],
               primary: 'flash'
           });
        </script>

This `script` uses the following attributes:

 - `file`: The link for the media. Locate your media in a Cloud Files 
 CDN-enabled container, click the gear icon, click **Show Links**, and use 
 the entire link. For MP3s, use the HTTP link. All other file types use 
 the Streaming link.
- `image`: The HTTP link for an image to display in the player. The 
  image displays for videos while the file loads or for music while the 
  file plays. Perform the same steps for the image as you did for the file.
- `provider`: The HTTP link to the JW Player. This is the link to the 
  container used in Step 2 in the *Upload JW Player 6* instructions.
- `primary`: This sets player rendering mode. The recommended setting 
  is **flash**.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
