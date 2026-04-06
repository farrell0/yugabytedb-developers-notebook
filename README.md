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
