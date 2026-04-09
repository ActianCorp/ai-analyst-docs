---
description: >-
  Save and reuse your team's best queries so anyone can run them with a single
  click.
---

# Saved Prompts

Saved Prompts are a shared library of your team's proven, go-to queries for a specific AI Analyst. Instead of retyping the same question every time — or trying to remember exactly how you phrased a question that produced a great result — [Admins](../../settings/members.md) can save those prompts once and make them available to everyone in the organisation.

!!! info

    Saved Prompts are org-wide and scoped to a specific AI Analyst. Everyone in your workspace can access and run them. Only Admins can create, edit, or delete them — see [Managing Saved Prompts](../../ai-analysts/creating-an-agent/saved-prompts.md) for the Studio side.


## The Explorer homepage

When you open an AI Analyst in Explorer, the homepage shows two tabs:

* **Get started** — AI-generated suggestions to help you discover what the agent can do (great for first-time users)
* **Saved prompts** — Your team's curated library of proven queries for this agent

Click the **Saved prompts** tab to browse the list. Each entry shows the prompt title, the full prompt text, who saved it, and when. If the prompt was saved from a completed conversation, a **View original task** link lets you preview the result before re-running it yourself.

Click any saved prompt to immediately start a new conversation with that prompt pre-filled.

!!! info

    If the agent has no saved prompts yet, the tab will show: _"No saved prompts yet. Admins can save prompts from any completed conversation."_


## The / trigger — access prompts mid-conversation

You don't have to go back to the homepage to use a saved prompt. While in any conversation, type `/` in the chat input to open the saved prompts dropdown.

* Start typing after `/` to filter by title or prompt text (e.g. `/revenue` narrows to revenue-related prompts)
* Use the arrow keys to navigate, then press **Enter** to select a prompt
* The prompt text is inserted into the input — you can edit it before sending
* Press **Escape** to close the dropdown without selecting

## Variable placeholders

Saved prompts can contain placeholders like `[region]` or `[timeframe]`. When a prompt with placeholders is selected, the placeholder text is highlighted so you can quickly fill it in before sending. Press **Tab** to jump between placeholders.

For example, a prompt like _"Show me revenue by \[region] for \[timeframe]"_ lets anyone on the team run a region- and period-specific analysis without typing the full question from scratch.

## Saved Prompts vs. Suggestions

Both appear on the Explorer homepage, but serve different purposes:

|                       | Suggestions                                | Saved Prompts                                     |
| --------------------- | ------------------------------------------ | ------------------------------------------------- |
| **Created by**        | AI (auto-generated from semantic layer)    | Admins (human-curated)                            |
| **Purpose**           | Discovery — _"here's what you could ask"_  | Retrieval — _"here's what we know works"_         |
| **Prompt length**     | Short (up to 8 words)                      | Any length; can include `[variable]` placeholders |
| **Stability**         | Regenerate when the semantic layer changes | Stable until an Admin edits or deletes them       |
| **Linked to results** | No                                         | Optionally linked to the original task            |

Use Suggestions to help new users explore; use Saved Prompts to codify the queries your team runs repeatedly.
