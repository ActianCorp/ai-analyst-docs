---
description: What you analyze by
---

# Dimensions

Dimensions are the attributes you use to slice, filter, and group your data. They answer questions like "by what?" or "for which?" When someone asks "Show me revenue by customer" or "Filter to active users only", they're using dimensions.

## What Dimensions Represent

Dimensions are typically the columns in your database table that you want to:

* Filter by ("Show me only premium customers")
* Group by ("Break down sales by region")
* Display as labels ("List customer names")

## Creating a Dimension

When you add a dimension to a model, you'll configure these fields:

### Dimension Name

A clear, descriptive identifier for this attribute. Use names that match how your team talks about the data.

**Examples**: `created_at`, `is_active`, `customer_name`, `product_category`

### Description

Explain what this dimension represents and when to use it. Be specific about what the values mean.

**Example**: "Type of customer account - either business (B2B) or consumer (B2C)"

This helps AI agents understand what this field contains and when it's relevant.

### Type

Select the data type from the dropdown:

* **String**: Text values like names, categories, IDs
* **Number**: Numeric values like age, capacity, count
* **Date**: Calendar dates (year, month, day)
* **Timestamp**: Dates with time (includes hour, minute, second)
* **Boolean**: True/false flags
* **Enum**: Fixed set of allowed values

The type you choose determines how agents can use this dimension in queries.

### Time Grains (for Date/Timestamp dimensions only)

When you select Date or Timestamp as the type, you can specify how agents can group time-based data.

Available time grains:

* Day
* Week
* Month
* Quarter
* Year

**Example**: If you enable "Month" and "Quarter" for a `created_at` dimension, agents can answer questions like "Show me customers created per month" or "Compare by quarter".

### Expression

This field shows which physical column in your database will Actian AI Analyst use as a data source for this dimension.

For most dimensions, you won't need to change this. The "Write SQL instead" option allows advanced users to create calculated dimensions using SQL expressions.

### Sample Values

After you create a dimension, Actian AI Analyst displays sample values from your data. This preview helps you verify the dimension is configured correctly and shows what kind of data it contains.

## Common Dimension Types

### Text Dimensions

Names, categories, statuses, and other text values.

**Examples**: `customer_name`, `product_category`, `order_status`, `description`

### Numeric Dimensions

Numbers that you don't typically aggregate, but might filter or group by.

**Examples**: `age`, `truck_capacity`, `priority_level`, `quantity`

### Time Dimensions

Dates and timestamps for time-based analysis.

**Examples**: `created_at`, `updated_at`, `order_date`, `last_login`

### Boolean Dimensions

True/false flags that represent yes/no conditions.

**Examples**: `is_active`, `is_premium`, `is_verified`, `has_subscription`

## Dimensions vs Measures

**Dimensions** = What you filter or group by (no aggregation)&#x20;

**Measures** = What you calculate or count (requires aggregation)

If you find yourself wanting to sum, count, or average something, you need a measure, not a dimension.
