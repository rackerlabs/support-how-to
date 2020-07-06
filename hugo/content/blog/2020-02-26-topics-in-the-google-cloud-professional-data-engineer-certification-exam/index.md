---
layout: post
title: "Topics in the Google Cloud Professional Data Engineer certification exam"
date: 2020-02-26
comments: true
author: Sabeehah Ahmed
published: true
authorIsRacker: true
authorAvatar: 'https://s.gravatar.com/avatar/e0a659be1385d03db4ca9eed09b1826d'
bio: "Sabeehah Ahmed is a Solutions Architect specializing in Google Cloud. She
creates detailed design solutions to meet customer requirements. Sabeehah
studied Biomedical Engineering at university, where she learned about medical
devices. And she loves desserts, especially anything with chocolate."
categories:
    - General
    - Developers
metaTitle: "Topics in the Google Cloud Professional Data Engineer certification exam"
metaDescription: "In this post, I'm sharing all the primary resources that I used to study for this exam and topics covered in the exam."
ogTitle: "Topics in the Google Cloud Professional Data Engineer certification exam"
ogDescription: "In this post, I'm sharing all the primary resources that I used to study for this exam and topics covered in the exam."
---

For a few years now, I've had an interest in the concepts of *machine learning (ML)*
and wanted to know more. When I came across the Google&reg; Cloud Professional
Data Engineer certification exam, I was intrigued about how ML concepts
intertwine with cloud concepts, especially in the Google Cloud Platform (GCP).

<!--more-->

As a Biomedical Engineering student at university, I know that the concepts of
ML strongly relate to how the human brain works. It's interesting to see how
computing can use the neural connections of the brain. With no background in
cloud other than a year of experience in the cloud computing field, I achieved
three Google Cloud certifications&mdash;an accomplishment that makes me really
proud.

In this post, I'm sharing the primary resources that I used to study for this
exam and topics covered in the exam.

### Study sources

Here are the places I went to prepare for taking the exam.

#### Data Engineering on GCP course at Fast Lane

While studying for this certification, I first attended a four-day Google course,
which I highly recommend if you are interested in Big Data and ML within Google.
In this course, I learned about the tools that GCP provides when ingesting,
preparing, and analyzing Big Data. Some of the key topics were:

- Challenges faced with Data Engineering
- Deep dive into:
    -	Big Query
    -	Big Table
    -	Dataflow
    -	Dataproc
    -	ML services including Kubeflow
- Demos and labs of using each service

Although this course does not relate directly to the Professional Data Engineer
certification exam, I found it quite beneficial and learned quite a lot. You can
find the course at
[Fast Lane Data Engineering on Google Cloud Platform](https://www.fastlaneus.com/course/google-degcp).
There are also other courses outside of the data engineering track at
[Fast Lane Google Cloud Training](https://www.fastlaneus.com/google-cloud-training).

#### Linux Academy

I used Linux Academy as my primary source of study material. I went through the
whole data engineering course and found it very useful. They updated their
course quite recently, so it is very precise and provides many helpful tips
and content that comes up in the exam. Because the practice tests are similar
to the certification exam, they prepared me well. As someone with little
experience in the data world, I feel that this course is perfect in terms of
content and explanation.

I took the
[Google Cloud Certified Professional Data Engineer](https://linuxacademy.com/course/google-cloud-data-engineer/)
course.

#### Coursera and Qwiklabs

Coursera has another useful course, which is slightly longer than the Linux Academy
course. The Coursera course has example scenarios that helped me consider which
tools are best for specific customer issues. Also, most sections have Qwiklabs
that are quite useful. They let me use the GCP console to put theory into hands-on
practice, which improved my understanding.

I focused on the following courses:

- [Data Engineering, Big Data, and Machine Learning on GCP](https://www.coursera.org/specializations/gcp-data-machine-learning)
- [Preparing for the Google Cloud Professional Data Engineer Exam](https://www.coursera.org/professional-certificates/gcp-data-engineering)

### Topics in the certification exam

The section provides a list of the main topics covered in the exam, some
sub-topics, and occasionally my thoughts about the material.

**BigQuery (A major focus in the exam)**

-	Integration with Google Identity and Access Management (IAM) roles
-	Basic understanding of the GCP Key Management Sevice (KMS) and keys (google-managed,
   customer-supplied, and customer-managed)
-	Partitioned tables, specifically as used in SQL commands
-	Wildcards
-	Federated tables
-	Integration with Google Cloud Storage (GCS)
-	BigQuery (BQ) data transfer service and connectors
-	When to use normalized and denormalized data
-	Loading different data formats into BQ, including a good understanding
   of the Apache Avro&trade;, CSV, Apache Parquet, and JSON formats
-	Pricing with slots
-	Cached queries

**Dataflow**

- Integration with IAM roles, especially the developer role
- Differences between global, fixed, session, and sliding windows and when to
  use each type
- Best practices on handling pipeline errors, especially, try-catch-block errors
- Different types of transform methods, for example, Apache Beam ParDo
- Watermarks
- Apache Beam

**BigTable**

- Schema design, such as when to use tall and narrow tables or short and wide ones
- Schema that might cause slow performance and how to optimize performance
- When to use hard disk drive (HDD)
- How to switch between HDD and solid-state drive (SSD)

**Pub/sub**

- Process of moving from the Apache Kafka to pub/sub workflow
- IAM controls on different levels, such as the fact that the publisher level
  has no IAM controls
- Learn how the process of message flow works, such as why delays in sending
  messages might occur

**Cloud Spanner**

- Not much in the exam, just basic concepts
- Primary and secondary indexes

**Dataproc**

- Good understanding of the Apache Hadoop ecosystem
- IAM integration
- Benefits of preemptible nodes
- Best practices for migrating Hadoop clusters to Dataproc, such as always
  separating data from storage by using GCS
- Best practices for optimizing performance
- Connectors
- Apache Spark

**Dataprep**

- Not much in the exam but you should know the basic concepts

**Machine Learning**

- Differences between training and test data.
- Overfitting and underfitting, such as why they can happen, how to prevent them.
- Good understanding of ML types, including supervised learning, unsupervised
  learning, reinforcement learning, although I saw no questions on reinforcement.
- Not much on Tensorflow, but you should know the basic concepts.
- Good understanding of how neural networks (NN) work. There were questions on
  wide NN, deep NN, and both wide and deep NN.
- Regularization parameters, such as L1 and L2, including a couple of
  scenario-based questions of when to use each type.

**GCP ML services**

- Good understanding of each service, especially Natural Language API, such as
  sentiment and entity analysis
- A couple of questions on when it is beneficial for a customer to use
  ML services
- AI platform, including how it works and online versus batch predictions

**Datalab**

- Basic concepts
- A question came up about how you can share notebooks

**DataStudio**

- Basic concepts
- Caching with BQ, including query cache and prefetch cache
- A question came up about metrics and dimensions, so you should know the difference

**Cloud Composer**

- You should know directed acyclic graph (DAG) files in detail, including the
  components.

**Extra notes**

- The exam had no case studies.
- The exam didn't have much on Cloud SQL.
- You should know the data pipelines very well.
- You should know the key differences between the data services in GCP.
- The [Google practice exam](https://cloud.google.com/certification/practice-exam/data-engineer)
  is also quite useful, so consider taking it.

### Conclusion

I hope the post of my journey to certification helps you on your journey. Good
luck to all those who plan to take the exam!

Use the Feedback tab to make any comments or ask questions.

<a class="cta blue" id="cta" href="https://www.rackspace.com/lp/enhancedarchitecturereview">Get a free GCP architecture review</a>
