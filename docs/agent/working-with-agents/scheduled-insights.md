---
description: Run your AI Analyst on a recurring schedule and get notified when something worth seeing happens.
---

# Scheduled Insights

Scheduled Insights let your AI Analyst run automatically on a recurring schedule — without you having to open Explorer and ask. You define what to track, how often to check, and under what conditions the analyst should alert you. When something interesting happens, it writes you a message. When nothing does, you hear nothing.

This goes beyond traditional BI alerting. Instead of triggering on a fixed threshold, your AI Analyst can apply subjective judgment — noticing anomalies, interpreting trends, and deciding whether a finding is worth surfacing.

## Setting Up a Schedule

You set up a schedule by asking your AI Analyst in a conversation. Just describe what you want it to track and how often:

> _"Check daily for new clients, and if they are from a Fortune 500 company, send me a message."_

> _"Every week, check our WAU numbers and ping me for any anomalous changes."_

> _"Every morning at 8:50am CET prepare a morning brief for me."_

The analyst parses your intent, configures the schedule, and confirms it's set. From that point on, it runs automatically — no further action needed.

!!! info

    Schedules are created per AI Analyst and are owned by you. Each scheduled run happens in its own headless conversation that is not shown in your Explorer sidebar.


## Viewing Your Schedules

All your active schedules are listed in the **Schedules** section of the Explorer sidebar. Each entry shows:

- The schedule title
- The prompt it runs
- When it runs next

Click a schedule to open the detail panel, where you can see the full configuration and edit any of its fields.

## Managing a Schedule

The schedule detail panel lets you update any aspect of a schedule without having to recreate it:

| Field | Description |
| ----- | ----------- |
| **Title** | A name for the schedule, shown in the sidebar and Inbox |
| **Prompt** | The instruction the analyst runs each time |
| **Cron expression** | The raw schedule in cron syntax (e.g. `0 9 * * 1` for every Monday at 9am) |
| **Timezone** | The timezone the cron expression is evaluated in |
| **Email notifications** | Whether to send an email when the analyst writes an alert |

Changes to the panel are saved automatically when you leave a field.

!!! info

    If you're not familiar with cron syntax, you can ask your AI Analyst to set up the schedule for you in a conversation and it will configure the cron expression from plain English.


## When the Analyst Alerts You

Each time a scheduled run completes, the analyst decides whether there is anything worth reporting. If there is, it creates an **inbox item** — a short message with a title, a summary of the finding, and (where relevant) a direct link to the chart or table behind it.

If a run finds nothing noteworthy, nothing is sent. Your Inbox stays quiet.

Alerts appear in your [Explorer Inbox](inbox.md). If email notifications are enabled for the schedule, you will also receive an email.

## Deleting a Schedule

To delete a schedule, open it from the sidebar and use the delete option in the detail panel. Deleted schedules stop running immediately. Past inbox items from that schedule remain in your Inbox.
