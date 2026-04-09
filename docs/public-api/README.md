---
description: Programmatically access and manage your Actian AI Analyst environment using the Public API.
---

# Public API

The Actian AI Analyst Public API gives you programmatic access to your environment — without logging into the UI. Use it to build integrations, automate workflows, and connect Actian AI Analyst to your existing tooling.

Common use cases include:

* **Version-controlling your semantic layer** by exporting models, metrics, glossary terms, and agents to a Git repository
* **Automating deployments** using CI/CD pipelines (e.g. promote changes from dev → staging → production)
* **Integrating with external tools** that need to read or push definitions from your environment

## Authentication

All Public API requests authenticate with an **API key** passed as a Bearer token in the `Authorization` header. API keys are scoped to your organization and are managed by [Admins](../settings/members.md) in **Studio > Settings > API Keys**.

```
Authorization: Bearer sk_...
```

See [API Keys](api-keys.md) for how to create and manage keys.

## Base URL

```
https://app.wobby.ai/api/public/v1
```

## Rate limits

The Public API enforces rate limiting per IP address:

| Limit | Value |
| ----- | ----- |
| Max requests | 2 per 5 seconds |
| Ban duration on violation | 1 hour |

Design your integrations to stay within this limit — exceeding it will block your IP for 1 hour.

## Next steps

* [Set up an API key](api-keys.md)
* [Explore the API reference](https://docs.wobby.ai/api-reference)
