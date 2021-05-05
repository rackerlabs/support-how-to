---
permalink: elliptic-curve-operations
audit_date:
title: Command-line Elliptic Curve operations
type: article
created_date: '2019-11-01'
created_by: Shaun Crumpler
last_modified_date: '2019-11-01'
last_modified_by: Catherine Richardson
product: Cloud Servers
product_url: cloud-servers
---

OpenSSL&reg; provides the following command-line tools for working with keys
suitable for Elliptic Curve (EC) Cryptography algorithms:

-  `openssl ecparam`
-  `openssl ec`

Currently, OpenSSL supports the following EC algorithms:

 -  Elliptic Curve Diffie Hellman (ECDH) for key agreement
 -  Elliptic Curve Digital Signature Algorithm (ECDSA) for signing/verifying

`x25519`, `ed25519`, and `ed448` aren't standard EC curves, so you can't use
`ecparams` or `ec` subcommands to work with them. If you need to generate
`x25519` or `ed25519` keys, see the `genpkey` subcommand.


### EC private key file formats

By default, OpenSSL works with Privacy Enhanced Mail (PEM) files for storing
EC private keys. These text files contain base-64 encoded data. A traditional
format private key file in PEM format looks similar to the
following example in a file with a `.pem` extension:

    -----BEGIN EC PRIVATE KEY-----
    MIIBIAIBAQQYd8yhaE899FaH3sw8aD4F/vtpMVBLfVqmoIHKMIHHAgEBMCQGByqG
    SM49AQECGQD////////////////////+//////////8wSwQY////////////////
    /////v/////////8BBgiEj3COVoFyqdCPa7MyUdgp9RiJWvVaRYDFQDEaWhENd6z
    eMS2XKlZHipXYwWaLgQxBH0pd4EAxlodoXg3FliNziuLSu6OIo8YljipDyJjczcz
    S0nctmptyPmXisp2SKlDsAIZAP///////////////3pi0DHIP0KU9kDsEwIBAaE0
    AzIABBsl8ZSGJqcUpVoP8zekF92DGqDBMERcHhCXmgPXchP+ljybXbzYKINgxbp5
    0g9/pw==
    -----END EC PRIVATE KEY-----


In an encrypted form, the example is similar to this:


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

You might also encounter Public Key Crytography Standard 8 (PKCS8) format
private keys in PEM files, which looks similar to the following example:

    -----BEGIN PRIVATE KEY-----
    MIIBMAIBADCB0wYHKoZIzj0CATCBxwIBATAkBgcqhkjOPQEBAhkA////////////
    /////////v//////////MEsEGP////////////////////7//////////AQYIhI9
    wjlaBcqnQj2uzMlHYKfUYiVr1WkWAxUAxGloRDXes3jEtlypWR4qV2MFmi4EMQR9
    KXeBAMZaHaF4NxZYjc4ri0rujiKPGJY4qQ8iY3M3M0tJ3LZqbcj5l4rKdkipQ7AC
    GQD///////////////96YtAxyD9ClPZA7BMCAQEEVTBTAgEBBBiKtwssqrxHY/gu
    KDD4QgmyLDKaqBv2wEWhNAMyAAT5j6o+ojeB6jaFAfx4rtGf5hYbT1N6NnlAWiP1
    +bEWtTJiEVqnpeZN0m0SLybIGZY=``
    -----END PRIVATE KEY-----


In an encrypted form, the example is similar to this:


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


PKCS8 private key files are capable of holding many different types of private
keys&mdash;not just EC keys.

You can convert between these formats if you like. All of the conversion
commands can read either the encrypted or unencrypted forms of the files.
However, you must specify whether you want the output to be encrypted or not.
To convert a PKCS8 file to a traditional encrypted EC format, use the following
command:

`openssl ec -aes-128-cbc -in p8file.pem -out tradfile.pem`

