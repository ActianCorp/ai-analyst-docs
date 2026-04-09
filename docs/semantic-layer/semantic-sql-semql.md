---
hidden: true
---

# Semantic SQL (SemQL)

**SemQL** is the query language our AI agents use to talk to your data.

Instead of wrestling with table schemas, join conditions, and SQL syntax, agents query using business concepts—models, dimensions, measures, and filters. SemQL translates these semantic references into executable SQL, handling all the complexity behind the scenes.

Think of it as the bridge between how you think about your business and how your database actually stores information.

### The Problem with Raw SQL

Let's say you want to know: _"How many users does each active organization have?"_

In traditional SQL, you'd write something like this:

```sql
SELECT
  o.organization_name,
  COUNT(DISTINCT u.user_id) as user_count
FROM analytics_marts.dim_app_organizations o
JOIN analytics_marts.dim_app_users u
  ON o.organization_id = u.organization_id
WHERE o.current_member_count > 0
GROUP BY o.organization_name
```

To write this query correctly, you need to know:

* Exact table names and schemas (`analytics_marts.dim_app_organizations`)
* Precise column names (`organization_name`, not `org_name` or `name`)
* How tables relate (which columns to join on)
* When to use `COUNT` vs `COUNT(DISTINCT)`
* SQL aggregation rules (GROUP BY requirements)

And here's the real problem: if your teammate writes the same query tomorrow, they might count users differently. Maybe they'll forget the `current_member_count > 0` filter. Or use `COUNT(*)` instead of `COUNT(DISTINCT user_id)`. Suddenly, you have two different "user counts" in your organization.

### The SemQL Approach

With SemQL, the same query becomes:

```sql
SELECT
  {{ organizations.name }},
  {{ organizations.user_count }}
FROM {{ organizations[active_only] }}
JOIN WITH {{ organizations_to_users }}
GROUP BY {{ organizations.name }}
```

See what happened? The `{{ }}` brackets mark semantic references—business terms that SemQL looks up in your semantic layer and translates to the actual SQL.

More importantly, `user_count` is a **predefined measure**. Someone already figured out the correct way to count users (with `DISTINCT`, handling nulls properly, etc.). Now every query uses that same logic. No one has to reinvent the wheel, and everyone gets the same answer.

### Why This Matters for AI Agents

When you ask an AI agent _"Show me revenue by region for the last quarter"_, it needs to:

1. Understand your question
2. Generate a query
3. Get you an answer

With raw SQL, step 2 is a nightmare. The agent has to figure out:

* How your database is structured
* How to calculate "revenue" correctly (which columns? any exclusions?)
* What "last quarter" means in your data
* How to join tables properly

With SemQL, the agent simply references `{{ sales.revenue }}` and `{{ customers.region }}`. The semantic layer already knows:

* Revenue is the SUM of `transaction_amount` minus `refunds`
* Regions come from the `customers` table
* These tables join on `customer_id`

The agent doesn't reinvent calculations or guess at schemas. It uses **predefined measures** and **predefined filters** that your team has already set up. This means:

* **Consistent metrics**: Every agent query uses the same "revenue" calculation
* **Less cognitive load**: Agents don't have to reason through complex SQL logic
* **Faster results**: No time wasted figuring out schemas or debugging joins
* **Built-in governance**: Guardrails ensure queries follow your data access rules

### Core Concepts

#### Models

A **model** is a business entity—`organizations`, `users`, `sales`, `products`. Each model maps to a database table (or sometimes a view or subquery).

```sql
FROM {{ organizations }}
```

Models can have **auto-applied filters**—guardrails that automatically apply to every query. For example, if your `transactions` model has an auto-filter for `status = 'completed'`, then every query against `{{ transactions }}` only sees completed transactions. You can't accidentally include test data or invalid records.

This is governance built into the data layer itself.

#### Dimensions

**Dimensions** are the attributes you slice and dice by—names, dates, categories, IDs. They're the columns you'd put in a `SELECT`, `GROUP BY`, or `WHERE` clause.

```sql
{{ organizations.name }}
{{ users.email }}
{{ sales.date }}
```

Dimensions can be simple columns or complex expressions. Maybe `{{ users.full_name }}` is actually `CONCAT(first_name, ' ', last_name)` under the hood. Agents don't need to know—they just reference `full_name`.

#### Measures

**Measures** are predefined calculations—the metrics your business cares about. They're already aggregated (SUM, COUNT, AVG, etc.) and include all the business logic needed to calculate them correctly.

```sql
{{ organizations.user_count }}       -- COUNT(DISTINCT user_id)
{{ sales.total_revenue }}            -- SUM(amount - refunds)
{{ products.average_rating }}        -- AVG(rating) with null handling
```

