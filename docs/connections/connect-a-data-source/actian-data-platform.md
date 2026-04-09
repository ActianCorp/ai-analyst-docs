# Actian Data Platform

To connect your Actian Data Platform instance to Actian AI Analyst, follow these steps:

1. Create a **dedicated user** with read-only access.
2. Grant **read-only permissions** on the schemas you want to expose.
3. Allow **Actian AI Analyst's IP address** through your firewall or network rules.
4. Set up the connection in the **Actian AI Analyst interface**.

> **Actian AI Analyst's agents only run read-only queries** on your data. No write permissions are required.

***

#### 1. Create a Read-Only User in Actian

Create a dedicated database user for Actian AI Analyst with read-only access. Run the following SQL as a user with administrative privileges:

```sql
-- Create a user for Actian AI Analyst
CREATE USER actian_analyst_user WITH PASSWORD '<your_secure_password>';
```

***

#### 2. Grant Read-Only Access to Your Schemas

Grant Actian AI Analyst read access to the tables in the schemas you want to expose:

```sql
-- Grant read-only access to a specific schema
GRANT SELECT ON ALL TABLES IN SCHEMA your_schema_name TO actian_analyst_user;
```

Repeat this for each schema you want Actian AI Analyst to access.

> Security tip: only grant access to the schemas your analysts actually need. You can always add more schemas later.

***

#### 3. Allow Actian AI Analyst's IP Address

If your Actian instance is protected by firewall or network rules, allow inbound traffic from Actian AI Analyst's static IP:

```
34.77.172.158
```

***

#### 4. Set Up the Connection in Actian AI Analyst

1. Click **Connections → Plus button → Select Actian Data Platform**.
2. Fill in the following details:
    * **Connection string**: your Actian connection string, in the format `@<hostname>,tcp_ip,<port>::<database>` (e.g. `@av-043ios4r2921.avd.actiandatacloud.com,tcp_ip,27832::db`)
    * **Database**: the name of the database Actian AI Analyst should connect to
    * **Username**: `actian_analyst_user`
    * **Password**: the password you defined earlier
    * **Schemas**: select the schemas you granted access to in step 2
3. Test the connection and save.

***

#### That's It!

Actian AI Analyst is now connected to your Actian Data Platform and can start delivering insights with natural language queries—no SQL or dashboards needed.
