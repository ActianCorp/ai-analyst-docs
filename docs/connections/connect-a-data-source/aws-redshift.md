---
description: Connect AWS Redshift to Actian AI Analyst
---

# AWS Redshift

To connect your Amazon Redshift cluster to Actian AI Analyst, follow these steps:

* Create a user with read-only access.
* Grant access to the relevant database and schema.
* Allow inbound traffic from Actian AI Analyst's static IP.
* Set up the connection in the Actian AI Analyst interface.

⚠️ Actian AI Analyst's agents only run read-only queries on your data. No write or admin privileges are required.



#### 1. Create a Read-Only User in Redshift

You can use your existing admin account to create a technical user for Actian AI Analyst.\
Replace placeholders (e.g. `<your_strong_password>`, `analytics_db`, `public`) with your actual values.

```sql
-- Create the user
CREATE USER analyst_user WITH PASSWORD '<your_strong_password>';

-- Grant read-only access to the database and schema
GRANT CONNECT ON DATABASE analytics_db TO analyst_user;
GRANT USAGE ON SCHEMA public TO analyst_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO analyst_user;
GRANT SELECT ON ALL VIEWS IN SCHEMA public TO analyst_user;

-- Ensure access to future tables/views
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO analyst_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON VIEWS TO analyst_user;
```

✅ Use a dedicated database and schema for analytics/reporting if possible.\
✅ Only grant access to the data Actian AI Analyst should analyze.



#### 2. Allow Actian AI Analyst's IP Address (If Firewall Enabled)

If your Redshift cluster is behind a firewall or VPC security group, allow inbound traffic from Actian AI Analyst's static IP:

```
34.77.172.158
```

More detailed info on how to do this:

* In the AWS Console, go to **Redshift → Clusters**.
* Click your cluster, then look for **Network and security** settings.
* Find the **VPC security groups** list, and click the link to your cluster's security group.
* In the EC2 Security Groups page, go to the **Inbound rules** tab.
* Click **Edit inbound rules**.
* Add a new rule:
  * **Type:** Redshift (or Custom TCP)
  * **Port:** 5439 (or your configured port)
  * **Source:** `34.77.172.158` (Actian AI Analyst's static IP)
* Save the rule.


