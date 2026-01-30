---
sidebar_position: 5
title: "Step 4: Build Mode"
description: Write code and bring your product to life
---

# 💻 Step 4: Build Mode

**Days 4-12 of your journey**

This is where the magic happens. Build mode is your main workspace for writing code, creating features, and bringing your product to life.

## Purpose

In Build mode, 1M Code acts as a **senior developer pair programmer**. It will:

- Write code for you based on your descriptions
- Explain code concepts when you're confused
- Debug issues as they arise
- Guide you through best practices

## When to Use This Mode

Use Build mode when:

- You're ready to write code
- You're implementing features from your PRD
- You need help with code you don't understand
- You're creating files and project structure

## Available Tools

| Tool | Purpose |
|------|---------|
| `read` | Read any file in your project |
| `edit` | Create and modify code files |
| `browser` | Research documentation and solutions |
| `command` | Run terminal commands (npm, git, etc.) |
| `mcp` | Use external tools and integrations |

Build mode has **full tool access**—this is where real development happens.

## Example Prompts

### Starting Development

```
Let's start building my water reminder app. 
Based on our plan, what should we build first?
```

### Creating Components

```
Create a React component for the reminder settings. 
Users should be able to set an interval (15, 30, 45, or 60 minutes).
```

### Implementing Features

```
Implement the water logging feature. 
When users tap a button, it should increment their daily count 
and save to local storage.
```

### Understanding Code

```
I don't understand this useEffect hook. 
Can you explain what it does in simple terms?
```

### Fixing Issues

```
The reminder notification isn't showing up. 
Here's my code. What's wrong?
```

## The Build Process

### 1. Start Simple
Don't try to build everything at once. Start with the most basic version:

```
First, let's create a static page that just shows a button.
Once that works, we'll add the actual functionality.
```

### 2. Build Incrementally
Add one feature at a time. Test after each addition:

```
Great, the button works. Now let's make it increment a counter.
```

### 3. See Progress Early
Get something visible on screen as fast as possible:

```
Can we see this in the browser? Run the development server.
```

### 4. Iterate
Build → Test → Fix → Repeat:

```
Okay, the counter works but resets on page refresh. 
Let's add local storage to persist it.
```

## What 1M Code Will Do

When you ask 1M Code to build something, it will:

1. **Understand your request** — Ask clarifying questions if needed
2. **Propose a solution** — Explain what it plans to do
3. **Write the code** — Create or modify files
4. **Explain the changes** — Help you understand what it wrote
5. **Run commands** — Install dependencies, start servers, etc.

### The Approval Flow

For each action, 1M Code will ask your permission:

```
I want to create a new file: src/components/ReminderSettings.tsx

[Approve] [Reject] [Edit]
```

- **Approve** — Let it proceed
- **Reject** — Stop and discuss alternatives
- **Edit** — Modify the proposed change

## Key Concepts for Beginners

### Components
In React, everything is a **component**—a reusable piece of UI.

```jsx
function WaterButton() {
  return <button>Drink Water</button>;
}
```

### State
**State** is data that changes over time, like a counter.

```jsx
const [count, setCount] = useState(0);
```

### Props
**Props** are how components receive data from parents.

```jsx
<WaterButton onClick={handleClick} />
```

Don't worry if these don't make sense yet. 1M Code will explain as you go.

## Common Mistakes

### Mistake 1: Trying to Understand Everything
**Problem:** Getting stuck trying to understand every line of code.
**Fix:** Focus on the "what," not the "how." You'll understand more over time.

### Mistake 2: Building Too Much at Once
**Problem:** Trying to implement 5 features before testing 1.
**Fix:** Build one thing, test it, then move on.

### Mistake 3: Ignoring Errors
**Problem:** Seeing a red error and hoping it goes away.
**Fix:** Share the error with 1M Code immediately. Errors are clues.

### Mistake 4: Not Saving Progress
**Problem:** Losing work because you didn't commit to git.
**Fix:** Commit frequently. "Save game" after each working feature.

## Working with Errors

Errors are normal. When you see one:

1. **Don't panic** — Errors are how we learn
2. **Read the message** — Often the error tells you exactly what's wrong
3. **Copy the full error** — Share it with 1M Code
4. **Explain what you were doing** — Context helps debugging

Example:

```
I'm getting this error when I click the button:

TypeError: Cannot read properties of undefined (reading 'count')

I was trying to increment the water counter.
```

## Progress Checkpoints

Good milestones to hit during Build mode:

- [ ] Project runs locally (`npm run dev` works)
- [ ] Basic UI is visible in browser
- [ ] Core feature #1 works
- [ ] Core feature #2 works
- [ ] Core feature #3 works
- [ ] All core features work together
- [ ] No major errors in console

## When to Move On

You're ready for **🧪 Test** mode when:

- ✅ All core MVP features work
- ✅ You can use the app as a user would
- ✅ The app runs without major errors
- ✅ You've committed your code to git

## Switching to Test Mode

When you're ready, switch to Test mode:

**Slash command:** `/test`

**Or say:** "Core features are working. Let's test and find bugs."

---

<div className="row">
  <div className="col col--6">
    <a className="button button--secondary button--lg button--block" href="/the-journey/step-3-plan">
      ← Step 3: Plan
    </a>
  </div>
  <div className="col col--6">
    <a className="button button--primary button--lg button--block" href="/the-journey/step-5-test">
      Step 5: Test →
    </a>
  </div>
</div>

---

:::info Video Coming Soon
A walkthrough video for Build mode is in production. Check back soon or join our Discord for updates.
:::
