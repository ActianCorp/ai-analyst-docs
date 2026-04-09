# Creating Models from SQL

Creating a model from SQL allows you to define a custom query as the basis for your model. This is useful for complex transformations, multi-table joins, or when you need precise control over the underlying data.

### When to Use This Method

Use "From SQL" when you need:

* **Complex transformations** - CTEs, window functions, or custom calculations
* **Multi-table joins** - Combine data from multiple tables into one model
* **Filtered base data** - Apply WHERE clauses before model creation
* **Derived columns** - Create calculated fields in the base query
* **Views or subqueries** - Model data that doesn't exist as a single table

### How to Create a Model from SQL

1. Navigate to **Models** in the left sidebar
2. Click **Create Model**
3. Select **From SQL**
4. Enter a **model name** (this will be the model's identifier)
5. Choose a **data source** from the dropdown
6. Write your **SQL query** in the editor
7. Click **Execute query** to test
8. Review results and click **Create Model**

#### Model Name

Enter a descriptive name for your model:

* Use lowercase with underscores (e.g., `active_customers`, `monthly_revenue`)
* Choose a name that reflects the business entity
* Keep it concise but meaningful

#### Writing Your SQL Query

The SQL editor supports your data warehouse's SQL dialect. Write a query that returns the data you want to model.

**Simple example:**

```sql
SELECT *
FROM public.orders
WHERE status = 'completed'
```

**Join example:**

```sql
SELECT
    o.order_id,
    o.order_date,
    o.total_amount,
    c.customer_name,
    c.customer_tier
FROM public.orders o
JOIN public.customers c ON o.customer_id = c.customer_id
```

**Complex transformation example:**

```sql
WITH monthly_stats AS (
    SELECT
        customer_id,
        DATE_TRUNC('month', order_date) as month,
        SUM(amount) as monthly_revenue,
        COUNT(*) as order_count
    FROM public.orders
    GROUP BY customer_id, DATE_TRUNC('month', order_date)
)
SELECT
    customer_id,
    month,
    monthly_revenue,
    order_count,
    AVG(monthly_revenue) OVER (
        PARTITION BY customer_id
        ORDER BY month
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) as rolling_avg_revenue
FROM monthly_stats
```

#### Testing Your Query

Before creating the model:

1. Click **Execute query** to run a test
2. Review the results table showing sample data
3. Check column names and data types
4. Verify the data looks correct

The test shows:

* Total row count
* Execution time
* First 10 rows of results

#### Error Handling

If your query fails, you'll see:

* Error message from the database
* Details about what went wrong
* Suggestions for fixing common issues

Common errors:

* **Syntax errors** - Check SQL syntax for your database
* **Missing tables** - Verify table names and schemas
* **Permission errors** - Ensure connection has read access

#### Important Notes

* The SQL query becomes the model's base table
* Dimensions and measures reference columns from your query
* Changes to the query require recreating the model
* Complex queries may impact query performance

### Example Use Cases

#### Denormalized Customer View

```sql
SELECT
    c.customer_id,
    c.customer_name,
    c.signup_date,
    c.tier,
    COUNT(DISTINCT o.order_id) as total_orders,
    SUM(o.amount) as lifetime_value,
    MAX(o.order_date) as last_order_date
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.customer_name, c.signup_date, c.tier
```

#### Time-Based Aggregation

```sql
SELECT
    DATE_TRUNC('day', event_timestamp) as event_date,
    event_type,
    COUNT(*) as event_count,
    COUNT(DISTINCT user_id) as unique_users
FROM events
WHERE event_timestamp >= CURRENT_DATE - INTERVAL '90 days'
GROUP BY DATE_TRUNC('day', event_timestamp), event_type
```

#### Filtered Subset

```sql
SELECT *
FROM transactions
WHERE status = 'completed'
  AND amount > 0
  AND test_mode = false
```
