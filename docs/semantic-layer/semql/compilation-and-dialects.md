---
description: >-
  How SemQL is compiled to SQL, which databases are supported, and practical
  rules of thumb
---

# Compilation & Dialects

When you write a SemQL query, it doesn't run directly on your database. It goes through a compilation step that validates it, resolves your semantic references to physical columns, and translates the result to your database's native SQL dialect.

***

## How SemQL is compiled

When an agent submits a SemQL query, Actian AI Analyst:

1. **Validates** the query — checks that all referenced models and fields exist, that the query is read-only, and that the user has permission to access them
2. **Resolves** semantic references to physical SQL — `organizations` becomes your actual table, `total_revenue` expands to its full aggregation expression, filters expand to their `WHERE` conditions
3. **Transpiles** the result to your database's dialect (Snowflake, BigQuery, etc.)

The compiled SQL is cached per organization, so identical queries skip compilation on subsequent runs. The cache is invalidated whenever the semantic layer changes.

***

## Supported databases

SemQL compiles to all major SQL databases. The same SemQL query works on all of them — no changes needed.

| Database                          | Notes                            |
| --------------------------------- | -------------------------------- |
| **PostgreSQL**                    | Native — no transpilation needed |
| **Amazon Redshift**               | PostgreSQL-compatible            |
| **Snowflake**                     | Full support                     |
| **Google BigQuery**               | Full support                     |
| **MySQL / MariaDB**               | Full support                     |
| **Microsoft SQL Server**          | Full support                     |
| **Azure Synapse**                 | Full support                     |
| **Microsoft Fabric**              | Full support                     |
| **Databricks**                    | Full support                     |
| **DuckDB / MotherDuck**           | Full support                     |
| **Actian Data Platform (Ingres)** | Full support                     |
