---
permalink: using-task-states-with-server-imaging
audit_date: '2020-09-04'
title: Use task states with server imaging
type: article
created_date: '2013-08-28'
created_by: Brian Rosmaita
last_modified_date: '2020-09-04'
last_modified_by: Stephanie Fillmon
product: Cloud Servers
product_url: cloud-servers
---

The OpenStack Server Extended Status Extension has exposed some new
task states that provide more fine-grained visibility into the server
state during the image-create (or "snapshot") process.  This article
describes what they are and suggests how you can make use of them.

Before the OpenStack Grizzly release, when you requested a create image
action on a server, the server would go into a special *task state* of
`image_snapshot`, and it would stay in this task state until the image
was completed. This single task state hid the fact that there are three
distinct phases to a snapshot operation:

1.  The hypervisor creates an image of the server's virtual hard disk.
2.  The hypervisor packages the image and prepares it for upload to the
    image store.
3.  The hypervisor uploads the packaged image to the image store.

During phase 1, you should avoid any operations that would modify data on
the server's virtual hard disk. Otherwise, the recorded snapshot might include
inconsistencies from which certain application programs on your
server, primarily databases, might not be able to recover when you boot from the image.

In both phases 2 and 3, the hypervisor works on your server's behalf
but doesn't do anything with your virtual hard disk. By far, the third phase,
in which the upload occurs, takes the longest to complete.

The OpenStack Grizzly release modified the semantics of the image\_snapshot
task state slightly and added two new task states. So now, your server goes
through the following task states while processing an image create action:

1.  image\_snapshot: the hypervisor creates an image of the server's
    virtual hard disk
2.  image\_pending\_upload: the hypervisor packages the image and
    prepares it for upload
3.  image\_uploading: the hypervisor uploads the image to the image
    store

While your server is any of these task states, you can't issue another
create image action on that server. As you can see from the task state
descriptions, the hypervisor is involved in all three phases of the
image create action, so all the extra bookkeeping resources the
hypervisor has allocated to your server are in use. You have to wait
until the entire snapshot process completes and releases these resources
before you can create another snapshot.

After the first phase is completed, you no longer have to worry that
operations on your server might interfere with the effectiveness of your
snapshot. Unfortunately, the Control Panel does not expose server task
states. However, you can check them by using the API or `python-novaclient`.

### Use the API to check the server task state

The task states appear in the following server detail operation response:

    GET /v2/servers/{serverId}

Here's an abbreviated JSON server detail response:

    {
        "server": {
            "OS-EXT-STS:power_state": 1,
            "OS-EXT-STS:task_state": "image_pending_upload",
            "OS-EXT-STS:vm_state": "active",
            /* ... */
            "id": "c2d5da0a-80d7-4ca7-872c-505410ab55d0",
            /* ... */
            "name": "check-my-task-state",
            "progress": 100,
            "status": "ACTIVE",
       }
    }

Look for the `OS-EXT-STS:task_state` element. Because a
JSON object is unordered, it might appear anywhere in the
response. From the value displayed in this
example, you can see that the hypervisor finished creating the
image of the server's virtual hard disk and is now packaging and
preparing the image for upload.

### Use python-novaclient to check the server task state

`python-novaclient` is a handy program that you can run from the command
line. If you haven't used it before, here are some How-To
articles to check out:

-   [Installing python-openstackclient on Linux and Mac
    OS](/support/how-to/installing-python-openstackclient-on-linux-and-mac-os)
-   [Installing python-novaclient on
    Windows](/support/how-to/installing-python-novaclient-on-windows)

These articles provide an overview of `python-novaclient`
and complete instructions for installing it on your operating system.

To see the task state for a server by using `python-novaclient`,
do a `show` operation on the server:

    $ nova show {serverId}

Here's an abbreviated response:

    +------------------------+---------------------------------------+
    | Property               | Value                                 |
    +------------------------+---------------------------------------+
    | status                 | ACTIVE                                |
    | OS-EXT-STS:task_state  | None                                  |
    | OS-EXT-STS:vm_state    | active                                |
    | id                     | 933e803f-13b0-4698-a5c7-f74ec424fd38  |
    | name                   | check-my-task-state                   |
    | OS-DCF:diskConfig      | MANUAL                                |
    | progress               | 100                                   |
    | OS-EXT-STS:power_state | 1                                     |
    | metadata               | {}                                    |
    +------------------------+---------------------------------------+

In this example, you can see that there's no task state for the server,
so it could accept an `image-create` request.

### Poll to check the server task state

You might want to discover the current server task state before performing
one of the following tasks:

