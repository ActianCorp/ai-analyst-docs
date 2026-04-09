# Using Steward

Steward is your AI copilot for building and managing semantic layers—think Claude Code or Cursor, but for your data models, metrics, and business logic.

***

### What is Steward?

Steward is a conversational AI assistant that helps you build and maintain your semantic layer. Instead of clicking through forms and writing expressions from scratch, you describe what you want and Steward figures out how to make it happen.

**What makes Steward useful:**

* **Understands dependencies** — Ask for a metric and Steward identifies what models, measures, and relationships need to exist to support it
* **Knows your context** — Steward sees your existing semantic layer, so suggestions fit with what you've already built
* **Helps when you're stuck** — Don't know the expression syntax? Not sure which approach to take? Just describe the outcome you want
* **Handles tedious work** — Multi-step setup that would take dozens of clicks happens through a single conversation
* **Shows before doing** — Plan Mode lets you review what Steward will build before it makes changes

Steward doesn't just answer questions about your data—it actively builds and modifies your semantic layer. You can start from scratch with a new data source or refine an existing setup.

***

### Getting Started

The best way to start is to give Steward context about your business. Use the `/init` command or simply describe what you're working with:

> "I just connected our sales database. We're a B2B SaaS company and we care most about MRR, churn, and customer acquisition cost."

Steward works better when it understands your domain, so share relevant context: industry terminology, what metrics matter to your team, how you think about your data.

**Helpful to have ready (but not required):**

* A sense of which tables contain your key business entities
* The metrics your team talks about most
* Any business-specific terminology or definitions

You don't need to have everything figured out upfront—Steward helps you discover what's in your data and what's worth modeling. Start with one model (your most important business entity) rather than trying to build everything at once.

**Tip:** Describe what you want in business terms, not technical ones. Say "I need to track customer lifetime value" rather than "create a metric with a SUM expression joined across two tables."

***

### Common Workflows

#### Building Your First Model

Point Steward at a table and ask it to help you model it:

> "Help me create a model from my customers table"

> "I have an orders table, what should I model from it?"

Steward examines the table structure and suggests dimensions and measures based on what it finds. It generates descriptions in business-friendly language, identifies obvious measures (counts, sums of numeric columns), and proposes sensible filters like excluding deleted or test records.

Use `/quickstart` on any model to have Steward auto-populate suggestions for the whole thing at once.

If your data connects to other tables, Steward can suggest relationships—just mention what other models exist or ask it to look for foreign keys.

**The workflow:** Review what Steward suggests, then refine. You don't need to get everything perfect on the first pass—models evolve as you learn what questions your team actually asks.

#### Creating Metrics

Describe the business outcome you want, not the formula:

> "Create a metric for average order value"

Steward figures out what needs to exist to make that metric work. If it requires measures that don't exist yet, or relationships between models, Steward identifies the gaps and can create them.

For complex metrics that span multiple models, Steward handles the joins—you don't need to think about which keys connect what. It also suggests relevant default filters (like excluding cancelled orders from revenue calculations).

Steward may ask clarifying questions: "How do you define an acquired customer?" or "Should this include refunded orders?" This is how your business logic gets encoded into the metric.

You don't need to know SemQL syntax—Steward writes the expression for you. If the result isn't quite right, iterate through conversation: "Actually, this should only count orders over $50" or "Can we break this down by region too?"

#### Writing Expressions

When you're editing a dimension, measure, or filter and need help with the syntax, use `/expression` or just describe what you want:

> "How do I calculate a percentage of successful orders?"

Steward knows what columns and measures are available in context, so it writes expressions that actually work with your data. You can test expressions before saving to make sure they return what you expect.

If you encounter an expression you don't understand, ask Steward to explain it:

> "What does this expression do?"

You can also ask Steward to find similar patterns in your existing semantic layer—if someone already wrote a percentage calculation or a filtered count, Steward can show you how they did it so you can follow the same approach.

#### Validating and Improving Models

Use `/validate-model` to have Steward review a model for common issues:

* Missing descriptions
* Naming inconsistencies
* Expression errors or edge cases
* Best practice violations

Use `/relationships` to find missing connections between models—Steward analyzes your semantic layer and suggests relationships that might be missing based on column names and data patterns.

As your semantic layer grows, revisit models periodically. Your understanding of the data evolves, and models should evolve with it. Steward can help with bulk fixes through conversation: "Add descriptions to all dimensions that are missing them" or "Rename all date fields to use the \_at suffix."

***

### Working with Steward

**Plan Mode** — When enabled, Steward shows you what it's going to do before making changes. Use this when you want to verify Steward understood your intent, especially for larger changes.

**Give context** — Steward works better when it knows your domain. "We're a logistics company, shipments are our core entity" is more useful than assuming Steward already knows. Use consistent business terminology so Steward learns your vocabulary.

**Iterate in small steps** — Multiple short messages work better than one giant prompt. Let Steward propose something, then refine: "That's close, but exclude test accounts" or "Actually, let's break this down by region instead."

**Correct misunderstandings directly** — If Steward gets something wrong, just say so: "No, that's not what I meant—by 'active' I mean customers who ordered in the last 90 days." Steward adjusts.

**Break big tasks into conversations** — Instead of "build my entire semantic layer," start with "help me model my customers table." Steward remembers context within a session, so you can build up incrementally.

***

### Quick Commands Reference

| Command           | What it does                                                                |
| ----------------- | --------------------------------------------------------------------------- |
| `/init`           | Set up Steward with context about your business                             |
| `/quickstart`     | Auto-populate a model with suggested dimensions, measures, and descriptions |
| `/expression`     | Get help writing an expression for the current entity                       |
| `/create-metric`  | Guided flow for creating a new metric                                       |
| `/validate-model` | Check a model for issues and best practice violations                       |
| `/relationships`  | Find missing relationships between models                                   |

These are shortcuts for common prompts—you can always just describe what you want in plain language instead.
