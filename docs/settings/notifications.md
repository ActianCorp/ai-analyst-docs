---
description: Configure email and Slack alert notifications for important events in your organization
---

# Notifications

Actian AI Analyst can notify your team when something important happens — like a data source going down, query performance degrading, or your Steward AI adding new items to the inbox. You can configure these alerts in two places: per-user email preferences under **Settings > Notifications**, and org-wide Slack channel alerts under **Settings > Slack Alerts**.

Both settings pages are visible only to [Admins](members.md). Non-Admins will see a message indicating that only Admins can configure notifications.

---

## Email notifications

Email notifications are configured per user. Each Admin can independently choose which alerts they want to receive in their own inbox.

<!-- SCREENSHOT: Settings > Notifications page showing the three toggles -->

To manage your email notification preferences:

1. In Actian AI Analyst Studio, go to **Settings > Notifications**
2. Toggle each alert type on or off according to your preferences

The following alert types are available:

- *Steward inbox* — receive an email when the Steward AI adds new items to your inbox. To avoid noise, at most one email is sent per day, regardless of how many items were added.
- *Connection failure alerts* — receive an email when Actian AI Analyst is unable to connect to one of your organization's data sources.
- *High latency alerts* — receive an email when the average query duration on a data source exceeds 30 seconds.

All three alert types are enabled by default for Admins. Changes take effect immediately.

---

## Slack alerts

Slack alerts let you route important notifications to a dedicated Slack channel for your whole organization. Unlike email notifications (which are per-user), Slack alerts are configured once for the entire org.

!!! info

    Slack alerts require Slack to be connected to your organization first. If Slack has not been connected yet, you will see a prompt to set it up. Head to **Settings > Integrations** and connect your Slack workspace before configuring Slack alerts.


<!-- SCREENSHOT: Settings > Slack Alerts page showing the channel dropdown and three alert toggles -->

To configure Slack alerts:

1. In Actian AI Analyst Studio, go to **Settings > Slack Alerts**
2. If Slack is not yet connected, follow the prompt to connect it via **Settings > Integrations** first
3. Use the channel dropdown to select the Slack channel where alerts should be posted — the dropdown lists all channels available in your connected workspace
4. Toggle each alert type on or off:
    - *Steward inbox* — a Slack message is sent when the Steward AI adds new items to the inbox (at most one message per day)
    - *Connection failure alerts* — a Slack message is sent when a data source connection fails
    - *High latency alerts* — a Slack message is sent when average query latency on a data source exceeds 30 seconds

Toggling an alert type applies immediately for the whole organization.

!!! info

    Only one Slack channel can be designated for alerts at a time. To change the channel, simply select a different one from the dropdown — all enabled alert types will be directed to the newly selected channel.

