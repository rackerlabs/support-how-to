---
permalink: id-federation-map-policies-permissions-dedicated
audit_date: '2018-11-12'
title: 'Identity federation for Dedicated Hosting: Map policies and permissions'
type: article
created_date: '2018-11-14'
created_by: Kate Dougherty
last_modified_date: '2021-07-07'
last_modified_by: Cat Lookabaugh
product: Dedicated Hosting
product_url: dedicated-hosting
---

**Note**: To use Rackspace Identity Federation, ask your Account Manager to
arrange access for you.

You can use Rackspace Identity Federation to configure your corporate
security and identity systems to enable your employees to use their
regular company credentials to authenticate to Rackspace accounts.

Authentication uses the Security Assertion Markup Language (SAML) 2.0
protocol. An _Attribute Mapping Policy_ interprets the SAML messages exchanged
between an Identity Provider and Rackspace. This YAML Ain't Markup Language
(YAML)-formatted policy maps SAML attributes to Rackspace-required roles and
permissions.

An Attribute Mapping Policy comprises one or more rules. These rules
assign local values attached to a user after they log in to
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
  structured data. The mapping policy language uses XPath, as designed, by
  embedding it in a host language.

- **YAML 1.1**: YAML is a simple data serialization language designed
  to be human friendly. YAML is similar to Javascript Object Notation
  (JSON) but supports useful features such as comments and the ability to
  input multi-line data easily. Attribute Mapping Policies use YAML.

### Configure your SAML provider to work with Rackspace Identity Federation

Before you can create an Attribute Mapping Policy, you first need to configure
SAML attributes and assertions in your SAML provider, such as Microsoft&reg;
Active Directory&reg; Federation Services (AD FS) or Okta&trade;.

The SAML attributes and assertions that you configure in your SAML provider
go to Rackspace and get mapped into Rackspace permissions.

