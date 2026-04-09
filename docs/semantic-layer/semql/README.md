---
description: The query language Actian AI Analyst agents use to analyze your data
---

# Semantic SQL (SemQL)

**SemQL** is the query language that Actian AI Analyst's AI agents use to query your data. If you know SQL — especially PostgreSQL — you'll feel right at home. SemQL looks and behaves like standard SQL, with one key difference: instead of referencing physical database tables and columns, you reference the business concepts in your semantic layer.

Think of it as SQL that speaks your business language.

```sql
-- Instead of this (raw SQL):
SELECT o.organization_name, COUNT(DISTINCT u.user_id) AS user_count
FROM analytics_marts.dim_app_organizations o
JOIN analytics_marts.dim_app_users u ON o.organization_id = u.organization_id
WHERE o.current_member_count > 0
GROUP BY o.organization_name

-- You write this (SemQL):
SELECT name, user_count
FROM organizations[active_only]
GROUP BY name
```

Same result. No table schemas, no column guessing, no reinventing business logic that someone already defined.

The underlying database still runs SQL. SemQL gets compiled to your database's native SQL dialect (Snowflake, BigQuery, Redshift, and more) behind the scenes. You write once; Actian AI Analyst handles the translation.

***

## Why Actian AI Analyst agents use SemQL

When you ask an agent _"Show me revenue by region for last quarter"_, it needs to generate a query. With raw SQL, the agent would have to figure out:

* Exact table and column names in your schema
* How your team defines "revenue" (which columns? what exclusions?)
* What "last quarter" means in your data model
* Which tables to join and on which columns

With SemQL, the agent references `total_revenue` and `region`. Your semantic layer already knows:

* `total_revenue` = `SUM(amount - refunds)` with the correct null handling
* `region` comes from the `customers` table
* These tables join on `customer_id`

The agent doesn't guess or reinvent. It uses definitions your data team has already locked in. This means **consistent metrics, faster answers, and no hallucinated SQL**.

***

## What's in this section

* [**Core Syntax**](core-syntax.md) — The full SemQL syntax: SELECT, FROM, WHERE, JOINs, CTEs, window functions, and more
* [**Dimensions vs. Measures**](dimensions-vs-measures.md) — The most important concept in SemQL, and why you never wrap a measure in `SUM()`
* [**Geo Functions**](geo-functions.md) — `GEO_DISTANCE()` and `GEO_WITHIN_RADIUS()` for location-based queries
* [**Examples**](examples.md) — A library of real-world queries from simple to complex
* [**Compilation & Dialects**](compilation-and-dialects.md) — How SemQL is compiled, which databases are supported, and rules of thumb
