# Models

The Models tab lets you configure which semantic layer models, dimensions, and measures your agent can access.

### Why Configure Model Access?

Not every agent needs access to all your data. By configuring model access, you can:

* **Focus the agent** - Limit access to relevant models for the agent's purpose
* **Improve accuracy** - Fewer options means less confusion for the agent
* **Enforce governance** - Prevent agents from accessing sensitive data

### Configuring Access

#### Enable/Disable Models

Each model in your semantic layer appears as a card. Toggle the model on or off to control whether the agent can use it.

#### Dimension & Measure Access

Within each enabled model, you can further restrict access to specific dimensions and measures:

1. Expand a model card
2. Toggle individual dimensions on/off
3. Toggle individual measures on/off

The agent will only see and use the enabled components when answering questions.

### No Models Available?

If you see "No models available", you need to create models in your semantic layer first:

1. Go to **Models** in the left sidebar
2. Create models from your connected data sources
3. Return here to configure agent access

### Best Practices

* Start with minimal access and expand as needed
* Disable models that aren't relevant to this agent's purpose
* For sensitive measures (e.g., salary data), create a separate agent with restricted access
* Review model access when you add new models to your semantic layer
