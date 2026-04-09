# Agent Instructions

Instructions tell your AI agent how to think, act, and solve analysis tasks within your business context. This is one of the most important steps in setting up your agent—clear instructions lead to accurate, business-aware answers.

You typically set instructions once when creating your agent. This step is usually done by someone with technical or data knowledge of your business.

Think of this like onboarding a new analyst. What context would you give them to avoid mistakes?

***

#### What Are Instructions Used For?

Actian AI Analyst appends your instructions to every prompt the agent receives. This means:

* The agent _always_ sees the instructions before answering a user’s question.
* You can use this to inject business context, preferred logic, definitions, and cautions directly into the agent’s reasoning.

> ✅ Use instructions to shape how your agent interprets questions, handles data, and responds in a way that fits your business.

***

#### What Should Go Into Instructions?

You might include:

* A quick summary of **what kind of data the agent works with**  
  (e.g. “You’re working with logistics data across warehouses, shipments, and inventory levels.”)
* Key **business context**  
  (e.g. “This is a high-end furniture retailer. Products range from $200–$5000, so individual transactions are high-value.”)
* Any high-level **data logic or rules**  
  (e.g. “inventory\_value = retail\_price x quantity\_on\_hand”)
* Common **pitfalls to avoid**  
  (e.g. “Promotions may be fixed or percentage-based—always align promotion dates with order dates.”)
* Preferred **ways to group or compare data**  
  (e.g. “Segment performance by store type: Flagship, Outlet, Regular.”)

***

#### Industry Examples

**🛍️ Retail**

* Always analyze performance by store type (Flagship, Outlet, Regular).
* For inventory analysis, join both the `stores` and `products` tables.\
  `inventory_value = retail_price × quantity_on_hand`
* Be cautious with discount logic—some are fixed amounts, others percentage-based.\
  Always verify that `promotion_date` aligns with `order_date`.

**🚚 Logistics**

* Use `delivery_delay_days` to measure shipping performance.
* Exclude items with `status = "discontinued"` when calculating inventory metrics.
* Segment warehouse data by region to identify bottlenecks.

**📊 Survey**

* Apply weighting using the `weight_factor` column when calculating averages or distributions.
* Exclude responses where `completion_time < 60` seconds—these are likely low quality.
* Handle special codes: treat `9999` in numeric fields as missing data and exclude from aggregations.

***

#### Your instructions might need some iterations

Instructions are part of the prompt the agent sees. While they’re read and adhered to in most cases, they’re not always followed perfectly.

If your agent gives a wrong or incomplete response:

* Try tweaking or rewording your instructions
* Test a few questions, and iterate on the instructions

Instructions are powerful, but some iteration may be needed to get consistent results.
