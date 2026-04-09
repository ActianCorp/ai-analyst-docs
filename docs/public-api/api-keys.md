---
description: Create and manage API keys to authenticate requests to the Actian AI Analyst Public API.
---

# API Keys

API keys are the credentials used to authenticate requests to the [Public API](README.md). Each key is scoped to your organization and grants full access to the Public API endpoints.

!!! info

    API key management is available to all [**Admins**](../settings/members.md).


## Creating an API key

1. Go to **Studio > Settings > API Keys**
2. Click **Create API Key**
3. Enter a **Name** (required) — choose something descriptive, like `CI/CD Pipeline` or `Data Team Automation`
4. Optionally add a **Description** for extra context
5. Optionally set an **Expiration** — the key will automatically stop working after this date. Leave blank for a key that never expires
6. Click **Create**

The secret key (`sk_...`) is shown **once** immediately after creation. Copy it and store it securely — you will not be able to view it again.

!!! warning

    Treat your API key like a password. Store it in a secrets manager or environment variable — never commit it to source control.


## Using an API key

Pass the key as a Bearer token in the `Authorization` header of every request:

```
Authorization: Bearer sk_...
```

Example with curl:

```bash
curl https://app.wobby.ai/api/public/v1/semantic-layer \
  -H "Authorization: Bearer sk_..."
```

## Viewing existing keys

Navigate to **Studio > Settings > API Keys** to see all keys for your organization. The list shows:

| Field | Description |
| ----- | ----------- |
| Name | Human-readable label you gave the key |
| Description | Optional notes |
| Last used | When the key was last used to make an API call |
| Created | When the key was created and by whom |
| Status | Active or revoked |

!!! info

    The secret value is never shown again after creation. If you lose a key, revoke it and create a new one.


## Revoking a key

1. Go to **Studio > Settings > API Keys**
2. Find the key you want to remove
3. Click the **Revoke** button next to it
4. Confirm the action

Revoked keys are immediately rejected by the API. Any automation using that key will stop working, so make sure to rotate to a new key before revoking an old one.

## Audit trail

All API requests made with a key are attributed to that key in the [Audit Logs](../governance/audit-logs.md). You'll see entries like `API Key: CI/CD Pipeline` as the actor for any changes made via the API.
