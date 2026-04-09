---
description: Connect a PostgreSQL Database
---

# PostgreSQL

## Connect PostgreSQL to Actian AI Analyst

To connect your PostgreSQL database to Actian AI Analyst, follow these steps:

1. Create a **login role and user** in your database.
2. Grant **read-only permissions**.
3. Allow **Actian AI Analyst's IP address** through your firewall or security rules.
4. Set up the connection in the **Actian AI Analyst interface**.

> ⚠️ **Actian AI Analyst's agents only run read-only queries** on your data. Write permissions are never used.

***

### 1. Create Role and User in PostgreSQL

In PostgreSQL, roles can act as both login accounts and permission holders. The following SQL sets up a login with read-only access for Actian AI Analyst:

```sql
-- Replace placeholder values with your actual schema and secure password

-- Create login role
CREATE ROLE analyst_login WITH LOGIN PASSWORD '<your_secure_password>';

-- Grant connection and usage privileges on the database
GRANT CONNECT ON DATABASE your_database_name TO analyst_login;

-- Grant usage on schema
GRANT USAGE ON SCHEMA your_schema_name TO analyst_login;

-- Grant read-only access to existing tables
GRANT SELECT ON ALL TABLES IN SCHEMA your_schema_name TO analyst_login;

-- Grant read-only access to existing views
GRANT SELECT ON ALL SEQUENCES IN SCHEMA your_schema_name TO analyst_login;
```

> ✅ This setup gives Actian AI Analyst read access to the specified schema.

***

### 2. Optional: Auto-Grant Future Access

PostgreSQL supports default privileges, so you can configure it to automatically grant access to new tables and views:

```sql
-- Make sure this is run by a role that owns the schema
ALTER DEFAULT PRIVILEGES IN SCHEMA your_schema_name
GRANT SELECT ON TABLES TO analyst_login;
```

> 🔄 This ensures Actian AI Analyst gets access to future tables without needing manual grants.

***

### 3. Allow Actian AI Analyst's IP Address

If your PostgreSQL server is protected by firewall or network rules, allow inbound traffic from Actian AI Analyst's static IP:

```
34.77.172.158
```

> This is required for Actian AI Analyst's agents to connect.

***

### 4. Set Up the Connection in Actian AI Analyst

1. Click **Connections → Plus button → Select PostgreSQL**.
2. Fill in the following details:
   * **Host**: your PostgreSQL server address
   * **Port**: typically 5432
   * **Database name**: the one where `analyst_login` has access
   * **Username**: `analyst_login`
   * **Password**: the password you defined earlier
4. Test the connection and save.

***
