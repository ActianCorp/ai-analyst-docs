---
description: Control who can see your chats and artifacts, and share findings with teammates.
---

# Sharing

By default, every chat and artifact in Explorer is **private** — only you and organisation administrators can see it. Sharing gives you granular control over who else can access your work.

## Access Levels

Both chats and artifacts support three access levels:

| Level | Who can see it |
| ----- | -------------- |
| **Just me** | Only you (and org admins). The default. |
| **Specific people** | Individual teammates you select by name |
| **Everyone in the organisation** | All members of your organisation |

## Sharing a Chat

To share a chat, open it in Explorer and click the **Share** button (in the chat header or the options menu).

In the sharing dialog you can:

1. Choose the access level
2. If sharing with **specific people**, select teammates from the list — they will receive an email notification and an [Inbox](inbox.md) item with a link to the chat
3. If sharing with **everyone in the organisation**, all org members will receive an Inbox notification

A copyable link to the chat is shown at the bottom of the dialog. Anyone with access can open it directly.

!!! warning

    Changing a chat back to **Just me** revokes access for anyone it was previously shared with, including via linked artifacts.


## Sharing an Artifact

Artifacts (charts, tables, and reports) can be shared independently of the conversation that produced them. To share an artifact, open it and click **Share**.

In the artifact sharing dialog you can:

1. Choose the access level (same three levels as above)
2. Toggle **Include chat conversation** — when on, the shared link opens the original chat with the artifact focused in the side panel; when off, the link opens the artifact on its own standalone page

!!! info

    To share an artifact, it must be saved first. If it hasn't been saved yet, the dialog will prompt you to save it before sharing.


### Artifact vs. chat links

| Toggle state | What the link opens |
| ------------ | ------------------- |
| Include chat: off | The artifact on its own page (`/explorer/artifacts/<id>`) |
| Include chat: on | The originating chat, scrolled to the artifact (`/explorer/<chat-id>#...`) |

When the "include chat" toggle is on, sharing the artifact also shares the underlying chat at the same access level, so recipients can follow the reasoning behind the finding.

## How Recipients Are Notified

When you share a chat or artifact with others, recipients see a new item in their [Explorer Inbox](inbox.md) with a link to the shared content. If you share with specific people, they also receive an email.

Recipients do not need to do anything — they can click the Inbox item or the link directly to view the content.
