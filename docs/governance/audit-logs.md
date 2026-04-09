# Audit Logs

Audit logs track all significant operations in Actian AI Analyst for compliance, security, and troubleshooting purposes.

### Accessing Audit Logs

Navigate to **Studio > Settings > Audit Logs**.

**Filtering options**:

* Date range
* Actor (users, agents)
* Resource type
* Resource name (keyword search)
* IP address

### What's Tracked

**Actions**: `create`, `update`, `delete`, `execute`, `download`, `view`

**Resource Types**:

* Agents, Metrics, Models, Dimensions, Measures, Filters
* Connections, Queries, Glossary terms
* Environment exports/imports
* Organization memberships and invitations

Each log entry captures:

* **Who**: Initiated by (user/agent) and executed by (can differ for agent-driven ops)
* **What**: Action, resource type, resource ID/name
* **When**: Timestamp
* **Where**: IP address, environment
* **Changes**: Field-level diff for updates, full snapshot for creates

### Actor Delegation

Actian AI Analyst distinguishes between the **initiator** (who started the action) and the **executor** (who performed it). This is useful when a user triggers an agent to perform an operation.

**Export**: Download filtered logs as CSV via the export button.
