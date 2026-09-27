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
>My team keeps hitting query plans we didn't expect. Is there a mental model for how yugabyteDB actually picks a plan, with some real, worked examples?
>
>Farrell:
>Yes. This month we walk through eight verified exercises against a live cluster -- sharding strategy, pattern-matching indexes, join mechanics, a classic DISTINCT anti-pattern, correlated subqueries, and a real customer case separating join-order effects from index-column-order effects.
>
>[Read article](./62%20-%20Monthly%20articles/2026-08%20-%20Query%20Optimizer%20Fundamentals/)

2026 July - -

>Question:
>My company wishes to understand the options for change data capture (CDC) when using yugabyteDB. We wish to avoid the cost of polling the database with SQL SELECTs to determine when conditions have changed. Can you help?
>
>Farrell:
>Excellent question! There are two distinct CDC subsystems built into yugabyteDB -- gRPC change data capture and PostgreSQL logical replication. Each has its own application and use. This article details both systems, including two complete, runnable demonstrations.
>
>[Read article](./62%20-%20Monthly%20articles/2026-07%20-%20Change%20Data%20Capture/)


