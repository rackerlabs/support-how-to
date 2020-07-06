---
layout: post
title: "Introduction to the Google Distance Matrix API"
date: 2018-09-28
comments: true
author: Tanmay Gupta
published: true
authorIsRacker: true
categories:
    - general
---

This blog explains how the Google&reg; Distance Matrix API can be incorporated
with Oracle&reg; E-business Suite (EBS) and can be used to determine the distance
between two physical locations.

<!--more-->

### Introduction

The Distance Matrix API is a service that provides travel distance and time for
a matrix of origins and destinations, based on the recommended route between
the start and end points.

You access the Distance Matrix API through an HTTP interface, with requests
constructed as a URL string, using origins and destinations, along with your
API key.

The API key provided by Google is chargeable, and for testing this API, Google
provides a test API that can be embedded in the code to generate the desired URL
and get the distance between the origins and destinations.

### Test the API

Use the following URL to generate an XML file that calculates the distance
between the **ORIGIN** and **DESTINATION** with the API Key:

    https://maps.googleapis.com/maps/api/distancematrix/xml?units=imperial&origins=[ORIGIN Location]&destinations=[DESTINATION Location]&key=[YOUR_API_KEY]

The following sections provides steps to test the API.

#### Generate the test API key

To generate the test API key, browse to the following URL and log in with your
gmail ID:

    https://console.cloud.google.com/

#### Create a project

On the home page, click on **Select a project** as shown in the following image:

![](Picture1.png)

To create a new project, enter the project name and click **Create** as shown
in the following image.

![](Picture2.png)

After the project is successfully completed, click **Select a project** again.

To select the project that you just created, click on it in the list, as shown
in the following image:

![](Picture3.png)

#### Go to the API dashboard and enable the Distance Matrix

To go to the API dashboard, open the navigation menu by clicking on the
hamburger menu in the upper-right corner (next to **Google Cloud Platform**).
Then click **API & Services -> Dashboard**, as shown in the following image:

![](Picture4.png)

To enable the Distance Matrix, click on **ENABLE APIS AND SERVICES**, as shown
in the following image:

![](Picture5.png)

Then, in the menu bar, search for "Distance Matrix API", as shown in the
following image:

![](Picture6.png)

Finally, click **Enable**.  The resulting screen is shown in the following image:

![](Picture7.png)

#### Create an API key

To create an API key, go to the **Credentials** tab, select **API key**, and
click **Create credentials**, as shown in the following image:

![](Picture8.png)

The API key (AIzaSyBEJa1xqGHtQkfhFlYUPG_HnDpsgTxStzM) was generated successfully,
as shown in the following image:

![](Picture9.png)

#### Get the distance between two locations

The following URL is an example generated with origin, destination, and the test
API Key.

    https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyBEJa1xqGHtQkfhFlYUPG_HnDpsgTxStzM

The URL fetches the distance in the form of an XML file (shown in the following
image), which stores the distance between two places in the text tag.

![](Picture10.png)

### Use the API with Oracle EBS

In Oracle, the URLs are executed by using `UTL_HTTP` utility that executes the
generated URL and produces XML output, which can be stored in any Character
Large Object (CLOB) data type variable.

This XML can be read, and the value of any XML tag can be fetched from the
CLOB variable, as shown in the following example:

    DECLARE
      l_clob clob;
      l_http_req utl_http.req;
      l_http_resp utl_http.resp;
      l_text          varchar2(32767);
      thexml xmltype;

    BEGIN
      l_http_req := utl_http.begin_request(p_url, 'POST');--  Execute the URL
      l_http_resp := utl_http.get_response(l_http_req);  --  Collect the Response of URL Hit
      UTL_HTTP.read_text(l_http_resp, l_text, 32767);  --  Read the Response in a File to generate XML
      DBMS_LOB.writeappend (l_clob, LENGTH(l_text), l_text);  --  Write the  Response to CLOB datatype
      thexml := xmltype.createxml(v_req);  --  Generate XML data from the Response captured
      select extractvalue(thexml, '/DistanceMatrixResponse/row/element/distance/text') from   dual;  --  Read a Particulat XML field from the XML data
    END;

One place in Oracle EBS where the Google API might be used is in the expense module.
For example, employees create entries for travel expenses between two locations,
and the distance between two locations gets calculated automatically.

### Conclusion:

The Distance Matrix API can be used to perform multiple tasks such as requesting
the distance data for different travel modes, requesting distance data in
different units (for example, in kilometers or miles), and estimating travel
time in traffic. The API is intended for developers who wish to compute travel
distance and time between different points within maps that are provided by one
of the Google Maps APIs.

<a class="cta teal" id="cta" href="https://www.rackspace.com/lp/enhancedarchitecturereview">Get a free GCP architecture review</a>

Use the Feedback tab to make any comments or ask questions.

