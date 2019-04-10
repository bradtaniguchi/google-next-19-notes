DBS102 - Spanner, firestore, and bigtable: connecting the dots

- arpita shrivastava
- fred wulff

both from Streak

---
"All Cloud Datastore all the time"

- cloud datastore
- what is datastore?
- look up by key or indexed values
- no jons or grouping GQL

- why we picked it
- schemaless can add or remove properties as you go along
- hosted by googel, no management
- one candidate there is only one choice, but what about now?
- 15 terribytes of data on it over the years.

---
## working with cloud datastore

- entity groups
  - unts of consistency and transactionality
  - consistency throughput considerations.
  - most highly correlated group together.
 
---

## cloud datastore challenges
- entity group
  - conention write at 1/s
  - permanent entity group relationshipos
  - transactions limited to 25 entity groups, 500 entities
 - client-side views
 - joins and application complexity
   - datastore didn't provide any utility to do joins really hurt.
 (seems like lots of issues that will hurt with growth)
 ---



 ---
 ## Cloud Firestore
- latest version of datastore.
- what is firestore
  - two modes, realtime and datastore
  - basic idea: drop in replacement but better.
  - better = the benefits new infastructure + behavior of datasource.
  
- why picked?
  - most app data is still in cloud data store
  
---
## The metadata problem

- the underlying issue is collaborating on email is hard.
- the backend problem is a complex graph-like model.
- "graph database challenge"
- have to be able do the edge traversal quickly
- permissions are a "huge" deal, lots of potential sensitive information.
- lots of solutions in the market, but looking for a solution from google.
- ended up using **cloud spanner**, about a year old.

---
**cloud spanner**
- globally consistent RDMS service
- "magic clock thing"
- sql support
- interleaved tables
- why picked it?
  - transactions
  - graph queries
  - campared to self-hosted database, no ops
  - live adding/deleting columns
  - fits relational data model
  
---
**issues found with cloud spanner**
- "too smart for its own good**
- assume big query is some "back-end bulk task", and make sure the big query "goes last"
  - doesn't fit with the use-case, since large threads are the most important, but these
    take the longest.
 
---
**cloud big-table**
- "just a sorted key-value store."
- no secondary indexes, just lookup key or lookup range
- two modes:
  - single zone availability, single row transactions
  - no transactions in multi-zone 
- very simple and very fast
- why picked it?
  - continue using spanner for transactionality, use bigTable for each performant indexes
  - lots of parallel range scans for graph query.
  - 10k reads/secnode
  - not a good tool for every job, but the best tool for some jobs.
  
---

**example of cloud big table**
`cbt`  is the cloud big table CLI.












