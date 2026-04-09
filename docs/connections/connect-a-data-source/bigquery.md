---
description: Connect BigQuery to Actian AI Analyst
---

# BigQuery

## Connect BigQuery to Actian AI Analyst

To connect your Google BigQuery project to Actian AI Analyst, follow these steps:

1. Create a **service account** for Actian AI Analyst access.
2. Grant **read-only permissions** to the datasets.
3. Download and upload the **service account key** to Actian AI Analyst.
4. Set up the connection in the **Actian AI Analyst interface**.

> ⚠️ **Actian AI Analyst’s agents only run read-only queries** on your data. No write or admin privileges are needed.

***

### 1. Create a Service Account

1. Go to the **Google Cloud Console** → IAM & Admin → Service Accounts.
2. Click **Create Service Account**.
3. Name it something like `analyst-access`.
4. Skip granting roles at this stage (you’ll assign dataset-specific roles next).
5. After creation, go to the account and **create a JSON key**:
   * Click **Keys** tab → **Add Key** → **Create New Key (JSON)**.
   * Save the JSON file. You’ll upload this to Actian AI Analyst in the next step.

***

### 2. Grant the right permissions

#### - Grant Read Access BigQuery Datasets

Assign the service account access to only the datasets you want Actian AI Analyst to query. You can do this at the dataset level or project level (if needed).

To grant access at the **dataset level**:

1. Go to **BigQuery → your dataset**.
2. Click **Sharing** (or open the "Permissions" tab).
3. Add the service account email (e.g. `analyst-access@your-project.iam.gserviceaccount.com`).
4.  Assign the role:

    ```
    BigQuery Data Viewer (roles/bigquery.dataViewer)
    ```

✅ This gives the Actian AI Analyst agent read-only access to the dataset—tables, views, and metadata.

#### - Grant Job-Level Permission

Actian AI Analyst agents need permission to **run queries**, not just read data. To allow this, grant the following role:

* `BigQuery Job User` (`roles/bigquery.jobUser`)

You can assign this at the **project level** or to specific resources, depending on your security preferences.

📌 Without this role, the service account will not be able to execute queries, even if it has read access.

***

### 3. Allow Actian AI Analyst’s IP Address

If your BigQuery server is protected by firewall or network rules, allow inbound traffic from Actian AI Analyst’s static IP:

```
34.77.172.158
```

***

### 4. Upload Service Account Key to Actian AI Analyst

Make sure you have the JSON key file downloaded (from Step 1).

You’ll upload this file directly in the Actian AI Analyst interface to authenticate the connection.

***

### 5. Set Up the Connection in Actian AI Analyst

1. Click **Connections → Plus button → Select BigQuery**.
2. Fill in the following details:
   * **Project ID**: your Google Cloud project
   * **Default Dataset**: the one Actian AI Analyst should start with
   * **Service Account Key**: paste the JSON key file
3. Test the connection and save.

> 📂 Actian AI Analyst will respect the access scopes set in BigQuery—only querying what the service account can see.

***

### That’s It!

Actian AI Analyst is now connected to BigQuery and can start analyzing your data using natural language—no dashboards, no SQL, just answers.
