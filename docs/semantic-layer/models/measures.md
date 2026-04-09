---
description: The building blocks of business calculations
---

# Measures

Measures are the numerical values you want to calculate from your data. They always involve aggregation—counting, summing, averaging, or finding min/max values. When someone asks "How many customers?" or "What's total revenue?", they're asking for measures.

## How Measures Work

Unlike dimensions (which you filter or group by), measures require an aggregation function. You can't just display a measure—you calculate it across a set of records.

**Common aggregation functions**:
- `COUNT()` - Count records
- `COUNT(DISTINCT)` - Count unique values
- `SUM()` - Add up values
- `AVG()` - Calculate average
- `MIN()` / `MAX()` - Find minimum or maximum

## Creating a Measure

When you add a measure to a model, you'll configure these fields:

### Measure Name

A clear identifier that describes what this measure calculates.

**Examples**: `total_customers`, `total_revenue`, `average_order_value`

Use names that make it obvious what you're counting or summing.

### Description

Explain what this measure calculates and what it represents.

**Example**: "Total count of unique customers" or "Average order value across all transactions"

This helps both your team and AI agents understand what the measure means.

### Decimals

Specify how many decimal places to show in results. Use the up/down arrows to adjust:

- `0` for whole numbers (e.g., counts of users: "127")
- `2` for currency or percentages (e.g., "1,234.56" or "45.32%")
- Higher values for precise scientific calculations

### Unit

Select the unit that describes what this measure represents. This ensures agents present results correctly and helps prevent confusion.

**Common units**:
- Counts: `customers`, `orders`, `items`, `products`, `users`, `transactions`
- Currency: `EUR`, `USD`, `GBP`, `JPY`
- Percentages: `percent`, `rate`, `ratio`
- Time: `seconds`, `minutes`, `hours`, `days`
- Other: `bytes`, `KB`, `MB`, `GB`

**Example**: If you're counting customers, select `customers` as the unit. The result might display as "1,247 customers".

### SQL Expression

The calculation logic that defines what this measure computes. This is where you specify the aggregation function.

**Examples**:
- `COUNT(DISTINCT(id))` - Count unique IDs
- `COUNT(*)` - Count all records
- `SUM(revenue)` - Sum up revenue values
- `AVG(duration)` - Average duration

### Sample Value

After you create a measure, Actian AI Analyst shows a sample calculation result. This helps you verify the measure is working correctly.

**Example**: "1,247 customers" indicates your measure is counting successfully.

## Common Measure Patterns

### Counting Records

Count how many records exist:

```
COUNT(*)
```

### Counting Unique Values

Count distinct values (e.g., unique customers):

```
COUNT(DISTINCT(customer_id))
```

### Summing Values

Add up numerical values (e.g., total revenue):

```
SUM(order_amount)
```

### Calculating Averages

Find the average of a numerical field:

```
AVG(order_value)
```

## Measures vs Dimensions

**Measures** = Numbers you calculate (requires aggregation like COUNT, SUM, AVG)
**Dimensions** = Attributes you filter or group by (no aggregation)

**Example**:
- "Show me **total revenue** (measure) **by customer** (dimension)"
- "Count **number of orders** (measure) **by month** (dimension)"

## Building Blocks for Metrics

Measures are the foundation for more complex calculations called Metrics. While a measure performs a single aggregation, a metric can combine multiple measures with business logic.

[Learn more about Metrics →](../metrics.md)
