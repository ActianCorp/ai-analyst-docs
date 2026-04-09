---
description: Connect your Azure Synapse workspace to Actian AI Analyst
---

# Azure Synapse

Follow this guide to connect your Azure Synapse Analytics workspace to Actian AI Analyst and start building AI agents on your data.

To connect Azure Synapse to Actian AI Analyst, you'll need to:

* Create a SQL login and user in Synapse with read-only permissions.
* Allow Actian AI Analyst's static IP address through your firewall.
* Set up the connection in the Actian AI Analyst interface.

⚠️ Actian AI Analyst's agents only run read-only queries on your data. No write or admin privileges are required.



### 1. Create Login and User in Synapse

You'll need a SQL login and database user for Actian AI Analyst with read-only access.\
Use the following SQL commands, updating placeholders for your environment:

```sql
-- Create a server-level login
CREATE LOGIN analyst_synapse WITH PASSWORD = '<your_secure_password>';

-- Switch to your target database
USE [YourDatabaseName];

-- Create a user in the database linked to the login
CREATE USER analyst_user FOR LOGIN analyst_synapse;

-- Grant read-only access to all tables
ALTER ROLE db_datareader ADD MEMBER analyst_user;
```



### 2. Allow Actian AI Analyst's IP Address

To allow Actian AI Analyst's agents to connect, whitelist this static IP address in your Azure Synapse firewall rules:

```
34.77.172.158
```

Add this IP under "Firewall rules" for your Synapse workspace or SQL server.



### 3. Set Up the Connection in Actian AI Analyst

Click **Connections → Plus button → Select Azure Synapse**.\
Fill in the following fields:

* **Name:** Choose a descriptive name (e.g., `Sales Synapse`)
* **Server:** Your Synapse server address (e.g., `your-server.database.windows.net`)
* **Port:** 1433 (default)
* **Database Name:** The database you want to connect
* **Schema:** (Optional) Default is usually `dbo`
* **Encryption:** Enabled (recommended)
* **Username:** `analyst_synapse`
* **Password:** The password you set earlier

Once completed, click **Test Connection** to verify, then **Save Connection**.
