---
permalink: id-federation-map-policies-permissions-cloud
audit_date: '2018-11-12'
title: 'Identity federation for Rackspace Cloud: Map policies and permissions'
type: article
created_date: '2018-11-15'
created_by: Kate Dougherty
last_modified_date: '2018-11-16'
last_modified_by: Kate Dougherty
product: General
product_url: general
---

You can use Rackspace Identity Federation to configure your corporate
security and identity systems to enable your employees to use their
regular company credentials to authenticate to Rackspace accounts.

Authentication is based on the Security Assertion Markup Language (SAML) 2.0
protocol. The SAML messages that are exchanged between an Identity Provider
and Rackspace are interpreted by an _Attribute Mapping Policy_. This YAML
Ain't Markup Language (YAML)-formatted policy maps SAML attributes
to Rackspace required roles and permissions.

An Attribute Mapping Policy is composed of one or more rules. These rules
assign local values that are attached to a user after they log in to
Rackspace, based on explicit or remote values in the SAML exchange from
your third-party provider.

**Note**: You must create a separate Attribute Mapping Policy for each
Identity Provider that you want to use to log in to Rackspace.

This article shows you how to create and customize an Attribute Mapping Policy.

### Prerequisites

Before you create an Attribute Mapping Policy for your existing Identity
Provider, you should have an understanding of the following languages:

- **SAML 2.0**: SAML is a standard for defining eXtensible Markup Language
  (XML)-encoded _assertions_ about authentication, authorization, and related
  attributes.

- **XPath 2.0**: XML Path Language (XPath) is a World Wide Web Consortium
  (W3C) standard expression language for extracting information from
  structured data. The language is designed to be embedded in a host language,
  and the mapping policy language uses it in this way.

- **YAML 1.1**: YAML is a simple data serialization language that's designed
  to be human friendly. YAML is very similar to Javascript Object Notation
  (JSON) but supports useful features such as comments and the ability to
  easily input multi-line data. Attribute Mapping Policies are written in YAML.

### Configure your SAML provider to work with Rackspace Identity Federation

Before you can create an Attribute Mapping Policy, you first need to configure
SAML attributes and assertions in your SAML provider, such as Microsoft&reg;
Active Directory&reg; Federation Services (AD FS) or Okta&trade;.

The SAML attributes and assertions that you configure in your SAML provider
are sent to Rackspace so that they can be mapped into Rackspace permissions.

