---
description: A complete reference for SemQL syntax and clauses
---

# Core Syntax

SemQL is syntactically compatible with PostgreSQL. If you know PostgreSQL, you already know most of SemQL. The differences are in what you reference — semantic model names instead of physical table names — not in how you write queries.

This page covers every clause you'll use.

***

## SELECT

Select the fields you want in the output. These can be dimensions, measures, aliases, literals, or expressions.

```sql
-- Dimensions (attributes you slice by)
SELECT name, region, created_at FROM customers

-- Measures (pre-aggregated metrics)
SELECT total_revenue, order_count FROM sales

-- With model qualifier (use when field names are ambiguous)
SELECT organizations.name, users.name FROM organizations JOIN users ...

-- Aliases
SELECT name AS organization_name, total_revenue AS revenue FROM organizations

-- Literals
SELECT name, 'active' AS status FROM organizations[active_only]
```

**When to qualify field names:** You only need to qualify (e.g. `organizations.name`) when the same field name exists in multiple tables you're querying. When it's unambiguous, just use the bare field name.

***

## FROM

Reference a semantic model by name — no schema prefix, no physical table path.

```sql
FROM organizations
FROM sales
FROM customers
```

### Applying predefined filters

Add reusable filter conditions directly in the `FROM` clause using square brackets:

```sql
FROM organizations[active_only]
FROM sales[last_quarter]
FROM sales[last_quarter, high_value]   -- multiple filters, all applied
```

Filters can also appear in `JOIN` clauses:

```sql
FROM sales
JOIN customers[enterprise] ON sales.customer_id = customers.customer_id
```

> **Important:** Filters go in `FROM` or `JOIN` — never in `SELECT`. See [Dimensions vs. Measures](dimensions-vs-measures.md) for more on filters.

***

## WHERE

Filter rows based on dimension values, before any aggregation happens.

```sql
SELECT name, total_revenue
FROM sales
WHERE region = 'Europe'

SELECT name, order_count
FROM orders
WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
  AND status = 'completed'
```

**WHERE vs. HAVING:** Use `WHERE` to filter dimensions (raw values). Use `HAVING` to filter measures (aggregated results). See [Dimensions vs. Measures](dimensions-vs-measures.md) for the full explanation.

***

## GROUP BY

Group results by one or more dimensions. Required whenever your query mixes dimensions with measures.

```sql
SELECT region, total_revenue
FROM sales
GROUP BY region

SELECT year, quarter, product_category, total_revenue, order_count
FROM sales
GROUP BY year, quarter, product_category
ORDER BY year, quarter
```

***

## HAVING

Filter groups after aggregation. Use this to filter by measure values.

```sql
SELECT region, total_revenue
FROM sales
GROUP BY region
HAVING total_revenue > 100000

SELECT customer_id, order_count
FROM orders
GROUP BY customer_id
HAVING order_count >= 5
ORDER BY order_count DESC
```

***

## ORDER BY / LIMIT

Standard SQL ordering and row limiting.

```sql
SELECT name, total_revenue
FROM organizations
GROUP BY name
ORDER BY total_revenue DESC
LIMIT 10

-- Ascending order (default)
SELECT name, created_at FROM customers ORDER BY created_at ASC
```

***

## JOIN

Join multiple models together. Use the relationship fields defined in your semantic layer — check the model definitions to find the correct join keys.

```sql
-- Inner join
SELECT organizations.name, users.email
FROM organizations
JOIN users ON organizations.organization_id = users.organization_id

-- Left join (keep all rows from the left model)
SELECT organizations.name, COUNT(users.user_id) AS user_count
FROM organizations
LEFT JOIN users ON organizations.organization_id = users.organization_id
GROUP BY organizations.name

-- With filters on joined models
SELECT organizations.name, users.email
FROM organizations[active_only]
JOIN users[verified] ON organizations.organization_id = users.organization_id
```

**Tip:** Use the relationships documented in your semantic layer to find the correct join columns. Don't assume — look up the exact field names.

***

## WITH (CTEs)

Common Table Expressions let you break complex queries into named, reusable steps. Standard SQL `WITH` syntax works as-is.

```sql
WITH revenue_by_region AS (
    SELECT region, total_revenue
    FROM sales
    WHERE year = 2024
    GROUP BY region
),
top_regions AS (
    SELECT region, total_revenue
    FROM revenue_by_region
    WHERE total_revenue > 500000
)
SELECT region, total_revenue
FROM top_regions
ORDER BY total_revenue DESC
```

> **Note:** Inside a CTE body, you're writing against semantic models normally. But once a CTE is defined, references to it are plain SQL — `region` in `top_regions` is just a column alias, not a semantic reference.

***

## UNION / UNION ALL

Combine results from multiple queries. Both queries must return the same number of columns with compatible types.

```sql
-- UNION removes duplicates; UNION ALL keeps them (faster)
SELECT 'Q1' AS quarter, total_revenue FROM sales WHERE quarter = 1
UNION ALL
SELECT 'Q2' AS quarter, total_revenue FROM sales WHERE quarter = 2

-- Comparing two segments side-by-side
SELECT 'Enterprise' AS segment, customer_count FROM customers[enterprise]
UNION ALL
SELECT 'SMB' AS segment, customer_count FROM customers[smb]
```

