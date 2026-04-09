# Creating Models with Steward

Steward is the recommended way to create models in Actian AI Analyst. It's our conversational AI assistant that analyzes your schema, researches business context, and drafts complete models with dimensions, measures, and relationships.

### When to Use Steward

Use Steward when you want:

* **Intelligent analysis** of your table structure and sample data
* **Business context awareness** - Steward understands your domain
* **Automatic relationship detection** between tables
* **Best practice suggestions** for naming and expressions
* **Iterative refinement** through conversation

### How to Create a Model with Steward

1. Navigate to **Models** in the left sidebar
2. Click **Create Model**
3. Select **With Steward** (marked as Recommended)
4. The Steward sidebar opens with a pre-filled prompt

#### Starting the Conversation

Steward opens with a suggested prompt:

> "I want to create a new model based on \[explain which table you want to model]. Please help me generate the model with appropriate dimensions and measures"

Replace the placeholder with your specific table and any context about your business domain.

#### Example Prompts

> "I want to create a model from the orders table. We're an e-commerce company and orders are our main transaction entity. Include dimensions for order status, payment method, and shipping region."

**With specific requirements:**

> "Create a model from the customers table. I need dimensions for customer tier (gold, silver, bronze) and signup date. For measures, I need total customers and active customers (those who ordered in the last 90 days)."

### Working with Steward

#### Plan Mode

When creating complex models, it's recommended to enable **Plan Mode** to force Steward to show you what it will create before making changes. This includes:

* Model name and grain
* List of dimensions with expressions
* List of measures with aggregations
* Detected relationships

Review the plan and confirm, or ask Steward to adjust before proceeding.

#### Iterative Refinement

After Steward creates your model, you can refine it through conversation:

* "Add a dimension for fiscal quarter"
* "Rename the revenue measure to total\_revenue"
* "The active\_customers filter should use 90 days, not 30"
* "Add a relationship to the products model via product\_id"

### Tips for Best Results

1. **Provide business context** - Tell Steward about your company and domain
2. **Be specific about requirements** - Mention specific dimensions or measures you need
3. **Iterate in small steps** - Start simple, then add complexity
4. **Correct misunderstandings directly** - If Steward gets something wrong, explain clearly
