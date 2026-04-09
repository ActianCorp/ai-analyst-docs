---
description: Manage your organization's name, logo, and settings
---

# General

The **Settings > General** page is where you manage your organization's identity — its display name and logo — as well as view key details about the organization itself. [Admins](members.md) can also use this page to delete the organization entirely if needed.

<!-- SCREENSHOT: Settings > General page -->

---

## Organization details

This section is visible to all members of your organization and shows a read-only summary of the account:

- *Organization ID* — a unique identifier for your organization, shown in monospace. This can be useful when contacting support.
- *Created* — the date the organization was created.
- *Members* — the total number of members currently in the organization.
- *Your role* — your current role within the organization (e.g. Admin or Member).

### Display name

Admins can rename the organization using the *Display Name* field. The name updates automatically — there is no save button. Simply type the new name and press **Enter** or click elsewhere to apply the change.

<!-- SCREENSHOT: Display Name field on Settings > General page -->

To rename your organization:

1. Go to **Settings > General** in Actian AI Analyst Studio.
2. Click the *Display Name* field and type the new name.
3. Press **Enter** or click outside the field. The name saves automatically.

### Logo

Admins can upload a custom logo that appears throughout the organization's workspace. The logo is updated by clicking the avatar image.

<!-- SCREENSHOT: Logo upload area on Settings > General page -->

To upload or change your organization's logo:

1. Go to **Settings > General**.
2. Click the logo avatar to open the file picker.
3. Select an image file from your device. The logo saves automatically once selected.

To remove the current logo, click the avatar and choose the remove option.

---

## Danger zone

The danger zone contains actions that are irreversible or have a significant impact on your organization. It is visible to all members, but some actions are restricted to Admins.

### Leave organization

Any member can leave the organization at any time using the *Leave Organization* button. Once you leave, you will immediately lose access to all workspaces, data, and AI analysts within that organization.

{% hint style="info" %}
If you are the only Admin in the organization, the *Leave Organization* button will be disabled. You must first promote another member to Admin before you can leave.
{% endhint %}

### Delete organization

Admins can permanently delete the organization and all of its data — including all data sources, models, metrics, AI analysts, and member records.

To delete your organization:

1. Go to **Settings > General**.
2. Scroll to the **Danger zone** section and click *Delete Organization*.
3. In the confirmation dialog, type the exact name of your organization to confirm.
4. Click the confirm button to proceed.

{% hint style="warning" %}
Deleting your organization is permanent and cannot be undone. All data — including your semantic layer, AI analysts, conversation history, and member accounts — will be immediately and irreversibly removed. Make sure you have any necessary exports before proceeding.
{% endhint %}
