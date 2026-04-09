# Import Semantic Layer & Agents

Actian AI Analyst supports importing your semantic layer and agent configurations from files. Use imports to migrate between environments, restore from backups, or bulk-update your semantic layer.

#### What Can Be Imported

* **Models** — Dimensions, measures, filters, grain, and data source mappings
* **Relationships** — Joins between models
* **Metrics** — Definitions, anchors, time dimensions, joins, and filters
* **Glossary** — Terms with synonyms, tags, and mappings
* **Agents** — Configurations and semantic layer access

#### Import Formats

| Format                               | File Types               | Use Case                                                                     |
| ------------------------------------ | ------------------------ | ---------------------------------------------------------------------------- |
| Actian AI Analyst (YAML/JSON)        | `.yaml`, `.yml`, `.json` | Full imports, backups, migrations between Actian AI Analyst environments     |
| Actian AI Analyst (Excel)            | `.xlsx`, `.xls`          | Simplified bulk updates via spreadsheet                                      |
| OSI (Open Semantic Interchange)      | `.yaml`                  | Importing semantic models from other tools via Steward                       |

#### How to Import

1. Go to **Studio > Settings > Import Data**
2. Click **Import**
3. Drag and drop your file(s) or click to select — you can upload multiple files at once
4. Click **Upload & Analyze**
5. Review the analysis: Actian AI Analyst shows what will be created, updated, or skipped, with field-level diffs for updates
6. Select or deselect individual entities using the checkboxes
7. Click **Apply Import**

#### How Matching Works

Actian AI Analyst uses a two-step matching strategy to determine whether an entity should be created or updated:

1. **ID match** — If the import file includes an `id` field and it matches an existing entity, Actian AI Analyst treats it as an update (this also enables rename detection)
2. **Name match** — If no ID is provided or found, Actian AI Analyst falls back to matching by name

Data sources are automatically matched by the `data_source_name` field in your import file against your organization's connected data sources.

#### Import History

All past imports are visible at **Studio > Settings > Import Data**. Each entry shows:

* **Status** — Queued, Processing, Completed, or Failed
* **Started by** — Who initiated the import
* **Date** — When the import was started
* **Summary** — Counts of created, updated, and skipped entities

#### Notes

* All import operations are applied in a single transaction — if any entity fails, the entire import is rolled back
* Entities are processed in dependency order: Models → Relationships → Metrics → Glossary → Agents
* All import operations are audit logged
* For OSI files from other tools, use Steward instead of direct import
