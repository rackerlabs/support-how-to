---
permalink: windows-low-disk-diagnostic
audit_date: '2020-05-12'
title: 'Windows low-disk diagnostics'
type: article
created_date: '2020-05-11'
created_by: Derek Benson
last_modified_date: '2020-05-12'
last_modified_by: Cat Lookabaugh
product: Cloud Servers
product_url: cloud-servers
---

**Note:** When running the scripts in this article, be sure to open PowerShell&reg; as an administrator.

### Check your current disk usage with PowerShell

When you diagnose low-disk space on a Windows&reg; server, start by verifying the current usage on your
disks by using PowerShell. Use the following command to pull the current disk utilization for all disks
on the server:

    Get-WmiObject Win32_LogicalDisk | Where-Object { $_.DriveType -eq "3" } | Select-Object SystemName,
          @{ Name = "Drive" ; Expression = { ( $_.DeviceID ) } },
          @{ Name = "Size (GB)" ; Expression = {"{0:N1}" -f( $_.Size / 1gb)}},
          @{ Name = "FreeSpace (GB)" ; Expression = {"{0:N1}" -f( $_.Freespace / 1gb ) } },
          @{ Name = "PercentFree" ; Expression = {"{0:P1}" -f( $_.FreeSpace / $_.Size ) } } |
          Format-Table -AutoSize | Out-String

### Check the top 15 folders by volume

After you determine which volumes are low on disk space, run the following script to determine the top
folders by disk usage so that you can determine where you can clear space:


    cd \
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
            }elseif($startFolder -match "c\:\\Windows"){$itemsum=(Get-ChildItem C:\Windows -force -Recurse -ErrorAction     SilentlyContinue | Measure-Object -property length -sum).sum;}
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

After you run the script, a message prompts you to **Input path to traverse**. Type in the drive letter 
that you found by using the previous script and press **Enter** to proceed. 

Keep in mind that this process can take a while depending on the number of files and folders on the disk. After
the script returns the results, check the folders listed to see if there are any files that are no longer
needed. Delete those files to free up disk space.

**Warning:** Make sure to delete only files or folders that you are familiar with. If you delete unknown files or
folders, you might lose important system files or software. This loss could cause the server or software to become
nonfunctional.
