<table>
  <tr>
    <td>
      <h1>yugabyteDB Developer's Notebook - Monthly Articles 2025</h1>
      <p>Hosted at <a href="https://yugaBitten.com">yugaBitten.com</a></p>
    </td>
    <td align="right">
      <img src="../01%20-%20Images/21%20-%20yugabitten.png" alt="yugaBitten logo" width="150">
    </td>
  </tr>
</table>

| **[Monthly Articles - 2026](../README.md)** | **[Monthly Articles - 2027](./README.md)** | **[Monthly Articles - 2025](./2025%20-%20README.md)** | **[Data and Other Downloads](../downloads/README.md)** |
|-------------------------|--------------------------|--------------------------|-----------------|

This is a personal blog where we answer one or more questions each month from yugabyteDB customers in a non-official and non-warranted forum.

2025 December - -

>Question:
>We've been running yugabyteDB's MongoDB-compatible API (FerretDB + DocumentDB) and it's been labeled Beta, with secondary indexes called out as the main gap. Is that gap actually closeable?
>
>Farrell:
>It's closeable -- and this month's article is the proof, because the work has actually been done: a real, from-scratch implementation of MongoDB-compatible secondary indexes on yugabyteDB, fully built, deployed, and verified, including a real concurrency bug found and fixed and a measured 45.8x speedup.
>
>[Read article](./2025-12%20-%20MongoDB%20Secondary%20Indexes%20From%20Scratch/)

2025 November - -

>Question:
>We have a geospatial application built against PostgreSQL and PostGIS. yugabyteDB doesn't support the PostGIS extension. Does that mean geospatial search is simply off the table if we migrate?
>
>Farrell:
>No -- but it does mean rethinking the implementation. This month's article walks through a real project reimplementing the needed PostGIS surface as pure SQL, including a real, measured optimization against a 344,688-row dataset that took one query from a 5.2-second full scan down to an index-accelerated lookup.
>
>[Read article](./2025-11%20-%20Geospatial%20Search%20Without%20PostGIS/)
