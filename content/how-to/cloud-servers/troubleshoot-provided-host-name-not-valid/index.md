---
permalink: troubleshoot-provided-host-name-not-valid
audit_date: '2019-11-01'
title: Troubleshoot provided host name not valid error
type: article
created_date: '2019-10-30'
created_by: Shaun Crumpler
last_modified_date: '2019-11-01'
last_modified_by: Catherine Richardson
product: Cloud Servers
product_url: cloud-servers
---

This article describes the cause of the following error message and how to fix
the problem:

``The provided host name is not valid for this server.``

When you are working with Drupal 8, you might get this error message when you
browse to any page and see a plain white page.

**Warning:** Before you use these troubleshooting instructions, make sure that you understand your environment as these troubleshooting steps might not be suitable for all setups or configurations. Also, we recommend that you make a backup before making any changes to your system so that you have the ability to revert changes if needed.

### Source of the error

This error message comes from a feature that was added to Drupal to protect
against HTTP host header attacks. The change record generated for the patch
describes the feature.

Unfortunately, it's possible to spoof the HTTP host header for nefarious purposes and trick Drupal into using a different domain name in several subsystems (particularly link generation). So, you should consider the HTTP host header as user input that is not trusted.



### Fix for this error

To combat this problem, Drupal added the following setting to configure a list
of trusted hostnames from which the site can run.

`$settings['trusted_host_patterns']`

The setting is an array of regular expression patterns, without delimiters,
that represent the host names from which you want to allow to run.

For example, if you are running your site from a single hostname ``www.example.com``, then you should add this to your settings (usually found at ``./sites/default/settings.php``):

``$settings['trusted_host_patterns'] = array(
  '^www\.example\.com$',
);``

**Note**: The ^, \\., and $ are Perl Compatible Regular Expressions (PCRE) syntax and mean that you want to match
``www.example.com`` precisely, with nothing extra at the beginning or end, and
that the dots should be treated as dots and not wildcard characters.

If you are running from "example.com", use the following:

``$settings['trusted_host_patterns'] = array(
  '^example\.com$',
);``

If you need to run a site of multiple domains or subdomains and are not doing
canonical URL redirection, your setting should be similar to the following
example:

``$settings['trusted_host_patterns'] = array(
  '^example\.com$',
  '^.+\.example\.com$',
  '^example\.org',
  '^.+\.example\.org',
);``

This allows the site to run from all variants of example.com and example.org
with all subdomains included.

If you have this setting configured and still see the error message, you
likely are not using the correct the regular expression syntax. In this case,
take the first example in this article, copy and paste it into your settings, and
then edit it to reflect the hostname from which your site runs.


After you adjust ``$settings['trusted_host_patterns']`` to the proper value,
you should be able to browse to your site again.

### Removing the setting

If you remove the setting altogether, the trusted host mechanism is not used,
and you see an error on the status report page. Additionally, your site might
be vulnerable HTTP host header attacks.

### Check status

You can check on the status of your trusted host settings from the status
report page, which is at ``admin/reports/status``.
