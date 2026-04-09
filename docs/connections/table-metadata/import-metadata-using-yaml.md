# Import metadata using YAML

Actian AI Analyst lets you quickly set up or update table metadata by importing a YAML file. This is useful when migrating metadata from other tools.

#### How the YAML Import Works

* You upload a YAML file describing your tables, columns, and relationships.
* Actian AI Analyst uses this file to populate or overwrite metadata for the specified table.
* You can also export existing metadata to YAML format for backup or migration purposes.

#### Full YAML Metadata Structure

```yaml
models:
  - name: <table_name>                     # [Required] The exact name of the table in your database.

    description: <table_description>        # [Optional] Business description of what this table represents.
                                            # Used by AI Agents for context and understanding.

    columns:                               # [Required] List of columns in this table.
      - name: <column_name>                 # [Required] The exact name of the column in the database.
        description: <column_description>   # [Optional] Business-friendly description and any logic/rules.
        rules: <business_rules>             # [Optional] Any business validation or constraints for the column.
        semantic_type: <semantic_type>      # [Optional] Label for the kind of data (e.g., NAME, EMAIL, STATUS).
        data_type: <data_type>              # [Optional but recommended] Data type (e.g., string, bigint, date).
        visible: <true|false>               # [Optional, default: true] Set to false to hide from AI Agents.
        is_primary_key: <true|false>        # [Optional] Indicates if this column is a primary key.

    relationships:                         # [Optional] List of table relationships.
      - name: <relationship_name>           # [Required if relationships are defined] Unique name for this relationship.
        description: <relationship_description>   # [Optional] Description of the relationship.
        source_column: <column_name>        # [Required] The column in this table that links to another table.
        target_table: <target_table_name>   # [Required] The referenced table.
        target_column: <target_column_name> # [Required] The referenced column in the target table.
        type: <relationship_type>           # [Required] Type of relationship (e.g., one_to_many, many_to_one).

```

#### Available Semantic Types

You can use these predefined `semantic_type` values in your column metadata for improved AI context and query understanding:

| Semantic Type  | Description                                |
| -------------- | ------------------------------------------ |
| DATE           | Calendar date (e.g., 2024-06-01)           |
| TIME           | Time of day (e.g., 13:45:00)               |
| TIMESTAMP      | Date and time (e.g., 2024-06-01T13:45:00Z) |
| DURATION       | Time duration (e.g., 5 minutes, 2 hours)   |
| CURRENCY       | Monetary value (e.g., $100, EUR 50)        |
| PERCENTAGE     | Percent values (e.g., 85%)                 |
| QUANTITY       | Raw quantity or count                      |
| STATUS         | State or status (e.g., active, pending)    |
| EMAIL          | Email address                              |
| URL            | Web URL                                    |
| FULL\_TEXT     | Paragraph or long-form text                |
| NAME           | Person, company, or entity name            |
| DESCRIPTION    | Free-text description                      |
| CODE           | Code, SKU, or other code-like string       |
| IDENTIFIER     | Any unique identifier (e.g., ID)           |
| SCORE          | Scoring metric (numeric)                   |
| BOOLEAN\_FLAG  | True/False, Yes/No indicators              |
| PHONE\_NUMBER  | Telephone number                           |
| COUNTRY\_CODE  | Country code (e.g., US, DE, FR)            |
| LANGUAGE\_CODE | Language code (e.g., en, de, fr)           |
| LATITUDE       | Latitude coordinate                        |
| LONGITUDE      | Longitude coordinate                       |
| WEIGHT         | Weight measurement (e.g., kg, lbs)         |
| DISTANCE       | Distance measurement (e.g., km, mi)        |
| TEMPERATURE    | Temperature (e.g., 20°C)                   |
| CATEGORICAL    | Categorical/enum value                     |

Set the `semantic_type` field on a column to one of these for best results.

***

#### Table Relationships and Cardinality Types

To define relationships between tables, use the `relationships` block in your YAML metadata. Every relationship describes how rows in this table map to rows in another table.

**Cardinality Types**

Set the `type` field in each relationship to specify cardinality:

| Relationship Type | Meaning                                                                   |
| ----------------- | ------------------------------------------------------------------------- |
| `one_to_many`     | One record in this table relates to **many** records in the target table  |
| `many_to_one`     | Many records in this table relate to **one** record in the target table   |
| `one_to_one`      | One record in this table relates to **one** record in the target table    |
| `many_to_many`    | Many records in this table relate to **many** records in the target table |

**Examples:**

* `one_to_many`: An organization has many users
* `many_to_one`: Many orders belong to one customer
* `one_to_one`: One user profile for each user
* `many_to_many`: Students enrolled in many courses, courses have many students

**YAML Example:**

```yaml
relationships:
  - name: org_to_users
    description: Organization to user relationship
    source_column: org_id
    target_table: users
    target_column: org_id
    type: one_to_many
```

#### Full example YAML File

```yaml
models:
  - name: lh_suppliers               # Table name (required)
    description: Supplier master table for all vendors.   # Table description (recommended)
    columns:
      - name: supplier_id            # Column name (required)
        description: Unique identifier for supplier  # Column description (recommended)
        rules: Auto-generated, must be unique
        semantic_type: IDENTIFIER
        data_type: bigint
        visible: true                # true = visible to AI Agents
        is_primary_key: true         # Marks this column as a primary key
      - name: name                   
        description: Name of the supplier  
        rules: Must be unique and non-empty
        semantic_type: NAME
        data_type: string
        visible: true
        is_primary_key: false
      - name: status
        description: Supplier status
        rules: Must be one of: active, inactive, pending
        semantic_type: STATUS
        data_type: string
        visible: true
    relationships:
      - name: supplier_products
        description: Each supplier can have multiple products
        source_column: supplier_id
        target_table: lh_products
        target_column: supplier_id
        type: one_to_many
```

####
