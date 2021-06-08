---
permalink: elliptic-curve-operations
audit_date: '2021-05-07'
title: Command-line Elliptic Curve operations
type: article
created_date: '2019-11-01'
created_by: Shaun Crumpler
last_modified_date: '2021-05-07'
last_modified_by: Ana Corpus
product: Cloud Servers
product_url: cloud-servers
---

OpenSSL&reg; provides the following command-line tools to work with keys suitable for Elliptic Curve (EC) Cryptography algorithms:

-  `openssl ecparam`
-  `openssl ec`

Currently, OpenSSL supports the following EC algorithms:

 -  Elliptic Curve Diffie Hellman (ECDH) for key agreement
 -  Elliptic Curve Digital Signature Algorithm (ECDSA) for signing and verifying

`ecparams` and `ec` do not support the `x25519`, `ed25519`, and `ed448` curves. See
the `genpkey` subcommand for information about those curves.

### EC private key file formats

OpenSSL uses Privacy Enhanced Mail (PEM) files to  store EC private keys by 
default. These files contain base-64 encoded data and use the **.pem**
extension. The following example shows a private key file in PEM format.

    -----BEGIN EC PRIVATE KEY-----
    MIIBIAIBAQQYd8yhaE899FaH3sw8aD4F/vtpMVBLfVqmoIHKMIHHAgEBMCQGByqG
    SM49AQECGQD////////////////////+//////////8wSwQY////////////////
    /////v/////////8BBgiEj3COVoFyqdCPa7MyUdgp9RiJWvVaRYDFQDEaWhENd6z
    eMS2XKlZHipXYwWaLgQxBH0pd4EAxlodoXg3FliNziuLSu6OIo8YljipDyJjczcz
    S0nctmptyPmXisp2SKlDsAIZAP///////////////3pi0DHIP0KU9kDsEwIBAaE0
    AzIABBsl8ZSGJqcUpVoP8zekF92DGqDBMERcHhCXmgPXchP+ljybXbzYKINgxbp5
    0g9/pw==
    -----END EC PRIVATE KEY-----


The following example shows an encrypted private key file in PEM format.


    -----BEGIN EC PRIVATE KEY-----<br/>
    Proc-Type: 4,ENCRYPTED<br/>
    DEK-Info: DES-EDE3-CBC,258248872DB25390<br/>

    JIzhns0nRb+pj6RONAijJli8Rhu2bIrw8D+ruHEWL1IEH6Q5tvzqAI2PDYXbSzCn
    24JPWx9khmTu6ijerANNYYk0p2Pjxr12MAYpqgtXbRrXLF4AIomzYWq16BH7Y63o
    zvqWMBJO6tQ5RHPLM2FmweyPB/XSL7KvLTe+g6pz/W9wf52CyQ/VeK+yBXqEi7QF
    0f9EKRlePRLAUcQPD4nkckcywX6Nz+TW/SOKt38YytM9MyQsAfcxu7u0nl/dLylk
    n57qUm3nk0z0moYJbfLx59eP0/go8VjeP2fRKkgz1DOM7VkmtPrC7vnyRpKsnP2S
    6n6uacerkNXTmUcz7mTCGGfrsBeACJeX1gwinDZVwkzDxNKhLXOlFFAMWE+SeiFp
    kDny2v3D8sU=
    -----END EC PRIVATE KEY-----

The following example shows a private key file that uses the Public 
Key Cryptography Standard 8 (PKCS8) in PEM format.

    -----BEGIN PRIVATE KEY-----
    MIIBMAIBADCB0wYHKoZIzj0CATCBxwIBATAkBgcqhkjOPQEBAhkA////////////
    /////////v//////////MEsEGP////////////////////7//////////AQYIhI9
    wjlaBcqnQj2uzMlHYKfUYiVr1WkWAxUAxGloRDXes3jEtlypWR4qV2MFmi4EMQR9
    KXeBAMZaHaF4NxZYjc4ri0rujiKPGJY4qQ8iY3M3M0tJ3LZqbcj5l4rKdkipQ7AC
    GQD///////////////96YtAxyD9ClPZA7BMCAQEEVTBTAgEBBBiKtwssqrxHY/gu
    KDD4QgmyLDKaqBv2wEWhNAMyAAT5j6o+ojeB6jaFAfx4rtGf5hYbT1N6NnlAWiP1
    +bEWtTJiEVqnpeZN0m0SLybIGZY=``
    -----END PRIVATE KEY-----


