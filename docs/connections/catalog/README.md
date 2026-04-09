---
description: Sync your enterprise data catalog directly into Actian AI Analyst
---

# Catalog Connections

Catalog connections let you bring your organization's governed data definitions directly into Actian AI Analyst. Instead of manually writing glossary terms, you can connect to an enterprise data catalog and automatically sync business terminology, definitions, and metadata into your semantic layer.

## What is a catalog connection?

A catalog connection is a live link between Actian AI Analyst and an external data catalog. Once connected, Actian AI Analyst periodically syncs glossary terms from the catalog — keeping your AI Analysts grounded in the same business definitions your data governance team maintains.

This is different from a [data source connection](../connect-a-data-source/README.md), which connects to a database or warehouse for querying. A catalog connection does not query your data — it imports business metadata and terminology.

## Supported catalogs

| Catalog | Description |
| ------- | ----------- |
| [Actian Data Intelligence Platform](actian-data-intelligence-platform.md) | Cloud-native data catalog with federated knowledge graph, business glossary, and data lineage |

## How it works

1. You connect to your catalog and configure which item types to sync.
2. Actian AI Analyst pulls glossary items (terms, definitions, synonyms, hierarchies) from the catalog on a schedule you control.
3. Synced terms appear in your [Glossary](../../semantic-layer/glossary.md) alongside any manually created terms.
4. AI Analysts use those terms automatically when answering questions — no extra configuration needed.

!!! info

    Catalog connections are available on most plans. Contact your account team if you don't see the option in your Connections page.

