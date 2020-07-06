---
layout: post
title: "Using Windows Virtual Desktop and FSLogix to accelerate working from home: Part 2"
date: 2020-05-28
comments: true
author: RAX Productivity Team
published: true
authorIsRacker: true
bio: "Rackspace's Microsoft® Productivity Solutions team provides best practice
solutions and expertise for complex problems spanning the Microsoft Windows
ecosystem to include Identity, Remote Work, Productivity and Collaboration. Our
team of Microsoft®-certified experts with over 20+ years of experience helps
customers choose, deploy and manage the best option to meet their unique business
needs."
categories:
    - General
metaTitle: "Using Windows Virtual Desktop and FSLogix to accelerate working from home: Part 2"
metaDescription: "The events unfolding in 2020 accelerated the adoption of remote work in ways no
one could have predicted. Consider WVD."
ogTitle: "Using Windows Virtual Desktop and FSLogix to accelerate working from home: Part 2"
ogDescription: "The events unfolding in 2020 accelerated the adoption of remote work in ways no
one could have predicted. Consider WVD."
---

This is part two of a three-part blog series on the ways Windows® Virtual Desktop
(WVD)  solves for work anywhere scenarios and provides some important
considerations for deploying the new service.

<!--more-->

This series of WVD posts includes:

- [Part one](https://developer.rackspace.com/blog/using-wvd-and-fslogix-part1/) to see what WVD is and what it solves for.
- [Part two](https://developer.rackspace.com/blog/using-wvd-and-fslogix-part2/) for more of the story and how FSLogix makes WVD easier.
- [Part three](https://developer.rackspace.com/blog/using-wvd-and-fslogix-part3/) for the gotchas and good to knows.

### Typical WVD architecture with FSLogix Profile Containers

Microsoft&reg; acquired FSLogix to provide, for any WVD-Licensed customer, the
optimum Windows 10 multi-session experience. The following diagram and
accompanying descriptions depict the flow of user logon in an environment by using
FSLogix with the Profile Container feature, redirecting the profile to an Server
Message Block (SMB) share on Azure&reg; NetApp&reg; files. By placing the contents
of the user's profile in a remote virtual hard disk (VHD), user profiles can be
mounted instantly regardless of their size, and the user doesn’t notice changes
to their profile if they move between hosts when they log off and back on.

![]({% asset_path 2020-05-28-using-wvd-and-fslogix-part1-and-2/Picture4.png %})

1.	**Client connection**: The client connects to a Remote Desktop Gateway service
   at [https://rdweb.wvd.microsoft.com](https://rdweb.wvd.microsoft.com).

2.	**WVD control plane**: The WVD control plane uses Microsoft Identity Provider
   in Azure Active Directory (AAD), allowing it to make use of advanced
   conditional access configurations. The access token granted at this level
   allows access only through the WVD gateway and does not yet authenticate to
   the local domain.

3.	**WVD session host**: The WVD agents running on the session hosts maintain a
   reverse-connect connection to the control plane. Using reverse-connect means
   that there are no special port requirements from either the client or session
   host, and the result is a much more reliable connection. One downside to this
   approach is some added network latency required for the HTTPS encapsulation.

4.	**Authentication**: After connecting through the Remote Desktop gateway, the
   client must authenticate with the local AD domain resulting in a second prompt
   for credentials. The credentials can be saved in the client to provide convenience.

5.	**FSLogix user profile storage**: After the Remote Desktop session connects,
   the FSLogix service on the session host mounts a VHD on a remote SMB share
   and uses Filter Driver technology to redirect IO operations for the user's
   profile to the VHD. FSLogix creates the VHD by using the user's local domain
   credentials, utilizing built-in NTFS permissions.

6.	**Azure AD Connect**: The diagram shows Azure AD Connect as an Azure virtual
   machine (VM) in this diagram, but it can live anywhere that has network access
   to both AD Domain Controllers and Azure cloud APIs. If you’re adding AD Connect
   for the purposes of WVD, and you’re already using other Office 365 services,
   be aware that this makes your hybrid cloud objects read-only for many
   management tasks. More on that later.

#### FSLogix Profile Containers

FSLogix Profile Containers utilize an SMB endpoint to create and mount VHDs for
each user profile. You must select a storage backend in Azure for this purpose.
The Microsoft documentation site has an
[excellent article](https://docs.microsoft.com/en-us/azure/virtual-desktop/fslogix-containers-azure-files)
on the different options available for storing FSLogix Profile Containers.
Rackspace has had great success in implementing Azure NetApp files for this
purpose, and it has become our preferred deployment.

Even though FSLogix Profile Containers solves a lot of the complexities with a
virtual desktop infrastructure (VDI) deployment, there are still many
customizations and operational considerations to account for.

#### VHD sizing

One of the biggest considerations when deploying FSLogix is how large do the
Profile Containers need to be. By default, FSLogix virtual disks are dynamic
and have a maximum size of 30 GB. This means that when your user first logs in,
their VHD takes up roughly 500 MB, and you can expect to have their profile grow
over time. If you set your maximum dynamic size too low, users can fill up the
VHD and see errors in applications. In order to recover from a full VHD, you
must disconnect the user, remotely mount the VHD, and use disk utilities to
extend the dynamic disk and partition.

#### NTFS permissions

FSLogix creates the folder and VHD, or mount one if it exists, by using the
user’s credentials when they connect. When you create the file share for FSLogix,
make sure to modify the default
[NTFS permissions](https://docs.microsoft.com/en-us/fslogix/fslogix-storage-config-ht)
so that the **Everyone** group doesn’t have access to all contents by default.
The permission model Microsoft provides allows users to create these items, and
then have the permissions to read or modify the items they create.

#### Bypassing FSLogix Containers

When FSLogix is installed, some local groups are created that direct which users
are included or excluded from the Office and Profile Containers. We recommend
adding the imaging user to the exclude group so that if there is an issue with
the FSLogix configuration, you can still log in.

The built-in groups are FSLogix ODFC Exclude List, FSLogix ODFC Include List,
FSLogix Profile Exclude List, and FSLogix Profile Include List. All users are
added to the FSLogix Profile Include List by default. If a user is both in the
Include and Exclude lists, the exclude permissions takes precedence.

#### Cleaning up unused disk space

FSLogix takes care of provisioning the VHDs for you, but there is no system that
is responsible for the following operational tasks. We recommend that you
carefully plan your profile management strategy and  remove VHDs of separated
employees.

#### Other FSLogix features

Per Microsoft, FSLogix is a set of solutions that enhance, enable, and simplify
non-persistent Windows computing environments. This article is focused heavily
on the Profile Container functionality of FSLogix, but that’s far from the only
useful feature provided by the tool. FSLogix solutions include:

- **Profile Containers**: Redirect user profile contents to a remotely attached
  VHD, providing portability for user sessions.

- **Office Containers**: The Profile Container normally contains the portion of
  the user profile that contains Microsoft Office data. If you have a requirement
  to redirect Office file operations to a separate VHD, then this feature helps.

- **Application containers**: Redirect an application’s folder contents to
  a remotely attached VHD. FSLogix dynamically attaches the VHD when the folder
  is accessed.

- **File and directory redirection**: You can configure redirection rules to
  automatically redirect IO operations for one path to another path.

- **Application masking**: Install more applications on a single image, and hide
  the applications from all but a specific allowed group.

- **Java version masking**: If you have applications that require varying versions
  of Java&ref;, you can create rules to only provide the old version of Java to
  that application.

See [Part three](https://developer.rackspace.com/blog/using-wvd-and-fslogix-part3/)
for the gotchas and good to knows.

Use the Feedback tab to make any comments or ask questions. You can also
[chat now](https://www.rackspace.com/#chat) to start the conversation.

<a class="cta teal" id="cta" href="https://www.rackspace.com/lp/work-anywhere-solution-microsoft-offer">Learn more about the Microsoft Work Anywhere solution.</a>
