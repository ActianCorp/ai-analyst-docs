---
description: >-
  Filters define reusable conditions for subsetting data. They're like saved
  WHERE clauses.
---

# Pre-defined Filters

Filters define reusable conditions for subsetting your data. Instead of agents having to figure out how to exclude test data or filter to active records, you can create pre-defined filters that make these common operations simple and consistent.

Think of filters as saved conditions that agents can apply when querying your data.

## Creating a Filter

When you add a filter to a model, you'll configure these fields:

### Filter Name

A clear identifier that describes what condition this filter applies.

**Examples**: `premium_customers_only`, `verified_only`, `recently_created`, `active_users`, `exclude_deleted`

Use names that make it obvious what records will be included or excluded.

### Description

Explain what this filter does and when to use it.

**Example**: "Filter to include only premium tier customers" or "Exclude records marked as deleted"

This helps agents understand when to apply this filter.

### Apply by Default

Toggle this on if you want this filter automatically applied to all queries using this model.

**When to use "Apply by default"**:  

- Excluding test or demo data
- Excluding deleted or archived records
- Filtering to only production data
- Any condition that should "always" be true unless explicitly overridden

**When to leave it off**:  

- Optional conditions agents might want (like "active only" or "premium customers")
- Filters that only apply to specific analyses
- Conditions that depend on the question being asked

### SemQL Expression

The filter condition written in SemQL (Semantic Query Language). This defines which records to include or exclude.

**Examples**:  

- `{{ customers.tier }} = "PREMIUM"` - Only premium customers
- `{{ users.is_active }} = true` - Only active users
- `{{ orders.created_at }} >= DATE_SUB(NOW(), INTERVAL 90 DAY)` - Last 90 days

SemQL uses double curly braces (`{{ }}`) to reference dimensions from your model.

## Types of Filters

### Mandatory Filters (Apply by Default: ON)

These filters run automatically on every query. Use them to ensure data quality and exclude records that should never be included in analysis.

**Common mandatory filters**:  

- `exclude_test_data` - Filter out test accounts
- `exclude_deleted` - Remove soft-deleted records
- `production_only` - Only include production environment data

**Example**: If 99% of queries should exclude deleted records, make `exclude_deleted` a mandatory filter. Agents can still explicitly include deleted records when needed, but they won't accidentally include them.

### Optional Filters (Apply by Default: OFF)

These filters are available for agents to apply when relevant to the question being asked.

**Common optional filters**:  

- `active_only` - Only active/current records
- `premium_customers` - Filter to premium tier
- `recently_created` - Last 30/60/90 days
- `high_value` - Above a certain threshold

**Example**: An `active_only` filter is useful when someone asks about "current users", but shouldn't be automatically applied when analyzing historical churn patterns.

## Why Use Filters?

### Consistency
Everyone uses the same definition of "active users" or "recent data". No ambiguity, no variation in results.

### Simplicity
Agents don't need to figure out the logic for common conditions. Just apply the `premium_customers` filter instead of reconstructing the business rules.

### Data Quality
Mandatory filters act as guardrails, automatically excluding data that would skew results or cause confusion.

### Reusability
Define the filter once, use it in any query involving that model.

## Filters vs Dimensions

**Filters** = Pre-defined conditions to subset data (applied as a WHERE clause)
**Dimensions** = Attributes to filter, group, or display (used in WHERE, GROUP BY, or SELECT)

You use dimensions to create filters. For example, you might create a filter called `active_only` that uses the `is_active` dimension with a condition `= true`.
