---
permalink: transport-layer-security-registry-settings/
audit_date: '2021-05-24'
title: 'Transport Layer Security (TLS) registry settings'
type: article
created_date: '2021-02-19'
created_by: David Fonseca
last_modified_date: '2021-05-24'
last_modified_by: Rose Morales
product: Cloud Servers
product_url: cloud-servers
---

The article describes some registry setting information for
the Windows&reg; implementation of the Transport Layer Security (TLS) protocol and
the Secure Sockets Layer (SSL) protocol through the Schannel Security Support
Provider (SSP).

**Note**: Applies to Windows Server (Semi-Annual Channel), Windows Server 2019,
Windows Server 2016, and Windows 10.

The following sections address specific registry setting parameters:

### CertificateMappingMethods

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL`

Two methods exist for mapping client certificates:

- **One-to-one mappings**: These mappings match individual client certificates to
   individual user accounts on a one-to-one basis. Each client certificate maps
   to a user account.

- **Many-to-one mappings**: These mappings match multiple certificates to a user
   account based on subfields in the client certificates.

Configuring this entry on your server each time a client presents a client
certificate automatically associates that user with the appropriate Windows User
Account.

### Ciphers and cipher suites

To configure these records, you need the TLS cipher suite order, group policy MDM, or
PowerShell&reg;, and this article does not cover the configuration.

### ClientCacheTime

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL`

This entry controls the time that the operating system takes (in milliseconds)
to expire client-side cache entries. If the value is `0`, it turns off the secure
connection.

### EnableOcspStaplingForSni

Online Certificate Status Protocol (OCSP) is a protocol used for obtaining the
revocation status of an X.509 digital certificate during the TLS handshake. By
activating this entry, the webserver can reduce its workload.  

Registry path: `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL`

Add the following key: `"EnableOcspStaplingForSni"=dword:00000001`

To disable, set the **DWORD** value to 0: `"EnableOcspStaplingForSni"=dword:00000000`

### FIPSAlgorithmPolicy

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\LSA`

The National Institute of Standards and Technology publicly announces Federal Information
Processing (FIPS) standards developed for use in computer systems by non-military American
government agencies and government contractors. Setting this entry controls FIPS compliance.
The default is `0`.

### Hashes

Configuring the cipher suite order should control TLS/SSL hash algorithms. 

### IssuerCacheSize

When the issuers do not map to an account, the server might attempt to map the
same issuer name repeatedly, hundreds of times per second. You use this entry,
which controls the size of the issuer cache, with issuer mapping. This registry
entry specifies the cache size, and the default value is `100`.

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL`

### IssuerCacheTime

As **IssuerCacheSize** avoids multiply attempts to map the issuer to the server,
you can limit the length of the cache timeout interval in milliseconds.
The default value is 10 minutes.

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL`

### KeyExchangeAlgorithm: Client RSA key sizes

This entry controls the client RSA key size.

Registry path: `HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\KeyExchangeAlgorithms\PKCS`

If you want to specify a minimum length for the RSA key, you should create a
`ClientMinKeyBitLength` entry and assign the desired length. If you don't create
this entry, the default value is 1024 bits. However, if you specify a maximum
length, create the `ClientMaxKeyBitLength` entry and change the desired value.

**Note**: Configuring the cipher suite order should control using key exchange
algorithms. 

### KeyExchangeAlgorithm: Diffie-Hellman key sizes

This entry controls the Diffie-Hellman key sizes.

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\KeyExchangeAlgorithms\Diffie-Hellman`

Note that the extra entries to specify a value of the Diffie-Helman key are the
same as the RSA key. If you want to specify a minimum supported range of
Diffie-Helman key you should create a **ClientMinKeyBitLength** entry and assign the
desire bit length that you want. If you don't create this entry, the default value
is 1024 bits. If you specify a maximum support range, create the
**ClientMaxKeyBitLength** entry and change the desired value. Finally, use the
**ServerMinKeyBitLength** entry to specify the length for the TLS server
default. If not, the default value is 2048.

