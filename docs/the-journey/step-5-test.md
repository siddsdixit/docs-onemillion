---
sidebar_position: 6
title: "Step 5: Test Mode"
description: Find and fix bugs before users do
---

# 🧪 Step 5: Test Mode

**Days 11-12 of your journey**

You've built your core features. Now it's time to break things—intentionally. Test mode helps you find bugs before your users do.

## Purpose

In Test mode, 1M Code acts as a **QA engineer**. It will:

- Help you systematically test all features
- Find edge cases you might have missed
- Guide you through fixing bugs
- Ensure quality before deployment

## When to Use This Mode

Use Test mode when:

- Core features are built and "working"
- You want to find bugs before users do
- You're checking edge cases
- You're verifying the app works as expected

## Available Tools

| Tool | Purpose |
|------|---------|
| `read` | Read code to understand behavior |
| `edit` | Fix bugs and improve code |
| `browser` | Research solutions |
| `command` | Run tests and check behavior |

## Example Prompts

### Systematic Testing

```
Help me test my water reminder app systematically. 
What scenarios should I check?
```

### Edge Cases

```
What edge cases should I test for my reminder timer? 
What could go wrong?
```

### Bug Investigation

```
When I set the timer to 30 minutes and close the browser, 
the timer doesn't work when I come back. Why?
```

### Fixing Issues

```
I found a bug: the counter shows -1 if you tap undo 
when the count is already 0. Help me fix it.
```

## The Testing Checklist

1M Code will guide you through testing:

### Happy Path Testing
Test the normal, expected usage:
- [ ] Set a reminder → notification appears
- [ ] Log water → counter increases
- [ ] View history → correct data shows

### Edge Case Testing
Test unusual but valid scenarios:
- [ ] What if the user sets a 0-minute interval?
- [ ] What if they log 100 glasses of water?
- [ ] What if they have no internet?

### Error Handling
Test what happens when things go wrong:
- [ ] What if storage is full?
- [ ] What if the notification permission is denied?
- [ ] What if data is corrupted?

### Cross-Device Testing
Test on different devices/browsers:
- [ ] Chrome on desktop
- [ ] Safari on iPhone
- [ ] Mobile browser responsiveness

## Common Bugs to Look For

### State Bugs
- Counter shows wrong number after refresh
- Settings don't save properly
- UI doesn't update after action

### UI Bugs
- Button doesn't respond to clicks
- Text is cut off on mobile
- Layout breaks on small screens

### Logic Bugs
- Timer counts wrong
- Calculations are off by one
- Features work in wrong order

### Edge Case Bugs
- App crashes with empty data
- Negative numbers where they shouldn't be
- Date/time issues around midnight

## Bug Report Format

When you find a bug, describe it clearly:

```
**Bug:** Counter goes negative

**Steps to reproduce:**
1. Open the app fresh
2. Tap "undo" button without logging any water
3. Counter shows -1

**Expected:** Counter should stay at 0
**Actual:** Counter shows -1

**Screenshot:** [if applicable]
```

## Fixing vs. Noting

Not every bug needs to be fixed for MVP:

### Fix Now (Blockers)
- App crashes
- Core feature doesn't work
- Data loss
- Security issues

### Fix Before Ship (Important)
- Confusing UX
- Common edge cases
- Obvious visual bugs

### Note for Later (Nice to Have)
- Rare edge cases
- Minor visual issues
- Optimization opportunities

## Output of This Phase

By the end of Test mode, you should have:

1. **Testing checklist** — completed and documented
2. **Bug list** — with severity (blocker/important/later)
3. **All blockers fixed**
4. **Confidence** that the app works for basic usage

## When to Move On

You're ready for **🔒 Guard** mode when:

- ✅ All blocker bugs are fixed
- ✅ Core features pass happy path testing
- ✅ Major edge cases are handled
- ✅ App doesn't crash during normal use
- ✅ You'd feel okay showing this to a friend

## Switching to Guard Mode

When you're ready, switch to Guard mode:

**Slash command:** `/guard`

**Or say:** "Testing complete. Let's check for security issues."

---

<div className="row">
  <div className="col col--6">
    <a className="button button--secondary button--lg button--block" href="/the-journey/step-4-build">
      ← Step 4: Build
    </a>
  </div>
  <div className="col col--6">
    <a className="button button--primary button--lg button--block" href="/the-journey/step-6-guard">
      Step 6: Guard →
    </a>
  </div>
</div>

---

:::info Video Coming Soon
A walkthrough video for Test mode is in production. Check back soon or join our Discord for updates.
:::
