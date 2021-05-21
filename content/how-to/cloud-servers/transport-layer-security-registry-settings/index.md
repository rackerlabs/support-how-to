---
permalink: /transport-layer-security-registry-settings/
audit_date:
title: 'Transport Layer Security (TLS) registry settings'
type: article
created_date: '2021-02-19'
created_by: David Fonseca
last_modified_date:
last_modified_by:
product:
product_url: 
---

# Transport Layer Security (TLS) registry settings
The article explains a little description related to some registries setting information for the Windows implementation of the Transport Layer Security (TLS) protocol and the Secure Sockets Layer (SSL) protocol through the Schannel Security Support Provider (SSP).
Applies to: Windows Server (Semi-Annual Channel), Windows Server 2019, Windows Server 2016, Windows 10

## CertificateMappingMethods
Does exist two methods for mapping clients certificates:
1. One-To-One Mappings - these mappings match individual client certificates to individual user accounts on a one-to-one basis; each client certificate is mapped to a user account.
2. Many-To-One Mappings - these mappings match multiple certificates to a user account based on subfields in client certificates.

Configuring this entry on your server each time a client presents a client certificate automatically associates that user with the appropriate Windows User Account
Registry path: HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL

## Ciphers and CipherSuites
To configure these records we are going to need TLS Cipher Suite Order, group policy MDM, or Powershell and will not cover in this article.

## ClientCacheTime
This entry controls the time that the operating system takes (in milliseconds) to expire client-side cache entries. If the value is 0 turns off the secure connection.
Registry path: HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL

## EnableOcspStaplingForSni
Online Certificate Status Protocol (OCSP) is a protocol used for obtaining the revocation status of an X.509 digital certificate during the TLS handshake. By activating this entry the webserver can reduce its workload.  
Registry path: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL
Add the following key: "EnableOcspStaplingForSni"=dword:00000001
To disable, set the DWORD value to 0: "EnableOcspStaplingForSni"=dword:00000000

## FIPSAlgorithmPolicy
Federal Information Processing (FIPS) are publicly announced standards developed by the National Institute of Standards and Technology for use in computer systems by non-military American government agencies and government contractors. Setting this entry controls FIPS compliance. The default is 0.
Registry path: HKLM SYSTEM\CurrentControlSet\Control\LSA

## Hashes
TLS/SSL hash algorithms should be controlled by configuring the Cipher Suite Order

## IssuerCacheSize
When the issuers do not map to an account the server might attempt to map the same issuer name repeatedly, hundreds of times per second. This entry controls the size of the issuer cache, and it is used with issuer mapping. This registry entry specifies the cache size. The default value is 100.
Registry path: HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL

## IssuerCacheTime
As IssuerCacheSize avoids multiply attempts to map the issuer to the server, you can limit the length of the cache timeout interval in milliseconds.
The default value is 10 minutes.
Registry path: HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL

## KeyExchangeAlgorithm - Client RSA key sizes
This entry controls the client RSA key size.
Registry path: HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\KeyExchangeAlgorithms\PKCS

If you want to specify a minimum length for the RSA key you should create a ClientMinKeyBitLength entry and assign the desired length. If this entry is not created the default value would be 1024 bits. However, if you specify a maximum length, create the ClientMaxKeyBitLength entry and change the desired value.

Note: Using key exchange algorithms should be controlled by configuring the cipher suite order.

## KeyExchangeAlgorithm - Diffie-Hellman key sizes
This entry controls the Diffie-Hellman key sizes. 
Registry path: HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\KeyExchangeAlgorithms\Diffie-Hellman

Note that the extra entries to specify a value of the Diffie-Helman key are the same for the RSA key. 
If you want to specify a minimum supported range of Diffie-Helman key you should create a ClientMinKeyBitLength entry and assign the desire bit length that you want. If this entry is not created the default value would be 1024 bits. However, if you specify a maximum support range, create the ClientMaxKeyBitLength entry and change the desired value. Finally, ServerMinKeyBitLength entry is used to specify the length for the TLS server default if not is configured the default value is 2048. 

