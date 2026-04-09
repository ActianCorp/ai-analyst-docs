---
description: Connect MariaDB to Actian AI Analyst
---

# MariaDB

### Connect MariaDB to Actian AI Analyst

To connect your MariaDB instance to Actian AI Analyst, follow these steps:

* Create a dedicated read-only user.
* Grant access to the necessary databases or tables.
* Optionally configure SSL for secure connections.
* Allow Actian AI Analyst's IP Address (34.77.172.158)
* Set up the connection in the Actian AI Analyst interface.

⚠️ Actian AI Analyst's agents only run read-only queries on your data. No write or admin permissions are required.

***

#### 1. Create a Read-Only User in MariaDB

We recommend creating a separate technical user for Actian AI Analyst with read-only permissions.

```sql
-- Replace with your actual database and secure password
CREATE USER 'analyst_user'@'%' IDENTIFIED BY '<your_secure_password>';

-- Grant minimal access to the database
GRANT SELECT ON your_database.* TO 'analyst_user'@'%';

-- Apply changes
FLUSH PRIVILEGES;
```

✅ This user will only be able to read from the specified database. You can further restrict access to individual tables if needed.

***

#### 2. Optional: Enable SSL (Recommended)

If your MariaDB instance enforces or supports SSL connections, you can configure Actian AI Analyst to use SSL parameters.

To enable SSL:

* Ensure your MariaDB server is configured with SSL certificates.
* Allow SSL for the Actian AI Analyst user:

```sql
-- Enforce SSL for the user (optional)
REQUIRE SSL;
```

* In the Actian AI Analyst interface, enable "Use SSL" and upload the required certificates (CA cert, client cert, client key) if needed.

🔐 SSL is not required by default, but recommended for production environments to secure data in transit.

***

#### 3. Set Up the Connection in Actian AI Analyst

Click **Connections → Plus button → Select MariaDB** and fill in the following fields:

* **Host**: Your MariaDB server address
* **Port**: Usually `3306`
* **Database**: The name of the database you granted access to
* **Username**: `analyst_user`
* **Password**: The one you set earlier
* **Use SSL**: Optional, if your server supports/enforces it

Click **Test Connection** and then **Save**.

📂 Actian AI Analyst will only be able to access the data that `analyst_user` has permission to read.

***

#### That's It!

Actian AI Analyst is now connected to MariaDB and can start analyzing your data using natural language—no dashboards, no SQL, just answers.
