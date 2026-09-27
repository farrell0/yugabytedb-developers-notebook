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

| **[Monthly Articles - 2026](./README.md)** | **[Monthly Articles - 2027](./62%20-%20Monthly%20articles/README.md)** | **[Monthly Articles - 2025](./62%20-%20Monthly%20articles/2025%20-%20README.md)** | **[Data and Other Downloads](./downloads/README.md)** |
|-------------------------|--------------------------|--------------------------|-----------------|

This is a personal blog where we answer one or more questions each month from yugabyteDB customers in a non-official and non-warranted forum.

2026 November - -

>Question:
>I've been manually downloading data from a home battery system's app and a weather station's web export, and hand-loading CSVs into yugabyteDB. What does a real, unattended pipeline for this look like, end to end?
>
>Farrell:
>This month's article is built around a real daemon that replaced exactly this manual workflow -- polling a Tesla Fleet API every 5 minutes and a daily weather export every ~20 hours into yugabyteDB. Three real, non-obvious bugs surfaced along the way, each confirmed live against the actual API rather than found in documentation.
>
>[Read article](./62%20-%20Monthly%20articles/2026-11%20-%20Real-time%20IoT%20Data%20Pipelines/)

2026 October - -

>Question:
>Someone pasted a list of six Prometheus metric names into Slack and asked whether we could alert on them. I can't find any of these names in the yugabyteDB docs. Are they real?
>
>Farrell:
>None of the six exist verbatim, but each has a real, close equivalent. This month we track down all six against a live 8-node cluster and actually try to trigger each one -- three proved out cleanly, and the other three produced real, verified findings about exactly why the obvious trigger doesn't move the needle under this cluster's configuration.
>
>[Read article](./62%20-%20Monthly%20articles/2026-10%20-%20Prometheus%20Metrics%20Validation/)

2026 September - -

>Question:
>Once a query plan goes bad in production, without anyone changing the query or schema, how do we find out automatically? yugabyteDB's Query Plan Management sounds like exactly this -- does it catch everything?
>
>Farrell:
>Good nuance in that question. This month we reproduce a real, measured 280x plan-cache regression against a live cluster, confirm directly that QPM's own automatic cost-vs-reality flag does not catch this specific failure mode, and build a working, complementary monitor that does.
>
>[Read article](./62%20-%20Monthly%20articles/2026-09%20-%20Query%20Plan%20Management/)

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


