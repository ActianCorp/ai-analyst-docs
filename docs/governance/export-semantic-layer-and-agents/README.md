# Export Semantic Layer & Agents

Actian AI Analyst supports exporting your semantic layer & agent configurations in multiple formats for backup, migration, or integration with other tools.

## Export Formats

| Format                          | File Type         | Use Case                                                          | Lossless |
| ------------------------------- | ----------------- | ----------------------------------------------------------------- | -------- |
| Actian AI Analyst Lossless      | YAML, JSON, Excel | Backups, migrations between Actian AI Analyst environments        | Yes      |
| OSI (Open Semantic Interchange) | YAML              | Interoperability with other BI tools and AI agents                | No       |
| dbt MetricFlow                  | -                 | Integration with dbt (coming soon)                                | No       |

## How to Export

1. Go to **Studio > Settings > Export Data**
2. Click **Request Export**
3. Select your format:
   * **Actian AI Analyst Lossless** - For backups (choose YAML, JSON, or Excel)
   * **OSI** - For interoperability (YAML only)
4. Click **Export**
5. You'll receive an email when the export is ready
6. Download from the Export Data page



## Notes

* All export operations are logged in the [Audit Log](../audit-logs.md)
* Export files are available for download for 1 hour
* Large environments may take a few minutes to process
