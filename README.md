<table>
  <tr>
    <td>
      <h1>yugabyteDB Developer's Notebook - Monthly Articles 2026</h1>
      <p>Hosted at <a href="https://yugaBitten.com">yugaBitten.com</a></p>
    </td>
    <td align="right">
      <img src="./01%20-%20Images/21%20-%20yugabitten.png" alt="yugaBitten logo" width="150">
    </td>
  </tr>
</table>

| **[Monthly Articles - 2026](./README.md)** | **[Monthly Articles - 2027](./62%20-%20Monthly%20articles/README.md)** | **[Data and Other Downloads](./downloads/README.md)** |
|-------------------------|--------------------------|-----------------|

This is a personal blog where we answer one or more questions each month from yugabyteDB customers in a non-official and non-warranted forum.

2026 September - -

>Question:
>How do I model globally distributed transactional workloads in yugabyteDB without forcing the application to manage consistency edge cases?
>
>Farrell:
>Start by letting the database do the work you would otherwise push into application code. In yugabyteDB that means leaning on PostgreSQL-compatible transactions, picking table and index designs that match the access pattern, and validating read/write paths against the latency profile of each region before the workload goes live.
>
>[Read article](./62%20-%20Monthly%20articles/2026-09%20-%20Global%20transactions%20without%20edge%20cases/)

2026 August - -

>Question:
>What should a PostgreSQL developer evaluate first when moving an existing workload to yugabyteDB?
>
>Farrell:
>Look at connection behavior, transaction scope, and the tables that absorb the highest write pressure. Compatibility gets you started, but the migration gets easier when you identify the hot paths early and check whether schema choices, indexes, and request routing still make sense in a distributed SQL topology.
>
>[Read article](./62%20-%20Monthly%20articles/2026-08%20-%20PostgreSQL%20workload%20migration%20checklist/)

2026 July - -

>Question:
>When does a distributed SQL platform become a better fit than a single-node relational deployment?
>
>Farrell:
>The answer usually shows up when resilience, write scale, and geographic placement stop being future concerns and become current operational requirements. At that point the conversation is less about swapping syntax and more about choosing an architecture that keeps SQL semantics while removing the single-server bottleneck.
>
>[Read article](./62%20-%20Monthly%20articles/2026-07%20-%20When%20distributed%20SQL%20becomes%20the%20better%20fit/)


# July 2026

Welcome to this edition of yugabyteDB Developer's Notebook (YDN). This month we answer the following question(s);

My company wishes to understand the options for change data capture (CDC) when using yugabyteDB. We wish to avoid the cost of having to poll the database running given SQL SELECTS, to determine when conditions have changed that affect other portions of our business environment. Can you help ?
My company has got to improve .. .. Can you help ?

*Excellent question ! There are two distinct CDC subsystems that come with yugabyteDB; yugabyteDB gRPC change data capture, and yugabyteDB (PostgreSQL) logical replication. Each has its application and use. In this article we will detail both systems and their configuration, testing, and related.*



















#### Software versions

The primary software components used in this edition of YDN include yugabyteDB Anywhere (YBA) and yugabyteDB (YB) version 2025.2.0.0-b131. All of the steps below are run on one very large sized Mac Book Pro, or if you prefer, run these steps on yugabyteDB Aeon, yugabyteDB's managed service, or Amazon Web Services (AWS), Google Cloud Platform (GCP), or another hyper-scaler.

For isolation and (simplicity), we develop and test all systems inside virtual machines or emulated machines, using the desktop hypervisors VMware Fusion version 13.6.4, and/or  UTM version 4.6.5. Generally we run a single node of YBA, and 8 nodes of YB (5 nodes primary, and 3 read replicas) using Alma Linux versions 8 and 9. We also run a client node using Ubuntu Desktop version 24.04.





## 7.1   Terms and core concepts

this is a sentence

this is a sentence









## 7.2   Complete the following



this is a sentence

this is a sentence





## 7.3   In this document, we reviewed or created

This month and in this document we detailed the following:

- this is a sentence

- this is a sentence

  

  

#### Persons who helped this month

Kiyu Gabriel, David Bechberger



#### Additional resources:

Free yugabyteDB training courses,

https://university.yugabyte.com/users/sign_in

Take any class, anyime, for free.

Jim Knicely's very excellent blog site,

https://yugabytedb.tips/



#### This document is located here,















this is a sentence

this is a sentence
