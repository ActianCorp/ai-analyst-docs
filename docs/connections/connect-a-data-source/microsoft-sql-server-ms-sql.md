---
description: Connect your Microsoft SQL Server database to Actian AI Analyst
---

# Microsoft SQL Server  (MS SQL)

Follow this guide to connect your Microsoft SQL Server to Actian AI Analyst and start building agents on top of your data.&#x20;

To connect your Microsoft SQL Server database to Actian AI Analyst, you'll need to:

1. Create a **login and user** in your SQL Server.
2. Grant the necessary **read-only permissions**.
3. Allow **Actian AI Analyst's IP address** through your firewall or network rules.
4. Set up the connection in the **Actian AI Analyst interface**.

> ⚠️ **Actian AI Analyst's agents only run read-only queries** on your data. Write permissions are never used.

***

### 1. Create Login and User in SQL Server

You'll need to create a server-level login and a database-level user that Actian AI Analyst can use to connect. The following SQL script sets up a read-only user for Actian AI Analyst:

```sql
-- Replace placeholder values with your actual database, schema, and password.

-- Create server-level login
CREATE LOGIN analyst_login WITH PASSWORD = '<your_secure_password>';

-- Switch to your target database
USE YourDatabaseName;

-- Create a database-level user linked to the login
CREATE USER analyst_user FOR LOGIN analyst_login;

-- Grant read-only access to all tables
ALTER ROLE db_datareader ADD MEMBER analyst_user;

```

> ✅ The `db_datareader` role gives read-only access to **all current and future tables** in the database.



### 2. Allow Actian AI Analyst's IP Address

If your SQL Server is behind a firewall or uses network policies, make sure to allow inbound traffic from Actian AI Analyst's static IP:

```
34.77.172.158
```

> This is required for Actian AI Analyst's agents to access your database.

### 3. Set Up the Connection in Actian AI Analyst

1. Click **Connections → Plus button → Select MS SQL**.
2. Fill in the following details:
    * **Host**: your SQL Server address
    * **Port**: typically 1433
    * **Database name**: the one where `analyst_user` has access
    * **Username**: `analyst_login`
    * **Password**: the password you defined earlier
4. Test the connection and save.
