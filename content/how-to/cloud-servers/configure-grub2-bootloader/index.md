---
permalink: configure-grub2-bootloader
audit_date: '2021-12-02'
title: 'Configure GRUB2 Bootloader'
type: article
created_date: '2021-12-02'
created_by: Jorge Mijangos
last_modified_date: '2021-12-02'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: clod-servers
---

In this article you will be able to understand the basics of GRUB configuration on Ubuntu or CentOS based distributions.

GRUB stand for (Grand Unified Bootloader), bootloader and is the first software program that runs when a computer starts. It is responsible for loading and transferring the control to an operating system kernel software. Each machine has the ability to store multiple kernels, that could be updates for the same OS version and even a completely different operative system. By default a computer can store three kernels, the newest and two previous versions.

### Glosary

Some of the most common menu entries worked here are detailed bellow:
|**Menu Entries** ||
| ----------- | ----------- |
| **Header** | Description|
|**GRUB_TIMEOUT** | Boot the default entry this many seconds after the menu is displayed, unless a key is pressed. The default is ‘5’. Set to ‘0’ to boot immediately without displaying the menu, or to ‘-1’ to wait indefinitely.|
|| If ‘GRUB_TIMEOUT_STYLE’ is set to ‘countdown’ or ‘hidden’, the timeout is instead counted before the menu is displayed.|
| **GRUB_DISTRIBUTOR** | Set by distributors of GRUB to their identifying name. This is used to generate more informative menu entry titles. |
| **GRUB_DEFAULT** |  The default menu entry. This may be a number, in which case it identifies the Nth entry in the generated menu counted from zero, or the title of a menu entry, or the special string ‘saved’. Using the id may be useful if you want to set a menu entry as the default even though there may be a variable number of entries before it.|
| **GRUB_DISABLE_SUBMENU** | Normally, grub-mkconfig will generate top level menu entry for the kernel with highest version number and put all other found kernels or alternative menu entries for recovery mode in submenu. For entries returned by os-prober first entry will be put on top level and all others in submenu. If this option is set to ‘true’, flat menu with all entries on top level will be generated instead. Changing this option will require changing existing values of ‘GRUB_DEFAULT’, ‘fallback’ (see fallback) and ‘default’ (see default) environment variables as well as saved default entry using grub-set-default and value used with grub-reboot.|
| **GRUB_TERMINAL_OUTPUT** | Select the terminal output device. You may select multiple devices here, separated by spaces.|
|| Valid terminal output names depend on the platform, but may include ‘console’ (native platform console), ‘serial’ (serial terminal), ‘serial_<port>’ (serial terminal with explicit port selection), ‘gfxterm’ (graphics-mode output), ‘vga_text’ (VGA text output), ‘mda_text’ (MDA text output), ‘morse’ (Morse-coding using system beeper) or ‘spkmodem’ (simple data protocol using system speaker). |
| **GRUB_CMDLINE_LINUX** | Command-line arguments to add to menu entries for the Linux kernel. |
| **GRUB_DISABLE_RECOVERY** | If this option is set to ‘true’, disable the generation of recovery mode menu entries.|
| **GRUB_ENABLE_BLSCFG** | BLS (Boot Loader Specification) defines a scheme and file format to manage boot loader configuration for each boot option in a drop-in directory, without the need to manipulate bootloader configuration files.|
| **GRUB_TIMEOUT_STYLE** | If this option is unset or set to ‘menu’, then GRUB will display the menu and then wait for the timeout set by ‘GRUB_TIMEOUT’ to expire before booting the default entry. Pressing a key interrupts the timeout.|
|| If this option is set to ‘countdown’ or ‘hidden’, then, before displaying the menu, GRUB will wait for the timeout set by ‘GRUB_TIMEOUT’ to expire. If ESC or F4 are pressed, or SHIFT is held down during that time, it will display the menu and wait for input. If a hotkey associated with a menu entry is pressed, it will boot the associated menu entry immediately. If the timeout expires before either of these happens, it will boot the default entry. In the ‘countdown’ case, it will show a one-line indication of the remaining time.|
| **GRUB_BACKGROUND** | Set a background image for use with the ‘gfxterm’ graphical terminal. The value of this option must be a file readable by GRUB at boot time, and it must end with .png, .tga, .jpg, or .jpeg. The image will be scaled if necessary to fit the screen.|

### How to configure GRUB2 in CentOS/RHEL based distributions. 