The following example shows an encrypted PKCS8 private key file in PEM format:


    -----BEGIN ENCRYPTED PRIVATE KEY-----
    MIIBWTAbBgkqhkiG9w0BBQMwDgQIGIcvnv17Q8oCAggABIIBOK+i1pk7em94F0Bn
    +yKxU5p7e2+cnnW/8b2mjvga0Uj8JVxRHi5eR2/u+3fjHQItq0df+qzyVC0TTCPz
    YZVrgHO9hPilgbGQKQQSpy9bpbGGiZ7I+aFpriEaJzugHUi8XTXY6XtnxgHAqTOX
    nma2HHoGRic2wNgIGKQ+B1pULy2kFDMvQ/AwvYS13uH2Trfja9M9wRqYjM2MS0Ky
    ii03OsNhJjZQcPmy2ALciR+umG4IQ7qszfrCA7L95F3qVXa7DgAPDZyUSdF3ucSh
    IlrEvaP7FeLfJ1/ilUaXK6XC9EDYPDWMErUQJZJAywczQMqjY4/pdhb8Y+TpbN/r
    q1I5j+JbRwfvvJV7CAHv1EEjvWiWvjHamlb7iqh3gneOYPbvSfjuaOyVd5YhwQ7P
    nGOah+eEf9uyDSZabg==``
    -----END ENCRYPTED PRIVATE KEY-----


PKCS8 private key files support different private keys types, apart from the EC keys.
You can convert the files to use different private key types and set them as *encrypted*
or *unencrypted*. 

Use the following command to convert a PKCS8 file to a traditional encrypted EC key file:

`openssl ec -aes-128-cbc -in p8file.pem -out tradfile.pem`

