# Import Actian AI Analyst Format (YAML / JSON)

The Actian AI Analyst native format is the most complete import format. It supports all entity types with full field-level detail, ID-based matching for renames, and multi-file uploads.

Use this format for backups, migrations between Actian AI Analyst environments, or programmatic bulk updates.

***

### Supported File Types

* `.yaml` / `.yml`
* `.json`

Both formats use the same structure — only the serialization differs.

***

### File Structure

```yaml
version: "1.0"
exported_at: "2026-01-28T00:00:00Z"

models:
  - id: "model_xyz"
    name: "Orders"
    description: "All customer orders"
    agent_guidance: "Use this model for order-related questions"
    source:
      data_source_name: "PostgreSQL DB"
      type: "TABLE"           # TABLE, VIEW, or CUSTOM_QUERY
      path: ["public", "orders"]
      query: null              # Only for CUSTOM_QUERY
    grain:
      keys: ["id"]
      description: "One row per order"
    dimensions:
      - id: "dim_001"
        name: "Order ID"
        expression: "id"
        type: "number"
        description: "Unique order identifier"
        primary_key: true
        time_grains: []
        sample_values: ["1001", "1002", "1003"]
        enum_values: []
      - id: "dim_002"
        name: "Status"
        expression: "status"
        type: "string"
        description: "Current order status"
        primary_key: false
        enum_values:
          - value: "pending"
            description: "Awaiting processing"
            sort_order: 1
          - value: "shipped"
            description: "In transit"
            sort_order: 2
    measures:
      - id: "meas_001"
        name: "Total Amount"
        expression: "SUM(amount)"
        description: "Sum of order amounts"
        unit: "USD"
        precision: 2
    filters:
      - id: "filter_001"
        name: "Active Orders"
        expression: "status != 'cancelled'"
        description: "Excludes cancelled orders"
        apply_default: false

relationships:
  - id: "rel_001"
    name: "Orders to Customers"
    description: "Each order belongs to a customer"
    from_model: "Orders"
    from_key: "customer_id"
    to_model: "Customers"
    to_key: "id"
    type: "one_to_many"
    join_type: "left"

metrics:
  - id: "metric_001"
    name: "Total Revenue"
    description: "Sum of all order amounts"
    agent_guidance: "Use for revenue questions"
    expression: "SUM(amount)"
    anchor_model: "Orders"
    unit: "USD"
    precision: 2
    time_dimension:
      model: "Orders"
      dimension: "Order Date"
    time_grains: ["day", "month", "year"]
    group_by_dimensions:
      - model: "Orders"
        dimension: "Status"
    joins:
      - alias: "customer"
        from_key: "customer_id"
        to_model: "Customers"
        to_key: "id"
        join_type: "left"
    filters:
      - expression: "amount > 0"
        apply_default: true
    tags: ["revenue", "business"]

glossary:
  - id: "term_001"
    term: "Revenue"
    definition: "Total sales amount before deductions"
    synonyms: ["Income", "Sales"]
    tags: ["financial"]
    mappings:
      - type: "metric"
        name: "Total Revenue"
      - type: "model"
        name: "Orders"
      - type: "dimension"
        model: "Orders"
        name: "Amount"

agents:
  - id: "agent_001"
    name: "Sales Analyst"
    description: "Answers questions about sales performance"
    instructions: "Focus on revenue trends and customer segments"
    semantic_layer_access:
      models:
        - name: "Orders"
          dimensions: ["Order ID", "Status", "Order Date"]
          measures: ["Total Amount"]
          filters: ["Active Orders"]
      metrics: ["Total Revenue"]
      glossary:
        mode: "INCLUDE_TAGS"   # ALL, INCLUDE_TAGS, or EXCLUDE_TAGS
        tags: ["financial"]
```
