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

2026 June - -

>Question:
>We found documentation showing yugabyteDB can COPY a table straight to a Parquet file on S3 with one SQL statement. We tried it and it didn't work. Is this real, and what's the actual working path?
>
>Farrell:
>pg_parquet is real and works for local files -- exporting straight to an s3:// destination in one COPY statement does not work today, confirmed directly against a live cluster. This month covers the real, working three-step pipeline that gets you there instead.
>
>[Read article](./62%20-%20Monthly%20articles/2026-06%20-%20Parquet%20and%20S3-Compatible%20Storage/)

2026 May - -

>Question:
>We keep hearing yugabyteDB has a "smart driver" that's cluster-aware and does its own load balancing. What does that actually mean, and can we see it really distributing connections?
>
>Farrell:
>This month, six real connection-distribution outcomes, one per load_balance driver setting, captured directly from a live 6-node cluster -- plus how the driver reacts differently to two different kinds of node blacklisting.
>
>[Read article](./62%20-%20Monthly%20articles/2026-05%20-%20Cluster-Aware%20Smart%20Driver/)

2026 April - -

>Question:
>We need a fast way to undo a bad deploy without a full restore, and an audit trail of who ran what against a sensitive table. Does yugabyteDB have real answers for both?
>
>Farrell:
>Yes to both, each with real edges worth knowing. Point-in-Time Recovery is built on a genuinely clever hard-link mechanism; pgAudit is configurable down to the specific role and table, but has several real, confirmed configuration gotchas covered this month.
>
>[Read article](./62%20-%20Monthly%20articles/2026-04%20-%20Point-in-Time%20Recovery%20and%20Audit%20Logging/)

2026 March - -

>Question:
>We created a colocated database and a table with an explicit TABLESPACE clause specifying an 8-way replica placement. No error, but the data wasn't actually placed that way. What's going on?
>
>Farrell:
>A real, reproducible gap: a colocated table's placement is never controlled by a TABLESPACE named on that table -- only by the database's own default placement. This month covers exactly why, plus several other real placement boundaries.
>
>[Read article](./62%20-%20Monthly%20articles/2026-03%20-%20Colocated%20Tables%20and%20Placement/)

2026 February - -

>Question:
>We want to build an actual "next best offer" recommendation feature with real product data and a real distributed HNSW index, and we want honest numbers, not a marketing benchmark.
>
>Farrell:
>This month is built around a real H&M retail dataset, yugabyteDB's own distributed ybhnsw index, a real published benchmark's actual recall/latency numbers, and why vector search is a candidate-generation stage, not the whole feature.
>
>[Read article](./62%20-%20Monthly%20articles/2026-02%20-%20Vector%20Search%20for%20Recommendations/)

2026 January - -

>Question:
>We have a real MongoDB application and we're evaluating yugabyteDB. Do we have to go through the MongoDB-compatible API, or is there a more direct path?
>
>Farrell:
>There are genuinely two paths. This month covers both, using MongoDB's own MFlix sample app -- the MongoDB-API path hits the same secondary-index gap from December's article, while the JSONB-in-YSQL path this project actually runs in production sidesteps it entirely.
>
>[Read article](./62%20-%20Monthly%20articles/2026-01%20-%20JSONB%20Document%20Modeling/)


