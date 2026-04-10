# Overview

Actian AI Analyst's Semantic Layer helps AI agents understand your business data and answer questions reliably. Instead of agents querying raw database tables directly and potentially misinterpreting your schema, they work with structured business knowledge that you define.

Think of the Semantic Layer as a translation layer between how people talk about your business and how your data is actually stored in the warehouse.

## What is the Semantic Layer?

The Semantic Layer is where you define:

* **What your data represents** - Models that map to your database tables&#x20;
* **What attributes matter** - Dimensions you can filter and group by&#x20;
* **What numbers to calculate** - Measures and metrics for aggregations and KPIs&#x20;
* **How terms connect** - Relationships between different data entities&#x20;
* **How people talk** - Glossary mapping business vocabulary to your data

When someone asks your AI agent "How many active customers do we have?", the Semantic Layer ensures the agent knows:

* What "customers" means (which model)
* What "active" means (which filter to apply)
* How to count them (which measure to use)

## The Three Main Components

### 1. Models

[**Learn more about Models →**](models/README.md)

Models represent your core business entities—customers, orders, products, transactions, users. Each model connects to a table or view in your data warehouse and defines:

* **Dimensions**: Attributes you can filter, group, or analyze by
* **Measures**: Numbers you want to aggregate (count, sum, average)
* **Filters**: Pre-defined conditions to subset your data
* **Relationships**: How this model connects to other models

**Example**: A `customers` model might include dimensions like `customer_tier` and `created_at`, measures like `total_customers`, and filters like `premium_customers_only`.

[Go to Models documentation →](models/README.md)

### 2. Metrics

[**Learn more about Metrics →**](metrics.md)

Metrics are the business calculations that combine measures with business logic. While measures perform simple aggregations, metrics encode your key performance indicators—conversion rates, revenue per customer, weekly active users, and other complex calculations.

Metrics can:

* Combine multiple measures
* Apply business rules and filters
* Span across multiple models
* Control which dimensions make sense for grouping

**Example**: `average_order_value` combines order amounts with order counts to calculate typical purchase size.

[Go to Metrics documentation →](metrics.md)

### 3. Glossary

[**Learn more about Glossary →**](glossary.md)

The glossary maps business terminology to your semantic layer components. Your team doesn't talk in database schemas—they use terms like "quotes", "active users", or "recent orders". The glossary bridges this gap.

For each term, you can:

* Define what it means in your business context
* Add synonyms for variations
* Map to relevant models, dimensions, filters, measures, and metrics

**Example**: A "Premium Users" term might map to the `customers` model with a filter for premium tier accounts.

[Go to Glossary documentation →](glossary.md)

## How It Works

When someone asks your AI agent a question:

1. **Agent identifies business terms** in the question ("customers", "last month", "revenue")
2. **Looks up terms** in the glossary to find relevant semantic layer components
3. **Uses models** to understand what data is available and how entities connect
4. **Applies filters and measures** to subset and aggregate the data correctly
5. **Calculates metrics** if complex business logic is involved
6. **Returns accurate results** based on your defined business rules

The Semantic Layer ensures every answer is based on your organization's agreed-upon definitions and business logic.

## Navigation in Actian AI Analyst

In the Actian AI Analyst Studio, you'll find three main sections for the Semantic Layer:

* **Models**: Define your business entities and their components
* **Metrics**: Create complex business calculations
* **Glossary**: Map business vocabulary to your data

You'll see numbered badges next to items indicating how many other components reference them. For example, a model with "126" means 126 other components (metrics, relationships, etc.) use that model.

## Getting Started Workflow

Here's a recommended workflow for building your Semantic Layer:

### 1. Start with Models

Connect your core business entities to your data warehouse:

* Create models for your most important tables (users, orders, products, etc.)
* Add dimensions for the key attributes
* Define measures for basic counts and sums
* Set up relationships between models

### 2. Build Metrics

Once you have models with dimensions and measures:

* Create metrics for your key business KPIs
* Combine measures with business logic
* Specify which dimensions make sense for each metric
* Apply default filters where appropriate

### 3. Define Glossary Terms

Help agents understand your business vocabulary:

* Add terms for concepts your team frequently discusses
* Include synonyms for variations
* Map terms to relevant models, dimensions, filters, measures, and metrics

### 4. Iterate and Refine

As you use your agents:

* Add new models as you connect more data sources
* Create metrics when you identify new KPIs
* Expand your glossary when you notice agents misinterpreting terms
* Update guidance to improve agent accuracy

## SemQL: The Query Language

Actian AI Analyst agents use SemQL (Semantic Query Language) to interact with your Semantic Layer. You'll see SemQL in filter expressions and metric calculations—it uses double curly braces like `{{ model.dimension }}` to reference your semantic layer components.

SemQL prioritizes governance, ensuring agents can only query data according to your defined business rules.

## Keeping It Up to Date

Your business evolves—priorities shift, new metrics emerge, definitions change. Actian AI Analyst's Steward agent helps keep your Semantic Layer current by monitoring conversations, detecting knowledge gaps, and proposing updates to your semantic layer components.
