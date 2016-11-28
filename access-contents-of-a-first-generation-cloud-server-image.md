---
permalink: access-contents-of-a-first-generation-cloud-server-image/
node_id:
title: Access Contents of a First Generation Cloud Server Image
type: article
created_date: '2016-11-24'
created_by: Luke Repko
last_modified_date: '2016-11-28'
last_modified_by: Luke Repko
product: Cloud Servers
product_url: cloud-servers
---

This article describes how to access the contents of a first generation Rackspace cloud server image. Since first generation images cannot be used for next generation servers, the article guides you through the process of downloading the .tar.gz image parts, and concatenating and extracting those parts. This is mostly useful for data recovery situations, where file level backups may not exist but you need to access the data. This information does not guarantee the successful recovery of data but may help you to access the data contained within an image.

###Downloading your first generation server image

Using the [Cloud Control Panel](https://mycloud.rackspace.com), navigate to "Storage", and then, "Files" to view your Cloud Files containers. Image files will be stored within the, “cloudservers” container. If your image is larger than 5 GB, you can expect to see multiple image, “chunks”. It is important to download all of the tar.gz parts for a given image.

As an alternative to using the Cloud Control Panel, you may use a swift clients available to download your image from Cloud Files. One such popular client is **swiftly**, which is run from the command line. Using swiftly, it is simple to download all “chunks” of an image by invoking the, --prefix flag. If you do not have swiftly, install it by using pip. 

    pip install swiftly

The following example uses swiftly to download an image. Notice that we don't specify the full file name. This allows swiftly to systematically download all of the tar.gz parts.

    swiftly -v -A https://identity.api.rackspacecloud.com/v2.0 --region=ORD -U {username} -K {API_Key} get cloudservers --prefix={"image_name.tar"} --all-objects -o {local_download_directory/}
          
If you are looking for a swift client that is compatible with Windows, try [Cyberduck](https://cyberduck.io/). Configuration instructions for Rackspace Cloud Files can be found [here](https://trac.cyberduck.io/wiki/help/en/howto/cloudfiles). 
          
###Extracting your image in Linux

In the following example, we concatenate and extract the tar.gz image files using one command. It works with a single file also. Before executing the command, be sure all image files have successfully downloaded, and are located in the same directory. 

    cat {image_name.tar.gz.*} | pv | tar -zxf - -i
          
###What is, “pv” in that command?

PV, or pipe viewer, is used to monitor the progress of data through a pipe. It allows a user to see the progress of data through a pipeline, by giving information such as time elapsed, percentage completed (with progress bar), current throughput rate, total data transferred, and ETA. It is not necessary to use pv, however it is very convenient. As most linux distributions do not come with this package, you may need to install it. If you’d rather not use pv, execute the following command.

    cat {image_name.tar*} | tar -zxvf - -i
          
###Extracting your image in Windows

If there are multiple image parts, you will need to concatenate the files before decompressing and extracting the image. To do this in Windows, first open a command prompt at the directory where the image files were downloaded. The following command can be used to concatenate, or combine, the files. While copy is running, there will be no progress in the command prompt. For progress/status information, simply watch the file grow in explorer, or monitor disk I/O using task manager. 

    copy /b {image_name.tar.gz.*} {image_name.tar.gz}

Windows is not capable of extracting the tar.gz format natively, but many third party applications have the ability to extract this format. One popular open source application is [7zip](http://www.7-zip.org/). The extraction process is two pronged - the file must be decompressed, revealing ".tar" archive, which then must be unarchived. 

1. Right click the concatenated, "image_name.tar.gz" file, hover over, "7-Zip", and click, "Extract Here".
2. Right click on the decompressed, "image_name.tar" file, hover over, "7Zip", and click, "Extract Here".
          
###Viewing the image contents

The preceeding commands should result in the extraction of the image file(s) into a subdirectory named, "image", which will contain the file system. However, if there is another image file named "image.vhd" within this directory, it will need to be mounted separately, because the first generation infrastructure utilized several different versions of Xen (XenClassic and XenServer). Images taken on XenClassic were file level, while images taken on XenServer were block level. Mounting a VHD in Linux is possible, but we advise attaching the VHD to a virtual machine on your local workstation using VMware Workstation, or VirtualBox. If the image is a Windows Cloud Server image, mounting the VHD is an easier process, as shown in the following example. 

### Mounting a Windows VHD

1. Open Disk Management - open a run dialogue box, type "diskmgmt.msc", and then press enter).
2. Click, “Action” then “Attach VHD”.
3. Click, "Browse", locate the VHD, click "open", then "OK".
4. The disk will be visible in disk management, and a drive letter can now be assigned if not already present.
