# Table of contents

* [🎊 Welcome to Actian AI Analyst](README.md)

## Quick Start

* [Getting started as an Admin](quick-start/getting-started-studio.md)
* [Getting started as a User](quick-start/getting-started-explorer.md)
* [Access Actian AI Analyst](quick-start/access-wobby.md)

## Account

* [Two-Factor Authentication (2FA)](account/two-factor-authentication-2fa.md)

## Explorer

* [Actian AI Analyst Explorer](agent/working-with-agents/README.md)
  * [Overview](agent/working-with-agents/wobby-explorer.md)
  * [Asking Questions](agent/working-with-agents/asking-questions.md)
  * [Saved Prompts](agent/working-with-agents/saved-prompts.md)
  * [Deep Analysis vs Quick Analysis](agent/working-with-agents/deep-analysis-vs-quick-analysis.md)
  * [Tips for Quick Analysis](agent/working-with-agents/tips-for-quick-analysis.md)

## AI Analysts

* [Creating an AI Analyst](agent/creating-an-agent/README.md)
  * [Models](ai-analysts/creating-an-agent/models.md)
  * [Instructions](agent/creating-an-agent/agent-instructions.md)
  * [Access Management](agent/creating-an-agent/access-management.md)
  * [Configuration](ai-analysts/creating-an-agent/configuration.md)
  * [Suggestions](ai-analysts/creating-an-agent/suggestions.md)
  * [Saved Prompts](ai-analysts/creating-an-agent/saved-prompts.md)
* [Monitoring](ai-analysts/monitoring/README.md)
  * [Traces](ai-analysts/monitoring/traces.md)
  * [Analytics](ai-analysts/monitoring/analytics.md)

## Connections

* [Data Sources (DB/DWH)](connections/connect-a-data-source/README.md)
  * [CSV files](connections/connect-a-data-source/csv-files.md)
  * [PostgreSQL](connections/connect-a-data-source/postgresql.md)
  * [MySQL](connections/connect-a-data-source/mysql.md)
  * [Snowflake](connections/connect-a-data-source/snowflake.md)
  * [BigQuery](connections/connect-a-data-source/bigquery.md)
  * [Microsoft SQL Server (MS SQL)](connections/connect-a-data-source/microsoft-sql-server-ms-sql.md)
  * [Azure Synapse](connections/connect-a-data-source/azure-synapse.md)
  * [AWS Redshift](connections/connect-a-data-source/aws-redshift.md)
  * [MariaDB](connections/connect-a-data-source/mariadb.md)
  * [Microsoft Fabric](connections/connect-a-data-source/microsoft-fabric.md)
  * [Motherduck](connections/connect-a-data-source/motherduck.md)
  * [Databricks](connections/connect-a-data-source/databricks.md)
  * [Actian Data Platform](connections/connect-a-data-source/actian-data-platform.md)
  * [Actian Zen](connections/connect-a-data-source/actian-zen.md)
  * [ClickHouse](connections/connect-a-data-source/clickhouse.md)
  * [Data Source Health Monitoring](connections/data-source-health-monitoring.md)
* [Data Catalogs](connections/catalog/README.md)
  * [Actian Data Intelligence Platform](connections/catalog/actian-data-intelligence-platform.md)
* [Messaging Apps](connections/messaging-apps/README.md)
  * [Slack](connections/messaging-apps/slack.md)
  * [Teams](connections/messaging-apps/teams.md)
* [Table Metadata](connections/table-metadata/README.md)
  * [Manage metadata in the UI](connections/table-metadata/manage-metadata-in-the-ui.md)
  * [Import metadata using YAML](connections/table-metadata/import-metadata-using-yaml.md)

## Semantic Layer

* [Overview](semantic-layer/overview.md)
* [Models](semantic-layer/models/README.md)
  * [Creating Models](semantic-layer/models/creating-models/README.md)
    * [Creating Models with Steward](semantic-layer/models/creating-models/creating-models-with-steward.md)
    * [Creating Models from SQL](semantic-layer/models/creating-models/creating-models-from-sql.md)
    * [Creating Models from Table](semantic-layer/models/creating-models/creating-models-from-table.md)
  * [Dimensions](semantic-layer/models/dimensions.md)
  * [Measures](semantic-layer/models/measures.md)
  * [Pre-defined Filters](semantic-layer/models/pre-defined-filters.md)
  * [Relationships](semantic-layer/models/relationships.md)
* [Metrics](semantic-layer/metrics.md)
* [Glossary](semantic-layer/glossary.md)
* [Semantic SQL (SemQL)](semantic-layer/semql/README.md)
  * [Compilation & Dialects](semantic-layer/semql/compilation-and-dialects.md)
  * [Core Syntax](semantic-layer/semql/core-syntax.md)
  * [Dimensions, Measures & Filters](semantic-layer/semql/dimensions-vs-measures.md)
  * [Geo Functions](semantic-layer/semql/geo-functions.md)
  * [Examples](semantic-layer/semql/examples.md)

## Steward AI Agent

* [Using Steward](steward-ai-agent/using-steward.md)
* [Proactive Steward Inbox](steward-ai-agent/steward-inbox.md)

## Settings

* [General](settings/general.md)
* [Members](settings/members.md)
* [Integrations](settings/integrations.md)
* [Notifications](settings/notifications.md)
* [Security](settings/security.md)
* [Profile](settings/profile.md)
* [Billing & Usage](settings/billing.md)
* [Public API](public-api/README.md)
  * [API Keys](public-api/api-keys.md)

## Governance

* [Audit Logs](governance/audit-logs.md)
* [Export Semantic Layer & Agents](governance/export-semantic-layer-and-agents/README.md)
  * [Actian AI Analyst Lossless Format](governance/export-semantic-layer-and-agents/wobby-lossless-format.md)
  * [Open Semantic Interchange Format](governance/export-semantic-layer-and-agents/open-semantic-interchange-format.md)
* [Import Semantic Layer & Agents](governance/import-semantic-layer-and-agents/README.md)
  * [Import OSI Format](governance/import-semantic-layer-and-agents/import-osi-format.md)
  * [Import Actian AI Analyst Format (YAML / JSON)](governance/import-semantic-layer-and-agents/import-wobby-format-yaml-json.md)
* [How AI Analyst handles your data](governance/how-ai-analyst-handles-your-data.md)
* [How Actian AI Analyst protects your data](governance/how-wobby-protects-your-data.md)

## API Reference

* ```yaml
  props:
    models: false
    downloadLink: false
  type: builtin:openapi
  dependencies:
    spec:
      ref:
        kind: openapi
        spec: wobby-api
  ```