**Note**: You can programmatically retrieve the default values for connecting
your SAML provider to Rackspace by downloading the [Rackspace service provider
metadata
file](https://login.rackspace.com/federate/sp.xml), then uploading it to your
SAML provider.

For instructions, see the following reference that corresponds to your SAML
provider:

- [Configure AD FS](https://docs.rackspace.com/docs/rackspace-federation/config-3p-saml/config-adfs/adfs-setup/)
- [Configure Okta](https://docs.rackspace.com/docs/rackspace-federation/config-3p-saml/config-okta/)
- [SAML configuration items](https://docs.rackspace.com/docs/rackspace-federation/config-3p-saml/generic-3p-saml/#saml-configuration-items)

#### Export the SAML metadata

Next, you need to export a SAML metadata file from your SAML provider. This
file contains XML-encoded assertions about authentication, authorization, and
related attributes.

Most identity systems have a method for generating this metadata file either
automatically or after some basic configuration has been completed.

For specific instructions for exporting a SAML metadata file from Okta, see
[Configure
Okta](https://docs.rackspace.com/docs/rackspace-federation/config-3p-saml/config-okta/okta-setup/).

### Add your Identity Provider to your Rackspace account

 You can configure your Identity Provider with Rackspace in the Cloud Control
 Panel.

**Note**: You can also create a new Identity Provider by using the Rackspace
Identity Federation API. However, we recommend that you perform this task in
the Cloud Control Panel.

Use the following steps to configure your Identity Provider with Rackspace:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, select **Account > User Management**.
3. Click the **Identity Federation** tab.
4. Click **Add Identity Provider**.
4. In the **Description** field, enter a description for your Identity
   Provider. The description should be unique for this Identity Provider.
5. In the **Email Domains** section, click **Add Domain**, then enter the
   email domain that users logging in from your organization use, such as
   **mycompany.com**. The email domain should be unique for this Identity
   Provider.

   **Note**: Do not enter an email format (such as <email>@mycompany.com) in
   this field.

   If your users log in from multiple email domains using this Identity
   Provider, repeat this step and enter the additional email domains.

6. In the **SAML Metadata** section, click **Choose File**, then browse to the
   XML file that you downloaded from your Identity Provider in the previous
   section.

7. After the XML file is attached, click **Create Identity Provider**.

### Default Attribute Mapping Policy

A default Attribute Mapping Policy is generated when you create an Identity
Provider by using the Cloud Control Panel or the Rackspace Identity Federation
API. This policy shows the default attributes that are required for users
logging in to Rackspace, as shown in the following example:

    mapping:
        rules:
            local:
                user:
                    domain: {D}
                    name: {D}
                    email: {D}
                    roles: {D}
                    expire: {D}
        version: "RAX-1"

However, you must customize the default Attribute Mapping Policy to use
specific values before your users log in or are able to use Rackspace products
and services.

### Customize the default Attribute Mapping Policy

This section shows you how to retrieve, customize, and upload your default
Attribute Mapping Policy to Rackspace.

#### Retrieve your default Attribute Mapping Policy

You can retrieve your default Attribute Mapping Policy from the Cloud Control
Panel by using the following steps:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, select **Account > User Management**.
3. Click the **Identity Federation** tab.
4. Select the Identity Provider whose mapping policy you want to update.
5. In the **Attribute Mapping Policy** section, click **Download**.

You can also retrieve the policy by using the [Get IDP mapping
policy](https://docs.rackspace.com/docs/cloud-identity/v2/api-reference/identity-provider-operations/#get-idp-mapping-policy) API endpoint.

#### Edit the mappings in your default Attribute Mapping Policy

This section shows you how to edit your default Attribute Mapping Policy.

We recommend that you start by reading [Attribute mapping
basics](https://docs.rackspace.com/docs/rackspace-federation/config-attribute-mapping/full-roles/).

##### Required SAML attributes

Your Attribute Mapping Policy must contain the following information:

- A minimum of one local rule.
- Static or dynamically-populated values for the fields in the following table:

<table>
  <tr>
    <th>Field</th>
    <th>Description</th>
    <th>Format</th>
    <th>Common values</th>
  </tr>
  <tr>
    <td>domain</td>
    <td>The Identity or Account Domain that the Identity Provider is authorized to log users in to.</td>
    <td>Alphanumeric string</td>
    <td>Must be set to your Identity Domain. <br />The domain is listed on the Identity Provider details page for your Identity Provider.</td>
  </tr>
  <tr>
    <td>name</td>
    <td>The username of your user as provided by your identity system.</td>
    <td>Alphanumeric string</td>
    <td>SAML attributes:<br />NameID (persistent type preferred)<br /><code>urn:oid:1.3.6.1.4.1.5923.1.1.1.6https://schemas.xmlsoap.org/ws/2005/05/identity/claims/name</code></td>
  </tr>
  <tr>
    <td>email</td>
    <td>The email address of your user as provided by your identity system.</td>
    <td>RFC-valid email address</td>
    <td>SAML Attributes:<br /> email<br /> https://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress <br />urn:oid:1.2.840.113549.1.9.1.10.9.2342.19200300100.1.3</td>
  </tr>
  <tr>
    <td>roles</td>
    <td>The product RBAC (role-based access control) roles that you want to assign to the user.</td>
    <td>YAML array of alphanumeric strings</td>
    <td>Example:<br /><code>roles:</code><br /> - <code>"nova:admin"</code><br />- <code>"lbaas:observer"</code></td>
  </tr>
  <tr>
    <td>expires</td>
    <td>The timeout before users must re-authenticate with your identity system.</td>
    <td>International Standards Organization (ISO)  format time values</td>
    <td>Example: <code>"PT12H"</code> (12 hours)<br /><br /><i>or</i><br /><br />SAML Attributes<br /><br />SessionNotOnOrAfter<br /> NotOnOrAfter</td>
  </tr>
</table>

#### Set values with Attribute Mapping

You can set values either explicitly, or by using Attribute Mapping Policy
language features such as substitutions or XPath.

The following example syntax uses inline substitutions in the local rule to
concisely retrieve values and simplify the policy. There are additional ways
to accomplish the same scenario. For more examples and a complete guide to the
Attribute Mapping Policy language, see the
[Attribute Mapping Policy reference
guide](https://docs.rackspace.com/docs/rackspace-federation/attribmap-reference/#attribmap-reference).

<table>
  <tr>
    <th>Method</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>Default</td>
    <td>Retrieves the value by looking for common locations or labels for the field. Only an attribute with the same name as the field is matched. For example, name: <code>"{D}"</code> matches the attribute with the name <code>name</code>.</td>
    <td><code>name: "{D}"</code></td>
  </tr>
  <tr>
    <td>Explicit</td>
    <td>Directly inputs the values into the Attribute Mapping Policy fields. This is most useful for values that don't change for any federated user logging in because they are applied to all federated users for this Identity Provider.</td>
    <td><code>expire: "PT12H"</code></td>
  </tr>
  <tr>
    <td>Attribute matching</td>
    <td>Uses XPath to match a SAML attribute in your SAML assertion by name, returning one or more values.</td>
    <td>Single value return (<code>At</code>): <code>email: "{At(urn:oid:1.2.840.113549.1.9.1.1)}"</code><br />Multi value return (<code>Ats</code>): <br /><code>groups:</code><br /> <code>multiValue: true</code><br /><code>value: "{Ats(https://schemas.xmlsoap.org/claims/Group)}"</code></td>
  </tr>
  <tr>
    <td>Path matching</td>
    <td>Uses XPath to match the path to a value in your SAML assertion by using the XML hierarchy or schema.</td>
    <td><code>"{Pt(/saml2p:Response/saml2:Assertion/saml2:Conditions/@NotOnOrAfter[1])}"</code><br><br>Retrieves the value of <code>NotOnOrAfter</code>.</td>
  </tr>
</table>

#### Example policy with the required attributes

The following Attribute Mapping Policy example uses explicit and SAML-provided
values to map the required fields. Note that it is a basic example, and
more customization might be required in some cases.

    mapping:
     version: "RAX-1"
      # Comments are allowed in YAML
     rules:
     - local:
        user:
           domain: "636462353"
           # Domain must be set to your Identity Domain
           name: "{D}"
           #  Username will be set from element named "name" value in your SAML
           email: "{At(https://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress)}"
           #  Locates the attribute with the above URL as the claim type/name
           roles:
           - "nova:observer"
           - "lbaas:admin"
           #  Assigns the roles explicitly listed above
           expire: "{Pt(/saml2p:Response/saml2:Assertion/saml2:Conditions/@NotOnOrAfter[1])}"
           #  Retrieves the NotOnOrAfter value by using the SAML path and XPath

**Note**: For considerations for specific third-party SAML providers, see
[Configure Third-Party SAML
providers](https://docs.rackspace.com/docs/rackspace-federation/config-3p-saml/#index-configuring-3p-saml-ug).

#### Assign Rackspace permissions

This section provides examples of assigning Rackspace permissions.

##### Basic example

All Rackspace permissions for federated users are granted through roles
that are assigned in the Attribute Mapping Policy.

The following code block shows a basic example of an Attribute Mapping Policy:

    mapping:
     version: RAX-1
     rules:
     - local:
        user:
           domain: '999994919999'
           email: "{At(https://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress)}"
           expire: "PT12H"
           name: "{D}"
           roles:
            - "admin"
            - "ticketing:admin"

In this example, the `admin` and `ticketing:admin` roles are explicitly
assigned to any users who log in by using this Identity Provider and Attribute
Mapping Policy.

For basic Identity Federation setups, this example might be sufficient.

For a full list of Rackspace Cloud product roles, see the [Rackspace Cloud
roles
reference](https://docs.rackspace.com/docs/rackspace-federation/config-attribute-mapping/full-roles/).

##### Permissions by groups example

For more complex scenarios, especially where access to Rackspace products is
governed by roles or groups defined in your corporate identity system, the
Attribute Mapping Policy language offers more flexible control.

The following code block shows a complex example of an Attribute Mapping
Policy:

    mapping:
     version: RAX-1
     rules:
     - local:
         user:
            domain: '9999953939'
            email: "{At(urn:oid:1.2.840.113549.1.9.1.1)}"
            expire: "{Pt(/saml2p:Response/saml2:Assertion/saml2:Conditions/@NotOnOrAfter[1])}"
            name: "{D}"
            roles:
            - "{0}"
       remote:
       - path : |
           (
               if (mapping:get-attributes('https://schemas.xmlsoap.org/claims/Group')='mycompany.rackspace.admin') then ('billing:admin', 'ticketing:admin','admin') else (),
               if (mapping:get-attributes('https://schemas.xmlsoap.org/claims/Group')='mycompany.rackspace.billing') then 'billing:admin' else (),
               if (mapping:get-attributes('https://schemas.xmlsoap.org/claims/Group')='mycompany.rackspace.ticketing') then 'ticketing:admin' else ()
           )
         multiValue: true

This example uses the substitution and piping features of the Attribute
Mapping Policy in conjunction with XPath to observe the SAML `groups` value,
and also to assign values to the local `role` value based on any matching
scenarios. (The `{0}` indicator under `roles` causes the resultant value or
values of the first `remote` rule to be substituted in its place.)

For more examples and a complete guide to the Attribute Mapping Policy
language, see the [Attribute Mapping Policy reference
guide](https://docs.rackspace.com/docs/rackspace-federation/attribmap-reference/#attribmap-reference).

##### View example Attribute Mapping Policies

To view example Attribute Mapping Policies for specific third-party providers,
see the following reference that corresponds to your SAML provider:

- [Attribute Mapping for AD FS](https://docs.rackspace.com/docs/rackspace-federation/config-3p-saml/config-adfs/adfs-attribmapping/)

- [Attribute Mapping for Okta](https://docs.rackspace.com/docs/rackspace-federation/config-3p-saml/config-okta/okta-attribmapping/)

For more examples and a complete guide to the Attribute Mapping Policy
language, see the [Attribute Mapping Policy reference
guide](https://docs.rackspace.com/docs/rackspace-federation/attribmap-reference/#attribmap-reference).

##### Upload your customized Attribute Mapping Policy

You can update the policy in the Cloud Control Panel by using the following
steps:

1. Log in to the [Cloud Control Panel](https://login.rackspace.com).
2. In the top navigation bar, select **Account > User Management**.
3. Click the **Identity Federation** tab.
4. Select the Identity Provider whose mapping policy you want to update.
5. In the **Attribute Mapping Policy** section, click **Update Policy**,
   browse to the file that you downloaded and customized, and then click
   **Submit**.

If you're using the API, you can also update the policy
by using the [Update IDP mapping
policy](https://docs.rackspace.com/docs/cloud-identity/v2/api-reference/identity-provider-operations/#update-idp-mapping-policy) endpoint.