**Note**: Configuring the cipher suite order should control using key exchange
algorithms.

### MaximumCacheSize

The cache elements can have different sizes. When you activate this entry, you set
a maximum size cache. Setting the value to `0` disables the server-side session
and avoids reconnection. Probably, by activating this entry, you get
additional memory consumption on your server. The default value is 20,000 elements.

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL`

### Messaging: fragment parsing

Each time a client tries to connect to a server with TLS and the connection is
successful, the system stores a handshake message on the server. You can set a
size limit for the storage of those messages. When you set the value to `0x0`,
you can't store handshake messages, which causes the TLS to fail. You can
increase the maximum allowed size to 2^24-1 bytes.

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Messaging`

### SendTrustedIssuerList

Use this entry only if you do not want to send any list of the trusted
issuers to the client.

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL`

### ServerCacheTime

Use this entry to set the time (in milliseconds) that the operating system takes to
expire server-side cache entries.

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL`

A value of `0` disables the server-side session cache and prevents reconnection.
Increasing **ServerCacheTime** above the default values causes **Lsass.exe** to
consume memory. Each session cache element typically requires 2 to 4 KB of memory.
Default server cache time is 10 hours.

If the entry is disabled by default using the DisabledByDefault entry, and an
SSPI app explicitly request to use SSL, TLS, or DTLS, it may be negotiated.

### SSL 2.0

This subkey controls the use of SSL 2.0.

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols`

To enable the SSL 2.0 protocol, create an **Enabled** entry (in the Client or Server
subkey) and change the value to `1`. To disable it, change the value to `0`. To
disable SSL 2.0 by default, create a **DisabledByDefault** entry and change the
value to `1`.

### SSL 3.0

This subkey controls the use of SSL 3.0.

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols`

To enable the SSL 3.0 protocol, create an **Enabled** entry (in the Client or Server
subkey) and change the value to `1`. To disable it, change the value to `0`. To
disable SSL 3.0 by default, create a **DisabledByDefault** entry and change the
value to `1`.

### TLS 1.0

This subkey controls the use of TLS 1.0.

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols`

To enable the TLS 1.0 protocol, create an **Enabled** entry (in the Client or Server
subkey) and change the value to `1`. To disable it, change the **DWORD** value to `0`.
To disable TLS 1.0 by default, create a **DisabledByDefault** entry and change the
value to `1`.

### TLS 1.1

This subkey controls the use of TLS 1.1.

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols`

To enable the TLS 1.1 protocol, create an **Enabled** entry (in the Client or Server
subkey) and change the value to `1`. To disable it, change the value to `0`. To
disable TLS 1.1 by default, create a **DisabledByDefault** entry and change the
value to `1`.

### TLS 1.2

This subkey controls the use of TLS 1.2.

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols`

To enable the TLS 1.2 protocol, create an **Enabled** entry (in the Client or Server
subkey) and change the value to `1`. To disable it, change the value to `0.` To
disable TLS 1.2 by default, create a **DisabledByDefault** entry and change the
value to `1`.

### DTLS 1.0

This subkey controls the use of DTLS 1.0.

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols`

To enable the DTLS 1.0 protocol, create an **Enabled** entry (in the Client or Server
subkey) and change the value to `1`. To disable it, change the value to `0`. To
disable DTLS 1.0 by default, create a **DisabledByDefault** entry and change the
value to `1`.

### DTLS 1.2

This subkey controls the use of DTLS 1.2.

Registry path: `HKLM SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols`

To enable the DTLS 1.2 protocol, create an **Enabled** entry (in the Client or Server
subkey) and change the value to `1`. To disable it, change the value to `0`. To
disable DTLS 1.2 by default, create a **DisabledByDefault** entry and change the
value to `1`.
