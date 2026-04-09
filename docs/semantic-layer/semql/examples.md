---
description: Real-world SemQL queries from simple to complex
---

# Examples

A library of SemQL queries covering common analytical scenarios. Start with the simple ones to get a feel for the syntax, then work your way to the advanced patterns.

***

## Simple queries

### List all records from a model

```sql
SELECT name, email FROM customers
```

### Filter with a predefined filter

```sql
SELECT name, email
FROM customers[enterprise]
```

### Filter with a WHERE clause

```sql
SELECT name, region, created_at
FROM customers
WHERE region = 'Europe'
ORDER BY created_at DESC
```

### Use a measure (no aggregation in the query needed)

```sql
SELECT name, total_revenue
FROM customers
GROUP BY name
ORDER BY total_revenue DESC
LIMIT 10
```

***

## Filtering and aggregation

### Revenue by region, for a specific year

```sql
SELECT region, total_revenue
FROM sales
WHERE year = 2024
GROUP BY region
ORDER BY total_revenue DESC
```

### Top products by order count, last 30 days

```sql
SELECT product_name, order_count
FROM orders
WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY product_name
ORDER BY order_count DESC
LIMIT 20
```

### Active organizations with more than 5 users

```sql
SELECT name, user_count
FROM organizations[active_only]
GROUP BY name
HAVING user_count > 5
ORDER BY user_count DESC
```

### Monthly revenue trend

```sql
SELECT
    DATE_TRUNC('month', order_date) AS month,
    total_revenue
FROM orders
GROUP BY DATE_TRUNC('month', order_date)
ORDER BY month ASC
```

***

## Joins

### Organizations with their user counts

```sql
SELECT
    organizations.name,
    organizations.industry,
    COUNT(users.user_id) AS user_count
FROM organizations[active_only]
LEFT JOIN users ON organizations.organization_id = users.organization_id
GROUP BY organizations.name, organizations.industry
ORDER BY user_count DESC
```

### Orders with customer details

```sql
SELECT
    orders.order_id,
    customers.name AS customer_name,
    customers.region,
    orders.total_amount,
    orders.created_at
FROM orders
JOIN customers ON orders.customer_id = customers.customer_id
WHERE orders.created_at >= CURRENT_DATE - INTERVAL '7 days'
ORDER BY orders.created_at DESC
```

### Revenue per account manager (three-way join)

```sql
SELECT
    users.full_name AS account_manager,
    customers.region,
    total_revenue
FROM sales
JOIN customers ON sales.customer_id = customers.customer_id
JOIN users ON customers.account_manager_id = users.user_id
WHERE sales.year = 2024
GROUP BY users.full_name, customers.region
ORDER BY total_revenue DESC
```

***

## Window functions

### Rank customers by revenue within each region

```sql
SELECT
    customer_name,
    region,
    total_revenue,
    RANK() OVER (PARTITION BY region ORDER BY total_revenue DESC) AS rank_in_region
FROM customers
GROUP BY customer_name, region
ORDER BY region, rank_in_region
```

### Month-over-month revenue change

```sql
SELECT
    DATE_TRUNC('month', order_date) AS month,
    total_revenue,
    LAG(total_revenue) OVER (ORDER BY DATE_TRUNC('month', order_date)) AS prev_month_revenue,
    total_revenue - LAG(total_revenue) OVER (ORDER BY DATE_TRUNC('month', order_date)) AS change,
    ROUND(
        100.0 * (total_revenue - LAG(total_revenue) OVER (ORDER BY DATE_TRUNC('month', order_date)))
        / NULLIF(LAG(total_revenue) OVER (ORDER BY DATE_TRUNC('month', order_date)), 0),
        1
    ) AS change_pct
FROM orders
GROUP BY DATE_TRUNC('month', order_date)
ORDER BY month
```

### Running total of revenue

```sql
SELECT
    order_date,
    total_revenue AS daily_revenue,
    SUM(total_revenue) OVER (
        ORDER BY order_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS cumulative_revenue
FROM orders
GROUP BY order_date
ORDER BY order_date
```

