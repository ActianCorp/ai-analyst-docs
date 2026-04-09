---
description: Connect a ClickHouse Database to Actian AI Analyst
---

# ClickHouse

### Connect ClickHouse to Actian AI Analyst

To connect your ClickHouse instance to Actian AI Analyst, follow these steps:

* Create a read-only user account.
* Grant read-only access to the necessary databases.
* Allow Actian AI Analyst's IP address through your firewall or network rules.
* Set up the connection in the Actian AI Analyst interface.

⚠️ Actian AI Analyst's agents only run **read-only queries** on your data. No write or administrative privileges are required.

***

#### 1. Create a Read-Only User in ClickHouse

Create a dedicated ClickHouse user that Actian AI Analyst will use to query your data.

```sql
-- Replace with your chosen username and a secure password
CREATE USER analyst_user IDENTIFIED BY 'your_secure_password';
```

✅ Use a strong password and avoid reusing credentials from other systems.

***

#### 2. Grant Read-Only Access to Data

Grant the user read-only (`SELECT`) access to the databases Actian AI Analyst should be able to analyze.

```sql
-- Grant SELECT on all tables in a specific database
GRANT SELECT ON your_database.* TO analyst_user;
```

🔐 Repeat for each database Actian AI Analyst should have access to. If you want finer control, you can grant access on a per-table basis:

```sql
GRANT SELECT ON your_database.orders TO analyst_user;
GRANT SELECT ON your_database.customers TO analyst_user;
```

✅ Actian AI Analyst will only query data the user has access to—if the user doesn't have access, Actian AI Analyst won't either.

***

#### 3. Allow Actian AI Analyst's IP Address

If your ClickHouse server is protected by firewall or network rules, allow inbound traffic from Actian AI Analyst's static IP:

```
34.77.172.158
```

> This is required for Actian AI Analyst's agents to connect to your ClickHouse instance.

***

#### 4. Set Up the Connection in Actian AI Analyst

1. Click **Connections → Plus button → Select ClickHouse**.
2. Fill in the following details:
   * **Host**: your ClickHouse server hostname or IP address
   * **Port**: default is `8123` (HTTP) or `8443` (HTTPS/SSL) — leave as default unless your instance uses a custom port
   * **Database**: the default database Actian AI Analyst should connect to
   * **Database schemas**: select the databases Actian AI Analyst is allowed to query
   * **Username**: `analyst_user`
   * **Password**: the secure password you set
   * **SSL**: enable if your ClickHouse instance requires encrypted connections
3. Test the connection and click **Save**.

> 📌 **ClickHouse Cloud users**: If your host ends in `.clickhouse.cloud`, Actian AI Analyst will automatically enable SSL and switch the port to `8443`.

***

#### That's It!

Actian AI Analyst is now connected to ClickHouse. You can start asking questions in natural language—no dashboards, no SQL—just insights.