Replace argument `-aes-128-cbc` with any other valid OpenSSL cipher name. (See the
[OpenSSL documentation](https://wiki.openssl.org/index.php/Main_Page#Reference)
for a list of valid cipher names.)

Use the following command to convert a PKCS8 file to a traditional unencrypted EC key file:

`openssl ec -in p8file.pem -out tradfile.pem`

Use the following command to convert an EC key file to encrypted PKCS8 format:

`openssl pkcs8 -topk8 -in tradfile.pem -out p8file.pem`

Use the following command to convert an EC key file to unencrypted PKCS8 format:

`openssl pkcs8 -topk8 -nocrypt -in tradfile.pem -out p8file.pem`

**Note**: The EC private key files are not encrypted by default. You must
explicitly set the file to encrypted and specify the cipher algorithm. The
PKCS8 files are encrypted by default. Use the `-nocrypt` option to set the 
file to unencrypted.

A PEM file is DER data encoded by using base 64 encoding rules, with a header 
and footer. PEM files are human-readable, so they are more convenient to use.
However, you can store all the files shown above in DER format. DER format 
is a binary format, and unlike a PEM file, it is not human-readable. 

Most `openssl` commands have options `-inform DER` and `-outform DER`.
`-inform DER` specifies that the input file is DER, and `-outform DER`
specifies that the output file is DER.

Use the following command to convert the PKCS8 format to a traditional
encrypted EC key in DER format.

`openssl ec -in p8file.pem -outform DER -out tradfile.der`

You cannot encrypt a traditional EC private key file in DER format. If
you attempt to do so, the command silently ignores the argument. However,
you can encrypt PKS8 files in DER format. 

Use the following command to convert a traditional EC key file to encrypted PKCS8 in DER format:

`openssl pkcs8 -topk8 -in tradfile.pem -outform DER -out p8file.der`

### EC public key file formats

PEM format supports several types of public keys in OpenSSL. The following
file shows EC public keys in PEM format. 


    -----BEGIN PUBLIC KEY-----
    MEkwEwYHKoZIzj0CAQYIKoZIzj0DAQMDMgAE+Y+qPqI3geo2hQH8eK7Rn+YWG09T
    ejZ5QFoj9fmxFrUyYhFap6XmTdJtEi8myBmW
    -----END PUBLIC KEY-----


Use the following command to create a public key file from a private key file
in PEM format. Note that it is not possible to create a private key file from
a public key file.

`openssl ec -in ecprivkey.pem -pubout -out ecpubkey.pem`

Use the following command to create a public key file from a private key file in DER format:

`openssl ec -in ecprivkey.pem -pubout -outform DER -out ecpubkey.der`

### Generating EC keys and parameters

The EC parameters file contains all the information necessary to define an
elliptic curve for cryptographic operations. OpenSSL uses ECDH and ECDSA
algorithms. Use the following command to obtain a list of built-in curves:

`openssl ecparam -list_curves`

Use the following command to generate an EC parameters file of curve `secp256k1`:

`openssl ecparam -name secp256k1 -out secp256k1.pem`

Replace `secp256k1` with any other name obtained from the `openssl ecparam -list_curves` command.

You can generate keys by using the `ecparam` command, either by using a
pre-existing parameters file or by using the name of the curve. Use the
following command to generate a private/public key pair from a parameters file:

`openssl ecparam -in secp256k1.pem -genkey -noout -out secp256k1-key.pem`

Use the following command to generate a private/public key pair from the name of the curve:

`openssl ecparam -name secp256k1 -genkey -noout -out secp256k1-key.pem`

The key file has the information of the parameters used to generate the key
embedded. OpenSSL stores the name of the curve in the parameters file or the
key file. It does not explicitly store the full set of parameters associated
with the name by default. Use the following command to confirm the name of
the curve in the parameters file:

`openssl ecparam -in secp256k1.pem -text -noout`

Example output:

`ASN1 OID: secp256k1`

Use the following command to list parameter details from a parameters file:

`openssl ecparam -in secp256k1.pem -text -param_enc explicit -noout`

Use the following command to list parameter details from the name of a curve,
substituting the name of the curve accordingly:

`openssl ecparam -name secp256k1 -text -param_enc explicit -noout`

Example output:

    Field Type: prime-field
    Prime:
        00:ff:ff:ff:ff:ff:ff:ff:ff:ff:ff:ff:ff:ff:ff:
        ff:ff:ff:ff:ff:ff:ff:ff:ff:ff:ff:ff:ff:fe:ff:
        ff:fc:2f
    A:    0
    B:    7 (0x7)
    Generator (uncompressed):
        04:79:be:66:7e:f9:dc:bb:ac:55:a0:62:95:ce:87:
        0b:07:02:9b:fc:db:2d:ce:28:d9:59:f2:81:5b:16:
        f8:17:98:48:3a:da:77:26:a3:c4:65:5d:a4:fb:fc:
        0e:11:08:a8:fd:17:b4:48:a6:85:54:19:9c:47:d0:
        8f:fb:10:d4:b8
    Order:
        00:ff:ff:ff:ff:ff:ff:ff:ff:ff:ff:ff:ff:ff:ff:
        ff:fe:ba:ae:dc:e6:af:48:a0:3b:bf:d2:5e:8c:d0:
        36:41:41
    Cofactor:  1 (0x1)


You can generate parameter files and key files that explicitly include the
full set of parameters instead of just the name of the curve. This is important
when some target systems don't *know* the details of the curve. OpenSSL version
1.0.2 added new curves, such as `brainpool512t1`. Earlier versions of OpenSSL
that use a parameter file or key file configured with `brainpool512t1` result
in the following error:

    bash$ openssl ecparam -in brainpoolP512t1.pem -text -noout
    unable to load elliptic curve parameters
    140138321110720:error:1009E077:elliptic curve routines:EC_ASN1_PKPARAMETERS2GROUP:ec group new by name failure:ec_asn1.c:1035:
    140138321110720:error:1009107F:elliptic curve routines:d2i_ECPKParameters:pkparameters2group failure:ec_asn1.c:1080:
    140138321110720:error:0906700D:PEM routines:PEM_ASN1_read_bio:ASN1 lib:pem_oth.c:83:

Use explicit parameters to avoid this problem, as shown in the following
command with OpenSSL 1.0.2:

`openssl ecparam -name brainpoolP512t1 -out brainpoolP512t1.pem -param_enc explicit`

The command yields a longer parameters file with all the parameters.

    -----BEGIN EC PARAMETERS-----
    MIIBogIBATBMBgcqhkjOPQEBAkEAqt2duNvpxIs/1OauM8n8B8swjbOzydIO1mOc
    ynAzCHF9TZsAm8ZoQq7NoSrmo4DmKIH/Ly2CxoUoqmBWWDpI8zCBhARAqt2duNvp
    xIs/1OauM8n8B8swjbOzydIO1mOcynAzCHF9TZsAm8ZoQq7NoSrmo4DmKIH/Ly2C
    xoUoqmBWWDpI8ARAfLu8+UQc+rduGJDkaITq4yH3DAvLSYFSeJdQS+w+NqYrzfoj
    BJdlQPZFAIXy2uFFwiVTtGV2NokYDqJXGGdCPgSBgQRkDs5cEniHF7nBugbLwqb+
    uoWEJFjFbd6dsXWNOcAxPYK6UXNc2z6kmap3p9aUOmT3o/Jf4m8GtRuqJpb6kDXa
    W1NL1ZX1rw+iyJI3bISs4btOMBm3FjTAETEVnK4DzunZkyGEvu8ha9cd8trfhqYn
    MG7P+W27i6zhmLYeAPizMgJBAKrdnbjb6cSLP9TmrjPJ/AfLMI2zs8nSDtZjnMpw
    MwhwVT5cQUypJhlBhmEZf6wQRx2x04EIXdrdtYeWgpypAGkCAQE=
    -----END EC PARAMETERS-----

Earlier versions of OpenSSL can process the parameters file. Use the
following command in OpenSSL version 1.0.1:

`openssl ecparam -in brainpoolP512t1.pem -text -noout`

OpenSSL version 1.0.1. displays the parameters even if it doesn't know
the curve.

Use the following command to generate a key file with explicit parameters:

`openssl ecparam -name brainpoolP512t1 -genkey -noout -out brainpoolP512t1-key.pem -param_enc explicit`

Earlier versions of OpenSSL can process the key file you obtain.

**Note**: After the parameters change to explicit parameters, don't
revert the changes. There is no utility to find which explicit parameters
correspond to a curve.

### References

-  [Elliptic Curve Cryptography](https://wiki.openssl.org/index.php/Elliptic_Curve_Cryptography)
-  [Elliptic Curve Diffie Hellman](https://wiki.openssl.org/index.php/Elliptic_Curve_Diffie_Hellman)
-  [Command Line Utilities](https://wiki.openssl.org/index.php/Command_Line_Utilities)

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).
