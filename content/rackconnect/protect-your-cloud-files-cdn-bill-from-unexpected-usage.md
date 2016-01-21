---
node_id: 2155
title: Protect your Cloud Files CDN Bill from Unexpected Usage
type: article
created_date: '2012-09-11'
created_by: Megan Meza
last_modified_date: '2015-09-04'
last_modified_by: Constanze Kratel
product: RackConnect
product_url: rackconnect
---

<span
style="mso-fareast-font-family: 'Times New Roman'; mso-bidi-font-family: 'Times New Roman'; color: black;">When
choosing to use the content delivery network (CDN) to accelerate your
website and images/videos/etc. on that website, you are responsible for
all bandwidth costs associated with delivery of your content over the
public Internet, including bandwidth incurred due to piracy.
</span><span
style="mso-fareast-font-family: 'Times New Roman'; mso-bidi-font-family: 'Times New Roman';">This
article is designed to help you monitor and protect your CDN usage.<span
style="mso-spacerun: yes;">  </span></span>

When using the CDN, all your assets are assigned a CDN URL.<span
style="mso-spacerun: yes;">  </span>As you probably know, your website
will then have that CDN URL in its source code and display it when a
user requests to see it.<span style="mso-spacerun: yes;">  </span>There
are companies and individuals that target websites&rsquo; asset URLs and serve
them without the site owner&rsquo;s permission.<span
style="mso-spacerun: yes;">  </span>This is known as &ldquo;hot linking&rdquo; and
can result in a massive increase to your CDN bill if the problem goes
unnoticed.<span style="mso-spacerun: yes;">  </span>

 There are two basic ways to protect yourself, your content, and your
invoice from hot linking:<span style="mso-spacerun: yes;">  </span>(1)
constant monitoring and alerts for abnormal CDN bandwidth usage, and (2)
proactive measures to make it more difficult to access your site&rsquo;s
source code.<span style="mso-spacerun: yes;">  </span>I&rsquo;ll review some
options of both below.



Monitoring/Alerting:
--------------------

***Control Panel***

Customers can always see their current usage in the Cloud Control
Panel.<span style="mso-spacerun: yes;">  </span>You can find this
information by going to <http://mycloud.rackspace.com>.<span
style="mso-spacerun: yes;">  </span>Under your username, click on the
option for &ldquo;First Generation Control Panel&rdquo;

 <img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/cfoncp_0.jpg" alt="Link to First Gen Control Panel" width="550" height="261" />

<span style="mso-spacerun: yes;"> </span>Once you&rsquo;re in the First
Generation Control Panel, you will see usage for all your products.<span
style="mso-spacerun: yes;">  </span>These usage numbers will reflect all
usage on your current billing period.<span style="mso-spacerun: yes;">
</span>If you are using multiple Rackspace cloud products, you may need
to scroll down to Find your Cloud Files usage.<span
style="mso-spacerun: yes;">  </span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/cfusage_0.jpg" alt="Home Page Usage" width="550" height="419" />

***CDN Logs***

Every CDN customer has the ability to turn on CDN logs for their
containers that are CDN enabled.<span style="mso-spacerun: yes;">
</span>You can easily enable these logs via the Cloud Files API \[link\]
or from your Cloud Control Panel at <http://mycloud.rackspace.com>.

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/enablelogs_0.jpg" alt="Enabling Logs" width="550" height="328" />

Once you have enabled CDN logs for your content, Cloud Files will create
a container for you and deliver logs to that container.<span
style="mso-spacerun: yes;">  </span>The frequency of log delivery can
vary by how heavy traffic is on the CDN, but logs are usually delivered
every four hours.<span style="mso-spacerun: yes;">  </span>

 The log files inside of the container, named &ldquo;.CDN\_ACCESS\_LOGS&rdquo; will
be prefixed with the container they are logging, followed by the date
and time stamp.<span style="mso-spacerun: yes;">   </span>This makes it
easy to find logs for a specific time period.<span
style="mso-spacerun: yes;">  </span>

