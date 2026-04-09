---
description: >-
  Models represent the core entities in your business—customers, orders,
  shipments, products. They map to tables or views in your data warehouse, but
  add crucial business context.
---

# Models

Models represent the core business entities in your organization—like customers, orders, agents, or transactions. Each model connects to a table or view in your data warehouse and defines how AI agents can query and understand that data.

## Creating a Model

When you create a model in Actian AI Analyst, you'll configure several key components:

### Model Name

The identifier for this business entity. Use clear, descriptive names that match how your team talks about the data (e.g., "customers", "orders", "products").

### Base Table

Every model connects to a specific location in your data warehouse. You'll see this displayed as:

```
schema_name.table_name
```

This tells Actian AI Analyst where to find the actual data when agents query this model.

### Description

A brief explanation of what this model represents. This helps both your team and AI agents understand what data is available.

**Example**: "Customer accounts and contact information for the organization"

Keep it concise—one or two sentences explaining what each row in this table represents.

### Guidance

Free-text context that helps AI agents understand important nuances about this data. Use this field to explain:

* Special business rules or constraints
* How the data should be interpreted
* When to use (or avoid) this model
* Important context about the data

**Example**: "Use this model to analyze customer behavior and segmentation. Customers can be either B2B or B2C, with different pricing tiers for each type."

Think of guidance as instructions you'd give to a new team member analyzing this data.

## Model Components

Once you've created a model, you can define four types of components:

### Dimensions

The attributes you can filter, group, or analyze by. These are typically the columns in your table.

[Learn more about Dimensions →](dimensions.md)

### Measures

The numerical values you want to aggregate—counts, sums, averages. Measures always involve aggregation functions.

[Learn more about Measures →](measures.md)

### Filters

Pre-defined conditions to subset your data. Filters help agents query the right subset of records.

[Learn more about Filters →](pre-defined-filters.md)

### Relationships

Connections to other models that allow agents to query across multiple business entities.

[Learn more about Relationships →](relationships.md)

## Best Practices

**Start with the basics**: Begin with just the essential dimensions and measures. You can always add more later.

**Use clear descriptions**: Write for someone unfamiliar with your data warehouse. Avoid internal jargon or abbreviations.

**Provide helpful guidance**: Think about the questions agents will be asked and what context they need to answer correctly.

**Name consistently**: Use naming conventions that match how your team talks about the data in meetings and reports.