***

## Window Functions

Window functions let you compute running totals, rankings, and period-over-period comparisons without collapsing rows into groups.

### Ranking

```sql
SELECT
    region,
    total_revenue,
    ROW_NUMBER() OVER (ORDER BY total_revenue DESC) AS rank,
    RANK() OVER (ORDER BY total_revenue DESC) AS rank_with_ties,
    DENSE_RANK() OVER (ORDER BY total_revenue DESC) AS dense_rank
FROM sales
GROUP BY region
```

### Running totals

```sql
SELECT
    order_date,
    total_revenue,
    SUM(total_revenue) OVER (
        ORDER BY order_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_total
FROM orders
GROUP BY order_date
ORDER BY order_date
```

### Period-over-period comparisons

```sql
SELECT
    order_date,
    total_revenue,
    LAG(total_revenue) OVER (ORDER BY order_date) AS prev_period_revenue,
    total_revenue - LAG(total_revenue) OVER (ORDER BY order_date) AS change
FROM orders
GROUP BY order_date
ORDER BY order_date
```

### Partitioned windows

```sql
SELECT
    region,
    product_category,
    total_revenue,
    ROW_NUMBER() OVER (
        PARTITION BY region
        ORDER BY total_revenue DESC
    ) AS rank_within_region
FROM sales
GROUP BY region, product_category
```

**Supported window functions:** `ROW_NUMBER`, `RANK`, `DENSE_RANK`, `NTILE`, `PERCENT_RANK`, `CUME_DIST`, `LEAD`, `LAG`, `FIRST_VALUE`, `LAST_VALUE`, `NTH_VALUE`

***

## Subqueries

Standard SQL subqueries work in SemQL.

```sql
SELECT name, total_revenue
FROM organizations
WHERE organization_id IN (
    SELECT organization_id
    FROM orders
    WHERE created_at >= CURRENT_DATE - INTERVAL '90 days'
    GROUP BY organization_id
    HAVING COUNT(*) >= 3
)
GROUP BY name, total_revenue
```

***

## What SemQL does NOT support

* `DELETE`, `UPDATE`, `INSERT`, `DROP`, `TRUNCATE` — SemQL is read-only by design
* Schema-qualified table names like `my_schema.my_table` — use model names instead
* Direct `INFORMATION_SCHEMA` queries
* Bypassing auto-applied model filters — they are always active

***

## Supported Functions

### Aggregate

| Function                          | Description                        |
| --------------------------------- | ---------------------------------- |
| `COUNT(x)`, `COUNT(DISTINCT x)`   | Count rows or unique values        |
| `SUM(x)`                          | Sum of values                      |
| `AVG(x)`                          | Average                            |
| `MIN(x)`, `MAX(x)`                | Minimum / maximum                  |
| `STDDEV(x)`, `VARIANCE(x)`        | Standard deviation / variance      |
| `STRING_AGG(x, sep)`              | Concatenate strings with separator |
| `ARRAY_AGG(x)`                    | Aggregate into an array            |
| `PERCENTILE_CONT(p)`, `MEDIAN(x)` | Percentile calculations            |
| `BOOL_AND(x)`, `BOOL_OR(x)`       | Boolean aggregations               |
| `CORR(x, y)`                      | Correlation coefficient            |

> **Reminder:** Never wrap a predefined measure in an aggregate function. `SUM(total_revenue)` will double-aggregate. See [Dimensions vs. Measures](dimensions-vs-measures.md).

### Date / Time

| Function                    | Description                     |
| --------------------------- | ------------------------------- |
| `DATE_TRUNC('month', date)` | Truncate to time period         |
| `DATE_PART('year', date)`   | Extract part of a date          |
| `EXTRACT(YEAR FROM date)`   | Extract part of a date          |
| `NOW()`, `CURRENT_DATE`     | Current timestamp / date        |
| `CURRENT_TIMESTAMP`         | Current timestamp with timezone |

### String

| Function                   | Description         |
| -------------------------- | ------------------- |
| `UPPER(x)`, `LOWER(x)`     | Change case         |
| `LENGTH(x)`                | String length       |
| `TRIM(x)`                  | Remove whitespace   |
| `SUBSTRING(x, start, len)` | Extract substring   |
| `CONCAT(x, y, ...)`        | Concatenate strings |
| `REPLACE(x, from, to)`     | Replace substring   |

### Math

| Function                        | Description                    |
| ------------------------------- | ------------------------------ |
| `ABS(x)`                        | Absolute value                 |
| `ROUND(x, n)`                   | Round to n decimal places      |
| `CEIL(x)`, `FLOOR(x)`           | Round up / down                |
| `MOD(x, y)`                     | Modulo                         |
| `POWER(x, y)`, `SQRT(x)`        | Exponent / square root         |
| `LEAST(x, y)`, `GREATEST(x, y)` | Minimum / maximum of arguments |

### Geo

| Function                                               | Description                            |
| ------------------------------------------------------ | -------------------------------------- |
| `GEO_DISTANCE(lat1, lng1, lat2, lng2)`                 | Distance in km between two coordinates |
| `GEO_WITHIN_RADIUS(lat1, lng1, lat2, lng2, radius_km)` | True/false: is point within radius?    |

See [Geo Functions](geo-functions.md) for full documentation.
