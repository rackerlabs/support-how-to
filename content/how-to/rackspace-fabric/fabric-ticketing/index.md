---
permalink: "fabric-ticketing"
audit_date: '2022-03-10'
type: article
title: "Fabric Ticketing"
created_date: '2022-03-10'
created_by: Asmita Nakwa
last_modified_date: '2022-03-15'
last_modified_by: Steven Salinas
product: Rackspace Fabric
product_url: rackspace-fabric
---
# Introduction
Rackspace Technology uses a new ticketing application as part of its Fabric branding. The ticketing application follows ITSM and ITIL change management standards by allowing customers to designate a category for the ticket.

## Intended Audience for Docs
This documentation is intended for assisting customers with the new Fabric Ticketing Application. It describes the user experience to assist with common tasks related to this portal.

## Access to Fabric Ticketing Application
You can access the ticketing application by entering login credentials. This page can be reached from any of the current customer portal URLs as listed below.
* https://my.rackspace.com/ 
* https://manage.rackspace.com/ 
* https://portal.rackspace.com/ 

Enter your username and password to login into the portal. 

<img width="540" alt="FT1" src="https://user-images.githubusercontent.com/98875667/156165005-98fc3bb1-c56b-47dd-b1e9-ec2c31403728.png">

### Global Dashboard Overview

<img width="945" alt="FT6" src="https://user-images.githubusercontent.com/98875667/156172786-71f7f0d1-5193-4fc4-a8f3-e4ef9b35a8b9.png">

The ticket navigation option will take you to the new ticketing application as shown in the above image.

The global dashboard view has tabs as listed below:
* Tickets
* Support
* Billing
* Account

#### Tickets

<img width="177" alt="FT4" src="https://user-images.githubusercontent.com/98875667/156175991-029922e0-4e20-4b08-af23-1088e2e62d1b.png">

The user must be granted ticketing permissions for the ticket navigation items to be allowed.

### Application Overview

<img width="950" alt="FT7" src="https://user-images.githubusercontent.com/98875667/156180814-ee83a84d-ece0-41ff-b6fd-4e1019a99ad6.png">

**Ticket List Page**: Displays the list of tickets created. The list displays either the most recently created ticket or last modified ticket at the top. 

#### **Left Side Ticket Panel**: 

<img width="302" alt="FT9" src="https://user-images.githubusercontent.com/98875667/156182984-cf86867f-a906-45bd-9e37-e0a8daba6c67.png">

1. Create Ticket: User can create new ticket using this option. Details of how new ticket is created is detailed in upcoming sections. 
2. Search: User can utilize the field to search by Ticket ID, Subject, and for text used in comments. 

<img width="142" alt="FT10" src="https://user-images.githubusercontent.com/98875667/156183312-0c15933a-b591-4deb-8dd8-1ccbb2682681.png">

3. Status Drop-down: Allows a user to narrow down the list results by ticket status of Open Tickets, Pending Customer, Closed Tickets, and All Tickets. 

<img width="257" alt="FT11" src="https://user-images.githubusercontent.com/98875667/156183533-ce5b707d-2d71-45ea-b626-2c5c1ec7c9e4.png">

4. Filter: This filter option can filter your tickets using options such as Device, Created By, Accounts, and Date Range 
5. Refresh List: When you click on **Refresh List** option, the most recently created ticket appears on the top of the ticket list.

##### Export Tickets
<img class="fig-img" src="/support/how-to/fabric-ticketing/export-tickets_01.png" alt="An expanded drop-down showing the Export Ticket and Close Selected options">

**NOTE**: Make sure ticket list item checkboxes are not selected. The **Export Tickets** feature does not support exporting individual tickets based on the ticket item checkboxes. The option will be disabled if any checkboxes are selected.

To **Export Tickets** do the following:
1. Select **Actions** > **Export Tickets**.

<img class="fig-img" src="/support/how-to/fabric-ticketing/export-tickets_02.png" alt="Export ticket popover showing radio button options to export Open Tickets, Closed Tickets, or Pending Customer Tickets">

2. Select to export either **Closed Tickets**, **Open Tickets**, or **Pending Customer** Tickets.
3. Select the **Export Tickets** button.
4. A CSV file will download in the browser.

**Warning**: Currently it is only possible to export a maximum of 5,000 tickets for each option.

#### **Right Side Ticket Panel**:  

**Selected Ticket Panel**: Displays the details of the selected ticket. This loads the first ticket list item by default. 

<img width="621" alt="FT13" src="https://user-images.githubusercontent.com/98875667/156184075-2b34647c-1c4d-4053-b4ea-20486b52b52f.png">

<img width="374" alt="FT8" src="https://user-images.githubusercontent.com/98875667/156186872-21df8151-9e8f-44f2-abb4-c9fca88e1902.png">

