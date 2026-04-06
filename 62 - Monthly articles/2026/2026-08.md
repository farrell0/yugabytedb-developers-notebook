# August 2026

Question: What should a PostgreSQL developer evaluate first when moving an existing workload to yugabyteDB?

Farrell: Look at connection behavior, transaction scope, and the tables that absorb the highest write pressure. Compatibility gets you started, but the migration gets easier when you identify the hot paths early and check whether schema choices, indexes, and request routing still make sense in a distributed SQL topology.