1.  Stop activities on the server that would affect the
    quality of the disk image, such as stopping a database
    management system.
2.  Issue an server `image-create` command by using the API, novaclient, or
    Control Panel.
3.  Monitor the server to see when it exits the `image_snapshot` task state.
4.  Restart the activities stopped before you took the
    snapshot, such as bringing your database management system
    back up.

You can write a simple Bash script to monitor your server. Here's a sample of
the most relevant part, but feel free to expand on it. Do read through and make
sure you know what it's doing before using it. It uses four programs (`curl`, `egrep`,
`sed`, and `date`) that are installed by default on most Linux&reg; systems.
This fragment is pretty primitive, so you have to use control-C to stop the
script.

    # set these vars
    #
    # the API endpoint, e.g., "https://iad.servers.api.rackspacecloud.com/v2/123456"
    API_ENDPOINT=
    # your API username, e.g., "fredco"
    API_USER=
    # your API auth token, obtained from the Identity service
    API_AUTH_TOKEN=
    # the UUID of the server you want to monitor
    API_SERVER=
    # how long to pause in between requests, in seconds
    SLEEP_TIME=30
    # a temporary file, e.g., "/tmp/polling.json"
    DETAIL_FIL=

    # verify that the server exists
    API_RESP_CODE=$(curl -X GET <br>
     -k -s <br>
     -H "X-Auth-User: $API_USER" <br>
     -H "X-Auth-Token: $API_AUTH_TOKEN" <br>
     -H "Accept: application/json" <br>
     -w "%{http_code}" <br>
     -o $DETAIL_FIL <br>
     "$API_ENDPOINT/servers/$API_SERVER")
    if [ "$API_RESP_CODE" != "200" ] ; then
      echo "[error] can't find server $API_SERVER"
      exit 1
    fi

    while [ 0 ] ; do
       API_RESP_CODE=$(curl -s -k -X GET <br>
        -H "X-Auth-User: $API_USER" <br>
        -H "X-Auth-Token: $API_AUTH_TOKEN" <br>
        -H "Accept: application/json" <br>
        -w "%{http_code}" <br>
        -o $DETAIL_FIL <br>
      "$API_ENDPOINT/servers/$API_SERVER")
      if [ "$API_RESP_CODE" == "404" ] ; then
        echo "[info] server $API_SERVER has disappeared!"
        break
      fi
      RAW_STAT=$(egrep -o '"status": (".*?"|null)' $DETAIL_FIL | sed 's/"//g')
      VM_STAT=$(egrep -o '"OS-EXT-STS:vm_state": (".*?"|null)' $DETAIL_FIL | sed 's/OS-EXT-STS://;s/"//g')
      TASK_STAT=$(egrep -o '"OS-EXT-STS:task_state": (".*?"|null)' $DETAIL_FIL | sed 's/OS-EXT-STS://;s/"//g')
      POW_STAT=$(egrep -o '"OS-EXT-STS:power_state": (\d|null)' $DETAIL_FIL | sed 's/OS-EXT-STS://;s/"//g')
      TIME=$(date +"%H:%M:%S")
      echo "$TIME   $RAW_STAT   $VM_STAT   $TASK_STAT   $POW_STAT"
      sleep ${SLEEP_TIME:-45}
    done

If you start a script that contains the preceding fragment and then take a
server snapshot, you see something similar to the following example:

    17:14:41   status: ACTIVE   vm_state: active   task_state: null   power_state: 1
    17:14:44   status: ACTIVE   vm_state: active   task_state: null   power_state: 1
    17:14:48   status: ACTIVE   vm_state: active   task_state: image_snapshot   power_state: 1
    17:14:51   status: ACTIVE   vm_state: active   task_state: image_pending_upload   power_state: 1
    17:14:55   status: ACTIVE   vm_state: active   task_state: image_pending_upload   power_state: 1
    17:14:58   status: ACTIVE   vm_state: active   task_state: image_pending_upload   power_state: 1
    17:15:02   status: ACTIVE   vm_state: active   task_state: image_pending_upload   power_state: 1
    17:15:05   status: ACTIVE   vm_state: active   task_state: image_uploading   power_state: 1
    17:15:09   status: ACTIVE   vm_state: active   task_state: image_uploading   power_state: 1
        ...
    17:16:19   status: ACTIVE   vm_state: active   task_state: image_uploading   power_state: 1
    17:16:23   status: ACTIVE   vm_state: active   task_state: image_uploading   power_state: 1
    17:16:26   status: ACTIVE   vm_state: active   task_state: null   power_state: 1
    17:16:30   status: ACTIVE   vm_state: active   task_state: null   power_state: 1
