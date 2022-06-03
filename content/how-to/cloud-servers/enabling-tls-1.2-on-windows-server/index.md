---
permalink: enabling-tls-1.2-on-windows-server
audit_date: '2022-06-03'
title: 'Enabling TLS 1.2 on Windows Server'
type: article
created_date: '2021-03-10'
created_by: Rackspace Support
last_modified_date: '2022-06-03'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---
Rackspace strongly recommends enabling the **Transport Layer Security (TLS)** protocol **1.2** or newer on Windows Server. [As of the end of 2020, TLS versions 1.0 and 1.1 are no longer supported.](https://blogs.windows.com/msedgedev/2020/03/31/tls-1-0-tls-1-1-schedule-update-edge-ie11/) This means that systems that don’t support TLS 1.2 or higher are now incapable of creating secure connections. 

**WARNING:** This article contains steps that tell you how to modify the registry. However, serious problems might occur if you modify the registry incorrectly. Therefore, make sure that you follow the steps carefully. For added protection, back up the registry before you modify it. Then, you can restore the registry if a problem occurs. For more information about how to back up and restore the registry, see [How to back up and restore the registry in Windows.](https://support.microsoft.com/en-us/topic/how-to-back-up-and-restore-the-registry-in-windows-855140ad-e318-2a13-2829-d428a2ab0692) 

### Prerequisites 
\- For Windows Server 2008 SP2, [KB4019276](https://www.catalog.update.microsoft.com/Search.aspx?q=KB4019276) must be installed.
\- For Windows Server 2008 R2, Windows Server 2008 R2 Service Pack 1 [KB976932](https://www.catalog.update.microsoft.com/Search.aspx?q=KB976932) must be installed.
\- The .NET framework on your server should be 4.5 or newer. 

### How to Enable TLS 1.2 manually.
Per the [TLS-SSL Settings article](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/dn786418(v=ws.11)?redirectedfrom=MSDN), for TLS 1.2 to be enabled and negotiated by Windows, the following registry locations, subkeys, and values must be set as follows:  
- TLS 1.2 Client subkey 
    - Registry location: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Client 
        - DWORD name: DisabledByDefault 
        - DWORD value: 0 
        - DWORD name: Enabled 
        - DWORD value: 1 
- TLS 1.2 Server subkey 
    - Registry location: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Server 
        - DWORD name: DisabledByDefault 
        - DWORD value: 0 
        - DWORD name: Enabled 
       -  DWORD value: 1 

### How to Enable TLS 1.2 with Powershell.
Execute the following commands in Powershell to enable TLS 1.2:
```powershell
# Make TSL 1.2 protocol registry keys.
md "HKLM:\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2" 
md "HKLM:\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Server" 
md "HKLM:\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Client" 

# Enable TLS 1.2 for client and server SCHANNEL communications.
new-itemproperty -path "HKLM:\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Server" -name "Enabled" -value 1 -PropertyType "DWord" 

new-itemproperty -path "HKLM:\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Server" -name "DisabledByDefault" -value 0 -PropertyType "DWord" 

new-itemproperty -path "HKLM:\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Client" -name "Enabled" -value 1 -PropertyType "DWord" 

new-itemproperty -path "HKLM:\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Client" -name "DisabledByDefault" -value 0 -PropertyType "DWord" 
```

**NOTE:** A reboot is required for the changes to go into effect.  

### Related articles
- [Plan for change: TLS 1.0 and TLS 1.1 soon to be disabled by default](https://blogs.windows.com/msedgedev/2020/03/31/tls-1-0-tls-1-1-schedule-update-edge-ie11/)
- [How to back up and restore the registry in Windows.](https://support.microsoft.com/en-us/topic/how-to-back-up-and-restore-the-registry-in-windows-855140ad-e318-2a13-2829-d428a2ab0692) 
- [Windows Update KB4019276](https://www.catalog.update.microsoft.com/Search.aspx?q=KB4019276)
- [Windows Update KB976932](https://www.catalog.update.microsoft.com/Search.aspx?q=KB976932)
- [TLS-SSL Settings - Microsoft](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/dn786418(v=ws.11)?redirectedfrom=MSDN)
</br>

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).