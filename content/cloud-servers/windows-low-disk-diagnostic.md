---
permalink: windows-low-disk-diagnostic/
audit_date:
title: 'Windows Low Disk Diagnostic'
type: article
created_date: '2020-05-11'
created_by: Derek Benson
last_modified_date:
last_modified_by:
product: Cloud Servers
product_url: cloud-servers
---

## Checking Current Disk Usage with Powershell

**Note:** When running the scripts in this article, be sure to open PowerShell as an administrator.

When diagnosing low disk space on Windows Server, you can start by verifying the current usage on your disks using powershell. The following command allows you to pull the current disk utilization of all disks on the server:

```Get-WmiObject Win32_LogicalDisk | Where-Object { $_.DriveType -eq "3" } | Select-Object SystemName,
          @{ Name = "Drive" ; Expression = { ( $_.DeviceID ) } },
          @{ Name = "Size (GB)" ; Expression = {"{0:N1}" -f( $_.Size / 1gb)}},
          @{ Name = "FreeSpace (GB)" ; Expression = {"{0:N1}" -f( $_.Freespace / 1gb ) } },
          @{ Name = "PercentFree" ; Expression = {"{0:P1}" -f( $_.FreeSpace / $_.Size ) } } |
          Format-Table -AutoSize | Out-String
```

## Checking the Top 15 Folders by Volume

**Note:** When running the scripts in this article, be sure to open PowerShell as an administrator.

After determining which volumes are low on disk space, the next step is to run the following script to determine the top folders by disk usage to determine where space can be cleared:


```cd \
$Table = Get-WmiObject Win32_Volume -ComputerName LocalHost `
| Format-Table Name, `
@{Name="Size(MB)";Expression={"{0:0,0.00}" -f($_.Capacity/1mb)}}, `
@{Name="Free Space(MB)";Expression={"{0:0,0.00}" -f($_.FreeSpace/1mb)}}, `
@{Name="Free (%)";Expression={"{0,6:P0}" -f(($_.FreeSpace/1mb) / ($_.Capacity/1mb))}};
$Table;$input = Read-Host -Prompt 'Input path to traverse'; Set-Location $Input;
function Get-LowDisk($maxResults=15, $startLocation=(Get-Location)){
    if("$startLocation".EndsWith("\")){$startLocation = "$startLocation".TrimEnd("\")}
    function Calc-Directories ($startFolder, $foldersHT=@{}, $depth=1){    $itemSum = 0L;
        if($startFolder -notmatch "c\:\\Windows|System Volume Information"){
            $dirList = Get-ChildItem ($startFolder) -force
            $folders = $dirList | Where-Object {$_.PSIsContainer -eq $True} | Where {($_.attributes.toString() -like "*ReparsePoint*") -eq $False};
            $files   = $dirList | Where-Object {!$_.PSIsContainer -eq $True};      if($files){$itemSum = ($files | Measure-Object -property length -sum).sum;}
            if(!$folders.Count -and $folders -ne $null){
                $subFolder = "$startFolder\" + $folders;
                $itemSum += Calc-Directories "$subFolder" $foldersHT ($depth+1);
            }else{
                for ($i=0;$i -lt $folders.Count; $i++ ){
                    $subFolder = "$startFolder\" + $folders[$i].Name;
                    if($depth -le 1){ Write-Progress -Activity "Finding Largest Folders" -status ":: Top Level Folders Progress :: $subFolder"-percentComplete ($i / $folders.count*100) -Id 1;}
                    $itemSum += Calc-Directories "$subFolder" $foldersHT ($depth+1);
            }   }
        }elseif($startFolder -match "c\:\\Windows"){$itemsum=(Get-ChildItem C:\Windows -force -Recurse -ErrorAction SilentlyContinue | Measure-Object -property length -sum).sum;}
        $foldersHT[$startFolder] = $itemSum;
        return $itemSum;
    }
    $elapsed = [System.Diagnostics.Stopwatch]::StartNew();
    $resultsHT = @{}; Calc-Directories $startLocation $resultsHT | Out-Null;
    $formattedOutput = $resultsHT.GetEnumerator() | sort value -desc | select -First $maxResults | Format-Table -AutoSize @{Expression={$_.Name};Label="Folder Name"}, @{Expression={($_.Value / 1GB)};Label="Size (GB)";Format="{0:N2}"};
    write-host "`r`n`r`n-- Total Disk Scan Time: $($elapsed.Elapsed.ToString()) --";
    $Table;
    write-host "`r`n-----------`r`nTop $maxResults folders by size`r`n-----------" -foregroundcolor "yellow";
    return $formattedOutput;
} Get-LowDisk 15 ;
```

After running the script, a prompt will appear that says "Input path to traverse". Type in the drive letter found using the previous script and press enter to proceed. 

Keep in mind that this can take a while depending on the number of files and folders on the disk. After the results are returned, check the folders listed to see if there are any files that are no longer needed to free up disk space.

**Warning:** Make sure to only delete files or folders that you are familiar with. Deleting unknown files or folders may cause important system or software files to be lost and could cause the server or software to become non-functional.
