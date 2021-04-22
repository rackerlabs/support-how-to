---
permalink: site-seal-code/
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

After you purchase an SSL certificate, you might want to add a site seal to your website. A site seal
is a visual indicator to your visitors that your website is secured with an SSL certificate and
can help establish trust in your organization.

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

There are a few variables in the code that you must customize: 

{{<image src="site-seal-code.jpg" alt="" title="Site Seal Code">}}

| Variable | Description |
| --- | --- |
| **{hash}** | (3 locations in the code above) - Site Seal Hash unique to your order (Provided on your order ticket) |
| **{seal}** | Vendor Seal:<br/>Thawte orders use code **17**<br/>Secure Site orders use code **18** |
| **{size}** | The size of your seal: **s**, **m**, or **l**|

---

If you need further assistance with the site seal code, please feel free to
reply on your Order Ticket or give us a call.
