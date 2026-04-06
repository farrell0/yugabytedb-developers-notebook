# yugabyteDB Developer's Notebook

Hosted at [yugaBitten.com](https://yugaBitten.com)

This repository is organized as a developer notebook with monthly question-and-answer articles plus a small downloads area.

| Monthly articles 2027 | Monthly articles 2026 | Data and other downloads |
| --- | --- | --- |
| No monthly articles are posted for 2027 yet. New entries will appear here in descending date order. | [September 2026](62%20-%20Monthly%20articles/2026/2026-09.md)<br>[August 2026](62%20-%20Monthly%20articles/2026/2026-08.md)<br>[July 2026](62%20-%20Monthly%20articles/2026/2026-07.md) | [Downloads README](downloads/README.md) |

## Monthly articles 2026

### September 2026

Question: How do I model globally distributed transactional workloads in yugabyteDB without forcing the application to manage consistency edge cases?

Farrell: Start by letting the database do the work you would otherwise push into application code. In yugabyteDB that means leaning on PostgreSQL-compatible transactions, picking table and index designs that match the access pattern, and validating read/write paths against the latency profile of each region before the workload goes live.

### August 2026

Question: What should a PostgreSQL developer evaluate first when moving an existing workload to yugabyteDB?

Farrell: Look at connection behavior, transaction scope, and the tables that absorb the highest write pressure. Compatibility gets you started, but the migration gets easier when you identify the hot paths early and check whether schema choices, indexes, and request routing still make sense in a distributed SQL topology.

### July 2026

Question: When does a distributed SQL platform become a better fit than a single-node relational deployment?

Farrell: The answer usually shows up when resilience, write scale, and geographic placement stop being future concerns and become current operational requirements. At that point the conversation is less about swapping syntax and more about choosing an architecture that keeps SQL semantics while removing the single-server bottleneck.
