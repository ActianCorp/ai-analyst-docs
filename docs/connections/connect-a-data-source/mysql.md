---
description: Connect a MySQL Database to Actian AI Analyst
---

# MySQL

### Connect MySQL to Actian AI Analyst

To connect your MySQL database to Actian AI Analyst, follow these steps:

* Create a read-only user account.
* Grant access to the necessary databases and tables.
* Set up the connection in the Actian AI Analyst interface.

⚠️ Actian AI Analyst's agents only run **read-only queries** on your data. No write or administrative privileges are required.

***

#### 1. Create a Read-Only User in MySQL

Create a dedicated MySQL user that Actian AI Analyst will use to query your data. This user should be restricted to only what's necessary for analysis.

```sql
-- Replace with your secure username and password
CREATE USER 'analyst_user'@'%' IDENTIFIED BY 'your_secure_password';

-- Grant usage access (no database access yet)
GRANT USAGE ON *.* TO 'analyst_user'@'%';
```

✅ Use a strong password and avoid reusing credentials across systems.

***

#### 2. Grant Read-Only Access to Data

Decide which databases and tables Actian AI Analyst should access, typically your reporting or analytics schemas.

```sql
-- Replace `your_database` and `your_table` with actual names
GRANT SELECT ON your_database.* TO 'analyst_user'@'%';
```

🔐 This provides Actian AI Analyst read-only access to all tables in the specified database. If you want finer control, you can grant access on a per-table basis:

```sql
 SELECT ON your_database.sales_data TO 'analyst_user'@'%';
GRANT SELECT ON your_database.customer_summary TO 'analyst_user'@'%';
```

✅ For multi-schema environments, repeat the grant process for each schema or table Actian AI Analyst needs.

***

#### 3. Optional Configuration (Recommended)

* **Restrict Host Access:** For added security, limit login access to specific IP ranges if your MySQL server supports it.
* **Limit Resource Usage:** You can apply resource limits (like `MAX_QUERIES_PER_HOUR`) on the user if needed.

***

#### 4. Set Up the Connection in Actian AI Analyst

1. Click **Connections → Plus button → Select MySQL**.
2. Fill in the following details:
   * **Host:** your MySQL server hostname or IP address
   * **Port:** default is `3306` unless changed
   * **Database:** the default database Actian AI Analyst should use
   * **Username:** `analyst_user`
   * **Password:** the secure password you set
   * **SSL:** enable if your MySQL instance requires encrypted connections
4. Test the connection and click **Save**.

📂 Actian AI Analyst only queries the data the user can see—if the user doesn't have access, Actian AI Analyst won't either.

***

#### That's It!

Actian AI Analyst is now connected to MySQL. You can start asking questions in natural language—no dashboards, no SQL—just insights.
