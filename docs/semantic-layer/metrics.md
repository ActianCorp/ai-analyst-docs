# Metrics

Metrics are business calculations that combine measures, apply business logic, and often span multiple models. While measures perform simple aggregations (like counting or summing), metrics encode the complex calculations your business cares about—conversion rates, averages per customer, churn rates, and other KPIs.

## Metrics vs Measures

**Measures** = Simple aggregations on a single model 
 
- Example: `COUNT(DISTINCT customer_id)`, `SUM(revenue)`

**Metrics** = Complex business calculations that may:

- Combine multiple measures
- Apply mathematical operations (division, multiplication, etc.)
- Span multiple models (cross-model calculations)
- Include business rules and filters
- Specify which dimensions make sense for grouping

**Example**:

- Measure: `SUM(revenue)` and `COUNT(DISTINCT customer_id)`
- Metric: `SUM(revenue) / COUNT(DISTINCT customer_id)` → average revenue per customer

## Creating a Metric

When you create a metric, you'll configure several components:

### Metric Name

A clear identifier for this business calculation.

**Examples**: `average_order_value`, `customer_churn_rate`, `monthly_recurring_revenue`, `conversion_rate`

Use names that match how your team talks about these KPIs.

### Description

Explain what this metric calculates and what it represents.

**Example**: "Average value of orders placed in the selected time period"

This helps everyone understand what the metric measures.

### Guidance

Free-text context that helps agents interpret and use this metric correctly. Explain:

- What the metric indicates about your business
- How to interpret the values
- When this metric is most useful
- Any important caveats or limitations

**Example**: "Indicates customer purchasing power - higher values suggest premium customer segments. Track over time to understand pricing effectiveness and customer value trends."

Think of this as the context you'd provide when explaining this KPI to a new team member.

### Group-By Dimensions

Specify which dimensions agents can use to break down this metric. This controls how the metric can be analyzed.

**Example**: For a metric calculating "average order value", you might allow grouping by:

- `orders.customer_id`
- `orders.product_category`
- `orders.region`

When someone asks "Show me average order value by region", the agent knows it can use the `region` dimension.

**Why restrict dimensions?** Some breakdowns don't make sense. For a "revenue per customer" metric, grouping by individual product SKU would be meaningless. By specifying allowed dimensions, you prevent nonsensical analyses.

### Filters

Pre-defined filters that should be applied when calculating this metric. These ensure the metric always uses the right subset of data.

**Example**: For "average order value", you might apply:

- `completed_orders_only` - Only completed orders
- `exclude_cancelled` - Exclude cancelled orders

Filters ensure consistency—everyone calculating this metric uses the same data subset.

### Time Dimension

For time-series analysis, specify which date/timestamp dimension to use when grouping or filtering by time.

**Example**: `orders.created_at`

This tells agents which date field to use when someone asks "Show me this metric over time" or "Give me last month's value".

### Time Grains

Specify how time-based data can be grouped—by day, week, month, quarter, or year.

**Example**: If you select "Month, Quarter, Year", agents can answer questions like "Show me monthly trends" or "Compare by quarter".

### Decimals

How many decimal places to show in results.

**Example**: `2` for percentages or currency → "45.32%" or "1,234.56"

### Unit

The unit this metric represents. This ensures results are displayed correctly.

**Common units**: `EUR`, `USD`, `percent`, `rate`, `users`, `orders`, `days`

**Example**: Select `EUR` for revenue metrics, `percent` for rates, or `orders` for order counts.

### SemQL Expression

The calculation logic written in SemQL (Semantic Query Language). This defines how to compute the metric.

**Examples**:

Simple division:
```
SUM({{orders.order_value}}) / NULLIF(COUNT(DISTINCT {{orders.id}}), 0)
```

Percentage calculation:
```
SUM({{orders.successful_orders}}) / NULLIF(SUM({{orders.total_orders}}), 0) * 100
```

Cross-model calculation:
```
SUM({{orders.revenue}}) / COUNT(DISTINCT {{customers.customer_id}})
```

**SemQL syntax**: Use double curly braces `{{ }}` to reference measures and dimensions from your models.

### Joins (for cross-model metrics)

When your metric spans multiple models, you'll need to configure how those models connect. The Joins section lets you specify custom join logic if the default relationships aren't sufficient.

**Example**: To calculate "revenue per customer", you need to join the `orders` model to the `customers` model.

If no joins are configured, you'll see: "No joins configured. Add joins to combine data from multiple models."

## Common Metric Patterns

### Rates and Percentages

Calculate what portion of a total meets some condition:

```
SUM(successful_count) / NULLIF(SUM(total_count), 0) * 100
```

**Examples**: success rate, conversion rate, adoption rate

### Averages Per Entity

Calculate an average value per customer, user, or other entity:

```
SUM(total_value) / COUNT(DISTINCT entity_id)
```

**Examples**: revenue per customer, orders per user, transactions per day

### Complex Business Logic

Combine multiple conditions and calculations:

```
COUNT(CASE WHEN condition THEN 1 END) / NULLIF(COUNT(*), 0) * 100
```

**Examples**: retention rate, qualified lead rate, premium customer rate

### Time-Based Calculations

Compare values across time periods or calculate trends:

```
SUM(CASE WHEN date >= DATE_SUB(NOW(), INTERVAL 7 DAY) THEN value END)
```

**Examples**: weekly active users, 30-day retention, monthly growth rate

## When to Use Metrics vs Measures

### Use a Measure when:

- You need a simple aggregation (count, sum, average)
- The calculation stays within one model
- No complex business logic is involved
- You're building blocks that metrics will use

### Use a Metric when:

- You're combining multiple measures
- You need to enforce specific filters or dimensions
- The calculation represents a key business KPI
- You're doing cross-model calculations
- Complex business rules are involved

## Best Practices

**Start with measures**: Build the basic aggregations as measures first, then compose them into metrics.

**Name clearly**: Use names that match how your business talks about KPIs. If executives call it "customer acquisition cost", don't name it `avg_cost_per_new_user`.

**Provide guidance**: Explain how to interpret the metric. What does a high value mean? A low value? What actions should someone take based on this metric?

**Restrict dimensions wisely**: Only allow dimensions that create meaningful breakdowns. Prevent analyses that would be confusing or misleading.

**Use NULLIF for division**: Always wrap denominators in `NULLIF(..., 0)` to prevent division by zero errors.

**Test your calculations**: After creating a metric, run a few queries to verify the results match your expectations.
