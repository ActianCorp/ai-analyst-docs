---
description: The most important concept in SemQL — and why it prevents the most common mistakes
---

# Dimensions, Measures & Filters

Understanding the difference between dimensions and measures is the single most important thing to know about SemQL. Get this right and most queries just work.

---

## Dimensions

A **dimension** is an attribute you slice, filter, or group by. Think: names, dates, categories, IDs, statuses.

```sql
-- Examples of dimensions
name
region
created_at
product_category
customer_id
```

Dimensions map to plain columns in your database, or sometimes to expressions (e.g., `full_name` might be `CONCAT(first_name, ' ', last_name)` under the hood — you don't need to know).

You use dimensions in:

- `SELECT` (to show the attribute)
- `WHERE` (to filter before aggregation)
- `GROUP BY` (to group rows)
- `ORDER BY` (to sort)

---

## Measures

A **measure** is a pre-defined, pre-aggregated metric. Think: revenue, user counts, order totals, conversion rates.

```sql
-- Examples of measures
total_revenue         -- might be SUM(amount - refunds)
user_count            -- might be COUNT(DISTINCT user_id)
average_order_value   -- might be AVG(amount) WHERE amount > 0
conversion_rate       -- might be SUM(conversions) / COUNT(sessions)
```

Measures are defined once by your data team in the semantic layer. They encode all the business logic: which columns to use, how to handle nulls, what to exclude, how to aggregate.

You use measures in:

- `SELECT` (to show the metric)
- `HAVING` (to filter after aggregation)
- `ORDER BY` (to sort by the metric)

---

## The Golden Rule: Never Aggregate a Measure

This is the most common SemQL mistake, and it produces silent, wrong results.

**Measures are already aggregated.** When you write `total_revenue`, it already contains a `SUM()` inside its definition. If you wrap it in another `SUM()`, you get double aggregation — which either errors out or returns garbage.

```sql
-- WRONG: total_revenue is already SUM(amount - refunds)
-- This becomes SUM(SUM(amount - refunds)) — double aggregation
SELECT region, SUM(total_revenue)
FROM sales
GROUP BY region

-- CORRECT: just reference the measure directly
SELECT region, total_revenue
FROM sales
GROUP BY region
```

Same rule applies to `COUNT`, `AVG`, `MIN`, `MAX`, and any other aggregate:

```sql
-- WRONG
SELECT product, AVG(average_rating) FROM products GROUP BY product

-- CORRECT
SELECT product, average_rating FROM products GROUP BY product
```

**How to tell if something is a measure:** Check your semantic layer. Measures are tagged as such. When in doubt, if a field sounds like a business metric (revenue, count, rate, total, average), it's probably a measure.

---

## WHERE vs. HAVING

Since dimensions and measures behave differently, they use different filter clauses:

| | WHERE | HAVING |
|---|---|---|
| **What it filters** | Dimensions (raw column values) | Measures (aggregated results) |
| **When it runs** | Before aggregation | After aggregation |
| **Use for** | `status = 'active'`, `date >= ...` | `total_revenue > 10000`, `order_count >= 5` |

```sql
-- WHERE: filter by a dimension (region is a dimension)
SELECT region, total_revenue
FROM sales
WHERE region = 'Europe'
GROUP BY region

-- HAVING: filter by a measure (total_revenue is a measure)
SELECT region, total_revenue
FROM sales
GROUP BY region
HAVING total_revenue > 500000

-- Both together
SELECT region, total_revenue
FROM sales
WHERE created_at >= '2024-01-01'   -- dimension filter: rows to include
GROUP BY region
HAVING total_revenue > 100000       -- measure filter: groups to keep
ORDER BY total_revenue DESC
```

A simple test: if you could put the condition in `WHERE` without a `GROUP BY`, it filters a dimension. If it only makes sense after grouping (because it involves an aggregated value), it belongs in `HAVING`.

---

## Predefined Filters

**Predefined filters** are reusable `WHERE` conditions defined in the semantic layer. Instead of writing `WHERE member_count > 0` everywhere, your data team defines it once as `active_only`. Anyone who uses `organizations[active_only]` gets exactly that condition — consistently.

### Syntax

Filters go in the `FROM` or `JOIN` clause, in square brackets after the model name:

```sql
-- Single filter
FROM organizations[active_only]

-- Multiple filters (all conditions applied together)
FROM sales[last_quarter, high_value]

-- Filter on a joined model
FROM sales
JOIN customers[enterprise] ON sales.customer_id = customers.customer_id
```

### Filters are not just convenience — they're consistency

Imagine "enterprise customer" means `annual_contract_value >= 50000 AND plan = 'enterprise'`. Without predefined filters, every analyst writes that condition slightly differently. Some forget the plan check. Some use different thresholds.

With `customers[enterprise]`, there's one definition. Every query, every agent, every analyst uses the same criteria.

### Auto-applied model filters

Some models have filters that apply automatically to every query, without you having to specify them. These are **guardrails** set by your data team.

For example, if the `transactions` model has an auto-filter for `status = 'completed'`, then `FROM transactions` always excludes incomplete transactions — even if you don't ask for it. You can't bypass them, and you shouldn't need to. They exist to prevent mistakes.

### Filters don't belong in SELECT

This is a syntax error:

```sql
-- WRONG: filters in SELECT
SELECT organizations[active_only].name FROM organizations

-- CORRECT: filters in FROM
SELECT name FROM organizations[active_only]
```

---

## Quick Reference

| Concept | Where to use | Example |
|---|---|---|
| Dimension | SELECT, WHERE, GROUP BY, ORDER BY | `region`, `created_at`, `name` |
| Measure | SELECT, HAVING, ORDER BY | `total_revenue`, `user_count` |
| Predefined filter | FROM, JOIN (in square brackets) | `[active_only]`, `[last_quarter]` |
| Aggregate function on dimension | SELECT with GROUP BY | `COUNT(order_id)` |
| Aggregate function on measure | **Never** — already aggregated | — |
| Dimension filter | WHERE | `WHERE region = 'EU'` |
| Measure filter | HAVING | `HAVING total_revenue > 0` |
