---
permalink: stream-simple-flash-files-from-cloud-files
audit_date: '2021-05-26'
title: Stream simple Flash files from Cloud Files
type: article
created_date: '2011-03-08'
created_by: Rackspace Support
last_modified_date: '2021-05-26'
last_modified_by: Ana Corpus
product: Cloud Files
product_url: cloud-files
---

**Disclaimer**: As of January 12, 2021, excluding the China variant of Flash, 
the Flash executable has a built-in kill switch that prevents it from playing 
Flash files. As of February 2021, all major browsers block Flash and cannot 
play it. Only IE11, niche browser forks, and some browsers built for China plan
to continue support.

This article describes how to stream media files from Cloud Files to a website. 
It assumes that you have a video file uploaded to Cloud Files in a public 
container. It also uses [Flowplayer](https://flowplayer.org/), which is an
open-source Flash video player registered under the GPL.

### Streaming

Rackspace delivers Cloud Files containers published and marked as public
over the [Akamai Technologies&reg;](https://www.akamai.com/) global content
delivery network (CDN). For streaming flash files from your Cloud Files,
Akamai provides *pseudostreaming*.

Pseudostreaming works as follows: When a video initially loads, the player
reads and stores a list of seek points as part video metadata. These seek
points are offsets in the video (both in seconds and in bytes) at which a new
keyframe starts. To accomplish this, Akamai's streaming supports the
[HTTP Range header](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35)
to identify those seek points. It does not support Real-Time Messaging Protocol
(RTMP) streaming.

Pseudostreaming differs from what Akamai offers with their iOS streaming. iOS
streaming is a form of adaptive streaming. The encoder (or a separate segmented
process) produces H.264/AAC content in a sequence of small content segments in
MPEG-2 TS format (**.ts**). There is also an **m3u8** index file that references
these segments. In the case of live content, the M3U8 continuously updates to
reflect the latest content.

For more information about pseudostreaming, see [JW6: Pseudo Streaming in Flash](https://www.joomlarulez.com).

For more information about iOS streaming, see
[Technical Note TN2224](https://developer.apple.com/library/content/technotes/tn2224/_index.html)
on the Apple Developer site.

### Supported streaming formats and codecs

Akamai streaming supports the following formats:

Container  | Video codec  | Audio codec  | Comments
--- | --- | --- | ---
FLV  | H.263 <br /> H.264 <br /> VP6 | MP4 <br /> AAC <br /> PCM <br /> Nellymoser | Video-only works as well. For Nellymoser, Akamai supports only the 8 kHz and 16 kHz mono sound formats.
F4V  | H.264  | AAC |  None
MP4 | H.264  | AAC <br /> MP3 | Can be audio-only (AAC) or video-only.
F4F/F4M  | H.264 <br /> VP6  | AAC <br /> MP3 |  None

### Prerequisites

Ensure that you have the following prerequisites:

-  A **.flv** video
-  A text editor

### FlowPlayer steps

1. Go to [Akamai FlowPlayer](https://flowplayer.org) and download FlowPlayer.
2. Save the zip file to your desktop.
3. Extract the zip file to your desktop.
4. Upload the following files to Cloud Files by using the [Cloud Control Panel](https://login.rackspace.com/):

   - **flowplayer-*version*.swf**
   - **flowplayer-*version*.min.js**
   - **flowplayer.controls-*version*.swf**

### Create an XHTML file

Create a simple XHTML file that calls Flowplayer and embeds it onto the page.
Use the following code, making the following substitutions:

    <html>
     <head>
      <script type="text/javascript" src="https://c022320192.cdn.cloudfiles.rackspacecloud.com/flowplayer-3.5.min.js"></script>
     </head>
     <body>
      <a
        href="https://c022320192.cdn.cloudfiles.rackspacecloud.com/video.flv"
        style="display:block;width:520px;height:330px"
        id="player">
      </a>
      <script>
       flowplayer("player","https://c022320192.cdn.cloudfiles.rackspacecloud.com/flowplayer-3.5.swf");
      </script>
     </body>
    </html>

- On line 3, replace `https://c022320192.cdn.cloudfiles.rackspacecloud.com/flowplayer-3.5.min.js` with your version of this file.
- On line 7, replace `https://c022320192.cdn.cloudfiles.rackspacecloud.com/video.flv` with the location of your video file.
- On line 12, replace `https://c022320192.cdn.cloudfiles.rackspacecloud.com/flowplayer-3.5.swf` with your version of this file.

Save this XHTML file and run it from your local machine.

If it is working correctly, the Flash video loads quickly and streams. If not, 
check your code. If you still have problems after that, call our Support 
team or submit a ticket through the [Cloud Control Panel](https://login.rackspace.com/).

Use the Feedback tab to make any comments or ask questions. You can also click
**Let's Talk** to [start the conversation](https://www.rackspace.com/).
