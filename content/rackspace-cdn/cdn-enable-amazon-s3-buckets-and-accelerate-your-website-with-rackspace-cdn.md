---
node_id: 4809
title: CDN-enable Amazon S3 buckets and accelerate your website with Rackspace CDN
type: article
created_date: '2015-09-08'
created_by: Catherine Richardson
last_modified_date: '2016-01-08'
last_modified_by: Catherine Richardson
product: Rackspace CDN
product_url: rackspace-cdn
---

To create a static website<span>, a site that does not change for each
request</span>, you can set up hosting on Amazon Simple Storage Service
(Amazon S3) for your origin server. Then you can accelerate delivery of
that site by using Rackspace CDN. Your site will be available on edge
nodes (servers) around the world.

**Note:** <span>Rackspace CDN does not currently support CDN-enabling
private Amazon S3 buckets.</span> <span>Also, </span>you cannot
CDN-enable Cloud Files containers with Rackspace CDN.<span>  </span>For
information about setting up a static website in Cloud Files, see [Point
and click your way to a Cloud Files static website with the Control
Panel](http://www.rackspace.com/blog/point-and-click-your-way-to-a-cloud-files-static-website-with-the-control-panel/).

Set up the origin server in AWS
-------------------------------

1.<span>   </span>Create an Amazon Web Servers (AWS) account if you
don&rsquo;t already have one.

2.<span>   </span>Log in to your AWS account.

3.<span>   </span>Create an Amazon S3 bucket.

4.<span>   </span>Edit permissions.

By default, S3 locks the permissions on your bucket so that
authenticated users cannot access anything in the bucket. Because you
are hosting your entire static site here, must give everyone read
access. To edit permissions, perform the following steps:

<span>         </span>a.<span>   </span>Click **Permissions**.

<span>         </span>b.<span>   </span>Click **Add more permissions**.

<span>         </span>c.<span>   </span>For **Grantee**, select
**everyone**.

<span>         </span>d.<span>   </span>Select the **View permissions**
checkbox.

<span>         </span>e.<span>   </span>Click **Save**.

**Note:** Do not grant any other permissions for this grantee. Doing so
might create a security issue.

5.<span>   </span>In the settings for your bucket, enable static website
hosting.

When you enable this setting, Amazon S3 serves the file
<span>`/index.html`</span> for a request for <span>`/`</span>. With
static website hosting enabled, your users see the same homepage whether
they request <span>`website.com/`</span> or
<span>`website.com/index.html`</span>.

<span>         </span>a.<span>   </span>For the index document, enter
<span>`index.html`</span>.

<span>         </span>b.<span>   </span>Enter the file to use for the
error document. This file is your 404 page.

               If you don&rsquo;t have a 404 page created, you can enter
<span>`index.html`</span>.

6.   Go to **Actions &gt; Upload** to upload your static HTML files.

If you have a large number of files to upload, you can use a file
transfer client to transfer many files at once. Many transfer clients
support Amazon S3, such as Cyberduck.

After all your files are uploaded to Amazon S3, you have successfully
set up your origin server. You do not want your users accessing your
origin server, so you need to set up another server.

<span>At this point, your site is generated and served by Amazon S3. But
with only Amazon S3 serving your site, every user in any part of the
world has to get your website data from the same Amazon S3 data center.
You can accelerate your static website by using Rackspace CDN.</span>


Accelerate your site to edge nodes by using Rackspace CDN
---------------------------------------------------------

<span>Rackspace CDN increases performance by distributing your website
across edge servers worldwide. Users receive the data from the edge node
closest to them. To set up Rackspace CDN for your static website,
perform the following actions:</span>

<span><span>1.<span>   </span></span></span>After your site is serving
from Amazon S3, configure a new Rackspace CDN service.
      For information about creating a new Rackspace CDN service, see
[Create a Rackspace CDN
service](/how-to/create-a-rackspace-cdn-service).

<span><span>2.<span>   </span></span></span>When you specify the origin,
enter the URL of your Amazon S3 bucket as your origin domain.
<span> </span>
      For example,
<span>`yourBucket.s3.amazonaws.com`</span><span>.</span>

<span><span>3.<span>   </span></span></span>Set the **Host Header** type
to **Origin**.

<span><span>4.<span>   </span></span></span>Configure your DNS.

Update your DNS settings to add a CNAME record for the
<span>raxcdn.com</span> URL returned by Rackspace CDN For more
information about changing DNS settings, see [Change DNS to enable
Rackspace
CDN](/how-to/change-dns-to-enable-rackspace-cdn).

