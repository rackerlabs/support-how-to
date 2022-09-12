---
permalink: managing-duplicate-cron-jobs
audit_date: '2022-03-29'
title: Managing Duplicate Cron Job When Executing Scripts
type: article
created_date: '2022-03-29'
created_by: Pedro Montes de Oca
last_modified_date: '2022-03-29'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---
 
If during a set of times, you've observed a specific pattern on your Linux device triggering an alarm for a high CPU/memory usage, it is recommended to analyze the set of processes that where running at the time of the alarm.

During the analysis you might find that an specific process or script is running multiple instances simultaneously due to a duplicate call on a scheduled process (which was set up using cron jobs).

To prevent this from happening, you can use two alternatives:
 
## Setting up a **lock file**

Within the script, implement a procedure that verifies wether a file exists. If it doesn't, then the script will create it and continue executing as expected. If the file is not required once the script's complete, you can then delete it to ensure the next run of the job will not consider it as "in use".

## Setting up a **PID file** in BASH
 
Similar to the above-mentioned method, using a Process ID (PID) file relies on reading a file, with the difference that within this file, the PID of the running instance is placed, this will allow to validate that the process if the process is running, while the lock file only verifies that the script started running, disregarding if it's still running, or if it was paused/terminated before the file got removed.

### Steps to set this up:

Through the below code snippet, you can see a sample of the code that you would implement within your script.
The text that starts with a pound symbol (#) is a comment within the code, so it can be removed on the final implementation.

**NOTE:** Be aware that you first need to test if the script fits your needs. Do not assume it may work in the first try. Modifications may be needed.

```
# A. Define your PID file using the full path where it'll be located.
# Do not place your code within any /tmp folder as these get cleaned up automatically and might interfere with the expected behaviour of the script.

# B. Check if the PID file exists, if it does, it will run the intended function.
PIDFILE = /var/apps/testscript.pid

# 1. Read the content of our PID file (with cat), and assign it to the PID variable
if [ -f $PIDFILE ] then
    # 2. Verify if the content of the file is a running process
    PID = $(cat $PIDFILE)

    # In here, the '%?' variable obtains the exit code from our previous command
    ps -p $PID > /dev/null 2>&1

    # 3. If the content of the file is a process (an output equal to 0 means succesful), output a message, and exit the application.
    if [ $? -eq 0 ] then
        echo "Job is already running"
        exit 1
    else
        # 4. If the exit code was not succesful, we assume the process was not running, so we place the current process ID into the PID File
        echo $$ > $PIDFILE
        if [ $? -ne 0 ] then
        echo "Could not create PID file"
        exit 1
        fi
    fi
# C. If the PID file does not exist, it will attempt to create it, then run the code
else
    # 1. This outputs the current PID into the PID file:
    #  The '$$' value is a variable for the current PID.
    #  The '>' operand directs the output from echo to a file
    echo $$ > $PIDFILE

    # 2. If the exit code was not succesful, output an error message, and exit the application.
    if [ $? -ne 0 ]
    then
        echo "Could not create PID file"
        exit 1
    fi
fi

# *** In here you need to insert the original script code *** #

# D. Remove the PID file so we try to always have a "clean slate"
rm $PIDFILE
```

## Other solutions

Additional to the two above alternatives, there are different utilities that you can implement.

### Flock

   The flock command is a utility installed on newer Linux distributions that manages locks from shell scripts

   You can refer to the official documentation at the below URL to understand more about it's usage:
   - [https://manpages.ubuntu.com/manpages/xenial/man1/flock.1.html](https://manpages.ubuntu.com/manpages/xenial/man1/flock.1.html)

   The useful thing about flock is that the file lock will be kept in place until the original process completes, at that point flock will release the file lock. This is true whether the process completes successfully or unsuccessfully.

### Solo

   Solo is a Perl script that binds the execution of the script to a network port instead of a file, 
   
   You can refer to the official website to get more information:
   - [https://www.timkay.com/solo/](https://www.timkay.com/solo/).
     
   Similar to other implementations, this will create a lock that will only release after the assigned script completes:

   ```Perl
   $ ./solo -port=1234 /var/tmp/script.sh & 1234
   $ ./solo -port=1234 /var/tmp/script.sh
   solo(1234): Address already in use
   ```

   The advantage of binding a port instead of a file, is that a port cannot be deleted. Which with other implementations, would 'release' the existing lock, allowing duplicate instances of a job. 

## Additional notes

   While the above utilities and practices prevent running duplicate jobs, it is important to monitor the way your cronjobs interact as to avoid overlapping jobs or excesive use of resources that could hinder the performance of our device and operations.

### Related articles

- [Flock Command](https://manpages.ubuntu.com/manpages/xenial/man1/flock.1.html)
- [Solo PERL script](https://www.timkay.com/solo/).


<br>

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