This is huge for agents. Instead of reasoning through "how do I count users correctly?" every time, they just reference `{{ organizations.user_count }}`. The logic is centralized. Everyone gets the same answer.

If you later decide user counts should exclude internal test users, you update the measure definition once. Every query—past, present, and future—uses the new logic.

#### Filters

**Filters** are reusable `WHERE` conditions that you apply to models.

```sql
FROM {{ organizations[active_only] }}
FROM {{ users[enterprise_customers] }}
FROM {{ sales[last_quarter, high_value] }}
```

Filters let agents use business concepts (`active_only`, `enterprise_customers`) without knowing the underlying SQL logic. Maybe "active" means `member_count > 0` today, but next month it means `last_activity_date > NOW() - 30 days`. Agents don't care—they just say `active_only` and get the right data.

You can combine multiple filters too: `{{ sales[last_quarter, high_value] }}` applies both conditions automatically.

### Benefits of Actian AI Analyst's SemQL

#### Predefined Measures Save Time

Without SemQL, every agent query has to figure out how to calculate metrics from scratch. How do you count active users? What constitutes "revenue"? Should we use `SUM` or `COUNT(DISTINCT)`?

With SemQL, these calculations are defined once as **measures**. Agents just reference them. No reinventing, no inconsistencies, no bugs from subtle calculation differences.

#### Predefined Filters Ensure Consistency

Imagine asking three different agents "show me enterprise customers." Without SemQL, each might interpret "enterprise" differently (>100 employees? >$50K revenue? custom plan?).

With SemQL, `{{ customers[enterprise] }}` has one definition. Everyone—humans and agents—uses the same criteria.

#### Guardrails Prevent Mistakes

Models can have **auto-applied filters** that work like guardrails. Maybe your `transactions` model only ever shows completed transactions, automatically excluding pending or failed ones. You can't accidentally analyze incomplete data—it's just not in the model.

Want to ensure agents never accidentally query PII data from a development environment? Add an auto-filter. Done.

#### Schema Changes Don't Break Queries

When your database evolves (tables get renamed, columns move around), raw SQL queries break. With SemQL, you update the semantic layer once. All queries keep working because they reference semantic names, not physical tables.

#### Built-in Security

SemQL blocks dangerous operations by design—no `DELETE`, `DROP`, `UPDATE`, or SQL injection. Queries can only read data, never modify it. Agents can explore freely without risk.

### Example Queries

#### Simple: List all organizations

```sql
SELECT {{ organizations.name }}
FROM {{ organizations }}
```

#### Filtered: Show only active organizations

```sql
SELECT {{ organizations.name }}
FROM {{ organizations[active_only] }}
```

#### Using predefined measures

```sql
SELECT
  {{ organizations.name }},
  {{ organizations.user_count }}
FROM {{ organizations[active_only] }}
```

The agent doesn't calculate `user_count` from scratch—it's already defined as a measure.

#### Multiple filters

```sql
SELECT
  {{ sales.product_name }},
  {{ sales.total_revenue }}
FROM {{ sales[last_quarter, high_value] }}
GROUP BY {{ sales.product_name }}
```

Both `last_quarter` and `high_value` filters apply automatically.

#### Get total revenue by region

```sql
SELECT
  {{ customers.region }},
  {{ sales.total_revenue }}
FROM {{ sales }}
JOIN {{ customers }}
  ON {{ sales.customer_id }} = {{ customers.customer_id }}
GROUP BY {{ customers.region }}
```

### How It Works

When an agent generates a SemQL query, here's what happens:

1. **Parsing**: Extract all `{{ }}` references (models, dimensions, measures, filters)
2. **Semantic validation**: Check that everything exists and is being used correctly (dimensions in GROUP BY, measures aren't double-aggregated, etc.)
3. **Security validation**: Block dangerous operations (writes, SQL injection, etc.)
4. **Resolution**: Look up each semantic reference and translate it to actual SQL
5. **Compilation**: Generate the final executable SQL
6. **Execution**: Run it against your database

The whole compilation process takes milliseconds. The resulting SQL is cached per organization, so identical queries reuse compiled results.

### The Big Picture

SemQL is the language our AI agents use to query your data. By abstracting away database complexity and centralizing metric definitions, it ensures:

* **Agents don't reinvent the wheel** — they use predefined measures and filters
* **Everyone gets the same answer** — metrics are calculated consistently
* **Queries are safe** — built-in guardrails and auto-applied filters
* **Your data model can evolve** — schema changes don't break queries
* **Results are faster** — agents spend less time figuring out SQL logic

The result? AI agents that can explore your data intelligently, without needing to be database experts—and without risk of inconsistent metrics or dangerous queries.

It's not just about making queries easier. It's about making data governance scalable.
