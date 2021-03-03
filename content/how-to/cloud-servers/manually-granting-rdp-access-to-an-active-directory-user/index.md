---
permalink: manually-granting-rdp-access-to-an-active-directory-user/
audit_date:
title: Manually granting RDP access to an Active Directory user
type: article
created_date: '2021-03-02'
created_by: Travis Cook
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

### Manually granting RDP access to an Active Directory user

This article explains how to give RDP access to an Active Directory (AD) user on a specific server. The server has to be domain-joined for this to work.

If the AD domain user is unable to login to a server they are supposed to have access to, you can follow the below steps to verify and modify their RDP permissions. You will need administrator rights to make any changes.

1) Log in to the server in question; right-click the Windows Icon and select ‘System’

2) The next options will be slightly different depending on your version of Windows:
- 2012 R2: Click on ‘Remote Settings’
- 2016: Click ‘Remote Desktop’, then ‘Select users that can remotely access this PC’

3) Click ‘Select Users’ in the new window that pops up

4) Click ‘Add’

5) Type the username in the field

6) Click ‘Check Names’
- If the domain user was entered correctly, the ‘Check Names’ option will find the user and the name will be underlined 

7) Once added, click ‘Apply’ and ‘OK’
