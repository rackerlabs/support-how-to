---
permalink: assemble-rackspace-email-webmail-and-outlook-web-access-owa-login-widget
audit_date:
title: Add an email login portal for Rackspace Email webmail and Outlook Web Access
type: article
created_date: '2016-08-24'
created_by: Tom Mitchell
last_modified_date: '2018-10-09'
last_modified_by: Kate Dougherty
---

Select and run one of the following scripts to add a login portal on your site
for [webmail](https://www.rackspace.com/email-hosting/webmail) through both
Rackspace Email and [Microsoft&reg;
Exchange](https://www.rackspace.com/email-hosting/hosted-exchange) mailboxes.
Download both the script and the corresponding image to use.

**Standard tall (350px x 210px) image**

   {{<image src="stdtall350x210.png" alt="" title="">}}

**Script**

      <div style="background-image:url(https://admin.emailsrvr.com/clients/webmail/apps_rackspace_com/images/bg-350x210.png" alt="" title="">}};width:350px;height:210px;background-repeat:no-repeat;"> <div style="padding:20px;font-family:Verdana, Geneva, sans-serif;font-size:13px;color:#333;"> <form name="loginForm" style="margin:0px" onsubmit="submitForm();" action="https://apps.rackspace.com/login.php" method="post"> <table> <tr height="30px"> <td width="80px">Username:</td> <td> <input type="text" name="user_name" class="small" style="width:190px;"></td> </tr> <tr height="30px"> <td width="80px">Password:</td> <td><input type="password" name="password" class="small" style="width:120px;"><input type="submit" value="Login" class="small" style="width:60px;margin:0px 0px 0px 10px;"> </td> </tr> <tr height="20px"> <td width="80px"></td> <td> <input type="checkbox" name="remember" id="remember" style="width:12px;margin:0px 5px 0px 0px;"><font style="font-size:11px">Remember me</font> <input type=hidden name='useSSL' id='useSSL' value=''> </td> </tr> </table> </form> <div style="text-align:center;padding-top:10px"> <img src="https://admin.emailsrvr.com/clients/webmail/apps_rackspace_com/images/rslogo.png" width="120" height="40" border="0" align="center" /> </div> <div style="text-align:center;padding-top:10px;"> <font style="font-size:9px;"> <a href="https://www.rackspace.com/apps/email_hosting" color="#0000FF" style="text-decoration:none;" target="_blank">Business Email Hosting by Rackspace</a> </font> </div> </div> </div> <script type="text/javascript" src="https://webmail.emailsrvr.com/mail/js/login.js"></script><script type="text/javascript">preloadForm(); if (getQueryVariable("fail") == 1) {alert("Incorrect username or password.")}</script>

- - -

**Standard short (320px x 150px) image**

   {{<image src="stdshort320x150.png" alt="" title="">}}

**Script**

      <div style="background-image:url(https://admin.emailsrvr.com/clients/webmail/apps_rackspace_com/images/bg-320x150.png" alt="" title="">}};width:320px;height:150px;background-repeat:no-repeat;"> <div style="padding:15px;font-family:Verdana, Geneva, sans-serif;font-size:13px;color:#333;"> <form name="loginForm" style="margin:0px" onSubmit="submitForm();" action="https://apps.rackspace.com/login.php" method="post"> <table> <tr height="20px"> <td width="80px">Username:</td> <td> <input type="text" name="user_name" class="small" style="width:190px;"></td> </tr> <tr height="20px"> <td width="80px">Password:</td> <td><input type="password" name="password" class="small" style="width:120px;"><input type="submit" value="Login" class="small" style="width:60px;margin:0px 0px 0px 10px;"> </td> </tr> <tr height="20px;"> <td width="80px"></td> <td> <input type="checkbox" name="remember" id="remember" style="margin:0px 5px 0px 0px;"><font style="font-size:11px;">Remember me</font> <input type=hidden name='useSSL' id='useSSL' value=''> </td> </tr> </table> </form> <div style="text-align:center;padding-top:15px;"> <font style=";font-size:9px;"> <a href="https://www.rackspace.com/apps/email_hosting/compare" color="#0000FF" style="text-decoration:none;" target="_blank">Email Hosting Service from Rackspace</a> </font> </div> </div> </div> <script type="text/javascript" src="https://webmail.emailsrvr.com/mail/js/login.js"></script><script type="text/javascript">preloadForm(); if (getQueryVariable("fail") == 1) {alert("Incorrect username or password.")}</script>

