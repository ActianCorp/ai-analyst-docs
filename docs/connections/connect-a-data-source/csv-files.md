# CSV files

## Upload CSV Files to Actian AI Analyst

CSV upload is a quick way to try out Actian AI Analyst with your own data. This is great for **demos, prototypes, or testing**, but it is **not meant as a long-term or production data source**.

For live, trusted analysis, we strongly recommend connecting to your **real data warehouse** (e.g. Snowflake, BigQuery, etc.).

***

### 1. Prepare Your CSV File

Make sure your CSV file is clean, well-structured, and encoded in a way Actian AI Analyst can understand.

```txt
✅ Format Requirements:
- File must end in `.csv`
- Encoding must be UTF-8
- Use commas as delimiters
- First row should contain column headers
```

> 💡 **Best Practices**:
>
> * Use clear and consistent column names (avoid special characters)
> * Ensure consistent formats (e.g. dates, numbers)
> * Remove any blank rows or columns
> * Clean up missing values if needed

***

### 2. Upload the File in Actian AI Analyst

1. Click **Connections → Plus button → Select CSV**.
2. Drag and drop your `.csv` file(s).
3. Click **Upload files** to confirm.

> 📂 You can upload up to **3 files at once**, each up to **500MB** in size.

***

### 3. Working with Multiple Files

If your data is relational (e.g. customers and orders), upload each table as a separate CSV. This makes it easier for Actian AI Analyst to understand relationships between tables.

**Example:**

* `customers.csv` – Customer info
* `orders.csv` – Order details
* `products.csv` – Product catalog

***

### 4. Important Notes

* ❌ Do **not** upload Excel files (.xlsx or .xls). Always convert to CSV first.
* ❌ Avoid formatting, formulas, merged cells, or macros.
* ❌ Avoid special characters in column names or multiple header rows.

> ⚠️ **Reminder**: CSV upload is ideal for _testing and exploration only_.\
> Actian AI Analyst is designed for **live connections to databases or warehouses**.\
> If you need to keep your data up to date, switch to a proper integration.

***

### That’s It!

Your file is now ready to be used by Actian AI Analyst’s AI agents. You'll be able to ask questions, explore patterns, and visualize data immediately.

***

Need help or seeing errors?

* Check column formatting and encoding
* Refer to the in-app error messages
* Contact us at **info@wobby.ai**