***

## CTEs

### Two-step analysis: find top regions, then show their details

```sql
WITH top_regions AS (
    SELECT region, total_revenue
    FROM sales
    WHERE year = 2024
    GROUP BY region
    ORDER BY total_revenue DESC
    LIMIT 5
)
SELECT
    customers.name,
    customers.region,
    total_revenue AS customer_revenue
FROM customers
JOIN top_regions ON customers.region = top_regions.region
GROUP BY customers.name, customers.region, top_regions.total_revenue
ORDER BY top_regions.total_revenue DESC, customer_revenue DESC
```

### Cohort comparison using CTEs

```sql
WITH new_customers AS (
    SELECT customer_id, total_revenue
    FROM customers
    WHERE DATE_TRUNC('year', created_at) = '2024-01-01'
    GROUP BY customer_id
),
returning_customers AS (
    SELECT customer_id, total_revenue
    FROM customers
    WHERE DATE_TRUNC('year', created_at) < '2024-01-01'
      AND last_order_date >= '2024-01-01'
    GROUP BY customer_id
)
SELECT 'New (2024)' AS cohort, COUNT(*) AS count, SUM(total_revenue) AS revenue
FROM new_customers
UNION ALL
SELECT 'Returning' AS cohort, COUNT(*) AS count, SUM(total_revenue) AS revenue
FROM returning_customers
```

***

## UNION

### Compare two time periods side by side

```sql
SELECT
    'Q1 2024' AS period,
    product_category,
    total_revenue
FROM sales
WHERE year = 2024 AND quarter = 1
GROUP BY product_category

UNION ALL

SELECT
    'Q1 2023' AS period,
    product_category,
    total_revenue
FROM sales
WHERE year = 2023 AND quarter = 1
GROUP BY product_category

ORDER BY product_category, period
```

### Combine two segments into a single report

```sql
SELECT 'Enterprise' AS segment, name, total_revenue
FROM customers[enterprise]
GROUP BY name

UNION ALL

SELECT 'SMB' AS segment, name, total_revenue
FROM customers[smb]
GROUP BY name

ORDER BY total_revenue DESC
```

***

## Geo functions

### Stores within 50 km of a city, sorted by distance

```sql
SELECT
    store_name,
    city,
    GEO_DISTANCE(51.5074, -0.1278, store_lat, store_lng) AS distance_from_london_km
FROM retail_stores
WHERE GEO_WITHIN_RADIUS(51.5074, -0.1278, store_lat, store_lng, 50)
ORDER BY distance_from_london_km
```

### Customers grouped by proximity band

```sql
SELECT
    CASE
        WHEN GEO_WITHIN_RADIUS(48.8566, 2.3522, customer_lat, customer_lng, 50)
            THEN 'Local (< 50km)'
        WHEN GEO_WITHIN_RADIUS(48.8566, 2.3522, customer_lat, customer_lng, 300)
            THEN 'Regional (50–300km)'
        ELSE 'Remote (> 300km)'
    END AS proximity_band,
    COUNT(*) AS customer_count,
    total_revenue
FROM customers
GROUP BY proximity_band
ORDER BY customer_count DESC
```

***

## Putting it all together

### Full customer health report

This query combines joins, predefined filters, window functions, and measures in a single query:

```sql
WITH ranked_customers AS (
    SELECT
        customers.name,
        customers.region,
        customers.account_manager_id,
        total_revenue,
        RANK() OVER (PARTITION BY customers.region ORDER BY total_revenue DESC) AS regional_rank
    FROM customers[active]
    GROUP BY customers.name, customers.region, customers.account_manager_id
)
SELECT
    rc.name AS customer,
    rc.region,
    users.full_name AS account_manager,
    rc.total_revenue,
    rc.regional_rank
FROM ranked_customers rc
JOIN users ON rc.account_manager_id = users.user_id
WHERE rc.regional_rank <= 3
ORDER BY rc.region, rc.regional_rank
```

This returns the top 3 customers by revenue in each region, with their account manager, using only semantic references and no raw SQL logic.
