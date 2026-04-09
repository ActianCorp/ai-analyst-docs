---
description: Invite and manage members of your organization
---

# Members

The **Settings > Members** page is where Admins manage who has access to your organization. You can invite new members, assign them the right level of access, and remove or adjust existing members — all from one place.

<!-- SCREENSHOT: Settings > Members page -->

---

## Inviting a member

Only Admins can invite new members. When you send an invitation, the recipient receives an email with a link to join your organization.

To invite a new member:

1. Go to **Settings > Members** in Actian AI Analyst Studio.
2. Click the **Invite member** button in the top-right corner.
3. Enter the invitee's email address.
4. Choose a role — *Admin* or *User* (see [Roles](#roles) below for details).
5. Click **Send invitation**. The invitee will receive an email prompting them to accept.

<!-- SCREENSHOT: Invite member dialog -->

---

## Managing members

### Viewing members

The **Members** tab lists everyone currently in your organization. Each row shows the member's avatar, name, email address, the date they joined, and their current role. Use the search box to quickly find a specific member by name or email.

<!-- SCREENSHOT: Members tab with list of members -->

### Changing a member's role

Admins can change any member's role at any time using the role dropdown next to their name.

To change a member's role:

1. Go to **Settings > Members** and open the **Members** tab.
2. Find the member whose role you want to change.
3. Click their role dropdown and select the new role.

The change takes effect immediately.

### Removing a member

Admins can remove a member from the organization by clicking the trash icon next to their row. Removing a member immediately revokes their access to all workspaces and AI analysts within the organization.

### Managing pending invitations

The **Invitations** tab lists all invitations that have been sent but not yet accepted. Each row shows the invitee's email address, their assigned role, and the date the invitation was sent.

If you need to cancel a pending invitation — for example, if it was sent to the wrong address — click the revoke button next to it. The invitation link will be invalidated and the invitee will not be able to join using it.

<!-- SCREENSHOT: Invitations tab with pending invitations -->

---

## Roles

Roles control what a member can see and do within your organization. Choose the role that matches the level of access each person needs.

| Role | Access |
| ---- | ------ |
| Admin | Full access to Actian AI Analyst Studio — can build and edit the semantic layer, manage AI analysts, invite and remove members, and configure organization settings. |
| User | Access to Actian AI Analyst Explorer only — can interact with AI Analysts and explore data, but cannot edit the semantic layer or access Studio settings. |

{% hint style="info" %}
Your organization must always have at least one Admin. If you are the only Admin, you will need to promote another member before you can change your own role or leave the organization.
{% endhint %}