Note: The use of key exchange algorithms should be controlled by configuring the cipher suite order.

## MaximumCacheSize
The cache elements can have a different size. Activating this entry you will set a maximum size cache. Setting the value to 0 disables the server-side session and avoiding reconnection.
Probably, activating this entry you can have an additional consumption of memory on your server.
The default value is 20,000 elements.
Registry path: HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL

## Messaging – fragment parsing
Each time a client tries to connect to a server with TLS a handshake message is stored on the server if the connection was successful. You can set a limit of size for the storage of those messages.
Setting the value 0x0 you can't storage handshake messages and causing the TLS to fail. The maximum allowed size can be increased up to 2^24-1 bytes.
Registry path: HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Messaging

## SendTrustedIssuerList
This entry is used only if you do not want to send any list of the trusted issuer to the client.
Registry path: HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL

## ServerCacheTime
This entry is used to set the time (in milliseconds) that the operating system takes to expire server-side cache entries. 
Registry path: HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL

A value of 0 disables the server-side session cache and prevents reconnection. Increasing ServerCacheTime above the default values causes Lsass.exe to consume additional memory. Each session cache element typically requires 2 to 4 KB of memory.
Default server cache time: 10 hours

For the following entries (SSL, TLS, and DTLS) if an SSPI app requests to use SSL/TLS/DTLS it will be denied, on the other hand, if an SSPI app explicitly requests to use SSL/TLS/DTLS, it may be negotiated.

## SSL 2.0
This subkey controls the use of SSL 2.0.
Registry path: HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols

To enable the SSL 2.0 protocol, create an Enabled entry (in Client or Server subkey) and change the value to 1. To disable it, change the value to 0.
To disable SSL 2.0 by default, create a DisabledByDefault entry and change the value to 1.

## SSL 3.0
This subkey controls the use of SSL 3.0.
Registry path: HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols

To enable the SSL 3.0 protocol, create an Enabled entry (in Client or Server subkey) and change the value to 1. To disable it, change the value to 0.
To disable SSL 3.0 by default, create a DisabledByDefault entry and change the value to 1. 

## TLS 1.0
This subkey controls the use of TLS 1.0.
Registry path: HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols

To enable the TLS 1.0 protocol, create an Enabled entry (in Client or Server subkey) and change the value to 1. To disable it, change the DWORD value to 0.
To disable TLS 1.0 by default, create a DisabledByDefault entry and change the value to 1. 

## TLS 1.1
This subkey controls the use of TLS 1.1.
Registry path: HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols

To enable the TLS 1.1 protocol, create an Enabled entry (in Client or Server subkey) and change the value to 1. To disable it, change the value to 0.
To disable TLS 1.1 by default, create a DisabledByDefault entry and change the value to 1. 

## TLS 1.2
This subkey controls the use of TLS 1.2.
Registry path: HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols

To enable the TLS 1.2 protocol, create an Enabled entry (in Client or Server subkey) and change the value to 1. To disable it, change the value to 0.
To disable TLS 1.2 by default, create a DisabledByDefault entry and change the value to 1. 

## DTLS 1.0
This subkey controls the use of DTLS 1.0.
Registry path: HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols

To enable the DTLS 1.0 protocol, create an Enabled entry (in Client or Server subkey) and change the value to 1. To disable it, change the value to 0.
To disable DTLS 1.0 by default, create a DisabledByDefault entry and change the value to 1.

## DTLS 1.2
This subkey controls the use of DTLS 1.2.
Registry path: HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols

To enable the DTLS 1.2 protocol, create an Enabled entry (in Client or Server subkey) and change the value to 1. To disable it, change the value to 0.
To disable DTLS 1.2 by default, create a DisabledByDefault entry and change the value to 1.