**Note**: You can programmatically retrieve the default values for connecting
your SAML provider to Rackspace by downloading the [Rackspace service provider
metadata file](https://login.rackspace.com/federate/sp.xml), then uploading it
to your SAML provider.

For instructions, see the following reference that corresponds to your SAML
provider:

- [Configure AD FS](https://docs.rackspace.com/docs/rackspace-federation/config-3p-saml/config-adfs/adfs-setup/)
- [Configure Okta](https://docs.rackspace.com/docs/rackspace-federation/config-3p-saml/config-okta/)
- [SAML configuration items](https://docs.rackspace.com/docs/rackspace-federation/config-3p-saml/generic-3p-saml/#saml-configuration-items)

#### Export the SAML metadata

Next, you need to export a SAML metadata file from your SAML provider. This
file contains XML-encoded assertions about authentication, authorization, and
related attributes.

Most identity systems have a method for generating this metadata file, either
automatically or after you complete some basic configuration.

For specific instructions for exporting a SAML metadata file from Okta, see
[Configure
Okta](https://docs.rackspace.com/docs/rackspace-federation/config-3p-saml/config-okta/okta-setup/).

### Add your Identity Provider to your Rackspace account

 You can configure your Identity Provider with Rackspace in the MyRackspace
 portal.

**Note**: While you can also create a new Identity Provider by using the
Rackspace Identity Federation API, we recommend that you perform this task
in the MyRackspace Portal.

Use the following steps to configure your Identity Provider with Rackspace:

1. Log in to the [MyRackspace Portal](https://login.rackspace.com).
2. In the top navigation bar, select **Account > User Management**.
3. In the third tier of the top navigation, click **Federation**.
4. Click **Add Identity Provider**.
5. In the **Description** field, enter a description for your Identity
   Provider. The description should be unique for this Identity Provider.
6. In the **Email Domains** section, click **Add Domain**, then enter the
   email domain that users logging in from your organization use, such as
   **mycompany.com**. The email domain should be unique for this Identity
   Provider.

   **Note**: Do not enter an email format (such as <email>@mycompany.com) in
   this field.

   If your users might log in from multiple email domains using this Identity
   Provider, repeat this step and enter the additional email domains.

7. In the **SAML Metadata** section, click **Choose File**, then browse to the
   XML file that you downloaded from your Identity Provider in the previous
   section.

8. After you attach the XML file, click **Create Identity Provider**.

### Default Attribute Mapping Policy

The system generates a default Attribute Mapping Policy when you create an Identity
Provider by using the MyRackspace Portal or the Rackspace Identity Federation
API. This policy shows the default attributes required for users
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

However, you must customize the default Attribute Mapping Policy to use specific
values before your users log in or can use Rackspace products and services.

**Note**: You must replace `roles` with `groups`.

### Customize the default Attribute Mapping Policy

This section shows you how to retrieve, customize, and upload your default
Attribute Mapping Policy to Rackspace.

#### Retrieve your default Attribute Mapping Policy

You can retrieve your default Attribute Mapping Policy from the
MyRackspace Portal by using the following steps:

1. Log in to the [MyRackspace Portal](https://login.rackspace.com).
2. In the top navigation bar, select **Account > User Management**.
3. In the third tier of the top navigation, click **Federation**.
4. Select the Identity Provider whose mapping policy you want to update.
5. In the **Attribute Mapping Policy** section, click **Download**.

You can also retrieve the policy by using the [Get IDP mapping
policy](https://docs.rackspace.com/docs/cloud-identity/v2/api-reference/identity-provider-operations/#get-idp-mapping-policy) API endpoint.

#### Edit the mappings in your default Attribute Mapping Policy

This section shows you how to edit your default Attribute Mapping Policy.

We recommend that you start by reading
[Attribute mapping basics](https://docs.rackspace.com/docs/rackspace-federation/config-attribute-mapping/full-roles/).

##### Required SAML attributes

Your Attribute Mapping Policy must contain the following information:

- A minimum of one local rule.
- Static or dynamically-populated values for the fields in the following table:

<table>
  <tr>
    <th>Field</th>
    <th>Description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
    <th>Format</th>
    <th>Common values</th>
  </tr>
  <tr>
    <td>domain</td>
    <td>The Identity or Account Domain that the Identity Provider has authority to log users in to.</td>
    <td>Alphanumeric string</td>
    <td width="40%">Set to your Identity Domain. <br />Find the domain listed on the Identity Provider details page for your Identity Provider.</td>
  </tr>
  <tr>
    <td>name</td>
    <td>The username of your user as provided by your identity system.</td>
    <td>Alphanumeric string</td>
    <td>SAML attributes:<br />NameID (persistent type preferred)<br /><code>urn:oid:1.3.6.1.4.1.5923.1.1.1.6<br />
    https://schemas.xmlsoap.org/ws/2005/05/identity/claims/name</code></td>
  </tr>
  <tr>
    <td>email</td>
    <td>The email address of your user as provided by your identity system.</td>
    <td>RFC-valid email address</td>
    <td>SAML Attributes:<br /> email<br /> <code>https://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress <br />urn:oid:1.2.840.113549.1.9.1.10.9.2342.19200300100.1.3</code></td>
  </tr>
  <tr>
    <td>groups</td>
    <td>The Rackspace Identity user groups that you want to assign to the user.</td>
    <td>YAML array of alphanumeric strings</td>
    <td>Identity user groups are self-defined in the MyRackspace Portal as having specific Dedicated permissions. For information about how to set up user groups, see <a href="manage-user-permissions-for-dedicated-hosting/">Manage user permissions for Rackspace Dedicated hosting</a></td>
  </tr>
  <tr>
    <td>expires</td>
    <td>The timeout before users must re-authenticate with your identity system.</td>
    <td>International Standards Organization (ISO) format time values</td>
    <td>Example: <code>"PT12H"</code> (12 hours)<br /><br /><i>or</i><br /><br />SAML Attributes<br /><br />SessionNotOnOrAfter<br /> NotOnOrAfter</td>
  </tr>
</table>

#### Set values with Attribute Mapping

You can set values either explicitly or by using Attribute Mapping Policy
language features, such as substitutions or XPath.

The following example syntax uses inline substitutions in the local rule to
concisely retrieve values and simplify the policy. There are additional ways
to accomplish the same scenario. For more examples and a complete guide to the
Attribute Mapping Policy language, see the
[Attribute Mapping Policy reference
guide](https://docs.rackspace.com/docs/rackspace-federation/appendix/).

<table>
  <tr>
    <th>Method</th>
    <th>Description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>Default</td>
    <td width="40%">Retrieves the value by looking for common locations or labels for the field. Matchs only an attribute with the same name as the field. For example, name: <code>"{D}"</code> matches the attribute with the name <code>name</code>.</td>
    <td><code>name: "{D}"</code></td>
  </tr>
  <tr>
    <td>Explicit</td>
    <td>Directly input the values into the Attribute Mapping Policy fields. This is most useful for values that don't change for any federated user logging in because they apply to all federated users for this Identity Provider.</td>
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
values to map the required fields. You might need to customize this basic example.

    mapping:
     version: "RAX-1"
      # You can add comments in YAML
     rules:
     - local:
        user:
           domain: "636462353"
           # Set the Domain to your Identity Domain
           name: "{D}"
           #  Username comes from an element named "name" value in your SAML
           email: "{At(https://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress)}"
           #  Locates the attribute with the above URL as the claim type/name
           groups:
           - "billing"
           - "dbas"
           #  Assigns the groups explicitly listed above
           expire: "{Pt(/saml2p:Response/saml2:Assertion/saml2:Conditions/@NotOnOrAfter[1])}"
           #  Retrieves the NotOnOrAfter value by using the SAML path and XPath

**Note**: For considerations for specific third-party SAML providers, see
[Configure Third-Party SAML
providers](https://docs.rackspace.com/docs/rackspace-federation/config-3p-saml/#index-configuring-3p-saml-ug).

#### Assign Rackspace permissions

Rackspace Identity Federation for Rackspace Dedicated hosting manages access
based on the groups defined in your corporate identity system. The following
code shows you how to map Identity Provider groups to Rackspace Identity group
roles:

    mapping:
    version: RAX-1
    rules:
    - local:
         user:
            domain: '9999953939'
            email: "{At(urn:oid:1.2.840.113549.1.9.1.1)}"
            expire: "{Pt(/saml2p:Response/saml2:Assertion/saml2:Conditions/@NotOnOrAfter[1])}"
            name: "{D}"
            groups:
            - "{0}"
       remote:
       - path : |
           (
               if (mapping:get-attributes('https://schemas.xmlsoap.org/claims/Group')='mycompany.rackspace.admin') then ('admin_group') else (),
               if (mapping:get-attributes('https://schemas.xmlsoap.org/claims/Group')='mycompany.rackspace.billing') then 'billing_admin_group' else (),
               if (mapping:get-attributes('https://schemas.xmlsoap.org/claims/Group')='mycompany.rackspace.ticketing') then 'ticketing_admin_group' else ()
           )
         multiValue: true

This example uses the substitution and piping features of the Attribute
Mapping Policy in conjunction with XPath to observe the SAML `groups` value.

For more examples and a complete guide to the Attribute Mapping Policy
language, see the [Attribute Mapping Policy reference
guide](https://docs.rackspace.com/docs/rackspace-federation/config-attribute-mapping).

##### View example Attribute Mapping Policies

To view example Attribute Mapping Policies for specific third-party providers,
see the following reference that corresponds to your SAML provider:

- [Attribute Mapping for AD FS](https://docs.rackspace.com/docs/rackspace-federation/config-3p-saml/config-adfs/adfs-attribmapping/)

- [Attribute Mapping for Okta](https://docs.rackspace.com/docs/rackspace-federation/config-3p-saml/config-okta/okta-attribmapping/)

For more examples and a complete guide to the Attribute Mapping Policy
language, see the [Attribute Mapping Policy reference
guide](https://docs.rackspace.com/docs/rackspace-federation/appendix/).

##### Upload your customized Attribute Mapping Policy

You can update the policy in the MyRackspace Portal by using the following
steps:

1. Log in to the [MyRackspace Portal](https://login.rackspace.com).
2. In the top navigation bar, select **Account > User Management**.
3. In the third tier of the top navigation, click **Federation**.
4. Select the Identity Provider whose mapping policy you want to update.
5. In the **Attribute Mapping Policy** section, click **Update Policy**,
   browse to the file that you downloaded and customized, and then click
   **Submit**.

If you're using the API, you can also update the policy
by using the [Update IDP mapping
policy](https://docs.rackspace.com/docs/cloud-identity/v2/api-reference/identity-provider-operations/#update-idp-mapping-policy) endpoint.

**Note**: If you need access to the API, contact your Account Manager.
