---
sidebar_position: 3
title: "Orchestrator Mode"
description: Let AI automatically choose the right mode for each task
---

# 🪃 Orchestrator Mode

**Available anytime during your journey**

Don't want to think about which mode to use? Orchestrator mode automatically delegates tasks to the right mode for the job.

## Purpose

In Orchestrator mode, 1M Code acts as a **project manager**. It will:

- Analyze what you're trying to do
- Choose the best mode for each task
- Delegate work automatically
- Coordinate across multiple modes

## When to Use This Mode

Use Orchestrator mode when:

- You have a complex, multi-part task
- You're not sure which mode to use
- You want to describe what you want without managing modes
- You're working on something that spans multiple phases

## How It Works

The Orchestrator doesn't do the work itself—it delegates:

```
You: "I want to add a dark mode feature to my app."

Orchestrator thinks:
1. This needs a design decision → Plan mode
2. Then implementation → Build mode
3. Then testing → Test mode

Orchestrator:
"I'll break this into subtasks and delegate to the right modes..."
```

## Available Tools

| Tool | Purpose |
|------|---------|
| `new_task` | Create subtasks in other modes |

The Orchestrator's main tool is delegation. It creates subtasks and assigns them to specialized modes.

## Example Prompts

### Multi-Step Tasks

```
I want to add user authentication to my app.
```

The Orchestrator will:
1. Create a Plan subtask to design the auth flow
2. Create a Build subtask to implement it
3. Create a Test subtask to verify it works
4. Create a Guard subtask to check security

### Unclear Requirements

```
Make my app better.
```

The Orchestrator will:
1. Ask clarifying questions
2. Break "better" into specific improvements
3. Delegate each improvement to the right mode

### End-to-End Features

```
I want users to be able to share their progress on social media.
```

The Orchestrator will:
1. Spec: Define what sharing means
2. Plan: Design the sharing architecture
3. Build: Implement the share button
4. Test: Verify sharing works
5. Sell: Add to marketing messaging

## When to Use Orchestrator

### Good for Orchestrator

- Complex features that span multiple phases
- When you're not sure where to start
- Big tasks that need breaking down
- When you want to describe outcomes, not process

### Better to Use Specific Modes

- Single-step tasks (just use Build mode)
- Learning concepts (just use Ask mode)
- Fixing a bug (just use Debug mode)
- You know exactly what you need

## How Subtasks Work

When Orchestrator creates a subtask:

1. It describes what needs to be done
2. It specifies which mode to use
3. The subtask runs in that mode
4. Results come back to the Orchestrator
5. Orchestrator coordinates next steps

You can see all subtasks in the chat history.

## Example: Building a Feature

**You:** "Add a settings page where users can change their reminder interval."

**Orchestrator response:**

> I'll break this down into subtasks:
>
> **Subtask 1: Plan** (🏗️ Plan mode)
> Design the settings page layout and data storage
>
> **Subtask 2: Build** (💻 Build mode)
> Create the settings page component
>
> **Subtask 3: Build** (💻 Build mode)
> Implement interval selection and saving
>
> **Subtask 4: Test** (🧪 Test mode)
> Verify settings persist correctly
>
> Starting with Subtask 1...

## Tips for Using Orchestrator

### Be Clear About Goals
Tell it what you want to achieve, not how to do it:

- ✅ "Users should be able to reset their password"
- ❌ "Create a password reset page with a form..."

### Trust the Process
The Orchestrator knows which modes to use. Let it work.

### Review Subtasks
You can see and approve each subtask before it runs.

### Step In When Needed
If a subtask isn't quite right, you can take over in that mode.

## Switching to Orchestrator Mode

When you have a complex task, switch to Orchestrator:

**Slash command:** `/orchestrator`

**Or just say:** "I have a big task: [describe it]"

## When to Switch Out

Exit Orchestrator mode when:

- You want more direct control
- Tasks are simple and specific
- You're learning and want to understand each step
- Subtasks aren't matching what you need

---

<div className="row">
  <div className="col col--6">
    <a className="button button--secondary button--lg button--block" href="/utility-modes/debug-mode">
      ← Debug Mode
    </a>
  </div>
  <div className="col col--6">
    <a className="button button--primary button--lg button--block" href="/reference/modes-quick-ref">
      Quick Reference →
    </a>
  </div>
</div>

---

:::info Video Coming Soon
A walkthrough video for Orchestrator mode is in production. Check back soon or join our Discord for updates.
:::
