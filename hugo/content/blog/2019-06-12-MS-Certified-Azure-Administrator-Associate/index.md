---
layout: post
title: "Microsoft Certified Azure Administrator Associate"
date: 2019-06-12
comments: true
author: Michiel Brinkman
authorAvatar: 'https://gravatar.com/avatar/e360e0501d74b0de5be9250474951354'
published: true
authorIsRacker: true
bio: "Michiel Brinkman is a Solutions Architect working for Rackspace from Amsterdam, The Netherlands. Multi-cloud certified with a strong engineering background."
categories:
    - Azure
metaTitle: "A look at the AZ-102 Exam - Microsoft Certified Azure Administrator Associate"
metaDescription: "Brief overview of the AZ-102 exam"
ogTitle: "Microsoft Certified Azure Administrator Associate"
ogDescription: "Brief overview of the AZ-102 exam"
ogImage: "https://657cea1304d5d92ee105-33ee89321dddef28209b83f19f06774f.ssl.cf1.rackcdn.com/ms_party.gif-a52063dfec8f18b14d61f577c46e62ff35da3317f5264eaba5621880d28ad519.gif"
---

My thoughts on the AZ-102 exam!

<!--more-->

Some time ago, I passed the **AZ-102** exam and became a certified Microsoft&reg; Azure Administrator Associate (and, well, I guess that makes me **MC Triple A**). 

![](ms_party.gif)

This new certification more or less supersedes the earlier MCSA Cloud Platform certification. It also shows that Microsoft is transitioning to a certification structure similar to that of Amazon Web Services (AWS), Google Cloud Platform (GCP), and Alibaba, based on an associate and professional certification level. 

And, as with the other cloud vendors, the associate level is no longer a prerequisite to achieving the  professional level. This leads to a certification path that is more forked than stacked, which indicates that the levels are intended for different audiences rather than representing an higher difficulty per se.

I took the **AZ-102** exam because I had previously completed the **70-535** exam, but I think it is safe to assume that the content and difficulty is comparable to the **AZ-100** and **AZ-102** exams. I prepared by reading the [exam description](https://www.microsoft.com/en-us/learning/exam-az-102.aspx) and studying the respective docs.microsoft entries. The percentages mentioned in the exam description more or less match the mix of questions I got on the actual exam.

After that, I checked the Azure portal to see what options were available for the various components that were mentioned in the exam description. Having some sort of experience with the Azure portal is crucial - you will barely find any references to things like Infrastuctur as Code (IaC) in this exam. In all fairness, there are some questions on Powershell and the Azure Cloud Shell, though. 

There are three types of questions in this exam:

1. Case Study questions
2. True or False questions
3. Isolated multiple choice or multiple select questions

### Case studies 

The case studies are similar to those on the **70-533/534/535** exams - they give you an overview of a fictional company, with technical, network, and security requirements and planned changes. What follows are five to ten questions related to said company. Topics mainly cover migration compatibility (ASR), network configuration (Vnet peering, Express Route, or VPN), and authentication, federation, and name resolution (ADDS, ADFS, External DNS/Azure DNS). In all honesty, most of these are just a combination or elimination of elements, interpreting the text, and using common sense. 

### True or false questions

The true or false questions are the really difficult part of the exam. They are grouped in clusters of 2 to 5 questions. They state a certain problem - sometimes related to a case study - and each question will propose a certain solutions. Now its up to you to decide whether the solution solves the problem or not.

Some of the solutions will be partial solutions, some will be complete nonsense. But during each cluster of questions you are not allowed to review or revise the answers after you've answered them. You need to be really careful to select "True" only if you are really sure that the solution is a good fit to the problem because if you see a better solution in the next question, it will be to late. 

### Isolated multiple-choice and multiple-select questions

The "normal" multiple-choice questions have a really broad scope. This was foreshadowed by the exam description, however, at times, I was surprised how quickly it jumped from "changing the default sign in Azure Active Directory from the portal" to "How to configure Azure Site Recovery to migrate servers from AWS to Azure". As always, double check to make sure that you have selected the right amount of answers on a multi-select questions. 

### Closing remarks

Despite the fact that I got several case studies, I did not run into any timing issues. Of course, that is also due to the fact that I have a strict "don't doubt" strategy when doing exams (more about that later..), but the amount of time allotted seemed fair anyway.

As for the overall difficulty, I would place this exam at roughly the same level as the **70-533/534** exams. I found **70-535** more difficult, but that was also because it had both depth and breadth. Comparing it other public cloud exams, I would say it ranks between the Alibaba *Cloud Certified Professional* and the AWS *Certified Solutions Architect - Associate* exams. 

If you are relatively new to Azure but have experience on other clouds, it's important to consider the strong relationship between Microsoft Office 365, Azure AD, and Azure proper. Where a GCP exam will hardly even mention Google Docs or Google accounts, the **AZ-102** (and the **AZ-302** exam, for that matter) will have questions on AzureAD and concepts such as Business-to-Business (B2B) and Business-to-Consumer (B2C) access management.

And, of course, my thanks go out to my employer, Rackspace, for enabling and encouraging me and my colleagues to get certified. And write about it. 

This post was previously published at my private [blog](https://blog.thirdpartytools.net).
