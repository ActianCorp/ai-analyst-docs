---
description: Connect Snowflake to Actian AI Analyst
---

# Snowflake

## Connect Snowflake to Actian AI Analyst

To connect your Snowflake instance to Actian AI Analyst, follow these steps:

1. Create a **dedicated role and user**.
2. Grant **read-only access** to your data.
3. Optionally allow **access to query history** or **shared databases**.
4. Set up the connection in the **Actian AI Analyst interface**.

> ⚠️ **Actian AI Analyst's agents only run read-only queries** on your data. No write permissions are required.

***

### 1. Create Role and User in Snowflake

This setup defines a technical user and role for Actian AI Analyst to use. Replace placeholder values with your actual warehouse name and a secure password.

```sql
-- Create role and user
CREATE ROLE analyst_role;

CREATE USER analyst_user
  PASSWORD = '<your_secure_password>'  -- Define a secure password
  DEFAULT_WAREHOUSE = example_wh       -- Use your existing warehouse
  DEFAULT_ROLE = analyst_role;

-- Link the role to the user
GRANT ROLE analyst_role TO USER analyst_user;

-- Allow warehouse usage
GRANT USAGE ON WAREHOUSE example_wh TO ROLE analyst_role;
```

> ✅ It's okay to use a shared warehouse (like `example_wh`) to save on compute costs. A small size (like `XS`) is typically sufficient.

***

### 2. Grant Read-Only Access to Data

Actian AI Analyst only needs access to specific schemas or tables you want to expose—typically reporting or analytics tables.

To allow Actian AI Analyst agents to detect relationships between tables (via foreign keys), ensure the role has access to `INFORMATION_SCHEMA.KEY_COLUMN_USAGE`.

Actian AI Analyst will use this to interpret how your tables are linked, which improves question understanding and chart logic.

```sql
-- Replace these with your actual names
SET db_name = 'example_db';
SET schema_name = 'example_schema';
SET db_schema_name = $db_name || '.' || $schema_name;

-- Grant access to data objects
GRANT USAGE ON DATABASE IDENTIFIER($db_name) TO ROLE analyst_role;
GRANT USAGE ON SCHEMA IDENTIFIER($db_schema_name) TO ROLE analyst_role;

GRANT SELECT ON ALL TABLES IN SCHEMA IDENTIFIER($db_schema_name) TO ROLE analyst_role;
GRANT SELECT ON FUTURE TABLES IN SCHEMA IDENTIFIER($db_schema_name) TO ROLE analyst_role;

GRANT SELECT ON ALL VIEWS IN SCHEMA IDENTIFIER($db_schema_name) TO ROLE analyst_role;
GRANT SELECT ON FUTURE VIEWS IN SCHEMA IDENTIFIER($db_schema_name) TO ROLE analyst_role;

GRANT SELECT ON ALL MATERIALIZED VIEWS IN SCHEMA IDENTIFIER($db_schema_name) TO ROLE analyst_role;
GRANT SELECT ON FUTURE MATERIALIZED VIEWS IN SCHEMA IDENTIFIER($db_schema_name) TO ROLE analyst_role;
```

> 🔐 This gives Actian AI Analyst read-only access to the full schema, including all present and future tables, views, and materialized views.

***

### 3. Optional Grants

#### For Shared Databases

If you're using a **shared database** (e.g. from a data provider or marketplace):

```sql
GRANT IMPORTED PRIVILEGES ON DATABASE shared_external_db TO ROLE analyst_role;
```

#### Grant Metadata Access for Foreign Keys

To allow Actian AI Analyst agents to detect relationships between tables (via foreign keys), ensure the role has access to `INFORMATION_SCHEMA.KEY_COLUMN_USAGE`.

Actian AI Analyst will use this to interpret how your tables are linked, which improves question understanding and chart logic.

```sql
-- Grant USAGE on INFORMATION_SCHEMA
GRANT USAGE ON SCHEMA example_db.INFORMATION_SCHEMA TO ROLE analyst_role;

-- Grant SELECT on the relevant metadata view
GRANT SELECT ON VIEW example_db.INFORMATION_SCHEMA.KEY_COLUMN_USAGE TO ROLE analyst_role;
```

#### For Query History (Optional)

If you want Actian AI Analyst to access account-level **query history** or metadata:

```sql
GRANT IMPORTED PRIVILEGES ON DATABASE SNOWFLAKE TO ROLE analyst_role;
```

***

### 4. Allow Actian AI Analyst's IP Address

If your Snowflake server is protected by firewall or network rules, allow inbound traffic from Actian AI Analyst's static IP:

```
34.77.172.158
```

***

### 5. Set Up the Connection in Actian AI Analyst

1. Click **Connections → Plus button → Select Snowflake**.
2. Fill in the following details:
    * **Account name**: your Snowflake account identifier
    * **Warehouse**: the warehouse assigned to `analyst_user`
    * **Database & Schema**: the ones Actian AI Analyst should query
    * **Username**: `analyst_user`
    * **Password**: the one you set earlier
4. Test the connection and save.

***

### That's It!

Actian AI Analyst is now connected to Snowflake and can start delivering insights with natural language queries—no SQL or dashboards needed.
