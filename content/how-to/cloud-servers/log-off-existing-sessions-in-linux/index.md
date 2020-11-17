---
permalink: log-off-existing-sessions-in-linux/
audit_date:
title: Log-off-Existing-Sessions-in-Linux/
type: article
created_date: '2020-11-06'
created_by: James Andrade
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

# Log off existing sessions in Linux

Note: You have to be root in order to end other users sessions

Check what users currently have sessions:
```
~]# w
 17:49:20 up 198 days,  5:23,  3 users,  load average: 0.00, 0.01, 0.05
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
root     tty1                      16:48   59:28   0.08s  0.08s -bash
root     pts/0    ord.secure-acces 16:50    0.00s  0.10s  0.02s w
james    pts/1    ord.secure-acces 17:49    5.00s  0.03s  0.03s -bash
```
Log off user:
```
~]# pkill -KILL -u james
```
Confirm:
```
~]# w
 17:50:07 up 198 days,  5:24,  2 users,  load average: 0.00, 0.01, 0.05
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
root     tty1                      16:48    1:00m  0.08s  0.08s -bash
root     pts/0    ord.secure-acces 16:50    7.00s  0.10s  0.01s w
```

Ending a users session is that simple!
