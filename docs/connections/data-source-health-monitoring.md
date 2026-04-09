---
description: Automatic monitoring of your data source connections, with email alerts when issues are detected
---

# Data Source Health Monitoring

Wobby automatically monitors your connected data sources every day. If a connection fails or query performance degrades significantly, Wobby sends an email alert to your organization's [Admins](../settings/members.md) so you can fix issues before they affect your team's analysis.

***

## What gets monitored

Wobby runs two types of checks on each data source daily:

### Connection failure alerts

Wobby tests whether each data source is reachable. If a connection fails, all Admins with this alert enabled receive an email notification.

**Key behaviours:**

- The alert is sent *once per outage* — you won't receive repeated emails for the same ongoing failure
- When the connection recovers, the alert resets and will fire again if a future failure occurs
- The email includes a direct link to the affected data source in Wobby Studio

### High latency alerts

Wobby measures the average query duration across your data source over the past 7 days. If the average exceeds **30 seconds**, an alert is sent.

**Key behaviours:**

- Requires at least 5 completed queries in the past 7 days before alerting (to avoid false positives on rarely-used sources)
- A **14-day cooldown** applies per data source — if latency remains high, you'll receive a follow-up alert after 14 days
- The alert is sent to all Admins at the same time; the cooldown is shared across your organization

***

## Managing your notification settings

You can enable or disable each alert type individually. Settings are per-user, so each Admin can choose which alerts they want to receive.

{% hint style="info" %}
The Notifications page is visible to all Admins. Only Admins receive alert emails.
{% endhint %}

1. In Wobby Studio, go to **Settings → Notifications**
2. Toggle **Connection failure alerts** and/or **High latency alerts** on or off

Both alerts are enabled by default for all Admins.

<!-- Screenshot needed: Settings → Notifications page showing the two toggles -->

***

## Who receives alerts

All Admins can visit **Settings → Notifications** to manage their preferences

Each Admin's settings are independent — one Admin can opt out of high latency alerts while others remain subscribed.
