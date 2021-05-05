---
permalink: add-a-site-seal-code-to-your-website
audit_date: '2021-04-22'
title: Add a site seal to your website
type: article
created_date: '2021-04-21'
created_by: Z McCrocklin
last_modified_date: '2021-04-22'
last_modified_by: Rose Morales
product: General
product_url: general
---

After you purchase an SSL certificate, you might want to add a *site seal* to
your website. A site seal is a visual indicator to your visitors that your
website is secured with an SSL certificate and can help establish trust in your
organization.

### Site seal code

You can use the following code example to add a site seal to your website:


```javascript
<!-- DigiCert Seal HTML -->
<!-- Place HTML on your site where the seal should appear -->
<div id="DigiCertClickID_{hash}></div>

<!-- DigiCert Seal Code -->
<!-- Place with DigiCert Seal HTML or with other scripts -->
<script type="text/javascript">
var _dcid = __dcid || [];_dcid.push(["DigiCertClickID_{hash}", "{seal}", "{size}", "black", "{hash}"]);(function()

{var cid=document.createElement("script");cid.async=true;cid.src="//seal.digicert.com/seals/cascade/seal.min.js";var s = document.getElementsByTagName("script");var ls = s[(s.length - 1)];ls.parentNode.insertBefore(cid, ls.nextSibling);}
());
</script>
```

You need to customize the following variables in the code: 

{{<image src="site-seal-code.jpg" alt="" title="Site Seal Code">}}

| Variable | Description |
| --- | --- |
| **{hash}** | Site Seal.<br/>Hash unique to your order and provided on your order ticket. <br/>Occurs in three locations in the preceding code. |
| **{seal}** | Vendor Seal.<br/>Thawte orders use code `17`.<br/>Secure Site orders use code `18`. |
| **{size}** | The size of your seal.<br/>Values can be `s`, `m`, or `l`.|


If you purchased your SSL certificate through Rackspace Technology and need further
assistance with the site seal code, reply on your order ticket or call Support.
