---
description: Connect Slack and Microsoft Teams to your organization
---

# Integrations

The **Settings > Integrations** page is where [Admins](members.md) connect third-party communication tools to your organization. Once connected, AI Analysts can post messages directly in your Slack or Microsoft Teams channels, keeping your team informed without leaving the tools they already use.

<!-- SCREENSHOT: Settings > Integrations page -->

---

## Available integrations

Integrations are organized by category. Currently, one category is available:

- *Communication* — tools that let AI Analysts post in channels and enable org-wide alert notifications

Use the search input or the category filter at the top of the page to find a specific integration. Each integration is shown as a card displaying its name, description, and current connection status.

!!! info

    This page handles connecting integrations at the organization level. To assign an AI Analyst to a specific Slack or Teams channel, go to the agent's **Share** settings. To configure which Slack channel receives health check and Steward alerts, go to [Settings > Notifications](notifications.md).


---

## Slack

Connecting Slack allows AI Analysts to post responses and updates directly in your Slack channels, and enables org-wide alert notifications to be routed to a Slack channel of your choice.

To connect Slack:

1. In Actian AI Analyst Studio, go to **Settings > Integrations**.
2. Click the **Slack** card.
3. Click **Connect**.
4. You will be redirected to Slack to authorize the Actian AI Analyst app for your workspace. Follow the prompts to complete the OAuth flow.
5. Once authorized, you are redirected back to the Integrations page. The Slack card will now show the connection as active, along with the name of the person who connected it and the date it was connected.

<!-- SCREENSHOT: Slack card after successful connection, showing connected status, connected-by user, and date -->

After connecting, two additional buttons appear on the Slack card:

- *Reconnect* — re-runs the OAuth flow. Use this if permissions need to be updated or if the connection stops working.
- *Disconnect* — removes the Slack integration from your organization. This will stop all AI Analyst posts and alert notifications sent via Slack.

Once Slack is connected, you can:

- Assign AI Analysts to specific channels from the agent's **Share** settings — see [Slack channel setup](../connections/messaging-apps/slack.md) for a full walkthrough.
- Configure which Slack channel receives health check and Steward alert notifications under [Settings > Notifications](notifications.md).

---

## Microsoft Teams

Connecting Microsoft Teams allows AI Analysts to post in your Teams channels, bringing data insights directly into your team's conversations.

The setup for Microsoft Teams involves a few additional steps compared to Slack. For a full walkthrough, see the [Microsoft Teams connection guide](../connections/messaging-apps/teams.md).

<!-- SCREENSHOT: Microsoft Teams card showing connection status -->
