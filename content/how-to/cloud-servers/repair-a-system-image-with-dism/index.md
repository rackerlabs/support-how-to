---
permalink: repair-a-system-image-with-dism
audit_date: '2020-07-23'
title: 'Repair a system image with DISM'
type: article
created_date: '2020-07-07'
created_by: Dave Myers
last_modified_date: '2020-07-23'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

Deployment Image Servicing and Management (DISM) is a Windows&reg; built-in
command-line tool used to prepare, modify, and repair Windows system images.
You can save images and use them to deploy and restore the Windows operating
system. Use DISM to repair your system when it does not boot properly, when you get
a blue screen error or when a System File Check (SFC) does not resolve it.

**Note** This task requires a user with administrative privileges on the server.

Open the **Command Prompt** or **PowerShell&reg;** and type the following commands, as needed.
Press **Enter** after typing each command to check and repair a Windows 10 system image.

 | `DISM /Online /Cleanup-Image /CheckHealth`    | Checks for corrupted files inside the local image, no repairs happen. |
 | `DISM /Online /Cleanup-Image /ScanHealth`     | Performs a deeper scan to check for corrupted files.|
 | `DISM /Online /Cleanup-Image /RestoreHealth`  | Runs an advanced scan and repairs image problems.|

<br>

#### Windows edition servicing commands

  | `/Set-ProductKey`     | Sets offline image product key.|
  | `/Get-TargetEditions` | Displays a list of Windows&reg editions that an image can be upgraded to.|
  | `/Get-CurrentEdition` | Displays current image's edition.|
  | `/Set-Edition`        | Upgrades an image to a higher edition.|

#### General commands

  | `/Optimize-Image`    | Performs specific configurations to an offline image.|

#### Default association commands

  | `/Remove-DefaultAppAssociations`   | Removes the default application associations from a Windows image. |
  | `/Import-DefaultAppAssociations`   | Imports a set of default application associations to a Windows image. |
  | `/Get-DefaultAppAssociations`      | Displays the list of default application associations from a Windows image. |
  | `/Export-DefaultAppAssociations`   | Exports the default application associations from a running operating system. |

#### AppX servicing commands

  | `/Set-ProvisionedAppxDataFile`   | Places custom data into the specified app package (.appx or .appxbundle). The specified application package must be in the image.|
  | `/Remove-ProvisionedAppxPackage` | Removes app packages (.appx or .appxbundle) from the image. App packages are not installed when new user accounts are created.|
  | `/Add-ProvisionedAppxPackage`    | Adds app packages (.appx or .appxbundle) to the image and installs them for each new user.|
  | `/Get-ProvisionedAppxPackages`   | Displays information about app packages (.appx or .appxbundle) in an image that are set to install for each new user.|

#### Unattended servicing commands

  | `/Apply-Unattend`        | Applies an unattended file to an image.|

#### Driver servicing commands

  | `/Remove-Driver`         | Removes driver packages from an offline image.|
  | `/Add-Driver`            | Adds driver packages to an offline image.|
  | `/Get-DriverInfo`        | Displays information about a specific driver in an offline image or a running operating system. |
  | `/Get-Drivers`           | Displays information about all drivers in an offline image or a running operating system. |
  | `/Export-Driver`         | Export all third-party driver packages from an offline image or a running operating system.|

#### International servicing commands

  | `/Set-LayeredDriver`     | Sets a keyboard layered driver. |
  | `/Set-UILang`            | Sets the default system UI language used in the mounted offline image. |
  | `/Set-UILangFallback`    | Sets the fallback default language for the system UI in the mounted offline image. |
  | `/Set-UserLocale`        | Sets the user locale in the mounted offline image. |
  | `/Set-SysLocale`         | Sets the language for non-Unicode programs (also called system locale) and font settings in the mounted offline image. |
  | `/Set-InputLocale`       | Sets the input locales and keyboard layouts to use in the mounted offline image.|
  | `/Set-TimeZone`          | Sets the default time zone in the mounted offline image. |
  | `/Set-AllIntl`           | Sets all international settings in the mounted offline image. |
  | `/Set-SKUIntlDefaults`   | Sets all international settings to the default values for the specified SKU language in the mounted offline image. |
  | `/Gen-LangIni`           | Generates a new lang.ini file.|
  | `/Set-SetupUILang`       | Defines the default language that will be used by setup. |
  | `/Get-Intl`              | Displays information about international settings and languages.|

#### Application servicing commands

  | `/Check-AppPatch`         | Displays information if the MSP patches apply to the mounted image.|
  | `/Get-AppPatchInfo`       | Displays information about installed MSP patches.|
  | `/Get-AppPatches`         | Displays information about all applied MSP patches for all installed applications. |
  | `/Get-AppInfo`            | Displays information about a specific installed MSI application. |
  | `/Get-Apps`               | Displays information about all installed MSI applications.|

#### Package servicing commands

  | `/Add-Package`            | Adds packages to the image. |
  | `/Remove-Package`         | Removes packages from the image. |
  | `/Enable-Feature`         | Enables a  specific feature in the image. |
  | `/Disable-Feature`        | Disables a specific  feature in the image. |
  | `/Get-Packages`           | Displays information about all  packages in the image. |
  | `/Get-PackageInfo`        | Displays information about a  specific package. |
  | `/Get-Features`           | Displays information about all  features in a package. |
  | `/Get-FeatureInfo`        | Displays information about a  specific feature. |
  | `/Cleanup-Image`          | Performs cleanup and recovery  operations on the image.|

For more information about these servicing commands and their arguments, specify
` /?` after a command, as shown in the following examples:

    DISM.exe /Image:C:\test\offline /Apply-Unattend /?
    DISM.exe /Image:C:\test\offline /Get-Features /?
    DISM.exe /Online /Get-Drivers /?