Create a backup of the current configuration in case something breaks and you need to recover the default version back.

```sh
# cp /etc/default/grub /etc/default/grub_COPY
```

Access to the GRUB configuration file with your favorite [text editor](https://docs.rackspace.com/support/how-to/command-line-text-editors-in-linux/). For this purporse, **vi** will be used.

```sh
# vi /etc/default/grub 
```

Usually on CentOS 7 the configuration file looks as below:

```sh
# cat /etc/default/grub_COPY 
    GRUB_TIMEOUT=5
    GRUB_DISTRIBUTOR="$(sed 's, release .*$,,g' /etc/system-release)"
    GRUB_DEFAULT=saved
    GRUB_DISABLE_SUBMENU=true
    GRUB_TERMINAL_OUTPUT="console"
    GRUB_CMDLINE_LINUX="crashkernel=auto resume=/dev/mapper/cl-swap rd.lvm.lv=cl/root rd.lvm.lv=cl/swap rhgb quiet"
    GRUB_DISABLE_RECOVERY="true"
    GRUB_ENABLE_BLSCFG=true
```

We are going to set a time out of 15 seconds, display menu entry and an image as a background. Our configuration with the new changes should look as follows:

```sh
# cat /etc/default/grub
    GRUB_TIMEOUT=15
    GRUB_DISTRIBUTOR="$(sed 's, release .*$,,g' /etc/system-release)"
    #GRUB_DEFAULT=saved
    GRUB_DISABLE_SUBMENU=true
    GRUB_TERMINAL_OUTPUT="gfxterm"
    GRUB_CMDLINE_LINUX="crashkernel=auto resume=/dev/mapper/cl-swap rd.lvm.lv=cl/root rd.lvm.lv=cl/swap rhgb quiet"
    GRUB_DISABLE_RECOVERY="true"
    GRUB_ENABLE_BLSCFG=true
    GRUB_BACKGROUND=/boot/grub2/Racks.png
```

**Note**: The image was placed in the directory /boot/grub2/ under the name of "Racks.png".

To make the changes take effect run this command.

```sh
 # grub2-mkconfig -o /boot/grub2/grub.cfg 
```

Reboot the server and you will be able to see the image that was selected in the GRUB configuration.

```sh
# shutdown -r now
 or
# systemctl reboot
```
{{<image src="grub1.png" alt="" title="">}}
 
#### How to configure GRUB2 in CentOS/RHEL based distributions in Rackspace Servers

Now is time to apply this on Rackspace servers, for this we need to clarify that we can not add a background image to be displayed at boot time, 

Be aware that background images are not available in cloud servers, the only thing that we will be covering is to set the menu option with a timeout of 15 seconds which is time enough to open the emergency console and select the desire kernel.

Create a backup of the current configuration in case something breaks and you need to recover the default version back.

```sh
# cp /etc/default/grub /etc/default/grub_COPY
```
 
The default configuration file looks as follows:

```sh
# cat /etc/default/grub_COPY
    GRUB_TIMEOUT=1
    GRUB_DISTRIBUTOR="$(sed 's, release .*$,,g' /etc/system-release)"
    GRUB_DEFAULT=saved
    GRUB_DISABLE_SUBMENU=true
    GRUB_TERMINAL_OUTPUT="console"
    GRUB_CMDLINE_LINUX="console=ttyS0,115200n8 no_timer_check net.ifnames=0 crashkernel=auto"
    GRUB_CMDLINE_LINUX="crashkernel=auto rhgb quiet"
    GRUB_DISABLE_RECOVERY="true"
    GRUB_ENABLE_BLSCFG=true
```
 
We are going to set a time out of 15 seconds, display menu entry and an image as a background. Our configuration with the new changes should look as follows:

```sh 
# cat /etc/default/grub
    GRUB_TIMEOUT=15
    GRUB_DISTRIBUTOR="$(sed 's, release .*$,,g' /etc/system-release)"
    GRUB_DISABLE_SUBMENU=true
    GRUB_TERMINAL_OUTPUT="console"
    GRUB_CMDLINE_LINUX="console=ttyS0,115200n8 no_timer_check net.ifnames=0 crashkernel=auto"
    GRUB_CMDLINE_LINUX="crashkernel=auto rhgb quiet"
    GRUB_DISABLE_RECOVERY="true"
    GRUB_ENABLE_BLSCFG=true
    GRUB_TIMEOUT_STYLE=menu
```   
    
Update the GRUB configuration file in order to changes take effect.

```sh
# grub2-mkconfig -o /boot/grub/grub.cfg
   Generating grub configuration file ...
   done
```

*My recommendation is that you already being logged into the portal in order to the 15 sec be enough to you see it on emergency console.*

```sh
# shutdown -r now
```
 
After reboot the server could be necessary click on emergency console several times until you see something like Image 3.

{{<image src="grub3.png" alt="" title="">}}

### How to configure GRUB2 in Ubuntu/Debian based distributions

For this we will set a timeout fo 10 seconds, display menu entry and an image as a background.
In order to display the image, we will use this entries.
 
```sh
GRUB_TERMINAL_OUTPUT="gfxterm"
GRUB_BACKGROUND="/boot/grub/rack.png"
```
Grub Ubuntu's Configuration file will be similar to this:
 
```sh
# cat /etc/default/grub
    GRUB_DEFAULT=0
    #GRUB_TIMEOUT_STYLE=hidden
    GRUB_TIMEOUT_STYLE=menu
    GRUB_TIMEOUT=10
    GRUB_DISTRIBUTOR=`lsb_release -i -s 2> /dev/null || echo Debian`
    GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
    GRUB_CMDLINE_LINUX=""
    GRUB_BACKGROUND="/boot/grub/rack.png"
    GRUB_TERMINAL_OUTPUT="gfxterm"
```

You could store the image in a different place, just specified the full path.
Update the the grub configuration with the next command.

```sh
# update-grub
```

After reboot the machine you will see something like Image 2.
 
```sh
# shutdown -r now
```
{{<image src="grub2.png" alt="" title="">}}

#### How to configure GRUB2 in Ubuntu/Debian based distributions in Rackspace Cloud Servers

Changes applied to /etc/default/grub won't be reflected on the configuration in **Ubuntu Cloud Servers**, Instead, changes must be applied to /etc/default/grub.d/50-cloudimg-settings.cfg.

As always backup the original file before any change or modification.

```sh 
# cp /etc/default/grub.d/50-cloudimg-settings.cfg /etc/default/grub.d/50-cloudimg-settings.cfg_COPY
```

```sh
# cat /etc/default/grub.d/50-cloudimg-settings.cfg_COPY
    # Cloud Image specific Grub settings for Generic Cloud Images
    # CLOUD_IMG: This file was created/modified by the Cloud Image build process
    
    # Set the recordfail timeout
    GRUB_RECORDFAIL_TIMEOUT=0
    
    # Do not wait on grub prompt
    GRUB_TIMEOUT=0
    
    # Set the default commandline
    GRUB_CMDLINE_LINUX_DEFAULT="console=tty1 console=ttyS0"
    
    # Set the grub console type
    GRUB_TERMINAL=console
```

Enable menu entry, set a timeout of 15 seconds and update GRUB configuration with your favorite text editor.

```sh
# cat /etc/default/grub.d/50-cloudimg-settings.cfg
    # Cloud Image specific Grub settings for Generic Cloud Images
    # CLOUD_IMG: This file was created/modified by the Cloud Image build process

    # Set the recordfail timeout
    #GRUB_RECORDFAIL_TIMEOUT=0

    # Do not wait on grub prompt
    GRUB_TIMEOUT=15
    GRUB_TIMEOUT_STYLE=menu

    # Set the default commandline
    GRUB_CMDLINE_LINUX_DEFAULT="console=tty1 console=ttyS0"

    # Set the grub console type
    GRUB_TERMINAL=console
```

Update the GRUB configuration file in order to changes take effect.

```sh
# update-grub
    Sourcing file `/etc/default/grub'
    Sourcing file `/etc/default/grub.d/50-cloudimg-settings.cfg'
    Generating grub configuration file ...
    Found linux image: /boot/vmlinuz-4.15.0-143-generic
    Found initrd image: /boot/initrd.img-4.15.0-143-generic
    Found linux image: /boot/vmlinuz-4.15.0-135-generic
    Found initrd image: /boot/initrd.img-4.15.0-135-generic
    done
```
 
After reboot the machine you will see something like Image 4.

```sh
# shutdown -r now
```

{{<image src="grub4.png" alt="" title="">}}

> Consider as rule of thumb to be already logged into your Rackspace portal for those 15 seconds to be enough to check the emergency console, also be aware that after the reboot, it may be necessary three attempts to see the emergency console.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
