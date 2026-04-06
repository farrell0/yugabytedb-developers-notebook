# September 2026

Question: How do I model globally distributed transactional workloads in yugabyteDB without forcing the application to manage consistency edge cases?

Farrell: Start by letting the database do the work you would otherwise push into application code. In yugabyteDB that means leaning on PostgreSQL-compatible transactions, picking table and index designs that match the access pattern, and validating read/write paths against the latency profile of each region before the workload goes live.