You can replace the first argument `aes-128-cbc` with any other valid
OpenSSL cipher name. (See the [OpenSSL documentation](https://wiki.openssl.org/index.php/Main_Page#Reference) for a list of valid cipher names.)

To convert a PKCS8 file to a traditional unencrypted EC format,  drop the
first argument:

`openssl ec -in p8file.pem -out tradfile.pem`

To convert from a traditional EC format to an encrypted PKCS8 format, use the
following command:

`openssl pkcs8 -topk8 -in tradfile.pem -out p8file.pem`

To convert to a non-encrypted PKCS8 format, use the following command:

`openssl pkcs8 -topk8 -nocrypt -in tradfile.pem -out p8file.pem`

**Note**: By default,  the traditional format EC private key files are not
encrypted. You have to explicitly state that the file should be encrypted and
specify the cipher to use. The opposite is true for PKCS8 files. The default
is to encrypt. You have to explicitly state that you do not want encryption
applied by using the `-nocrypt` option.

In addition to PEM format, all of the types of key files shown above can also
be stored in DER format. DER format is a binary format and is not directly
human-readable&mdash;unlike a PEM file. A PEM file is essentially DER data
encoded by using base 64 encoding rules, with a header and footer added.
PEM files are often more convenient to work with for this reason.

The openssl commands typically have options `-inform DER` or
`-outform DER` to specify that the input or output file is DER. For example,
the command to convert a PKCS8 file to a traditional encrypted EC format in
DER is the same as above, but with the addition of `-outform DER`, as shown
in the following example:

`openssl ec -in p8file.pem -outform DER -out tradfile.der`

**Note**: You cannot encrypt a traditional format EC private key in DER
format. If you attempt to do so, the argument is silently ignored. The
same is not true for PKCS8 files. These files can still be encrypted even in
DER format. For example, the following example converts a traditional format
key file to an encrypted PKCS8 format DER-encoded key:

`openssl pkcs8 -topk8 -in tradfile.pem -outform DER -out p8file.der`

### EC public key file formats

EC public keys are also stored in PEM files. A typical EC public key looks
like the following example:


    -----BEGIN PUBLIC KEY-----
    MEkwEwYHKoZIzj0CAQYIKoZIzj0DAQMDMgAE+Y+qPqI3geo2hQH8eK7Rn+YWG09T
    ejZ5QFoj9fmxFrUyYhFap6XmTdJtEi8myBmW
    -----END PUBLIC KEY-----


This format is used to store all types of public keys in OpenSSL, not just EC
keys.

It is possible to create a public key file from a private key file, although  
not the other way around, as shown in the following example:

`openssl ec -in ecprivkey.pem -pubout -out ecpubkey.pem`

As above, a DER-encoded version can be created using "-outform DER" by using
the following command:

`openssl ec -in ecprivkey.pem -pubout -outform DER -out ecpubkey.der`

### Generating EC keys and parameters

An EC parameters file contains all of the information necessary to define an
elliptic curve that you can then use for cryptographic operations (for OpenSSL,
this means ECDH and ECDSA). OpenSSL contains a large set of predefined curves
that you can use. You can obtain the full list of built-in curves by using the
following command:

`openssl ecparam -list_curves`

You can generate an EC parameters file for any of the built-in named curves
by using the following command:

`openssl ecparam -name secp256k1 -out secp256k1.pem`

Replace `secp256k1` with whichever curve you are interested in.

You can generate keys by using the `ecparam` command, either through a
pre-existing parameters file or directly by selecting the name of the curve.
To generate a private/public key pair from a pre-existing parameters file, use
the following command:

`openssl ecparam -in secp256k1.pem -genkey -noout -out secp256k1-key.pem`

To do the equivalent operation without a parameters file, use the following:

`openssl ecparam -name secp256k1 -genkey -noout -out secp256k1-key.pem`

Information on the parameters used to generate the key are embedded in the key
file itself.

By default, when creating a parameters file or generating a key, OpenSSL only
stores the name of the curve in the generated parameters file or key file, not
the full set of explicit parameters associated with that name. For example:

`openssl ecparam -in secp256k1.pem -text -noout`

This command simply confirms the name of the curve in the parameters file by
printing the following:

`ASN1 OID: secp256k1`

If you want to examine the specific details of the parameters associated with
a particular-named curve, you can achieve this by using the following command:

`openssl ecparam -in secp256k1.pem -text -param_enc explicit -noout`

The command shows the details for a built-in named curve from a file, but you
can also do directly by using the `-name` argument instead of `-in`. The
output looks similar to the following:


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


You can generate parameters and key files to include the full explicit
parameters instead of just the name of the curve if desired. This might be
important if, for example, not all the target systems know the details of the
named curve. OpenSSL version 1.0.2 added new named curves such
as **brainpool512t1**. Attempting to use a parameters file or key file in versions
of OpenSSL earlier than 1.0.2 with this curve results in the following error:


    bash$ openssl ecparam -in brainpoolP512t1.pem -text -noout
    unable to load elliptic curve parameters
    140138321110720:error:1009E077:elliptic curve routines:EC_ASN1_PKPARAMETERS2GROUP:ec group new by name failure:ec_asn1.c:1035:
    140138321110720:error:1009107F:elliptic curve routines:d2i_ECPKParameters:pkparameters2group failure:ec_asn1.c:1080:
    140138321110720:error:0906700D:PEM routines:PEM_ASN1_read_bio:ASN1 lib:pem_oth.c:83:


To avoid this problem, use explicit parameters instead. When you
use OpenSSL 1.0.2, you can create a parameters file like this:

`openssl ecparam -name brainpoolP512t1 -out brainpoolP512t1.pem -param_enc explicit`

If you look at the parameters file, you notice that it is much longer:

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


The full parameters are included rather than just the name. This can now be
processed by versions of OpenSSL earlier than 1.0.2. Using 1.0.1, use this
command:

`openssl ecparam -in brainpoolP512t1.pem -text -noout`

This correctly displays the parameters, even though this version of OpenSSL
does not know about this curve.

The same is true of key files. To generate a key with explicit parameters, use
the following:

`openssl ecparam -name brainpoolP512t1 -genkey -noout -out brainpoolP512t1-key.pem -param_enc explicit`

This key file can now be processed by versions of OpenSSL that do not know
about the brainpool curve.

**Note**: After the parameters have been converted from the curve name format
into explicit parameters, you cannot change them back again. There
is no utility to take a set of explicit parameters and work out which named
curve they are associated with.

### See also

-  [Elliptic Curve Cryptography](https://wiki.openssl.org/index.php/Elliptic_Curve_Cryptography)
-  [Elliptic Curve Diffie Hellman](https://wiki.openssl.org/index.php/Elliptic_Curve_Diffie_Hellman)
-  [Command Line Utilities](https://wiki.openssl.org/index.php/Command_Line_Utilities)