- - -

**Footer and navigation wide (820px × 50px) image**

   {{<image src="ftrnavwide820x50.png" alt="" title="">}}

**Script**

      <div style="background-image:url(https://admin.emailsrvr.com/clients/webmail/apps_rackspace_com/images/bg-820x50.png" alt="" title="">}};width:820px;height:50px;background-repeat:no-repeat;"> <div style="height:50px;font-family:Verdana, Geneva, sans-serif;font-size:13px;color:#333;text-align:left"> <table style="float:right;height:50px;width:200px;font-size:9px;text-align:right;line-height:14px;margin-right:10px"> <tr><td valign="middle"> <a href="https://www.rackspace.com/apps/email_hosting/rackspace_email" color="#0000FF" style="text-decoration:none;" target="_blank">Hosted Email powered by Rackspace</a> </td></tr> </table> <div style="padding:12px 0px 0px 10px"> <form name="loginForm" style="margin:0px" onSubmit="submitForm();" action="https://apps.rackspace.com/login.php" method="post"> Username: <input type="text" name="user_name" class="small" style="width:90px;margin:0px 5px 0px 0px;vertical-align:middle"> Password: <input type="password" name="password" class="small" style="width:90px;margin:0px 5px 0px 0px;vertical-align:middle"> <input type=hidden name='useSSL' id='useSSL' value=''> <input type="submit" value="Login" class="small" style="width:60px;margin:0px 5px 0px 5px;vertical-align:middle"> <input type="checkbox" name="remember" id="remember" style="width:12px;vertical-align:middle;margin-right:5px;"><font style="font-size:11px;vertical-align:middle">Remember me</font> </form> </div> </div> </div> <script type="text/javascript" src="https://webmail.emailsrvr.com/mail/js/login.js"></script><script type="text/javascript">preloadForm(); if (getQueryVariable("fail") == 1) {alert("Incorrect username or password.")}</script>

- - -

**Footer and navigation narrow (520px × 70px) image**

   {{<image src="ftrnavnarrow520x70.png" alt="" title="">}}

**Script**

      <div style="background-image:url(https://admin.emailsrvr.com/clients/webmail/apps_rackspace_com/images/bg-520x70.png" alt="" title="">}};width:520px;height:70px;background-repeat:no-repeat;"> <div style="padding:10px 5px 5px 40px;font-family:Verdana, Geneva, sans-serif;font-size:13px;color:#333"> <form name="loginForm" style="margin:0px" onSubmit="submitForm();" action="https://apps.rackspace.com/login.php" method="post"> Username: <input type="text" name="user_name" class="small" style="width:90px;margin:0px 5px 0px 0px;vertical-align:middle"> Password: <input type="password" name="password" class="small" style="width:90px;margin:0px 5px 0px 0px;vertical-align:middle"> <input type="submit" value="Login" class="small" style="width:60px;margin:0px 0px 0px 5px;vertical-align:middle"> <input type=hidden name='useSSL' id='useSSL' value=''> <div style="padding-top:5px"> <div style="float:left;height:25px;line-height:25px;text-align:left"> <input type="checkbox" name="remember" id="remember" style="width:12px;margin:0px 5px 0px 0px;"><font style="font-size:11px">Remember me</font> </div> <div style="height:25px;line-height:25px;text-align:right"> <font style="margin:0px 10px 0px 0px;font-size:9px;"> <a href="https://www.rackspace.com/apps/email_hosting/rackspace_email" color="#0000FF" style="text-decoration:none;" target="_blank">Hosted Email Services from Rackspace</a> </font> </div> </div> </form> </div> </div> <script type="text/javascript" src="https://webmail.emailsrvr.com/mail/js/login.js"></script><script type="text/javascript">preloadForm(); if (getQueryVariable("fail") == 1) {alert("Incorrect username or password.")}</script>

