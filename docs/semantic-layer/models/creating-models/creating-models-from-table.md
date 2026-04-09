# Creating Models from Table

Creating a model from a table is a quick way to generate a semantic layer model with auto-detected dimensions and measures. Actian AI Analyst analyzes your table structure and sample data to classify columns automatically.

### When to Use This Method

Use "From Table" when you want:

* **Quick model generation** from an existing table
* **Auto-detected columns** classified as dimensions or measures
* **A starting point** that you can refine manually
* **Speed over customization** - get a working model fast

### How to Create a Model from Table

1. Navigate to **Models** in the left sidebar
2. Click **Create Model**
3. Select **From Table**
4. Choose a **data source** from the dropdown
5. Search or browse to find your table
6. Click on the table to start generation

#### Table Selection

The table list shows:

* **Table name** with schema path (e.g., `public.orders`)
* **Existing model count** - badge showing if models already exist for this table

Use the search box to filter tables by name.

#### Generation Process

After selecting a table, Actian AI Analyst:

1. **Analyzes columns** - Reads column names, types, and sample data
2. **Classifies columns** - Determines which are dimensions vs measures
3. **Generates expressions** - Creates appropriate SQL expressions
4. **Sets the grain** - Identifies the primary key or unique identifier
5. **Detects relationships** - Finds foreign key connections

#### What Gets Generated

**Dimensions** are created for columns that represent:

* Dates and timestamps
* Categories and enums
* IDs and foreign keys
* Text attributes

**Measures** are created for columns that represent:

* Numeric values suitable for aggregation
* Counts and quantities

**Relationships** are detected based on:

* Column naming patterns (e.g., `customer_id` → `customers`)
* Foreign key constraints

### Tips

* **Review auto-generated items** - The AI does its best but may misclassify some columns
* **Add descriptions** - Help agents understand what each dimension/measure represents
* **Set up filters** - Add common filters like "active only" or "last 90 days"
* **Check relationships** - Verify detected relationships are correct
