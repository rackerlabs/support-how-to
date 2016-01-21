---
node_id: 3838
title: Sending HTML Mail via PHP in Cloud Sites
type: article
created_date: '2013-12-18'
created_by: Bryon Farris
last_modified_date: '2013-12-19'
last_modified_by: Ross Diaz
product: Cloud Sites
product_url: cloud-sites
---

<p><em>This article is an expansion of an existing article regarding basic SMTP authentication with PHP, which can be found <a href="/how-to/test-php-smtp-functionality" target="_blank">here</a>.&nbsp;</em></p><p>Within the Cloud Sites environment, it is possible to craft an HTML formatted email message for delivery when using SMTP authentication for delivery by making use of the built in Mail_Mime function provided by the PHP Pear framework.</p><p><strong>Sending HTML Enabled Mail via SMTP</strong></p><p>The following variables will need to be adjusted as needed:</p><ul><li><span style="line-height: 1.538em;" data-mce-mark="1">$from</span></li><li><span style="line-height: 1.538em;" data-mce-mark="1">$to</span></li><li><span style="line-height: 1.538em;" data-mce-mark="1">$subject</span></li><li><span style="line-height: 1.538em;" data-mce-mark="1">$text</span></li><li><span style="line-height: 1.538em;" data-mce-mark="1">$html</span></li><li><span style="line-height: 1.538em;" data-mce-mark="1">$file</span></li><li><span style="line-height: 1.538em;" data-mce-mark="1">$mimetype</span></li><li><span style="line-height: 1.538em;" data-mce-mark="1">$host</span></li><li><span style="line-height: 1.538em;" data-mce-mark="1">$username</span></li><li><span style="line-height: 1.538em;" data-mce-mark="1">$password</span></li></ul><p>The code below requires that you supply a valid SMTP hostname along with user credentials for authenticating against. If using a third party mail service, you will need to replace mail.emailsrvr.com with the appropriate SMTP server hostname relative to the service you are employing. The code also allows for the attachment of files from your Cloud Sites filesystem to the message, as long as a valid MIME type definition is supplied.&nbsp;</p>
<pre id="pre-0"><div class="syntax"><a id="highlighter-0"></a></div>
<?php
 require_once "Mail.php";
 require_once "Mail/mime.php";

 // see http://pear.php.net/manual/en/package.mail.mail-mime.php
 // for further extended documentation on Mail_Mime

 $from = "Web Master &lt;webmaster@example.com&gt;";
 $to = "Nobody &lt;nobody@example.com&gt;";
 $subject = "Test HTML email using PHP Pear w/ SMTP\r\n\r\n";
 $text = "This is a text test email message";
 $html = "&lt;html&gt;&lt;body&gt;&lt;p&gt;This is an html test email message
 &lt;a href=\&quot;http://www.rackspace.com\&quot;&gt;This Is A Link&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;";
 $crlf = "\n";

 // create a new Mail_Mime for use
 $mime = new Mail_mime($crlf);
 // define body for Text only receipt
 $mime->setTXTBody($text);
 // define body for HTML capable recipients
 $mime->setHTMLBody($html);

 // specify a file to attach below, relative to the script's location
 // if not using an attachment, comment these lines out
 // set appropriate MIME type for attachment you are using below, if applicable
 // for reference see http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types

 $file = "attachment.jpg";
 $mimetype = "image/jpeg";
 $mime->addAttachment($file, $mimetype);

 // specify the SMTP server credentials to be used for delivery
 // if using a third party mail service, be sure to use their hostname
 $host = "mail.emailsrvr.com";
 $username = "webmaster@example.com";
 $password = "yourPassword";

 $headers = array ('From' => $from,
  'To' => $to,
  'Subject' => $subject);
 $smtp = Mail::factory('smtp',
  array ('host' => $host,
    'auth' => true,
    'username' => $username,
    'password' => $password));


 $body = $mime->get();
 $headers = $mime->headers($headers);

 $mail = $smtp->send($to, $headers, $body);

 if (PEAR::isError($mail)) {
  echo("<p>" . $mail->getMessage() . "</p>");
} else {
  echo("<p>Message successfully sent!</p>");
}
?>
</pre><p><strong style="color: #333333; font-family: arial; font-size: 13.333333969116211px; line-height: 18.19444465637207px;">Note</strong><span style="color: #333333; font-family: arial; font-size: 13.333333969116211px; line-height: 18.19444465637207px;">:&nbsp;</span><a class="external text" style="color: #c40022; font-family: arial; font-size: 13.333333969116211px; line-height: 18.19444465637207px;" title="http://pear.php.net/package/Mail" href="http://pear.php.net/package/Mail" rel="nofollow">Mail.php</a><span style="color: #333333; font-family: arial; font-size: 13.333333969116211px; line-height: 18.19444465637207px;">&nbsp;and <a href="http://pear.php.net/package/Mail_Mime/" target="_blank">Mail/mime.php</a> are&nbsp;</span><a class="external text" style="color: #c40022; font-family: arial; font-size: 13.333333969116211px; line-height: 18.19444465637207px;" title="http://pear.php.net/" href="http://pear.php.net/" rel="nofollow">PEAR</a><span style="color: #333333; font-family: arial; font-size: 13.333333969116211px; line-height: 18.19444465637207px;">&nbsp;modules and are installed on the server. They are included in the default&nbsp;</span><a class="external text" style="color: #c40022; font-family: arial; font-size: 13.333333969116211px; line-height: 18.19444465637207px;" title="http://www.php.net/manual/en/ini.core.php#ini.include-path" href="http://www.php.net/manual/en/ini.core.php" rel="nofollow">include_path</a><span style="color: #333333; font-family: arial; font-size: 13.333333969116211px; line-height: 18.19444465637207px;">&nbsp;for PHP, so&nbsp;</span><a class="external text" style="color: #c40022; font-family: arial; font-size: 13.333333969116211px; line-height: 18.19444465637207px;" title="http://php.net/manual/en/function.require.php" href="http://php.net/manual/en/function.require.php" rel="nofollow">requiring</a><span style="color: #333333; font-family: arial; font-size: 13.333333969116211px; line-height: 18.19444465637207px;">&nbsp;it here will work by default without any additional effort on your part.</span></p><p><strong><span style="color: #333333; font-family: arial; font-size: 13.333333969116211px; line-height: 18.19444465637207px;">See Also</span></strong></p><ul><li><a href="/how-to/test-php-smtp-functionality" target="_blank"><span style="color: #333333; font-family: arial;"><span style="line-height: 18.1875px;">How do I test PHP SMTP functionality?</span></span></a></li></ul>
