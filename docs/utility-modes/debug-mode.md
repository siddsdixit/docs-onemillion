---
sidebar_position: 2
title: "Debug Mode"
description: Diagnose and fix errors systematically
---

# 🪲 Debug Mode

**Available anytime during your journey**

Something broken? Error message you don't understand? Debug mode helps you systematically diagnose and fix problems.

## Purpose

In Debug mode, 1M Code acts as a **troubleshooting expert**. It will:

- Analyze error messages and logs
- Systematically identify the root cause
- Guide you through fixes step by step
- Explain what went wrong and why

## When to Use This Mode

Use Debug mode when:

- You see an error message
- Something isn't working as expected
- Your app crashes or behaves strangely
- You're stuck and don't know what's wrong

## Available Tools

| Tool | Purpose |
|------|---------|
| `read` | Read code to find the bug |
| `edit` | Fix the issue |
| `browser` | Research error messages |
| `command` | Run diagnostics and tests |

Debug mode has **full tool access** because fixing bugs often requires making changes.

## Example Prompts

### Error Messages

```
I'm getting this error:
TypeError: Cannot read properties of undefined (reading 'map')

What does it mean and how do I fix it?
```

### Something's Not Working

```
When I click the submit button, nothing happens. 
No errors in the console. What could be wrong?
```

### Unexpected Behavior

```
The counter shows the wrong number after I refresh the page.
It should remember the count but it resets to 0.
```

### I'm Stuck

```
I've been trying to fix this for an hour. 
Here's what I've tried: [list]. 
What am I missing?
```

## The Debugging Process

1M Code follows a systematic approach:

### Step 1: Understand the Problem
"What exactly is happening vs. what should happen?"

### Step 2: Gather Information
"Let me read the relevant code and check the console."

### Step 3: Form a Hypothesis
"Based on the error, I think the issue is..."

### Step 4: Test the Hypothesis
"Let's add a console.log here to confirm..."

### Step 5: Fix and Verify
"Here's the fix. Let's test to make sure it works."

## How to Report Bugs

When something breaks, give 1M Code this information:

### 1. What You Expected
> "I expected the button to submit the form."

### 2. What Actually Happened
> "Nothing happens when I click it."

### 3. The Error (if any)
> "Console shows: TypeError: handleSubmit is not a function"

### 4. What You Were Doing
> "I just added the onClick handler."

### 5. What You've Tried
> "I tried restarting the server but same issue."

## Common Error Patterns

### "Cannot read properties of undefined"

**Meaning:** You're trying to use something that doesn't exist yet.

**Example:**
```javascript
// Bug: user is undefined
const name = user.name; // Error!

// Fix: check if user exists first
const name = user?.name || 'Guest';
```

### "X is not a function"

**Meaning:** You're trying to call something that isn't a function.

**Common causes:**
- Typo in function name
- Forgot to import the function
- Variable has wrong type

### "Module not found"

**Meaning:** You're trying to import something that doesn't exist.

**Common causes:**
- Typo in file path
- File doesn't exist
- Wrong folder

### "ENOENT: no such file or directory"

**Meaning:** A file or folder is missing.

**Common causes:**
- Wrong path
- File was deleted
- File was never created

## Debugging Mindset

### Don't Panic
Errors are normal. Every developer sees dozens of errors every day. They're clues, not failures.

### Read the Error
Most error messages tell you exactly what's wrong. Read them carefully before panicking.

### Change One Thing at a Time
If you change 5 things at once, you won't know which fixed the bug.

### Use console.log Generously
When confused, add console.log statements to see what's actually happening:
```javascript
console.log("Button clicked");
console.log("User value:", user);
```

### Take Breaks
Sometimes the best debugging happens after a 10-minute break.

## When to Use Debug vs. Build Mode

| Use Debug Mode | Use Build Mode |
|----------------|----------------|
| Something is broken | Adding new features |
| Error messages appear | Writing new code |
| Unexpected behavior | Making progress on tasks |
| Stuck and confused | Everything working normally |

## Switching to Debug Mode

When you encounter a problem, switch to Debug mode:

**Slash command:** `/debug`

**Or just say:** "I'm getting an error: [error message]"

## When to Switch Back

Return to your previous mode when:

- The bug is fixed
- You understand what went wrong
- You're ready to continue building

---

<div className="row">
  <div className="col col--6">
    <a className="button button--secondary button--lg button--block" href="/utility-modes/ask-mode">
      ← Ask Mode
    </a>
  </div>
  <div className="col col--6">
    <a className="button button--primary button--lg button--block" href="/utility-modes/orchestrator-mode">
      Orchestrator Mode →
    </a>
  </div>
</div>

---

:::info Video Coming Soon
A walkthrough video for Debug mode is in production. Check back soon or join our Discord for updates.
:::