<img src="https://8026b2e3760e2433679c-fffceaebb8c6ee053c935e8915a3fbe7.ssl.cf2.rackcdn.com/field/image/cfaccesslogs_0.jpg" alt="Sample CDN Log Container" width="550" height="347" />


If you find that your content has been hot linked, you can use your CDN
logs to find which URLs are compromised and take action
immediately.<span style="mso-spacerun: yes;">  </span>



***Third Party Log Analysis***

 There are several companies in the market that will take the hassle out
of parsing the logs in your CDN log container.<span
style="mso-spacerun: yes;">  </span>These companies take the raw logs
that Rackspace delivers to your account and make them easy to consume
and understand.<span style="mso-spacerun: yes;">  </span>For example,
they will show you peak traffic times, geographic regions that access
your data the most, etc.<span style="mso-spacerun: yes;">  </span>

 For monitoring purposes, most of these tools allow you to set up alerts
for when usage reaches a certain level, or if it has increased by a
certain amount.<span style="mso-spacerun: yes;">  </span>This is a great
way to get monitoring without having to code a solution yourself.

 Rackspace has two [Cloud Tools
Partners](https://cloudtools.rackspace.com/home) that provide these
features, [Cloud
Ability](https://cloudtools.rackspace.com/apps/445?1601080659) and
[QloudStat](https://cloudtools.rackspace.com/apps/399?1814232928).<span
style="mso-spacerun: yes;">    </span>



Hiding Source Code:
-------------------

While completely hiding your source code is impossible, below are some
common tools that can serve as a first line of defense against those
looking to pirate content. <span
style="mso-spacerun: yes;"> </span>While someone with more technical
knowledge will find ways around these, it may take long enough for them
to give up.<span style="mso-spacerun: yes;"> </span>

**<span style="text-decoration: underline;">No Right Click
Scripts</span>**

There are scripts that will prevent visitors from using the right-click
menu to copy your content&rsquo;s link or view your site&rsquo;s source code.<span
style="mso-spacerun: yes;">  </span>There are other ways to find this
information, like using the toolbar at the top of the browser, but
preventing right click can be an easy first step to protecting
yourself.<span style="mso-spacerun: yes;">  </span>If you attempt this
method, be sure to check its functionality in a variety of browsers, as
the code can be difficult to implement across all of them.<span
style="mso-spacerun: yes;">  </span>

 **<span style="text-decoration: underline;">JavaScript
Encryption</span>**

The method involves taking your code, using a custom made function to
"encrypt" it somehow, and then putting it in an HTML file along with a
function that will decrypt it for the browser. While website visitors
will still be able to view your source code, they will not be able to
use it without decrypting.<span style="mso-spacerun: yes;">
</span>There are plenty tools online that will help encrypt your source
code.<span style="mso-spacerun: yes;">  </span>Here are some links and
examples that might be helpful.<span style="mso-spacerun: yes;">
</span>



<span
style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span
style="mso-list: Ignore;">&middot;<span
style="font: 7.0pt 'Times New Roman';">
</span></span></span>[Encrypting Source
Code](http://www.blackbeltcoder.com/Articles/mfc/encrypting-source-code)

<span
style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span
style="mso-list: Ignore;">&middot;<span
style="font: 7.0pt 'Times New Roman';">
</span></span></span>[Simple Encrypting
Tool](http://www.webtoolhub.com/tn561359-html-encrypter.aspx)<span
style="mso-spacerun: yes;"> </span>

<span
style="font-family: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol;"><span
style="mso-list: Ignore;">&middot;<span
style="font: 7.0pt 'Times New Roman';">
</span></span></span>[Article discussing options for
Encryption](http://www.htmlguard.com/articles/about-html-source-code-encryption/)<span
style="mso-spacerun: yes;"></span>

 As mentioned, this method requires the use of JavaScript, meaning that
you need to expect your legitimate website traffic to be using browsers
and settings that support it.<span style="mso-spacerun: yes;">  </span>



