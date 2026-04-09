---
description: >-
  Relationships define how models join to each other. They make cross-entity
  analysis possible.
---

# Relationships

Relationships define how models connect to each other. They enable agents to answer questions that span multiple business entities, like "Show me customers and their orders" or "Which products have been purchased recently?"

Without explicit relationships, agents would have to guess how to join tables—a major source of errors. By defining relationships, you tell agents exactly how models connect.

## Why Relationships Matter

When someone asks a question involving multiple entities, agents need to know:

* Which columns to join on
* What kind of relationship exists (one-to-many, many-to-one, etc.)
* How to combine the records (inner join, left join, etc.)

**Example**: To answer "How many orders has each customer placed?", an agent needs to know how to connect the `customers` model to the `orders` model.

## Creating a Relationship

Relationships are defined from one model to another. You'll typically create them in the "from" model and see them as incoming relationships in the "to" model.

### From Dimension

The column in the source model that connects to another model.

**Example**: `orders.customer_id`

This is the foreign key in your source table.

### To Dimension

The column in the target model that the source dimension connects to.

**Example**: `customers.id`

This is typically the primary key in the target table.

### Relationship Type

Describes the cardinality of the connection:

* **One to one**: Each record in model A connects to exactly one record in model B
* **One to many**: Each record in model A can connect to multiple records in model B
* **Many to one**: Multiple records in model A connect to one record in model B
* **Many to many**: Records can connect in both directions with multiple matches

**Example**: One customer can place many orders, so the relationship from `customers` to `orders` is "one to many".

### Join Type

Specifies how to combine records when querying across the relationship:

* **Inner join**: Only include records that have matches in both models
* **Left join**: Include all records from the source model, even if no match exists in the target
* **Right join**: Include all records from the target model, even if no match exists in the source
* **Full join**: Include all records from both models, regardless of matches

**Most common**: Inner join (only show records with matches in both tables)

## Incoming vs Outgoing Relationships

### Outgoing Relationships

Relationships you define in the current model pointing to other models.

### Incoming Relationships

Relationships defined in other models that point to the current model. These appear in your Relationships tab but can only be edited in the model where they were created.

When you view an incoming relationship, you'll see a note: "This relation is defined in another model. To modify it, please go to that model's relations page."

## Common Relationship Patterns

### User Activity

Connect users to their actions:

* `users` → `orders` (one user places many orders)
* `users` → `support_tickets` (one user creates many support tickets)

### Hierarchical Data

Connect entities to their parents:

* `organizations` → `users` (one organization has many users)
* `categories` → `products` (one category contains many products)

### Transactional Data

Connect transactions to entities:

* `orders` → `customers` (many orders belong to one customer)
* `order_items` → `products` (many order items reference one product)

## Best Practices

**Define relationships explicitly**: Don't rely on agents to guess how tables connect. Explicit relationships prevent join errors.

**Use clear names**: If you name a relationship, use a name that describes what the connection represents.

**Choose the right join type**: Most relationships use inner joins, but left joins are useful when you want to include records even if no match exists.

**Document both directions**: While relationships are defined in one model, think about how they work in both directions to ensure the cardinality is correct.