- - -

**Vertical tall (200px x 290px) image**

   {{<image src="verttall200x290.png" alt="" title="">}}

**Script**

      <div style="background-image:url(https://admin.emailsrvr.com/clients/webmail/apps_rackspace_com/images/bg-200x290.png" alt="" title="">}};width:200px;height:290px;background-repeat:no-repeat;"> <div style="padding:15px 20px;font-family:Verdana, Geneva, sans-serif;font-size:13px;color:#333;"> <form name="loginForm" style="margin:0px" onSubmit="submitForm();" action="https://apps.rackspace.com/login.php" method="post"> <div>Username:</div> <input type="text" name="user_name" class="small" style="width:150px;margin:5px 0px 0px 0px;"></td> <div style="margin:5px 0px 0px 0px;">Password:</div> <input type="password" name="password" class="small" style="width:150px;margin:5px 0px 0px 0px;"> <input type=hidden name='useSSL' id='useSSL' value=''> <input type="submit" value="Login" class="small" style="width:60px;margin:10px 0px 0px 0px;"> <div style="padding:10px 0px"><input type="checkbox" name="remember" id="remember" style="width:12px;margin:0px 5px 0px 0px"><font style="font-size:9px;">Remember Me</font></div> </form> <div style="text-align:center"> <img src="https://admin.emailsrvr.com/clients/webmail/apps_rackspace_com/images/rslogo.png" width="120" height="40" border="0" align="center" /> </div> <div style="text-align:center;padding-top:10px;"> <font style="font-size:9px;line-height:14px"> <a href="https://www.rackspace.com/apps/email_hosting" color="#0000FF" style="text-decoration:none;" target="_blank">Business Email Hosting powered by Rackspace</a> </font> </div> </div> </div> <script type="text/javascript" src="https://webmail.emailsrvr.com/mail/js/login.js"></script><script type="text/javascript">preloadForm(); if (getQueryVariable("fail") == 1) {alert("Incorrect username or password.")}</script>

- - -

**Vertical short (200px × 220px) image**

   {{<image src="vertshort200x220.png" alt="" title="">}}

**Script**

      <div style="background-image:url(https://admin.emailsrvr.com/clients/webmail/apps_rackspace_com/images/bg-200x220.png" alt="" title="">}};width:200px;height:220px;background-repeat:no-repeat;"> <div style="padding:10px 20px;font-family:verdana, geneva, sans-serif;font-size:11px;color:#333;"> <form name="loginForm" style="margin:0px" onSubmit="submitForm();" action="https://apps.rackspace.com/login.php" method="post"> <div>Username:</div> <input type="text" name="user_name" class="small" style="width:150px;margin:3px 0px 0px 0px;"></td> <div style="margin:5px 0px 0px 0px;">Password:</div> <input type="password" name="password" class="small" style="width:150px;margin:3px 0px 0px 0px;"> <input type=hidden name='useSSL' id='useSSL' value=''> <input type="submit" value="Login" class="small" style="width:60px;margin:5px 0px 0px 0px;"> <div style="padding:10px 0px 10px 0px"><input type="checkbox" name="remember" id="remember" style="width:12px;margin:0px 5px 0px 0px;"><font style="font-size:9px;">Remember Me</font></div> </form> <div style="text-align:center"> <font style="font-size:9px;line-height:14px"> <a href="https://www.rackspace.com/apps/email_hosting/exchange_hybrid" color="#0000FF" style="text-decoration:none;" target="_blank">Rackspace Email and Microsoft Exchange Hosting</a> </font> </div> </div> </div> <script type="text/javascript" src="https://webmail.emailsrvr.com/mail/js/login.js"></script><script type="text/javascript">preloadForm(); if (getQueryVariable("fail") == 1) {alert("Incorrect username or password.")}</script>