You can load your ticket in a new browser tab by selecting the ticket ID from the header of the right ticketing panel as shown in above image.

The right-side ticket panel displays the details of the selected ticket. The details of the ticket are divided into three tabs such as: 

* **Comments**: Comment option displays all comments for the selected ticket. 

<img width="691" alt="FT14" src="https://user-images.githubusercontent.com/98875667/156187554-fc47f74f-89a0-44b5-865c-ccbb90353123.png">

* **Details**: You can view the details of the tickets in terms of the category, created by, modified by, severity, created date, recipients and so forth.

<img width="290" alt="FT15" src="https://user-images.githubusercontent.com/98875667/156187836-c9be71b9-a9f2-408f-a918-84cb46e277f6.png">

You can **Add Recipient** to the ticket as shown in the above image. The added recipients will get notifications about the ticket once added. The **Add Recipient** popover will hide contacts that have ticket notification settings disabled on an account.

<img width="280" alt="FT16" src="https://user-images.githubusercontent.com/98875667/156188912-77a59f2c-d667-4038-afa3-f4c4747a4db1.png">

You can **Add Groups** to the ticket as shown in the above image. The added groups will get notifications about the ticket.

<img width="308" alt="FT17" src="https://user-images.githubusercontent.com/98875667/156189256-474c010b-a7db-4471-ae60-677c338d03cf.png">

* **Devices**: You can view the device list. This option is only applicable for dedicated customer tickets at this current time. 

## How To Create a Ticket

The create ticket page is different as compared to the previous MyRack ticketing application that dedicated customers are familiar with. The Fabric Ticketing Application automatically determines which queue or team a ticket will be sent to. This is calculated based on the user’s selection of the category, account type, product/service, and device(s). Most of the selections are within Step: 2.

## Step 1: Choose Category

![Choose Category](https://user-images.githubusercontent.com/98875667/156199904-a4cf30a8-3009-48bc-9847-c631db7059a1.png)

You must choose the required category from the pre-defined ITIL/ITSM management options. Below is the list of categories:

* **Change**: Change category is used to raise the ticket for add, remove or modify the infrastructure. Examples of change category are Configuration of Manager Console, add or remove hosts, add or remove device and so on. 
* **Incident**: Incident category is used to raise the unplanned interruption or reduction in service quality. Examples of incidents are email delivery issues, lack of access to the network, website down and so on. 

* **Account**: Account category is used to raise an issue related to overall account access, account settings, contact information or managing users. 

* **Billing and Payments**: The Billing and Payments category is used to raise an issue related to usage and payments or payment options. 

* **Request for Information**: Request for Information category is used to request general information. Examples of general information are the address of the organization, headquarters location, and so on.

## Step 2: Account & Product

<img width="514" alt="Select Device" src="https://user-images.githubusercontent.com/98875667/156201098-b384b102-cbad-4419-9e75-39bc679b28c6.png">

* If you only have access to one account, then that account will auto populate. The input will also be disabled since no other options exist for selection. 

* If you only have access to one product, then that product will auto populate. If you have access to multiple products, then select the product that best relates to your request from the options in the drop-down list

* The application only allows for dedicated devices to be added to a ticket. Adding multi-cloud devices is not allowed at this current time.

<img width="522" alt="CommonRequest" src="https://user-images.githubusercontent.com/98875667/156202047-48e96698-c410-4dd2-92c3-31a9a0018e83.png">

* This option drop-down depends on the previous selections you have made. Only the list of options that relate to your previous device, product, and account selections will display. Leave this field with the "None Selected" value in order to create a Custom Ticket or choose one of the template options to create a ticket based on common change requests. Visit our [Common request templates](/support/how-to/common-request-templates) article for more information about accessing each template.

### Draft Saved (Autosave)
![Draft](https://user-images.githubusercontent.com/98875667/156202917-c23a6d43-0e4a-4029-b54a-ba5b25bc870f.png)

At the bottom of step two you will see a message that says, **Draft Saved**. A ticket draft tracks the selected step, selected field values, and progress of the your create ticket page. This allows you to continue the ticket in a different browser, or device at any time. The draft does not have a time limit and can be continued days, or months later. Each time you visit the "Create Ticket" page the application will check for the most recent draft. 

## Step 3: Issue Details

<img width="465" alt="Issue1" src="https://user-images.githubusercontent.com/98875667/156203849-022c8cbd-a993-48b4-a511-90ba3975e6aa.png">

You fill in details of subject, description, and recipient(s). Optionally you can upload attachments up to 20MB per file. After clicking the **Submit** button, the draft will be cleared and a new ticket will be available at the top of the ticket list.